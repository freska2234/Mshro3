// =================================================================================
// E-COMMERCE SCRIPT
// =================================================================================

// ---------------------------------------------------------------------------------
// 1. DATA
// ---------------------------------------------------------------------------------

const productsData = {
  products: [
    {
      id: 1,
      name: "قميص قطني فاخر",
      description: "قميص قطني عالي الجودة مريح للاستخدام اليومي.",
      originalPrice: 299,
      currentPrice: 199,
      discount: 33,
      badge: "خصم 33%",
      rating: 4.8,
      reviews: 156,
      mainImage:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
      ],
      colors: [
        { name: "أزرق", code: "#2196F3" },
        { name: "أسود", code: "#333333" },
        { name: "أبيض", code: "#ffffff" },
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      details:
        "قميص قطني 100% عالي الجودة، مصنوع من أجود أنواع القطن المصري. يتميز بالنعومة والراحة والمتانة.",
      specifications: [
        "الخامة: قطن 100%",
        "المنشأ: مصر",
        "العناية: غسيل آلة عادي",
      ],
      warranty: "ضمان الجودة لمدة 30 يوم",
      returnPolicy: "إمكانية الاسترداد خلال 14 يوم من الاستلام",
    },
    {
      id: 2,
      name: "حذاء رياضي احترافي",
      description: "حذاء رياضي عالي الجودة للجري والأنشطة الرياضية.",
      originalPrice: 799,
      currentPrice: 599,
      discount: 25,
      badge: "الأكثر مبيعاً",
      rating: 4.9,
      reviews: 243,
      mainImage:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
      ],
      colors: [
        { name: "أسود", code: "#333333" },
        { name: "أبيض", code: "#ffffff" },
        { name: "أحمر", code: "#f44336" },
      ],
      sizes: ["39", "40", "41", "42", "43", "44", "45"],
      details:
        "حذاء رياضي متطور مصمم للرياضيين المحترفين. يوفر راحة استثنائية ودعم ممتاز للقدم.",
      specifications: [
        "الخامة العلوية: شبك تقني متنفس",
        "النعل: مطاط عالي الجودة",
        "التبطين: فوم الذاكرة للراحة",
      ],
      warranty: "ضمان الجودة لمدة 6 أشهر",
      returnPolicy: "إمكانية الاسترداد خلال 30 يوم من الاستلام",
    },
    {
      id: 3,
      name: "ساعة ذكية متطورة",
      description: "ساعة ذكية بتقنيات حديثة ومقاومة للماء.",
      originalPrice: 1299,
      currentPrice: 999,
      discount: 23,
      badge: "جديد",
      rating: 4.7,
      reviews: 89,
      mainImage:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
      ],
      colors: [
        { name: "أسود", code: "#333333" },
        { name: "فضي", code: "#c0c0c0" },
        { name: "ذهبي", code: "#ffd700" },
      ],
      sizes: ["38mm", "42mm"],
      details:
        "ساعة ذكية متطورة تجمع بين الأناقة والتكنولوجيا. تتضمن مراقب معدل ضربات القلب، GPS، ومقاومة للماء.",
      specifications: [
        "الشاشة: AMOLED 1.4 بوصة",
        "البطارية: تدوم حتى 7 أيام",
        "الاتصال: Bluetooth 5.0, WiFi, NFC",
      ],
      warranty: "ضمان دولي لمدة سنتين",
      returnPolicy: "إمكانية الاسترداد خلال 15 يوم من الاستلام",
    },
    {
      id: 4,
      name: "حقيبة جلدية فاخرة",
      description: "حقيبة جلدية أنيقة للأعمال والسفر.",
      originalPrice: 899,
      currentPrice: 649,
      discount: 28,
      badge: "عرض محدود",
      rating: 4.6,
      reviews: 127,
      mainImage:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
      ],
      colors: [
        { name: "بني", code: "#8B4513" },
        { name: "أسود", code: "#333333" },
      ],
      sizes: ["متوسط", "كبير"],
      details:
        "حقيبة جلدية فاخرة مصنوعة من الجلد الطبيعي. تصميم أنيق وعملي مع مقصورات متعددة.",
      specifications: [
        "الخامة: جلد طبيعي 100%",
        "الأبعاد: 40×30×15 سم",
        "الإقفال: سحاب معدني",
      ],
      warranty: "ضمان الصناعة لمدة سنة واحدة",
      returnPolicy: "إمكانية الاسترداد خلال 21 يوم من الاستلام",
    },
    {
      id: 5,
      name: "سماعات لاسلكية",
      description: "سماعات بلوتوث عالية الجودة مع إلغاء الضوضاء.",
      originalPrice: 599,
      currentPrice: 449,
      discount: 25,
      badge: "مميز",
      rating: 4.8,
      reviews: 312,
      mainImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
      ],
      colors: [
        { name: "أسود", code: "#333333" },
        { name: "أبيض", code: "#ffffff" },
        { name: "أزرق", code: "#2196F3" },
      ],
      sizes: ["مقاس واحد"],
      details:
        "سماعات لاسلكية متطورة مع تقنية إلغاء الضوضاء النشط وجودة صوت استثنائية.",
      specifications: [
        "التقنية: Bluetooth 5.2",
        "البطارية: 30 ساعة تشغيل",
        "المقاومة: IPX4 ضد الماء",
      ],
      warranty: "ضمان دولي لمدة سنة واحدة",
      returnPolicy: "إمكانية الاسترداد خلال 14 يوم من الاستلام",
    },
    {
      id: 6,
      name: "نظارة شمسية عصرية",
      description: "نظارة شمسية أنيقة بحماية كاملة من الأشعة.",
      originalPrice: 399,
      currentPrice: 299,
      discount: 25,
      badge: "ترند",
      rating: 4.5,
      reviews: 198,
      mainImage:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=400&fit=crop",
      ],
      colors: [
        { name: "أسود", code: "#333333" },
        { name: "ذهبي", code: "#ffd700" },
      ],
      sizes: ["مقاس واحد"],
      details:
        "نظارة شمسية عصرية بتصميم أنيق وحماية فائقة من الأشعة فوق البنفسجية.",
      specifications: [
        "الحماية: UV400",
        "الإطار: معدن خفيف الوزن",
        "العدسات: بولاريزد",
      ],
      warranty: "ضمان الصناعة لمدة 6 أشهر",
      returnPolicy: "إمكانية الاسترداد خلال 10 أيام من الاستلام",
    },
  ],
};
// إعدادات بوت التليجرام
const TELEGRAM_CONFIG = {
  BOT_TOKEN: '7254345779:AAF2IY-f42Vj4Zgai5dlCK7yxpWhz4_S7Ac',
  CHAT_ID: '5895491379' // هتحط الـ chat ID بتاعك هنا
};
// ---------------------------------------------------------------------------------
// 2. STATE MANAGEMENT
// ---------------------------------------------------------------------------------

