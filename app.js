/**
 * Vision Elite — Catálogo de Gafas
 * Carrito, favoritos, filtros y WhatsApp
 */

const WHATSAPP_NUMBER = '573503432058';
const PRODUCTION_SITE_URL = 'https://samudeve.github.io/Perfect_Match/';
const STORAGE_KEY = 'vision_elite_cart';
const NOTES_KEY = 'vision_elite_notes';
const FAVORITES_KEY = 'vision_elite_favorites';

/** Base URL para assets (funciona en local y GitHub Pages) */
const ASSET_BASE = (() => {
  const script = document.querySelector('script[src*="app.js"]');
  if (script?.src) {
    return script.src.replace(/app\.js(\?.*)?$/, '');
  }
  const path = window.location.pathname.replace(/[^/]*$/, '');
  return `${window.location.origin}${path}`;
})();

function asset(path) {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${ASSET_BASE}${path.replace(/^\.\//, '')}`;
}

const CATEGORIES = {
  sol: 'Gafas de sol',
  deportivas: 'Gafas deportivas',
  lectura: 'Gafas de lectura',
  otros: 'Otros',
};

const PRODUCTS = [
  {
    id: 'pm-001', ref: 'Ref. 001', model: 'Aviador Retro Oversized', color: 'Negro', colorHex: '#1a1a1a',
    category: 'sol', price: 45000,
    description: 'Montura oversize estilo aviador con lentes oscuras. Diseño retro moderno con protección UV.',
    images: ['imagenes/aviador.jpg'],
  },
  {
    id: 'pm-002', ref: 'Ref. 002', model: 'Aviador Retro Oversized', color: 'Naranja', colorHex: '#f57c00',
    category: 'sol', price: 48000,
    description: 'Montura negra con lentes naranja vibrantes. Look audaz y de alto contraste.',
    images: ['imagenes/aviador.jpg'],
  },
  {
    id: 'pm-003', ref: 'Ref. 003', model: 'Aviador Retro Oversized', color: 'Vino Rosa', colorHex: '#8b2942',
    category: 'sol', price: 48000,
    description: 'Montura vino con lentes rosa translúcidas. Elegancia y color en un solo diseño.',
    images: ['imagenes/aviador.jpg'],
  },
  {
    id: 'pm-004', ref: 'Ref. 004', model: 'Deportivo Shield', color: 'Blanco', colorHex: '#f5f5f5',
    category: 'deportivas', price: 65000,
    description: 'Gafas deportivas shield con montura blanca y lentes espejados azul iridiscente.',
    images: ['imagenes/deportivo.jpg'],
  },
  {
    id: 'pm-005', ref: 'Ref. 005', model: 'Deportivo Shield', color: 'Negro', colorHex: '#1a1a1a',
    category: 'deportivas', price: 62000,
    description: 'Diseño aerodinámico wrap-around con montura negra y lentes espejados oscuros.',
    images: ['imagenes/deportivo.jpg'],
  },
  {
    id: 'pm-006', ref: 'Ref. 006', model: 'Hexagonal Geométrico', color: 'Negro y Dorado', colorHex: '#c9a227',
    category: 'sol', price: 55000,
    description: 'Montura hexagonal en metal dorado con lentes negras. Estilo fashion de vanguardia.',
    images: ['imagenes/hexagonal.jpg'],
  },
  {
    id: 'pm-007', ref: 'Ref. 007', model: 'Oval Vintage', color: 'Negro', colorHex: '#1a1a1a',
    category: 'sol', price: 42000,
    description: 'Montura ovalada delgada en metal dorado con lentes negras y patillas negras.',
    images: ['imagenes/oval-vintage.jpg'],
  },
  {
    id: 'pm-008', ref: 'Ref. 008', model: 'Oval Vintage', color: 'Animal Print', colorHex: '#8b6914',
    category: 'sol', price: 45000,
    description: 'Montura ovalada dorada con patillas animal print y lentes café. Estilo sofisticado.',
    images: ['imagenes/oval-vintage.jpg'],
  },
  {
    id: 'pm-009', ref: 'Ref. 009', model: 'Rectangular Clásica', color: 'Negro', colorHex: '#1a1a1a',
    category: 'sol', price: 40000,
    description: 'Montura rectangular con bordes gruesos. Diseño moderno y estructurado.',
    images: ['imagenes/clasica-negro.jpg'],
  },
  {
    id: 'pm-010', ref: 'Ref. 010', model: 'Cat Eye', color: 'Negro', colorHex: '#1a1a1a',
    category: 'sol', price: 42000,
    description: 'Silueta cat eye con esquinas elevadas. Elegancia vintage con actitud contemporánea.',
    images: ['imagenes/clasica-negro.jpg'],
  },
  {
    id: 'pm-011', ref: 'Ref. 011', model: 'Oval Minimalista', color: 'Negro', colorHex: '#1a1a1a',
    category: 'sol', price: 40000,
    description: 'Montura oval suave inspirada en los 90. Versátil y atemporal.',
    images: ['imagenes/clasica-negro.jpg'],
  },
  {
    id: 'pm-012', ref: 'Ref. 012', model: 'Oval Retro', color: 'Negro', colorHex: '#1a1a1a',
    category: 'sol', price: 38000,
    description: 'Montura oval gruesa en acetato negro sólido con lentes oscuras.',
    images: ['imagenes/oval-retro.jpg'],
  },
  {
    id: 'pm-013', ref: 'Ref. 013', model: 'Oval Retro', color: 'Café', colorHex: '#6d4c35',
    category: 'sol', price: 40000,
    description: 'Montura en tono café cálido con lentes marrones. Look natural y refinado.',
    images: ['imagenes/oval-retro.jpg'],
  },
  {
    id: 'pm-014', ref: 'Ref. 014', model: 'Oval Retro', color: 'Animal Print', colorHex: '#8b6914',
    category: 'sol', price: 42000,
    description: 'Patrón carey moteado con lentes marrones. Clásico atemporal con personalidad.',
    images: ['imagenes/oval-retro.jpg'],
  },
  {
    id: 'pm-015', ref: 'Ref. 015', model: 'Oval Retro', color: 'Beige', colorHex: '#e8e4dc',
    category: 'sol', price: 38000,
    description: 'Montura en tono beige claro con lentes marrones. Suave y sofisticada.',
    images: ['imagenes/oval-retro.jpg'],
  },
];

let cart = loadCart();
let favorites = loadFavorites();
let activeFilters = { favorites: false, category: null };

const catalogEl = document.getElementById('catalog');
const catalogEmptyEl = document.getElementById('catalogEmpty');
const catalogEmptyTitle = document.getElementById('catalogEmptyTitle');
const catalogEmptyText = document.getElementById('catalogEmptyText');
const catalogEmptyReset = document.getElementById('catalogEmptyReset');
const sectionTitle = document.getElementById('sectionTitle');
const sectionSubtitle = document.getElementById('sectionSubtitle');
const filterFavorites = document.getElementById('filterFavorites');
const favoritesCount = document.getElementById('favoritesCount');
const filterReferenceBtn = document.getElementById('filterReferenceBtn');
const filterReferenceLabel = document.getElementById('filterReferenceLabel');
const filterReferenceMenu = document.getElementById('filterReferenceMenu');
const filterDropdown = document.getElementById('filterDropdown');
const filtersActive = document.getElementById('filtersActive');
const cartToggle = document.getElementById('cartToggle');
const cartPanel = document.getElementById('cartPanel');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartBadge = document.getElementById('cartBadge');
const cartItemsEl = document.getElementById('cartItems');
const cartEmptyEl = document.getElementById('cartEmpty');
const cartNotesSection = document.getElementById('cartNotesSection');
const cartFooter = document.getElementById('cartFooter');
const cartTotalItems = document.getElementById('cartTotalItems');
const cartGrandTotalValue = document.getElementById('cartGrandTotalValue');
const orderDescription = document.getElementById('orderDescription');
const whatsappBtn = document.getElementById('whatsappBtn');
const emptyCartBtn = document.getElementById('emptyCartBtn');
const viewCatalogBtn = document.getElementById('viewCatalogBtn');
const toastEl = document.getElementById('toast');
const headerEl = document.getElementById('header');

const carouselState = {};

function formatPrice(price) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price);
}

