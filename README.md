# Perfect Match

Perfect Match es un catálogo estático de gafas pensado para vender por WhatsApp. El sitio funciona con HTML, CSS y JavaScript puro, sin framework ni compilación.

## Inicio rápido
- Abrir el archivo index.html en el navegador, o usar un servidor local simple.
- Para cambios de contenido, revisar app.js y index.html.
- Para cambios visuales, revisar styles.css.

## Estructura del proyecto
- index.html: estructura principal del sitio.
- styles.css: estilos y diseño visual.
- app.js: catálogo, filtros, favoritos, carrito, localStorage y flujo de WhatsApp.
- scripts/generate-share-pages.mjs: genera páginas de compartición para productos.
- imagenes/ y logo/: recursos gráficos.

## Tareas comunes
### Añadir o editar productos
- Modificar la lista PRODUCTS en app.js.
- Mantener id, ref, model, color, price, description e images consistentes.
- Si se agregan productos nuevos y se quieren páginas compartibles, ejecutar:
  - node scripts/generate-share-pages.mjs

### Cambiar el texto visible
- Revisar index.html para texto estático.
- Revisar app.js si el contenido se renderiza dinámicamente.

### Ajustar la apariencia
- Usar styles.css.
- Mantener los tokens de color y tipografías definidos en :root.

### Cambiar el flujo de WhatsApp
- Revisar las constantes al inicio de app.js y la función buildWhatsAppMessage.

## Verificación recomendada
- Revisar el catálogo completo.
- Probar filtros, favoritos, carrito y pedido por WhatsApp.
- Confirmar que las imágenes y rutas funcionen en local y en GitHub Pages.
