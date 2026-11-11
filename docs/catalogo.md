# Administrar el catálogo

El repositorio incluye la configuración de Pages CMS para editar productos y categorías desde un navegador.

1. Abre https://app.pagescms.org con la cuenta de GitHub que administra carmeve/faccialesthetic.
2. Autoriza la aplicación para ese repositorio y selecciona la rama main.
3. En Categorías, crea las categorías que necesita la tienda.
4. En Productos, crea o edita una ficha. Selecciona su categoría, escribe el precio en pesos colombianos y añade una foto principal y, si quieres, hasta seis fotos adicionales.
5. Selecciona Publicado para mostrar el producto y permitir que se añada a la consulta de WhatsApp. Borrador lo oculta. No disponible lo muestra sin botón de añadir.

Pages CMS guarda los cambios en GitHub. La propuesta alojada en Sites necesita compilarse y desplegarse desde ese estado del repositorio para reflejarlos. La publicación automática todavía no está conectada.

Las fotos que se carguen en el panel se convierten a AVIF durante la compilación. Las fichas existentes conservan sus identificadores para mantener las selecciones de WhatsApp guardadas.
