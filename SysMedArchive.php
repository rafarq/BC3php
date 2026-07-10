<?php

require_once __DIR__ . '/BC3Parser.php';

/**
 * Lector y escritor del contenedor SYSmed v1.
 *
 * SYSmed es un ZIP versionado que conserva como documentos interoperables un
 * BC3 de presupuesto/medición y un BC3 acumulado a origen por certificación.
 */
final class SysMedArchive
{
    public const FORMAT = 'SYSmed';
    public const VERSION = 1;
    public const MIME = 'application/vnd.sysarq.sysmed+zip';
    public const MANIFEST_PATH = 'manifest.json';
    public const BUDGET_PATH = 'medicion.bc3';

    private const MAX_ENTRIES = 250;
    private const MAX_CERTIFICATIONS = 120;
    private const MAX_ENTRY_BYTES = 52428800; // 50 MiB
    private const MAX_TOTAL_BYTES = 209715200; // 200 MiB
    private const MAX_MANIFEST_BYTES = 1048576; // 1 MiB

    public static function isZipFile(string $path): bool
    {
        $handle = @fopen($path, 'rb');
        if ($handle === false) {
            return false;
        }
        $signature = fread($handle, 4);
        fclose($handle);
        return $signature === "PK\x03\x04" || $signature === "PK\x05\x06" || $signature === "PK\x07\x08";
    }

    /**
     * @param array<int,array{period:string,content:string}> $certifications
     * @param array<string,mixed> $options
     * @return array<string,mixed> Manifiesto escrito en el contenedor.
     */
    public static function createArchive(
        string $destination,
        string $budgetContent,
        string $budgetOriginalName,
        array $certifications,
        array $options = []
    ): array {
        self::requireZipSupport();
        self::assertBc3Content($budgetContent, 'La medición');

        if (count($certifications) > self::MAX_CERTIFICATIONS) {
            throw new InvalidArgumentException('El proyecto supera el máximo de certificaciones permitido.');
        }

        usort($certifications, static function (array $a, array $b): int {
            return strcmp((string) ($a['period'] ?? ''), (string) ($b['period'] ?? ''));
        });

        $seenPeriods = [];
        $certificationManifest = [];
        $normalizedCertifications = [];
        foreach ($certifications as $index => $certification) {
            $period = (string) ($certification['period'] ?? '');
            $content = (string) ($certification['content'] ?? '');
            if (!preg_match('/^\d{4}-(0[1-9]|1[0-2])$/', $period)) {
                throw new InvalidArgumentException('Una certificación contiene un mes no válido.');
            }
            if (isset($seenPeriods[$period])) {
                throw new InvalidArgumentException('El proyecto contiene certificaciones duplicadas para ' . $period . '.');
            }
            self::assertBc3Content($content, 'La certificación de ' . $period);

            $seenPeriods[$period] = true;
            $number = $index + 1;
            $path = 'certificaciones/Certificacion' . $number . '.bc3';
            $normalizedCertifications[] = [
                'period' => $period,
                'number' => $number,
                'path' => $path,
                'content' => $content,
            ];
            $certificationManifest[] = [
                'number' => $number,
                'month' => $period,
                'path' => $path,
                'quantityBasis' => 'cumulative-to-date',
                'mediaType' => 'application/x-bc3',
                'bytes' => strlen($content),
                'sha256' => hash('sha256', $content),
            ];
        }

        $packageId = self::normalizePackageId((string) ($options['package_id'] ?? ''));
        $revision = max(1, (int) ($options['revision'] ?? 1));
        $createdAt = self::normalizeIsoDate((string) ($options['created_at'] ?? '')) ?: gmdate('c');
        $projectName = trim((string) ($options['project_name'] ?? ''));
        if ($projectName === '') {
            $projectName = pathinfo($budgetOriginalName, PATHINFO_FILENAME) ?: 'Proyecto';
        }

        $manifest = [
            'format' => self::FORMAT,
            'formatVersion' => self::VERSION,
            'mimeType' => self::MIME,
            'packageId' => $packageId,
            'revision' => $revision,
            'createdAt' => $createdAt,
            'modifiedAt' => gmdate('c'),
            'generator' => [
                'name' => 'BC3 Viewer',
                'version' => '0.4.0',
            ],
            'project' => [
                'name' => mb_substr($projectName, 0, 200),
                'locale' => 'es-ES',
                'currency' => 'EUR',
            ],
            'budget' => [
                'path' => self::BUDGET_PATH,
                'originalName' => self::sanitizeDownloadName($budgetOriginalName, 'medicion.bc3'),
                'mediaType' => 'application/x-bc3',
                'bytes' => strlen($budgetContent),
                'sha256' => hash('sha256', $budgetContent),
            ],
            'certifications' => $certificationManifest,
            'extensions' => new stdClass(),
        ];

        $manifestJson = json_encode(
            $manifest,
            JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_THROW_ON_ERROR
        ) . "\n";

        $zip = new ZipArchive();
        $openResult = $zip->open($destination, ZipArchive::CREATE | ZipArchive::OVERWRITE);
        if ($openResult !== true) {
            throw new RuntimeException('No se ha podido crear el archivo SYSmed.');
        }

        try {
            // La primera entrada identifica el tipo de paquete aun sin mirar la extensión.
            $zip->addFromString('mimetype', self::MIME);
            if (method_exists($zip, 'setCompressionName')) {
                $zip->setCompressionName('mimetype', ZipArchive::CM_STORE);
            }
            $zip->addFromString(self::MANIFEST_PATH, $manifestJson);
            $zip->addFromString(self::BUDGET_PATH, $budgetContent);
            $zip->addEmptyDir('certificaciones');

            foreach ($normalizedCertifications as $certification) {
                $zip->addFromString($certification['path'], $certification['content']);
            }
        } finally {
            $zip->close();
        }

        return $manifest;
    }

