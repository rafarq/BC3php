const UI_ICONS = {
    'bar-chart-3': '<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
    'calendar-days': '<svg viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>',
    'chevron-down': '<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
    'chevron-right': '<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>',
    'download': '<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
    'file-spreadsheet': '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h8"/><path d="M10 9H8"/></svg>',
    'file-text': '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>',
    'folder-up': '<svg viewBox="0 0 24 24"><path d="M12 10v6"/><path d="m9 13 3-3 3 3"/><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.7-.9L9.6 3.9A2 2 0 0 0 7.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>',
    'menu': '<svg viewBox="0 0 24 24"><path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/></svg>',
    'moon': '<svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z"/></svg>',
    'pencil': '<svg viewBox="0 0 24 24"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>',
    'redo-2': '<svg viewBox="0 0 24 24"><path d="m15 14 5-5-5-5"/><path d="M20 9H9a5 5 0 0 0 0 10h1"/></svg>',
    'rotate-ccw': '<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',
    'settings': '<svg viewBox="0 0 24 24"><path d="M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.4.2a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 0-2.7.7l-.2.3a2 2 0 0 0 .7 2.7l.2.1a2 2 0 0 1 1 1.7v.5a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 0-.7 2.7l.2.3a2 2 0 0 0 2.7.7l.2-.1a2 2 0 0 1 2 0l.4.2a2 2 0 0 1 1 1.7v.2a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.4-.2a2 2 0 0 1 2 0l.2.1a2 2 0 0 0 2.7-.7l.2-.3a2 2 0 0 0-.7-2.7l-.2-.1a2 2 0 0 1-1-1.7v-.5a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 0 .7-2.7l-.2-.3a2 2 0 0 0-2.7-.7l-.2.1a2 2 0 0 1-2 0l-.4-.2a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/></svg>',
    'sun': '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>',
    'undo-2': '<svg viewBox="0 0 24 24"><path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-1"/></svg>',
    'x': '<svg viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    'plus': '<svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
    'copy': '<svg viewBox="0 0 24 24"><rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
    'trash-2': '<svg viewBox="0 0 24 24"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>',
    'clipboard-check': '<svg viewBox="0 0 24 24"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>',
    'history': '<svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>',
    'more-vertical': '<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>',
    'upload': '<svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>'
};

function iconSvg(name, className = 'ui-icon') {
    const svg = UI_ICONS[name] || '';
    return svg ? `<span class="${className}" aria-hidden="true">${svg}</span>` : '';
}

function applyIcon(el) {
    const icon = el.dataset.icon || el.dataset.iconOnly;
    if (!icon) return;

    const label = el.textContent.trim();
    const trailingIcon = el.dataset.trailingIcon;

    if (el.dataset.iconOnly) {
        el.innerHTML = iconSvg(icon);
        el.title = el.title || el.getAttribute('aria-label') || '';
        return;
    }

    el.innerHTML = `${iconSvg(icon)}<span>${label}</span>${trailingIcon ? iconSvg(trailingIcon, 'ui-icon trailing-icon') : ''}`;
}

function setThemeIcon(isDark) {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.innerHTML = iconSvg(isDark ? 'sun' : 'moon');
}

function selectElementContents(el) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

function enableDoubleClickEditing(el, options = {}) {
    const { selectOnEdit = false } = options;
    let longPressTimer = null;
    let longPressStart = null;
    let suppressNextClick = false;

    const clearLongPressTimer = () => {
        if (longPressTimer) {
            clearTimeout(longPressTimer);
            longPressTimer = null;
        }
        longPressStart = null;
    };

    const enterEditMode = () => {
        el.contentEditable = 'true';
        el.classList.add('is-editing');
        el.focus();
        if (selectOnEdit) {
            selectElementContents(el);
        }
    };

    el.contentEditable = 'false';
    el.classList.add('inline-editable');
    el.title = el.title || 'Doble clic para editar';

    el.addEventListener('click', (e) => {
        if (isMobileMode()) {
            if (suppressNextClick || el.isContentEditable) {
                e.preventDefault();
                e.stopPropagation();
                suppressNextClick = false;
            }
            return;
        }
        e.stopPropagation();
    });

    el.addEventListener('dblclick', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (isMobileMode()) return;
        enterEditMode();
    });

    el.addEventListener('pointerdown', (e) => {
        if (!isMobileMode() || e.pointerType === 'mouse' || el.isContentEditable) return;
        longPressStart = { x: e.clientX, y: e.clientY };
        longPressTimer = setTimeout(() => {
            suppressNextClick = true;
            enterEditMode();
        }, 520);
    });

    el.addEventListener('pointermove', (e) => {
        if (!longPressStart) return;
        const dx = Math.abs(e.clientX - longPressStart.x);
        const dy = Math.abs(e.clientY - longPressStart.y);
        if (dx > 8 || dy > 8) {
            clearLongPressTimer();
        }
    });

    el.addEventListener('pointerup', clearLongPressTimer);
    el.addEventListener('pointercancel', clearLongPressTimer);
    el.addEventListener('pointerleave', clearLongPressTimer);

    el.addEventListener('contextmenu', (e) => {
        if (!isMobileMode()) return;
        e.preventDefault();
    });

    el.addEventListener('blur', () => {
        el.contentEditable = 'false';
        el.classList.remove('is-editing');
    });

    // Permite activar la edición desde fuera (p. ej. botón de lápiz en móvil)
    return { enterEditMode };
}

// Botón de lápiz explícito para activar la edición en pantallas táctiles,
// donde el doble toque / pulsación larga es poco descubrible.
function createEditPencilButton(editableHandle, label) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'edit-pencil-btn';
    btn.setAttribute('aria-label', label);
    btn.title = label;
    btn.innerHTML = iconSvg('pencil');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        editableHandle.enterEditMode();
    });
    return btn;
}

document.querySelectorAll('[data-icon], [data-icon-only]').forEach(applyIcon);

const uploadForm = document.getElementById('uploadForm');
const mobileActionsToggle = document.getElementById('mobileActionsToggle');
const headerActionsMenu = document.getElementById('headerActionsMenu');

function setSelectedFileName(name) {
    document.querySelectorAll('.file-name-label').forEach(label => {
        label.textContent = name;
    });
}

function closeHeaderActionsMenu() {
    if (!uploadForm || !mobileActionsToggle) return;
    uploadForm.classList.remove('actions-open');
    mobileActionsToggle.setAttribute('aria-expanded', 'false');
}

if (uploadForm && mobileActionsToggle && headerActionsMenu) {
    mobileActionsToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = uploadForm.classList.toggle('actions-open');
        mobileActionsToggle.setAttribute('aria-expanded', String(isOpen));
    });

    headerActionsMenu.addEventListener('click', (e) => {
        if (e.target.closest('button')) {
            closeHeaderActionsMenu();
        }
    });

    window.addEventListener('click', (e) => {
        if (!uploadForm.contains(e.target)) {
            closeHeaderActionsMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeHeaderActionsMenu();
        }
    });
}

// 1. File Input Change
const fileInput = document.getElementById('bc3file');
const EXAMPLE_BC3_FILE = 'presupuesto-prueba.bc3';
let currentFileName = "presupuesto.bc3";
let currentBudgetFileName = "presupuesto.bc3";
let currentSysMedManifest = null;
let isProcessingFile = false;
if (fileInput) {
    fileInput.addEventListener('change', function (e) {
        if (this.files && this.files.length > 0) {
            const file = this.files[0];
            currentFileName = file.name;
            setSelectedFileName(currentFileName);
            processBc3File(file, uploadForm ? uploadForm.querySelector('.process-btn') : null);
        }
    });
}

const loadExampleBtn = document.getElementById('loadExampleBtn');
if (loadExampleBtn) {
    loadExampleBtn.addEventListener('click', async () => {
        const originalHtml = loadExampleBtn.innerHTML;
        try {
            loadExampleBtn.disabled = true;
            loadExampleBtn.textContent = 'Cargando...';

            const response = await fetch(EXAMPLE_BC3_FILE, { cache: 'no-store' });
            if (!response.ok) throw new Error('No se ha podido cargar el presupuesto de ejemplo');

            const blob = await response.blob();
            const exampleFile = new File([blob], EXAMPLE_BC3_FILE, { type: 'text/plain' });
            currentFileName = exampleFile.name;
            setSelectedFileName(currentFileName);
            await processBc3File(exampleFile, loadExampleBtn);
        } catch (err) {
            console.error(err);
            alert('No se ha podido cargar el presupuesto de ejemplo.');
        } finally {
            loadExampleBtn.innerHTML = originalHtml;
            loadExampleBtn.disabled = false;
        }
    });
}

// 2. Search Box
const searchInput = document.getElementById('searchTerm');
if (searchInput) {
    searchInput.addEventListener('input', function (e) {
        const term = e.target.value.trim();
        filterTree(term);
    });
}

// Window resize handler - re-render when switching between mobile/desktop
let resizeTimeout;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (parsedData) {
            renderCurrentLevel();
        }
    }, 250);
});

// 3. Upload Form Submit
async function processBc3File(file, triggerBtn = null) {
    if (!file || isProcessingFile) return;

    const lowerName = file.name.toLowerCase();
    if (!lowerName.endsWith('.bc3') && !lowerName.endsWith('.sysmed')) {
        alert('Por favor, selecciona un archivo con extensión .bc3 o .sysmed');
        return;
    }

    isProcessingFile = true;
    document.body.classList.add('is-processing');

    const formData = new FormData();
    formData.append('bc3file', file);

    const btn = triggerBtn || (uploadForm ? uploadForm.querySelector('.process-btn') : document.querySelector('.process-btn'));
    const originalText = btn ? btn.textContent : 'Procesar';
    if (btn) {
        btn.textContent = 'Procesando...';
        btn.disabled = true;
    }

    try {
        const response = await fetch('upload.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            renderApp(result.data);
            if (result.sysmed) {
                applyLoadedSysMed(result.sysmed);
                const certCount = Array.isArray(result.sysmed.certifications) ? result.sysmed.certifications.length : 0;
                showNotification(`Proyecto SYSmed cargado: ${certCount} certificación${certCount === 1 ? '' : 'es'}`);
            } else {
                currentBudgetFileName = file.name;
                currentSysMedManifest = null;
                certCurrentMonth = getDefaultCertMonth();
                certLoad();
            }
        } else {
            alert('Error: ' + (result.error || 'Unknown error'));
        }
    } catch (err) {
        console.error(err);
        alert('Error procesando el archivo');
    } finally {
        if (btn) {
            btn.textContent = originalText;
            btn.disabled = false;
        }
        isProcessingFile = false;
        document.body.classList.remove('is-processing');
    }
}

if (uploadForm) {
    uploadForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const fileInput = document.getElementById('bc3file');

        if (!fileInput.files.length) {
            alert("Por favor selecciona un archivo");
            return;
        }

        processBc3File(fileInput.files[0], uploadForm.querySelector('.process-btn'));
    });
}

let parsedData = null;
let originalFileText = "";
const expandedNodes = new Set();

// Historial para Deshacer/Rehacer (Ctrl+Z / Ctrl+Y)
let stateHistory = [];
let historyIndex = -1;

// Estado de Comparación y Coeficientes
let compareData = null;
let compareActive = false;
let globalCoeffs = { gg: 13, bi: 6, baja: 0 };
let typeChartInstance = null;
let chaptersChartInstance = null;

// Drill-down navigation state
let navigationStack = []; // Stack of { code, title } objects
let currentLevel = null; // null = root level, or code of current parent
let mobileNavDirection = 'forward';

// Obtener la descomposición de un concepto con factores
function getConceptDecomposition(concept) {
    if (!concept) return [];
    if (Array.isArray(concept.decomposition) && concept.decomposition.length > 0) {
        return concept.decomposition;
    }
    if (Array.isArray(concept.children) && concept.children.length > 0) {
        return concept.children.map(c => ({ code: c, factor: 1 }));
    }
    return [];
}

// Check if we're in mobile mode
function isMobileMode() {
    return window.innerWidth <= 768;
}

function getCurrentMobileTitle() {
    if (navigationStack.length === 0) return 'Presupuesto';
    return navigationStack[navigationStack.length - 1].title || 'Nivel actual';
}

// Update breadcrumb display
function updateBreadcrumbs() {
    const container = document.getElementById('breadcrumbContainer');
    const path = document.getElementById('breadcrumbPath');
    const backBtn = document.getElementById('breadcrumbBack');

    if (!isMobileMode() || !parsedData) {
        container.classList.add('is-hidden');
        container.style.display = 'none';
        return;
    }

    container.classList.remove('is-hidden');
    container.style.display = isMobileMode() ? 'grid' : 'flex';
    path.innerHTML = '';
    path.textContent = getCurrentMobileTitle();

    // Back button handler
    backBtn.hidden = navigationStack.length === 0;
    backBtn.onclick = () => {
        if (navigationStack.length === 0) return;
        // Si hay entradas de historial propias, retroceder vía history para
        // mantener sincronizado el botón/gesto "atrás" del navegador
        if (drillHistoryDepth > 0) {
            history.back();
        } else {
            goBackOneLevel();
        }
    };
}

// Retroceder un nivel en la navegación drill-down móvil
function goBackOneLevel() {
    if (navigationStack.length === 0) return;
    navigationStack.pop();
    const newLevel = navigationStack.length > 0 ? navigationStack[navigationStack.length - 1].code : null;
    mobileNavDirection = 'back';
    navigateToLevel(newLevel, false); // false = don't push to stack
}

// Gesto/botón "atrás" del navegador: cada drill-down añade una entrada al
// historial (history.pushState), de modo que volver atrás sube un nivel en
// lugar de abandonar la página
let drillHistoryDepth = 0;

window.addEventListener('popstate', () => {
    if (drillHistoryDepth <= 0) return;
    drillHistoryDepth--;
    if (isMobileMode() && parsedData) {
        goBackOneLevel();
    }
});

// Navigate to a specific level
function navigateToLevel(parentCode, pushToStack = true) {
    if (isMobileMode() && parentCode === null) {
        mobileNavDirection = 'back';
    }

    currentLevel = parentCode;

    // Update stack
    if (pushToStack) {
        if (parentCode === null) {
            navigationStack = [];
        } else {
            // Find index of this code in stack
            const index = navigationStack.findIndex(item => item.code === parentCode);
            if (index >= 0) {
                // Going back to an existing level
                navigationStack = navigationStack.slice(0, index + 1);
            }
        }
    }

    updateBreadcrumbs();
    renderCurrentLevel();
}

// Render the current level based on navigation state
function renderCurrentLevel() {
    if (!parsedData) return;

    const treeContainer = document.getElementById('treeContent');
    if (!treeContainer) return;
    treeContainer.innerHTML = '';

    // Add mobile class if in mobile mode
    if (isMobileMode()) {
        treeContainer.classList.add('mobile-drilldown');
    } else {
        treeContainer.classList.remove('mobile-drilldown');
    }

    const mobileMode = isMobileMode();
    const renderHost = mobileMode ? document.createElement('div') : treeContainer;

    if (mobileMode) {
        const stage = document.createElement('div');
        stage.className = 'ipod-stage';
        renderHost.className = `ipod-panel ipod-panel-${mobileNavDirection}`;
        stage.appendChild(renderHost);
        treeContainer.appendChild(stage);
        treeContainer.removeAttribute('role');
        treeContainer.removeAttribute('aria-label');
    } else {
        // Árbol navegable por teclado (flechas, Enter, Home/End)
        treeContainer.setAttribute('role', 'treegrid');
        treeContainer.setAttribute('aria-label', 'Árbol del presupuesto');
    }

    // Create Header
    const header = document.createElement('div');
    header.className = 'tree-header';
    header.setAttribute('role', 'row');
    header.innerHTML = `
        <div role="columnheader">Código</div>
        <div role="columnheader">Ud</div>
        <div role="columnheader">Resumen</div>
        <div role="columnheader">Cantidad</div>
        <div role="columnheader">Precio</div>
        <div role="columnheader">Importe</div>
    `;
    renderHost.appendChild(header);

    const rootList = document.createElement('div');
    rootList.className = 'tree-roots';
    rootList.setAttribute('role', 'presentation');

    if (mobileMode) {
        // Mobile: Show only current level
        if (currentLevel === null) {
            // Show root nodes
            const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
            roots.forEach(code => {
                const rootNode = createNode(code, true, 0, 1, true); // true = mobile mode
                if (rootNode) {
                    rootList.appendChild(rootNode);
                }
            });
        } else {
            // Show children of current level
            const concept = parsedData.concepts[currentLevel];
            if (concept) {
                const decomposition = getConceptDecomposition(concept);

                decomposition.forEach(item => {
                    const childNode = createNode(item.code, false, 0, item.factor, true, item.type || 0, currentLevel); // true = mobile mode
                    if (childNode) {
                        rootList.appendChild(childNode);
                    }
                });
            }
        }
    } else {
        // Desktop: Show full tree
        const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
        roots.forEach(code => {
            const rootNode = createNode(code, true, 0, 1, false); // false = desktop mode
            if (rootNode) {
                rootList.appendChild(rootNode);
            }
        });
    }

    renderHost.appendChild(rootList);

    // Re-apply filter if exists
    const searchTerm = (document.getElementById('searchTerm')?.value || '').trim();
    if (searchTerm) {
        filterTree(searchTerm);
    }

    updateBreadcrumbs();
    updateExpandAllButtonState();
    refreshTreeTabStops();
    mobileNavDirection = 'forward';
}



// Initialize resize on pointerdown (funciona con ratón, táctil y stylus)
function initResize(e) {
    e.preventDefault();
    const col = e.target.parentElement;
    resizeState.isResizing = true;
    resizeState.colIdx = parseInt(col.dataset.colIdx);
    resizeState.startX = e.pageX;
    resizeState.startWidth = window.columnWidths[resizeState.colIdx];

    e.target.classList.add('resizing');

    document.addEventListener('pointermove', doResize);
    document.addEventListener('pointerup', stopResize);
    document.addEventListener('pointercancel', stopResize);
}

// Resize during pointermove
function doResize(e) {
    if (!resizeState.isResizing) return;

    const diff = e.pageX - resizeState.startX;
    const newWidth = Math.max(30, resizeState.startWidth + diff);

    window.columnWidths[resizeState.colIdx] = newWidth;
    updateGridTemplate();
}

// Stop resizing on pointerup/pointercancel
function stopResize(e) {
    if (!resizeState.isResizing) return;

    resizeState.isResizing = false;
    document.querySelectorAll('.resize-handle.resizing').forEach(el => el.classList.remove('resizing'));

    document.removeEventListener('pointermove', doResize);
    document.removeEventListener('pointerup', stopResize);
    document.removeEventListener('pointercancel', stopResize);
}

// Update grid template for all rows
function updateGridTemplate() {
    const template = window.columnWidths.map(w => w + 'px').join(' ');

    // Update header
    const header = document.getElementById('treeHeader');
    if (header) {
        header.style.gridTemplateColumns = template;
        // Update individual header column widths
        const cols = header.children;
        for (let i = 0; i < cols.length; i++) {
            cols[i].style.width = window.columnWidths[i] + 'px';
        }
    }

    // Update all tree node rows
    document.querySelectorAll('.tree-node-row').forEach(row => {
        row.style.gridTemplateColumns = template;
    });
}