let cart = [];
let favorites = [];
let currentProduct = null;
let currentPage = "home";

const StorageManager = {
  saveCart: (cartData) => {
    try {
      localStorage.setItem("ecom_cart", JSON.stringify(cartData));
    } catch (e) {
      console.error("Failed to save cart:", e);
    }
  },
  loadCart: () => {
    try {
      const cartData = localStorage.getItem("ecom_cart");
      return cartData ? JSON.parse(cartData) : [];
    } catch (e) {
      console.error("Failed to load cart:", e);
      return [];
    }
  },
  saveFavorites: (favoritesData) => {
    try {
      localStorage.setItem("ecom_favorites", JSON.stringify(favoritesData));
    } catch (e) {
      console.error("Failed to save favorites:", e);
    }
  },
  loadFavorites: () => {
    try {
      const favoritesData = localStorage.getItem("ecom_favorites");
      return favoritesData ? JSON.parse(favoritesData) : [];
    } catch (e) {
      console.error("Failed to load favorites:", e);
      return [];
    }
  },
  saveOrderHistory: (order) => {
    try {
      let history = JSON.parse(localStorage.getItem("ecom_orderHistory")) || [];
      history.unshift(order);
      if (history.length > 10) history = history.slice(0, 10);
      localStorage.setItem("ecom_orderHistory", JSON.stringify(history));
    } catch (e) {
      console.error("Failed to save order history:", e);
    }
  },
  getOrderHistory: () => {
    try {
      return JSON.parse(localStorage.getItem("ecom_orderHistory")) || [];
    } catch (e) {
      return [];
    }
  },
};

// ---------------------------------------------------------------------------------
// 3. UI RENDERING & UPDATES
// ---------------------------------------------------------------------------------

/**
 * Creates HTML for a single product card.
 * @param {object} product - The product data.
 * @returns {string} - The HTML string for the product card.
 */
