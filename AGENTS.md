# AGENTS.md

## Propósito del proyecto
Perfect Match es un catálogo estático de gafas con carrito, favoritos, filtros y pedido por WhatsApp. Está construido con HTML, CSS y JavaScript puro, sin framework ni build step.

## Estructura principal
- index.html: estructura general de la landing/catalogo, incluyendo header, hero, filtros, catálogo, carrito y footer.
- styles.css: estilos visuales completos del sitio.
- app.js: lógica de negocio del catálogo: datos de productos, filtros, favoritos, carrito, almacenamiento en localStorage, flujo de WhatsApp y renderizado.
- scripts/generate-share-pages.mjs: genera páginas de compartición en la carpeta p/ a partir del catálogo.
- p/: páginas generadas para compartir productos; no editar manualmente si se puede regenerar con el script.
- imagenes/ y logo/: assets del proyecto.

## Reglas para trabajar en este proyecto
- Para añadir o modificar productos, editar la lista PRODUCTS en app.js.
- Para cambiar textos visibles del catálogo, revisar primero index.html y luego app.js si el texto se renderiza dinámicamente.
- Para ajustar estilos visuales, priorizar styles.css y mantener la identidad premium actual del sitio.
- Para cambiar el número de WhatsApp o la URL de producción, actualizar las constantes al inicio de app.js.
- Para cambios de assets o rutas de imágenes, usar rutas relativas compatibles con GitHub Pages y carga local.
- La experiencia de carrito, favoritos y notas usa localStorage; si cambias esa lógica, conservar el comportamiento esperado.

## Tareas frecuentes
1. Añadir un nuevo producto
   - Actualizar PRODUCTS en app.js.
   - Si aplica, regenerar las páginas compartidas con:
     - node scripts/generate-share-pages.mjs

2. Ajustar precio, descripción o color de un producto
   - Modificar el objeto correspondiente en PRODUCTS.

3. Cambiar el diseño del catálogo o carrito
   - Revisar styles.css y mantener clases existentes cuando sea posible.

4. Modificar el flujo de pedido por WhatsApp
   - Revisar las constantes y funciones relacionadas con whatsappBtn y el texto del pedido en app.js.

## Verificación recomendada
No hay tests automatizados. Para validar cambios:
- abrir el sitio localmente en el navegador;
- comprobar catálogo, filtros, favoritos, carrito y WhatsApp;
- confirmar que los assets cargan correctamente.

## Notas importantes
- El sitio está pensado para funcionar tanto localmente como en GitHub Pages.
- La función asset() en app.js resuelve rutas de forma robusta para ambos entornos.
- Si cambias la estructura HTML, revisar que los selectores usados en app.js sigan existiendo.
