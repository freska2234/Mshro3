// =================================================================================
// E-COMMERCE SCRIPT
// =================================================================================

// ---------------------------------------------------------------------------------
// 1. DATA
// ---------------------------------------------------------------------------------
let recentOrders = [];

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
        "قميص قطني 100% عالي الجودة، مصنوع من أجود أنواع القطن المصري. يتميز بالنعومة والراحة والمتانة. مثالي للارتداء اليومي وفي المناسبات الكاجوال. تصميم عصري يناسب جميع الأذواق.",
      specifications: [
        "الخامة: قطن 100%",
        "المنشأ: مصر",
        "العناية: غسيل آلة عادي",
        "المقاسات المتاحة: S, M, L, XL, XXL",
        "الألوان المتاحة: أزرق، أسود، أبيض",
      ],
      warranty: "ضمان الجودة لمدة 30 يوم",
      returnPolicy: "إمكانية الاسترداد خلال 14 يوم من الاستلام",
      category: "ملابس",
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
        "حذاء رياضي متطور مصمم للرياضيين المحترفين. يوفر راحة استثنائية ودعم ممتاز للقدم. تقنية توسيد متقدمة لامتصاص الصدمات وتحسين الأداء.",
      specifications: [
        "الخامة العلوية: شبك تقني متنفس",
        "النعل: مطاط عالي الجودة",
        "التبطين: فوم الذاكرة للراحة",
        "الاستخدام: جري، تدريب، رياضة يومية",
        "الألوان المتاحة: أسود، أبيض، أحمر",
      ],
      warranty: "ضمان الجودة لمدة 6 أشهر",
      returnPolicy: "إمكانية الاسترداد خلال 30 يوم من الاستلام",
      category: "أحذية",
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
        "ساعة ذكية متطورة تجمع بين الأناقة والتكنولوجيا. تتضمن مراقب معدل ضربات القلب، GPS، ومقاومة للماء حتى 50 متر. مثالية لتتبع نشاطك اليومي وصحتك.",
      specifications: [
        "الشاشة: AMOLED 1.4 بوصة",
        "البطارية: تدوم حتى 7 أيام",
        "الاتصال: Bluetooth 5.0, WiFi, NFC",
        "مقاومة الماء: حتى 50 متر",
        "الميزات: مراقب نبضات القلب، تتبع النوم، GPS",
      ],
      warranty: "ضمان دولي لمدة سنتين",
      returnPolicy: "إمكانية الاسترداد خلال 15 يوم من الاستلام",
      category: "إلكترونيات",
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
        "حقيبة جلدية فاخرة مصنوعة من الجلد الطبيعي. تصميم أنيق وعملي مع مقصورات متعددة. مثالية للاستخدام اليومي أو للسفر القصير، وتتسع للابتوب والأوراق الأساسية.",
      specifications: [
        "الخامة: جلد طبيعي 100%",
        "الأبعاد: 40×30×15 سم",
        "الإقفال: سحاب معدني",
        "الجيوب: جيب أمامي، جيب داخلي بسحاب",
        "الألوان المتاحة: بني، أسود",
      ],
      warranty: "ضمان الصناعة لمدة سنة واحدة",
      returnPolicy: "إمكانية الاسترداد خلال 21 يوم من الاستلام",
      category: "إكسسوارات",
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
        "سماعات لاسلكية متطورة مع تقنية إلغاء الضوضاء النشط وجودة صوت استثنائية. توفر تجربة استماع غامرة ومريحة لساعات طويلة.",
      specifications: [
        "التقنية: Bluetooth 5.2",
        "البطارية: 30 ساعة تشغيل",
        "المقاومة: IPX4 ضد الماء",
        "خاصية إلغاء الضوضاء: نعم",
        "الألوان المتاحة: أسود، أبيض، أزرق",
      ],
      warranty: "ضمان دولي لمدة سنة واحدة",
      returnPolicy: "إمكانية الاسترداد خلال 14 يوم من الاستلام",
      category: "إلكترونيات",
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
        "نظارة شمسية عصرية بتصميم أنيق وحماية فائقة من الأشعة فوق البنفسجية. عدسات بولاريزد لتقليل الوهج وتوفير رؤية واضحة ومريحة.",
      specifications: [
        "الحماية: UV400",
        "الإطار: معدن خفيف الوزن",
        "العدسات: بولاريزد",
        "شكل الإطار: دائري / مربع (متاح تصميمات متعددة)",
        "الألوان المتاحة: أسود، ذهبي",
      ],
      warranty: "ضمان الصناعة لمدة 6 أشهر",
      returnPolicy: "إمكانية الاسترداد خلال 10 أيام من الاستلام",
      category: "إكسسوارات",
    },
  ],
};

// إعدادات بوت التليجرام
const TELEGRAM_CONFIG = {
  BOT_TOKEN: "7254345779:AAF2IY-f42Vj4Zgai5dlCK7yxpWhz4_S7Ac", // استبدل بـ BOT TOKEN الخاص بك
  CHAT_ID: "5895491379", // استبدل بـ CHAT ID الخاص بك
};