function createProductCardHTML(product) {
  const isFavorite = favorites.includes(product.id);
  const favoriteIcon = isFavorite ? "fas fa-heart" : "far fa-heart";
  const discountBadge =
    product.discount > 0
      ? `<div class="product-badge">${product.badge}</div>`
      : "";

  return `
    <div class="product-card">
        ${discountBadge}
        <div class="product-overlay">
            <button class="overlay-btn favorite-btn ${
              isFavorite ? "active" : ""
            }" onclick="toggleFavorite(event, ${product.id})" 
                    title="${
                      isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"
                    }">
                <i class="${favoriteIcon}"></i>
            </button>
            <button class="overlay-btn" onclick="showProductDetail(${
              product.id
            })" title="عرض سريع">
                <i class="fas fa-eye"></i>
            </button>
        </div>
        <div class="product-image">
            <img src="${product.mainImage}" alt="${
    product.name
  }" loading="lazy">
        </div>
        <div class="product-info">
            <div class="product-rating-mini">
                ${generateStars(product.rating, "mini")}
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <span class="current-price">${product.currentPrice} جنيه</span>
                ${
                  product.originalPrice > product.currentPrice
                    ? `<span class="original-price">${product.originalPrice} جنيه</span>`
                    : ""
                }
            </div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="showProductDetail(${
                  product.id
                })">
                    <i class="fas fa-info-circle"></i> التفاصيل
                </button>
                <button class="btn btn-secondary" onclick="quickAddToCart(${
                  product.id
                })">
                    <i class="fas fa-bolt"></i> شراء الآن
                </button>
            </div>
        </div>
    </div>
  `;
}

/**
 * Loads all products into the main grid with a fade-in animation.
 */
function loadProducts() {
  const productsGrid = document.getElementById("productsGrid");
  if (!productsGrid) return;
  productsGrid.innerHTML = "";
  productsData.products.forEach((product, index) => {
    setTimeout(() => {
      const productCardHTML = createProductCardHTML(product);
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = productCardHTML;
      tempDiv.firstElementChild.style.animation = "fadeIn 0.5s ease forwards";
      productsGrid.appendChild(tempDiv.firstElementChild);
    }, index * 100);
  });
}

/**
 * Updates the cart count bubble in the header.
 */
function updateCartCount() {
  const cartCountEl = document.getElementById("cartCount");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountEl.textContent = totalItems;
  cartCountEl.style.display = totalItems > 0 ? "flex" : "none";
  if (totalItems > 0) {
    cartCountEl.style.animation = "bounce 0.6s ease-in-out";
    setTimeout(() => (cartCountEl.style.animation = ""), 600);
  }
}

/**
 * Renders the items in the cart sidebar.
 */
function updateCartUI() {
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `
      <div style="text-align: center; padding: 40px; color: rgba(255, 255, 255, 0.6);">
          <i class="fas fa-shopping-cart" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i>
          <p>سلة التسوق فارغة.</p>
          <button class="btn btn-primary" onclick="toggleCart()" style="margin-top: 15px;">
              ابدأ التسوق الآن
          </button>
      </div>`;
    cartTotalEl.textContent = "0 جنيه";
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = "0.5";
    return;
  }

  let total = 0;
  cartItemsEl.innerHTML = "";
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const itemHTML = `
      <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-details">
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-options">
                  ${item.color ? `اللون: ${item.color}` : ""}
                  ${item.color && item.size ? " &bull; " : ""}
                  ${item.size ? `المقاس: ${item.size}` : ""}
              </div>
              <div class="cart-item-price">${
                item.price * item.quantity
              } جنيه</div>
              <div class="cart-item-controls">
                  <button class="btn btn-secondary" onclick="updateCartItemQuantity(${index}, -1)">-</button>
                  <span style="padding: 0 10px;">${item.quantity}</span>
                  <button class="btn btn-secondary" onclick="updateCartItemQuantity(${index}, 1)">+</button>
                  <button class="btn btn-secondary" onclick="removeFromCart(${index})" title="إزالة" style="background: #ff4757; margin-right: auto;">
                      <i class="fas fa-trash"></i>
                  </button>
              </div>
          </div>
      </div>`;
    cartItemsEl.innerHTML += itemHTML;
  });

  cartTotalEl.textContent = `${total} جنيه`;
  checkoutBtn.disabled = false;
  checkoutBtn.style.opacity = "1";
}

