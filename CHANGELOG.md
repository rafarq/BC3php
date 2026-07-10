# Changelog

Todos los cambios notables de este proyecto se documentan en este fichero.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

---

## [Unreleased]

---

## [0.4.0] — 2026-07-09

Mejoras ejecutadas del análisis `mejoras-2026-07-09.md`: experiencia táctil y de teclado (1.2, 1.4, 1.5, 1.6, 1.7, 1.8) y nuevas funcionalidades de alta prioridad (2.1, 2.2, 2.3).

### Añadido

- Autoguardado y recuperación de sesión: cada edición del presupuesto se guarda automáticamente en `localStorage` (una clave por fichero, mismo patrón que el Gantt), con guardado final al abandonar la página. El estado inicial muestra una lista de "Sesiones guardadas" (hasta 5) con recuperación con un clic y borrado por sesión; deshacer/rehacer también persisten.
- Edición estructural del presupuesto: menú contextual por fila del árbol (escritorio) para añadir capítulos y partidas, duplicar y eliminar elementos con confirmación; botones para añadir y eliminar líneas de medición en las tablas de mediciones (escritorio y móvil); factor/cantidad de la descomposición editable en línea y borrado de líneas de descomposición desde el panel de detalles. Los códigos nuevos se generan únicos a partir del padre y `generateModifiedBC3()` refleja la nueva estructura en el BC3 guardado (registros `~C`/`~T`/`~D`/`~M` nuevos, eliminados y descomposiciones vaciadas), con round-trip verificado.
- Certificaciones y seguimiento de obra: nuevo modal "Certificación" con selector de mes, tabla de partidas certificables con cantidad del período editable, certificación a origen, % ejecutado e importe pendiente, tarjetas de resumen económico y resaltado de partidas completadas o sobrecertificadas. Las cantidades se registran por partida y por mes en `localStorage` y la certificación del período se exporta a PDF y Excel.
- Botón de lápiz explícito (44 px) en el detalle móvil de una partida para editar resumen y precio sin depender del doble toque; la pulsación larga se mantiene como atajo.
- Historial del navegador en la navegación móvil por niveles: el botón/gesto "atrás" (incluido el deslizamiento en iOS/Android) sube un nivel en lugar de abandonar la página.
- Panel de detalles como panel lateral redimensionable en escritorio, con divisor arrastrable mediante Pointer Events (compatible con táctil y teclado), ancho persistido en `localStorage` y botón de cierre.
- Navegación por teclado en el árbol (`role="treegrid"`): ↑/↓/Home/End para moverse, →/← para expandir/contraer o saltar a hijo/padre, `Enter` abre detalles, `/` enfoca el buscador y `Esc` devuelve el foco al árbol, con roving tabindex.

### Cambiado

- Todos los arrastres (columnas del árbol, barras del Gantt y columna de tareas del Gantt) migrados de eventos de ratón a Pointer Events con `touch-action: none`, haciendo el Planning usable en tablet y móvil.
- La barra de filtros en móvil se compacta en una fila de chips más un botón "Filtros" con contador de filtros activos que abre una hoja inferior con los selects; en escritorio no hay cambios visuales.
- Objetivos táctiles del árbol móvil garantizados a un mínimo de 44 px (filas y botón "← Volver").
- Actualizada la versión mostrada a V0.4.0.

---

## [0.3.0] — 2026-07-06

### Añadido

- Enlaces de pie de página al roadmap público y al changelog renderizado en HTML desde `CHANGELOG.md`.
- Presupuesto BC3 de prueba (`presupuesto-prueba.bc3`) cargable desde el botón `Cargar presupuesto de prueba`.
- Logo real de BC3php en la cabecera mediante `bc3logo.png`.
- Enlace visible en el pie al fichero `LICENSE`, mostrando la licencia real del proyecto: GNU Affero General Public License v3.0.
- Hoja de estilos de impresión (`@media print`) para obtener una vista limpia del presupuesto desde el navegador.
- Estados de feedback mediante notificaciones para guardar, exportar y aplicar coeficientes.
- Estado visual de procesado para ficheros BC3 grandes.
- Navegación móvil tipo iPod para recorrer capítulos y partidas por niveles, con transición lateral y barra superior de vuelta.
- Edición móvil por pulsación larga en textos editables, manteniendo el doble clic como mecanismo de edición en escritorio.

### Cambiado

- La edición inline de resúmenes, precios, descripciones y líneas de medición se activa con doble clic, y las descripciones editadas se guardan en el BC3 modificado.
- La cabecera móvil agrupa las acciones secundarias en un menú desplegable y deja visibles las acciones principales de archivo.
- Actualizado el pie de página a V0.3.0 con crédito a System Arquitectura.
- Consolidada la política del changelog para registrar las mejoras del mismo día dentro de una única entrada fechada, evitando duplicados por fecha.
- Reorganizada y normalizada la cabecera con grupos de acciones, botones consistentes y mejor comportamiento responsive.
- Mejorada la legibilidad de las tablas con números tabulares, filas alternas, estados hover/activo y jerarquía visual más clara.
- Renovado el estado vacío inicial con mensaje de onboarding, carga por arrastre y acceso al presupuesto de prueba.
- Consolidado el sistema visual con tokens de espaciado, radios, sombras, tipografía, transiciones y foco visible.
- Ajustados los gráficos del dashboard para usar una paleta coherente con los tipos de recurso, tooltips y formato monetario.
- Mejorados los modales de Dashboard, Comparar y Planning con backdrop, animación, cierre por `Esc` y clic exterior.
- Pulido el Gantt con tooltip completo, sombreado alterno, línea de hoy y cabecera integrada en la paleta.
- Refinados scrollbars, sombras de superficies fijas, footer y comportamiento móvil.
- Convertido el modo oscuro a negro real, con superficies casi negras y el logotipo filtrado a blanco completo.
- Actualizada la whitelist de `subir.sh` para incluir `LICENSE`, `bc3logo.png` y el BC3 de prueba.