// ---- LocalStorage ----
function loadCart() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function loadNotes() {
  return localStorage.getItem(NOTES_KEY) || '';
}

function saveNotes(value) {
  localStorage.setItem(NOTES_KEY, value);
}

function loadFavorites() {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

function isFavorite(productId) {
  return favorites.includes(productId);
}

function toggleFavorite(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  if (isFavorite(productId)) {
    favorites = favorites.filter((id) => id !== productId);
    showToast(`${product.model} eliminada de favoritos`);
  } else {
    favorites.push(productId);
    showToast(`${product.model} añadida a favoritos`);
  }

  saveFavorites();
  updateFavoritesUI();
  renderCatalog();
}

// ---- Filtros ----
function hasActiveFilters() {
  return activeFilters.favorites || activeFilters.category !== null;
}

function getFilteredProducts() {
  let result = [...PRODUCTS];

  if (activeFilters.favorites) {
    result = result.filter((p) => isFavorite(p.id));
  }

  if (activeFilters.category) {
    result = result.filter((p) => p.category === activeFilters.category);
  }

  return result;
}

function clearFilters() {
  activeFilters = { favorites: false, category: null };
  closeReferenceMenu();
  updateFilterUI();
  renderCatalog();
}

function scrollToCatalog() {
  const catalog = document.getElementById('catalogo');
  if (!catalog) return;

  const headerHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--header-height'),
    10,
  ) || 72;

  const top = catalog.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}