// === بيانات المحافظات والمدن ===
const CITIES_DATA = {
  القاهرة: [
    "المعادى",
    "التجمع",
    "مدينة نصر",
    "شبرا مصر",
    "وسط البلد",
    "مصر القديمة",
    "رمسيس",
    "غمرة",
    "المطرية",
    "الويلي",
    "الشرابية",
    "حدائق القبة",
    "الاميرية",
    "عين شمس",
    "عزبة النخل",
    "جسر السويس",
    "المرج",
    "السلام",
    "مصر الجديدة",
    "مدينة الشروق",
    "مدينتي",
    "مدينة بدر",
    "الرحاب",
    "القطامية",
    "المقطم",
    "حلوان",
    "دار السلام",
    "البساتين",
    "شبرا الخيمه",
    "حلميه الزيتون",
    "العباسيه",
    "السيده زينب",
    "السيده عائشه",
    "منشأة ناصر",
    "الجمالية",
    "الزاويه الحمراء",
    "النزهه",
    "مدينه المستقبل",
  ],
  الجيزة: [
    "السادس من أكتوبر",
    "الشيخ زايد",
    "الحوامدية",
    "البدرشين",
    "الصف",
    "أطفيح",
    "العياط",
    "منشأة القناطر",
    "أوسيم",
    "كرداسة",
    "أبو النمرس",
    "إمبابة",
    "الهرم",
    "فيصل",
    "المهندسين",
    "العمرانيه",
    "الدقي",
    "حدائق الاهرام",
    "حدائق اكتوبر",
    "صفط اللبن",
    "ارض اللواء",
    "المنيب",
    "المنيل",
    "الوراق",
    "بولاق الدكرور",
    "الزمالك",
  ],
  الإسكندرية: [
    "الإسكندرية",
    "برج العرب",
    "برج العرب الجديدة",
    "العامرية",
    "أبيس",
    "فلمنج",
    "ميامي",
    "محرم بك",
    "لوران",
    "كرموز",
    "سموحة",
    "العصافرة",
    "المندرة",
    "سيدي بشر",
    "السيوف",
  ],
  الدقهلية: [
    "المنصورة",
    "طلخا",
    "ميت غمر",
    "دكرنس",
    "منية النصر",
    "السنبلاوين",
    "الكردي",
    "بني عبيد",
    "المنزلة",
    "تمي الأمديد",
    "الجمالية",
    "شربين",
    "المطرية",
    "بلقاس",
    "ميت سلسيل",
    "جمصة",
    "نبروه",
    "اجا",
  ],
  "البحر الأحمر": [
    "الغردقة",
    "رأس غارب",
    "سفاجا",
    "القصير",
    "مرسى علم",
    "الدهار",
    "دهب",
  ],
  البحيرة: [
    "دمنهور",
    "كفر الدوار",
    "رشيد",
    "إدكو",
    "أبو المطامير",
    "أبو حمص",
    "الدلنجات",
    "المحمودية",
    "الرحمانية",
    "إيتاي البارود",
    "حوش عيسى",
    "شبراخيت",
    "كوم حمادة",
    "بدر",
    "وادي النطرون",
    "النوبارية الجديدة",
    "كوم امبو",
  ],
  الفيوم: [
    "الفيوم",
    "الفيوم الجديدة",
    "طامية",
    "سنورس",
    "إطسا",
    "إبشواي",
    "يوسف الصديق",
  ],
  الغربية: [
    "طنطا",
    "المحلة الكبرى",
    "كفر الزيات",
    "زفتى",
    "السنطة",
    "قطور",
    "بسيون",
    "سمنود",
  ],
  الإسماعيلية: [
    "الإسماعيلية",
    "فايد",
    "القنطرة شرق",
    "القنطرة غرب",
    "التل الكبير",
    "أبو صوير",
    "القصاصين الجديدة",
  ],
  المنوفية: [
    "شبين الكوم",
    "مدينة السادات",
    "منوف",
    "سرس الليان",
    "أشمون",
    "الباجور",
    "قويسنا",
    "بركة السبع",
    "تلا",
    "الشهداء",
    "طنوب",
  ],
  المنيا: [
    "المنيا",
    "المنيا الجديدة",
    "العدوة",
    "مغاغة",
    "بني مزار",
    "مطاي",
    "سمالوط",
    "المدينة الفكرية",
    "ملوي",
    "دير مواس",
  ],
  القليوبية: [
    "بنها",
    "قليوب",
    "القناطر الخيرية",
    "الخانكة",
    "كفر شكر",
    "طوخ",
    "قها",
    "العبور",
    "الخصوص",
    "شبين القناطر",
    "نقباس",
    "كفر الشهاوي",
    "الرملة",
    "برشوم",
    "ميت كنانه",
    "كفر عرب",
    "القليوبيه",
    "الجبل الاصفر",
  ],
  "الوادي الجديد": ["الخارجة", "باريس", "موط", "الفرافرة", "بلاط", "الداخله"],
  السويس: ["السويس", "حي الاربعين", "حي عتاقة", "حي الجناين", "حي فيصل"],
  أسوان: [
    "أسوان",
    "أسوان الجديدة",
    "دراو",
    "كوم أمبو",
    "نصر النوبة",
    "كلابشة",
    "إدفو",
    "الرديسية",
    "البصيلية",
    "السباعية",
    "ابوسمبل السياحية",
  ],
  أسيوط: [
    "أسيوط",
    "أسيوط الجديدة",
    "ديروط",
    "منفلوط",
    "القوصية",
    "أبنوب",
    "أبو تيج",
    "الغنايم",
    "ساحل سليم",
    "البداري",
    "صدفا",
  ],
  "بني سويف": [
    "بني سويف",
    "بني سويف الجديدة",
    "الواسطى",
    "ناصر",
    "إهناسيا",
    "ببا",
    "الفشن",
    "سمسطا",
  ],
  بورسعيد: [
    "بورسعيد",
    "بورفؤاد",
    "حي الشرق",
    "حي الجنوب",
    "حي المناخ",
    "حي الضواحي",
    "حي الزهور",
    "حي العرب",
  ],
  دمياط: [
    "دمياط",
    "دمياط الجديدة",
    "رأس البر",
    "فارسكور",
    "الزرقا",
    "السرو",
    "الروضة",
    "كفر البطيخ",
    "عزبة البرج",
    "ميت أبو غالب",
    "كفر سعد",
  ],
  الشرقية: [
    "الزقازيق",
    "العاشر من رمضان",
    "منيا القمح",
    "بلبيس",
    "مشتول السوق",
    "القنايات",
    "أبو حماد",
    "القرين",
    "ههيا",
    "أبو كبير",
    "فاقوس",
    "الصالحية الجديدة",
    "الإبراهيمية",
    "ديرب نجم",
    "كفر صقر",
    "أولاد صقر",
    "الحسينية",
    "صان الحجر القبلية",
  ],
  "جنوب سيناء": [
    "الطور",
    "شرم الشيخ",
    "دهب",
    "نويبع",
    "طابا",
    "أبو رديس",
    "رأس سدر",
  ],
  "كفر الشيخ": [
    "كفر الشيخ",
    "دسوق",
    "فوه",
    "مطوبس",
    "برج البرلس",
    "بلطيم",
    "مصيف بلطيم",
    "الحامول",
    "بيلا",
    "الرياض",
    "سيدي سالم",
    "قلين",
    "سيدي غازي",
  ],
  مطروح: [
    "مرسى مطروح",
    "الحمام",
    "العلمين",
    "الضبعة",
    "النجيلة",
    "سيدي براني",
    "الساحل الشمالى",
  ],
  الأقصر: [
    "الأقصر",
    "الأقصر الجديدة",
    "إسنا",
    "طيبة الجديدة",
    "الزينية",
    "البياضية",
    "القرنة",
    "أرمنت",
    "الطود",
    "الأقالته",
  ],
  قنا: [
    "قنا",
    "قنا الجديدة",
    "أبو تشت",
    "نجع حمادي",
    "دشنا",
    "الوقف",
    "قفط",
    "نقادة",
    "فرشوط",
    "قوص",
  ],
  سوهاج: [
    "سوهاج",
    "سوهاج الجديدة",
    "أخميم",
    "أخميم الجديدة",
    "البلينا",
    "المراغة",
    "المنشأة",
    "دار السلام",
    "جرجا",
    "جهينة الغربية",
    "ساقلته",
    "طما",
    "طهطا",
  ],
};

