# Changelog

Todos los cambios notables de este proyecto se documentan en este fichero.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y el proyecto usa [Versionado Semántico](https://semver.org/lang/es/).

---

## [Unreleased]

---

## [1.3.0] — 2026-07-03

### Añadido
- Nueva columna "PROPORCIÓN" en la pestaña PRESUPUESTO que agrupa el % PEM y la composición de recursos (MO/MAT/MAQ/SUB/Etc) en los capítulos.
- Cabecera compacta y adaptativa con menú de ajustes unificado en engranaje ⚙️ (Coeficientes, Auditoría, Tema, Info).
- Botón pulsante "🚀 CARGAR ARCHIVO .BC3" en la pantalla de bienvenida con brillo/aura y carga automática en un solo clic.
- Panel de estadísticas del Planning Gantt (PEM, certificado, restante, días de obra restantes y promedios diarios/semanales/mensuales requeridos).
- Sincronización de versión general a V1.3.0 en pie de página e información.

---

## [1.2.0] — 2026-07-03

### Añadido
- Módulo de Certificaciones Mensuales de Obra para registrar cantidades mes a mes.
- Sincronización del progreso de tareas de Gantt en base a volúmenes certificados reales.
- Curva S acumulada real basada en certificaciones mensuales.
- Resaltado de Ruta Crítica en el árbol con badge animado `⚡ CRÍTICO`.
- Historial de Auditoría de Cambios con desglose de variaciones y desviación del PEM neta.
- Exportación optimizada a PDF A4 de certificaciones mensuales con sección de firmas.
- Exportación del planning a formato estándar XML de Microsoft Project.

---

## [1.1.0] — 2026-07-03

### Añadido
- Botón "➕ Nueva Partida" para añadir borradores inline directamente en el árbol.
- Botonera jerárquica de dirección (▲/▼/◀/▶) para estructurar nuevas partidas creadas.
- Enlaces de dependencias Fin→Inicio en el Gantt con reprogramación en cascada y botón de borrado rápido "×".
- Buscador Global (Ctrl+F) incremental con resaltado y navegación arriba/abajo.
- Curva S de avance teórico en el Dashboard.

---

## [1.0.0] — 2026-07-03

### Añadido
- Reorganización de la cabecera original en grupos de control.
- Rediseño visual de las tarjetas PEM y PEC.
- Dashboard técnico integrado con 6 gráficos interactivos.
- Diagrama Gantt interactivo con ruta crítica y línea de hoy.
- Menú lateral de información (ℹ️) e historial de versiones.
- Alternador de modo claro / modo oscuro adaptativo.

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
- Detección de capitulo para eliminar el carácter `#` al final de códigos de concepto y partida.
- Limpieza de símbolos `#` y espacios sobrantes en los campos de texto mostrados.

[Unreleased]: https://github.com/rafarq/BC3php/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/rafarq/BC3php/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/rafarq/BC3php/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/rafarq/BC3php/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/rafarq/BC3php/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/rafarq/BC3php/releases/tag/v0.1.0