function goToCatalog(e) {
  if (e) e.preventDefault();

  if (hasActiveFilters()) {
    clearFilters();
  }

  requestAnimationFrame(() => scrollToCatalog());
}

function updateFavoritesUI() {
  const count = favorites.length;
  favoritesCount.hidden = count === 0;
  favoritesCount.textContent = count;
}

function updateFilterUI() {
  const active = hasActiveFilters();

  filterFavorites.classList.toggle('filter-btn--active', activeFilters.favorites);
  filterFavorites.setAttribute('aria-pressed', String(activeFilters.favorites));

  filterReferenceBtn.classList.toggle('filter-btn--active', !!activeFilters.category);

  if (activeFilters.category) {
    filterReferenceLabel.textContent = CATEGORIES[activeFilters.category];
  } else {
    filterReferenceLabel.textContent = 'Referencia';
  }

  filtersActive.hidden = !active;

  if (active) {
    const chips = [];
    if (activeFilters.favorites) {
      chips.push('<span class="filter-chip"><span class="filter-chip__dot"></span>Favoritos activo</span>');
    }
    if (activeFilters.category) {
      chips.push(`<span class="filter-chip"><span class="filter-chip__dot"></span>${CATEGORIES[activeFilters.category]}</span>`);
    }
    filtersActive.innerHTML = chips.join('');
  }

  filterReferenceMenu.querySelectorAll('li').forEach((li) => {
    li.setAttribute('aria-selected', String(li.dataset.category === activeFilters.category));
  });

  updateSectionHeader();
}

function updateSectionHeader() {
  const { favorites: favFilter, category } = activeFilters;

  if (favFilter && category) {
    sectionTitle.textContent = 'Favoritos';
    sectionSubtitle.textContent = `Mostrando tus favoritos en ${CATEGORIES[category].toLowerCase()}.`;
  } else if (favFilter) {
    sectionTitle.textContent = 'Favoritos';
    sectionSubtitle.textContent = 'Tus gafas marcadas con corazón. Añade más desde el catálogo completo.';
  } else if (category) {
    sectionTitle.textContent = CATEGORIES[category];
    sectionSubtitle.textContent = `Explora nuestra selección de ${CATEGORIES[category].toLowerCase()}.`;
  } else {
    sectionTitle.textContent = 'Nuestro catálogo';
    sectionSubtitle.textContent = 'Cada modelo incluye varias vistas para que elijas con confianza.';
  }
}

function openReferenceMenu() {
  filterReferenceMenu.hidden = false;
  filterReferenceBtn.setAttribute('aria-expanded', 'true');
}

function closeReferenceMenu() {
  filterReferenceMenu.hidden = true;
  filterReferenceBtn.setAttribute('aria-expanded', 'false');
}