// ---------------------------------------------------------------------------------
// 2. STATE MANAGEMENT
// ---------------------------------------------------------------------------------

let cart = [];
let favorites = [];
let currentProduct = null;
let currentPage = "home"; // "home", "favorites"

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
      history.unshift(order); // Add new order to the beginning
      if (history.length > 10) history = history.slice(0, 10); // Keep only last 10 orders
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
   saveRecentOrders: (orders) => {
    localStorage.setItem('recentOrders', JSON.stringify(orders));
  },
  loadRecentOrders: () => {
    const orders = localStorage.getItem('recentOrders');
    return orders ? JSON.parse(orders) : [];
  },
};

// ---------------------------------------------------------------------------------
// 3. UI RENDERING & UPDATES
// ---------------------------------------------------------------------------------

/**
 * Generates star icons for a given rating.
 * @param {number} rating - The product rating (e.g., 4.5).
 * @param {string} sizeClass - Optional class for sizing stars (e.g., 'mini').
 * @returns {string} - HTML string for star icons.
 */
function generateStars(rating, sizeClass = "") {
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
            }" onclick="toggleFavorite(event, ${product.id})" title="${
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
  let filtered = productsData.products;

  // Apply filters if any (initially all)
  const searchTerm =
    document.getElementById("searchInput")?.value.toLowerCase() || "";
  const category = document.getElementById("categoryFilter")?.value || "all";
  const priceRange = document.getElementById("priceFilter")?.value || "all";

  filtered = productsData.products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm);
    const matchesCategory = category === "all" || product.category === category;
    let matchesPrice = true;
    if (priceRange === "under200") {
      matchesPrice = product.currentPrice < 200;
    } else if (priceRange === "200-500") {
      matchesPrice = product.currentPrice >= 200 && product.currentPrice <= 500;
    } else if (priceRange === "over500") {
      matchesPrice = product.currentPrice > 500;
    }
    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = `<p style="text-align: center; width: 100%; color: rgba(255,255,255,0.7); font-size: 18px; margin-top: 50px;">لا توجد منتجات مطابقة لمعايير البحث.</p>`;
    return;
  }

  filtered.forEach((product, index) => {
    setTimeout(() => {
      const productCardHTML = createProductCardHTML(product);
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = productCardHTML;
      tempDiv.firstElementChild.style.animation = "fadeIn 0.5s ease forwards";
      productsGrid.appendChild(tempDiv.firstElementChild);
    }, index * 100); // Staggered animation
  });
}

function filterProducts() {
  loadProducts(); // Simply re-load products with current filter values
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
  const shippingCostEl = document.getElementById("shippingCost");
  const finalTotalEl = document.getElementById("finalTotal");
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
    shippingCostEl.textContent = "سيتم حسابه";
    finalTotalEl.textContent = "0 جنيه";
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = "0.5";
    return;
  }

  let subtotal = 0;
  cartItemsEl.innerHTML = "";
  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
    const cartItemHTML = `
            <div class="cart-item">
                <button class="remove-item" onclick="removeItemFromCart(${
                  item.id
                }, '${item.selectedColor}', '${item.selectedSize}')">
                    <i class="fas fa-times-circle"></i>
                </button>
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>اللون: ${item.selectedColor || "غير محدد"}</p>
                    <p>المقاس: ${item.selectedSize || "غير محدد"}</p>
                    <div class="quantity-control">
                        <button onclick="changeQuantity(${item.id}, '${
      item.selectedColor
    }', '${item.selectedSize}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, '${
      item.selectedColor
    }', '${item.selectedSize}', 1)">+</button>
                    </div>
                </div>
                <span class="cart-item-price">${
                  item.price * item.quantity
                } جنيه</span>
            </div>
        `;
    cartItemsEl.innerHTML += cartItemHTML;
  });

  cartTotalEl.textContent = `${subtotal} جنيه`;

  // Calculate and display shipping and final total
  const shipping = calculateShipping();
  shippingCostEl.textContent = `${shipping} جنيه`;
  finalTotalEl.textContent = `${subtotal + shipping} جنيه`;

  checkoutBtn.disabled = false;
  checkoutBtn.style.opacity = "1";
}

/**
 * Displays the product detail modal with information for a specific product.
 * @param {number} productId - The ID of the product to display.
 */