/**
 * Displays a notification message.
 * @param {string} message - The message to display.
 * @param {string} [type='info'] - The type of notification ('success', 'error', 'info').
 */
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  const icons = {
    success: "fa-check-circle",
    error: "fa-exclamation-circle",
    info: "fa-info-circle",
  };
  const colors = {
    success: "#00ff88",
    error: "#ff4757",
    info: "#00ddff",
  };
  notification.style.cssText = `
      position: fixed; top: 20px; right: 20px; padding: 15px 20px;
      background: ${colors[type]}; color: ${
    type === "success" ? "#000" : "#fff"
  };
      border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 9999; font-weight: 600; transform: translateX(120%);
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  `;
  notification.innerHTML = `<i class="fas ${icons[type]}"></i> ${message}`;
  document.body.appendChild(notification);
  setTimeout(() => (notification.style.transform = "translateX(0)"), 100);
  setTimeout(() => {
    notification.style.transform = "translateX(120%)";
    setTimeout(() => document.body.removeChild(notification), 500);
  }, 3000);
}
// إرسال الطلب للتليجرام
async function sendToTelegram(orderData) {
  const message = `
🛍️ *طلب جديد - #${orderData.orderNumber}*

👤 *العميل:* ${orderData.fullName}
📱 *الهاتف:* ${orderData.phone}
🏠 *المحافظة:* ${orderData.governorate}
📍 *العنوان:* ${orderData.address}

📦 *المنتجات:*
${orderData.orderItems.map(item => 
  `• ${item.name} - ${item.quantity} قطعة - ${item.price * item.quantity} ج`
).join('\n')}

💰 *الإجمالي:* ${orderData.total} جنيه
🚚 *الشحن:* ${orderData.deliveryFee === 0 ? 'مجاناً' : orderData.deliveryFee + ' ج'}
💵 *المبلغ النهائي:* ${orderData.finalTotal} جنيه

📅 *تاريخ الطلب:* ${new Date(orderData.orderDate).toLocaleString('ar-EG')}
`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });
    return response.ok;
  } catch (error) {
    console.error('خطأ في إرسال الرسالة:', error);
    return false;
  }
}
/**
 * Generates star rating HTML.
 */
function generateStars(rating, size = "normal") {
  let stars = "";
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const sizeClass = size === "mini" ? "rating-mini" : "";

  for (let i = 0; i < fullStars; i++) {
    stars += `<i class="fas fa-star ${sizeClass}"></i>`;
  }
  if (hasHalfStar) {
    stars += `<i class="fas fa-star-half-alt ${sizeClass}"></i>`;
  }
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars += `<i class="far fa-star ${sizeClass}"></i>`;
  }
  return stars;
}

// ---------------------------------------------------------------------------------
// 4. CORE FUNCTIONALITY
// ---------------------------------------------------------------------------------

/**
 * Adds an item to the cart.
 * @param {object} item - The item to add.
 */
function addToCart(item) {
  const existingItemIndex = cart.findIndex(
    (cartItem) =>
      cartItem.productId === item.productId &&
      cartItem.color === item.color &&
      cartItem.size === item.size
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }

  StorageManager.saveCart(cart);
  updateCartUI();
  updateCartCount();
}

/**
 * Quick adds a product with default options to the cart.
 * @param {number} productId - The ID of the product to add.
 */
function quickAddToCart(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  if (!product) return;

  const cartItem = {
    id: Date.now(),
    productId: product.id,
    name: product.name,
    price: product.currentPrice,
    image: product.mainImage,
    color: product.colors[0]?.name || null,
    size: product.sizes[0] || null,
    quantity: 1,
  };

  addToCart(cartItem);
  showNotification(`تمت إضافة "${product.name}" إلى السلة!`, "success");
}

/**
 * Removes an item from the cart by its index.
 */
function removeFromCart(index) {
  cart.splice(index, 1);
  StorageManager.saveCart(cart);
  updateCartUI();
  updateCartCount();
  showNotification("تم حذف المنتج من السلة", "info");
}

/**
 * Updates the quantity of a cart item.
 */
function updateCartItemQuantity(index, change) {
  if (cart[index]) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      removeFromCart(index);
    } else {
      if (cart[index].quantity > 10) cart[index].quantity = 10;
      StorageManager.saveCart(cart);
      updateCartUI();
      updateCartCount();
    }
  }
}

/**
 * Toggles a product in the favorites list.
 */
