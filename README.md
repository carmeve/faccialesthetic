# Facciale Sthetic — propuesta independiente

Primera versión de revisión con Astro, CSS y JavaScript. Código portable, sin WordPress ni recursos visuales cargados desde WordPress.

## Abrir en VS Code

Requiere Node.js 22.12 o superior y Git.

```bash
git clone https://github.com/carmeve/faccialesthetic.git
cd faccialesthetic
npm ci
code .
npm run dev
```

Abrir la dirección local que imprime Astro. `npm run build` genera `dist/`, que puede alojarse como sitio estático. `npm test` verifica la selección del catálogo. El archivo de bloqueo fija las dependencias instaladas.

## Estado real

- Implementado: inicio, listado y detalle de servicios, equipo, formación, contacto por WhatsApp, catálogo con selección persistente en el navegador, página 404 y metadatos.
- Catálogo: los dos productos y sus precios proceden de la tienda pública consultada el 6 de noviembre de 2026. Confirmar precio, inventario, envío e información de producto antes de lanzamiento.
- La selección de productos permite solicitar una cotización por WhatsApp. No crea pedidos, procesa pagos ni reserva inventario.
- Pendiente: cobros Wompi, Sistecrédito y Addi, servidor de pedidos, cuentas de clientes, migración de pedidos, blog y gestor editorial autenticado.
- Formación: no se inventaron fechas, temarios, precios ni certificaciones. La página solicita información al equipo; cargar la oferta aprobada antes de vender inscripciones.
- Equipo: nombres y profesiones tomados del sitio público. No se añadieron años de experiencia, testimonios ni credenciales sin verificar.
- La web actual y su dominio no se han modificado.

## Editar contenido

`src/data/site.json`: nombre, teléfono, dirección y textos principales.

`src/data/services.json`: áreas de atención, textos y rutas.

`src/data/products.json`: catálogo y precios en pesos colombianos.

`src/pages/`: páginas y componentes de contenido. `src/styles/global.css`: diseño y puntos de adaptación. `public/images/`: imágenes copiadas del sitio actual, pendientes de validación de derechos y aprobación del cliente. Las imágenes de procedimientos son ilustrativas; no representan resultados de pacientes. El emblema tipográfico es una propuesta visual, no un cambio definitivo de identidad.

Por ahora el contenido se edita en VS Code o en GitHub; no hay un panel editorial instalado. Un CMS independiente con acceso por roles se conectará después de acordar quién editará y dónde se alojará.

## SEO y lanzamiento

La propuesta usa `noindex, nofollow` y `robots.txt` restrictivo por defecto para evitar que se indexe la versión de revisión. Esto es intencional y no modifica la configuración del WordPress actual.

Para el lanzamiento aprobado, configurar las variables del alojamiento y reconstruir:

```text
PUBLIC_INDEXABLE=true
PUBLIC_SITE_URL=https://faccialesthetic.com
```

Conservar estas variables al construir cada nueva versión. Verificar el HTML publicado, canonical, sitemap y robots después del cambio. Véase `docs/MIGRACION.md`.

## Revisión privada

La vista previa alojada en Sites es privada para el propietario. Compartirla con el cliente requiere configurar explícitamente ese acceso. La configuración de Sites no obliga a utilizar ese alojamiento en producción.

## Comprobaciones

```bash
npm test
npm run build
node scripts/check-build.mjs
```

No añadir claves privadas a este repositorio público. Las claves de pagos deben residir únicamente en el gestor de secretos del servidor que procese pedidos.