    /**
     * @return array{data:array<string,mixed>,sysmed:array<string,mixed>}
     */
    public static function openArchive(string $path): array
    {
        self::requireZipSupport();
        $zip = new ZipArchive();
        $openResult = $zip->open($path);
        if ($openResult !== true) {
            throw new InvalidArgumentException('El archivo SYSmed no es un ZIP válido.');
        }

        try {
            self::validateArchiveBounds($zip);

            if ($zip->getNameIndex(0) !== 'mimetype') {
                throw new InvalidArgumentException('La primera entrada del archivo debe identificar el tipo SYSmed.');
            }
            $mimeStat = $zip->statName('mimetype');
            if (is_array($mimeStat)
                && isset($mimeStat['comp_method'])
                && (int) $mimeStat['comp_method'] !== ZipArchive::CM_STORE
            ) {
                throw new InvalidArgumentException('La firma mimetype de SYSmed no debe estar comprimida.');
            }

            $mime = self::readEntry($zip, 'mimetype', 256);
            if (trim($mime) !== self::MIME) {
                throw new InvalidArgumentException('El archivo no contiene la firma SYSmed esperada.');
            }

            $manifestJson = self::readEntry($zip, self::MANIFEST_PATH, self::MAX_MANIFEST_BYTES);
            try {
                $manifest = json_decode($manifestJson, true, 32, JSON_THROW_ON_ERROR);
            } catch (JsonException $e) {
                throw new InvalidArgumentException('El manifiesto SYSmed no contiene JSON válido.');
            }
            self::validateManifest($manifest);

            $budgetMeta = $manifest['budget'];
            $budgetPath = (string) $budgetMeta['path'];
            $budgetContent = self::readEntry($zip, $budgetPath, self::MAX_ENTRY_BYTES);
            self::verifyEntry($budgetContent, $budgetMeta, 'la medición');
            $budgetData = self::parseBc3Content($budgetContent);

            $certifications = [];
            $seenMonths = [];
            $seenPaths = [];
            $seenNumbers = [];
            foreach ($manifest['certifications'] as $certificationMeta) {
                self::validateCertificationMeta($certificationMeta);
                $month = (string) $certificationMeta['month'];
                $certificationPath = (string) $certificationMeta['path'];
                $number = (int) $certificationMeta['number'];
                if (isset($seenMonths[$month]) || isset($seenPaths[$certificationPath]) || isset($seenNumbers[$number])) {
                    throw new InvalidArgumentException('El manifiesto SYSmed contiene certificaciones duplicadas.');
                }
                $seenMonths[$month] = true;
                $seenPaths[$certificationPath] = true;
                $seenNumbers[$number] = true;

                $content = self::readEntry($zip, $certificationPath, self::MAX_ENTRY_BYTES);
                self::verifyEntry($content, $certificationMeta, 'la certificación de ' . $month);
                $parsedCertification = self::parseBc3Content($content);
                $certifications[] = [
                    'number' => $number,
                    'month' => $month,
                    'path' => $certificationPath,
                    'quantities' => self::extractMeasurementQuantities($parsedCertification),
                ];
            }

            usort($certifications, static function (array $a, array $b): int {
                return strcmp($a['month'], $b['month']);
            });

            return [
                'data' => $budgetData,
                'sysmed' => [
                    'manifest' => $manifest,
                    'certifications' => $certifications,
                ],
            ];
        } finally {
            $zip->close();
        }
    }