function initFilters() {
  filterFavorites.addEventListener('click', () => {
    activeFilters.favorites = !activeFilters.favorites;
    updateFilterUI();
    renderCatalog();
  });

  filterReferenceBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (filterReferenceMenu.hidden) {
      openReferenceMenu();
    } else {
      closeReferenceMenu();
    }
  });

  filterReferenceMenu.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', () => {
      const { category } = li.dataset;
      activeFilters.category = activeFilters.category === category ? null : category;
      closeReferenceMenu();
      updateFilterUI();
      renderCatalog();
    });
  });

  catalogEmptyReset.addEventListener('click', clearFilters);

  document.addEventListener('click', (e) => {
    if (!filterDropdown.contains(e.target)) {
      closeReferenceMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeReferenceMenu();
    }
  });

  updateFavoritesUI();
  updateFilterUI();
}

// ---- Catálogo ----
function renderCatalog() {
  const products = getFilteredProducts();
  const hasFilters = hasActiveFilters();

  if (products.length === 0) {
    catalogEl.hidden = true;
    catalogEmptyEl.hidden = false;

    if (activeFilters.favorites && favorites.length === 0) {
      catalogEmptyTitle.textContent = 'Aún no tienes favoritos';
      catalogEmptyText.textContent = 'Marca productos con el corazón para verlos aquí.';
    } else if (hasFilters) {
      catalogEmptyTitle.textContent = 'Sin resultados';
      catalogEmptyText.textContent = 'No hay productos que coincidan con los filtros seleccionados.';
    } else {
      catalogEmptyTitle.textContent = 'Catálogo vacío';
      catalogEmptyText.textContent = 'No hay productos disponibles en este momento.';
    }
    return;
  }

  catalogEl.hidden = false;
  catalogEmptyEl.hidden = true;

  catalogEl.innerHTML = products.map((product, index) => {
    const fav = isFavorite(product.id);
    const hasCarousel = product.images.length > 1;
    return `
    <article class="product-card" role="listitem" style="animation-delay: ${index * 0.08}s">
      <div class="product-card__carousel" data-carousel="${product.id}">
        <span class="product-card__category">${CATEGORIES[product.category]}</span>
        <button
          class="product-card__favorite${fav ? ' product-card__favorite--active' : ''}"
          data-favorite="${product.id}"
          type="button"
          aria-label="${fav ? 'Quitar de favoritos' : 'Añadir a favoritos'}"
          aria-pressed="${fav}"
        >
          <svg viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
          </svg>
        </button>
        <div class="product-card__track" data-track="${product.id}">
          ${product.images.map((src, i) => `
            <div class="product-card__slide">
              <img src="${asset(src)}" alt="${product.model} — ${product.color} — vista ${i + 1}" loading="lazy">
            </div>
          `).join('')}
        </div>
        ${hasCarousel ? `
        <button class="carousel-btn carousel-btn--prev" data-prev="${product.id}" type="button" aria-label="Imagen anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button class="carousel-btn carousel-btn--next" data-next="${product.id}" type="button" aria-label="Imagen siguiente">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div class="carousel-dots" data-dots="${product.id}">
          ${product.images.map((_, i) => `
            <span class="carousel-dot${i === 0 ? ' carousel-dot--active' : ''}" data-dot="${product.id}" data-index="${i}"></span>
          `).join('')}
        </div>` : ''}
      </div>
      <div class="product-card__body">
        <p class="product-card__ref">${product.ref}</p>
        <h3 class="product-card__model">${product.model}</h3>
        <p class="product-card__price">${formatPrice(product.price)}</p>
        <p class="product-card__color">
          <span class="product-card__color-swatch" style="background: ${product.colorHex}"></span>
          ${product.color}
        </p>
        <p class="product-card__desc">${product.description}</p>
        <button class="btn btn--cart" data-add="${product.id}" type="button">Añadir al carrito</button>
      </div>
    </article>
  `;
  }).join('');

  initCarousels(products);
  initAddToCartButtons();
  initFavoriteButtons();
}

function initFavoriteButtons() {
  document.querySelectorAll('[data-favorite]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(btn.dataset.favorite);
    });
  });
}