function renderApp(data) {
    parsedData = data;
    originalFileText = data.original_text || "";
    expandedNodes.clear();

    // Inicializar historial
    stateHistory = [JSON.stringify(parsedData)];
    historyIndex = 0;
    updateUndoRedoButtonsState();

    // Reset navigation state
    navigationStack = [];
    currentLevel = null;
    // Las entradas de historial del drill-down anterior quedan huérfanas:
    // ignorarlas para que "atrás" no altere la vista del nuevo presupuesto
    drillHistoryDepth = 0;

    // Show control buttons
    const sBtn = document.getElementById('saveBtn');
    const exportDrop = document.getElementById('exportDropdown');
    const cBtn = document.getElementById('compareBtn');
    const dBtn = document.getElementById('dashboardBtn');
    const closeProjectButton = document.getElementById('closeProjectBtn');
    [sBtn, exportDrop, cBtn, dBtn, closeProjectButton].forEach(el => {
        if (!el) return;
        el.classList.remove('is-hidden');
        el.style.display = 'inline-block';
    });
    const viewTabsBar = document.getElementById('viewTabs');
    if (viewTabsBar) {
        viewTabsBar.classList.remove('is-hidden');
        viewTabsBar.style.display = 'flex';
    }
    // Un presupuesto nuevo siempre arranca en la pestaña Presupuesto
    if (typeof switchView === 'function') switchView('budget');
    const pBtn = document.getElementById('planningBtn');
    if (pBtn) {
        pBtn.classList.remove('is-hidden');
        pBtn.style.display = 'inline-block';
    }

    // Resetear comparador y coeficientes al cargar un nuevo presupuesto
    compareData = null;
    compareActive = false;
    const compResults = document.getElementById('compareResults');
    if (compResults) compResults.style.display = 'none';
    const totalPecDisplay = document.getElementById('budgetTotalPEC');
    if (totalPecDisplay) totalPecDisplay.style.display = 'none';
    const toggleCoeffs = document.getElementById('toggleCoeffsBtn');
    if (toggleCoeffs) {
        toggleCoeffs.classList.remove('is-hidden');
        toggleCoeffs.style.display = 'inline-block';
    }
    const coeffsPanel = document.getElementById('coeffsPanel');
    if (coeffsPanel) coeffsPanel.style.display = 'none';

    // Restablecer valores de inputs de coeficientes a los valores por defecto
    const ggIn = document.getElementById('coeffGG');
    const biIn = document.getElementById('coeffBI');
    const bajaIn = document.getElementById('coeffBaja');
    if (ggIn) ggIn.value = 13;
    if (biIn) biIn.value = 6;
    if (bajaIn) bajaIn.value = 0;
    globalCoeffs = { gg: 13, bi: 6, baja: 0 };

    // Mostrar barra de filtros
    const searchBar = document.getElementById('searchBarContainer');
    if (searchBar) {
        searchBar.classList.remove('is-hidden');
        searchBar.style.display = 'block';
    }
    const filterBar = document.getElementById('filterBar');
    if (filterBar) filterBar.style.display = 'flex';

    // Recalcular todo el presupuesto de abajo hacia arriba inmediatamente al cargar
    recalculateAll();

    updateTotalBudgetDisplay();

    // Render Project Info (only if elements exist - for standalone viewer)
    const info = document.getElementById('projectInfo');
    if (info) {
        const title = document.getElementById('projectTitle');
        const owner = document.getElementById('projectOwner');
        const stats = document.getElementById('stats');

        if (title) {
            // Try to find a good title. Usually from ~V properties or root node.
            // Improve title display by removing trailing # if present
            const rawTitle = data.properties.description || (data.properties.owner + ' Project');
            title.textContent = rawTitle.replace(/#+\s*$/, '');
        }

        if (owner) {
            // Display metadata
            const metaText = [
                data.properties.owner ? `Propietario: ${data.properties.owner}` : '',
                data.properties.format ? `Formato: ${data.properties.format}` : '',
                data.properties.charset ? `(${data.properties.charset})` : ''
            ].filter(Boolean).join(' | ');
            owner.textContent = metaText;
        }

        if (stats) {
            // Show debug stats
            const conceptCount = Object.keys(data.concepts).length;
            const rootCount = data.root_nodes.length;
            stats.textContent = `Cargado: ${conceptCount} partidas | Raíces: ${rootCount}`;
        }

        info.classList.remove('is-hidden');
        info.style.display = 'block';
    }

    // Hide empty state
    const emptyState = document.querySelector('#treePanel .empty-state');
    if (emptyState) {
        emptyState.classList.add('is-hidden');
        emptyState.style.display = 'none';
    }

    try {
        // Render using new navigation system
        renderCurrentLevel();

    } catch (e) {
        console.error(e);
        document.getElementById('stats').textContent += ' | ERROR RENDER: ' + e.message;
    }

    // Registrar el fichero en la lista de recientes y guardar la sesión inicial
    scheduleSessionAutosave();
}


/**
 * Filter the tree view based on search text
 * @param {string} text 
 */
function filterTree(text) {
    const rootContainer = document.getElementById('treeContent');
    const nodes = rootContainer.querySelectorAll('.tree-node-container');
    const lowerText = text.toLowerCase();

    // Helper to get text content of a concept for searching
    function getSearchContent(code) {
        const c = parsedData.concepts[code];
        if (!c) return '';
        let str = c.code + ' ' + c.summary + ' ' + (c.description || '');
        if (c.measurements && c.measurements.length) {
            str += ' ' + c.measurements.map(m => (m.label || '') + ' ' + (m.units || '')).join(' ');
        }
        return str.toLowerCase();
    }

    // Pass 1: Mark matches
    // We can't just iterate flat list easily because visual hierarchy matters.
    // Actually, iterating DOM nodes depth-first or checking logic?
    // Easiest: Recursive function acting on DOM nodes has issues if we select 'all' nodes flatly.
    // Better: Select top-level nodes and recurse.

    // Instead of complex DOM recursion, let's use the flat querySelectorAll but handle logic carefully?
    // No, hierarchy matters: Parent visible if Child visible.

    // Recursive approach on DOM structure:
    function processElement(el) {
        // el is .tree-node-container
        const code = el.dataset.code;
        const childrenContainer = el.querySelector('.tree-node-children');

        let isMatch = false;

        // 1. Check self
        if (code && getSearchContent(code).includes(lowerText)) {
            isMatch = true;
        }

        // 2. Check children
        let childVisible = false;
        if (childrenContainer) {
            const children = childrenContainer.querySelectorAll(':scope > .tree-node-container');
            children.forEach(child => {
                if (processElement(child)) {
                    childVisible = true;
                }
            });
        }

        // Decision
        if (text === '') {
            el.style.display = '';
            // Optional: Collapse everything? Or leave as is. 
            // Leaving as is allows user to clear search and see context.
            return true;
        }

        if (isMatch || childVisible) {
            el.style.display = '';
            // If child matched, expand self
            if (childVisible && childrenContainer) {
                childrenContainer.classList.add('visible');
                const toggle = el.querySelector('.toggle-icon');
                if (toggle) toggle.classList.add('expanded');
            }
            return true;
        } else {
            el.style.display = 'none';
            return false;
        }
    }

    // Start with root nodes in the tree container (skipping header)
    // The roots are inside a div (rootList) or directly appended?
    // In renderApp: treeContainer.appendChild(rootList);
    // rootList contains headers? No, header is separate.
    // rootList contains createNode outputs.
    // Actually renderApp does: 
    // rootList = div
    // rootList.appendChild(rootNode)

    // So we need to select children of rootList.
    // Since we don't have a distinct ID for rootList, let's just select .tree-node-container inside treeContent
    // But `querySelectorAll` is flat.
    // ...
    // treeContainer.appendChild(rootList);

    // We need top-level containers. 
    // Let's modify renderApp to give rootList a class or ID, OR just use :scope > div > .tree-node-container?

    // Re-reading renderApp:
    // const rootList = document.createElement('div');
    // rootList.className = 'tree-roots';
    // ...
    // treeContainer.appendChild(rootList);

    const rootList = rootContainer.querySelector('.tree-roots');
    if (rootList) {
        const roots = rootList.children; // These are top level containers
        Array.from(roots).forEach(root => {
            if (root.classList.contains('tree-node-container')) {
                processElement(root);
            }
        });
    }

    // El filtrado cambia qué filas son visibles: recolocar el punto de entrada del teclado
    refreshTreeTabStops();
}

/**
 * createNode
 * @param {string} code 
 * @param {boolean} isRoot 
 * @param {number} depth 
 * @param {number} qty - Quantity of this node in the parent context (factor)
 * @param {boolean} mobileMode - Whether to render in mobile drill-down mode
 * @param {number} type - Resource type of this node in the parent context
 * @param {string|null} parentCode - Code of the parent concept (null for roots)
 */
function createNode(code, isRoot = false, depth = 0, qty = 1, mobileMode = false, type = 0, parentCode = null) {
    // Validar si el nodo debe mostrarse según filtros activos
    if (typeof shouldShowNode === 'function' && !shouldShowNode(code)) {
        return null;
    }

    const concept = parsedData.concepts[code];
    if (!concept) {
        console.warn('Missing concept:', code);
        return document.createTextNode('');
    }

    const container = document.createElement('div');
    container.className = 'tree-node-container';
    container.dataset.code = code;
    container.dataset.qty = qty;
    container.setAttribute('role', 'presentation');

    const row = document.createElement('div');

    // Determine styling class
    let hasChildren = false;
    let decomposition = [];

    // Helper to get decomposition with factors
    decomposition = getConceptDecomposition(concept);
    if (decomposition.length > 0) {
        hasChildren = true;
    }

    // Also check for measurements (~M)
    let hasMeasurements = false;
    if (Array.isArray(concept.measurements) && concept.measurements.length > 0) {
        hasMeasurements = true;
        hasChildren = true;
    }

    // Check for Description (~T)
    let hasDescription = false;
    if (concept.description && concept.description.trim().length > 0) {
        hasDescription = true;
        hasChildren = true; // Description makes it expandable
    }

    // Determine if it's a chapter/folder structurally
    // In BC3, codes ending in '#' are typically chapters.
    // Also if it has children, treat as chapter.
    const isChapter = concept.code.endsWith('#') || hasChildren;

    row.className = 'tree-node-row';
    row.setAttribute('role', 'row');
    row.setAttribute('aria-level', String(depth + 1));
    row.tabIndex = -1;
    if (!mobileMode && hasChildren) {
        row.setAttribute('aria-expanded', (isRoot || expandedNodes.has(code)) ? 'true' : 'false');
    }

    if (isChapter) {
        if (depth === 0) {
            row.classList.add('node-chapter');
        } else {
            row.classList.add('node-subchapter');
        }
    } else {
        row.classList.add('node-item');
    }

    // 1. Column: Code (Merged with Hierarchy/Toggle)
    const colCode = document.createElement('div');
    colCode.className = 'col-code';
    // Style applied in CSS (flex), but padding for depth here
    colCode.style.paddingLeft = (depth * 20 + 8) + 'px';

    const toggle = document.createElement('span');
    toggle.className = 'toggle-icon';
    toggle.innerHTML = iconSvg('chevron-right', 'ui-icon toggle-svg');
    // Hide if no children, but keep space? Or just opacity 0? 
    // User said "remove column", if simple node, maybe no triangle at all?
    // "ponerlos al lado del código".
    // Usually leaves don't have arrows.
    if (hasChildren) {
        toggle.style.opacity = '1';
        if (isRoot || expandedNodes.has(code)) toggle.classList.add('expanded');
    } else {
        toggle.style.opacity = '0'; // Invisible but keeps alignment if fixed width
        // Or display none? If display none, text shifts left. Better to keep placeholder or use opacity.
        // Let's use opacity 0 for alignment.
    }

    colCode.appendChild(toggle);

    // Code Text
    const codeSpan = document.createElement('span');
    codeSpan.textContent = concept.code.replace(/#+\s*$/, '');
    colCode.appendChild(codeSpan);

    // Add resource type badge if type is defined (1=MO, 2=MAQ, 3=MAT, 4=SUB)
    if (type > 0 && type <= 4) {
        const badge = document.createElement('span');
        badge.className = 'badge';
        if (type === 1) {
            badge.classList.add('badge-mo');
            badge.textContent = 'MO';
            badge.title = 'Mano de obra';
        } else if (type === 2) {
            badge.classList.add('badge-maq');
            badge.textContent = 'MAQ';
            badge.title = 'Maquinaria';
        } else if (type === 3) {
            badge.classList.add('badge-mat');
            badge.textContent = 'MAT';
            badge.title = 'Material';
        } else if (type === 4) {
            badge.classList.add('badge-sub');
            badge.textContent = 'SUB';
            badge.title = 'Subcontrato';
        }
        colCode.appendChild(badge);
    }

    // 2. Column: Unit

    // 3. Column: Unit
    const colUnit = document.createElement('div');
    colUnit.className = 'col-unit';
    colUnit.textContent = concept.unit;

    // 4. Column: Summary (Editable)
    const colSummary = document.createElement('div');
    colSummary.className = 'col-summary';
    colSummary.textContent = concept.summary || '(Sin título)';
    enableDoubleClickEditing(colSummary);

    colSummary.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Evitar salto de línea
            
            const newSummary = colSummary.textContent.trim();
            if (newSummary && concept.summary !== newSummary) {
                concept.summary = newSummary;
                
                // Actualizar panel de detalles si coincide el código
                const detCodeEl = document.getElementById('detCode');
                const detSummaryEl = document.getElementById('detSummary');
                if (detCodeEl && detSummaryEl && detCodeEl.textContent === concept.code.replace(/#+\s*$/, '')) {
                    detSummaryEl.textContent = newSummary;
                }
            }
            colSummary.blur();
        }
    });

    colSummary.addEventListener('blur', () => {
        const newSummary = colSummary.textContent.trim();
        if (newSummary && newSummary !== concept.summary) {
            concept.summary = newSummary;
            saveHistoryState();
        } else {
            colSummary.textContent = concept.summary || '(Sin título)';
        }
    });

    // Values
    const priceVal = parseFloat(concept.price);
    const qtyVal = parseFloat(qty);
    const amountVal = (isNaN(priceVal) || isNaN(qtyVal)) ? 0 : (priceVal * qtyVal);

    // 5. Column: Quantity
    const colQty = document.createElement('div');
    colQty.className = 'col-quantity';
    colQty.textContent = isNaN(qtyVal) ? '' : qtyVal.toLocaleString('es-ES', { minimumFractionDigits: 3 });

    // 6. Column: Price (Editable solo para partidas, no capítulos/raíces)
    const colPrice = document.createElement('div');
    colPrice.className = 'col-price';
    colPrice.textContent = isNaN(priceVal) ? '' : priceVal.toLocaleString('es-ES', { minimumFractionDigits: 2 });

    // Agregar desviación si el comparador está activo
    if (compareActive && compareData && compareData[code]) {
        const compConcept = compareData[code];
        const mainPrice = parseFloat(concept.price) || 0;
        const compPrice = parseFloat(compConcept.price) || 0;
        if (mainPrice !== compPrice) {
            const diffPrice = mainPrice - compPrice;
            const pct = compPrice === 0 ? 0 : (diffPrice / compPrice) * 100;
            const badge = document.createElement('span');
            badge.className = 'dev-badge ' + (diffPrice >= 0 ? 'dev-up' : 'dev-down');
            badge.textContent = `${diffPrice >= 0 ? '+' : ''}${pct.toFixed(1)}%`;
            colPrice.appendChild(badge);
        }
    }
    
    const isEditablePrice = !concept.code.endsWith('#');
    if (isEditablePrice) {
        enableDoubleClickEditing(colPrice, { selectOnEdit: true });

        colPrice.addEventListener('focus', () => {
            // Mostrar número simple sin formatear para edición cómoda
            const rawPrice = parseFloat(concept.price) || 0;
            colPrice.textContent = rawPrice;
        });

        colPrice.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Evitar salto de línea
                
                const valText = colPrice.textContent.trim().replace(',', '.');
                const newVal = parseFloat(valText);

                if (!isNaN(newVal) && newVal >= 0) {
                    if (parseFloat(concept.price) !== newVal) {
                        concept.price = newVal;
                        concept.isManualPrice = true; // Bloquear precio manual
                        recalculateAll();
                        
                        const scrollPos = document.getElementById('treeContent').scrollTop;
                        renderCurrentLevel();
                        document.getElementById('treeContent').scrollTop = scrollPos;
                        
                        updateTotalBudgetDisplay();
                        saveHistoryState();
                        return; // Retornar ya que re-renderiza y destruye el foco
                    }
                }
                colPrice.blur();
            }
        });

        colPrice.addEventListener('blur', () => {
            const valText = colPrice.textContent.trim().replace(',', '.');
            const newVal = parseFloat(valText);

            if (!isNaN(newVal) && newVal >= 0) {
                if (parseFloat(concept.price) !== newVal) {
                    concept.price = newVal;
                    concept.isManualPrice = true; // Bloquear precio manual
                    recalculateAll();
                    
                    const scrollPos = document.getElementById('treeContent').scrollTop;
                    renderCurrentLevel();
                    document.getElementById('treeContent').scrollTop = scrollPos;
                    
                    updateTotalBudgetDisplay();
                    saveHistoryState();
                }
            } else {
                // Revertir al valor original si no es número válido
                const prevPrice = parseFloat(concept.price) || 0;
                colPrice.textContent = prevPrice.toLocaleString('es-ES', { minimumFractionDigits: 2 });
            }
        });
    } else {
        colPrice.contentEditable = "false";
    }

    // 7. Column: Amount (Importe)
    const colAmount = document.createElement('div');
    colAmount.className = 'col-amount';
    colAmount.textContent = amountVal === 0 ? '' : amountVal.toLocaleString('es-ES', { minimumFractionDigits: 2 });


    // Append columns
    // No colHier anymore
    [colCode, colUnit, colSummary, colQty, colPrice, colAmount].forEach(col => {
        col.setAttribute('role', 'gridcell');
        row.appendChild(col);
    });

    // Botón de acciones estructurales (añadir/duplicar/eliminar) — escritorio
    if (!mobileMode) {
        const actionsBtn = document.createElement('button');
        actionsBtn.type = 'button';
        actionsBtn.className = 'row-actions-btn';
        actionsBtn.setAttribute('aria-label', 'Acciones de ' + (concept.summary || concept.code.replace(/#+\s*$/, '')));
        actionsBtn.title = 'Añadir, duplicar o eliminar';
        actionsBtn.innerHTML = iconSvg('more-vertical');
        actionsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openStructureMenuForNode(code, parentCode, actionsBtn);
        });
        row.appendChild(actionsBtn);
    }

    // Add mobile navigation indicator
    if (mobileMode && hasChildren) {
        row.classList.add('has-children-mobile');
    }

    // Click handlers
    row.onclick = (e) => {
        // Prevent triggering if we clicked a link, input or editable price
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'A' || e.target.classList.contains('col-price')) return;

        // Mobile mode behavior
        if (mobileMode) {
            // Check if this item has decomposition children (not just measurements/description)
            const hasDecompositionChildren = decomposition && decomposition.length > 0;

            if (hasDecompositionChildren) {
                // Navigate to next level for items with children
                navigationStack.push({
                    code: code,
                    title: concept.summary || concept.code.replace(/#+\s*$/, '')
                });
                navigateToLevel(code);
                history.pushState({ bc3Drill: navigationStack.length }, '');
                drillHistoryDepth++;
            } else {
                // Show inline details for leaf items (partidas)
                showMobileDetails(code, container);
            }
            return;
        }

        // Desktop mode: Select and toggle expand/collapse
        document.querySelectorAll('.tree-node-row').forEach(el => el.classList.remove('active'));
        row.classList.add('active');
        showDetails(code);

        // Toggle Expand/Collapse
        if (hasChildren) {
            const childrenContainer = container.querySelector(':scope > .tree-node-children');
            if (childrenContainer) {
                setNodeExpansion(container, !childrenContainer.classList.contains('visible'));
            }
        }

        // La fila clicada pasa a ser el punto de entrada del teclado
        refreshTreeTabStops(row);
    };



    container.appendChild(row);

    // Children Container
    if (hasChildren) {
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'tree-node-children';
        
        const isNodeExpanded = isRoot || expandedNodes.has(code);
        if (isNodeExpanded) {
            childrenContainer.classList.add('visible');
        }

        // 0. Render Description (Top of children)
        if (hasDescription) {
            const descRow = document.createElement('div');
            descRow.className = 'node-description-row';
            // Style it: Indented, full text
            descRow.style.paddingLeft = ((depth + 1) * 20 + 8) + 'px';
            descRow.style.paddingRight = '10px';
            descRow.style.paddingTop = '8px';
            descRow.style.paddingBottom = '8px';
            descRow.style.whiteSpace = 'pre-wrap'; // Preserve formatting
            descRow.style.color = 'var(--text-secondary)';
            descRow.style.fontSize = '0.9rem';
            descRow.textContent = concept.description;
            descRow.style.borderBottom = '1px solid var(--border-color)';
            enableDoubleClickEditing(descRow);
            descRow.addEventListener('blur', () => {
                const newDescription = descRow.textContent.trim();
                if (newDescription !== concept.description) {
                    concept.description = newDescription;
                    const detCodeEl = document.getElementById('detCode');
                    if (detCodeEl && detCodeEl.textContent === concept.code.replace(/#+\s*$/, '')) {
                        showDetails(concept.code);
                    }
                    saveHistoryState();
                }
            });
            childrenContainer.appendChild(descRow);
        }

        // 1. Render Measurements Table
        if (hasMeasurements) {
            const msTable = createMeasurementTable(concept.measurements, concept);
            childrenContainer.appendChild(msTable);
        }

        // 2. Render Decomposition/Children (Sub-items)
        // Usually items with measurements don't have further sub-items, but chapters do.
        // Only render children in desktop mode (in mobile, we navigate to them)
        if (!mobileMode) {
            decomposition.forEach(item => {
                const childNode = createNode(item.code, false, depth + 1, item.factor, mobileMode, item.type || 0, code);
                if (childNode) {
                    childrenContainer.appendChild(childNode);
                }
            });
        }


        container.appendChild(childrenContainer);
    }

    return container;
}

/**
 * createMeasurementTable
 * Renders a full HTML table for measurements with calculations.
 */
function createMeasurementTable(measurements, concept = null) {
    const container = document.createElement('div');
    container.className = 'measurements-container';

    const table = document.createElement('table');
    table.className = 'measurements-table';

    const isEditableTable = concept && !concept.code.endsWith('#');

    // Header
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Descripción</th>
            <th class="numeric">Uds</th>
            <th class="numeric">Largo</th>
            <th class="numeric">Ancho</th>
            <th class="numeric">Alto</th>
            <th class="numeric">Parcial</th>
            ${isEditableTable ? '<th class="m-col-action" aria-label="Acciones"></th>' : ''}
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    let total = 0;

    measurements.forEach((m, idx) => {
        const tr = document.createElement('tr');

        const u = m.units === '' ? 1 : parseFloat(m.units.toString().replace(',', '.'));
        const l = m.l === '' ? 1 : parseFloat(m.l.toString().replace(',', '.'));
        const w = m.w === '' ? 1 : parseFloat(m.w.toString().replace(',', '.'));
        const h = m.h === '' ? 1 : parseFloat(m.h.toString().replace(',', '.'));

        const vU = isNaN(u) ? 1 : u;
        const vL = isNaN(l) ? 1 : l;
        const vW = isNaN(w) ? 1 : w;
        const vH = isNaN(h) ? 1 : h;

        const partial = vU * vL * vW * vH;
        total += partial;

        // Celdas Editables (Solo si concept está presente y es editable)
        const isEditable = concept && !concept.code.endsWith('#');

        // Descripción
        const tdLabel = document.createElement('td');
        tdLabel.textContent = m.label || '';
        if (isEditable) {
            tdLabel.className = 'm-cell-editable';
            enableDoubleClickEditing(tdLabel);
            tdLabel.addEventListener('blur', () => {
                const newLabel = tdLabel.textContent.trim();
                if (newLabel !== (m.label || '')) {
                    m.label = newLabel;
                    saveHistoryState();
                }
            });
            tdLabel.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    tdLabel.blur();
                }
            });
        }

        // Celdas numéricas editables
        function createNumericCell(fieldValue, fieldName) {
            const td = document.createElement('td');
            td.className = 'numeric';
            td.textContent = fieldValue === '' ? '' : parseFloat(fieldValue).toLocaleString('es-ES');
            
            if (isEditable) {
                td.className += ' m-cell-editable';
                enableDoubleClickEditing(td, { selectOnEdit: true });
                
                td.addEventListener('focus', () => {
                    // Cargar número crudo sin formatear para editar cómodamente
                    td.textContent = fieldValue === '' ? '' : parseFloat(fieldValue);
                });

                td.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        td.blur();
                    }
                });

                td.addEventListener('blur', () => {
                    const rawText = td.textContent.trim().replace(',', '.');
                    let val = parseFloat(rawText);

                    if (rawText === '') {
                        m[fieldName] = '';
                    } else if (!isNaN(val)) {
                        m[fieldName] = val;
                    } else {
                        // Revertir
                        td.textContent = fieldValue === '' ? '' : parseFloat(fieldValue).toLocaleString('es-ES');
                        return;
                    }

                    // Recalcular
                    recalculateMeasurements(concept);
                });
            }

            return td;
        }

        const tdUnits = createNumericCell(m.units, 'units');
        const tdL = createNumericCell(m.l, 'l');
        const tdW = createNumericCell(m.w, 'w');
        const tdH = createNumericCell(m.h, 'h');

        const tdPartial = document.createElement('td');
        tdPartial.className = 'numeric';
        tdPartial.innerHTML = `<b>${partial.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}</b>`;

        tr.appendChild(tdLabel);
        tr.appendChild(tdUnits);
        tr.appendChild(tdL);
        tr.appendChild(tdW);
        tr.appendChild(tdH);
        tr.appendChild(tdPartial);

        // Botón de eliminar línea de medición
        if (isEditableTable) {
            const tdDel = document.createElement('td');
            tdDel.className = 'm-cell-action';
            const delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'measurement-delete-btn';
            delBtn.setAttribute('aria-label', 'Eliminar línea de medición');
            delBtn.title = 'Eliminar línea';
            delBtn.innerHTML = iconSvg('trash-2');
            delBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                concept.measurements.splice(idx, 1);
                recalculateMeasurements(concept);
                showNotification('Línea de medición eliminada');
            });
            tdDel.appendChild(delBtn);
            tr.appendChild(tdDel);
        }

        tbody.appendChild(tr);
    });

    // Total Row
    const trTotal = document.createElement('tr');
    trTotal.className = 'total-row';
    trTotal.innerHTML = `
        <td colspan="5" class="text-right">TOTAL:</td>
        <td class="numeric"><b>${total.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 3 })}</b></td>
        ${isEditableTable ? '<td class="m-cell-action"></td>' : ''}
    `;
    tbody.appendChild(trTotal);

    // Fila para añadir líneas de medición nuevas
    if (isEditableTable) {
        const trAdd = document.createElement('tr');
        trAdd.className = 'add-measurement-row';
        const tdAdd = document.createElement('td');
        tdAdd.colSpan = 7;
        const addBtn = document.createElement('button');
        addBtn.type = 'button';
        addBtn.className = 'add-measurement-btn';
        addBtn.innerHTML = iconSvg('plus') + '<span>Añadir línea de medición</span>';
        addBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            addMeasurementLine(concept.code);
        });
        tdAdd.appendChild(addBtn);
        trAdd.appendChild(tdAdd);
        tbody.appendChild(trAdd);
    }

    table.appendChild(tbody);
    container.appendChild(table);

    return container;
}

/**
 * Show details inline for mobile view
 * @param {string} code - The code of the concept to show
 * @param {HTMLElement} container - The container element for this node
 */
function showMobileDetails(code, container) {
    const concept = parsedData.concepts[code];
    if (!concept) return;

    // Check if details are already shown
    let detailsContainer = container.querySelector('.mobile-details-container');

    if (detailsContainer) {
        // Toggle visibility
        if (detailsContainer.style.display === 'none') {
            detailsContainer.style.display = 'block';
        } else {
            detailsContainer.style.display = 'none';
        }
        return;
    }

    // Create details container
    detailsContainer = document.createElement('div');
    detailsContainer.className = 'mobile-details-container';
    detailsContainer.style.padding = '1rem';
    detailsContainer.style.backgroundColor = '#f8fafc';
    detailsContainer.style.borderBottom = '1px solid var(--border-color)';

    const isEditableConcept = !concept.code.endsWith('#');

    // Title (resumen) con botón de lápiz para editar en táctil
    const titleRow = document.createElement('div');
    titleRow.className = 'mobile-detail-row';

    const title = document.createElement('h3');
    title.style.margin = '0';
    title.style.fontSize = '1rem';
    title.style.fontWeight = '600';
    title.style.color = 'var(--text-primary)';
    title.style.flex = '1';
    title.style.minWidth = '0';
    title.textContent = concept.summary || concept.code.replace(/#+\s*$/, '');
    titleRow.appendChild(title);

    if (isEditableConcept) {
        const titleEditable = enableDoubleClickEditing(title);
        title.addEventListener('blur', () => {
            const newSummary = title.textContent.trim();
            if (newSummary && newSummary !== concept.summary) {
                concept.summary = newSummary;
                const rowSummary = container.querySelector('.col-summary');
                if (rowSummary) rowSummary.textContent = newSummary;
                saveHistoryState();
            } else {
                title.textContent = concept.summary || concept.code.replace(/#+\s*$/, '');
            }
        });
        title.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                title.blur();
            }
        });
        titleRow.appendChild(createEditPencilButton(titleEditable, 'Editar resumen'));
    }
    detailsContainer.appendChild(titleRow);

    // Precio con botón de lápiz
    if (isEditableConcept) {
        const priceRow = document.createElement('div');
        priceRow.className = 'mobile-detail-row mobile-detail-price-row';

        const priceLabel = document.createElement('span');
        priceLabel.className = 'mobile-detail-price-label';
        priceLabel.textContent = 'Precio:';
        priceRow.appendChild(priceLabel);

        const priceValue = document.createElement('span');
        priceValue.className = 'mobile-detail-price-value';
        const formatPrice = () => {
            const p = parseFloat(concept.price) || 0;
            priceValue.textContent = p.toLocaleString('es-ES', { minimumFractionDigits: 2 }) + ' €';
        };
        formatPrice();
        priceRow.appendChild(priceValue);

        const priceEditable = enableDoubleClickEditing(priceValue, { selectOnEdit: true });

        priceValue.addEventListener('focus', () => {
            // Mostrar número simple sin formatear para edición cómoda
            priceValue.textContent = parseFloat(concept.price) || 0;
        });

        priceValue.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                priceValue.blur();
            }
        });

        priceValue.addEventListener('blur', () => {
            const valText = priceValue.textContent.trim().replace(',', '.');
            const newVal = parseFloat(valText);

            if (!isNaN(newVal) && newVal >= 0 && parseFloat(concept.price) !== newVal) {
                concept.price = newVal;
                concept.isManualPrice = true; // Bloquear precio manual
                recalculateAll();
                updateTotalBudgetDisplay();
                saveHistoryState();
                // Actualizar el importe de la fila sin re-renderizar (se perdería el detalle abierto)
                const rowAmount = container.querySelector('.col-amount');
                if (rowAmount) {
                    const qty = parseFloat(container.dataset.qty) || 1;
                    rowAmount.textContent = (newVal * qty).toLocaleString('es-ES', { minimumFractionDigits: 2 });
                }
            }
            formatPrice();
        });

        priceRow.appendChild(createEditPencilButton(priceEditable, 'Editar precio'));
        detailsContainer.appendChild(priceRow);
    }

    // Description
    if (concept.description && concept.description.trim()) {
        const description = document.createElement('div');
        description.style.marginBottom = '1rem';
        description.style.fontSize = '0.9rem';
        description.style.color = 'var(--text-secondary)';
        description.style.whiteSpace = 'pre-wrap';
        description.textContent = concept.description;
        enableDoubleClickEditing(description);
        description.addEventListener('blur', () => {
            const newDescription = description.textContent.trim();
            if (newDescription !== concept.description) {
                concept.description = newDescription;
                saveHistoryState();
            }
        });
        detailsContainer.appendChild(description);
    }

    // Measurements table
    if (concept.measurements && concept.measurements.length > 0) {
        const tableTitle = document.createElement('h4');
        tableTitle.style.margin = '1rem 0 0.5rem 0';
        tableTitle.style.fontSize = '0.9rem';
        tableTitle.style.fontWeight = '600';
        tableTitle.style.color = 'var(--text-primary)';
        tableTitle.textContent = 'Líneas de Medición';
        detailsContainer.appendChild(tableTitle);

        const msTable = createMeasurementTable(concept.measurements, concept);
        detailsContainer.appendChild(msTable);
    }

    // Insert after the row
    container.appendChild(detailsContainer);
}