function toggleFavorite(event, productId) {
  event.stopPropagation(); // Prevent card click
  const index = favorites.indexOf(productId);
  const favoriteBtn = event.currentTarget;
  const icon = favoriteBtn.querySelector("i");

  if (index > -1) {
    favorites.splice(index, 1);
    showNotification("تمت الإزالة من المفضلة", "info");
    favoriteBtn.classList.remove("active");
    icon.classList.replace("fa-heart", "fa-heart-o");
  } else {
    favorites.push(productId);
    showNotification("تمت الإضافة إلى المفضلة ❤️", "success");
    favoriteBtn.classList.add("active");
    icon.classList.replace("fa-heart-o", "fa-heart");
    favoriteBtn.style.animation = "heartBeat 0.6s ease-in-out";
    setTimeout(() => (favoriteBtn.style.animation = ""), 600);
  }
  StorageManager.saveFavorites(favorites);
  loadProducts(); // Redraw to update favorite states
}

// ---------------------------------------------------------------------------------
// 5. PAGE & MODAL NAVIGATION
// ---------------------------------------------------------------------------------

/**
 * Switches between 'home' and 'checkout' pages.
 */
function showPage(page) {
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("checkoutPage").classList.add("hidden");

  if (page === "home") {
    document.getElementById("homePage").classList.remove("hidden");
  } else if (page === "checkout") {
    document.getElementById("checkoutPage").classList.remove("hidden");
    renderCheckoutPage();
  }

  currentPage = page;
  window.scrollTo(0, 0);
  closeModal();
  if (document.getElementById("cartSidebar").classList.contains("open")) {
    toggleCart();
  }
}

/**
 * Displays the product detail modal.
 */
