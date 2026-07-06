<?php
$changelogPath = __DIR__ . '/CHANGELOG.md';
$rawMarkdown = is_readable($changelogPath) ? file($changelogPath, FILE_IGNORE_NEW_LINES) : [];

function collectMarkdownReferences(array $lines): array
{
    $references = [];
    foreach ($lines as $line) {
        if (preg_match('/^\[([^\]]+)\]:\s*(https?:\/\/\S+)$/', trim($line), $matches)) {
            $references[$matches[1]] = $matches[2];
        }
    }
    return $references;
}

function renderInlineMarkdown(string $text, array $references): string
{
    $escaped = htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
    $escaped = preg_replace('/`([^`]+)`/', '<code>$1</code>', $escaped);
    $escaped = preg_replace_callback('/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/', function ($matches) {
        $label = htmlspecialchars($matches[1], ENT_QUOTES, 'UTF-8');
        $url = htmlspecialchars($matches[2], ENT_QUOTES, 'UTF-8');
        return '<a href="' . $url . '" target="_blank" rel="noopener">' . $label . '</a>';
    }, $escaped);
    $escaped = preg_replace_callback('/\[([^\]]+)\]\[([^\]]+)\]/', function ($matches) use ($references) {
        $label = $matches[1];
        $ref = $matches[2];
        if (!isset($references[$ref])) {
            return $matches[0];
        }
        $url = htmlspecialchars($references[$ref], ENT_QUOTES, 'UTF-8');
        return '<a href="' . $url . '" target="_blank" rel="noopener">' . $label . '</a>';
    }, $escaped);
    $escaped = preg_replace_callback('/\[([^\]]+)\]/', function ($matches) use ($references) {
        $label = $matches[1];
        if (!isset($references[$label])) {
            return $matches[0];
        }
        $url = htmlspecialchars($references[$label], ENT_QUOTES, 'UTF-8');
        return '<a href="' . $url . '" target="_blank" rel="noopener">' . $label . '</a>';
    }, $escaped);
    return $escaped;
}

function renderChangelog(array $lines): string
{
    $html = '';
    $inList = false;
    $references = collectMarkdownReferences($lines);

    foreach ($lines as $line) {
        $trimmed = trim($line);

        if ($trimmed === '') {
            if ($inList) {
                $html .= "</ul>\n";
                $inList = false;
            }
            continue;
        }

        if ($trimmed === '---') {
            if ($inList) {
                $html .= "</ul>\n";
                $inList = false;
            }
            $html .= "<hr>\n";
            continue;
        }

        if (preg_match('/^\[([^\]]+)\]:\s*(https?:\/\/\S+)$/', $trimmed, $matches)) {
            if ($inList) {
                $html .= "</ul>\n";
                $inList = false;
            }
            continue;
        }

        if (str_starts_with($trimmed, '# ')) {
            if ($inList) {
                $html .= "</ul>\n";
                $inList = false;
            }
            $html .= '<h1>' . renderInlineMarkdown(substr($trimmed, 2), $references) . "</h1>\n";
            continue;
        }

        if (str_starts_with($trimmed, '## ')) {
            if ($inList) {
                $html .= "</ul>\n";
                $inList = false;
            }
            $html .= '<h2>' . renderInlineMarkdown(substr($trimmed, 3), $references) . "</h2>\n";
            continue;
        }

        if (str_starts_with($trimmed, '### ')) {
            if ($inList) {
                $html .= "</ul>\n";
                $inList = false;
            }
            $html .= '<h3>' . renderInlineMarkdown(substr($trimmed, 4), $references) . "</h3>\n";
            continue;
        }

        if (str_starts_with($trimmed, '- ')) {
            if (!$inList) {
                $html .= "<ul>\n";
                $inList = true;
            }
            $html .= '<li>' . renderInlineMarkdown(substr($trimmed, 2), $references) . "</li>\n";
            continue;
        }

        if ($inList) {
            $html .= "</ul>\n";
            $inList = false;
        }
        $html .= '<p>' . renderInlineMarkdown($trimmed, $references) . "</p>\n";
    }

    if ($inList) {
        $html .= "</ul>\n";
    }

    return $html;
}

$renderedChangelog = renderChangelog($rawMarkdown);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Changelog - BC3 Viewer</title>
    <link rel="stylesheet" href="style.css?v=<?php echo filemtime(__DIR__ . '/style.css'); ?>">
</head>
<body class="changelog-page">
    <main class="changelog-shell">
        <header class="changelog-header">
            <a href="index.php" class="back-link">Volver al visor</a>
            <p class="changelog-kicker">BC3 Viewer</p>
            <h1>Changelog</h1>
            <p>Historial de cambios publicado desde el fichero <code>CHANGELOG.md</code>.</p>
        </header>
        <article class="changelog-content">
            <?php echo $renderedChangelog ?: '<p>No se ha podido leer el changelog.</p>'; ?>
        </article>
    </main>
</body>
</html>
