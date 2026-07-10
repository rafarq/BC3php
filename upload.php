<?php
header('Content-Type: application/json; charset=utf-8');
require_once 'BC3Parser.php';
require_once 'SysMedArchive.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

if (!isset($_FILES['bc3file']) || $_FILES['bc3file']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'No file uploaded or upload error']);
    exit;
}

try {
    $tempPath = $_FILES['bc3file']['tmp_name'];
    $originalName = (string) ($_FILES['bc3file']['name'] ?? '');
    $extension = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));

    if ($extension === 'sysmed' || SysMedArchive::isZipFile($tempPath)) {
        $package = SysMedArchive::openArchive($tempPath);
        echo json_encode([
            'success' => true,
            'data' => $package['data'],
            'sysmed' => $package['sysmed']
        ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    $parser = new BC3Parser($tempPath);
    $data = $parser->parse();

    echo json_encode([
        'success' => true,
        'data' => $data
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
} catch (InvalidArgumentException $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