function showProductDetail(productId) {
  currentProduct = productsData.products.find((p) => p.id === productId);
  if (!currentProduct) return;

  const modal = document.getElementById("productModal");
  const content = document.getElementById("productDetailContent");

  content.innerHTML = createProductDetailHTML(currentProduct);
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

/**
 * Closes any open modal.
 */
function closeModal() {
  const modal = document.getElementById("productModal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

/**
 * Toggles the cart sidebar visibility.
 */
function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar");
  const isOpen = cartSidebar.classList.toggle("open");
  document.body.style.overflow = isOpen ? "hidden" : "auto";
}

// ---------------------------------------------------------------------------------
// 6. EVENT HANDLERS & DYNAMIC CONTENT
// ---------------------------------------------------------------------------------

/**
 * Handles adding a configured item to the cart from the modal.
 */
function addToCartFromModal() {
  const selectedColor =
    document.querySelector(".color-option.selected")?.dataset.color ||
    currentProduct.colors[0]?.name ||
    null;
  const selectedSize =
    document.querySelector(".size-option.selected")?.dataset.size ||
    currentProduct.sizes[0] ||
    null;
  const quantity = parseInt(document.getElementById("quantity").value);

  const cartItem = {
    id: Date.now(),
    productId: currentProduct.id,
    name: currentProduct.name,
    price: currentProduct.currentPrice,
    image: currentProduct.mainImage,
    color: selectedColor,
    size: selectedSize,
    quantity: quantity,
  };

  addToCart(cartItem);
  closeModal();
  showNotification("تمت إضافة المنتج للسلة بنجاح!", "success");
}

/**
 * Adds to cart from modal and goes to checkout.
 */
function buyNowFromModal() {
  addToCartFromModal();
  proceedToCheckout();
}

/**
 * Creates the HTML for the product detail view inside the modal.
 */
function createProductDetailHTML(product) {
  const thumbnails = product.images
    .map(
      (img, index) =>
        `<img src="${img}" class="thumbnail ${
          index === 0 ? "active" : ""
        }" onclick="changeMainImage('${img}', this)">`
    )
    .join("");

  const colorOptions = product.colors
    .map(
      (color) =>
        `<div class="color-option" style="background-color: ${color.code}" title="${color.name}" onclick="selectOption(this)" data-color="${color.name}"></div>`
    )
    .join("");

  const sizeOptions = product.sizes
    .map(
      (size) =>
        `<div class="size-option" onclick="selectOption(this)" data-size="${size}">${size}</div>`
    )
    .join("");

  return `
    <div class="product-detail">
        <div class="product-gallery">
            <img src="${product.mainImage}" alt="${
    product.name
  }" class="main-image" id="mainImage">
            <div class="image-thumbnails">${thumbnails}</div>
        </div>
        <div class="product-details">
            <h1>${product.name}</h1>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-text">(${product.reviews} تقييم)</span>
            </div>
            <div class="price-section">
                <span class="current-price">${product.currentPrice} جنيه</span>
                ${
                  product.originalPrice > product.currentPrice
                    ? `<span class="original-price">${product.originalPrice} جنيه</span>`
                    : ""
                }
                ${
                  product.discount > 0
                    ? `<span class="discount-badge">خصم ${product.discount}%</span>`
                    : ""
                }
            </div>
            ${
              product.colors.length > 1
                ? `<div class="option-group">
                    <label class="option-label">اللون:</label>
                    <div class="color-options">${colorOptions}</div>
                   </div>`
                : ""
            }
            ${
              product.sizes.length > 1 && product.sizes[0] !== "مقاس واحد"
                ? `<div class="option-group">
                    <label class="option-label">المقاس:</label>
                    <div class="size-options">${sizeOptions}</div>
                   </div>`
                : ""
            }
            <div class="quantity-section">
                <label class="option-label">الكمية:</label>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                    <input type="number" id="quantity" class="quantity-input" value="1" min="1" max="10" readonly>
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
            </div>
            <div class="add-to-cart-section">
                <button class="btn btn-primary btn-large" onclick="addToCartFromModal()">
                    <i class="fas fa-cart-plus"></i> إضافة للسلة
                </button>
                <button class="btn btn-secondary btn-large" onclick="buyNowFromModal()">
                    <i class="fas fa-bolt"></i> شراء الآن
                </button>
            </div>
            <div class="product-tabs">
                <div class="tab-buttons">
                    <button class="tab-btn active" onclick="showTab('details', this)">التفاصيل</button>
                    <button class="tab-btn" onclick="showTab('specs', this)">المواصفات</button>
                    <button class="tab-btn" onclick="showTab('return', this)">الضمان والاسترجاع</button>
                </div>
                <div id="tabContent" class="tab-content">
                    <div id="details" class="tab-pane">${product.details}</div>
                    <div id="specs" class="tab-pane hidden"><ul>${product.specifications
                      .map((s) => `<li>${s}</li>`)
                      .join("")}</ul></div>
                    <div id="return" class="tab-pane hidden"><p>${
                      product.warranty
                    }. ${product.returnPolicy}.</p></div>
                </div>
            </div>
        </div>
    </div>`;
}

// Handler functions for the product detail modal
function changeMainImage(src, thumb) {
  document.getElementById("mainImage").src = src;
  document
    .querySelectorAll(".thumbnail.active")
    .forEach((t) => t.classList.remove("active"));
  thumb.classList.add("active");
}

function selectOption(el) {
  const parent = el.parentElement;
  parent
    .querySelectorAll(`.${el.className}`)
    .forEach((opt) => opt.classList.remove("selected"));
  el.classList.add("selected");
}

function changeQuantity(change) {
  const input = document.getElementById("quantity");
  let val = parseInt(input.value) + change;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  input.value = val;
}

function showTab(tabId, button) {
  document
    .querySelectorAll(".tab-pane")
    .forEach((p) => p.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
  document
    .querySelectorAll(".tab-btn.active")
    .forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
}

// ---------------------------------------------------------------------------------
// 7. CHECKOUT PROCESS
// ---------------------------------------------------------------------------------

function proceedToCheckout() {
  if (cart.length === 0) {
    showNotification("السلة فارغة! يرجى إضافة منتجات أولاً.", "error");
    return;
  }
  showPage("checkout");
}

/**
 * Renders the checkout form.
 */
function renderCheckoutPage() {
  const checkoutPage = document.getElementById("checkoutPage");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = total > 500 ? 0 : 30;
  const finalTotal = total + deliveryFee;

  let summaryHTML = "";
  cart.forEach((item) => {
    summaryHTML += `<div class="summary-item"><span>${item.name} × ${item.quantity}</span><span>${item.price * item.quantity} جنيه</span></div>`;
  });

  const governorateOptions = [
    "القاهرة", "الجيزة", "الإسكندرية", "الدقهلية", "الشرقية", "القليوبية",
    "الغربية", "المنوفية", "البحيرة", "بورسعيد", "الإسماعيلية", "السويس",
    "كفر الشيخ", "دمياط", "الفيوم", "بني سويف", "المنيا", "أسيوط", "سوهاج",
    "قنا", "الأقصر", "أسوان", "البحر الأحمر", "الوادي الجديد", "مطروح",
    "شمال سيناء", "جنوب سيناء",
  ].map(gov => `<option value="${gov}">${gov}</option>`).join('');

  checkoutPage.innerHTML = `
    <div class="checkout-form">
        <h2 class="form-title"><i class="fas fa-shopping-bag"></i> إتمام الطلب</h2>
        <div class="order-summary">
            <h3 class="summary-title">ملخص الطلب</h3>
            <div id="orderSummary">${summaryHTML}</div>
            <div class="summary-item"><span>رسوم التوصيل</span><span>${deliveryFee === 0 ? 'مجاناً' : deliveryFee + ' جنيه'}</span></div>
            <div class="summary-total"><span>الإجمالي النهائي</span><span>${finalTotal} جنيه</span></div>
        </div>
        <form id="orderForm" onsubmit="submitOrder(event)">
            <div class="form-group">
                <label class="form-label" for="fullName"><i class="fas fa-user"></i> الاسم الكامل *</label>
                <input type="text" id="fullName" class="form-input" required />
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label class="form-label" for="phone"><i class="fas fa-phone"></i> رقم الهاتف *</label>
                    <input type="tel" id="phone" class="form-input" required />
                </div>
                <div class="form-group">
                    <label class="form-label" for="governorate"><i class="fas fa-map-marker-alt"></i> المحافظة *</label>
                    <select id="governorate" class="form-select" required>
                        <option value="">اختر المحافظة</option>
                        ${governorateOptions}
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label" for="address"><i class="fas fa-home"></i> العنوان التفصيلي *</label>
                <textarea id="address" class="form-input" rows="3" placeholder="المنطقة، الشارع، رقم العقار..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-large"><i class="fas fa-check"></i> تأكيد الطلب - الدفع عند الاستلام</button>
        </form>
        <div style="text-align: center; margin-top: 20px;">
            <button class="btn btn-secondary" onclick="showPage('home')"><i class="fas fa-arrow-right"></i> العودة للتسوق</button>
        </div>
    </div>`;
}

/**
 * Handles form submission and order processing.
 */
function submitOrder(event) {
  event.preventDefault();
  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');

  // Validation
  const phoneRegex = /^(01)[0125][0-9]{8}$/;
  const phone = document.getElementById("phone").value;
  if (!phoneRegex.test(phone)) {
    showNotification("من فضلك أدخل رقم هاتف مصري صحيح (11 رقم).", "error");
    return;
  }

  const orderData = {
    fullName: document.getElementById("fullName").value,
    phone: phone,
    governorate: document.getElementById("governorate").value,
    address: document.getElementById("address").value,
    orderNumber: Math.floor(Math.random() * 900000) + 100000,
    orderDate: new Date().toISOString(),
    orderItems: [...cart],
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    status: 'pending', // جديد
    trackingSteps: [ // جديد
      {step: 'تم استلام الطلب', completed: true, date: new Date().toISOString()},
      {step: 'جاري المراجعة', completed: false, date: null},
      {step: 'تم التأكيد', completed: false, date: null},
      {step: 'جاري التحضير', completed: false, date: null},
      {step: 'خرج للتوصيل', completed: false, date: null},
      {step: 'تم التسليم', completed: false, date: null}
    ]
  };
  orderData.deliveryFee = orderData.total > 500 ? 0 : 30;
  orderData.finalTotal = orderData.total + orderData.deliveryFee;

  // Simulate submission
  const originalText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> جاري إرسال الطلب...`;

  // إرسال للتليجرام أولاً
  sendToTelegram(orderData).then(sent => {
    setTimeout(() => {
      StorageManager.saveOrderHistory(orderData);
      cart = [];
      StorageManager.saveCart(cart);
      updateCartUI();
      updateCartCount();
      
      if (sent) {
        showNotification("تم إرسال طلبك بنجاح!", "success");
      }
      
      showOrderSuccess(orderData);
    }, 1500);
  });
}

/**
 * Displays the order success message.
 */
function showOrderSuccess(orderData) {
  const checkoutPage = document.getElementById("checkoutPage");
  checkoutPage.innerHTML = `
    <div class="order-success-container">
        <div class="success-animation">
            <div class="checkmark-circle"><i class="fas fa-check"></i></div>
        </div>
        <h2 class="success-title">🎉 تم استلام طلبك بنجاح!</h2>
        <div class="order-details-card">
            <div class="order-header">
                <h3>تفاصيل الطلب</h3>
                <span class="order-number">#${orderData.orderNumber}</span>
            </div>
            <div class="order-info-grid">
                <div class="info-item"><i class="fas fa-user"></i><span>العميل: ${orderData.fullName}</span></div>
                <div class="info-item"><i class="fas fa-phone"></i><span>الهاتف: ${orderData.phone}</span></div>
                <div class="info-item"><i class="fas fa-map-marker-alt"></i><span>المحافظة: ${orderData.governorate}</span></div>
                <div class="info-item"><i class="fas fa-money-bill-wave"></i><span>الإجمالي: ${orderData.finalTotal} جنيه</span></div>
            </div>
        </div>
        <div class="delivery-timeline">
            <h4>📦 حالة الطلب</h4>
            <div class="timeline-steps">
                <div class="step active"><div class="step-icon">✅</div><span>تم استلام الطلب</span></div>
                <div class="step"><div class="step-icon">📞</div><span>سيتم الاتصال بك خلال 24 ساعة للتأكيد</span></div>
                <div class="step"><div class="step-icon">🚚</div><span>التوصيل المتوقع خلال 2-4 أيام عمل</span></div>
            </div>
        </div>
        <div class="payment-info">
            <div class="payment-method"><i class="fas fa-hand-holding-usd"></i><strong>الدفع عند الاستلام</strong></div>
            <p>سيتم تحصيل ${orderData.finalTotal} جنيه عند استلامك الطلب.</p>
        </div>
        <div class="action-buttons">
            <button class="btn btn-primary btn-large" onclick="showPage('home')"><i class="fas fa-shopping-bag"></i> متابعة التسوق</button>
        </div>
    </div>`;
}
// تتبع الطلب
function trackOrder() {
  const orderNumber = prompt("أدخل رقم الطلب للتتبع:");
  if (!orderNumber) return;
  
  const orders = StorageManager.getOrderHistory();
  const order = orders.find(o => o.orderNumber.toString() === orderNumber.toString());
  
  if (!order) {
    showNotification("رقم الطلب غير صحيح", "error");
    return;
  }
  
  showOrderTracking(order);
}

function showOrderTracking(order) {
  const modal = document.getElementById("productModal");
  const content = document.getElementById("productDetailContent");
  
  const trackingHTML = `
    <div style="padding: 20px;">
      <h2 style="color: #00ddff; margin-bottom: 20px;">
        <i class="fas fa-shipping-fast"></i> تتبع الطلب #${order.orderNumber}
      </h2>
      <div style="background: rgba(0,0,0,0.2); padding: 20px; border-radius: 15px; margin-bottom: 20px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
          <div><i class="fas fa-user"></i> العميل: ${order.fullName}</div>
          <div><i class="fas fa-phone"></i> الهاتف: ${order.phone}</div>
          <div><i class="fas fa-calendar"></i> تاريخ الطلب: ${new Date(order.orderDate).toLocaleDateString('ar-EG')}</div>
          <div><i class="fas fa-money-bill"></i> المبلغ: ${order.finalTotal} جنيه</div>
        </div>
      </div>
      
      <div style="background: rgba(0,221,255,0.1); padding: 20px; border-radius: 15px;">
        <h3 style="color: #00ddff; margin-bottom: 15px;">مراحل الطلب</h3>
        ${order.trackingSteps.map((step, index) => `
          <div style="display: flex; align-items: center; padding: 10px 0; opacity: ${step.completed ? '1' : '0.5'};">
            <div style="width: 30px; height: 30px; border-radius: 50%; background: ${step.completed ? '#00ff88' : 'rgba(255,255,255,0.1)'}; 
                        display: flex; align-items: center; justify-content: center; margin-left: 15px;">
              ${step.completed ? '<i class="fas fa-check" style="color: #000;"></i>' : index + 1}
            </div>
            <div>
              <div style="font-weight: bold; color: ${step.completed ? '#00ff88' : '#fff'};">${step.step}</div>
              ${step.date ? `<div style="font-size: 12px; color: rgba(255,255,255,0.6);">${new Date(step.date).toLocaleString('ar-EG')}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
      
      <div style="text-align: center; margin-top: 20px;">
        <button class="btn btn-secondary" onclick="closeModal()">إغلاق</button>
      </div>
    </div>
  `;
  
  content.innerHTML = trackingHTML;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
// ---------------------------------------------------------------------------------
// 8. INITIALIZATION & GLOBAL EVENT LISTENERS
// ---------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Load data from storage
  cart = StorageManager.loadCart();
  favorites = StorageManager.loadFavorites();

  // Initial render
  loadProducts();
  updateCartUI();
  updateCartCount();

  // Global event listeners
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      if (document.getElementById("cartSidebar").classList.contains("open")) {
        toggleCart();
      }
    }
  });

  document.getElementById("productModal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  });
});