function showProductDetail(productId) {
  currentProduct = productsData.products.find((p) => p.id === productId);
  if (!currentProduct) {
    showToast("خطأ: المنتج غير موجود.", "error");
    return;
  }

  const modal = document.getElementById("productDetailModal");
  const content = document.getElementById("productDetailContent");

  let colorsHtml = "";
  if (currentProduct.colors && currentProduct.colors.length > 0) {
    colorsHtml = `
            <div class="option-group">
                <label class="option-label">الألوان المتاحة:</label>
                <div class="color-options">
                    ${currentProduct.colors
                      .map(
                        (color) => `
                        <div class="color-box" style="background-color: ${
                          color.code === "#ffffff"
                            ? "#eee; border: 1px solid #ccc;"
                            : color.code
                        };"
                            title="${color.name}"
                            data-color="${color.name}"
                            onclick="selectOption('color', '${
                              color.name
                            }')"></div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
  }

  let sizesHtml = "";
  if (currentProduct.sizes && currentProduct.sizes.length > 0) {
    sizesHtml = `
            <div class="option-group">
                <label class="option-label">المقاسات المتاحة:</label>
                <div class="size-options">
                    ${currentProduct.sizes
                      .map(
                        (size) => `
                        <button class="size-btn" data-size="${size}" onclick="selectOption('size', '${size}')">${size}</button>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
  }

  const isFavorite = favorites.includes(currentProduct.id);
  const favoriteButtonClass = isFavorite ? "active" : "";
  const favoriteButtonText = isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة";
  const favoriteButtonIcon = isFavorite ? "fas fa-heart" : "far fa-heart";

  content.innerHTML = `
        <div class="product-gallery">
            <img src="${currentProduct.mainImage}" alt="${
    currentProduct.name
  }" class="main-image" id="detailMainImage">
            <div class="image-thumbnails">
                ${currentProduct.images
                  .map(
                    (img, index) => `
                    <img src="${img}" alt="Thumbnail ${
                      index + 1
                    }" class="thumbnail ${
                      index === 0 ? "active" : ""
                    }" onclick="changeMainImage('${img}', this)">
                `
                  )
                  .join("")}
            </div>
        </div>
        <div class="product-details">
            <h1>${currentProduct.name}</h1>
            <div class="product-rating">
                ${generateStars(currentProduct.rating)}
                <span class="rating-text">(${
                  currentProduct.reviews
                } مراجعة)</span>
            </div>
            <p class="product-description">${currentProduct.description}</p>
            <div class="price-section">
                <span class="current-price">${
                  currentProduct.currentPrice
                } جنيه</span>
                ${
                  currentProduct.originalPrice > currentProduct.currentPrice
                    ? `<span class="original-price">${currentProduct.originalPrice} جنيه</span>`
                    : ""
                }
                ${
                  currentProduct.discount > 0
                    ? `<span class="discount-badge">${currentProduct.discount}% خصم</span>`
                    : ""
                }
            </div>

            ${colorsHtml}
            ${sizesHtml}

            <div class="quantity-control">
                <button onclick="changeDetailQuantity(-1)">-</button>
                <span id="detailQuantity">1</span>
                <button onclick="changeDetailQuantity(1)">+</button>
            </div>

            <div class="product-actions-detail">
                <button class="btn btn-primary btn-large" onclick="addToCartFromDetail()">
                    <i class="fas fa-cart-plus"></i> إضافة للسلة
                </button>
                <button class="btn btn-secondary btn-large favorite-btn ${favoriteButtonClass}" onclick="toggleFavorite(event, ${
    currentProduct.id
  }, true)">
                    <i class="${favoriteButtonIcon}"></i> ${favoriteButtonText}
                </button>
            </div>

            <div class="product-tabs">
                <div class="tab-buttons">
                    <button class="tab-button active" data-tab="details" onclick="openTab(event, 'details')">الوصف التفصيلي</button>
                    <button class="tab-button" data-tab="specs" onclick="openTab(event, 'specs')">المواصفات</button>
                    <button class="tab-button" data-tab="warranty" onclick="openTab(event, 'warranty')">الضمان والاسترجاع</button>
                </div>
                <div id="details" class="tab-content">
                    <p>${currentProduct.details}</p>
                </div>
                <div id="specs" class="tab-content hidden">
                    <ul>
                        ${currentProduct.specifications
                          .map(
                            (spec) =>
                              `<li><i class="fas fa-check-circle"></i> ${spec}</li>`
                          )
                          .join("")}
                    </ul>
                </div>
                <div id="warranty" class="tab-content hidden">
                    <p><strong>الضمان:</strong> ${currentProduct.warranty}</p>
                    <p><strong>سياسة الاسترجاع:</strong> ${
                      currentProduct.returnPolicy
                    }</p>
                </div>
            </div>
        </div>
    `;

  // Reset selected options and quantity when opening modal
  modal.dataset.selectedColor = "";
  modal.dataset.selectedSize = "";
  document.getElementById("detailQuantity").textContent = "1";

  // Pre-select first color/size if available
  if (currentProduct.colors && currentProduct.colors.length > 0) {
    selectOption("color", currentProduct.colors[0].name);
  }
  if (currentProduct.sizes && currentProduct.sizes.length > 0) {
    selectOption("size", currentProduct.sizes[0]);
  }

  modal.classList.remove("hidden");
}

/**
 * Changes the main image in the product detail modal.
 * @param {string} imageSrc - The URL of the new image.
 * @param {HTMLElement} clickedThumbnail - The thumbnail element that was clicked.
 */
function changeMainImage(imageSrc, clickedThumbnail) {
  document.getElementById("detailMainImage").src = imageSrc;
  document.querySelectorAll(".thumbnail").forEach((thumb) => {
    thumb.classList.remove("active");
  });
  clickedThumbnail.classList.add("active");
}

/**
 * Handles tab switching in product detail modal.
 * @param {Event} event - The click event.
 * @param {string} tabName - The name of the tab to open.
 */