function initCarousels(products) {
  products.forEach((product) => {
    if (carouselState[product.id] === undefined) {
      carouselState[product.id] = 0;
    }
  });

  document.querySelectorAll('[data-prev]').forEach((btn) => {
    btn.addEventListener('click', () => moveCarousel(btn.dataset.prev, -1));
  });

  document.querySelectorAll('[data-next]').forEach((btn) => {
    btn.addEventListener('click', () => moveCarousel(btn.dataset.next, 1));
  });

  document.querySelectorAll('[data-dot]').forEach((dot) => {
    dot.addEventListener('click', () => goToSlide(dot.dataset.dot, parseInt(dot.dataset.index, 10)));
  });
}

function moveCarousel(productId, direction) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const total = product.images.length;
  carouselState[productId] = (carouselState[productId] + direction + total) % total;
  updateCarousel(productId);
}

function goToSlide(productId, index) {
  carouselState[productId] = index;
  updateCarousel(productId);
}

function updateCarousel(productId) {
  const index = carouselState[productId];
  const track = document.querySelector(`[data-track="${productId}"]`);
  const dots = document.querySelectorAll(`[data-dot="${productId}"]`);

  if (track) {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  dots.forEach((dot, i) => {
    dot.classList.toggle('carousel-dot--active', i === index);
  });
}

// ---- Carrito ----
function initAddToCartButtons() {
  document.querySelectorAll('[data-add]').forEach((btn) => {
    btn.addEventListener('click', () => addToCart(btn.dataset.add));
  });
}

function addToCart(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      ref: product.ref,
      model: product.model,
      color: product.color,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
  }

  saveCart();
  renderCart();
  showToast(`${product.model} añadida al carrito`);
}

function getItemPrice(item) {
  return item.price ?? PRODUCTS.find((p) => p.id === item.id)?.price ?? 0;
}

function getItemSubtotal(item) {
  return getItemPrice(item) * item.quantity;
}

function getGrandTotal() {
  return cart.reduce((sum, item) => sum + getItemSubtotal(item), 0);
}

function updateQuantity(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  const newQty = item.quantity + delta;

  if (newQty < 1) return;

  item.quantity = newQty;
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((i) => i.id !== productId);
  saveCart();
  renderCart();
}

function emptyCart() {
  cart = [];
  saveCart();
  renderCart();
  showToast('Carrito vaciado');
}

function getTotalItems() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartBadge() {
  const total = getTotalItems();
  cartBadge.textContent = total;
  cartBadge.hidden = total === 0;
}

function renderCart() {
  const total = getTotalItems();
  updateCartBadge();

  if (total > 0) {
    cartEmptyEl.hidden = true;
    cartNotesSection.hidden = false;
    cartFooter.hidden = false;
  } else {
    cartEmptyEl.hidden = false;
    cartNotesSection.hidden = true;
    cartFooter.hidden = true;
  }

  cartTotalItems.textContent = total;
  if (cartGrandTotalValue) {
    cartGrandTotalValue.textContent = formatPrice(getGrandTotal());
  }

  cartItemsEl.innerHTML = cart.map((item) => {
    const price = getItemPrice(item);
    const subtotal = getItemSubtotal(item);
    const atMinQty = item.quantity <= 1;
    return `
    <li class="cart-item">
      <img class="cart-item__img" src="${asset(item.image)}" alt="${item.model}">
      <div class="cart-item__info">
        <p class="cart-item__model">${item.model}</p>
        <p class="cart-item__meta">${item.ref} · ${item.color}</p>
        <div class="cart-item__pricing">
          <span class="cart-item__price-label">Precio unitario</span>
          <span class="cart-item__price">${formatPrice(price)}</span>
        </div>
        <div class="cart-item__actions">
          <div class="cart-item__qty-row">
            <span class="cart-item__qty-label">Cantidad</span>
            <div class="qty-control">
              <button class="qty-btn${atMinQty ? ' qty-btn--disabled' : ''}" data-qty-minus="${item.id}" type="button" aria-label="Disminuir cantidad"${atMinQty ? ' disabled' : ''}>−</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" data-qty-plus="${item.id}" type="button" aria-label="Aumentar cantidad">+</button>
            </div>
          </div>
          <button class="cart-item__delete" data-delete="${item.id}" type="button">Eliminar</button>
        </div>
        <div class="cart-item__subtotal">
          <span>Subtotal</span>
          <strong>${formatPrice(subtotal)}</strong>
        </div>
      </div>
    </li>
  `;
  }).join('');

  document.querySelectorAll('[data-qty-minus]').forEach((btn) => {
    btn.addEventListener('click', () => updateQuantity(btn.dataset.qtyMinus, -1));
  });

  document.querySelectorAll('[data-qty-plus]').forEach((btn) => {
    btn.addEventListener('click', () => updateQuantity(btn.dataset.qtyPlus, 1));
  });

  document.querySelectorAll('[data-delete]').forEach((btn) => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.delete));
  });
}