### Corregido

- Corregido el guardado de BC3 modificados para que los archivos exportados puedan volver a abrirse en la propia app sin perder jerarquía, importes ni factores de descomposición.
- Corregido el scroll de la vista pública del changelog en `changelog.php`, que quedaba bloqueado por el layout fijo del visor principal.
- Corregido el botón móvil de `Coeficientes`, que no abría el panel cuando este conservaba la clase `is-hidden`.
- Bloqueado el zoom accidental en pantallas pequeñas, incluido el zoom al enfocar textos editables y campos de formulario.
- Corregida la prioridad de ocultación de acciones móviles para que los botones solo aparezcan cuando el presupuesto ya está cargado.

---

## [0.2.0] — 2026-07-03

### Añadido

- `CONTRIBUTING.md` con guía de instalación, ejecución y envío de PRs.
- `SECURITY.md` con política de reporte de vulnerabilidades.
- `CODE_OF_CONDUCT.md` basado en Contributor Covenant 1.4.
- `CHANGELOG.md` (este fichero).
- Modo oscuro con alternancia claro/oscuro y estilos adaptados en todos los módulos, incluido el Gantt.
- Edición en línea de resúmenes y precios unitarios desde la propia tabla, con historial de deshacer/rehacer (Ctrl+Z / Ctrl+Y) y guardado del BC3 modificado.
- Dashboard de análisis visual con gráficos de distribución por capítulos y por tipo de recurso, y estadísticas globales del presupuesto.
- Panel de coeficientes globales (PEM a PEC): Gastos Generales, Beneficio Industrial y Baja/Alza general, con cálculo automático del PEC en tiempo real.
- Comparador de presupuestos: carga de un segundo archivo BC3 y comparación partida a partida con desviaciones de precio resaltadas.
- Exportación a PDF (tabla formateada y totales) y a Excel (`.xlsx`), generada localmente sin dependencias externas.
- Planning – diagrama de Gantt interactivo generado a partir de capítulos y subcapítulos (hasta 3 niveles), con distribución automática de fechas, barras arrastrables, capítulos colapsables y auto-guardado en `localStorage`.
- Capturas de pantalla de las funcionalidades del proyecto en la carpeta `CAPTURAS/`, junto con ejemplos de presupuesto exportado en PDF y Excel.
- Procesado automático del archivo `.bc3` al seleccionarlo, sin necesidad de pulsar manualmente el botón `Procesar`.
- Iconos SVG inline de estilo Lucide para acciones de dashboard, planning, exportación, tema, coeficientes, deshacer/rehacer, cierres de modal y controles del Gantt.
- Estilos globales para enlaces (`a`) y botones deshabilitados, con nuevas variables de contraste (`--accent-contrast`, `--link-color`, `--link-hover`) adaptadas a modo claro y oscuro.

### Cambiado

- Sustituidos emojis y símbolos sueltos de la interfaz por iconos SVG locales sin dependencias externas.
- Centralizada la lógica de carga de BC3 para que el selector de archivo, el botón manual y el arrastre de archivos usen el mismo flujo de procesado.
- Actualizado el pie de página y ajustada la versión mostrada a V0.2.0.
- Eliminado el subrayado en el hover de los elementos del breadcrumb para un estilo más limpio.

### Corregido

- Corregidos selectores CSS del modo oscuro (`.dark-mode` → `body.dark-theme`) que impedían aplicar los estilos oscuros a filas, celdas y columnas del diagrama de Gantt.

---

## [0.1.0] — 2025-12-10

### Añadido

- Visualizador jerárquico de archivos BC3 (FIEBDC-3) en forma de árbol expandible.
- Columnas: Código, Unidad, Resumen, Cantidad, Precio e Importe.
- Tabla de líneas de medición con Uds, Largo, Ancho, Alto y Parciales.
- Descripciones *inline* de cada partida al expandir el nodo.
- Detección automática de codificación: ANSI, UTF-8 e ISO-8859-1.
- Funcionalidad de búsqueda en la vista de árbol.
- Columna jerárquica y de código unificadas en una sola columna.
- `README.md` con guía de instalación y uso.

### Corregido

- Eliminación del carácter `#` al final de códigos de concepto y partida.
- Limpieza de símbolos `#` y espacios sobrantes en los campos de texto mostrados.

[Unreleased]: https://github.com/rafarq/BC3php/compare/v0.4.0...HEAD
[0.4.0]: https://github.com/rafarq/BC3php/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/rafarq/BC3php/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/rafarq/BC3php/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/rafarq/BC3php/releases/tag/v0.1.0