function openTab(event, tabName) {
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => content.classList.add("hidden"));

  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => button.classList.remove("active"));

  document.getElementById(tabName).classList.remove("hidden");
  event.currentTarget.classList.add("active");
}

/**
 * Selects an option (color or size) in the product detail modal.
 * @param {string} type - 'color' or 'size'.
 * @param {string} value - The selected color name or size value.
 */
function selectOption(type, value) {
  const modal = document.getElementById("productDetailModal");
  if (type === "color") {
    modal.dataset.selectedColor = value;
    document.querySelectorAll(".color-box").forEach((box) => {
      box.classList.remove("selected");
      if (box.dataset.color === value) {
        box.classList.add("selected");
      }
    });
  } else if (type === "size") {
    modal.dataset.selectedSize = value;
    document.querySelectorAll(".size-btn").forEach((btn) => {
      btn.classList.remove("selected");
      if (btn.dataset.size === value) {
        btn.classList.add("selected");
      }
    });
  }
}

/**
 * Changes the quantity in the product detail modal.
 * @param {number} delta - The amount to change the quantity by (-1 or 1).
 */
function changeDetailQuantity(delta) {
  const quantityEl = document.getElementById("detailQuantity");
  let quantity = parseInt(quantityEl.textContent);
  quantity = Math.max(1, quantity + delta); // Quantity cannot be less than 1
  quantityEl.textContent = quantity;
}

/**
 * Hides a given modal.
 * @param {string} modalId - The ID of the modal to hide.
 */
function hideModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
  if (modalId === "productDetailModal") {
    currentProduct = null; // Clear current product when modal is closed
  }
}

/**
 * Toggles the visibility of the cart sidebar.
 */
function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("open");
}

/**
 * Displays a toast notification.
 * @param {string} message - The message to display.
 * @param {string} type - 'success', 'error', or default (info).
 */
function showToast(message, type = "") {
  const toastContainer = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.classList.add("toast");
  if (type) {
    toast.classList.add(type);
  }
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000); // Remove after 3 seconds (animation takes 3s total)
}

// ---------------------------------------------------------------------------------
// 4. CART & FAVORITE ACTIONS
// ---------------------------------------------------------------------------------

/**
 * Toggles a product in/out of favorites.
 * @param {Event} event - The click event.
 * @param {number} productId - The ID of the product.
 * @param {boolean} fromDetail - True if called from product detail page.
 */
function toggleFavorite(event, productId, fromDetail = false) {
  event.stopPropagation(); // Prevent triggering product detail modal

  const index = favorites.indexOf(productId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast("تمت إزالة المنتج من المفضلة.", "success");
  } else {
    favorites.push(productId);
    showToast("تمت إضافة المنتج إلى المفضلة.", "success");
  }
  StorageManager.saveFavorites(favorites);
  if (currentPage === "home") {
    loadProducts(); // Re-render product cards on home page to update heart icons
  } else if (currentPage === "favorites") {
    loadFavoritesPage(); // Re-render favorites page
  }
  if (fromDetail) {
    // Update the button in the modal itself
    const favBtn = event.currentTarget;
    if (favBtn) {
      favBtn.classList.toggle("active");
      favBtn.querySelector("i").classList.toggle("fas");
      favBtn.querySelector("i").classList.toggle("far");
      favBtn.title = favorites.includes(productId)
        ? "إزالة من المفضلة"
        : "إضافة للمفضلة";
      favBtn.innerHTML = favorites.includes(productId)
        ? '<i class="fas fa-heart"></i> إزالة من المفضلة'
        : '<i class="far fa-heart"></i> إضافة للمفضلة';
    }
  }
}

/**
 * Adds a product to the cart from the product detail modal.
 */
function addToCartFromDetail() {
  if (!currentProduct) return;

  const selectedQuantity = parseInt(
    document.getElementById("detailQuantity").textContent
  );
  const selectedColor =
    document.getElementById("productDetailModal").dataset.selectedColor;
  const selectedSize =
    document.getElementById("productDetailModal").dataset.selectedSize;

  // Basic validation for options if they exist
  if (currentProduct.colors && !selectedColor) {
    showToast("الرجاء اختيار لون المنتج.", "error");
    return;
  }
  if (currentProduct.sizes && !selectedSize) {
    showToast("الرجاء اختيار مقاس المنتج.", "error");
    return;
  }

  addToCart(currentProduct.id, selectedQuantity, selectedColor, selectedSize);
  hideModal("productDetailModal");
  toggleCart(); // Open cart sidebar after adding
}

/**
 * Adds a product to the cart.
 * @param {number} productId - The ID of the product.
 * @param {number} quantity - The quantity to add.
 * @param {string} selectedColor - The selected color (optional).
 * @param {string} selectedSize - The selected size (optional).
 */
function addToCart(
  productId,
  quantity = 1,
  selectedColor = "",
  selectedSize = ""
) {
  const product = productsData.products.find((p) => p.id === productId);
  if (!product) return;

  // Check if item with same ID, color, and size already exists in cart
  const existingItemIndex = cart.findIndex(
    (item) =>
      item.id === productId &&
      item.selectedColor === selectedColor &&
      item.selectedSize === selectedSize
  );

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.currentPrice,
      image: product.mainImage,
      quantity: quantity,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
    });
  }

  StorageManager.saveCart(cart);
  updateCartCount();
  updateCartUI();
  showToast("تمت إضافة المنتج إلى السلة.", "success");
}

/**
 * Adds a product directly to the cart, opening its detail if options are needed.
 * @param {number} productId - The ID of the product.
 */
function quickAddToCart(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  if (!product) return;

  // If product has colors or sizes, show detail modal first
  if (
    (product.colors && product.colors.length > 0) ||
    (product.sizes && product.sizes.length > 0)
  ) {
    showProductDetail(productId);
    showToast("الرجاء اختيار الخيارات قبل الشراء.", "info");
  } else {
    addToCart(productId, 1, "", ""); // Add with default empty options
    toggleCart(); // Open cart sidebar
  }
}

