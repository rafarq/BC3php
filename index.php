<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Visualizador BC3 Premium</title>
    <link rel="stylesheet" href="style.css?v=<?php echo filemtime('style.css'); ?>">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <div class="app-container">
        <header class="main-header">
            <a class="logo" href="./" aria-label="BC3 Viewer">
                <img src="bc3logo.png" alt="BC3 Viewer" class="logo-image">
            </a>
            <div class="upload-area">
                <form id="uploadForm">
                    <label for="bc3file" class="btn btn-primary upload-btn mobile-primary-upload">
                        <span class="file-name-label">Seleccionar .bc3 o .sysmed</span>
                    </label>
                    <button type="button" id="mobileActionsToggle" class="btn btn-secondary mobile-actions-toggle" data-icon="menu" data-trailing-icon="chevron-down" aria-expanded="false" aria-controls="headerActionsMenu">Acciones</button>
                    <div class="header-actions-menu" id="headerActionsMenu">
                    <div class="header-action-group" aria-label="Vista">
                        <button type="button" id="dashboardBtn" class="btn btn-secondary dashboard-btn is-hidden" data-icon="bar-chart-3">Dashboard</button>
                        <button type="button" id="planningBtn" class="btn btn-secondary planning-btn is-hidden" data-icon="calendar-days">Planning</button>
                    </div>
                    <div class="header-action-group" aria-label="Archivo">
                        <label for="bc3file" class="btn btn-primary upload-btn">
                            <span id="fileName" class="file-name-label">Seleccionar .bc3 o .sysmed</span>
                            <input type="file" id="bc3file" name="bc3file" accept=".bc3,.sysmed" hidden>
                        </label>
                        <button type="button" id="saveBtn" class="btn btn-success save-btn is-hidden">Guardar SYSmed</button>

                        <!-- Dropdown de exportación unificado -->
                        <div class="dropdown is-hidden" id="exportDropdown">
                            <button type="button" class="btn btn-secondary export-btn dropdown-toggle" data-icon="download" data-trailing-icon="chevron-down">Exportar</button>
                            <div class="dropdown-content">
                                <button type="button" id="exportBudgetBc3Btn" data-icon="file-text">Exportar presupuesto BC3</button>
                                <button type="button" id="exportPdfBtn" data-icon="file-text">Exportar a PDF</button>
                                <button type="button" id="exportExcelBtn" data-icon="file-spreadsheet">Exportar a Excel</button>
                            </div>
                        </div>
                        <button type="button" id="closeProjectBtn" class="btn btn-secondary close-project-btn is-hidden" data-icon="x">Cerrar</button>
                    </div>
                    <div class="header-action-group" aria-label="Herramientas">
                        <button type="button" id="compareBtn" class="btn btn-secondary compare-btn is-hidden">Comparar</button>
                    </div>
                    <div class="header-action-group header-action-group-last" aria-label="Tema">
                        <button type="button" id="themeToggle" class="btn btn-ghost theme-toggle-btn" data-icon-only="moon" aria-label="Cambiar tema"></button>
                    </div>
                    </div>
                </form>
            </div>
            <div class="project-info is-hidden" id="projectInfo">
                <div class="budget-totals-container">
                    <div class="budget-total" id="budgetTotal">PEM: 0,00 €</div>
                    <div class="budget-total pec-total is-hidden" id="budgetTotalPEC">PEC: 0,00 €</div>
                    <button type="button" id="toggleCoeffsBtn" class="coeffs-toggle-btn is-hidden" data-icon="settings">Coeficientes</button>
                </div>
                <div id="stats" class="project-stats"></div>
            </div>
        </header>

        <!-- Panel de Coeficientes Globales -->
        <div id="coeffsPanel" class="coeffs-panel is-hidden">
            <div class="coeffs-container">
                <h4>Ajustes de Presupuesto por Coeficientes</h4>
                <div class="coeffs-row">
                    <div class="coeff-field">
                        <label for="coeffGG">Gastos Generales (GG %):</label>
                        <input type="number" id="coeffGG" value="13" min="0" max="100" step="1">
                    </div>
                    <div class="coeff-field">
                        <label for="coeffBI">Beneficio Industrial (BI %):</label>
                        <input type="number" id="coeffBI" value="6" min="0" max="100" step="1">
                    </div>
                    <div class="coeff-field">
                        <label for="coeffBaja">Baja/Alza General (%):</label>
                        <input type="number" id="coeffBaja" value="0" min="-100" max="100" step="0.1">
                    </div>
                    <div class="coeff-actions">
                        <button type="button" id="applyCoeffsBtn" class="process-btn">Aplicar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pestañas de vista: Presupuesto / Certificaciones -->
        <nav class="view-tabs is-hidden" id="viewTabs" role="tablist" aria-label="Vistas del presupuesto">
            <button type="button" id="tabBudget" class="view-tab is-active" role="tab" aria-selected="true" aria-controls="contentArea" data-icon="file-text">Presupuesto</button>
            <button type="button" id="tabCert" class="view-tab" role="tab" aria-selected="false" aria-controls="certView" data-icon="clipboard-check">Certificaciones</button>
        </nav>

        <main class="content-area" id="contentArea" role="tabpanel" aria-labelledby="tabBudget">
            <div class="tree-panel" id="treePanel">
                <div class="empty-state">
                    <div class="empty-card">
                        <div class="empty-icon" data-icon-only="folder-up"></div>
                        <h1>Arrastra tu archivo .bc3 o .sysmed, o haz clic para seleccionarlo</h1>
                        <p>Abre un presupuesto BC3 o un proyecto SYSmed con todas sus certificaciones, revisa mediciones y exporta cada BC3 cuando lo necesites.</p>
                        <div class="empty-actions">
                            <label for="bc3file" class="btn btn-primary">Seleccionar .bc3 o .sysmed</label>
                            <button type="button" id="loadExampleBtn" class="btn btn-secondary" data-icon="file-spreadsheet">Cargar presupuesto de prueba</button>
                        </div>
                        <div class="empty-drop-hint">También puedes soltar el archivo directamente sobre esta ventana.</div>
                    </div>
                </div>
                <div class="search-bar-container is-hidden" id="searchBarContainer">
                    <input type="text" id="searchTerm" placeholder="Buscar partidas (título, código, medición...)"
                        autocomplete="off">
                </div>
                
                <!-- Barra de Filtros Avanzados -->
                <div class="filter-bar is-hidden" id="filterBar">
                    <div class="filter-group filter-chips">
                        <button type="button" id="expandAllBtn" class="filter-btn" aria-pressed="false">Expandir Todo</button>
                        <button type="button" id="undoBtn" class="filter-btn" data-icon-only="undo-2" disabled aria-label="Deshacer" title="Deshacer (Ctrl/Cmd+Z)">Deshacer</button>
                        <button type="button" id="redoBtn" class="filter-btn" data-icon-only="redo-2" disabled aria-label="Rehacer" title="Rehacer (Ctrl/Cmd+Y o Ctrl/Cmd+Shift+Z)">Rehacer</button>
                        <button type="button" id="filterSheetToggle" class="filter-btn filter-sheet-toggle" aria-expanded="false" aria-controls="filterSheet">Filtros<span id="filterCountBadge" class="filter-count-badge is-hidden">0</span></button>
                    </div>
                    <div class="filter-sheet-backdrop" id="filterSheetBackdrop"></div>
                    <div class="filter-sheet" id="filterSheet">
                        <div class="filter-sheet-header">
                            <span class="filter-sheet-title">Filtros</span>
                            <button type="button" id="closeFilterSheetBtn" class="close-btn" data-icon-only="x" aria-label="Cerrar filtros"></button>
                        </div>
                        <div class="filter-group">
                            <label for="costFilter">Filtrar por importe:</label>
                            <select id="costFilter" class="filter-select">
                                <option value="all">Todas las partidas</option>
                                <option value="1000">Importe > 1.000 €</option>
                                <option value="5000">Importe > 5.000 €</option>
                                <option value="10000">Importe > 10.000 €</option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label for="resourceFilter">Filtrar por recurso:</label>
                            <select id="resourceFilter" class="filter-select">
                                <option value="all">Todos los recursos</option>
                                <option value="mo">Mano de Obra (MO)</option>
                                <option value="mat">Materiales (MAT)</option>
                                <option value="maq">Maquinaria (MAQ)</option>
                                <option value="sub">Subcontratas (SUB)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="breadcrumb-container is-hidden" id="breadcrumbContainer">
                    <button class="breadcrumb-back" id="breadcrumbBack">← Volver</button>
                    <div class="breadcrumb-path" id="breadcrumbPath"></div>
                </div>
                <div id="treeContent"></div>
            </div>

            <div class="panel-divider" id="panelDivider" role="separator" aria-orientation="vertical" aria-label="Redimensionar panel de detalles" tabindex="0"></div>

            <div class="details-panel" id="detailsPanel">
                <div class="empty-state">Selecciona una partida para ver detalles</div>
                <div id="detailsContent" class="is-hidden">
                    <header class="details-header">
                        <div class="code-badge" id="detCode"></div>
                        <div class="price-tag" id="detPrice"></div>
                        <button type="button" id="closeDetailsBtn" class="close-btn details-close-btn" data-icon-only="x" aria-label="Cerrar panel de detalles"></button>
                        <h2 id="detSummary"></h2>
                    </header>

                    <div class="details-body">
                        <section class="section">
                            <h3>Descripción</h3>
                            <div class="description-box" id="detDescription"></div>
                        </section>

                        <section class="section is-hidden" id="detMeasurementsSection">
                            <h3>Mediciones</h3>
                            <div id="detMeasurements"></div>
                        </section>

                        <section class="section">
                            <h3>Descomposición</h3>
                            <div class="decomposition-table-wrapper">
                                <table class="decomposition-table">
                                    <thead>
                                        <tr>
                                            <th>Código</th>
                                            <th>Factor</th>
                                            <th>Concepto</th>
                                            <th>Precio</th>
                                            <th>Total</th>
                                            <th class="decomp-col-action" aria-label="Acciones"></th>
                                        </tr>
                                    </thead>
                                    <tbody id="detDecomposition">
                                        <!-- Rows injected by JS -->
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="4" class="text-right">Total Partida</td>
                                            <td id="detTotalCost"></td>
                                            <td class="decomp-col-action"></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>

        <!-- Vista de Certificaciones / Seguimiento de obra -->
        <section class="cert-view is-hidden" id="certView" role="tabpanel" aria-labelledby="tabCert">
            <div class="cert-controls">
                <label class="cert-month-label">Abrir o crear mes:
                    <input type="month" id="certMonth" class="cert-month-input">
                </label>
                <div class="cert-export-actions">
                    <button type="button" id="certExpandAllBtn" class="btn btn-secondary" aria-pressed="true">Contraer todo</button>
                    <label for="certImportFile" class="btn btn-secondary" data-icon="upload">Importar BC3</label>
                    <input type="file" id="certImportFile" accept=".bc3" hidden>
                    <button type="button" id="exportCertBc3Btn" class="btn btn-secondary" data-icon="download">BC3</button>
                    <button type="button" id="exportCertExcelBtn" class="btn btn-secondary" data-icon="file-spreadsheet">Excel</button>
                    <button type="button" id="exportCertPdfBtn" class="btn btn-secondary" data-icon="file-text">PDF</button>
                </div>
            </div>
            <nav class="cert-month-tabs" id="certMonthTabs" role="tablist" aria-label="Certificaciones por mes"></nav>
            <div class="cert-month-panel" id="certMonthPanel" role="tabpanel" tabindex="0">
                <div class="cert-summary" id="certSummary"></div>
                <div class="cert-table-wrap" id="certTableWrap"></div>
            </div>
        </section>

        <footer class="app-footer">
            <span class="footer-license">Licencia: <a href="LICENSE" class="footer-license-link">GNU Affero General Public License v3.0</a></span>
            <nav class="footer-links" aria-label="Enlaces del proyecto">
                <a href="https://bc3.sysarq.com/roadmap/" target="_blank" rel="noopener">Roadmap</a>
                <a href="changelog.php">Changelog</a>
                <span class="footer-version">V0.4.0 by <a href="https://www.systemarquitectura.com" target="_blank" rel="noopener">System Arquitectura</a></span>
            </nav>
        </footer>
    </div>
    <div id="notificationContainer" class="notification-container" aria-live="polite" aria-atomic="true"></div>

    <!-- Confirmación de cierre del presupuesto/medición actual -->
    <div id="closeProjectModal" class="modal is-hidden" role="dialog" aria-modal="true" aria-labelledby="closeProjectTitle" aria-describedby="closeProjectMessage">
        <div class="modal-content close-project-modal-content">
            <div class="modal-header">
                <h3 id="closeProjectTitle">Cerrar mediciones</h3>
                <button type="button" id="closeProjectDismissBtn" class="close-btn" data-icon-only="x" aria-label="Cancelar cierre"></button>
            </div>
            <div class="modal-body close-project-modal-body">
                <div class="close-project-format" id="closeProjectFormat"></div>
                <p id="closeProjectMessage"></p>
                <p class="close-project-warning">Si cierras sin guardar, se eliminará la sesión local que estás viendo.</p>
                <div class="close-project-actions">
                    <button type="button" id="closeProjectCancelBtn" class="btn btn-secondary">Cancelar</button>
                    <button type="button" id="closeProjectDiscardBtn" class="btn btn-danger">Cerrar sin guardar</button>
                    <button type="button" id="closeProjectSaveBtn" class="btn btn-success">Guardar y cerrar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Dashboard Modal -->
    <div id="dashboardModal" class="modal is-hidden">
        <div class="modal-content dashboard-modal-content">
            <div class="modal-header">
                <h3>Dashboard del Presupuesto</h3>
                <button type="button" id="closeDashboardBtn" class="close-btn" data-icon-only="x" aria-label="Cerrar dashboard"></button>
            </div>
            <div class="modal-body dashboard-grid">
                <div class="chart-card">
                    <h4>Distribución por Tipo de Coste (Mano de Obra, Materiales, etc)</h4>
                    <div class="chart-container">
                        <canvas id="resourceTypeChart"></canvas>
                    </div>
                </div>
                <div class="chart-card">
                    <h4>Capítulos Principales por Peso Económico (PEM)</h4>
                    <div class="chart-container">
                        <canvas id="chaptersCostChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Compare Modal -->
    <div id="compareModal" class="modal is-hidden">
        <div class="modal-content compare-modal-content">
            <div class="modal-header">
                <h3>Comparador de Presupuestos</h3>
                <button type="button" id="closeCompareBtn" class="close-btn" data-icon-only="x" aria-label="Cerrar comparador"></button>
            </div>
            <div class="modal-body">
                <p>Selecciona un segundo archivo <strong>.bc3</strong> para comparar y detectar desviaciones de precios e importes.</p>
                <div class="compare-upload-area">
                    <input type="file" id="compareFileInput" accept=".bc3" class="compare-file-input">
                    <button type="button" id="runCompareBtn" class="process-btn">Cargar y Comparar</button>
                </div>
                <div id="compareResults" class="compare-results is-hidden">
                    <div class="compare-stats">
                        <div class="stat-card">
                            <span class="stat-label">Diferencia Total</span>
                            <span id="compareTotalDiff" class="stat-value">0,00 € (0,00 %)</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-label">Partidas con Cambios</span>
                            <span id="compareModifiedCount" class="stat-value">0</span>
                        </div>
                    </div>
                    <button type="button" id="clearCompareBtn" class="clear-compare-btn">Quitar Comparación</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Planning / Gantt -->
    <div id="planningModal" class="planning-modal-overlay is-hidden">
        <div class="planning-modal-content">
            <div class="planning-modal-header">
                <div class="planning-modal-title" data-icon="calendar-days">Planning - Diagrama de Gantt</div>
                <div class="planning-controls">
                    <label>Inicio:
                        <input type="date" id="ganttStartDate" class="gantt-control-input">
                    </label>
                    <label>Semanas:
                        <input type="number" id="ganttWeeks" class="gantt-control-input gantt-weeks-input" value="26" min="4" max="156">
                    </label>
                    <button type="button" id="ganttResetBtn" class="gantt-action-btn" data-icon="rotate-ccw">Reiniciar</button>
                    <button type="button" id="exportGanttExcelBtn" class="gantt-action-btn gantt-excel-btn" data-icon="file-spreadsheet">Excel</button>
                    <button type="button" id="exportGanttPdfBtn" class="gantt-action-btn gantt-pdf-btn" data-icon="file-text">PDF</button>
                    <button type="button" id="closePlanningBtn" class="gantt-close-btn" data-icon="x">Cerrar</button>
                </div>
            </div>
            <div id="ganttContainer" class="gantt-container"></div>
        </div>
    </div>

    <div id="dragOverlay" class="drag-overlay">
        <div class="drag-overlay-box">
            <div class="drag-overlay-icon" data-icon-only="folder-up"></div>
            <div class="drag-overlay-text">Suelte el archivo .bc3 o .sysmed aquí para cargarlo</div>
        </div>
    </div>
    <script src="jspdf.umd.min.js"></script>
    <script src="jspdf.plugin.autotable.min.js"></script>
    <script src="chart.min.js"></script>
    <script src="xlsx.full.min.js"></script>
    <script src="app.js?v=<?php echo filemtime('app.js'); ?>"></script>
</body>

</html>