// ---- Panel del carrito ----
function openCart() {
  cartPanel.classList.add('cart-panel--open');
  cartPanel.setAttribute('aria-hidden', 'false');
  cartToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartPanel.classList.remove('cart-panel--open');
  cartPanel.setAttribute('aria-hidden', 'true');
  cartToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

cartToggle.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cartPanel.classList.contains('cart-panel--open')) {
    closeCart();
  }
});

// ---- Notas del pedido ----
orderDescription.value = loadNotes();
orderDescription.addEventListener('input', () => {
  saveNotes(orderDescription.value);
});

// ---- WhatsApp ----
function getSiteUrl() {
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') {
    return PRODUCTION_SITE_URL;
  }
  const path = window.location.pathname.replace(/[^/]*$/, '');
  return `${window.location.origin}${path}`;
}

function formatRefLabel(ref) {
  return ref.replace(/^Ref\./i, 'REF.');
}

function getProductShareUrl(productId) {
  const base = getSiteUrl().replace(/\/?$/, '/');
  return `${base}p/${productId}.html`;
}

function buildWhatsAppMessage() {
  const notes = orderDescription.value.trim();

  if (cart.length === 1) {
    const item = cart[0];
    const refLabel = formatRefLabel(item.ref);
    const shareUrl = getProductShareUrl(item.id);
    let message = `Hola, tengo interés en ${refLabel}: ${shareUrl}`;

    if (item.quantity > 1) {
      message += `\nCantidad: ${item.quantity}`;
    }

    message += `\nTotal: ${formatPrice(getGrandTotal())}`;

    if (notes) {
      message += `\n\nObservaciones: ${notes}`;
    }

    return message;
  }

  let message = 'Hola, quiero realizar el siguiente pedido:\n\n';

  cart.forEach((item) => {
    const refLabel = formatRefLabel(item.ref);
    const shareUrl = getProductShareUrl(item.id);
    message += `Hola, tengo interés en ${refLabel}: ${shareUrl}\n`;
    message += `Cantidad: ${item.quantity} · Color: ${item.color} · Subtotal: ${formatPrice(getItemSubtotal(item))}\n\n`;
  });

  message += `Total de la compra: ${formatPrice(getGrandTotal())}`;

  if (notes) {
    message += `\n\nObservaciones: ${notes}`;
  }

  return message;
}

whatsappBtn.addEventListener('click', () => {
  if (cart.length === 0) return;

  const message = encodeURIComponent(buildWhatsAppMessage());
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  cart = [];
  saveCart();
  orderDescription.value = '';
  saveNotes('');
  closeCart();

  window.location.href = url;
});

emptyCartBtn?.addEventListener('click', emptyCart);

// ---- Toast ----
let toastTimeout;

function showToast(text) {
  toastEl.textContent = text;
  toastEl.classList.add('toast--visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.remove('toast--visible');
  }, 3000);
}

// ---- Header scroll ----
window.addEventListener('scroll', () => {
  headerEl.classList.toggle('header--scrolled', window.scrollY > 10);
});

// ---- Init ----
document.getElementById('headerBrand').addEventListener('click', goToCatalog);
viewCatalogBtn.addEventListener('click', goToCatalog);

initFilters();
renderCatalog();
renderCart();

const headerLogo = document.querySelector('.header__logo-img');
if (headerLogo) headerLogo.src = asset('logo/perfectt-match.svg');
