<?php

require_once __DIR__ . '/SysMedArchive.php';

function sysmedJsonError(string $message, int $status = 400): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['success' => false, 'error' => $message], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sysmedJsonError('Method not allowed', 405);
}

if (!isset($_FILES['medicion']) || $_FILES['medicion']['error'] !== UPLOAD_ERR_OK) {
    sysmedJsonError('No se ha recibido la medición BC3 principal.');
}

$tempArchive = null;
try {
    $budgetContent = file_get_contents($_FILES['medicion']['tmp_name']);
    if ($budgetContent === false) {
        throw new RuntimeException('No se ha podido leer la medición BC3.');
    }

    $periods = json_decode((string) ($_POST['certification_periods'] ?? '[]'), true, 32, JSON_THROW_ON_ERROR);
    if (!is_array($periods)) {
        throw new InvalidArgumentException('La lista de meses de certificación no es válida.');
    }

    $certifications = [];
    $files = $_FILES['certifications'] ?? null;
    $fileNames = is_array($files['name'] ?? null) ? $files['name'] : [];
    $tempNames = is_array($files['tmp_name'] ?? null) ? $files['tmp_name'] : [];
    $errors = is_array($files['error'] ?? null) ? $files['error'] : [];
    if (count($fileNames) !== count($periods)) {
        throw new InvalidArgumentException('El número de certificaciones no coincide con los meses indicados.');
    }

    foreach ($periods as $index => $period) {
        if (($errors[$index] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK || !isset($tempNames[$index])) {
            throw new InvalidArgumentException('No se ha recibido correctamente una de las certificaciones.');
        }
        $content = file_get_contents($tempNames[$index]);
        if ($content === false) {
            throw new RuntimeException('No se ha podido leer una de las certificaciones BC3.');
        }
        $certifications[] = ['period' => (string) $period, 'content' => $content];
    }

    $tempArchive = tempnam(sys_get_temp_dir(), 'sysmed_');
    if ($tempArchive === false) {
        throw new RuntimeException('No se ha podido crear el archivo temporal SYSmed.');
    }

    $manifest = SysMedArchive::createArchive(
        $tempArchive,
        $budgetContent,
        (string) ($_POST['budget_original_name'] ?? 'medicion.bc3'),
        $certifications,
        [
            'package_id' => (string) ($_POST['package_id'] ?? ''),
            'revision' => (int) ($_POST['revision'] ?? 1),
            'created_at' => (string) ($_POST['created_at'] ?? ''),
            'project_name' => (string) ($_POST['project_name'] ?? ''),
        ]
    );

    $downloadBase = trim((string) ($_POST['download_name'] ?? 'proyecto'));
    $downloadBase = preg_replace('/[^A-Za-z0-9._-]+/u', '_', $downloadBase) ?: 'proyecto';
    $downloadBase = preg_replace('/\.sysmed$/i', '', $downloadBase) ?: 'proyecto';
    $downloadName = mb_substr($downloadBase, 0, 180) . '.sysmed';

    header('Content-Type: ' . SysMedArchive::MIME);
    header('Content-Length: ' . filesize($tempArchive));
    header('Content-Disposition: attachment; filename="' . $downloadName . '"; filename*=UTF-8\'\'' . rawurlencode($downloadName));
    header('X-SysMed-Package-Id: ' . $manifest['packageId']);
    header('X-SysMed-Revision: ' . $manifest['revision']);
    header('X-SysMed-Created-At: ' . $manifest['createdAt']);
    readfile($tempArchive);
} catch (JsonException $e) {
    if ($tempArchive) {
        @unlink($tempArchive);
    }
    sysmedJsonError('La lista de meses de certificación no contiene JSON válido.');
} catch (InvalidArgumentException $e) {
    if ($tempArchive) {
        @unlink($tempArchive);
    }
    sysmedJsonError($e->getMessage());
} catch (Throwable $e) {
    if ($tempArchive) {
        @unlink($tempArchive);
    }
    sysmedJsonError($e->getMessage(), 500);
}

if ($tempArchive) {
    @unlink($tempArchive);
}