/**
 * Changes the quantity of an item in the cart.
 * @param {number} productId - The ID of the product.
 * @param {string} color - The selected color.
 * @param {string} size - The selected size.
 * @param {number} delta - The change in quantity (-1 or 1).
 */
function changeQuantity(productId, color, size, delta) {
  const itemIndex = cart.findIndex(
    (item) =>
      item.id === productId &&
      item.selectedColor === color &&
      item.selectedSize === size
  );

  if (itemIndex > -1) {
    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1); // Remove if quantity is 0 or less
    }
    StorageManager.saveCart(cart);
    updateCartCount();
    updateCartUI();
  }
}

/**
 * Removes an item from the cart.
 * @param {number} productId - The ID of the product to remove.
 * @param {string} color - The selected color.
 * @param {string} size - The selected size.
 */
function removeItemFromCart(productId, color, size) {
  const initialLength = cart.length;
  cart = cart.filter(
    (item) =>
      !(
        item.id === productId &&
        item.selectedColor === color &&
        item.selectedSize === size
      )
  );
  if (cart.length < initialLength) {
    StorageManager.saveCart(cart);
    updateCartCount();
    updateCartUI();
    showToast("تمت إزالة المنتج من السلة.", "success");
  }
}

// ---------------------------------------------------------------------------------
// 5. CHECKOUT & ORDER HANDLING
// ---------------------------------------------------------------------------------

/**
 * Displays the checkout form and populates it with cart summary.
 */
function showCheckoutForm() {
  hideModal("productDetailModal"); // Ensure product detail is hidden
  toggleCart(); // Close cart sidebar

  const checkoutModal = document.getElementById("checkoutModal");
  const checkoutSummaryEl = document.getElementById("checkoutSummary");
  const checkoutFinalTotalEl = document.getElementById("checkoutFinalTotal");

  if (cart.length === 0) {
    showToast("سلة التسوق فارغة لا يمكن إتمام الشراء.", "error");
    return;
  }

  checkoutSummaryEl.innerHTML = "";
  let subtotal = 0;
  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
    checkoutSummaryEl.innerHTML += `
            <div class="checkout-item">
                <span>${item.name} (${item.quantity}x)</span>
                <span>${item.price * item.quantity} جنيه</span>
            </div>
        `;
  });

  const shipping = calculateShipping();
  checkoutSummaryEl.innerHTML += `
        <div class="checkout-item">
            <span>تكلفة الشحن</span>
            <span>${shipping} جنيه</span>
        </div>
    `;

  checkoutFinalTotalEl.textContent = `${subtotal + shipping} جنيه`;
  checkoutModal.classList.remove("hidden");
}

/**
 * Calculates shipping cost based on cart total (example logic).
 * @returns {number} - The shipping cost.
 */
function calculateShipping() {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  if (subtotal >= 1000) {
    return 0; // Free shipping for orders over 1000 EGP
  } else if (subtotal > 0) {
    return 50; // Flat rate shipping
  }
  return 0; // No shipping cost if cart is empty
}

/**
 * Sets up the event listener for the checkout form submission.
 */
function setupOrderForm() {
  const checkoutForm = document.getElementById("checkoutForm");
  const customerGovernorateSelect = document.getElementById(
    "customerGovernorate"
  );
  const customerCitySelect = document.getElementById("customerCitySelect");

  // Populate governorates on load
  populateGovernorates(customerGovernorateSelect);

  // Event listener for governorate selection
  customerGovernorateSelect.addEventListener("change", () => {
    populateCities(customerGovernorateSelect.value, customerCitySelect);
    // Clear city selection and disable if no governorate selected
    if (!customerGovernorateSelect.value) {
      customerCitySelect.disabled = true;
      customerCitySelect.innerHTML = '<option value="">اختر المدينة</option>';
    } else {
      customerCitySelect.disabled = false;
    }
  });

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent default form submission

      if (validateCheckoutForm()) {
        // Changed from validateForm to validateCheckoutForm
        submitOrder();
      } else {
        showToast("الرجاء مراجعة البيانات المدخلة.", "error");
      }
    });
  }
}

/**
 * Validates the checkout form fields.
 * @returns {boolean} - True if form is valid, false otherwise.
 */
function validateCheckoutForm() {
  // Renamed from validateForm to validateCheckoutForm
  let isValid = true;
  const customerName = document.getElementById("customerName");
  const customerPhone = document.getElementById("customerPhone");
  const customerGovernorate = document.getElementById("customerGovernorate"); // New
  const customerCitySelect = document.getElementById("customerCitySelect"); // New
  const customerAddress = document.getElementById("customerAddress");

  // Validate Name
  if (!customerName.value.trim()) {
    displayError("customerNameError", "الاسم كاملاً مطلوب.");
    isValid = false;
  } else {
    displayError("customerNameError", "");
  }

  // Validate Phone
  const phonePattern = /^[0-9]{10,}$/;
  if (!customerPhone.value.trim()) {
    displayError("customerPhoneError", "رقم الهاتف مطلوب.");
    isValid = false;
  } else if (!phonePattern.test(customerPhone.value.trim())) {
    displayError(
      "customerPhoneError",
      "الرجاء إدخال رقم هاتف صالح (10 أرقام على الأقل)."
    );
    isValid = false;
  } else {
    displayError("customerPhoneError", "");
  }

  // Validate Governorate
  if (customerGovernorate.value === "") {
    displayError("customerGovernorateError", "الرجاء اختيار المحافظة.");
    isValid = false;
  } else {
    displayError("customerGovernorateError", "");
  }

  // Validate City
  if (customerCitySelect.value === "") {
    displayError("customerCitySelectError", "الرجاء اختيار المدينة.");
    isValid = false;
  } else {
    displayError("customerCitySelectError", "");
  }

  // Validate Address
  if (!customerAddress.value.trim()) {
    displayError("customerAddressError", "العنوان مطلوب.");
    isValid = false;
  } else {
    displayError("customerAddressError", "");
  }

  return isValid;
}