function showDetails(code) {

    const concept = parsedData.concepts[code];
    const panel = document.getElementById('detailsContent');
    const emptyState = document.querySelector('#detailsPanel .empty-state');

    emptyState.style.display = 'none';
    panel.classList.remove('is-hidden');
    panel.style.display = 'block';

    // Abrir el panel lateral en escritorio (el divisor permite redimensionarlo)
    if (!isMobileMode()) {
        document.querySelector('.content-area')?.classList.add('details-open');
    }

    document.getElementById('detCode').textContent = concept.code.replace(/#+\s*$/, '');
    document.getElementById('detSummary').textContent = concept.summary;
    document.getElementById('detPrice').textContent = parseFloat(concept.price).toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });

    // Description: Prefer ~T description, fallback to Summary
    const oldDescriptionEl = document.getElementById('detDescription');
    const detDescriptionEl = oldDescriptionEl.cloneNode(false);
    oldDescriptionEl.replaceWith(detDescriptionEl);
    detDescriptionEl.textContent = concept.description || concept.summary;
    enableDoubleClickEditing(detDescriptionEl);
    detDescriptionEl.addEventListener('blur', () => {
        const newDescription = detDescriptionEl.textContent.trim();
        if (newDescription !== (concept.description || concept.summary)) {
            concept.description = newDescription;
            const scrollPos = document.getElementById('treeContent').scrollTop;
            renderCurrentLevel();
            document.getElementById('treeContent').scrollTop = scrollPos;
            saveHistoryState();
        } else {
            detDescriptionEl.textContent = concept.description || concept.summary;
        }
    });

    // Mediciones en Panel de Escritorio
    const msSection = document.getElementById('detMeasurementsSection');
    const msDiv = document.getElementById('detMeasurements');
    if (msSection && msDiv) {
        if (concept.measurements && concept.measurements.length > 0) {
            msSection.style.display = 'block';
            msDiv.innerHTML = '';
            msDiv.appendChild(createMeasurementTable(concept.measurements, concept));
        } else {
            msSection.style.display = 'none';
        }
    }

    // Decomposition Table
    const tbody = document.getElementById('detDecomposition');
    tbody.innerHTML = '';

    let totalCalc = 0;

    if (concept.decomposition && concept.decomposition.length > 0) {
        concept.decomposition.forEach(item => {
            const childNode = parsedData.concepts[item.code];
            const row = document.createElement('tr');

            const childPrice = childNode ? parseFloat(childNode.price) : 0;
            const factor = parseFloat(item.factor);
            const total = childPrice * factor;
            totalCalc += total;

            const tdCode = document.createElement('td');
            tdCode.textContent = item.code.replace(/#+\s*$/, '');

            // Factor / cantidad de la descomposición: editable en línea
            const tdFactor = document.createElement('td');
            const factorSpan = document.createElement('span');
            factorSpan.className = 'decomp-factor';
            factorSpan.textContent = factor.toLocaleString('es-ES');
            enableDoubleClickEditing(factorSpan, { selectOnEdit: true });
            factorSpan.addEventListener('focus', () => {
                factorSpan.textContent = parseFloat(item.factor) || 0;
            });
            factorSpan.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    factorSpan.blur();
                }
            });
            factorSpan.addEventListener('blur', () => {
                const valText = factorSpan.textContent.trim().replace(',', '.');
                const newVal = parseFloat(valText);
                if (!isNaN(newVal) && newVal >= 0 && parseFloat(item.factor) !== newVal) {
                    item.factor = newVal;
                    if (childNode) childNode.quantity = newVal;
                    refreshAfterStructureChange();
                } else {
                    factorSpan.textContent = (parseFloat(item.factor) || 0).toLocaleString('es-ES');
                }
            });
            tdFactor.appendChild(factorSpan);
            if (childNode && childNode.unit) {
                tdFactor.appendChild(document.createTextNode(' ' + childNode.unit));
            }

            const tdSummary = document.createElement('td');
            tdSummary.textContent = childNode ? childNode.summary : '???';

            const tdPrice = document.createElement('td');
            tdPrice.textContent = childPrice.toLocaleString('es-ES', { minimumFractionDigits: 2 }) + ' €';

            const tdTotal = document.createElement('td');
            tdTotal.innerHTML = `<strong>${total.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €</strong>`;

            // Eliminar la línea de la descomposición
            const tdAction = document.createElement('td');
            tdAction.className = 'decomp-col-action';
            const delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'decomp-delete-btn';
            delBtn.setAttribute('aria-label', 'Eliminar línea de la descomposición');
            delBtn.title = 'Eliminar línea';
            delBtn.innerHTML = iconSvg('trash-2');
            delBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const label = childNode ? (childNode.summary || item.code) : item.code;
                if (confirm(`¿Eliminar "${label}" de la descomposición?`)) {
                    deleteConcept(item.code, concept.code);
                }
            });
            tdAction.appendChild(delBtn);

            [tdCode, tdFactor, tdSummary, tdPrice, tdTotal, tdAction].forEach(td => row.appendChild(td));
            tbody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="6" class="table-empty-cell">Sin descomposición (Partida simple o Capítulo)</td>`;
        tbody.appendChild(row);
    }

    // Check if calculated matches stated
    const statedPrice = parseFloat(concept.price);
    // Usually they match. If not, maybe show warning or just stated.
    document.getElementById('detTotalCost').textContent = statedPrice.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
}

/* ==========================================================================
   Lógica de Recálculo, Modo Oscuro, Drag & Drop y Exportación BC3
   ========================================================================== */

// Recálculo recursivo de precios ascendente
function recalculateConceptPrice(code, visited = new Set()) {
    if (visited.has(code)) {
        return parseFloat(parsedData.concepts[code].price) || 0;
    }
    visited.add(code);

    const concept = parsedData.concepts[code];
    if (!concept) return 0;

    let decomposition = getConceptDecomposition(concept);

    if (decomposition.length > 0 && !concept.isManualPrice) {
        let sum = 0;
        decomposition.forEach(item => {
            const childPrice = recalculateConceptPrice(item.code, visited);
            sum += childPrice * parseFloat(item.factor);
        });
        concept.price = sum;
    }
    
    return parseFloat(concept.price) || 0;
}

function recalculateAll() {
    if (!parsedData) return;
    const visited = new Set();
    const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
    roots.forEach(rootCode => {
        recalculateConceptPrice(rootCode, visited);
    });
}

function calculateTotalBudget() {
    if (!parsedData) return 0;
    let total = 0;
    const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
    roots.forEach(code => {
        const concept = parsedData.concepts[code];
        if (concept) {
            total += parseFloat(concept.price) || 0;
        }
    });
    return total;
}

function updateTotalBudgetDisplay() {
    const totalEl = document.getElementById('budgetTotal');
    const totalPecEl = document.getElementById('budgetTotalPEC');
    const toggleCoeffsBtn = document.getElementById('toggleCoeffsBtn');
    
    if (totalEl) {
        const pem = calculateTotalBudget();
        
        // Actualizar PEM
        totalEl.textContent = `PEM: ${pem.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
        
        // Mostrar botón de coeficientes
        if (toggleCoeffsBtn) {
            toggleCoeffsBtn.classList.remove('is-hidden');
            toggleCoeffsBtn.style.display = 'inline-block';
        }
        
        // Calcular PEC
        const gg = globalCoeffs.gg / 100;
        const bi = globalCoeffs.bi / 100;
        const baja = globalCoeffs.baja / 100;
        
        // PEC = (PEM * (1 + GG + BI)) * (1 + Baja)
        const pemWithCoeffs = pem * (1 + gg + bi);
        const pec = pemWithCoeffs * (1 + baja);
        
        if (totalPecEl) {
            totalPecEl.textContent = `PEC: ${pec.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
            totalPecEl.classList.remove('is-hidden');
            totalPecEl.style.display = 'inline-block';
        }
    }
}

function sanitizeBC3Field(value) {
    return String(value ?? '').replace(/\r?\n|\r/g, ' ').replace(/\|/g, '/').trim();
}

function formatBC3Decimal(value, decimals = 2) {
    const number = parseFloat(String(value ?? '').replace(',', '.'));
    return Number.isFinite(number) ? number.toFixed(decimals) : '';
}

function getMeasurementTotal(concept) {
    const currentQuantity = parseFloat(concept?.quantity);
    if (Number.isFinite(currentQuantity)) {
        return currentQuantity;
    }

    if (!Array.isArray(concept?.measurements)) {
        return 0;
    }

    return concept.measurements.reduce((total, m) => {
        const u = m.units === '' ? 1 : parseFloat(String(m.units).replace(',', '.'));
        const l = m.l === '' ? 1 : parseFloat(String(m.l).replace(',', '.'));
        const w = m.w === '' ? 1 : parseFloat(String(m.w).replace(',', '.'));
        const h = m.h === '' ? 1 : parseFloat(String(m.h).replace(',', '.'));

        return total
            + (Number.isFinite(u) ? u : 1)
            * (Number.isFinite(l) ? l : 1)
            * (Number.isFinite(w) ? w : 1)
            * (Number.isFinite(h) ? h : 1);
    }, 0);
}

// Sublíneas de medición en formato FIEBDC: \Etiqueta\Uds\Largo\Ancho\Alto\
function buildMeasurementSublines(concept) {
    return (concept.measurements || []).map(m => {
        const label = sanitizeBC3Field(m.label);
        const units = m.units === '' ? "" : formatBC3Decimal(m.units, 3);
        const l = m.l === '' ? "" : formatBC3Decimal(m.l, 3);
        const w = m.w === '' ? "" : formatBC3Decimal(m.w, 3);
        const h = m.h === '' ? "" : formatBC3Decimal(m.h, 3);
        return `\\${label}\\${units}\\${l}\\${w}\\${h}\\`;
    });
}

// Reconstrucción del archivo BC3
function generateModifiedBC3() {
    if (!originalFileText) return "";

    const lines = originalFileText.split(/\r\n|\n|\r/);
    const modifiedLines = [];
    let skipLinesUntilNonSlash = false;
    let skipOriginalRecordContinuations = false;
    const textRecordCodes = new Set();
    // Registros presentes en el fichero original, para detectar conceptos nuevos
    // (edición estructural) que deben añadirse al final
    const conceptRecordCodes = new Set();
    const decompRecordCodes = new Set();
    const measurementChildCodes = new Set();

    lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('~T|')) {
            const parts = trimmed.split('|');
            if (parts[1]) {
                textRecordCodes.add(parts[1]);
            }
        } else if (trimmed.startsWith('~C|')) {
            const parts = trimmed.split('|');
            if (parts[1]) conceptRecordCodes.add(parts[1]);
        } else if (trimmed.startsWith('~D|')) {
            const parts = trimmed.split('|');
            if (parts[1]) decompRecordCodes.add(parts[1]);
        } else if (trimmed.startsWith('~M|')) {
            const parts = trimmed.split('|');
            const childCode = (parts[1] || '').split('\\').filter(Boolean).pop();
            if (childCode) measurementChildCodes.add(childCode);
        }
    });

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        if (skipOriginalRecordContinuations) {
            if (trimmed && !trimmed.startsWith('~')) {
                continue;
            }
            skipOriginalRecordContinuations = false;
        }

        if (skipLinesUntilNonSlash) {
            if (trimmed.startsWith('\\')) {
                // Saltar las líneas de medición originales
                continue;
            } else {
                skipLinesUntilNonSlash = false;
            }
        }

        if (trimmed.startsWith('~C|')) {
            const parts = trimmed.split('|');
            const code = parts[1];
            if (code && parsedData.concepts[code]) {
                const concept = parsedData.concepts[code];
                // ~C|Code|Unit|Summary|Price|Date|Type|
                parts[3] = sanitizeBC3Field(concept.summary);
                parts[4] = formatBC3Decimal(concept.price, 2);
                modifiedLines.push(parts.join('|'));
                if (concept.description && !textRecordCodes.has(code)) {
                    modifiedLines.push(`~T|${code}|${sanitizeBC3Field(concept.description)}|`);
                    textRecordCodes.add(code);
                }
            } else if (code) {
                // Concepto eliminado en la edición estructural: omitir su registro
                skipOriginalRecordContinuations = true;
            } else {
                modifiedLines.push(line);
            }
        } else if (trimmed.startsWith('~D|')) {
            const parts = trimmed.split('|');
            const parentCode = parts[1];
            const parentConcept = parsedData.concepts[parentCode];
            if (parentConcept && parentConcept.decomposition && parentConcept.decomposition.length > 0) {
                const decompParts = [];
                parentConcept.decomposition.forEach(item => {
                    decompParts.push(item.code);
                    decompParts.push('');
                    decompParts.push(formatBC3Decimal(item.factor, 3));
                });
                parts[2] = decompParts.join('\\') + '\\';
                modifiedLines.push(parts.join('|'));
                skipOriginalRecordContinuations = true;
            } else if (parentCode) {
                // Padre eliminado o descomposición vaciada: omitir el registro original
                skipOriginalRecordContinuations = true;
            } else {
                modifiedLines.push(line);
            }
        } else if (trimmed.startsWith('~M|')) {
            const parts = trimmed.split('|');
            // Formato: ~M|PARENT\CHILD|1\1\1\1\|TOTAL_SUM|
            const parentChild = parts[1]; // e.g. "01#\01.01"
            const childCode = parentChild.split('\\').filter(Boolean).pop();
            const concept = parsedData.concepts[childCode];

            if (concept && concept.measurements && concept.measurements.length > 0) {
                // Escribir solo la cabecera (posición/propiedades + total): si el
                // registro original traía sus sublíneas en la misma línea física
                // (parts[4] en adelante), conservarlas aquí las duplicaría con las
                // nuevas escritas justo debajo, corrompiendo el ~M reconstruido
                const totalSum = getMeasurementTotal(concept);
                modifiedLines.push(`~M|${parts[1]}|${parts[2] || ''}|${totalSum.toFixed(3)}|`);

                // Escribir las sublíneas de mediciones editadas
                buildMeasurementSublines(concept).forEach(subline => modifiedLines.push(subline));

                // Activar el salto de las líneas de medición originales que siguen
                skipLinesUntilNonSlash = true;
            } else if (childCode) {
                // Partida eliminada o sin líneas de medición: omitir el registro y sus sublíneas
                skipLinesUntilNonSlash = true;
            } else {
                modifiedLines.push(line);
            }
        } else if (trimmed.startsWith('~V|')) {
            // Actualizar la codificación a UTF-8 para garantizar legibilidad
            const parts = trimmed.split('|');
            if (parts.length >= 6) {
                parts[5] = "UTF-8";
            }
            modifiedLines.push(parts.join('|'));
        } else if (trimmed.startsWith('~T|')) {
            const parts = trimmed.split('|');
            const code = parts[1];
            const concept = parsedData.concepts[code];
            if (concept) {
                parts[2] = sanitizeBC3Field(concept.description);
                modifiedLines.push(parts.join('|'));
            } else if (code) {
                // Concepto eliminado: omitir su texto descriptivo
                skipOriginalRecordContinuations = true;
            } else {
                modifiedLines.push(line);
            }
        } else {
            modifiedLines.push(line);
        }
    }

    // Añadir al final los registros de conceptos creados con la edición estructural
    // (capítulos, partidas, descomposiciones y mediciones sin registro original)
    Object.values(parsedData.concepts).forEach(concept => {
        const code = concept.code;
        if (!code) return;

        if (!conceptRecordCodes.has(code)) {
            const unit = sanitizeBC3Field(concept.unit || '');
            const summary = sanitizeBC3Field(concept.summary || '');
            const price = formatBC3Decimal(concept.price, 2) || '0.00';
            const date = sanitizeBC3Field(concept.date || '');
            const type = Number.isFinite(parseInt(concept.type)) ? parseInt(concept.type) : 0;
            modifiedLines.push(`~C|${code}|${unit}|${summary}|${price}|${date}|${type}|`);

            if (concept.description && !textRecordCodes.has(code)) {
                modifiedLines.push(`~T|${code}|${sanitizeBC3Field(concept.description)}|`);
                textRecordCodes.add(code);
            }
        }

        if (Array.isArray(concept.decomposition) && concept.decomposition.length > 0 && !decompRecordCodes.has(code)) {
            const decompParts = [];
            concept.decomposition.forEach(item => {
                decompParts.push(item.code);
                decompParts.push('');
                decompParts.push(formatBC3Decimal(item.factor, 3));
            });
            modifiedLines.push(`~D|${code}|${decompParts.join('\\')}\\|`);
        }

        if (Array.isArray(concept.measurements) && concept.measurements.length > 0 && !measurementChildCodes.has(code)) {
            const parentCode = findParentCodes(code)[0] || '';
            const totalSum = getMeasurementTotal(concept);
            modifiedLines.push(`~M|${parentCode}\\${code}||${totalSum.toFixed(3)}|`);
            buildMeasurementSublines(concept).forEach(subline => modifiedLines.push(subline));
        }
    });

    return modifiedLines.join('\r\n');
}

// Generación de un BC3 de certificación: reutiliza la estructura del
// presupuesto (capítulos, partidas, descomposiciones) pero sustituye la
// medición de cada partida certificable por su cantidad certificada a origen
// del mes indicado, para poder intercambiar la certificación con otros
// programas FIEBDC-3 (Presto, Arquímedes, etc.).
function generateCertificationBC3(month, explicitCertificationNumber = null) {
    if (!parsedData || !originalFileText) return "";

    const certData = JSON.parse(JSON.stringify(parsedData));
    getCertifiableItems().forEach(item => {
        const concept = certData.concepts[item.code];
        if (!concept) return;
        const originQty = certOriginQty(item.code, month);
        // getMeasurementTotal() prefiere concept.quantity si es finito, así
        // que fijarlo garantiza que el ~M generado lleve la cantidad exacta
        concept.quantity = originQty;
        concept.measurements = [{ label: 'Certificado a origen', units: originQty, l: '', w: '', h: '' }];
    });

    // Reutilizar el motor de generación de BC3 operando temporalmente sobre
    // los datos de certificación, sin alterar el estado real del presupuesto
    const liveData = parsedData;
    parsedData = certData;
    let text;
    try {
        text = generateModifiedBC3();
    } finally {
        parsedData = liveData;
    }
    if (!text) return text;

    // Marcar la cabecera ~V con el número de certificación y el mes, para que
    // el fichero se identifique como certificación al abrirlo en otro programa.
    // Campos del ~V: ~V|Propietario|Formato|Programa|Descripción|Codificación|Tipo|Nivel|
    const lines = text.split(/\r\n/);
    if (lines[0] && lines[0].startsWith('~V|')) {
        const parts = lines[0].split('|');
        const certNumber = explicitCertificationNumber || getCertNumberForMonth(month);
        const certTag = `Certificación nº ${certNumber} (${certMonthLabel(month)})`;
        if (parts.length > 4) {
            const baseDesc = parts[4] || '';
            parts[4] = sanitizeBC3Field(baseDesc ? `${baseDesc} — ${certTag}` : certTag);
        }
        if (parts.length > 6) parts[6] = 'Certificacion';
        lines[0] = parts.join('|');
    }
    return lines.join('\r\n');
}

function projectBaseName() {
    return currentFileName.replace(/\.(bc3|sysmed)$/i, '') || 'proyecto';
}

function triggerBlobDownload(blob, fileName) {
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 0);
}

function exportBudgetToBC3() {
    if (!parsedData) {
        alert('No hay datos de archivo cargados.');
        return false;
    }
    const content = generateModifiedBC3();
    if (!content) {
        alert('Error al generar el archivo modificado.');
        return false;
    }
    triggerBlobDownload(
        new Blob([content], { type: 'text/plain;charset=utf-8' }),
        `${projectBaseName()}_modificado.bc3`
    );
    showNotification('Presupuesto BC3 exportado');
    return true;
}

async function saveSysMed() {
    if (!parsedData) {
        alert('No hay datos de archivo cargados.');
        return false;
    }

    const budgetContent = generateModifiedBC3();
    if (!budgetContent) {
        alert('Error al generar la medición BC3 del proyecto.');
        return false;
    }

    const months = getStoredCertificationMonths();
    const formData = new FormData();
    formData.append('medicion', new Blob([budgetContent], { type: 'text/plain;charset=utf-8' }), 'medicion.bc3');
    formData.append('budget_original_name', currentBudgetFileName || `${projectBaseName()}.bc3`);
    formData.append('download_name', projectBaseName());
    formData.append('project_name', parsedData.properties?.description || projectBaseName());
    formData.append('certification_periods', JSON.stringify(months));

    if (currentSysMedManifest?.packageId) {
        formData.append('package_id', currentSysMedManifest.packageId);
        formData.append('revision', String((parseInt(currentSysMedManifest.revision) || 0) + 1));
        if (currentSysMedManifest.createdAt) formData.append('created_at', currentSysMedManifest.createdAt);
    }

    months.forEach((month, index) => {
        const content = generateCertificationBC3(month, index + 1);
        formData.append(
            'certifications[]',
            new Blob([content], { type: 'text/plain;charset=utf-8' }),
            `Certificacion${index + 1}.bc3`
        );
    });

    const saveButton = document.getElementById('saveBtn');
    const previousText = saveButton ? saveButton.textContent : '';
    if (saveButton) {
        saveButton.disabled = true;
        saveButton.textContent = 'Guardando...';
    }

    try {
        const response = await fetch('sysmed.php', { method: 'POST', body: formData });
        if (!response.ok) {
            let message = 'No se ha podido generar el archivo SYSmed.';
            try {
                const errorResult = await response.json();
                if (errorResult.error) message = errorResult.error;
            } catch (error) { /* respuesta no JSON */ }
            throw new Error(message);
        }

        const blob = await response.blob();
        triggerBlobDownload(blob, `${projectBaseName()}.sysmed`);
        currentSysMedManifest = {
            ...(currentSysMedManifest || {}),
            packageId: response.headers.get('X-SysMed-Package-Id') || currentSysMedManifest?.packageId,
            revision: parseInt(response.headers.get('X-SysMed-Revision')) || 1,
            createdAt: response.headers.get('X-SysMed-Created-At') || currentSysMedManifest?.createdAt,
            budget: { originalName: currentBudgetFileName }
        };
        scheduleSessionAutosave();
        showNotification(`Proyecto SYSmed guardado con ${months.length} certificación${months.length === 1 ? '' : 'es'}`);
        return true;
    } catch (error) {
        console.error(error);
        alert(error.message || 'No se ha podido guardar el archivo SYSmed.');
        return false;
    } finally {
        if (saveButton) {
            saveButton.disabled = false;
            saveButton.textContent = previousText;
        }
    }
}

// Guardar proyecto completo en SYSmed; el BC3 individual sigue disponible
// desde Exportar para mantener la interoperabilidad anterior.
const saveBtn = document.getElementById('saveBtn');
if (saveBtn) saveBtn.addEventListener('click', saveSysMed);

// Función para exportar a PDF (DIN A4 esquematizado)
function exportToPdf() {
    if (!parsedData) {
        alert("No hay datos de archivo cargados.");
        return;
    }

    // Importar jsPDF y jspdf-autotable (desde window)
    let jsPDFConstructor = null;
    if (window.jspdf && window.jspdf.jsPDF) {
        jsPDFConstructor = window.jspdf.jsPDF;
    } else if (window.jsPDF) {
        jsPDFConstructor = window.jsPDF;
    }

    if (!jsPDFConstructor) {
        alert("La librería PDF no se cargó correctamente. Por favor verifica tu conexión a internet.");
        return;
    }

    // Crear documento A4 (p = portrait, mm = milímetros, a4 = DIN A4)
    const doc = new jsPDFConstructor({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    // Validar extensión AutoTable
    if (typeof doc.autoTable !== 'function') {
        alert("La extensión de tablas para PDF (AutoTable) no está disponible. Por favor recarga la página.");
        return;
    }

    // Título del presupuesto
    const budgetTitle = parsedData.properties.description || "Presupuesto sin título";
    const budgetOwner = parsedData.properties.owner || "";
    const totalBudgetAmount = calculateTotalBudget();

    // 1. Título y bloque de metadatos en la primera página
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(128, 0, 32); // Granate
    doc.text("PRESUPUESTO DE OBRA", 15, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);
    doc.text(`Proyecto: ${budgetTitle}`, 15, 26);
    if (budgetOwner) {
        doc.text(`Propietario: ${budgetOwner}`, 15, 31);
        doc.text(`Fecha de exportación: ${new Date().toLocaleDateString('es-ES')}`, 15, 36);
    } else {
        doc.text(`Fecha de exportación: ${new Date().toLocaleDateString('es-ES')}`, 15, 31);
    }
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(22, 163, 74); // Verde para el total
    const formattedTotalStr = totalBudgetAmount.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
    doc.text(`TOTAL PRESUPUESTO: ${formattedTotalStr}`, 15, budgetOwner ? 41 : 36);

    // Línea divisoria en granate
    doc.setDrawColor(128, 0, 32); // Granate
    doc.setLineWidth(0.5);
    doc.line(15, budgetOwner ? 44 : 39, 195, budgetOwner ? 44 : 39);

    // 2. Extraer datos del presupuesto en un formato plano
    const dataRows = [];
    
    // Función recursiva para recorrer solo Capítulos, Subcapítulos y Partidas
    function extractRowsRecursively(code, depth = 0, qty = 1) {
        const concept = parsedData.concepts[code];
        if (!concept) return;

        const isChapter = concept.code.endsWith('#') || concept.is_root;
        const priceVal = parseFloat(concept.price) || 0;
        const qtyVal = parseFloat(qty) || 0;
        const amountVal = priceVal * qtyVal;

        // Sangrar el resumen visualmente según la profundidad
        const indent = "   ".repeat(depth);
        const summaryText = indent + (concept.summary || '(Sin título)');

        const qtyStr = (qtyVal === 0 || isChapter) ? '' : qtyVal.toLocaleString('es-ES', { minimumFractionDigits: 3, maximumFractionDigits: 3 });
        const priceStr = (priceVal === 0 || isChapter) ? '' : priceVal.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
        const amountStr = (amountVal === 0) ? '' : amountVal.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';

        dataRows.push({
            code: concept.code.replace(/#+\s*$/, ''),
            unit: concept.unit || '',
            summary: summaryText,
            qty: qtyStr,
            price: priceStr,
            amount: amountStr,
            depth: depth
        });

        // Recorrer los hijos si es un capítulo
        if (isChapter) {
            const children = getConceptDecomposition(concept);
            children.forEach(child => {
                extractRowsRecursively(child.code, depth + 1, child.factor);
            });
        }
    }

    const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
    roots.forEach(rootCode => {
        extractRowsRecursively(rootCode, 0, 1);
    });

    // 3. Generar la tabla usando AutoTable
    doc.autoTable({
        startY: budgetOwner ? 48 : 43,
        margin: { left: 15, right: 15, bottom: 20 },
        theme: 'plain',
        styles: {
            fontSize: 7.5,
            cellPadding: 2,
            lineColor: [220, 220, 220],
            lineWidth: 0.1,
            textColor: [40, 40, 40],
            font: 'helvetica'
        },
        columnStyles: {
            0: { cellWidth: 20 }, // Código
            1: { cellWidth: 10, halign: 'center' }, // Unidad
            2: { cellWidth: 'auto' }, // Resumen/Descripción
            3: { cellWidth: 18, halign: 'right' }, // Cantidad
            4: { cellWidth: 22, halign: 'right' }, // Precio
            5: { cellWidth: 25, halign: 'right' }  // Importe
        },
        head: [['Código', 'Ud', 'Resumen', 'Cant.', 'Precio', 'Importe']],
        headStyles: {
            fillColor: [128, 0, 32], // Granate institucional
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 8.5,
            lineWidth: 0
        },
        body: dataRows.map(r => [r.code, r.unit, r.summary, r.qty, r.price, r.amount]),
        
        // Estilos específicos por fila (Capítulos vs Partidas)
        didParseCell: function (data) {
            if (data.row.section !== 'body') return;
            
            const rowIndex = data.row.index;
            const rowData = dataRows[rowIndex];
            
            if (rowData) {
                // Si es capítulo raíz (depth = 0)
                if (rowData.depth === 0) {
                    data.cell.styles.fillColor = [240, 240, 240];
                    data.cell.styles.fontStyle = 'bold';
                    data.cell.styles.textColor = [0, 0, 0];
                }
                // Si es un capítulo intermedio (depth = 1)
                else if (rowData.depth === 1) {
                    data.cell.styles.fillColor = [248, 248, 248];
                    data.cell.styles.fontStyle = 'bold';
                }
                // Si es un subcapítulo/partida sangrado
                else if (rowData.depth >= 2 && data.column.index === 2) {
                    // Solo el texto del resumen en negrita si no tiene precio (es decir, es un subcapítulo)
                    if (rowData.price === '') {
                        data.cell.styles.fontStyle = 'bold';
                    }
                }
            }
        }
    });

    // 4. Estampar encabezados y pies de página (Página X de Y) en todas las hojas creadas
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        
        // Dibujar encabezado en páginas después de la primera
        if (i > 1) {
            doc.setFont("helvetica", "normal");
            doc.setFontSize(8);
            doc.setTextColor(120, 120, 120);
            doc.text(budgetTitle.substring(0, 50) + (budgetTitle.length > 50 ? '...' : ''), 15, 10);
            doc.text("PRESUPUESTO DE OBRA", 195 - doc.getTextWidth("PRESUPUESTO DE OBRA"), 10);
            
            // Línea superior de cabecera
            doc.setDrawColor(200, 200, 200);
            doc.setLineWidth(0.2);
            doc.line(15, 12, 195, 12);
        }

        // Pie de página (Footer)
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);
        doc.setTextColor(120, 120, 120);
        
        // Línea inferior de pie
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.2);
        doc.line(15, 282, 195, 282);
        
        // Textos pie de página
        doc.text("© Licencia Open Source - Software Libre y de Derechos Abiertos | V0.4.0 by System Arquitectura", 15, 287);
        
        const pageStr = `Página ${i} de ${totalPages}`;
        doc.text(pageStr, 195 - doc.getTextWidth(pageStr), 287);
    }

    // Guardar/Descargar el PDF
    const baseName = currentFileName.replace(/\.[^/.]+$/, "");
    doc.save(`${baseName}_presupuesto.pdf`);
    showNotification('PDF exportado');
}

// Modo Oscuro
const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-theme');
        setThemeIcon(true);
    } else {
        document.body.classList.remove('dark-theme');
        setThemeIcon(false);
    }

    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-theme');
        setThemeIcon(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

// Drag & Drop
const dragOverlay = document.getElementById('dragOverlay');

window.addEventListener('dragenter', (e) => {
    e.preventDefault();
    if (dragOverlay) dragOverlay.style.display = 'flex';
});

window.addEventListener('dragover', (e) => {
    e.preventDefault();
});

if (dragOverlay) {
    dragOverlay.addEventListener('dragleave', (e) => {
        if (e.relatedTarget === null || !dragOverlay.contains(e.relatedTarget)) {
            dragOverlay.style.display = 'none';
        }
    });

    dragOverlay.addEventListener('drop', async (e) => {
        e.preventDefault();
        dragOverlay.style.display = 'none';

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            const lowerName = file.name.toLowerCase();
            if (!lowerName.endsWith('.bc3') && !lowerName.endsWith('.sysmed')) {
                alert('Por favor, selecciona un archivo con extensión .bc3 o .sysmed');
                return;
            }

            currentFileName = file.name;
            const fileNameEl = document.getElementById('fileName');
            if (fileNameEl) fileNameEl.textContent = currentFileName;

            processBc3File(file);
        }
    });
}

/* ==========================================================================
   Nuevas Funcionalidades: Dashboard, Mediciones, Excel, Comparar y Coeficientes
   ========================================================================== */

// 1. Auxiliar para actualizar factores de descomposición del padre al cambiar mediciones
function updateParentDecompositionFactor(childCode, newFactor) {
    Object.values(parsedData.concepts).forEach(parentConcept => {
        if (parentConcept.decomposition && parentConcept.decomposition.length > 0) {
            parentConcept.decomposition.forEach(item => {
                if (item.code === childCode) {
                    item.factor = newFactor;
                }
            });
        }
    });
}

// 2. Recalcular cantidad del concepto basado en mediciones y actualizar
function recalculateMeasurements(concept) {
    if (!concept || !concept.measurements) return;

    let total = 0;
    concept.measurements.forEach(m => {
        const u = m.units === '' ? 1 : parseFloat(m.units.toString().replace(',', '.'));
        const l = m.l === '' ? 1 : parseFloat(m.l.toString().replace(',', '.'));
        const w = m.w === '' ? 1 : parseFloat(m.w.toString().replace(',', '.'));
        const h = m.h === '' ? 1 : parseFloat(m.h.toString().replace(',', '.'));

        const vU = isNaN(u) ? 1 : u;
        const vL = isNaN(l) ? 1 : l;
        const vW = isNaN(w) ? 1 : w;
        const vH = isNaN(h) ? 1 : h;

        total += vU * vL * vW * vH;
    });

    // Actualizar el factor en el padre
    updateParentDecompositionFactor(concept.code, total);

    // Guardar cantidad del concepto
    concept.quantity = total;

    // Recalcular todo en cascada
    recalculateAll();

    // Actualizar el árbol visual
    const scrollPos = document.getElementById('treeContent').scrollTop;
    renderCurrentLevel();
    document.getElementById('treeContent').scrollTop = scrollPos;

    // Refrescar panel de detalles para ver reflejado el nuevo TOTAL
    showDetails(concept.code);
    updateTotalBudgetDisplay();
    saveHistoryState();
}

// 3. Exportación a Excel con SheetJS y Fórmulas
function exportToExcel() {
    if (!parsedData) {
        alert("No hay datos de archivo cargados.");
        return;
    }

    if (typeof XLSX === 'undefined') {
        alert("La librería de Excel (SheetJS) no se cargó correctamente. Por favor verifica tu conexión a internet.");
        return;
    }

    const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
    const excelRows = [];
    let currentRow = 2; // Fila 1 es cabecera
    const rowChildrenMap = {};

    function collectRows(code, depth = 0, qty = 1, parentRowIndex = null) {
        const concept = parsedData.concepts[code];
        if (!concept) return;

        const isChapter = concept.code.endsWith('#') || concept.is_root;
        const myRowIndex = currentRow++;

        if (parentRowIndex !== null) {
            if (!rowChildrenMap[parentRowIndex]) rowChildrenMap[parentRowIndex] = [];
            rowChildrenMap[parentRowIndex].push(myRowIndex);
        }

        const priceVal = parseFloat(concept.price) || 0;
        const qtyVal = parseFloat(qty) || 0;

        excelRows.push({
            rowIndex: myRowIndex,
            code: concept.code.replace(/#+\s*$/, ''),
            unit: concept.unit || '',
            summary: "   ".repeat(depth) + (concept.summary || '(Sin título)'),
            qty: isChapter ? '' : qtyVal,
            price: isChapter ? '' : priceVal,
            isChapter: isChapter,
            depth: depth
        });

        if (isChapter) {
            const children = getConceptDecomposition(concept);
            children.forEach(child => {
                collectRows(child.code, depth + 1, child.factor, myRowIndex);
            });
        }
    }

    roots.forEach(rootCode => {
        collectRows(rootCode, 0, 1, null);
    });

    const wb = XLSX.utils.book_new();
    const wsData = [
        ['Código', 'Ud', 'Resumen', 'Cantidad', 'Precio', 'Importe']
    ];

    excelRows.forEach(row => {
        wsData.push([
            row.code,
            row.unit,
            row.summary,
            row.qty,
            row.price,
            '' // Fórmula
        ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Inyectar fórmulas y formatos
    excelRows.forEach(row => {
        const cellRef = `F${row.rowIndex}`;
        if (row.isChapter) {
            const childRows = rowChildrenMap[row.rowIndex];
            if (childRows && childRows.length > 0) {
                const sumTerms = childRows.map(rIndex => `F${rIndex}`).join('+');
                ws[cellRef] = { f: sumTerms };
            } else {
                ws[cellRef] = { v: 0 };
            }
        } else {
            ws[cellRef] = { f: `D${row.rowIndex}*E${row.rowIndex}` };
        }
    });

    // Formatear números
    for (let r = 2; r <= excelRows.length + 1; r++) {
        if (ws[`D${r}`] && ws[`D${r}`].v !== '') ws[`D${r}`].z = '#,##0.000';
        if (ws[`E${r}`] && ws[`E${r}`].v !== '') ws[`E${r}`].z = '#,##0.00 €';
        if (ws[`F${r}`]) ws[`F${r}`].z = '#,##0.00 €';
    }

    ws['!cols'] = [
        { wch: 15 }, // Código
        { wch: 6 },  // Ud
        { wch: 60 }, // Resumen
        { wch: 12 }, // Cantidad
        { wch: 12 }, // Precio
        { wch: 15 }  // Importe
    ];

    XLSX.utils.book_append_sheet(wb, ws, "Presupuesto");

    // Guardar/Descargar el Excel
    const baseName = currentFileName.replace(/\.[^/.]+$/, "");
    XLSX.writeFile(wb, `${baseName}_presupuesto.xlsx`);
    showNotification('Excel exportado');
}

// 4. Lógica de Dashboard y Gráficos
const RESOURCE_CHART_COLORS = {
    MO: '#ef4444',
    MAQ: '#d97706',
    MAT: '#3b82f6',
    SUB: '#a855f7'
};

function formatEuro(value, compact = false) {
    return new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: compact ? 0 : 2
    }).format(value || 0);
}

function calculateResourceDistribution() {
    const distribution = { MO: 0, MAQ: 0, MAT: 0, SUB: 0 };

    function traverse(code, accumulatedQty) {
        const concept = parsedData.concepts[code];
        if (!concept) return;

        const isChapter = concept.code.endsWith('#') || concept.is_root;
        const children = getConceptDecomposition(concept);

        if (isChapter) {
            children.forEach(child => {
                traverse(child.code, accumulatedQty * (parseFloat(child.factor) || 1));
            });
        } else {
            if (concept.decomposition && concept.decomposition.length > 0) {
                concept.decomposition.forEach(item => {
                    const childConcept = parsedData.concepts[item.code];
                    const childPrice = childConcept ? (parseFloat(childConcept.price) || 0) : 0;
                    const itemFactor = parseFloat(item.factor) || 0;
                    const itemType = item.type; // 1=MO, 2=MAQ, 3=MAT, 4=SUB
                    const totalCost = itemFactor * childPrice * accumulatedQty;

                    if (itemType === 1) distribution.MO += totalCost;
                    else if (itemType === 2) distribution.MAQ += totalCost;
                    else if (itemType === 3) distribution.MAT += totalCost;
                    else distribution.SUB += totalCost;
                });
            } else {
                const price = parseFloat(concept.price) || 0;
                const totalCost = price * accumulatedQty;
                distribution.SUB += totalCost;
            }
        }
    }

    const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
    roots.forEach(rootCode => {
        traverse(rootCode, 1.0);
    });

    return distribution;
}

function getTopChapters() {
    const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
    const chapters = [];

    roots.forEach(rootCode => {
        const concept = parsedData.concepts[rootCode];
        if (concept) {
            const children = getConceptDecomposition(concept);

            children.forEach(child => {
                const childConcept = parsedData.concepts[child.code];
                if (childConcept) {
                    chapters.push({
                        summary: childConcept.summary || childConcept.code,
                        cost: (parseFloat(childConcept.price) || 0) * (parseFloat(child.factor) || 1)
                    });
                }
            });
        }
    });

    if (chapters.length === 0) {
        roots.forEach(rootCode => {
            const concept = parsedData.concepts[rootCode];
            if (concept) {
                chapters.push({
                    summary: concept.summary || concept.code,
                    cost: parseFloat(concept.price) || 0
                });
            }
        });
    }

    return chapters.sort((a, b) => b.cost - a.cost).slice(0, 5);
}

function renderCharts() {
    const dist = calculateResourceDistribution();
    const topCaps = getTopChapters();

    if (typeChartInstance) typeChartInstance.destroy();
    if (chaptersChartInstance) chaptersChartInstance.destroy();

    const isDark = document.body.classList.contains('dark-theme');
    const labelColor = isDark ? '#e2e8f0' : '#1e293b';
    const gridColor = isDark ? 'rgba(148, 163, 184, 0.18)' : 'rgba(100, 116, 139, 0.18)';
    const tooltipBg = isDark ? '#0f172a' : '#ffffff';
    const tooltipColor = isDark ? '#f8fafc' : '#0f172a';
    const sharedTooltip = {
        backgroundColor: tooltipBg,
        titleColor: tooltipColor,
        bodyColor: tooltipColor,
        borderColor: isDark ? '#334155' : '#cbd5e1',
        borderWidth: 1,
        padding: 10,
        callbacks: {
            label: context => {
                const label = context.label || context.dataset.label || '';
                const raw = context.parsed?.x ?? context.parsed ?? 0;
                return `${label}: ${formatEuro(raw)}`;
            }
        }
    };

    const ctx1 = document.getElementById('resourceTypeChart').getContext('2d');
    typeChartInstance = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Mano de Obra (MO)', 'Maquinaria (MAQ)', 'Materiales (MAT)', 'Otros/Subcontratas (SUB)'],
            datasets: [{
                data: [dist.MO, dist.MAQ, dist.MAT, dist.SUB],
                backgroundColor: [
                    RESOURCE_CHART_COLORS.MO,
                    RESOURCE_CHART_COLORS.MAQ,
                    RESOURCE_CHART_COLORS.MAT,
                    RESOURCE_CHART_COLORS.SUB
                ],
                borderColor: isDark ? '#0f172a' : '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: sharedTooltip,
                legend: {
                    position: 'bottom',
                    labels: {
                        color: labelColor,
                        usePointStyle: true,
                        boxWidth: 8,
                        padding: 16
                    }
                }
            }
        }
    });

    const ctx2 = document.getElementById('chaptersCostChart').getContext('2d');
    chaptersChartInstance = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: topCaps.map(c => c.summary.substring(0, 25) + (c.summary.length > 25 ? '...' : '')),
            datasets: [{
                label: 'Coste en Euros (€)',
                data: topCaps.map(c => c.cost),
                backgroundColor: topCaps.map((_, idx) => {
                    const palette = [
                        RESOURCE_CHART_COLORS.MAT,
                        RESOURCE_CHART_COLORS.MO,
                        RESOURCE_CHART_COLORS.MAQ,
                        RESOURCE_CHART_COLORS.SUB,
                        '#0ea5e9'
                    ];
                    return palette[idx % palette.length];
                }),
                borderColor: 'rgba(255, 255, 255, 0)',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: sharedTooltip
            },
            scales: {
                x: {
                    grid: { color: gridColor },
                    ticks: {
                        color: labelColor,
                        callback: value => formatEuro(value, true)
                    }
                },
                y: {
                    grid: { color: 'transparent' },
                    ticks: { color: labelColor }
                }
            }
        }
    });
}

// 5. Comparador: Estadísticas de Diferencias
function calculateCompareStats() {
    if (!parsedData || !compareData) return;

    let modifiedCount = 0;
    const totalMain = calculateTotalBudget();
    let totalCompare = 0;

    const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
    roots.forEach(code => {
        const compConcept = compareData[code];
        if (compConcept) {
            totalCompare += parseFloat(compConcept.price) || 0;
        }
    });

    const diffTotal = totalMain - totalCompare;
    const pctDiff = totalCompare === 0 ? 0 : (diffTotal / totalCompare) * 100;

    Object.keys(parsedData.concepts).forEach(code => {
        const mainConcept = parsedData.concepts[code];
        const compConcept = compareData[code];
        if (mainConcept && compConcept) {
            if (parseFloat(mainConcept.price) !== parseFloat(compConcept.price) || mainConcept.summary !== compConcept.summary) {
                modifiedCount++;
            }
        }
    });

    const resultsDiv = document.getElementById('compareResults');
    if (resultsDiv) resultsDiv.style.display = 'block';

    const diffValEl = document.getElementById('compareTotalDiff');
    if (diffValEl) {
        const formattedDiff = diffTotal.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
        const formattedPct = pctDiff.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' %';
        diffValEl.textContent = `${diffTotal >= 0 ? '+' : ''}${formattedDiff} (${diffTotal >= 0 ? '+' : ''}${formattedPct})`;
        diffValEl.className = 'stat-value ' + (diffTotal >= 0 ? 'pec-total' : 'clear-compare-btn');
    }

    const modCountEl = document.getElementById('compareModifiedCount');
    if (modCountEl) modCountEl.textContent = modifiedCount;
}

function getActiveFilterValue(id) {
    return document.getElementById(id)?.value || 'all';
}

// 6. Filtros: Comprobación de visibilidad de nodos y expansión
function shouldShowNode(code) {
    if (!parsedData) return true;
    const concept = parsedData.concepts[code];
    if (!concept) return true;

    const isChapter = concept.code.endsWith('#') || concept.is_root;
    if (isChapter) {
        return hasVisibleChildren(code);
    }

    // Filtro por Importe
    const costFilterVal = getActiveFilterValue('costFilter');
    if (costFilterVal !== 'all') {
        const limit = parseFloat(costFilterVal);
        const price = parseFloat(concept.price) || 0;
        const quantity = parseFloat(concept.quantity) || 1.0;
        const cost = price * quantity;
        if (cost <= limit) return false;
    }

    // Filtro por Tipo de Recurso
    const resourceFilterVal = getActiveFilterValue('resourceFilter');
    if (resourceFilterVal !== 'all') {
        if (concept.decomposition && concept.decomposition.length > 0) {
            const hasResourceType = concept.decomposition.some(item => {
                if (resourceFilterVal === 'mo' && item.type === 1) return true;
                if (resourceFilterVal === 'maq' && item.type === 2) return true;
                if (resourceFilterVal === 'mat' && item.type === 3) return true;
                if (resourceFilterVal === 'sub' && item.type === 4) return true;
                return false;
            });
            if (!hasResourceType) return false;
        } else {
            if (resourceFilterVal !== 'sub') return false; // Tratar sin descomposición como subcontrata
        }
    }

    return true;
}

function hasVisibleChildren(code) {
    const concept = parsedData.concepts[code];
    if (!concept) return false;

    const isChapter = concept.code.endsWith('#') || concept.is_root;
    if (!isChapter) {
        // Para nodos hoja (partidas), validamos el filtro en sí
        const costFilterVal = getActiveFilterValue('costFilter');
        const resourceFilterVal = getActiveFilterValue('resourceFilter');
        if (costFilterVal === 'all' && resourceFilterVal === 'all') return true;

        const price = parseFloat(concept.price) || 0;
        const quantity = parseFloat(concept.quantity) || 1.0;
        const cost = price * quantity;

        if (costFilterVal !== 'all' && cost <= parseFloat(costFilterVal)) return false;

        if (resourceFilterVal !== 'all') {
            if (concept.decomposition && concept.decomposition.length > 0) {
                return concept.decomposition.some(item => {
                    if (resourceFilterVal === 'mo' && item.type === 1) return true;
                    if (resourceFilterVal === 'maq' && item.type === 2) return true;
                    if (resourceFilterVal === 'mat' && item.type === 3) return true;
                    if (resourceFilterVal === 'sub' && item.type === 4) return true;
                    return false;
                });
            } else {
                return resourceFilterVal === 'sub';
            }
        }
        return true;
    }

    const children = getConceptDecomposition(concept);

    return children.some(child => hasVisibleChildren(child.code));
}

// 7. Enlazar Eventos de Nuevas Funcionalidades (Dropdown de Exportación)
const exportDropdown = document.getElementById('exportDropdown');
if (exportDropdown) {
    const toggleBtn = exportDropdown.querySelector('.dropdown-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            exportDropdown.classList.toggle('show');
        });
    }
}

// Cerrar dropdown al hacer click fuera
window.addEventListener('click', (e) => {
    const expDrop = document.getElementById('exportDropdown');
    if (expDrop && !expDrop.contains(e.target)) {
        expDrop.classList.remove('show');
    }
});

const exportPdfBtn = document.getElementById('exportPdfBtn');
const exportExcelBtn = document.getElementById('exportExcelBtn');
const exportBudgetBc3Btn = document.getElementById('exportBudgetBc3Btn');

if (exportBudgetBc3Btn) {
    exportBudgetBc3Btn.addEventListener('click', () => {
        const expDrop = document.getElementById('exportDropdown');
        if (expDrop) expDrop.classList.remove('show');
        exportBudgetToBC3();
    });
}

if (exportPdfBtn) {
    exportPdfBtn.addEventListener('click', () => {
        const expDrop = document.getElementById('exportDropdown');
        if (expDrop) expDrop.classList.remove('show');
        exportToPdf();
    });
}

if (exportExcelBtn) {
    exportExcelBtn.addEventListener('click', () => {
        const expDrop = document.getElementById('exportDropdown');
        if (expDrop) expDrop.classList.remove('show');
        exportToExcel();
    });
}

function openModal(modalEl, display = 'flex') {
    if (!modalEl) return;
    modalEl.classList.remove('is-hidden');
    modalEl.style.display = display;
}

function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.style.display = 'none';
    modalEl.classList.add('is-hidden');
}

// Cierre del proyecto actual con guardado contextual: un BC3 si solo existe
// el presupuesto, o el contenedor SYSmed si hay certificaciones mensuales.
const closeProjectBtn = document.getElementById('closeProjectBtn');
const closeProjectModal = document.getElementById('closeProjectModal');
const closeProjectDismissBtn = document.getElementById('closeProjectDismissBtn');
const closeProjectCancelBtn = document.getElementById('closeProjectCancelBtn');
const closeProjectDiscardBtn = document.getElementById('closeProjectDiscardBtn');
const closeProjectSaveBtn = document.getElementById('closeProjectSaveBtn');
const closeProjectFormat = document.getElementById('closeProjectFormat');
const closeProjectMessage = document.getElementById('closeProjectMessage');
let closeProjectPreviousFocus = null;

function getCloseProjectSaveMode() {
    const certificationCount = getStoredCertificationMonths().length;
    return {
        certificationCount,
        format: certificationCount > 0 ? 'sysmed' : 'bc3'
    };
}

function openCloseProjectDialog() {
    if (!parsedData || !closeProjectModal) return;
    const mode = getCloseProjectSaveMode();
    const hasCertifications = mode.format === 'sysmed';
    closeProjectPreviousFocus = document.activeElement;

    if (closeProjectFormat) {
        closeProjectFormat.textContent = hasCertifications
            ? `${mode.certificationCount} certificación${mode.certificationCount === 1 ? '' : 'es'} · Guardar en SYSmed`
            : 'Solo presupuesto y mediciones · Guardar en BC3';
        closeProjectFormat.classList.toggle('is-sysmed', hasCertifications);
    }
    if (closeProjectMessage) {
        closeProjectMessage.textContent = hasCertifications
            ? 'Para conservar el presupuesto y todas sus certificaciones, guarda el proyecto completo en SYSmed antes de cerrar.'
            : 'Este archivo no contiene certificaciones. Guarda el presupuesto y sus mediciones en BC3 antes de cerrar.';
    }
    if (closeProjectSaveBtn) {
        closeProjectSaveBtn.textContent = hasCertifications ? 'Guardar SYSmed y cerrar' : 'Guardar BC3 y cerrar';
        closeProjectSaveBtn.dataset.saveFormat = mode.format;
    }

    openModal(closeProjectModal);
    setTimeout(() => closeProjectSaveBtn?.focus(), 0);
}

function dismissCloseProjectDialog() {
    closeModal(closeProjectModal);
    if (closeProjectPreviousFocus && typeof closeProjectPreviousFocus.focus === 'function') {
        closeProjectPreviousFocus.focus();
    }
}

function closeCurrentProject() {
    if (!parsedData) return;
    clearTimeout(sessionAutosaveTimer);
    const closingFileName = currentFileName;

    try { localStorage.removeItem(sessionStorageKey(closingFileName)); } catch (error) { /* ignorar */ }
    try { localStorage.removeItem(certStorageKey()); } catch (error) { /* ignorar */ }
    setRecentSessions(getRecentSessions().filter(entry => entry.name !== closingFileName));

    // Evitar que pagehide vuelva a guardar la sesión que acabamos de cerrar.
    parsedData = null;
    try { sessionStorage.setItem(CLOSE_SKIP_AUTORESTORE_KEY, '1'); } catch (error) { /* ignorar */ }
    window.location.reload();
}

if (closeProjectBtn) closeProjectBtn.addEventListener('click', openCloseProjectDialog);
if (closeProjectDismissBtn) closeProjectDismissBtn.addEventListener('click', dismissCloseProjectDialog);
if (closeProjectCancelBtn) closeProjectCancelBtn.addEventListener('click', dismissCloseProjectDialog);
if (closeProjectDiscardBtn) closeProjectDiscardBtn.addEventListener('click', closeCurrentProject);

if (closeProjectSaveBtn) {
    closeProjectSaveBtn.addEventListener('click', async () => {
        const mode = getCloseProjectSaveMode();
        const previousText = closeProjectSaveBtn.textContent;
        closeProjectSaveBtn.disabled = true;
        closeProjectSaveBtn.textContent = mode.format === 'sysmed' ? 'Guardando SYSmed...' : 'Guardando BC3...';

        const saved = mode.format === 'sysmed'
            ? await saveSysMed()
            : exportBudgetToBC3();

        if (saved) {
            // Dar tiempo al navegador a aceptar la descarga antes de recargar.
            await new Promise(resolve => setTimeout(resolve, 300));
            closeCurrentProject();
            return;
        }

        closeProjectSaveBtn.disabled = false;
        closeProjectSaveBtn.textContent = previousText;
    });
}

if (closeProjectModal) {
    closeProjectModal.addEventListener('click', event => {
        if (event.target === closeProjectModal) dismissCloseProjectDialog();
    });
}

// Dashboard modal toggling
const dashboardBtn = document.getElementById('dashboardBtn');
const dashboardModal = document.getElementById('dashboardModal');
const closeDashboardBtn = document.getElementById('closeDashboardBtn');

if (dashboardBtn && dashboardModal && closeDashboardBtn) {
    dashboardBtn.addEventListener('click', () => {
        openModal(dashboardModal);
        setTimeout(renderCharts, 50);
    });

    closeDashboardBtn.addEventListener('click', () => {
        closeModal(dashboardModal);
    });

    dashboardModal.addEventListener('click', (e) => {
        if (e.target === dashboardModal) {
            closeModal(dashboardModal);
        }
    });
}

// Compare modal toggling and upload
const compareBtn = document.getElementById('compareBtn');
const compareModal = document.getElementById('compareModal');
const closeCompareBtn = document.getElementById('closeCompareBtn');
const runCompareBtn = document.getElementById('runCompareBtn');
const compareFileInput = document.getElementById('compareFileInput');
const clearCompareBtn = document.getElementById('clearCompareBtn');

if (compareBtn && compareModal && closeCompareBtn) {
    compareBtn.addEventListener('click', () => {
        openModal(compareModal);
    });

    closeCompareBtn.addEventListener('click', () => {
        closeModal(compareModal);
    });

    compareModal.addEventListener('click', (e) => {
        if (e.target === compareModal) {
            closeModal(compareModal);
        }
    });
}

if (runCompareBtn && compareFileInput) {
    runCompareBtn.addEventListener('click', async () => {
        if (!compareFileInput.files.length) {
            alert("Por favor selecciona un archivo .bc3 para comparar");
            return;
        }

        const formData = new FormData();
        formData.append('bc3file', compareFileInput.files[0]);

        runCompareBtn.textContent = 'Comparando...';
        runCompareBtn.disabled = true;

        try {
            const response = await fetch('upload.php', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();

            if (result.success) {
                compareData = result.data.concepts;
                compareActive = true;

                calculateCompareStats();
                renderCurrentLevel();
                updateTotalBudgetDisplay();

                closeModal(compareModal);
            } else {
                alert("Error al cargar el archivo de comparación: " + result.error);
            }
        } catch (err) {
            console.error(err);
            alert("Error de conexión con el servidor");
        } finally {
            runCompareBtn.textContent = 'Cargar y Comparar';
            runCompareBtn.disabled = false;
        }
    });
}

if (clearCompareBtn) {
    clearCompareBtn.addEventListener('click', () => {
        compareActive = false;
        compareData = null;
        document.getElementById('compareResults').style.display = 'none';
        renderCurrentLevel();
        updateTotalBudgetDisplay();
    });
}

document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (closeProjectModal && getComputedStyle(closeProjectModal).display !== 'none') {
        dismissCloseProjectDialog();
        return;
    }
    [dashboardModal, compareModal, planningModal].forEach(modalEl => {
        if (modalEl && getComputedStyle(modalEl).display !== 'none') {
            closeModal(modalEl);
        }
    });
});

// Filtros avanzados y expansión
const expandAllBtn = document.getElementById('expandAllBtn');
const costFilter = document.getElementById('costFilter');
const resourceFilter = document.getElementById('resourceFilter');

function getExpandableChapterCodes() {
    if (!parsedData) return [];
    return Object.keys(parsedData.concepts).filter(code => code.endsWith('#'));
}

function areAllExpandableChaptersExpanded() {
    const expandableCodes = getExpandableChapterCodes();
    return expandableCodes.length > 0 && expandableCodes.every(code => expandedNodes.has(code));
}

function updateExpandAllButtonState() {
    const btn = document.getElementById('expandAllBtn');
    if (!btn) return;

    const allExpanded = areAllExpandableChaptersExpanded();
    btn.textContent = allExpanded ? 'Contraer Todo' : 'Expandir Todo';
    btn.setAttribute('aria-pressed', allExpanded ? 'true' : 'false');
}

if (expandAllBtn) {
    expandAllBtn.addEventListener('click', () => {
        if (!parsedData) return;

        if (areAllExpandableChaptersExpanded()) {
            expandedNodes.clear();
        } else {
            getExpandableChapterCodes().forEach(code => expandedNodes.add(code));
        }

        renderCurrentLevel();
        scheduleSessionAutosave();
    });
}

if (costFilter) {
    costFilter.addEventListener('change', () => {
        updateFilterCountBadge();
        renderCurrentLevel();
    });
}

if (resourceFilter) {
    resourceFilter.addEventListener('change', () => {
        updateFilterCountBadge();
        renderCurrentLevel();
    });
}

// Hoja inferior de filtros (móvil): botón "Filtros" con contador de filtros activos
const filterBarEl = document.getElementById('filterBar');
const filterSheetToggle = document.getElementById('filterSheetToggle');
const filterSheetBackdrop = document.getElementById('filterSheetBackdrop');
const closeFilterSheetBtn = document.getElementById('closeFilterSheetBtn');

function setFilterSheetOpen(open) {
    if (!filterBarEl || !filterSheetToggle) return;
    filterBarEl.classList.toggle('sheet-open', open);
    filterSheetToggle.setAttribute('aria-expanded', String(open));
}

function isFilterSheetOpen() {
    return !!filterBarEl && filterBarEl.classList.contains('sheet-open');
}

function updateFilterCountBadge() {
    const badge = document.getElementById('filterCountBadge');
    if (!badge) return;
    const activeCount = ['costFilter', 'resourceFilter']
        .filter(id => getActiveFilterValue(id) !== 'all').length;
    badge.textContent = activeCount;
    badge.classList.toggle('is-hidden', activeCount === 0);
}

if (filterSheetToggle) {
    filterSheetToggle.addEventListener('click', () => setFilterSheetOpen(!isFilterSheetOpen()));
}
if (filterSheetBackdrop) {
    filterSheetBackdrop.addEventListener('click', () => setFilterSheetOpen(false));
}
if (closeFilterSheetBtn) {
    closeFilterSheetBtn.addEventListener('click', () => setFilterSheetOpen(false));
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isFilterSheetOpen()) {
        setFilterSheetOpen(false);
    }
});

// Coeficientes globales (PEM vs PEC)
const toggleCoeffsBtn = document.getElementById('toggleCoeffsBtn');
const coeffsPanel = document.getElementById('coeffsPanel');
const applyCoeffsBtn = document.getElementById('applyCoeffsBtn');

if (toggleCoeffsBtn && coeffsPanel) {
    toggleCoeffsBtn.addEventListener('click', () => {
        const isHidden = coeffsPanel.classList.contains('is-hidden') || getComputedStyle(coeffsPanel).display === 'none';
        if (isHidden) {
            coeffsPanel.classList.remove('is-hidden');
            coeffsPanel.style.display = 'block';
        } else {
            coeffsPanel.classList.add('is-hidden');
            coeffsPanel.style.display = 'none';
        }
    });
}

if (applyCoeffsBtn) {
    applyCoeffsBtn.addEventListener('click', () => {
        const ggVal = parseFloat(document.getElementById('coeffGG').value) || 0;
        const biVal = parseFloat(document.getElementById('coeffBI').value) || 0;
        const bajaVal = parseFloat(document.getElementById('coeffBaja').value) || 0;

        globalCoeffs.gg = ggVal;
        globalCoeffs.bi = biVal;
        globalCoeffs.baja = bajaVal;

        updateTotalBudgetDisplay();
        coeffsPanel.classList.add('is-hidden');
        coeffsPanel.style.display = 'none';
        showNotification('Coeficientes aplicados');
    });
}

/* ==========================================================================
   Historial de Cambios: Deshacer (Ctrl+Z) y Rehacer (Ctrl+Y)
   ========================================================================== */

function saveHistoryState() {
    if (!parsedData) return;
    
    // Si el usuario hace un cambio nuevo estando en medio del historial, cortamos los estados futuros
    if (historyIndex < stateHistory.length - 1) {
        stateHistory = stateHistory.slice(0, historyIndex + 1);
    }
    
    // Clonar el estado actual de parsedData
    stateHistory.push(JSON.stringify(parsedData));
    
    // Limitar el historial a los últimos 50 estados para evitar consumo excesivo de memoria
    if (stateHistory.length > 50) {
        stateHistory.shift();
    }
    
    historyIndex = stateHistory.length - 1;
    updateUndoRedoButtonsState();

    // Autoguardado: persistir la sesión editada en localStorage
    scheduleSessionAutosave();
}

function undo() {
    if (historyIndex > 0) {
        historyIndex--;
        parsedData = JSON.parse(stateHistory[historyIndex]);
        
        // Recalcular todo en cascada y repintar
        recalculateAll();
        renderCurrentLevel();
        updateTotalBudgetDisplay();
        
        // Si hay una partida activa en el panel de detalles, refrescarla
        const detCodeEl = document.getElementById('detCode');
        if (detCodeEl && detCodeEl.textContent) {
            const rawCode = Object.keys(parsedData.concepts).find(c => c.replace(/#+\s*$/, '') === detCodeEl.textContent);
            if (rawCode) showDetails(rawCode);
        }
        
        updateUndoRedoButtonsState();
        scheduleSessionAutosave();
        showNotification("Deshacer: Cambio revertido");
    }
}

function redo() {
    if (historyIndex < stateHistory.length - 1) {
        historyIndex++;
        parsedData = JSON.parse(stateHistory[historyIndex]);
        
        // Recalcular todo en cascada y repintar
        recalculateAll();
        renderCurrentLevel();
        updateTotalBudgetDisplay();
        
        // Si hay una partida activa en el panel de detalles, refrescarla
        const detCodeEl = document.getElementById('detCode');
        if (detCodeEl && detCodeEl.textContent) {
            const rawCode = Object.keys(parsedData.concepts).find(c => c.replace(/#+\s*$/, '') === detCodeEl.textContent);
            if (rawCode) showDetails(rawCode);
        }
        
        updateUndoRedoButtonsState();
        scheduleSessionAutosave();
        showNotification("Rehacer: Cambio restaurado");
    }
}

function updateUndoRedoButtonsState() {
    const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');
    
    if (undoBtn) {
        undoBtn.disabled = (historyIndex <= 0);
    }
    if (redoBtn) {
        redoBtn.disabled = (historyIndex >= stateHistory.length - 1);
    }
}

// Mostrar notificación en pantalla estilo Toast flotante
function showNotification(message) {
    let container = document.getElementById('notificationContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notificationContainer';
        container.className = 'notification-container';
        container.setAttribute('aria-live', 'polite');
        container.setAttribute('aria-atomic', 'true');
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('toast-visible');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('toast-visible');
        setTimeout(() => {
            toast.remove();
        }, 200);
    }, 2000);
}

// Atajos de teclado del sistema: Ctrl/Cmd+Z, Ctrl/Cmd+Y y Ctrl/Cmd+Shift+Z
window.addEventListener('keydown', (e) => {
    const usesModifier = e.ctrlKey || e.metaKey;
    if (!usesModifier || e.altKey) return;

    const key = e.key.toLowerCase();
    if (key === 'z' && e.shiftKey) {
        e.preventDefault();
        redo();
    } else if (key === 'z') {
        e.preventDefault();
        undo();
    } else if (key === 'y') {
        e.preventDefault();
        redo();
    }
});

// Enlazar clics de botones
const undoBtn = document.getElementById('undoBtn');
const redoBtn = document.getElementById('redoBtn');

if (undoBtn) {
    undoBtn.addEventListener('click', undo);
}

if (redoBtn) {
    redoBtn.addEventListener('click', redo);
}

// ============================================================
// MÓDULO PLANNING — DIAGRAMA DE GANTT INTERACTIVO
// ============================================================

// Estado Gantt: { taskId: { startWeek, durationWeeks, collapsed } }
let ganttState = {};
let ganttTasks = [];
let ganttStartDate = new Date();
let ganttTotalWeeks = 26;
const GANTT_WEEK_PX = 44; // ancho de cada semana en px
let ganttLeftColWidth = 280;  // ancho columna tareas en px (redimensionable)
let ganttColDrag = null;       // estado drag de la columna

// Clave localStorage basada en el nombre del fichero cargado
function ganttStorageKey() {
    return 'gantt_' + currentFileName.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\.]/g, '');
}

// Guardar estado en localStorage
function ganttSave() {
    try {
        localStorage.setItem(ganttStorageKey(), JSON.stringify({
            startDate: ganttStartDate.toISOString(),
            totalWeeks: ganttTotalWeeks,
            state: ganttState
        }));
    } catch (e) { /* cuota excedida — ignorar */ }
}

// Cargar estado desde localStorage
function ganttLoad() {
    try {
        const raw = localStorage.getItem(ganttStorageKey());
        if (!raw) return false;
        const saved = JSON.parse(raw);
        if (saved.startDate) ganttStartDate = new Date(saved.startDate);
        if (saved.totalWeeks) ganttTotalWeeks = saved.totalWeeks;
        if (saved.state) ganttState = saved.state;
        return true;
    } catch (e) { return false; }
}

// Extraer tareas hasta nivel 3 desde parsedData
function getGanttTasks() {
    const tasks = [];
    if (!parsedData) return tasks;
    const roots = Array.isArray(parsedData.root_nodes)
        ? parsedData.root_nodes
        : Object.values(parsedData.root_nodes);

    function addTask(code, depth, parentId) {
        if (depth > 3) return;
        const concept = parsedData.concepts[code];
        if (!concept) return;
        const id = code;
        const price = parseFloat(concept.price) || 0;
        const children = getConceptDecomposition(concept);
        const hasKids = children.length > 0 && depth < 3;

        tasks.push({
            id,
            code: concept.code.replace(/#+\s*$/, ''),
            summary: concept.summary || concept.code,
            depth,
            parentId,
            price,
            hasKids
        });

        if (hasKids) {
            children.forEach(child => addTask(child.code, depth + 1, id));
        }
    }

    roots.forEach(code => addTask(code, 1, null));
    return tasks;
}

// Distribución inicial automática (proporcional al coste)
function initGanttStateAuto(tasks, totalWeeks) {
    const total = tasks.filter(t => t.depth === 1).reduce((s, t) => s + t.price, 0) || 1;
    let cursor = 1;

    tasks.forEach(task => {
        if (ganttState[task.id]) return; // ya guardado
        if (task.depth === 1) {
            const proportion = task.price / total;
            const dur = Math.max(1, Math.round(proportion * totalWeeks));
            ganttState[task.id] = { startWeek: cursor, durationWeeks: dur, collapsed: false };
            cursor += dur;
        }
    });

    // Subcapítulos: distribuidos dentro del padre
    tasks.forEach(task => {
        if (ganttState[task.id]) return;
        if (task.depth > 1 && task.parentId && ganttState[task.parentId]) {
            const parent = ganttState[task.parentId];
            const siblings = tasks.filter(t => t.parentId === task.parentId);
            const idx = siblings.indexOf(task);
            const dur = Math.max(1, Math.round(parent.durationWeeks / siblings.length));
            const start = parent.startWeek + idx * dur;
            ganttState[task.id] = {
                startWeek: Math.min(start, parent.startWeek + parent.durationWeeks - 1),
                durationWeeks: dur,
                collapsed: false
            };
        }
    });
}

// Calcular fecha de una semana relativa a ganttStartDate
function weekToDate(weekNum) {
    const d = new Date(ganttStartDate);
    d.setDate(d.getDate() + (weekNum - 1) * 7);
    return d;
}

function formatDate(d) {
    return d.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function getCurrentGanttWeek() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(ganttStartDate);
    start.setHours(0, 0, 0, 0);
    const diffDays = Math.floor((today - start) / 86400000);
    if (diffDays < 0) return null;
    const week = Math.floor(diffDays / 7) + 1;
    return week >= 1 && week <= ganttTotalWeeks ? week : null;
}

// Generar cabecera del timeline (meses + semanas)
function buildGanttHeader(totalWeeks) {
    const monthRow = document.createElement('div');
    monthRow.className = 'gantt-header-months';
    const weekRow = document.createElement('div');
    weekRow.className = 'gantt-header-weeks';

    let lastMonth = null;
    let monthSpan = 0;
    let monthCells = [];

    for (let w = 1; w <= totalWeeks; w++) {
        const date = weekToDate(w);
        const month = date.toLocaleDateString('es-ES', { month: 'short', year: '2-digit' });

        const wCell = document.createElement('div');
        wCell.className = 'gantt-week-cell';
        if (getCurrentGanttWeek() === w) wCell.classList.add('gantt-week-today');
        wCell.textContent = 'S' + w;
        wCell.title = formatDate(date);
        weekRow.appendChild(wCell);

        if (month !== lastMonth) {
            if (lastMonth !== null) {
                const mCell = document.createElement('div');
                mCell.className = 'gantt-month-cell';
                if (monthCells.length % 2 === 1) mCell.classList.add('gantt-month-cell-alt');
                mCell.textContent = lastMonth;
                mCell.style.width = (monthSpan * GANTT_WEEK_PX) + 'px';
                monthCells.push(mCell);
            }
            lastMonth = month;
            monthSpan = 1;
        } else {
            monthSpan++;
        }
    }
    if (lastMonth) {
        const mCell = document.createElement('div');
        mCell.className = 'gantt-month-cell';
        if (monthCells.length % 2 === 1) mCell.classList.add('gantt-month-cell-alt');
        mCell.textContent = lastMonth;
        mCell.style.width = (monthSpan * GANTT_WEEK_PX) + 'px';
        monthCells.push(mCell);
    }
    monthCells.forEach(c => monthRow.appendChild(c));

    return { monthRow, weekRow };
}

// Renderizar el modal completo del Gantt
function renderPlanningModal() {
    if (!parsedData) { alert('Carga primero un presupuesto BC3.'); return; }

    ganttTasks = getGanttTasks();
    const loaded = ganttLoad();
    if (!loaded || Object.keys(ganttState).length === 0) {
        ganttState = {};
        initGanttStateAuto(ganttTasks, ganttTotalWeeks);
        ganttSave();
    }

    const modal = document.getElementById('planningModal');
    if (!modal) return;
    openModal(modal);

    rebuildGanttDOM();
}

function rebuildGanttDOM() {
    const container = document.getElementById('ganttContainer');
    if (!container) return;
    container.innerHTML = '';

    const totalWeeks = ganttTotalWeeks;
    const currentWeek = getCurrentGanttWeek();

    // ---- Cabecera grid ----
    const tableWrap = document.createElement('div');
    tableWrap.className = 'gantt-table-wrap';

    // Columna izquierda: nombres de tarea (ancho redimensionable)
    const leftCol = document.createElement('div');
    leftCol.className = 'gantt-left-col';
    leftCol.style.width = ganttLeftColWidth + 'px';
    leftCol.style.minWidth = ganttLeftColWidth + 'px';

    const leftHeader = document.createElement('div');
    leftHeader.className = 'gantt-left-header';
    leftHeader.textContent = 'Tarea';
    leftCol.appendChild(leftHeader);

    // Handle de resize en el borde derecho de la columna
    const colResizeHandle = document.createElement('div');
    colResizeHandle.className = 'gantt-col-resize-handle';
    colResizeHandle.title = 'Arrastrar para cambiar el ancho de la columna';
    colResizeHandle.addEventListener('pointerdown', e => {
        e.preventDefault();
        ganttColDrag = { startX: e.clientX, startWidth: ganttLeftColWidth };
        document.addEventListener('pointermove', doGanttColResize);
        document.addEventListener('pointerup', stopGanttColResize);
        document.addEventListener('pointercancel', stopGanttColResize);
    });
    leftCol.appendChild(colResizeHandle);

    // Columna derecha: timeline
    const rightCol = document.createElement('div');
    rightCol.className = 'gantt-right-col';

    const { monthRow, weekRow } = buildGanttHeader(totalWeeks);
    const headerWrap = document.createElement('div');
    headerWrap.className = 'gantt-header-wrap';
    headerWrap.appendChild(monthRow);
    headerWrap.appendChild(weekRow);
    rightCol.appendChild(headerWrap);

    // Filas de tareas
    const bodyWrap = document.createElement('div');
    bodyWrap.className = 'gantt-body';

    ganttTasks.forEach(task => {
        const st = ganttState[task.id];
        if (!st) return;

        // Verificar si el padre está colapsado
        if (task.parentId && ganttState[task.parentId] && ganttState[task.parentId].collapsed) {
            return;
        }

        // Fila nombre
        const nameRow = document.createElement('div');
        nameRow.className = 'gantt-name-row gantt-depth-' + task.depth;
        nameRow.dataset.taskId = task.id;

        if (task.hasKids) {
            const toggle = document.createElement('span');
            toggle.className = 'gantt-toggle';
            toggle.innerHTML = iconSvg('chevron-right', 'ui-icon toggle-svg');
            toggle.classList.toggle('expanded', !st.collapsed);
            toggle.addEventListener('click', () => {
                ganttState[task.id].collapsed = !ganttState[task.id].collapsed;
                ganttSave();
                rebuildGanttDOM();
            });
            nameRow.appendChild(toggle);
        } else {
            const spacer = document.createElement('span');
            spacer.className = 'gantt-toggle-spacer';
            nameRow.appendChild(spacer);
        }

        const nameSpan = document.createElement('span');
        nameSpan.className = 'gantt-task-name';
        nameSpan.title = task.summary + ' — ' + task.price.toLocaleString('es-ES', { minimumFractionDigits: 2 }) + ' €';
        nameSpan.textContent = task.summary;
        nameRow.appendChild(nameSpan);
        leftCol.appendChild(nameRow);

        // Fila barra
        const barRow = document.createElement('div');
        barRow.className = 'gantt-bar-row';
        barRow.style.width = (totalWeeks * GANTT_WEEK_PX) + 'px';
        barRow.dataset.taskId = task.id;

        // Grid de fondo
        for (let w = 1; w <= totalWeeks; w++) {
            const cell = document.createElement('div');
            cell.className = 'gantt-bg-cell' + (w % 2 === 0 ? ' gantt-bg-week-alt' : '') + (w % 4 === 0 ? ' gantt-bg-month-end' : '');
            cell.style.left = ((w - 1) * GANTT_WEEK_PX) + 'px';
            barRow.appendChild(cell);
        }

        if (currentWeek !== null) {
            const todayLine = document.createElement('div');
            todayLine.className = 'gantt-today-line';
            todayLine.style.left = ((currentWeek - 1) * GANTT_WEEK_PX) + 'px';
            barRow.appendChild(todayLine);
        }

        // Barra de la tarea
        const bar = document.createElement('div');
        bar.className = 'gantt-bar gantt-bar-depth-' + task.depth;
        bar.dataset.taskId = task.id;
        bar.title = `${task.summary} · ${formatEuro(task.price)}`;
        positionBar(bar, st.startWeek, st.durationWeeks, totalWeeks);

        const resizeL = document.createElement('div');
        resizeL.className = 'gantt-resize gantt-resize-l';
        resizeL.addEventListener('pointerdown', e => startGanttDrag(e, task.id, 'left'));

        const barLabel = document.createElement('span');
        barLabel.className = 'gantt-bar-label';
        barLabel.title = task.summary;
        barLabel.textContent = task.summary.length > 18 ? task.summary.slice(0, 16) + '…' : task.summary;

        const resizeR = document.createElement('div');
        resizeR.className = 'gantt-resize gantt-resize-r';
        resizeR.addEventListener('pointerdown', e => startGanttDrag(e, task.id, 'right'));

        bar.appendChild(resizeL);
        bar.appendChild(barLabel);
        bar.appendChild(resizeR);
        bar.addEventListener('pointerdown', e => {
            if (e.target === resizeL || e.target === resizeR) return;
            startGanttDrag(e, task.id, 'move');
        });

        barRow.appendChild(bar);
        bodyWrap.appendChild(barRow);
    });

    rightCol.appendChild(bodyWrap);
    tableWrap.appendChild(leftCol);
    tableWrap.appendChild(rightCol);
    container.appendChild(tableWrap);

    // Sincronizar scroll vertical entre columnas
    const rightScroll = rightCol.querySelector('.gantt-body') || rightCol;
    leftCol.addEventListener('scroll', () => { rightCol.scrollTop = leftCol.scrollTop; });
}

function positionBar(barEl, startWeek, durationWeeks, totalWeeks) {
    const left = (startWeek - 1) * GANTT_WEEK_PX;
    const width = Math.max(GANTT_WEEK_PX * 0.5, durationWeeks * GANTT_WEEK_PX - 2);
    barEl.style.left = left + 'px';
    barEl.style.width = width + 'px';
}

// ---- Resize columna izquierda ----
function doGanttColResize(e) {
    if (!ganttColDrag) return;
    const newWidth = Math.max(140, Math.min(520, ganttColDrag.startWidth + (e.clientX - ganttColDrag.startX)));
    ganttLeftColWidth = newWidth;
    // Actualizar columna izquierda en vivo sin rerenderizar
    const leftColEl = document.querySelector('#ganttContainer .gantt-left-col');
    if (leftColEl) {
        leftColEl.style.width = newWidth + 'px';
        leftColEl.style.minWidth = newWidth + 'px';
    }
}
function stopGanttColResize() {
    ganttColDrag = null;
    document.removeEventListener('pointermove', doGanttColResize);
    document.removeEventListener('pointerup', stopGanttColResize);
    document.removeEventListener('pointercancel', stopGanttColResize);
}

// ---- Drag & Drop del Gantt ----
let ganttDrag = null;

function startGanttDrag(e, taskId, mode) {
    e.preventDefault();
    e.stopPropagation();
    const st = ganttState[taskId];
    if (!st) return;

    // Buscar el parentId de esta tarea para aplicar clamping jerárquico
    const taskObj = ganttTasks.find(t => t.id === taskId);
    const parentId = taskObj ? taskObj.parentId : null;

    ganttDrag = {
        taskId, mode, parentId,
        startX: e.clientX,
        origStart: st.startWeek,
        origDur: st.durationWeeks
    };

    document.addEventListener('pointermove', doGanttDrag);
    document.addEventListener('pointerup', stopGanttDrag);
    document.addEventListener('pointercancel', stopGanttDrag);
}

function doGanttDrag(e) {
    if (!ganttDrag) return;
    const { taskId, mode, parentId, startX, origStart, origDur } = ganttDrag;
    const dx = e.clientX - startX;
    const weeksDelta = Math.round(dx / GANTT_WEEK_PX);
    const st = ganttState[taskId];
    const total = ganttTotalWeeks;

    // Límites del padre (si existe) — la tarea hija nunca puede salir de ellos
    const pst = parentId && ganttState[parentId];
    const pMin = pst ? pst.startWeek : 1;
    const pMax = pst ? pst.startWeek + pst.durationWeeks - 1 : total;

    if (mode === 'move') {
        const raw = Math.max(pMin, Math.min(pMax - origDur + 1, origStart + weeksDelta));
        st.startWeek = raw;
        st.durationWeeks = Math.min(origDur, pMax - raw + 1);
    } else if (mode === 'right') {
        const maxDur = pMax - st.startWeek + 1;
        st.durationWeeks = Math.max(1, Math.min(maxDur, origDur + weeksDelta));
    } else if (mode === 'left') {
        const newStart = Math.max(pMin, Math.min(origStart + origDur - 1, origStart + weeksDelta));
        const newDur = origStart + origDur - newStart;
        st.startWeek = newStart;
        st.durationWeeks = Math.max(1, Math.min(newDur, pMax - newStart + 1));
    }

    // Actualizar barra en DOM sin rerenderizar todo
    const bar = document.querySelector(`.gantt-bar[data-task-id="${taskId}"]`);
    if (bar) positionBar(bar, st.startWeek, st.durationWeeks, total);
}

function stopGanttDrag() {
    if (!ganttDrag) return;
    ganttSave();
    ganttDrag = null;
    document.removeEventListener('pointermove', doGanttDrag);
    document.removeEventListener('pointerup', stopGanttDrag);
    document.removeEventListener('pointercancel', stopGanttDrag);
}

// ---- Exportar Gantt a Excel (tabla estructurada) ----
function exportGanttToExcel() {
    if (typeof XLSX === 'undefined') { alert('Librería Excel no disponible.'); return; }
    const wb = XLSX.utils.book_new();

    const rows = [['Nivel', 'Código', 'Tarea', 'Semana Inicio', 'Fecha Inicio', 'Semana Fin', 'Fecha Fin', 'Duración (sem.)', 'Duración (días)', 'Importe (€)']];

    ganttTasks.forEach(task => {
        const st = ganttState[task.id];
        if (!st) return;
        const startDate = weekToDate(st.startWeek);
        const endDate = weekToDate(st.startWeek + st.durationWeeks);
        rows.push([
            task.depth,
            task.code,
            task.summary,
            st.startWeek,
            formatDate(startDate),
            formatDate(endDate),
            st.startWeek + st.durationWeeks - 1,
            st.durationWeeks,
            st.durationWeeks * 7,
            parseFloat(task.price.toFixed(2))
        ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = [
        { wch: 6 }, { wch: 14 }, { wch: 45 }, { wch: 14 }, { wch: 14 },
        { wch: 12 }, { wch: 14 }, { wch: 16 }, { wch: 14 }, { wch: 14 }
    ];
    // Cabecera en negrita
    const headerRange = XLSX.utils.decode_range(ws['!ref']);
    for (let C = headerRange.s.c; C <= headerRange.e.c; C++) {
        const cell = ws[XLSX.utils.encode_cell({ r: 0, c: C })];
        if (cell) cell.s = { font: { bold: true } };
    }

    XLSX.utils.book_append_sheet(wb, ws, 'Planning Gantt');
    const baseName = currentFileName.replace(/\.[^/.]+$/, '');
    XLSX.writeFile(wb, baseName + '_planning.xlsx');
    showNotification('Planning exportado a Excel');
}

// ---- Exportar Gantt a PDF (A4 landscape, 26 sem/página) ----
function exportGanttToPdf() {
    const JsPDF = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : window.jsPDF;
    if (!JsPDF) { alert('Librería PDF no disponible.'); return; }

    const doc = new JsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    const WEEKS_PER_PAGE = 26;
    const TASK_COL_W = 65;    // mm columna tareas
    const WEEK_W = (297 - TASK_COL_W - 20) / WEEKS_PER_PAGE; // mm por semana
    const ROW_H = 7;          // mm por fila
    const HEADER_H = 14;      // mm cabecera
    const MARGIN = 10;        // mm márgenes
    const PAGE_W = 297;
    const PAGE_H = 210;

    const totalPages = Math.ceil(ganttTotalWeeks / WEEKS_PER_PAGE);

    for (let page = 0; page < totalPages; page++) {
        if (page > 0) doc.addPage();
        const weekStart = page * WEEKS_PER_PAGE + 1;
        const weekEnd = Math.min(weekStart + WEEKS_PER_PAGE - 1, ganttTotalWeeks);

        // Título
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        const projectTitle = (parsedData.properties && parsedData.properties.description) || currentFileName.replace(/\.[^/.]+$/, '');
        doc.text('PLANNING: ' + projectTitle, MARGIN, MARGIN - 2);
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.text('Semanas ' + weekStart + '–' + weekEnd + '   |   Página ' + (page + 1) + ' de ' + totalPages, PAGE_W - MARGIN, MARGIN - 2, { align: 'right' });

        let y = MARGIN;

        // Cabecera: columna tareas + semanas
        doc.setFillColor(80, 20, 40);
        doc.rect(MARGIN, y, TASK_COL_W, HEADER_H / 2, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(7);
        doc.setFont('helvetica', 'bold');
        doc.text('Tarea', MARGIN + 2, y + HEADER_H / 2 - 2);

        // Cabecera semanas
        for (let w = weekStart; w <= weekEnd; w++) {
            const x = MARGIN + TASK_COL_W + (w - weekStart) * WEEK_W;
            doc.setFillColor(80, 20, 40);
            doc.rect(x, y, WEEK_W, HEADER_H / 2, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(5.5);
            doc.text('S' + w, x + WEEK_W / 2, y + HEADER_H / 2 - 2, { align: 'center' });
        }
        // Subrow: meses
        let mX = MARGIN + TASK_COL_W;
        let mMonth = null; let mStart = mX;
        for (let w = weekStart; w <= weekEnd; w++) {
            const dt = weekToDate(w);
            const mon = dt.toLocaleDateString('es-ES', { month: 'short' });
            if (mon !== mMonth) {
                if (mMonth) {
                    doc.setFillColor(120, 40, 60);
                    doc.rect(mStart, y + HEADER_H / 2, mX - mStart, HEADER_H / 2, 'F');
                    doc.setTextColor(255, 255, 255);
                    doc.setFontSize(5.5);
                    doc.text(mMonth, mStart + (mX - mStart) / 2, y + HEADER_H - 2, { align: 'center' });
                }
                mMonth = mon; mStart = mX;
            }
            mX += WEEK_W;
        }
        if (mMonth) {
            doc.setFillColor(120, 40, 60);
            doc.rect(mStart, y + HEADER_H / 2, mX - mStart, HEADER_H / 2, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(5.5);
            doc.text(mMonth, mStart + (mX - mStart) / 2, y + HEADER_H - 2, { align: 'center' });
        }

        y += HEADER_H;

        // Filas de tareas
        doc.setFont('helvetica', 'normal');
        let rowIdx = 0;
        ganttTasks.forEach(task => {
            const st = ganttState[task.id];
            if (!st) return;
            if (task.parentId && ganttState[task.parentId] && ganttState[task.parentId].collapsed) return;

            const ry = y + rowIdx * ROW_H;
            if (ry + ROW_H > PAGE_H - MARGIN) return;

            // Fondo alternado
            doc.setFillColor(rowIdx % 2 === 0 ? 252 : 245, rowIdx % 2 === 0 ? 252 : 245, rowIdx % 2 === 0 ? 252 : 245);
            doc.rect(MARGIN, ry, PAGE_W - 2 * MARGIN, ROW_H, 'F');

            // Texto tarea (sangría por nivel)
            const indent = (task.depth - 1) * 3;
            doc.setFontSize(task.depth === 1 ? 6.5 : 5.5);
            doc.setFont('helvetica', task.depth === 1 ? 'bold' : 'normal');
            doc.setTextColor(30, 30, 30);
            const label = task.summary.length > 38 ? task.summary.slice(0, 36) + '…' : task.summary;
            doc.text(label, MARGIN + 2 + indent, ry + ROW_H - 2);

            // Barra
            const barStart = st.startWeek;
            const barDur = st.durationWeeks;
            const visStart = Math.max(weekStart, barStart);
            const visEnd = Math.min(weekEnd, barStart + barDur - 1);

            if (visEnd >= visStart) {
                const bx = MARGIN + TASK_COL_W + (visStart - weekStart) * WEEK_W;
                const bw = (visEnd - visStart + 1) * WEEK_W - 1;
                const bh = ROW_H - 2;
                const colors = [[128, 0, 32], [180, 60, 80], [200, 100, 110]];
                const c = colors[Math.min(task.depth - 1, 2)];
                doc.setFillColor(c[0], c[1], c[2]);
                doc.roundedRect(bx, ry + 1, bw, bh, 1, 1, 'F');
            }

            // Grid vertical de semanas
            doc.setDrawColor(220, 220, 220);
            doc.setLineWidth(0.1);
            for (let w = weekStart; w <= weekEnd; w++) {
                const wx = MARGIN + TASK_COL_W + (w - weekStart) * WEEK_W;
                doc.line(wx, ry, wx, ry + ROW_H);
            }

            rowIdx++;
        });

        // Borde general
        doc.setDrawColor(180, 180, 180);
        doc.setLineWidth(0.3);
        doc.rect(MARGIN, MARGIN, PAGE_W - 2 * MARGIN, PAGE_H - 2 * MARGIN);

        // Pie de página
        doc.setFontSize(6);
        doc.setTextColor(150, 150, 150);
        doc.text('Generado por BC3 Viewer — ' + new Date().toLocaleDateString('es-ES'), MARGIN, PAGE_H - MARGIN + 4);
    }

    const baseName = currentFileName.replace(/\.[^/.]+$/, '');
    doc.save(baseName + '_planning.pdf');
    showNotification('Planning exportado a PDF');
}

// ---- Inicializar eventos del modal Planning ----
const planningBtn = document.getElementById('planningBtn');
const planningModal = document.getElementById('planningModal');
const closePlanningBtn = document.getElementById('closePlanningBtn');
const ganttStartDateInput = document.getElementById('ganttStartDate');
const ganttWeeksInput = document.getElementById('ganttWeeks');
const ganttResetBtn = document.getElementById('ganttResetBtn');
const exportGanttPdfBtn = document.getElementById('exportGanttPdfBtn');
const exportGanttExcelBtn = document.getElementById('exportGanttExcelBtn');

if (planningBtn) {
    planningBtn.addEventListener('click', () => {
        // Inicializar fecha y semanas antes de renderizar
        if (ganttStartDateInput && ganttStartDateInput.value) {
            ganttStartDate = new Date(ganttStartDateInput.value);
        } else if (ganttStartDateInput) {
            ganttStartDate = new Date();
            const iso = ganttStartDate.toISOString().split('T')[0];
            ganttStartDateInput.value = iso;
        }
        if (ganttWeeksInput && ganttWeeksInput.value) {
            ganttTotalWeeks = parseInt(ganttWeeksInput.value) || 26;
        }
        renderPlanningModal();
    });
}

if (closePlanningBtn && planningModal) {
    closePlanningBtn.addEventListener('click', () => {
        closeModal(planningModal);
    });
}

if (planningModal) {
    planningModal.addEventListener('click', e => {
        if (e.target === planningModal) closeModal(planningModal);
    });
}

if (ganttStartDateInput) {
    ganttStartDateInput.addEventListener('change', () => {
        ganttStartDate = new Date(ganttStartDateInput.value);
        if (planningModal && planningModal.style.display !== 'none') rebuildGanttDOM();
        ganttSave();
    });
}

if (ganttWeeksInput) {
    ganttWeeksInput.addEventListener('change', () => {
        ganttTotalWeeks = Math.max(4, Math.min(156, parseInt(ganttWeeksInput.value) || 26));
        ganttWeeksInput.value = ganttTotalWeeks;
        if (planningModal && planningModal.style.display !== 'none') rebuildGanttDOM();
        ganttSave();
    });
}

if (ganttResetBtn) {
    ganttResetBtn.addEventListener('click', () => {
        if (!confirm('¿Reiniciar el planning? Se perderá la distribución actual.')) return;
        ganttState = {};
        initGanttStateAuto(ganttTasks, ganttTotalWeeks);
        ganttSave();
        rebuildGanttDOM();
    });
}

if (exportGanttPdfBtn) {
    exportGanttPdfBtn.addEventListener('click', exportGanttToPdf);
}
if (exportGanttExcelBtn) {
    exportGanttExcelBtn.addEventListener('click', exportGanttToExcel);
}

// ============================================================
// DIVISOR ÁRBOL/DETALLES REDIMENSIONABLE (persistido en localStorage)
// ============================================================

const DETAILS_WIDTH_KEY = 'bc3_detailsPanelWidth';

function setDetailsPanelWidth(width) {
    document.documentElement.style.setProperty('--details-panel-width', width + 'px');
}

function saveDetailsPanelWidth() {
    const detailsPanel = document.getElementById('detailsPanel');
    if (!detailsPanel) return;
    // Se guarda el ancho real ya acotado por min/max-width del CSS
    const width = Math.round(detailsPanel.getBoundingClientRect().width);
    if (width > 0) localStorage.setItem(DETAILS_WIDTH_KEY, String(width));
}

(function restoreDetailsPanelWidth() {
    const stored = parseFloat(localStorage.getItem(DETAILS_WIDTH_KEY));
    if (!isNaN(stored) && stored > 0) setDetailsPanelWidth(stored);
})();

const panelDivider = document.getElementById('panelDivider');
if (panelDivider) {
    let dividerDrag = null;

    panelDivider.addEventListener('pointerdown', (e) => {
        const detailsPanel = document.getElementById('detailsPanel');
        if (!detailsPanel) return;
        e.preventDefault();
        dividerDrag = {
            startX: e.clientX,
            startWidth: detailsPanel.getBoundingClientRect().width
        };
        panelDivider.classList.add('dragging');
        panelDivider.setPointerCapture(e.pointerId);
    });

    panelDivider.addEventListener('pointermove', (e) => {
        if (!dividerDrag) return;
        setDetailsPanelWidth(dividerDrag.startWidth + (dividerDrag.startX - e.clientX));
    });

    const endDividerDrag = () => {
        if (!dividerDrag) return;
        dividerDrag = null;
        panelDivider.classList.remove('dragging');
        saveDetailsPanelWidth();
    };
    panelDivider.addEventListener('pointerup', endDividerDrag);
    panelDivider.addEventListener('pointercancel', endDividerDrag);

    // Ajuste con teclado para accesibilidad del separador
    panelDivider.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        const detailsPanel = document.getElementById('detailsPanel');
        if (!detailsPanel) return;
        e.preventDefault();
        const current = detailsPanel.getBoundingClientRect().width;
        setDetailsPanelWidth(current + (e.key === 'ArrowLeft' ? 24 : -24));
        saveDetailsPanelWidth();
    });
}

const closeDetailsBtn = document.getElementById('closeDetailsBtn');
if (closeDetailsBtn) {
    closeDetailsBtn.addEventListener('click', () => {
        document.querySelector('.content-area')?.classList.remove('details-open');
        document.querySelectorAll('.tree-node-row.active').forEach(el => el.classList.remove('active'));
    });
}

// ============================================================
// NAVEGACIÓN POR TECLADO EN EL ÁRBOL (treegrid)
// ============================================================

function getVisibleTreeRows() {
    const treeContainer = document.getElementById('treeContent');
    if (!treeContainer) return [];
    return Array.from(treeContainer.querySelectorAll('.tree-node-row'))
        .filter(row => row.offsetParent !== null);
}

// Roving tabindex: una única fila es el punto de entrada con Tab
function refreshTreeTabStops(preferredRow = null) {
    const rows = getVisibleTreeRows();
    if (!rows.length) return;
    const entry = (preferredRow && rows.includes(preferredRow))
        ? preferredRow
        : (rows.find(r => r.classList.contains('active')) || rows[0]);
    rows.forEach(row => { row.tabIndex = row === entry ? 0 : -1; });
}

function focusTreeRow(row) {
    if (!row) return;
    refreshTreeTabStops(row);
    row.focus();
}

// Expande o contrae un nodo sin re-renderizar el árbol
function setNodeExpansion(container, expand) {
    if (!container) return;
    const childrenContainer = container.querySelector(':scope > .tree-node-children');
    if (!childrenContainer) return;

    const row = container.querySelector(':scope > .tree-node-row');
    const toggle = row ? row.querySelector('.toggle-icon') : null;
    const code = container.dataset.code;

    childrenContainer.classList.toggle('visible', expand);
    if (toggle) toggle.classList.toggle('expanded', expand);
    if (row && row.hasAttribute('aria-expanded')) {
        row.setAttribute('aria-expanded', String(expand));
    }
    if (code) {
        if (expand) expandedNodes.add(code);
        else expandedNodes.delete(code);
    }
    updateExpandAllButtonState();
    refreshTreeTabStops(row);
    scheduleSessionAutosave();
}

const treeKeyboardHost = document.getElementById('treeContent');
if (treeKeyboardHost) {
    treeKeyboardHost.addEventListener('keydown', (e) => {
        if (isMobileMode()) return;

        const target = e.target;
        // No interferir con la edición inline ni con controles embebidos
        if (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(target.tagName)) return;

        const row = target.closest('.tree-node-row');
        if (!row) return;

        const rows = getVisibleTreeRows();
        const idx = rows.indexOf(row);
        if (idx === -1) return;

        const container = row.parentElement; // .tree-node-container
        const childrenContainer = container ? container.querySelector(':scope > .tree-node-children') : null;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (idx < rows.length - 1) focusTreeRow(rows[idx + 1]);
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (idx > 0) focusTreeRow(rows[idx - 1]);
                break;
            case 'Home':
                e.preventDefault();
                focusTreeRow(rows[0]);
                break;
            case 'End':
                e.preventDefault();
                focusTreeRow(rows[rows.length - 1]);
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (childrenContainer && !childrenContainer.classList.contains('visible')) {
                    setNodeExpansion(container, true);
                } else if (childrenContainer) {
                    const firstChildRow = childrenContainer.querySelector('.tree-node-row');
                    if (firstChildRow && firstChildRow.offsetParent !== null) focusTreeRow(firstChildRow);
                }
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (childrenContainer && childrenContainer.classList.contains('visible')) {
                    setNodeExpansion(container, false);
                } else {
                    const parentContainer = container ? container.parentElement.closest('.tree-node-container') : null;
                    const parentRow = parentContainer ? parentContainer.querySelector(':scope > .tree-node-row') : null;
                    if (parentRow) focusTreeRow(parentRow);
                }
                break;
            case 'Enter': {
                e.preventDefault();
                document.querySelectorAll('.tree-node-row').forEach(el => el.classList.remove('active'));
                row.classList.add('active');
                const code = container ? container.dataset.code : null;
                if (code) showDetails(code);
                break;
            }
        }
    });
}

// Atajo global: "/" lleva el foco al buscador
document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
    const target = e.target;
    if (target && (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable)) return;
    const searchInput = document.getElementById('searchTerm');
    if (!searchInput || searchInput.offsetParent === null) return;
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
});

// Escape en el buscador devuelve el foco al árbol
const searchTermInput = document.getElementById('searchTerm');
if (searchTermInput) {
    searchTermInput.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        e.stopPropagation();
        searchTermInput.blur();
        focusTreeRow(getVisibleTreeRows()[0]);
    });
}

// ============================================================
// AUTOGUARDADO Y RECUPERACIÓN DE SESIÓN (localStorage)
// ============================================================
// Reutiliza el patrón de persistencia del Gantt: una clave por fichero,
// más un índice de "archivos recientes" con las últimas sesiones guardadas.

const SESSION_INDEX_KEY = 'bc3_recentFiles';
const SESSION_MAX_RECENT = 5;
const CLOSE_SKIP_AUTORESTORE_KEY = 'bc3_skipAutoRestoreOnce';
let sessionAutosaveTimer = null;

function sessionStorageKey(fileName) {
    return 'bc3_session_' + String(fileName).replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\.\-]/g, '');
}

function getRecentSessions() {
    try {
        const raw = localStorage.getItem(SESSION_INDEX_KEY);
        const list = raw ? JSON.parse(raw) : [];
        return Array.isArray(list) ? list : [];
    } catch (e) { return []; }
}

function setRecentSessions(list) {
    try {
        localStorage.setItem(SESSION_INDEX_KEY, JSON.stringify(list));
    } catch (e) { /* cuota excedida — ignorar */ }
}

// Eliminar las sesiones más antiguas hasta dejar sitio (se usa también al exceder cuota)
function pruneSessions(keepKey = null, maxEntries = SESSION_MAX_RECENT) {
    let recents = getRecentSessions();
    while (recents.length > maxEntries) {
        const oldest = recents[recents.length - 1];
        recents = recents.slice(0, -1);
        try { localStorage.removeItem(sessionStorageKey(oldest.name)); } catch (e) { /* ignorar */ }
    }
    if (keepKey) {
        // Ante una cuota agotada, sacrificar el resto de sesiones para salvar la actual
        recents = recents.filter(entry => {
            const key = sessionStorageKey(entry.name);
            if (key === keepKey) return true;
            try { localStorage.removeItem(key); } catch (e) { /* ignorar */ }
            return false;
        });
    }
    setRecentSessions(recents);
}

// Estado de interfaz para reabrir el presupuesto "por donde iba":
// nodos expandidos, scroll del árbol, nivel de navegación móvil y pestaña activa
function captureSessionUi() {
    const treeContent = document.getElementById('treeContent');
    const certView = document.getElementById('certView');
    return {
        expanded: Array.from(expandedNodes),
        treeScroll: treeContent ? treeContent.scrollTop : 0,
        currentLevel: currentLevel,
        navigationStack: navigationStack,
        view: (certView && !certView.classList.contains('is-hidden')) ? 'cert' : 'budget',
        certMonth: certCurrentMonth
    };
}

function applySessionUi(ui) {
    if (!ui || !parsedData) return;

    // Navegación móvil por niveles
    if (isMobileMode() && ui.currentLevel && parsedData.concepts[ui.currentLevel]) {
        navigationStack = Array.isArray(ui.navigationStack) ? ui.navigationStack : [];
        currentLevel = ui.currentLevel;
    }

    // Nodos expandidos (solo los que sigan existiendo)
    if (Array.isArray(ui.expanded) && ui.expanded.length > 0) {
        expandedNodes.clear();
        ui.expanded.forEach(code => {
            if (parsedData.concepts[code]) expandedNodes.add(code);
        });
    }
    renderCurrentLevel();
    updateExpandAllButtonState();

    const treeContent = document.getElementById('treeContent');
    if (treeContent && ui.treeScroll) treeContent.scrollTop = ui.treeScroll;

    // Pestaña activa y mes de certificación
    if (ui.certMonth) certCurrentMonth = ui.certMonth;
    if (ui.view === 'cert') switchView('cert');
}

function saveSessionNow() {
    if (!parsedData) return;
    const key = sessionStorageKey(currentFileName);
    const savedAt = new Date().toISOString();
    const payload = JSON.stringify({
        name: currentFileName,
        budgetFileName: currentBudgetFileName,
        sysmedManifest: currentSysMedManifest,
        savedAt,
        data: parsedData,
        ui: captureSessionUi()
    });

    try {
        localStorage.setItem(key, payload);
    } catch (e) {
        // Cuota excedida: eliminar el resto de sesiones y reintentar
        pruneSessions(key, 0);
        try { localStorage.setItem(key, payload); } catch (e2) { return; }
    }

    // Actualizar índice de recientes (el más nuevo primero)
    const recents = getRecentSessions().filter(entry => entry.name !== currentFileName);
    recents.unshift({ name: currentFileName, savedAt });
    setRecentSessions(recents.slice(0, SESSION_MAX_RECENT));
    pruneSessions();
}

function scheduleSessionAutosave() {
    if (!parsedData) return;
    clearTimeout(sessionAutosaveTimer);
    sessionAutosaveTimer = setTimeout(saveSessionNow, 800);
}

// Guardado final al abandonar/ocultar la página (el temporizador podría no llegar a dispararse)
window.addEventListener('pagehide', () => {
    if (parsedData) saveSessionNow();
});

function loadStoredSession(fileName) {
    try {
        const raw = localStorage.getItem(sessionStorageKey(fileName));
        if (!raw) return null;
        const saved = JSON.parse(raw);
        return (saved && saved.data && saved.data.concepts) ? saved : null;
    } catch (e) { return null; }
}

function restoreSession(fileName) {
    const saved = loadStoredSession(fileName);
    if (!saved) {
        showNotification('No se ha podido recuperar la sesión');
        renderRecentFilesList();
        return;
    }
    currentFileName = saved.name;
    currentBudgetFileName = saved.budgetFileName || saved.sysmedManifest?.budget?.originalName || saved.name.replace(/\.sysmed$/i, '.bc3');
    currentSysMedManifest = saved.sysmedManifest || null;
    setSelectedFileName(currentFileName);
    certLoad();
    renderApp(saved.data);
    applySessionUi(saved.ui);
    showNotification('Sesión recuperada: ' + saved.name);
}

function deleteStoredSession(fileName) {
    try { localStorage.removeItem(sessionStorageKey(fileName)); } catch (e) { /* ignorar */ }
    setRecentSessions(getRecentSessions().filter(entry => entry.name !== fileName));
    renderRecentFilesList();
}

function formatSessionDate(iso) {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })
        + ' ' + d.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
}

// Lista de "archivos recientes" en el estado vacío inicial
function renderRecentFilesList() {
    const emptyCard = document.querySelector('#treePanel .empty-state .empty-card');
    if (!emptyCard) return;

    let section = emptyCard.querySelector('.recent-files');
    if (section) section.remove();

    // Solo mostrar sesiones que realmente existan en localStorage
    const recents = getRecentSessions().filter(entry => loadStoredSession(entry.name));
    if (recents.length === 0) return;

    section = document.createElement('div');
    section.className = 'recent-files';

    const title = document.createElement('h2');
    title.className = 'recent-files-title';
    title.innerHTML = iconSvg('history') + '<span>Sesiones guardadas</span>';
    section.appendChild(title);

    const list = document.createElement('ul');
    list.className = 'recent-files-list';

    recents.forEach((entry, idx) => {
        const li = document.createElement('li');
        li.className = 'recent-file-item';

        const info = document.createElement('button');
        info.type = 'button';
        info.className = 'recent-file-open';
        info.title = 'Recuperar la sesión guardada de ' + entry.name;
        info.innerHTML = `<span class="recent-file-name">${entry.name}</span>` +
            `<span class="recent-file-date">${idx === 0 ? 'Última sesión · ' : ''}${formatSessionDate(entry.savedAt)}</span>`;
        info.addEventListener('click', () => restoreSession(entry.name));
        li.appendChild(info);

        const del = document.createElement('button');
        del.type = 'button';
        del.className = 'recent-file-delete';
        del.setAttribute('aria-label', 'Eliminar la sesión guardada de ' + entry.name);
        del.title = 'Eliminar sesión guardada';
        del.innerHTML = iconSvg('trash-2');
        del.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteStoredSession(entry.name);
        });
        li.appendChild(del);

        list.appendChild(li);
    });

    section.appendChild(list);
    emptyCard.appendChild(section);
}

renderRecentFilesList();

// ============================================================
// EDICIÓN ESTRUCTURAL: AÑADIR, DUPLICAR Y ELIMINAR
// capítulos, partidas y líneas de medición
// ============================================================

// Buscar los códigos de todos los padres que referencian a un concepto
function findParentCodes(code) {
    if (!parsedData) return [];
    const parents = [];
    Object.values(parsedData.concepts).forEach(parent => {
        const decomposition = getConceptDecomposition(parent);
        if (decomposition.some(item => item.code === code)) {
            parents.push(parent.code);
        }
    });
    return parents;
}

// Materializar la descomposición del padre si solo tiene la lista simple de hijos
// (getConceptDecomposition prioriza decomposition: sin esto, añadir un elemento
// nuevo haría desaparecer a los hermanos existentes)
function ensureDecomposition(parent) {
    if (!Array.isArray(parent.decomposition)) parent.decomposition = [];
    if (parent.decomposition.length === 0 && Array.isArray(parent.children) && parent.children.length > 0) {
        parent.decomposition = parent.children.map(c => ({ code: c, factor: 1, type: 0 }));
    }
}

// Generar un código nuevo único derivado del código del padre
function generateUniqueCode(parentCode, isChapter) {
    const base = String(parentCode || 'NUEVO').replace(/#+\s*$/, '');
    let n = 1;
    while (n < 10000) {
        const candidate = base + '.N' + String(n).padStart(2, '0') + (isChapter ? '#' : '');
        const alternative = isChapter ? candidate.replace(/#$/, '') : candidate + '#';
        if (!parsedData.concepts[candidate] && !parsedData.concepts[alternative]) {
            return candidate;
        }
        n++;
    }
    return base + '.N' + Date.now() + (isChapter ? '#' : '');
}

// Refrescar árbol, totales, panel de detalles e historial tras un cambio estructural
function refreshAfterStructureChange() {
    recalculateAll();
    const treeContent = document.getElementById('treeContent');
    const scrollPos = treeContent ? treeContent.scrollTop : 0;
    renderCurrentLevel();
    if (treeContent) treeContent.scrollTop = scrollPos;
    updateTotalBudgetDisplay();

    // Refrescar el panel de detalles, o cerrarlo si el concepto mostrado ya no existe
    const detCodeEl = document.getElementById('detCode');
    if (detCodeEl && detCodeEl.textContent) {
        const shownCode = Object.keys(parsedData.concepts).find(c => c.replace(/#+\s*$/, '') === detCodeEl.textContent);
        if (shownCode) {
            showDetails(shownCode);
        } else {
            detCodeEl.textContent = '';
            document.querySelector('.content-area')?.classList.remove('details-open');
        }
    }

    saveHistoryState();
}

// Añadir un capítulo o una partida nuevos dentro de un padre
function addChildConcept(parentCode, kind) {
    const parent = parsedData.concepts[parentCode];
    if (!parent) return;

    const isChapter = kind === 'chapter';
    const newCode = generateUniqueCode(parentCode, isChapter);

    parsedData.concepts[newCode] = {
        code: newCode,
        unit: isChapter ? '' : 'ud',
        summary: isChapter ? 'Nuevo capítulo' : 'Nueva partida',
        price: 0,
        date: '',
        type: 0,
        children: [],
        decomposition: [],
        measurements: [],
        description: ''
    };

    ensureDecomposition(parent);
    parent.decomposition.push({ code: newCode, factor: 1, type: 0 });
    parent.children = parent.decomposition.map(item => item.code);

    expandedNodes.add(parentCode);
    refreshAfterStructureChange();
    showNotification(isChapter ? 'Capítulo añadido' : 'Partida añadida');
}

// Duplicar un concepto dentro del mismo padre (justo después del original)
function duplicateConcept(code, parentCode) {
    const source = parsedData.concepts[code];
    const parent = parsedData.concepts[parentCode];
    if (!source || !parent) return;

    const isChapter = String(source.code).endsWith('#');
    const newCode = generateUniqueCode(parentCode, isChapter);

    const clone = JSON.parse(JSON.stringify(source));
    clone.code = newCode;
    clone.is_root = false;
    parsedData.concepts[newCode] = clone;

    ensureDecomposition(parent);
    const idx = parent.decomposition.findIndex(item => item.code === code);
    const originalItem = idx >= 0 ? parent.decomposition[idx] : null;
    parent.decomposition.splice(idx >= 0 ? idx + 1 : parent.decomposition.length, 0, {
        code: newCode,
        factor: originalItem ? (parseFloat(originalItem.factor) || 1) : 1,
        type: originalItem ? (originalItem.type || 0) : 0
    });
    parent.children = parent.decomposition.map(item => item.code);

    refreshAfterStructureChange();
    showNotification('Elemento duplicado como ' + newCode.replace(/#+\s*$/, ''));
}

// Eliminar un concepto de su padre (y su definición si nada más lo referencia)
function deleteConcept(code, parentCode) {
    const parent = parsedData.concepts[parentCode];
    if (!parent) return;

    ensureDecomposition(parent);
    parent.decomposition = parent.decomposition.filter(item => item.code !== code);
    parent.children = parent.decomposition.map(item => item.code);

    const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
    if (findParentCodes(code).length === 0 && !roots.includes(code)) {
        delete parsedData.concepts[code];
    }

    refreshAfterStructureChange();
    showNotification('Elemento eliminado');
}

// Añadir una línea de medición nueva a una partida
function addMeasurementLine(code) {
    const concept = parsedData.concepts[code];
    if (!concept) return;
    if (!Array.isArray(concept.measurements)) concept.measurements = [];
    concept.measurements.push({ label: 'Nueva línea', units: 1, l: '', w: '', h: '' });
    expandedNodes.add(code);
    recalculateMeasurements(concept);
    showNotification('Línea de medición añadida');
}

// ---- Menú contextual de acciones estructurales ----
let structureMenuEl = null;

function closeStructureMenu() {
    if (structureMenuEl) {
        structureMenuEl.remove();
        structureMenuEl = null;
    }
}

function showStructureMenu(anchor, items) {
    closeStructureMenu();

    const menu = document.createElement('div');
    menu.className = 'structure-menu';
    menu.setAttribute('role', 'menu');

    items.forEach(item => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('role', 'menuitem');
        btn.className = 'structure-menu-item' + (item.danger ? ' danger' : '');
        btn.innerHTML = iconSvg(item.icon) + `<span>${item.label}</span>`;
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeStructureMenu();
            item.onSelect();
        });
        menu.appendChild(btn);
    });

    document.body.appendChild(menu);

    // Posicionar junto al botón sin salirse del viewport
    const rect = anchor.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();
    let top = rect.bottom + 4;
    let left = rect.right - menuRect.width;
    if (top + menuRect.height > window.innerHeight - 8) top = rect.top - menuRect.height - 4;
    if (left < 8) left = 8;
    menu.style.top = Math.max(8, top) + 'px';
    menu.style.left = left + 'px';

    structureMenuEl = menu;
}

window.addEventListener('click', (e) => {
    if (structureMenuEl && !structureMenuEl.contains(e.target)) closeStructureMenu();
});
window.addEventListener('resize', closeStructureMenu);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeStructureMenu();
});
document.addEventListener('scroll', closeStructureMenu, true);

// Abrir el menú de acciones adecuado para un nodo del árbol
function openStructureMenuForNode(code, parentCode, anchor) {
    const concept = parsedData.concepts[code];
    if (!concept) return;

    const isChapter = String(concept.code).endsWith('#') || concept.is_root === true;
    const items = [];

    if (isChapter) {
        items.push({ icon: 'plus', label: 'Añadir capítulo', onSelect: () => addChildConcept(code, 'chapter') });
        items.push({ icon: 'plus', label: 'Añadir partida', onSelect: () => addChildConcept(code, 'item') });
    } else {
        items.push({ icon: 'plus', label: 'Añadir línea de medición', onSelect: () => addMeasurementLine(code) });
    }

    if (parentCode) {
        items.push({ icon: 'copy', label: 'Duplicar', onSelect: () => duplicateConcept(code, parentCode) });
        items.push({
            icon: 'trash-2', label: 'Eliminar', danger: true, onSelect: () => {
                const label = concept.summary || concept.code.replace(/#+\s*$/, '');
                if (confirm(`¿Eliminar "${label}" del presupuesto?`)) {
                    deleteConcept(code, parentCode);
                }
            }
        });
    }

    if (items.length > 0) showStructureMenu(anchor, items);
}

// ============================================================
// CERTIFICACIONES Y SEGUIMIENTO DE OBRA
// ============================================================
// Cantidad certificada por partida y por mes, persistida en localStorage
// por fichero (mismo patrón que el Gantt): certificación del período,
// a origen y pendiente, con exportación a PDF y Excel.

// Estado: meses de certificación existentes y cantidades de cada período.
// Separar `months` permite conservar también una certificación sin variación.
// { months: ['YYYY-MM'], certs: { [códigoPartida]: { 'YYYY-MM': cantidad } } }
let certState = { months: [], certs: {} };
let certCurrentMonth = getDefaultCertMonth();

function getDefaultCertMonth() {
    const now = new Date();
    return now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
}

function certStorageKey() {
    return 'cert_' + currentFileName.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_\.]/g, '');
}

function certSave() {
    try {
        localStorage.setItem(certStorageKey(), JSON.stringify(certState));
    } catch (e) { /* cuota excedida — ignorar */ }
}

function certLoad() {
    try {
        const raw = localStorage.getItem(certStorageKey());
        certState = raw ? JSON.parse(raw) : { months: [], certs: {} };
        if (!certState || typeof certState !== 'object') certState = { months: [], certs: {} };
        if (!certState.certs) certState.certs = {};
        const knownMonths = new Set(Array.isArray(certState.months) ? certState.months : []);
        Object.values(certState.certs).forEach(byMonth => {
            if (!byMonth || typeof byMonth !== 'object') return;
            Object.keys(byMonth).forEach(month => knownMonths.add(month));
        });
        certState.months = Array.from(knownMonths).filter(month => /^\d{4}-\d{2}$/.test(month)).sort();
    } catch (e) {
        certState = { months: [], certs: {} };
    }
}

function registerCertificationMonth(month) {
    if (!/^\d{4}-\d{2}$/.test(month)) return;
    if (!Array.isArray(certState.months)) certState.months = [];
    if (!certState.months.includes(month)) {
        certState.months.push(month);
        certState.months.sort();
    }
}

function getStoredCertificationMonths() {
    const months = new Set(Array.isArray(certState.months) ? certState.months : []);
    Object.values(certState.certs).forEach(byMonth => {
        if (!byMonth || typeof byMonth !== 'object') return;
        Object.entries(byMonth).forEach(([month, value]) => {
            if (/^\d{4}-\d{2}$/.test(month) && Number.isFinite(parseFloat(value)) && Math.abs(parseFloat(value)) > 0.0000001) {
                months.add(month);
            }
        });
    });
    return Array.from(months).sort();
}

// Reconstruye las cantidades de cada período restando los acumulados a origen
// de los BC3 incluidos en el paquete. El SYSmed sustituye completamente el
// estado local anterior para evitar mezclar certificaciones de dos proyectos.
function applyLoadedSysMed(sysmed) {
    const manifest = sysmed?.manifest && typeof sysmed.manifest === 'object' ? sysmed.manifest : {};
    const certifications = Array.isArray(sysmed?.certifications)
        ? [...sysmed.certifications].sort((a, b) => String(a.month).localeCompare(String(b.month)))
        : [];

    currentSysMedManifest = manifest;
    currentBudgetFileName = manifest.budget?.originalName || `${projectBaseName()}.bc3`;
    certState = { months: certifications.map(certification => String(certification.month)), certs: {} };

    const previousOrigin = {};
    const items = getCertifiableItems();
    certifications.forEach(certification => {
        const month = String(certification.month || '');
        if (!/^\d{4}-\d{2}$/.test(month)) return;
        const quantities = certification.quantities && typeof certification.quantities === 'object'
            ? certification.quantities
            : {};

        items.forEach(item => {
            const hasQuantity = Object.prototype.hasOwnProperty.call(quantities, item.code);
            const parsedOrigin = hasQuantity ? parseFloat(quantities[item.code]) : previousOrigin[item.code];
            const origin = Number.isFinite(parsedOrigin) ? parsedOrigin : (previousOrigin[item.code] || 0);
            const periodQuantity = Math.round((origin - (previousOrigin[item.code] || 0)) * 1000000) / 1000000;
            if (Math.abs(periodQuantity) > 0.0000001) {
                if (!certState.certs[item.code]) certState.certs[item.code] = {};
                certState.certs[item.code][month] = periodQuantity;
            }
            previousOrigin[item.code] = origin;
        });
    });

    certCurrentMonth = certifications.length > 0
        ? String(certifications[certifications.length - 1].month)
        : getDefaultCertMonth();
    certSave();
    scheduleSessionAutosave();
}

// Partidas certificables: hojas del árbol con su cantidad presupuestada acumulada
function getCertifiableItems() {
    const items = [];
    const seen = new Map();
    if (!parsedData) return items;

    function walk(code, factor) {
        const concept = parsedData.concepts[code];
        if (!concept) return;

        const isChapter = String(concept.code).endsWith('#') || concept.is_root === true;
        if (isChapter) {
            getConceptDecomposition(concept).forEach(child => {
                walk(child.code, parseFloat(child.factor) || 1);
            });
            return;
        }

        const qty = parseFloat(factor) || 0;
        if (seen.has(code)) {
            seen.get(code).qty += qty;
        } else {
            const item = {
                code,
                cleanCode: String(code).replace(/#+\s*$/, ''),
                summary: concept.summary || code,
                unit: concept.unit || '',
                qty,
                price: parseFloat(concept.price) || 0
            };
            seen.set(code, item);
            items.push(item);
        }
    }

    const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
    roots.forEach(code => walk(code, 1));
    return items;
}

// Cantidad certificada a origen (todos los meses hasta el indicado, incluido)
function certOriginQty(code, uptoMonth) {
    const byMonth = certState.certs[code];
    if (!byMonth) return 0;
    return Object.keys(byMonth)
        .filter(month => month <= uptoMonth)
        .reduce((sum, month) => sum + (parseFloat(byMonth[month]) || 0), 0);
}

// Cantidad certificada a origen estrictamente ANTES del mes indicado (lo ya
// certificado en meses previos, sin contar el propio mes)
function certOriginQtyBefore(code, month) {
    const byMonth = certState.certs[code];
    if (!byMonth) return 0;
    return Object.keys(byMonth)
        .filter(m => m < month)
        .reduce((sum, m) => sum + (parseFloat(byMonth[m]) || 0), 0);
}

// Número correlativo según el orden cronológico de las pestañas visibles.
function getCertNumberForMonth(month) {
    const visibleMonths = getCertificationMonths();
    const index = visibleMonths.indexOf(month);
    if (index >= 0) return index + 1;
    return visibleMonths.filter(visibleMonth => visibleMonth < month).length + 1;
}

function certMonthLabel(month) {
    const d = new Date(month + '-01T00:00:00');
    if (isNaN(d.getTime())) return month;
    const label = d.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
    return label.charAt(0).toUpperCase() + label.slice(1);
}

function certMonthShortLabel(month) {
    const d = new Date(month + '-01T00:00:00');
    if (isNaN(d.getTime())) return month;
    const label = d.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' }).replace('.', '');
    return label.charAt(0).toUpperCase() + label.slice(1);
}

// Meses que ya contienen una certificación, más el mes que el usuario está
// abriendo o creando ahora. Se muestran en orden cronológico como pestañas.
function getCertificationMonths() {
    const months = new Set([certCurrentMonth, ...(Array.isArray(certState.months) ? certState.months : [])]);
    Object.values(certState.certs).forEach(byMonth => {
        if (!byMonth || typeof byMonth !== 'object') return;
        Object.keys(byMonth).forEach(month => {
            if (/^\d{4}-\d{2}$/.test(month)) months.add(month);
        });
    });
    return Array.from(months).sort();
}

function renderCertMonthTabs() {
    const tabs = document.getElementById('certMonthTabs');
    const panel = document.getElementById('certMonthPanel');
    if (!tabs) return;

    tabs.innerHTML = '';
    const months = getCertificationMonths();

    months.forEach((month, index) => {
        const isActive = month === certCurrentMonth;
        const certNumber = getCertNumberForMonth(month);
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.id = 'certMonthTab-' + month;
        tab.className = 'cert-month-tab' + (isActive ? ' is-active' : '');
        tab.dataset.month = month;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', String(isActive));
        tab.setAttribute('aria-controls', 'certMonthPanel');
        tab.tabIndex = isActive ? 0 : -1;
        tab.title = `Certificación nº ${certNumber} · ${certMonthLabel(month)}`;
        tab.innerHTML = `
            <span class="cert-month-tab-number">Cert. ${certNumber}</span>
            <span class="cert-month-tab-label">${certMonthShortLabel(month)}</span>
        `;
        tab.addEventListener('click', () => selectCertMonth(month));
        tab.addEventListener('keydown', event => {
            let nextIndex = null;
            if (event.key === 'ArrowRight') nextIndex = (index + 1) % months.length;
            if (event.key === 'ArrowLeft') nextIndex = (index - 1 + months.length) % months.length;
            if (event.key === 'Home') nextIndex = 0;
            if (event.key === 'End') nextIndex = months.length - 1;
            if (nextIndex === null) return;
            event.preventDefault();
            selectCertMonth(months[nextIndex], true);
        });
        tabs.appendChild(tab);
    });

    if (panel) panel.setAttribute('aria-labelledby', 'certMonthTab-' + certCurrentMonth);
}

function selectCertMonth(month, focusTab = false) {
    if (!/^\d{4}-\d{2}$/.test(month)) return;
    certCurrentMonth = month;
    registerCertificationMonth(month);
    certSave();
    if (certMonthInput) certMonthInput.value = month;
    rebuildCertTable();
    scheduleSessionAutosave();

    const activeTab = document.getElementById('certMonthTab-' + month);
    if (activeTab) {
        activeTab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        if (focusTab) activeTab.focus();
    }
}

// Filas calculadas de la certificación del mes seleccionado
function buildCertRows() {
    return getCertifiableItems().map(item => {
        const monthQty = parseFloat(certState.certs[item.code]?.[certCurrentMonth]) || 0;
        const originQty = certOriginQty(item.code, certCurrentMonth);
        const budgetAmount = item.qty * item.price;
        const monthAmount = monthQty * item.price;
        const originAmount = originQty * item.price;
        const pendingAmount = budgetAmount - originAmount;
        const originPct = budgetAmount === 0 ? 0 : (originAmount / budgetAmount) * 100;
        return { ...item, monthQty, originQty, budgetAmount, monthAmount, originAmount, pendingAmount, originPct };
    });
}

function updateCertSummary(rows) {
    const summaryEl = document.getElementById('certSummary');
    if (!summaryEl) return;
    const totalMonth = rows.reduce((s, r) => s + r.monthAmount, 0);
    const totalOrigin = rows.reduce((s, r) => s + r.originAmount, 0);
    const totalBudget = rows.reduce((s, r) => s + r.budgetAmount, 0);
    const totalPending = totalBudget - totalOrigin;
    const pct = totalBudget === 0 ? 0 : (totalOrigin / totalBudget) * 100;

    summaryEl.innerHTML = `
        <div class="cert-stat"><span class="cert-stat-label">Certificación del período</span><span class="cert-stat-value">${formatEuro(totalMonth)}</span></div>
        <div class="cert-stat"><span class="cert-stat-label">Certificado a origen</span><span class="cert-stat-value">${formatEuro(totalOrigin)} (${pct.toLocaleString('es-ES', { maximumFractionDigits: 1 })} %)</span></div>
        <div class="cert-stat"><span class="cert-stat-label">Pendiente</span><span class="cert-stat-value">${formatEuro(totalPending)}</span></div>
    `;
}

// ---- Árbol de certificación ----
// La vista de certificaciones replica la jerarquía del presupuesto: capítulos
// plegables con importes agregados y partidas hoja con cantidad editable.
// Cada partida aparece una sola vez (en su primera posición del árbol) con la
// cantidad presupuestada agregada, igual que en getCertifiableItems().
let certCollapsed = new Set();
let certChapterCodes = [];

function buildCertTree() {
    if (!parsedData) return [];
    const itemsByCode = new Map(getCertifiableItems().map(item => [item.code, item]));
    const placed = new Set();

    function walk(code, depth) {
        const concept = parsedData.concepts[code];
        if (!concept) return null;
        const isChapter = String(concept.code).endsWith('#') || concept.is_root === true;
        if (!isChapter) {
            if (placed.has(code) || !itemsByCode.has(code)) return null;
            placed.add(code);
            return { isChapter: false, depth, item: itemsByCode.get(code) };
        }
        const children = [];
        getConceptDecomposition(concept).forEach(child => {
            const node = walk(child.code, depth + 1);
            if (node) children.push(node);
        });
        if (children.length === 0) return null;
        return {
            isChapter: true,
            depth,
            code,
            cleanCode: String(code).replace(/#+\s*$/, ''),
            summary: concept.summary || code,
            children
        };
    }

    // El nodo raíz no se pinta como fila: sus capítulos son el primer nivel
    const roots = Array.isArray(parsedData.root_nodes) ? parsedData.root_nodes : Object.values(parsedData.root_nodes);
    const tree = [];
    roots.forEach(rootCode => {
        const rootConcept = parsedData.concepts[rootCode];
        if (!rootConcept) return;
        getConceptDecomposition(rootConcept).forEach(child => {
            const node = walk(child.code, 0);
            if (node) tree.push(node);
        });
    });
    return tree;
}

function certTreeLeaves(node) {
    if (!node.isChapter) return [node.item];
    return node.children.flatMap(certTreeLeaves);
}

function updateCertExpandAllLabel() {
    const btn = document.getElementById('certExpandAllBtn');
    if (!btn) return;
    const anyCollapsed = certCollapsed.size > 0;
    btn.textContent = anyCollapsed ? 'Expandir todo' : 'Contraer todo';
    btn.setAttribute('aria-pressed', String(!anyCollapsed));
}

function rebuildCertTable() {
    const wrap = document.getElementById('certTableWrap');
    if (!wrap) return;
    renderCertMonthTabs();
    wrap.innerHTML = '';

    updateCertSummary(buildCertRows());

    const tree = buildCertTree();
    certChapterCodes = [];

    if (tree.length === 0) {
        wrap.innerHTML = '<div class="cert-empty">No hay partidas certificables en este presupuesto.</div>';
        updateCertExpandAllLabel();
        return;
    }

    const table = document.createElement('table');
    table.className = 'cert-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Código</th>
                <th>Capítulo / Partida</th>
                <th class="numeric">Ud</th>
                <th class="numeric">Cant. presup.</th>
                <th class="numeric">Precio</th>
                <th class="numeric cert-col-input">Cant. período</th>
                <th class="numeric">Imp. período</th>
                <th class="numeric">Cant. origen</th>
                <th class="numeric">% origen</th>
                <th class="numeric">Imp. pendiente</th>
            </tr>
        </thead>
    `;

    const tbody = document.createElement('tbody');
    const chapterPainters = [];
    const fmtEur = v => v.toLocaleString('es-ES', { minimumFractionDigits: 2 }) + ' €';
    const numericTd = () => {
        const td = document.createElement('td');
        td.className = 'numeric';
        return td;
    };

    function applyCertCollapse() {
        tbody.querySelectorAll('tr').forEach(tr => {
            const ancestors = tr.dataset.ancestors ? tr.dataset.ancestors.split('|') : [];
            tr.classList.toggle('is-hidden', ancestors.some(code => certCollapsed.has(code)));
        });
        tbody.querySelectorAll('.cert-tree-toggle').forEach(btn => {
            const collapsed = certCollapsed.has(btn.dataset.chapterCode);
            btn.classList.toggle('is-collapsed', collapsed);
            btn.setAttribute('aria-expanded', String(!collapsed));
        });
        updateCertExpandAllLabel();
    }

    function renderChapterRow(node, ancestors) {
        certChapterCodes.push(node.code);
        const tr = document.createElement('tr');
        tr.className = 'cert-chapter-row';
        if (ancestors.length > 0) tr.dataset.ancestors = ancestors.join('|');

        const tdCode = document.createElement('td');
        tdCode.className = 'cert-code-cell';
        tdCode.style.paddingLeft = (12 + node.depth * 18) + 'px';

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'cert-tree-toggle';
        toggle.dataset.chapterCode = node.code;
        toggle.innerHTML = iconSvg('chevron-down');
        toggle.setAttribute('aria-label', 'Contraer o expandir ' + node.cleanCode);
        toggle.setAttribute('aria-expanded', 'true');
        toggle.addEventListener('click', () => {
            if (certCollapsed.has(node.code)) certCollapsed.delete(node.code);
            else certCollapsed.add(node.code);
            applyCertCollapse();
        });
        tdCode.appendChild(toggle);
        tdCode.appendChild(document.createTextNode(node.cleanCode));

        const tdSummary = document.createElement('td');
        tdSummary.className = 'cert-cell-summary';
        tdSummary.textContent = node.summary;
        tdSummary.title = node.summary;

        const tdUnit = numericTd();
        const tdQty = numericTd();
        const tdPrice = numericTd();
        const tdInput = numericTd();
        tdInput.classList.add('cert-col-input');
        const tdMonthAmount = numericTd();
        const tdOriginQty = numericTd();
        const tdOriginPct = numericTd();
        const tdPending = numericTd();

        const leaves = certTreeLeaves(node);
        const paint = () => {
            let month = 0, origin = 0, budget = 0;
            leaves.forEach(item => {
                const monthQty = parseFloat(certState.certs[item.code]?.[certCurrentMonth]) || 0;
                const originQty = certOriginQty(item.code, certCurrentMonth);
                month += monthQty * item.price;
                origin += originQty * item.price;
                budget += item.qty * item.price;
            });
            tdMonthAmount.textContent = fmtEur(month);
            tdOriginPct.textContent = (budget === 0 ? 0 : (origin / budget) * 100).toLocaleString('es-ES', { maximumFractionDigits: 1 }) + ' %';
            tdPending.textContent = fmtEur(budget - origin);
        };
        chapterPainters.push(paint);
        paint();

        [tdCode, tdSummary, tdUnit, tdQty, tdPrice, tdInput, tdMonthAmount, tdOriginQty, tdOriginPct, tdPending]
            .forEach(td => tr.appendChild(td));
        tbody.appendChild(tr);

        const childAncestors = ancestors.concat(node.code);
        node.children.forEach(child => renderNode(child, childAncestors));
    }

    function renderItemRow(node, ancestors) {
        const item = node.item;
        const budgetAmount = item.qty * item.price;
        const monthQtyStored = parseFloat(certState.certs[item.code]?.[certCurrentMonth]) || 0;
        const tr = document.createElement('tr');
        if (ancestors.length > 0) tr.dataset.ancestors = ancestors.join('|');

        const tdCode = document.createElement('td');
        tdCode.className = 'cert-code-cell';
        tdCode.style.paddingLeft = (12 + node.depth * 18 + 24) + 'px';
        tdCode.appendChild(document.createTextNode(item.cleanCode));

        const tdSummary = document.createElement('td');
        tdSummary.className = 'cert-cell-summary';
        tdSummary.textContent = item.summary;
        tdSummary.title = item.summary;

        const tdUnit = numericTd();
        tdUnit.textContent = item.unit;

        const tdQty = numericTd();
        tdQty.textContent = item.qty.toLocaleString('es-ES', { maximumFractionDigits: 3 });

        const tdPrice = numericTd();
        tdPrice.textContent = fmtEur(item.price);

        // Cantidad certificada en el mes seleccionado (editable)
        const tdInput = numericTd();
        tdInput.classList.add('cert-col-input');
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'cert-input';
        input.min = '0';
        input.step = 'any';
        input.value = monthQtyStored || '';
        input.placeholder = '0';
        input.setAttribute('aria-label', 'Cantidad certificada de ' + item.cleanCode + ' en ' + certMonthLabel(certCurrentMonth));

        const tdMonthAmount = numericTd();
        const tdOriginQty = numericTd();
        const tdOriginPct = numericTd();
        const tdPending = numericTd();

        const paintComputedCells = () => {
            const monthQty = parseFloat(certState.certs[item.code]?.[certCurrentMonth]) || 0;
            const originQty = certOriginQty(item.code, certCurrentMonth);
            const originAmount = originQty * item.price;
            const originPct = budgetAmount === 0 ? 0 : (originAmount / budgetAmount) * 100;

            tdMonthAmount.textContent = fmtEur(monthQty * item.price);
            tdOriginQty.textContent = originQty.toLocaleString('es-ES', { maximumFractionDigits: 3 });
            tdOriginPct.textContent = originPct.toLocaleString('es-ES', { maximumFractionDigits: 1 }) + ' %';
            tdPending.textContent = fmtEur(budgetAmount - originAmount);
            tr.classList.toggle('cert-row-over', originQty > item.qty && item.qty > 0);
            tr.classList.toggle('cert-row-done', item.qty > 0 && Math.abs(originQty - item.qty) < 0.0005);
        };

        input.addEventListener('input', () => {
            const val = parseFloat(String(input.value).replace(',', '.'));
            registerCertificationMonth(certCurrentMonth);
            if (!certState.certs[item.code]) certState.certs[item.code] = {};
            if (isNaN(val) || val <= 0) {
                delete certState.certs[item.code][certCurrentMonth];
                if (Object.keys(certState.certs[item.code]).length === 0) {
                    delete certState.certs[item.code];
                }
            } else {
                certState.certs[item.code][certCurrentMonth] = val;
            }
            certSave();
            paintComputedCells();
            chapterPainters.forEach(paintChapter => paintChapter());
            updateCertSummary(buildCertRows());
        });

        paintComputedCells();
        tdInput.appendChild(input);

        [tdCode, tdSummary, tdUnit, tdQty, tdPrice, tdInput, tdMonthAmount, tdOriginQty, tdOriginPct, tdPending]
            .forEach(td => tr.appendChild(td));
        tbody.appendChild(tr);
    }

    function renderNode(node, ancestors) {
        if (node.isChapter) renderChapterRow(node, ancestors);
        else renderItemRow(node, ancestors);
    }

    tree.forEach(node => renderNode(node, []));
    table.appendChild(tbody);
    wrap.appendChild(table);
    applyCertCollapse();
}

// ---- Exportar certificación a Excel ----
function exportCertToExcel() {
    if (typeof XLSX === 'undefined') { alert('Librería Excel no disponible.'); return; }
    const rows = buildCertRows();
    if (rows.length === 0) { alert('No hay partidas certificables.'); return; }

    const wb = XLSX.utils.book_new();
    const wsData = [
        ['Código', 'Partida', 'Ud', 'Cant. presup.', 'Precio (€)', 'Cant. período', 'Imp. período (€)', 'Cant. origen', '% origen', 'Imp. origen (€)', 'Imp. pendiente (€)']
    ];

    rows.forEach(r => {
        wsData.push([
            r.cleanCode, r.summary, r.unit,
            r.qty, r.price, r.monthQty, r.monthAmount,
            r.originQty, r.budgetAmount === 0 ? 0 : r.originPct / 100,
            r.originAmount, r.pendingAmount
        ]);
    });

    const totalMonth = rows.reduce((s, r) => s + r.monthAmount, 0);
    const totalOrigin = rows.reduce((s, r) => s + r.originAmount, 0);
    const totalBudget = rows.reduce((s, r) => s + r.budgetAmount, 0);
    wsData.push([]);
    wsData.push(['', 'TOTALES', '', '', '', '', totalMonth, '', totalBudget === 0 ? 0 : totalOrigin / totalBudget, totalOrigin, totalBudget - totalOrigin]);

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    for (let r = 2; r <= wsData.length; r++) {
        ['E', 'G', 'J', 'K'].forEach(col => { if (ws[`${col}${r}`]) ws[`${col}${r}`].z = '#,##0.00 €'; });
        ['D', 'F', 'H'].forEach(col => { if (ws[`${col}${r}`]) ws[`${col}${r}`].z = '#,##0.000'; });
        if (ws[`I${r}`]) ws[`I${r}`].z = '0.0%';
    }
    ws['!cols'] = [
        { wch: 15 }, { wch: 50 }, { wch: 6 }, { wch: 13 }, { wch: 12 },
        { wch: 13 }, { wch: 15 }, { wch: 12 }, { wch: 9 }, { wch: 15 }, { wch: 16 }
    ];

    XLSX.utils.book_append_sheet(wb, ws, ('Certificación ' + certCurrentMonth).substring(0, 31));
    const baseName = currentFileName.replace(/\.[^/.]+$/, '');
    XLSX.writeFile(wb, `${baseName}_certificacion_${certCurrentMonth}.xlsx`);
    showNotification('Certificación exportada a Excel');
}

// ---- Exportar certificación a PDF ----
function exportCertToPdf() {
    const JsPDF = (window.jspdf && window.jspdf.jsPDF) ? window.jspdf.jsPDF : window.jsPDF;
    if (!JsPDF) { alert('Librería PDF no disponible.'); return; }

    const rows = buildCertRows();
    if (rows.length === 0) { alert('No hay partidas certificables.'); return; }

    const doc = new JsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
    if (typeof doc.autoTable !== 'function') { alert('La extensión de tablas para PDF (AutoTable) no está disponible.'); return; }

    const projectTitle = (parsedData.properties && parsedData.properties.description) || currentFileName.replace(/\.[^/.]+$/, '');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(128, 0, 32);
    doc.text('CERTIFICACIÓN DE OBRA — ' + certMonthLabel(certCurrentMonth), 15, 15);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);
    doc.text('Proyecto: ' + projectTitle, 15, 21);
    doc.text('Fecha de exportación: ' + new Date().toLocaleDateString('es-ES'), 15, 26);

    const totalMonth = rows.reduce((s, r) => s + r.monthAmount, 0);
    const totalOrigin = rows.reduce((s, r) => s + r.originAmount, 0);
    const totalBudget = rows.reduce((s, r) => s + r.budgetAmount, 0);
    const fmt = v => v.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';

    const body = rows.map(r => [
        r.cleanCode,
        r.summary,
        r.unit,
        r.qty.toLocaleString('es-ES', { maximumFractionDigits: 3 }),
        fmt(r.price),
        r.monthQty.toLocaleString('es-ES', { maximumFractionDigits: 3 }),
        fmt(r.monthAmount),
        r.originQty.toLocaleString('es-ES', { maximumFractionDigits: 3 }),
        (r.budgetAmount === 0 ? 0 : r.originPct).toLocaleString('es-ES', { maximumFractionDigits: 1 }) + ' %',
        fmt(r.originAmount),
        fmt(r.pendingAmount)
    ]);

    body.push([
        '', 'TOTALES', '', '', '', '', fmt(totalMonth), '',
        (totalBudget === 0 ? 0 : (totalOrigin / totalBudget) * 100).toLocaleString('es-ES', { maximumFractionDigits: 1 }) + ' %',
        fmt(totalOrigin), fmt(totalBudget - totalOrigin)
    ]);

    doc.autoTable({
        startY: 31,
        margin: { left: 15, right: 15, bottom: 18 },
        styles: { fontSize: 6.5, cellPadding: 1.5, lineColor: [220, 220, 220], lineWidth: 0.1, textColor: [40, 40, 40], font: 'helvetica' },
        head: [['Código', 'Partida', 'Ud', 'Cant. presup.', 'Precio', 'Cant. período', 'Imp. período', 'Cant. origen', '% origen', 'Imp. origen', 'Imp. pendiente']],
        headStyles: { fillColor: [128, 0, 32], textColor: [255, 255, 255], fontStyle: 'bold', fontSize: 7 },
        columnStyles: {
            0: { cellWidth: 22 },
            1: { cellWidth: 'auto' },
            2: { cellWidth: 9, halign: 'center' },
            3: { cellWidth: 18, halign: 'right' },
            4: { cellWidth: 18, halign: 'right' },
            5: { cellWidth: 18, halign: 'right' },
            6: { cellWidth: 20, halign: 'right' },
            7: { cellWidth: 18, halign: 'right' },
            8: { cellWidth: 14, halign: 'right' },
            9: { cellWidth: 20, halign: 'right' },
            10: { cellWidth: 22, halign: 'right' }
        },
        body,
        didParseCell: function (data) {
            if (data.row.section === 'body' && data.row.index === body.length - 1) {
                data.cell.styles.fontStyle = 'bold';
                data.cell.styles.fillColor = [240, 240, 240];
            }
        }
    });

    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7);
        doc.setTextColor(130, 130, 130);
        doc.text('Generado por BC3 Viewer — ' + new Date().toLocaleDateString('es-ES'), 15, 203);
        const pageStr = `Página ${i} de ${totalPages}`;
        doc.text(pageStr, 282 - doc.getTextWidth(pageStr), 203);
    }

    const baseName = currentFileName.replace(/\.[^/.]+$/, '');
    doc.save(`${baseName}_certificacion_${certCurrentMonth}.pdf`);
    showNotification('Certificación exportada a PDF');
}

