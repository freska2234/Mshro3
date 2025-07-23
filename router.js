// =================================================================================
// ROUTER SYSTEM - Handle page navigation and URLs with Hash Routing
// =================================================================================

class Router {
  constructor() {
    this.routes = {
      '': this.renderHomePage.bind(this),
      'home': this.renderHomePage.bind(this),
      'product/:id': this.renderProductPage.bind(this),
      'favorites': this.renderFavoritesPage.bind(this),
      'orders': this.renderOrdersPage.bind(this),
      'category/:category': this.renderCategoryPage.bind(this)
    };
    this.currentRoute = '';
    this.init();
  }

  init() {
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      this.handleRoute();
    });

    // Handle initial load
    this.handleRoute();
  }

  navigate(path) {
    // Remove leading slash if present and update hash
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    window.location.hash = cleanPath || 'home';
  }

  handleRoute() {
    // Get current hash without the #
    const hash = window.location.hash.slice(1) || 'home';
    this.currentRoute = hash;
    
    // Find matching route
    const matchedRoute = this.matchRoute(hash);
    if (matchedRoute) {
      matchedRoute.handler(matchedRoute.params);
      this.updateBreadcrumb(hash, matchedRoute.params);
    } else {
      this.render404();
    }
  }

  matchRoute(path) {
    for (const route in this.routes) {
      const routePattern = route.replace(/:\w+/g, '([^/]+)');
      const regex = new RegExp(`^${routePattern}$`);
      const match = path.match(regex);
      
      if (match) {
        const paramNames = route.match(/:\w+/g) || [];
        const params = {};
        
        paramNames.forEach((param, index) => {
          const paramName = param.slice(1); // Remove ':'
          params[paramName] = match[index + 1];
        });
        
        return {
          handler: this.routes[route],
          params
        };
      }
    }
    return null;
  }

  updateBreadcrumb(path, params = {}) {
    const breadcrumbEl = document.getElementById('breadcrumb');
    let breadcrumbHTML = '<a href="#" onclick="router.navigate(\'\')">الرئيسية</a>';
    
    if (path === '' || path === 'home') {
      breadcrumbHTML = 'الرئيسية';
    } else if (path.startsWith('product/')) {
      const product = productsData.products.find(p => p.id == params.id);
      if (product) {
        breadcrumbHTML += ` <span class="separator">></span> <a href="#" onclick="router.navigate('category/${product.category}')">${product.category}</a>`;
        breadcrumbHTML += ` <span class="separator">></span> ${product.name}`;
      }
    } else if (path === 'favorites') {
      breadcrumbHTML += ' <span class="separator">></span> المفضلة';
    } else if (path === 'orders') {
      breadcrumbHTML += ' <span class="separator">></span> طلباتي الأخيرة';
    } else if (path.startsWith('category/')) {
      breadcrumbHTML += ` <span class="separator">></span> ${params.category}`;
    }
    
    breadcrumbEl.innerHTML = breadcrumbHTML;
  }

  renderHomePage() {
    document.title = 'متجري الإلكتروني - الرئيسية';
    const app = document.getElementById('app');
    app.innerHTML = `
      <section class="products-section">
        <h2 class="section-title">منتجاتنا المميزة</h2>
        <div class="filter-controls">
          <input
            type="text"
            id="searchInput"
            onkeyup="filterProducts()"
            placeholder="ابحث عن منتج..."
          />
          <select id="categoryFilter" onchange="filterProducts()">
            <option value="all">كل الفئات</option>
            <option value="ملابس">ملابس</option>
            <option value="أحذية">أحذية</option>
            <option value="إلكترونيات">إلكترونيات</option>
            <option value="إكسسوارات">إكسسوارات</option>
          </select>
          <select id="priceFilter" onchange="filterProducts()">
            <option value="all">كل الأسعار</option>
            <option value="under200">أقل من 200 جنيه</option>
            <option value="200-500">200 - 500 جنيه</option>
            <option value="over500">أكثر من 500 جنيه</option>
          </select>
        </div>
        <div class="products-grid" id="productsGrid"></div>
      </section>
    `;
    this.loadProducts();
  }

  renderProductPage(params) {
    const productId = parseInt(params.id);
    const product = productsData.products.find(p => p.id === productId);
    
    if (!product) {
      this.render404();
      return;
    }

    document.title = `${product.name} - متجري الإلكتروني`;
    const app = document.getElementById('app');
    
    const colorsHtml = this.generateColorsHTML(product);
    const sizesHtml = this.generateSizesHTML(product);
    const isFavorite = window.favorites ? window.favorites.includes(product.id) : false;
    
    app.innerHTML = `
      <div class="product-page">
        <div class="product-detail">
          <div class="product-gallery">
            <img src="${product.mainImage}" alt="${product.name}" class="main-image" id="mainImage">
            <div class="image-thumbnails">
              ${product.images.map((img, index) => `
                <img src="${img}" alt="Thumbnail ${index + 1}" 
                     class="thumbnail ${index === 0 ? 'active' : ''}" 
                     onclick="changeMainImage('${img}', this)">
              `).join('')}
            </div>
          </div>
          
          <div class="product-details">
            <h1>${product.name}</h1>
            <div class="product-rating">
              ${this.generateStars(product.rating)}
              <span class="rating-text">(${product.reviews} مراجعة)</span>
            </div>
            <p class="product-description">${product.description}</p>
            
            <div class="price-section">
              <span class="current-price">${product.currentPrice} جنيه</span>
              ${product.originalPrice > product.currentPrice ? 
                `<span class="original-price">${product.originalPrice} جنيه</span>` : ''}
              ${product.discount > 0 ? 
                `<span class="discount-badge">${product.discount}% خصم</span>` : ''}
            </div>

            ${colorsHtml}
            ${sizesHtml}

            <div class="quantity-control">
              <button onclick="changeDetailQuantity(-1)">-</button>
              <span id="detailQuantity">1</span>
              <button onclick="changeDetailQuantity(1)">+</button>
            </div>

            <div class="product-actions-detail">
              <button class="btn btn-primary btn-large" onclick="addToCartFromProductPage(${product.id})">
                <i class="fas fa-cart-plus"></i> إضافة للسلة
              </button>
              <button class="btn btn-secondary btn-large favorite-btn ${isFavorite ? 'active' : ''}" 
                      onclick="toggleFavorite(event, ${product.id}, true)">
                <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i> 
                ${isFavorite ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}
              </button>
            </div>

            <div class="product-tabs">
              <div class="tab-buttons">
                <button class="tab-button active" onclick="openTab(event, 'details')">الوصف التفصيلي</button>
                <button class="tab-button" onclick="openTab(event, 'specs')">المواصفات</button>
                <button class="tab-button" onclick="openTab(event, 'warranty')">الضمان والاسترجاع</button>
              </div>
              <div id="details" class="tab-content">
                <p>${product.details}</p>
              </div>
              <div id="specs" class="tab-content hidden">
                <ul>
                  ${product.specifications.map(spec => 
                    `<li><i class="fas fa-check-circle"></i> ${spec}</li>`
                  ).join('')}
                </ul>
              </div>
              <div id="warranty" class="tab-content hidden">
                <p><strong>الضمان:</strong> ${product.warranty}</p>
                <p><strong>سياسة الاسترجاع:</strong> ${product.returnPolicy}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="related-products">
          <h3>منتجات مشابهة</h3>
          <div class="products-grid" id="relatedProductsGrid"></div>
        </div>
      </div>
    `;
    
    this.initializeProductOptions(product);
    this.loadRelatedProducts(product);
  }

  renderFavoritesPage() {
    document.title = 'المفضلة - متجري الإلكتروني';
    const app = document.getElementById('app');
    app.innerHTML = `
      <section class="products-section">
        <h2 class="section-title">منتجاتك المفضلة</h2>
        <div class="products-grid" id="favoritesGrid"></div>
        <p id="noFavoritesMessage" class="hidden" style="
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          margin-top: 50px;
        ">
          لا توجد منتجات في قائمة المفضلة بعد.
        </p>
      </section>
    `;
    this.loadFavoriteProducts();
  }

  renderOrdersPage() {
    document.title = 'طلباتي الأخيرة - متجري الإلكتروني';
    const app = document.getElementById('app');
    app.innerHTML = `
      <section class="products-section">
        <h2 class="section-title">طلباتي الأخيرة</h2>
        <div id="recentOrdersList" class="recent-orders-list"></div>
        <p id="noRecentOrdersMessage" class="hidden" style="
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
          margin-top: 50px;
        ">
          لم تقم بأي طلبات بعد.
        </p>
      </section>
    `;
    this.loadRecentOrders();
  }

  renderCategoryPage(params) {
    const category = params.category;
    document.title = `${category} - متجري الإلكتروني`;
    const app = document.getElementById('app');
    app.innerHTML = `
      <section class="products-section">
        <h2 class="section-title">منتجات ${category}</h2>
        <div class="products-grid" id="categoryGrid"></div>
      </section>
    `;
    this.loadCategoryProducts(category);
  }

  render404() {
    document.title = 'الصفحة غير موجودة - متجري الإلكتروني';
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="error-page">
        <div style="text-align: center; padding: 60px 20px;">
          <i class="fas fa-exclamation-triangle" style="font-size: 80px; color: #ff4757; margin-bottom: 30px;"></i>
          <h2 style="font-size: 48px; color: #00ddff; margin-bottom: 20px;">404</h2>
          <h3 style="font-size: 24px; margin-bottom: 20px;">الصفحة غير موجودة</h3>
          <p style="color: rgba(255, 255, 255, 0.7); margin-bottom: 30px;">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          </p>
          <button class="btn btn-primary btn-large" onclick="router.navigate('')">
            <i class="fas fa-home"></i> العودة للرئيسية
          </button>
        </div>
      </div>
    `;
  }

  // Helper methods
  generateStars(rating, sizeClass = "") {
    let starsHtml = `<div class="stars ${sizeClass}">`;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
      starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += '<i class="far fa-star"></i>';
    }
    starsHtml += "</div>";
    return starsHtml;
  }

  generateColorsHTML(product) {
    if (!product.colors || product.colors.length === 0) return '';
    
    return `
      <div class="option-group">
        <label class="option-label">الألوان المتاحة:</label>
        <div class="color-options">
          ${product.colors.map(color => `
            <div class="color-box" 
                 style="background-color: ${color.code === "#ffffff" ? "#eee; border: 1px solid #ccc;" : color.code};"
                 title="${color.name}"
                 data-color="${color.name}"
                 onclick="selectOption('color', '${color.name}')"></div>
          `).join('')}
        </div>
      </div>
    `;
  }

  generateSizesHTML(product) {
    if (!product.sizes || product.sizes.length === 0) return '';
    
    return `
      <div class="option-group">
        <label class="option-label">المقاسات المتاحة:</label>
        <div class="size-options">
          ${product.sizes.map(size => `
            <button class="size-btn" data-size="${size}" onclick="selectOption('size', '${size}')">${size}</button>
          `).join('')}
        </div>
      </div>
    `;
  }

  initializeProductOptions(product) {
    if (product.colors && product.colors.length > 0) {
      selectOption('color', product.colors[0].name);
    }
    if (product.sizes && product.sizes.length > 0) {
      selectOption('size', product.sizes[0]);
    }
  }

  loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    productsData.products.forEach((product, index) => {
      setTimeout(() => {
        const productCardHTML = this.createProductCardHTML(product);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = productCardHTML;
        tempDiv.firstElementChild.style.animation = 'fadeIn 0.5s ease forwards';
        productsGrid.appendChild(tempDiv.firstElementChild);
      }, index * 100);
    });
  }

  loadFavoriteProducts() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    const noFavoritesMessage = document.getElementById('noFavoritesMessage');
    
    if (!favoritesGrid) return;
    
    favoritesGrid.innerHTML = '';
    
    const currentFavorites = window.favorites || [];
    
    if (currentFavorites.length === 0) {
      noFavoritesMessage.classList.remove('hidden');
      return;
    } else {
      noFavoritesMessage.classList.add('hidden');
    }

    const favoriteProducts = productsData.products.filter(product => 
      currentFavorites.includes(product.id)
    );

    favoriteProducts.forEach((product, index) => {
      setTimeout(() => {
        const productCardHTML = this.createProductCardHTML(product);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = productCardHTML;
        tempDiv.firstElementChild.style.animation = 'fadeIn 0.5s ease forwards';
        favoritesGrid.appendChild(tempDiv.firstElementChild);
      }, index * 100);
    });
  }

  loadCategoryProducts(category) {
    const categoryGrid = document.getElementById('categoryGrid');
    if (!categoryGrid) return;
    
    const categoryProducts = productsData.products.filter(product => 
      product.category === category
    );
    
    categoryGrid.innerHTML = '';
    
    categoryProducts.forEach((product, index) => {
      setTimeout(() => {
        const productCardHTML = this.createProductCardHTML(product);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = productCardHTML;
        tempDiv.firstElementChild.style.animation = 'fadeIn 0.5s ease forwards';
        categoryGrid.appendChild(tempDiv.firstElementChild);
      }, index * 100);
    });
  }

  loadRelatedProducts(currentProduct) {
    const relatedGrid = document.getElementById('relatedProductsGrid');
    if (!relatedGrid) return;
    
    const relatedProducts = productsData.products
      .filter(product => product.category === currentProduct.category && product.id !== currentProduct.id)
      .slice(0, 4);
    
    relatedGrid.innerHTML = '';
    
    relatedProducts.forEach((product, index) => {
      setTimeout(() => {
        const productCardHTML = this.createProductCardHTML(product);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = productCardHTML;
        tempDiv.firstElementChild.style.animation = 'fadeIn 0.5s ease forwards';
        relatedGrid.appendChild(tempDiv.firstElementChild);
      }, index * 100);
    });
  }

  loadRecentOrders() {
    const ordersList = document.getElementById('recentOrdersList');
    const noOrdersMessage = document.getElementById('noRecentOrdersMessage');
    const orderHistory = StorageManager.getOrderHistory();
    
    if (!ordersList) return;
    
    ordersList.innerHTML = '';
    
    if (orderHistory.length === 0) {
      noOrdersMessage.classList.remove('hidden');
      return;
    } else {
      noOrdersMessage.classList.add('hidden');
    }

    orderHistory.forEach(order => {
      const orderCard = document.createElement('div');
      orderCard.className = 'order-card';
      orderCard.innerHTML = `
        <h3>${order.orderId}</h3>
        <p><strong>التاريخ:</strong> ${order.date}</p>
        <p><strong>عدد المنتجات:</strong> ${order.items.length}</p>
        <p><strong>المبلغ الكلي:</strong> ${order.total}</p>
        <p class="order-status ${this.getStatusClass(order.status)}">
          <strong>الحالة:</strong> ${order.status}
        </p>
        <button class="btn btn-secondary btn-small" onclick="showOrderDetails('${order.orderId}')">
          <i class="fas fa-eye"></i> عرض التفاصيل
        </button>
      `;
      ordersList.appendChild(orderCard);
    });
  }

  getStatusClass(status) {
    switch (status) {
      case 'قيد المراجعة': return 'pending';
      case 'قيد التجهيز': return 'processing';
      case 'تم الشحن': return 'shipped';
      case 'تم التسليم': return 'delivered';
      case 'ملغى': return 'cancelled';
      default: return '';
    }
  }

  createProductCardHTML(product) {
    const isFavorite = window.favorites ? window.favorites.includes(product.id) : false;
    const favoriteIcon = isFavorite ? "fas fa-heart" : "far fa-heart";
    const discountBadge = product.discount > 0 ? 
      `<div class="product-badge">${product.badge}</div>` : "";

    return `
      <div class="product-card">
          ${discountBadge}
          <div class="product-overlay">
              <button class="overlay-btn favorite-btn ${isFavorite ? "active" : ""}" 
                      onclick="toggleFavorite(event, ${product.id})" 
                      title="${isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}">
                  <i class="${favoriteIcon}"></i>
              </button>
              <button class="overlay-btn" onclick="router.navigate('product/${product.id}')" title="عرض سريع">
                  <i class="fas fa-eye"></i>
              </button>
          </div>
          <div class="product-image" onclick="router.navigate('product/${product.id}')">
              <img src="${product.mainImage}" alt="${product.name}" loading="lazy">
          </div>
          <div class="product-info">
              <div class="product-rating-mini">
                  ${this.generateStars(product.rating, "mini")}
                  <span class="rating-count">(${product.reviews})</span>
              </div>
              <h3 class="product-title" onclick="router.navigate('product/${product.id}')">${product.name}</h3>
              <p class="product-description">${product.description}</p>
              <div class="product-price">
                  <span class="current-price">${product.currentPrice} جنيه</span>
                  ${product.originalPrice > product.currentPrice ? 
                    `<span class="original-price">${product.originalPrice} جنيه</span>` : ""}
              </div>
              <div class="product-actions">
                  <button class="btn btn-primary" onclick="router.navigate('product/${product.id}')">
                      <i class="fas fa-info-circle"></i> التفاصيل
                  </button>
                  <button class="btn btn-secondary" onclick="quickAddToCart(${product.id})">
                      <i class="fas fa-bolt"></i> شراء الآن
                  </button>
              </div>
          </div>
      </div>
    `;
  }
}

// Initialize router when DOM is loaded
let router;

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    router = new Router();
  }, 100);
});
