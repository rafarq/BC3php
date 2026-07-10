# Formato SYSmed v1

SYSmed agrupa el presupuesto con sus mediciones y todas sus certificaciones sin perder la interoperabilidad con FIEBDC-3. Es un contenedor ZIP con extensión `.sysmed`; cada documento de negocio sigue siendo un BC3 completo que puede extraerse y abrirse de forma independiente.

## Estructura

```text
obra.sysmed
├── mimetype
├── manifest.json
├── medicion.bc3
└── certificaciones/
    ├── Certificacion1.bc3
    ├── Certificacion2.bc3
    └── ...
```

- `mimetype` es la primera entrada, sin comprimir, y contiene `application/vnd.sysarq.sysmed+zip`.
- `manifest.json` identifica el formato, su versión y todos los BC3 incluidos.
- `medicion.bc3` contiene el presupuesto y sus mediciones en el estado guardado.
- Cada archivo de `certificaciones/` es un BC3 completo cuya medición representa la cantidad certificada a origen en ese mes.

El ZIP puede renombrarse a `.zip` y abrirse con cualquier descompresor para recuperar manualmente los BC3.

## Manifiesto

Ejemplo reducido:

```json
{
  "format": "SYSmed",
  "formatVersion": 1,
  "mimeType": "application/vnd.sysarq.sysmed+zip",
  "packageId": "urn:uuid:00000000-0000-4000-8000-000000000000",
  "revision": 1,
  "createdAt": "2026-07-10T08:30:00+00:00",
  "modifiedAt": "2026-07-10T08:30:00+00:00",
  "budget": {
    "path": "medicion.bc3",
    "originalName": "presupuesto.bc3",
    "mediaType": "application/x-bc3",
    "bytes": 12345,
    "sha256": "..."
  },
  "certifications": [
    {
      "number": 1,
      "month": "2026-01",
      "path": "certificaciones/Certificacion1.bc3",
      "quantityBasis": "cumulative-to-date",
      "mediaType": "application/x-bc3",
      "bytes": 12000,
      "sha256": "..."
    }
  ],
  "extensions": {}
}
```

`month` usa `YYYY-MM`. `number` es el ordinal visible. `quantityBasis` vale `cumulative-to-date`: para reconstruir la cantidad del período se resta el acumulado de la certificación anterior al acumulado actual.

## Compatibilidad

- Un lector v1 debe rechazar una versión mayor que no comprenda.
- Los archivos desconocidos no deben interpretarse como documentos del proyecto.
- La ruta y el hash SHA-256 de cada BC3 se validan antes de procesarlo.
- Las rutas absolutas, `..`, separadores invertidos, duplicados, entradas cifradas y tamaños descomprimidos anómalos deben rechazarse.
- Los BC3 son la fuente de verdad. El manifiesto no duplica cantidades de medición o certificación.

## Flujo recomendado

- **Guardar proyecto** genera un `.sysmed` con el BC3 de medición actual y una certificación BC3 por cada mes con datos.
- **Abrir proyecto** carga `medicion.bc3`, ordena las certificaciones por mes y reconstruye cada período.
- **Exportar presupuesto BC3** y **Exportar certificación BC3** siguen disponibles para trabajar con programas que solo admiten FIEBDC-3.