    private static function requireZipSupport(): void
    {
        if (!class_exists('ZipArchive')) {
            throw new RuntimeException('El servidor necesita la extensión PHP ZipArchive para usar archivos SYSmed.');
        }
    }

    private static function validateArchiveBounds(ZipArchive $zip): void
    {
        if ($zip->numFiles > self::MAX_ENTRIES) {
            throw new InvalidArgumentException('El archivo SYSmed contiene demasiadas entradas.');
        }

        $totalBytes = 0;
        $seenNames = [];
        for ($index = 0; $index < $zip->numFiles; $index++) {
            $stat = $zip->statIndex($index);
            if (!is_array($stat) || !isset($stat['name'])) {
                throw new InvalidArgumentException('No se ha podido inspeccionar el contenido SYSmed.');
            }
            $name = (string) $stat['name'];
            self::assertSafePath($name);
            if (isset($seenNames[$name])) {
                throw new InvalidArgumentException('El archivo SYSmed contiene rutas duplicadas.');
            }
            $seenNames[$name] = true;

            $size = (int) ($stat['size'] ?? 0);
            $compressedSize = (int) ($stat['comp_size'] ?? 0);
            if ($size > self::MAX_ENTRY_BYTES && $name !== self::MANIFEST_PATH) {
                throw new InvalidArgumentException('Una entrada del archivo SYSmed es demasiado grande.');
            }
            if ($compressedSize > 0 && $size > 1048576 && $size > $compressedSize * 200) {
                throw new InvalidArgumentException('El archivo SYSmed contiene una compresión anómala.');
            }
            if (!empty($stat['encryption_method'])) {
                throw new InvalidArgumentException('Los archivos SYSmed cifrados no son compatibles.');
            }
            $totalBytes += $size;
            if ($totalBytes > self::MAX_TOTAL_BYTES) {
                throw new InvalidArgumentException('El contenido descomprimido de SYSmed es demasiado grande.');
            }
        }
    }

    /** @param mixed $manifest */
    private static function validateManifest($manifest): void
    {
        if (!is_array($manifest)
            || ($manifest['format'] ?? null) !== self::FORMAT
            || (int) ($manifest['formatVersion'] ?? 0) !== self::VERSION
            || ($manifest['mimeType'] ?? null) !== self::MIME
        ) {
            throw new InvalidArgumentException('La versión del archivo SYSmed no es compatible.');
        }
        if (!preg_match('/^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i', (string) ($manifest['packageId'] ?? ''))
            || (int) ($manifest['revision'] ?? 0) < 1
        ) {
            throw new InvalidArgumentException('El manifiesto SYSmed no contiene una identidad de paquete válida.');
        }
        if (!isset($manifest['budget']) || !is_array($manifest['budget'])) {
            throw new InvalidArgumentException('El manifiesto SYSmed no define la medición principal.');
        }
        if (($manifest['budget']['path'] ?? null) !== self::BUDGET_PATH) {
            throw new InvalidArgumentException('La medición principal de SYSmed debe estar en medicion.bc3.');
        }
        if (!isset($manifest['certifications']) || !is_array($manifest['certifications'])) {
            throw new InvalidArgumentException('El manifiesto SYSmed no contiene una lista de certificaciones válida.');
        }
        if (count($manifest['certifications']) > self::MAX_CERTIFICATIONS) {
            throw new InvalidArgumentException('El archivo SYSmed contiene demasiadas certificaciones.');
        }
    }

    /** @param mixed $meta */
    private static function validateCertificationMeta($meta): void
    {
        if (!is_array($meta)
            || !isset($meta['number'], $meta['month'], $meta['path'])
            || (int) $meta['number'] < 1
            || !preg_match('/^\d{4}-(0[1-9]|1[0-2])$/', (string) $meta['month'])
            || ($meta['quantityBasis'] ?? null) !== 'cumulative-to-date'
        ) {
            throw new InvalidArgumentException('El manifiesto contiene una certificación no válida.');
        }
        $path = (string) $meta['path'];
        self::assertSafePath($path);
        if (strpos($path, 'certificaciones/') !== 0 || strtolower(substr($path, -4)) !== '.bc3') {
            throw new InvalidArgumentException('Una certificación SYSmed está fuera de su carpeta permitida.');
        }
    }

    /** @param array<string,mixed> $meta */
    private static function verifyEntry(string $content, array $meta, string $label): void
    {
        if (isset($meta['bytes']) && (int) $meta['bytes'] !== strlen($content)) {
            throw new InvalidArgumentException('El tamaño de ' . $label . ' no coincide con el manifiesto.');
        }
        $expectedHash = strtolower((string) ($meta['sha256'] ?? ''));
        if (!preg_match('/^[a-f0-9]{64}$/', $expectedHash)
            || !hash_equals($expectedHash, hash('sha256', $content))
        ) {
            throw new InvalidArgumentException('La integridad de ' . $label . ' no coincide con el manifiesto.');
        }
        self::assertBc3Content($content, ucfirst($label));
    }

