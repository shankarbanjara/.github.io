const products = [
  {
    id: 'uji-gyokuro',
    name: 'Uji Gyokuro Reserve',
    description: 'Hand-picked tea leaves shade-grown in Kyoto, perfect for ceremonial brewing.',
    price: 3200,
    category: 'tea',
    badge: 'Best Seller',
    tags: ['matcha', 'ceremony', 'kyoto']
  },
  {
    id: 'sakura-mochi',
    name: 'Sakura Mochi Trio',
    description: 'Seasonal mochi wrapped in pickled cherry leaves with Hokkaido azuki.',
    price: 1800,
    category: 'snacks',
    badge: 'Limited',
    tags: ['spring', 'wagashi', 'festival']
  },
  {
    id: 'edo-shoyu',
    name: 'Edo Barrel-Aged Shoyu',
    description: 'Two-year aged soy sauce crafted in cedar barrels from Chiba.',
    price: 2100,
    category: 'condiments',
    tags: ['soy sauce', 'umami']
  },
  {
    id: 'senbei-crisps',
    name: 'Yuzu Sesame Senbei',
    description: 'Crispy rice crackers dusted with yuzu zest and sesame seeds.',
    price: 950,
    category: 'snacks',
    tags: ['senbei', 'yuzu', 'gift']
  },
  {
    id: 'ramen-umami',
    name: 'Tokyo Night Market Ramen Kit',
    description: 'Shoyu broth concentrate, handmade noodles, and sansho chili oil.',
    price: 2450,
    category: 'seasonal',
    badge: 'Chef Series',
    tags: ['ramen', 'noodles']
  },
  {
    id: 'matcha-financier',
    name: 'Matcha Financier Gift Box',
    description: 'Buttery cakes infused with Uji matcha and roasted almond powder.',
    price: 2200,
    category: 'snacks',
    tags: ['gift', 'tea time']
  },
  {
    id: 'kombu-dashi',
    name: 'Hokkaido Kombu Dashi Pack',
    description: 'Umami-rich dashi sachets sourced from Rebun Island kelp.',
    price: 1600,
    category: 'condiments',
    tags: ['dashi', 'soup', 'stock']
  },
  {
    id: 'hojicha-latte',
    name: 'Hojicha Latte Concentrate',
    description: 'Roasted green tea syrup for café-style lattes at home.',
    price: 1350,
    category: 'tea',
    tags: ['latte', 'roasted tea']
  },
  {
    id: 'wagyu-curry',
    name: 'Kobe Wagyu Curry Roux',
    description: 'Rich demi-glace curry base with tender wagyu morsels.',
    price: 2800,
    category: 'seasonal',
    tags: ['curry', 'luxury']
  },
  {
    id: 'sake-flight',
    name: 'Junmai Daiginjo Sake Flight',
    description: 'Miniature trio curated by our in-house sake sommelier.',
    price: 5400,
    category: 'seasonal',
    badge: 'Concierge Pick',
    tags: ['sake', 'gift', 'premium']
  },
  {
    id: 'miso-trio',
    name: 'Nagano Miso Trio',
    description: 'White, red, and yuzu miso perfect for soups and marinades.',
    price: 1900,
    category: 'condiments',
    tags: ['fermented', 'miso']
  },
  {
    id: 'genmaicha',
    name: 'Genmaicha Comfort Blend',
    description: 'Toasted rice and sencha blend ideal for cozy evenings.',
    price: 1500,
    category: 'tea',
    tags: ['genmaicha', 'daily tea']
  }
];

const productGrid = document.getElementById('product-grid');
const categoryTabs = document.getElementById('category-tabs');
const searchInput = document.getElementById('search-input');
const cartIndicator = document.getElementById('cart-indicator');
const cartCount = document.getElementById('cart-count');
const cartPanel = document.getElementById('cart-panel');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const membershipForm = document.getElementById('membership-form');
const membershipFeedback = document.getElementById('membership-feedback');
const newsletterForm = document.getElementById('newsletter-form');
const newsletterFeedback = document.getElementById('newsletter-feedback');

let currentCategory = 'all';
let searchTerm = '';
const cart = new Map();

const formatYen = (amount) => `¥${amount.toLocaleString('ja-JP')}`;

function renderProducts() {
  if (!productGrid) return;

  productGrid.innerHTML = '';

  const filtered = products.filter((product) => {
    const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
    const query = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'empty-state';
    empty.innerHTML = `
      <div class="product-card">
        <h3>No items found</h3>
        <p>Try searching for matcha, miso, or explore another category.</p>
      </div>
    `;
    productGrid.appendChild(empty);
    return;
  }

  filtered.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      ${product.badge ? `<span class="badge">${product.badge}</span>` : ''}
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="card-bottom">
        <span>${formatYen(product.price)}</span>
        <button type="button" data-id="${product.id}">Add</button>
      </div>
    `;

    const addButton = card.querySelector('button');
    addButton.addEventListener('click', () => addToCart(product.id));

    productGrid.appendChild(card);
  });
}

function setCategory(category) {
  currentCategory = category;
  Array.from(categoryTabs.querySelectorAll('.tab')).forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.category === category);
  });
  renderProducts();
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existing = cart.get(productId) || { ...product, quantity: 0 };
  existing.quantity += 1;
  cart.set(productId, existing);

  updateCartUI();
}

function updateCartUI() {
  const items = Array.from(cart.values());
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = itemCount;

  cartItemsList.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.name} × ${item.quantity}</span>
      <span>${formatYen(item.price * item.quantity)}</span>
    `;
    cartItemsList.appendChild(li);
  });

  cartTotal.textContent = formatYen(total);

  if (itemCount > 0) {
    cartPanel.classList.add('visible');
  } else {
    cartPanel.classList.remove('visible');
  }
}

function handleMembershipSubmit(event) {
  event.preventDefault();
  const input = membershipForm?.elements?.['member-email'] || membershipForm.querySelector('input[type="email"]');
  const email = input?.value.trim();
  if (!email) {
    membershipFeedback.textContent = 'Please enter your email address to receive updates.';
    membershipFeedback.style.color = '#ffb703';
    return;
  }

  membershipFeedback.textContent = 'ありがとうございます! Our concierge will reach out with invitations soon.';
  membershipFeedback.style.color = '#f9c74f';
  membershipForm.reset();
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  const input = newsletterForm?.elements?.['newsletter-email'] || newsletterForm.querySelector('input[type="email"]');
  const email = input?.value.trim();
  if (!email) {
    newsletterFeedback.textContent = 'Please share a valid email so we can send your stories.';
    newsletterFeedback.style.color = '#ffb703';
    return;
  }

  newsletterFeedback.textContent = 'Subscribed! Look forward to artisan stories every Saturday JST.';
  newsletterFeedback.style.color = '#f9c74f';
  newsletterForm.reset();
}

function initEventListeners() {
  if (categoryTabs) {
    categoryTabs.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-category]');
      if (!button) return;
      setCategory(button.dataset.category);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      searchTerm = event.target.value;
      renderProducts();
    });
  }

  if (cartIndicator) {
    cartIndicator.addEventListener('click', () => {
      cartPanel.classList.toggle('visible');
    });
  }

  if (membershipForm && membershipFeedback) {
    membershipForm.addEventListener('submit', handleMembershipSubmit);
  }

  if (newsletterForm && newsletterFeedback) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
  }
}

function init() {
  renderProducts();
  initEventListeners();
}

document.addEventListener('DOMContentLoaded', init);