/**
 * Helper function to display form errors.
 * @param {string} elementId - The ID of the error message div.
 * @param {string} message - The error message.
 */
function displayError(elementId, message) {
  const errorDiv = document.getElementById(elementId);
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = message ? "block" : "none";
    const inputElement = errorDiv.previousElementSibling; // Assuming label/input is before error div
    if (
      inputElement &&
      (inputElement.tagName === "INPUT" ||
        inputElement.tagName === "TEXTAREA" ||
        inputElement.tagName === "SELECT")
    ) {
      if (message) {
        inputElement.classList.add("invalid");
      } else {
        inputElement.classList.remove("invalid");
      }
    }
  }
}

/**
 * Populates the governorate select element.
 * @param {HTMLSelectElement} selectElement - The select element for governorates.
 */
function populateGovernorates(selectElement) {
  selectElement.innerHTML = '<option value="">اختر المحافظة</option>'; // Keep default option
  Object.keys(CITIES_DATA).forEach((governorate) => {
    const option = document.createElement("option");
    option.value = governorate;
    option.textContent = governorate;
    selectElement.appendChild(option);
  });
}

/**
 * Populates the city select element based on the selected governorate.
 * @param {string} governorate - The selected governorate.
 * @param {HTMLSelectElement} selectElement - The select element for cities.
 */
function populateCities(governorate, selectElement) {
  selectElement.innerHTML = '<option value="">اختر المدينة</option>'; // Reset cities
  if (governorate && CITIES_DATA[governorate]) {
    CITIES_DATA[governorate].forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      selectElement.appendChild(option);
    });
  }
}

/**
 * Submits the order, simulates sending to Telegram, and resets cart.
 */
async function submitOrder() {
  const customerName = document.getElementById("customerName").value;
  const customerPhone = document.getElementById("customerPhone").value;
  const customerGovernorate = document.getElementById(
    "customerGovernorate"
  ).value; // تحديث
  const customerCity = document.getElementById("customerCitySelect").value; // تحديث
  const customerAddress = document.getElementById("customerAddress").value;
  const shippingMethod = document.getElementById("shippingMethod").value;
  const finalTotal = document.getElementById("checkoutFinalTotal").textContent;

  const orderId = `#${Math.floor(10000 + Math.random() * 90000)}`; // Simple unique ID
  const orderDate = new Date().toLocaleString("ar-EG", {
    timeZone: "Africa/Cairo",
  });

  const orderDetails = {
    orderId: orderId,
    date: orderDate,
    customer: {
      name: customerName,
      phone: customerPhone,
      governorate: customerGovernorate, // إضافة المحافظة
      city: customerCity, // إضافة المدينة
      address: customerAddress,
    },
    items: cart.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      color: item.selectedColor,
      size: item.selectedSize,
    })),
    shippingMethod: shippingMethod,
    total: finalTotal,
    status: "قيد المراجعة", // Initial status
  };

  StorageManager.saveOrderHistory(orderDetails); // Save order to history

  // Send order to Telegram (simulated for frontend-only)
  const telegramMessage = formatOrderForTelegram(orderDetails);
  const sent = await sendOrderToTelegram(telegramMessage);

  if (sent) {
    cart = []; // Clear cart after successful order
    StorageManager.saveCart(cart);
    updateCartCount();
    updateCartUI();
    hideModal("checkoutModal");
    showToast("تم تأكيد طلبك بنجاح! رقم الطلب: " + orderId, "success");
    // Optionally show order tracking directly
    setTimeout(() => {
      document.getElementById("orderIdInput").value = orderId;
      trackOrder();
    }, 1000);
  } else {
    showToast("حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.", "error");
  }
}

/**
 * Formats order details into a human-readable message for Telegram.
 * @param {object} order - The order object.
 * @returns {string} - Formatted message string.
 */