    private static function readEntry(ZipArchive $zip, string $name, int $maxBytes): string
    {
        self::assertSafePath($name);
        $stat = $zip->statName($name);
        if (!is_array($stat)) {
            throw new InvalidArgumentException('Falta la entrada obligatoria ' . $name . ' en el archivo SYSmed.');
        }
        if ((int) ($stat['size'] ?? 0) > $maxBytes) {
            throw new InvalidArgumentException('La entrada ' . $name . ' supera el tamaño permitido.');
        }
        $content = $zip->getFromName($name);
        if ($content === false) {
            throw new InvalidArgumentException('No se ha podido leer ' . $name . ' dentro de SYSmed.');
        }
        return $content;
    }

    private static function assertSafePath(string $path): void
    {
        if ($path === ''
            || $path[0] === '/'
            || strpos($path, '\\') !== false
            || preg_match('#(^|/)\.\.(/|$)#', $path)
            || strpos($path, "\0") !== false
        ) {
            throw new InvalidArgumentException('El archivo SYSmed contiene una ruta interna no segura.');
        }
    }

    private static function assertBc3Content(string $content, string $label): void
    {
        if ($content === '' || strlen($content) > self::MAX_ENTRY_BYTES || strpos(ltrim($content), '~') !== 0) {
            throw new InvalidArgumentException($label . ' no contiene un BC3 válido.');
        }
    }

    /** @return array<string,mixed> */
    private static function parseBc3Content(string $content): array
    {
        $tempPath = tempnam(sys_get_temp_dir(), 'sysmed_bc3_');
        if ($tempPath === false || file_put_contents($tempPath, $content) === false) {
            throw new RuntimeException('No se ha podido preparar un BC3 del archivo SYSmed.');
        }
        try {
            $parser = new BC3Parser($tempPath);
            return $parser->parse();
        } finally {
            @unlink($tempPath);
        }
    }

    /**
     * @param array<string,mixed> $parsed
     * @return array<string,float>
     */
    private static function extractMeasurementQuantities(array $parsed): array
    {
        $quantities = [];
        foreach (($parsed['concepts'] ?? []) as $code => $concept) {
            if (!is_array($concept) || !isset($concept['measurements']) || !is_array($concept['measurements'])) {
                continue;
            }
            $total = 0.0;
            foreach ($concept['measurements'] as $measurement) {
                if (!is_array($measurement)) {
                    continue;
                }
                $total += self::measurementFactor($measurement['units'] ?? '')
                    * self::measurementFactor($measurement['l'] ?? '')
                    * self::measurementFactor($measurement['w'] ?? '')
                    * self::measurementFactor($measurement['h'] ?? '');
            }
            $quantities[(string) $code] = round($total, 6);
        }
        return $quantities;
    }

    /** @param mixed $value */
    private static function measurementFactor($value): float
    {
        if ($value === '' || $value === null) {
            return 1.0;
        }
        $normalized = str_replace(',', '.', (string) $value);
        return is_numeric($normalized) ? (float) $normalized : 1.0;
    }

    private static function normalizePackageId(string $packageId): string
    {
        if (preg_match('/^urn:uuid:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i', $packageId)) {
            return strtolower($packageId);
        }
        $bytes = random_bytes(16);
        $bytes[6] = chr((ord($bytes[6]) & 0x0f) | 0x40);
        $bytes[8] = chr((ord($bytes[8]) & 0x3f) | 0x80);
        $hex = bin2hex($bytes);
        return 'urn:uuid:' . substr($hex, 0, 8) . '-' . substr($hex, 8, 4) . '-'
            . substr($hex, 12, 4) . '-' . substr($hex, 16, 4) . '-' . substr($hex, 20);
    }

    private static function normalizeIsoDate(string $value): ?string
    {
        if ($value === '') {
            return null;
        }
        try {
            return (new DateTimeImmutable($value))->setTimezone(new DateTimeZone('UTC'))->format('c');
        } catch (Exception $e) {
            return null;
        }
    }

    private static function sanitizeDownloadName(string $name, string $fallback): string
    {
        $name = trim(str_replace(["\r", "\n", "\0"], '', basename($name)));
        if ($name === '' || strtolower(pathinfo($name, PATHINFO_EXTENSION)) !== 'bc3') {
            return $fallback;
        }
        return mb_substr($name, 0, 240);
    }
}
