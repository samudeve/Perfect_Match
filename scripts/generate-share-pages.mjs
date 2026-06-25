import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'p');
const SITE = 'https://samudeve.github.io/Perfect_Match';

const PRODUCTS = [
  { id: 'pm-001', ref: 'Ref. 001', model: 'Aviador Retro Oversized', color: 'Negro', price: 45000, description: 'Montura oversize estilo aviador con lentes oscuras. Diseño retro moderno con protección UV.', images: ['imagenes/aviador.jpg'] },
  { id: 'pm-002', ref: 'Ref. 002', model: 'Aviador Retro Oversized', color: 'Naranja', price: 48000, description: 'Montura negra con lentes naranja vibrantes. Look audaz y de alto contraste.', images: ['imagenes/aviador.jpg'] },
  { id: 'pm-003', ref: 'Ref. 003', model: 'Aviador Retro Oversized', color: 'Vino Rosa', price: 48000, description: 'Montura vino con lentes rosa translúcidas. Elegancia y color en un solo diseño.', images: ['imagenes/aviador.jpg'] },
  { id: 'pm-004', ref: 'Ref. 004', model: 'Deportivo Shield', color: 'Blanco', price: 65000, description: 'Gafas deportivas shield con montura blanca y lentes espejados azul iridiscente.', images: ['imagenes/deportivo.jpg'] },
  { id: 'pm-005', ref: 'Ref. 005', model: 'Deportivo Shield', color: 'Negro', price: 62000, description: 'Diseño aerodinámico wrap-around con montura negra y lentes espejados oscuros.', images: ['imagenes/deportivo.jpg'] },
  { id: 'pm-006', ref: 'Ref. 006', model: 'Hexagonal Geométrico', color: 'Negro y Dorado', price: 55000, description: 'Montura hexagonal en metal dorado con lentes negras. Estilo fashion de vanguardia.', images: ['imagenes/hexagonal.jpg'] },
  { id: 'pm-007', ref: 'Ref. 007', model: 'Oval Vintage', color: 'Negro', price: 42000, description: 'Montura ovalada delgada en metal dorado con lentes negras y patillas negras.', images: ['imagenes/oval-vintage.jpg'] },
  { id: 'pm-008', ref: 'Ref. 008', model: 'Oval Vintage', color: 'Animal Print', price: 45000, description: 'Montura ovalada dorada con patillas animal print y lentes café. Estilo sofisticado.', images: ['imagenes/oval-vintage.jpg'] },
  { id: 'pm-009', ref: 'Ref. 009', model: 'Rectangular Clásica', color: 'Negro', price: 40000, description: 'Montura rectangular con bordes gruesos. Diseño moderno y estructurado.', images: ['imagenes/clasica-negro.jpg'] },
  { id: 'pm-010', ref: 'Ref. 010', model: 'Cat Eye', color: 'Negro', price: 42000, description: 'Silueta cat eye con esquinas elevadas. Elegancia vintage con actitud contemporánea.', images: ['imagenes/clasica-negro.jpg'] },
  { id: 'pm-011', ref: 'Ref. 011', model: 'Oval Minimalista', color: 'Negro', price: 40000, description: 'Montura oval suave inspirada en los 90. Versátil y atemporal.', images: ['imagenes/clasica-negro.jpg'] },
  { id: 'pm-012', ref: 'Ref. 012', model: 'Oval Retro', color: 'Negro', price: 38000, description: 'Montura oval gruesa en acetato negro sólido con lentes oscuras.', images: ['imagenes/oval-retro.jpg'] },
  { id: 'pm-013', ref: 'Ref. 013', model: 'Oval Retro', color: 'Café', price: 40000, description: 'Montura en tono café cálido con lentes marrones. Look natural y refinado.', images: ['imagenes/oval-retro.jpg'] },
  { id: 'pm-014', ref: 'Ref. 014', model: 'Oval Retro', color: 'Animal Print', price: 42000, description: 'Patrón carey moteado con lentes marrones. Clásico atemporal con personalidad.', images: ['imagenes/oval-retro.jpg'] },
  { id: 'pm-015', ref: 'Ref. 015', model: 'Oval Retro', color: 'Beige', price: 38000, description: 'Montura en tono beige claro con lentes marrones. Suave y sofisticada.', images: ['imagenes/oval-retro.jpg'] },
];

function formatRefLabel(ref) {
  return ref.replace(/^Ref\./i, 'REF.');
}

function formatPrice(price) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

fs.mkdirSync(outDir, { recursive: true });

PRODUCTS.forEach((product) => {
  const refLabel = formatRefLabel(product.ref);
  const pageUrl = `${SITE}/p/${product.id}.html`;
  const imageUrl = `${SITE}/${product.images[0]}`;
  const ogDescription = `${product.description} Color: ${product.color}. ${formatPrice(product.price)}.`;
  const catalogUrl = `${SITE}/`;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(refLabel)} — Perfectt Match</title>
  <meta name="description" content="${escapeHtml(ogDescription)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Perfectt Match">
  <meta property="og:title" content="${escapeHtml(refLabel)}">
  <meta property="og:description" content="${escapeHtml(ogDescription)}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:url" content="${pageUrl}">
  <meta name="twitter:card" content="summary_large_image">
  <meta http-equiv="refresh" content="0;url=${catalogUrl}">
  <link rel="canonical" href="${pageUrl}">
</head>
<body>
  <p>Redirigiendo al catálogo de <a href="${catalogUrl}">Perfectt Match</a>…</p>
</body>
</html>
`;

  fs.writeFileSync(path.join(outDir, `${product.id}.html`), html, 'utf8');
});

console.log(`Generadas ${PRODUCTS.length} páginas en p/`);