function formatOrderForTelegram(order) {
  let message = `*طلب جديد!* \n\n`;
  message += `*رقم الطلب:* ${order.orderId}\n`;
  message += `*التاريخ:* ${order.date}\n\n`;
  message += `*بيانات العميل:*\n`;
  message += `الاسم: ${order.customer.name}\n`;
  message += `الهاتف: ${order.customer.phone}\n`;
  message += `المحافظة: ${order.customer.governorate}\n`; // إضافة المحافظة
  message += `المدينة: ${order.customer.city}\n`; // إضافة المدينة
  message += `العنوان بالتفصيل: ${order.customer.address}\n`;
  message += `طريقة الشحن: ${order.shippingMethod}\n\n`;
  message += `*المنتجات:*\n`;
  order.items.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (${item.quantity}x) - ${
      item.price
    } جنيه\n`;
    if (item.color) message += `   اللون: ${item.color}\n`;
    if (item.size) message += `   المقاس: ${item.size}\n`;
  });
  message += `\n*الإجمالي الكلي:* ${order.total}\n`;
  message += `*حالة الطلب:* ${order.status}\n`;
  return message;
}

/**
 * Sends a message to a Telegram bot.
 * NOTE: This requires a backend proxy or CORS setup for real-world use.
 * For this client-side example, it will likely fail due to CORS.
 * It's included to show the intended flow.
 * @param {string} message - The message to send.
 * @returns {Promise<boolean>} - True if successful, false otherwise.
 */
async function sendOrderToTelegram(message) {
  const { BOT_TOKEN, CHAT_ID } = TELEGRAM_CONFIG;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const params = new URLSearchParams({
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "Markdown", // Use Markdown for formatting
  });

  try {
    const response = await fetch(`${url}?${params.toString()}`, {
      method: "GET", // Or POST with body, GET is simpler for testing
    });
    const data = await response.json();
    if (!response.ok) {
      console.error("Telegram API Error:", data);
      showToast(
        "فشل إرسال الطلب إلى تيليجرام: " +
          (data.description || "خطأ غير معروف"),
        "error"
      );
      return false;
    }
    if (data.ok) {
      console.log("Order sent to Telegram:", data);
      return true;
    } else {
      console.error("Failed to send order to Telegram:", data);
      showToast(
        "فشل إرسال الطلب إلى تيليجرام: " +
          (data.description || "خطأ غير معروف"),
        "error"
      );
      return false;
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    showToast("حدث خطأ في الاتصال بخدمة تيليجرام.", "error");
    return false;
  }
}

/**
 * Shows the order tracking modal.
 */
function trackOrder() {
  hideModal("checkoutModal"); // Ensure checkout is hidden
  hideModal("productDetailModal"); // Ensure product detail is hidden
  document.getElementById("orderTrackingModal").classList.remove("hidden");
  document.getElementById("orderDetails").innerHTML = ""; // Clear previous results
  document.getElementById("orderIdInput").value = ""; // Clear input
}

/**
 * Finds and displays order details based on the entered order ID.
 */
function findOrderDetails() {
  const orderIdInput = document.getElementById("orderIdInput").value.trim();
  const orderDetailsDiv = document.getElementById("orderDetails");
  const orderHistory = StorageManager.getOrderHistory();

  orderDetailsDiv.innerHTML = ""; // Clear previous content

  if (!orderIdInput) {
    orderDetailsDiv.innerHTML = `<p style="color: #ff4757;">الرجاء إدخال رقم الطلب.</p>`;
    return;
  }

  const order = orderHistory.find((o) => o.orderId === orderIdInput);

  if (order) {
    let itemsHtml = order.items
      .map(
        (item) => `
        <li>
            ${item.name} (${item.quantity}x) - ${item.price} جنيه
            ${item.color ? ` (لون: ${item.color})` : ""}
            ${item.size ? ` (مقاس: ${item.size})` : ""}
        </li>
    `
      )
      .join("");

    orderDetailsDiv.innerHTML = `
            <h3>تفاصيل الطلب: ${order.orderId}</h3>
            <p><strong>تاريخ الطلب:</strong> ${order.date}</p>
            <p><strong>اسم العميل:</strong> ${order.customer.name}</p>
            <p><strong>رقم الهاتف:</strong> ${order.customer.phone}</p>
            <p><strong>العنوان:</strong> ${order.customer.address}, ${
      order.customer.city
    }</p>
            <p><strong>طريقة الشحن:</strong> ${
              order.shippingMethod === "standard" ? "شحن عادي" : "شحن سريع"
            }</p>
            <p><strong>إجمالي المبلغ:</strong> ${order.total}</p>
            <p><strong>المنتجات:</strong></p>
            <ul>${itemsHtml}</ul>
            <p class="order-status ${getStatusClass(
              order.status
            )}"><strong>الحالة:</strong> ${order.status}</p>
        `;
  } else {
    orderDetailsDiv.innerHTML = `<p style="color: #ff4757;">عذراً، لم يتم العثور على طلب بهذا الرقم. الرجاء التحقق من الرقم والمحاولة مرة أخرى.</p>`;
  }
}

/**
 * Returns a CSS class based on order status for styling.
 * @param {string} status - The order status.
 * @returns {string} - CSS class name.
 */
function getStatusClass(status) {
  switch (status) {
    case "قيد المراجعة":
      return "pending";
    case "قيد التجهيز":
      return "processing";
    case "تم الشحن":
      return "shipped";
    case "تم التسليم":
      return "delivered";
    case "ملغى":
      return "cancelled";
    default:
      return "";
  }
}

// ---------------------------------------------------------------------------------
// 6. FAVORITES PAGE
// ---------------------------------------------------------------------------------
/**
 * Loads and displays favorite products.
 */
function loadFavoritesPage() {
  currentPage = "favorites";
  document.getElementById("homePage").classList.add("hidden");
  document.getElementById("favoritesPage").classList.remove("hidden");
  document.getElementById("orderTrackingModal").classList.add("hidden"); // Hide tracking if open
  document.getElementById("productDetailModal").classList.add("hidden"); // Hide detail if open
  document.getElementById("checkoutModal").classList.add("hidden"); // Hide checkout if open

  const favoritesGrid = document.getElementById("favoritesGrid");
  const noFavoritesMessage = document.getElementById("noFavoritesMessage");

  favoritesGrid.innerHTML = ""; // Clear existing cards

  if (favorites.length === 0) {
    noFavoritesMessage.classList.remove("hidden");
    return;
  } else {
    noFavoritesMessage.classList.add("hidden");
  }

  const favoriteProducts = productsData.products.filter((product) =>
    favorites.includes(product.id)
  );

  if (favoriteProducts.length === 0) {
    noFavoritesMessage.classList.remove("hidden");
    return;
  }

  favoriteProducts.forEach((product, index) => {
    setTimeout(() => {
      const productCardHTML = createProductCardHTML(product);
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = productCardHTML;
      tempDiv.firstElementChild.style.animation = "fadeIn 0.5s ease forwards";
      favoritesGrid.appendChild(tempDiv.firstElementChild);
    }, index * 100);
  });
}

// Function to return to home page
function loadHomePage() {
  currentPage = "home";
  document.getElementById("favoritesPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
  document.getElementById("orderTrackingModal").classList.add("hidden"); // Hide tracking if open
  document.getElementById("productDetailModal").classList.add("hidden"); // Hide detail if open
  document.getElementById("checkoutModal").classList.add("hidden"); // Hide checkout if open
  loadProducts(); // Reload products for home page
}

// ---------------------------------------------------------------------------------
// 7. INITIALIZATION
// ---------------------------------------------------------------------------------

/**
 * Initializes the application on page load.
 */
document.addEventListener("DOMContentLoaded", () => {
  cart = StorageManager.loadCart();
  favorites = StorageManager.loadFavorites();
  loadProducts(); // Load products initially on home page
  updateCartCount();
  updateCartUI();
  setupOrderForm(); // Setup form submission listener
});
