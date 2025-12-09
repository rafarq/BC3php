# BC3 Viewer

Visualizador web de archivos BC3 (FIEBDC-3) para presupuestos de construcción.

## Descripción

BC3 Viewer es una aplicación web que permite visualizar archivos en formato BC3 (estándar FIEBDC-3 utilizado en España para el intercambio de presupuestos de construcción). La aplicación muestra una vista jerárquica del presupuesto con capítulos, subcapítulos, partidas y líneas de medición.

## Características

- **Visualización jerárquica**: Muestra la estructura del presupuesto en forma de árbol expandible
- **Columnas de datos**: Código, Unidad, Resumen, Cantidad, Precio e Importe
- **Líneas de medición**: Tabla detallada con Uds, Largo, Ancho, Alto y cálculo de Parciales
- **Descripciones inline**: Texto descriptivo de cada partida visible al expandir
- **Detección de codificación**: Soporte para archivos ANSI, UTF-8 e ISO-8859-1

## Requisitos

- PHP 7.4 o superior
- Servidor web (Apache, nginx, o PHP built-in server)

## Instalación

1. Clonar o copiar los archivos a tu servidor web:

```
BC3php/
├── index.html
├── style.css
├── app.js
├── BC3Parser.php
└── upload.php
```

2. Iniciar el servidor:

```bash
# Usando el servidor built-in de PHP
php -S localhost:8080

# O configurar en Apache/nginx
```

3. Acceder a `http://localhost:8080` en el navegador

## Uso

1. Haz clic en "Seleccionar archivo .bc3"
2. Elige un archivo BC3 de tu ordenador
3. Haz clic en "Procesar"
4. Explora el árbol de presupuesto haciendo clic en los triángulos para expandir/colapsar

## Estructura de Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Página HTML principal |
| `style.css` | Estilos CSS (tema claro) |
| `app.js` | Lógica JavaScript del frontend |
| `BC3Parser.php` | Parser PHP para archivos BC3 |
| `upload.php` | Endpoint para subir archivos |

## Formato BC3

El parser soporta los siguientes registros del estándar FIEBDC-3:

- `~V` - Propiedades del archivo (versión, charset)
- `~C` - Conceptos (capítulos, partidas)
- `~D` - Descomposición (relaciones padre-hijo)
- `~T` - Textos descriptivos
- `~M` - Mediciones detalladas

## Licencia

MIT
