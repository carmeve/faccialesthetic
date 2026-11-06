# Plan para sustituir WordPress

## Antes de cambiar el dominio

1. Aprobar contenido, fotografías, marca, credenciales, datos de contacto, políticas comerciales y privacidad.
2. Exportar y respaldar archivos, base de datos, productos, imágenes, pedidos y clientes del sitio actual. Conservar una ruta de restauración.
3. Inventariar las URLs existentes, incluido el blog y productos. Preservar `/servicios/`, `/nosotros/`, `/contacto/` y `/tienda/`. No redirigir indiscriminadamente todas las páginas al inicio.
4. Implementar destinos equivalentes y redirecciones permanentes para las rutas cambiadas. La propuesta no migra todavía `/blog/`, `/producto/*`, `/mi-cuenta/`, `/carrito/` ni `/finalizar-compra/`; estas son condiciones de bloqueo del reemplazo, no páginas para eliminar sin revisión.
5. Definir un CMS independiente y acceso de los editores. No usar cuentas compartidas.
6. Conectar pagos, pedidos, correo transaccional e inventario; probar pagos aprobados, rechazados y pendientes, eventos duplicados, cancelaciones y reembolsos según lo soportado por cada proveedor.
7. Verificar formularios, navegación móvil, accesibilidad, disponibilidad y costes del alojamiento.
8. Compilar con PUBLIC_INDEXABLE=true y PUBLIC_SITE_URL=https://faccialesthetic.com. Confirmar canonical, robots y sitemap en la versión final.
9. Cambiar el destino del dominio conservando los registros de correo. Comprobar HTTPS y restaurar el sitio anterior si aparece un fallo que impida consultas o compras.
10. Revisar redirecciones y Search Console después del cambio. No prometer posiciones ni recuperación inmediata de indexación.

## Pagos solicitados

Wompi, Sistecrédito y Addi son integraciones pendientes. No hay botones que simulen pagos aprobados.

Se necesitan las cuentas comerciales habilitadas, contacto técnico de cada proveedor, documentación correspondiente al convenio del comercio y credenciales de prueba configuradas por un canal seguro. No compartir secretos en chats, código, historial Git ni variables PUBLIC_*.

La siguiente fase requiere un servidor que calcule precios desde el catálogo aprobado, cree pedidos con referencia única, solicite la sesión de pago y valide notificaciones del proveedor de manera idempotente. Una redirección de navegador no confirma que el pedido esté pagado. No almacenar tarjetas ni documentos de financiación en este frontend.

Documentación Wompi consultada: https://docs.wompi.co/docs/colombia/widget-checkout-web/ y https://docs.wompi.co/docs/colombia/inicio-rapido/ . La integración específica de Sistecrédito y Addi se definirá con la documentación del comercio; no se han supuesto endpoints, modalidades ni elegibilidad.

## Administración editorial

La estructura JSON separa contenido y presentación. Actualmente se edita desde GitHub o VS Code. Para un panel de cliente, elegir un CMS independiente de WordPress, definir roles y conectar publicación/revisión. Sin esa conexión, no presentar el proyecto como si ya tuviera un administrador para usuarios no técnicos.