// ---- Exportar certificación a BC3 (formato FIEBDC-3, intercambiable con
// otros programas de mediciones y presupuestos) ----
function exportCertToBC3() {
    if (!parsedData) { alert('Carga primero un presupuesto BC3.'); return; }
    const rows = buildCertRows();
    if (rows.length === 0) { alert('No hay partidas certificables.'); return; }

    const content = generateCertificationBC3(certCurrentMonth);
    if (!content) { alert('No se ha podido generar el archivo BC3 de certificación.'); return; }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    const baseName = currentFileName.replace(/\.[^/.]+$/, '');
    link.href = URL.createObjectURL(blob);
    link.download = `${baseName}_certificacion_${certCurrentMonth}.bc3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    showNotification('Certificación exportada a BC3');
}

// ---- Importar certificación desde BC3 ----
// Acepta cualquier BC3 (una certificación exportada desde aquí, desde otro
// programa FIEBDC-3, o incluso un presupuesto con mediciones actualizadas) y
// vuelca, para cada partida certificable coincidente por código, la cantidad
// certificada a origen que contenga el fichero al mes seleccionado: la
// diferencia con lo ya certificado en meses anteriores se asigna a ese mes.
async function importCertificationFromBC3(file) {
    if (!parsedData) { alert('Carga primero un presupuesto BC3.'); return; }

    const formData = new FormData();
    formData.append('bc3file', file);

    try {
        const response = await fetch('upload.php', { method: 'POST', body: formData });
        const result = await response.json();
        if (!result.success) {
            alert('Error al leer el archivo de certificación: ' + result.error);
            return;
        }

        const importedConcepts = result.data.concepts || {};
        let updated = 0;
        let unmatched = 0;

        getCertifiableItems().forEach(item => {
            const importedConcept = importedConcepts[item.code];
            if (!importedConcept || !Array.isArray(importedConcept.measurements) || importedConcept.measurements.length === 0) {
                unmatched++;
                return;
            }
            const importedTotal = getMeasurementTotal(importedConcept);
            const monthValue = Math.max(0, Math.round((importedTotal - certOriginQtyBefore(item.code, certCurrentMonth)) * 1000) / 1000);

            if (!certState.certs[item.code]) certState.certs[item.code] = {};
            if (monthValue <= 0) {
                delete certState.certs[item.code][certCurrentMonth];
                if (Object.keys(certState.certs[item.code]).length === 0) delete certState.certs[item.code];
            } else {
                certState.certs[item.code][certCurrentMonth] = monthValue;
            }
            updated++;
        });

        registerCertificationMonth(certCurrentMonth);
        certSave();
        rebuildCertTable();
        showNotification(`Certificación importada: ${updated} partidas actualizadas` + (unmatched ? `, ${unmatched} sin coincidencia` : ''));
    } catch (err) {
        console.error(err);
        alert('Error de conexión con el servidor al importar la certificación');
    }
}

// ---- Pestañas Presupuesto / Certificaciones ----
const tabBudgetEl = document.getElementById('tabBudget');
const tabCertEl = document.getElementById('tabCert');
const certViewEl = document.getElementById('certView');
const contentAreaEl = document.getElementById('contentArea');
const certMonthInput = document.getElementById('certMonth');
const certExpandAllBtnEl = document.getElementById('certExpandAllBtn');
const exportCertExcelBtnEl = document.getElementById('exportCertExcelBtn');
const exportCertPdfBtnEl = document.getElementById('exportCertPdfBtn');
const exportCertBc3BtnEl = document.getElementById('exportCertBc3Btn');
const certImportFileEl = document.getElementById('certImportFile');

function switchView(view) {
    if (!contentAreaEl || !certViewEl) return;
    const showCert = view === 'cert';
    contentAreaEl.classList.toggle('is-hidden', showCert);
    certViewEl.classList.toggle('is-hidden', !showCert);
    // En móvil permite ocultar la información del presupuesto (PEM/PEC, stats)
    document.body.classList.toggle('view-cert', showCert);
    if (tabBudgetEl) {
        tabBudgetEl.classList.toggle('is-active', !showCert);
        tabBudgetEl.setAttribute('aria-selected', String(!showCert));
    }
    if (tabCertEl) {
        tabCertEl.classList.toggle('is-active', showCert);
        tabCertEl.setAttribute('aria-selected', String(showCert));
    }
    if (showCert) {
        certLoad();
        if (certMonthInput) certMonthInput.value = certCurrentMonth;
        rebuildCertTable();
    }
}

if (tabBudgetEl) tabBudgetEl.addEventListener('click', () => switchView('budget'));

if (tabCertEl) {
    tabCertEl.addEventListener('click', () => {
        if (!parsedData) { alert('Carga primero un presupuesto BC3.'); return; }
        switchView('cert');
    });
}

if (certExpandAllBtnEl) {
    certExpandAllBtnEl.addEventListener('click', () => {
        if (certCollapsed.size > 0) {
            certCollapsed.clear();
        } else {
            certChapterCodes.forEach(code => certCollapsed.add(code));
        }
        rebuildCertTable();
    });
}

if (certMonthInput) {
    certMonthInput.addEventListener('change', () => {
        if (!certMonthInput.value) return;
        selectCertMonth(certMonthInput.value);
    });
}

if (exportCertExcelBtnEl) exportCertExcelBtnEl.addEventListener('click', exportCertToExcel);
if (exportCertPdfBtnEl) exportCertPdfBtnEl.addEventListener('click', exportCertToPdf);
if (exportCertBc3BtnEl) exportCertBc3BtnEl.addEventListener('click', exportCertToBC3);

if (certImportFileEl) {
    certImportFileEl.addEventListener('change', async () => {
        const file = certImportFileEl.files[0];
        certImportFileEl.value = '';
        if (!file) return;
        await importCertificationFromBC3(file);
    });
}

// ---- Recuperación automática de la última sesión ----
// Al recargar la web con un presupuesto abierto, se reabre por donde iba:
// cambios, nodos expandidos, scroll, nivel de navegación y pestaña activa.
(function autoRestoreLastSession() {
    if (parsedData) return;
    try {
        if (sessionStorage.getItem(CLOSE_SKIP_AUTORESTORE_KEY) === '1') {
            sessionStorage.removeItem(CLOSE_SKIP_AUTORESTORE_KEY);
            return;
        }
    } catch (error) { /* ignorar */ }
    const latest = getRecentSessions().find(entry => loadStoredSession(entry.name));
    if (latest) restoreSession(latest.name);
})();
