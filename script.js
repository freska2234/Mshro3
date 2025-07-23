// =================================================================================
// E-COMMERCE SCRIPT WITH ROUTING SYSTEM
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
      returnPolicy: "إمكانية الاسترجاع خلال 21 يوم من الاستلام",
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
  BOT_TOKEN: "7254345779:AAF2IY-f42Vj4Zgai5dlCK7yxpWhz4_S7Ac",
  CHAT_ID: "5895491379",
};

// بيانات المحافظات والمدن
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
let recentOrders = [];
let currentProduct = null;
let selectedColor = "";
let selectedSize = "";

// Make these globally accessible
window.cart = cart;
window.favorites = favorites;

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
// 2. ORDER RATE LIMITING & SPAM PROTECTION
// ---------------------------------------------------------------------------------

const OrderLimiter = {
  MAX_ORDERS_PER_DAY: 10,
  COOLDOWN_MINUTES: 2, // منع الطلبات المتكررة لمدة دقيقتين

  getOrdersToday: () => {
    const today = new Date().toDateString();
    const ordersHistory = StorageManager.getOrderHistory();
    return ordersHistory.filter((order) => {
      const orderDate = new Date(order.date).toDateString();
      return orderDate === today;
    });
  },

  getLastOrderTime: () => {
    const ordersHistory = StorageManager.getOrderHistory();
    if (ordersHistory.length === 0) return null;
    return new Date(ordersHistory[0].date);
  },

  canPlaceOrder: () => {
    // Check daily limit
    const todayOrders = OrderLimiter.getOrdersToday();
    if (todayOrders.length >= OrderLimiter.MAX_ORDERS_PER_DAY) {
      return {
        allowed: false,
        reason: `تم الوصول للحد الأقصى من الطلبات اليوم (${OrderLimiter.MAX_ORDERS_PER_DAY} طلبات). حاول مرة أخرى غداً.`,
      };
    }

    // Check cooldown period
    const lastOrderTime = OrderLimiter.getLastOrderTime();
    if (lastOrderTime) {
      const timeDiff = (new Date() - lastOrderTime) / (1000 * 60); // in minutes
      if (timeDiff < OrderLimiter.COOLDOWN_MINUTES) {
        const remainingTime = Math.ceil(
          OrderLimiter.COOLDOWN_MINUTES - timeDiff
        );
        return {
          allowed: false,
          reason: `يرجى الانتظار ${remainingTime} دقيقة قبل إرسال طلب جديد.`,
        };
      }
    }

    return { allowed: true };
  },
};

// ---------------------------------------------------------------------------------
// 3. CART FUNCTIONS
// ---------------------------------------------------------------------------------

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
        <button class="remove-item" onclick="removeItemFromCart(${item.id}, '${
      item.selectedColor
    }', '${item.selectedSize}')">
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
        <span class="cart-item-price">${item.price * item.quantity} جنيه</span>
      </div>
    `;
    cartItemsEl.innerHTML += cartItemHTML;
  });

  cartTotalEl.textContent = `${subtotal} جنيه`;

  const shipping = calculateShipping();
  shippingCostEl.textContent = `${shipping} جنيه`;
  finalTotalEl.textContent = `${subtotal + shipping} جنيه`;

  checkoutBtn.disabled = false;
  checkoutBtn.style.opacity = "1";
}

function addToCart(
  productId,
  quantity = 1,
  selectedColor = "",
  selectedSize = ""
) {
  const product = productsData.products.find((p) => p.id === productId);
  if (!product) return;

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

function quickAddToCart(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  if (!product) return;

  if (
    (product.colors && product.colors.length > 0) ||
    (product.sizes && product.sizes.length > 0)
  ) {
    router.navigate(`/product/${productId}`);
    showToast("الرجاء اختيار الخيارات قبل الشراء.", "info");
  } else {
    addToCart(productId, 1, "", "");
    toggleCart();
  }
}

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
      cart.splice(itemIndex, 1);
    }
    StorageManager.saveCart(cart);
    updateCartCount();
    updateCartUI();
  }
}

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

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("open");
}

function calculateShipping() {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  if (subtotal >= 1000) {
    return 0;
  } else if (subtotal > 0) {
    return 50;
  }
  return 0;
}

// ---------------------------------------------------------------------------------
// 4. FAVORITES FUNCTIONS
// ---------------------------------------------------------------------------------

function updateFavoritesCount() {
  const favCountEl = document.getElementById("favoritesCount");
  if (favCountEl) {
    favCountEl.textContent = favorites.length;
    favCountEl.style.display = favorites.length > 0 ? "flex" : "none";
  }
}

function toggleFavorite(event, productId, fromDetail = false) {
  event.stopPropagation();

  const index = favorites.indexOf(productId);
  if (index > -1) {
    favorites.splice(index, 1);
    showToast("تمت إزالة المنتج من المفضلة.", "success");
  } else {
    favorites.push(productId);
    showToast("تمت إضافة المنتج إلى المفضلة.", "success");
  }

  StorageManager.saveFavorites(favorites);
  updateFavoritesCount();

  // Update UI based on current page
  if (router.currentRoute === "/") {
    router.loadProducts();
  } else if (router.currentRoute === "/favorites") {
    router.loadFavoriteProducts();
  } else if (router.currentRoute.startsWith("/product/")) {
    // Update the button in the product page
    const favBtn = document.querySelector(".favorite-btn");
    if (favBtn) {
      const isFavorite = favorites.includes(productId);
      favBtn.classList.toggle("active", isFavorite);
      favBtn.querySelector("i").className = isFavorite
        ? "fas fa-heart"
        : "far fa-heart";
      favBtn.innerHTML = `<i class="${
        isFavorite ? "fas" : "far"
      } fa-heart"></i> ${isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}`;
    }
  }
}

// ---------------------------------------------------------------------------------
// 5. PRODUCT PAGE FUNCTIONS
// ---------------------------------------------------------------------------------

function changeMainImage(imageSrc, clickedThumbnail) {
  const mainImage = document.getElementById("mainImage");
  if (mainImage) {
    mainImage.src = imageSrc;
    document.querySelectorAll(".thumbnail").forEach((thumb) => {
      thumb.classList.remove("active");
    });
    clickedThumbnail.classList.add("active");
  }
}

function selectOption(type, value) {
  if (type === "color") {
    selectedColor = value;
    document.querySelectorAll(".color-box").forEach((box) => {
      box.classList.remove("selected");
      if (box.dataset.color === value) {
        box.classList.add("selected");
      }
    });
  } else if (type === "size") {
    selectedSize = value;
    document.querySelectorAll(".size-btn").forEach((btn) => {
      btn.classList.remove("selected");
      if (btn.dataset.size === value) {
        btn.classList.add("selected");
      }
    });
  }
}

function changeDetailQuantity(delta) {
  const quantityEl = document.getElementById("detailQuantity");
  if (quantityEl) {
    let quantity = parseInt(quantityEl.textContent);
    quantity = Math.max(1, quantity + delta);
    quantityEl.textContent = quantity;
  }
}

function addToCartFromProductPage(productId) {
  const product = productsData.products.find((p) => p.id === productId);
  if (!product) return;

  const selectedQuantity = parseInt(
    document.getElementById("detailQuantity")?.textContent || "1"
  );

  if (product.colors && !selectedColor) {
    showToast("الرجاء اختيار لون المنتج.", "error");
    return;
  }
  if (product.sizes && !selectedSize) {
    showToast("الرجاء اختيار مقاس المنتج.", "error");
    return;
  }

  addToCart(productId, selectedQuantity, selectedColor, selectedSize);
  toggleCart();
}

function openTab(event, tabName) {
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach((content) => content.classList.add("hidden"));

  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => button.classList.remove("active"));

  const targetTab = document.getElementById(tabName);
  if (targetTab) {
    targetTab.classList.remove("hidden");
  }
  event.currentTarget.classList.add("active");
}

// ---------------------------------------------------------------------------------
// 6. FILTERING AND SEARCH
// ---------------------------------------------------------------------------------

function filterProducts() {
  const searchTerm =
    document.getElementById("searchInput")?.value.toLowerCase() || "";
  const category = document.getElementById("categoryFilter")?.value || "all";
  const priceRange = document.getElementById("priceFilter")?.value || "all";

  const productsGrid = document.getElementById("productsGrid");
  if (!productsGrid) return;

  let filtered = productsData.products.filter((product) => {
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

  productsGrid.innerHTML = "";

  if (filtered.length === 0) {
    productsGrid.innerHTML = `<p style="text-align: center; width: 100%; color: rgba(255,255,255,0.7); font-size: 18px; margin-top: 50px;">لا توجد منتجات مطابقة لمعايير البحث.</p>`;
    return;
  }

  filtered.forEach((product, index) => {
    setTimeout(() => {
      const productCardHTML = router.createProductCardHTML(product);
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = productCardHTML;
      tempDiv.firstElementChild.style.animation = "fadeIn 0.5s ease forwards";
      productsGrid.appendChild(tempDiv.firstElementChild);
    }, index * 100);
  });
}

// ---------------------------------------------------------------------------------
// 7. CHECKOUT FUNCTIONS WITH ANTI-SPAM
// ---------------------------------------------------------------------------------

let isSubmittingOrder = false; // منع الضغط المتكرر

function showCheckoutForm() {
  toggleCart();

  // Check if user can place order
  const orderCheck = OrderLimiter.canPlaceOrder();
  if (!orderCheck.allowed) {
    showToast(orderCheck.reason, "error");
    return;
  }

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

  // Reset form state
  isSubmittingOrder = false;
  updateSubmitButton();
}

function updateSubmitButton() {
  const submitBtn = document.querySelector(
    '#checkoutForm button[type="submit"]'
  );
  if (!submitBtn) return;

  if (isSubmittingOrder) {
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> جاري إرسال الطلب...';
    submitBtn.style.opacity = "0.7";
  } else {
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> تأكيد الطلب';
    submitBtn.style.opacity = "1";
  }
}

function setupOrderForm() {
  const checkoutForm = document.getElementById("checkoutForm");
  const customerGovernorateSelect = document.getElementById(
    "customerGovernorate"
  );
  const customerCitySelect = document.getElementById("customerCitySelect");

  populateGovernorates(customerGovernorateSelect);

  customerGovernorateSelect.addEventListener("change", () => {
    populateCities(customerGovernorateSelect.value, customerCitySelect);
    if (!customerGovernorateSelect.value) {
      customerCitySelect.disabled = true;
      customerCitySelect.innerHTML = '<option value="">اختر المدينة</option>';
    } else {
      customerCitySelect.disabled = false;
    }
  });

  if (checkoutForm) {
    checkoutForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      // Prevent multiple submissions
      if (isSubmittingOrder) {
        showToast("جاري معالجة طلبك، يرجى الانتظار...", "info");
        return;
      }

      // Check rate limiting again before submission
      const orderCheck = OrderLimiter.canPlaceOrder();
      if (!orderCheck.allowed) {
        showToast(orderCheck.reason, "error");
        return;
      }

      if (validateCheckoutForm()) {
        isSubmittingOrder = true;
        updateSubmitButton();

        try {
          await submitOrder();
        } catch (error) {
          console.error("Order submission error:", error);
          showToast(
            "حدث خطأ أثناء إرسال الطلب. الرجاء المحاولة مرة أخرى.",
            "error"
          );
        } finally {
          isSubmittingOrder = false;
          updateSubmitButton();
        }
      } else {
        showToast("الرجاء مراجعة البيانات المدخلة.", "error");
      }
    });
  }
}

function validateCheckoutForm() {
  let isValid = true;
  const customerName = document.getElementById("customerName");
  const customerPhone = document.getElementById("customerPhone");
  const customerGovernorate = document.getElementById("customerGovernorate");
  const customerCitySelect = document.getElementById("customerCitySelect");
  const customerAddress = document.getElementById("customerAddress");

  if (!customerName.value.trim()) {
    displayError("customerNameError", "الاسم كاملاً مطلوب.");
    isValid = false;
  } else {
    displayError("customerNameError", "");
  }

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

  if (customerGovernorate.value === "") {
    displayError("customerGovernorateError", "الرجاء اختيار المحافظة.");
    isValid = false;
  } else {
    displayError("customerGovernorateError", "");
  }

  if (customerCitySelect.value === "") {
    displayError("customerCitySelectError", "الرجاء اختيار المدينة.");
    isValid = false;
  } else {
    displayError("customerCitySelectError", "");
  }

  if (!customerAddress.value.trim()) {
    displayError("customerAddressError", "العنوان مطلوب.");
    isValid = false;
  } else {
    displayError("customerAddressError", "");
  }

  return isValid;
}

function displayError(elementId, message) {
  const errorDiv = document.getElementById(elementId);
  if (errorDiv) {
    errorDiv.textContent = message;
    errorDiv.style.display = message ? "block" : "none";
    const inputElement = errorDiv.previousElementSibling;
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

function populateGovernorates(selectElement) {
  selectElement.innerHTML = '<option value="">اختر المحافظة</option>';
  Object.keys(CITIES_DATA).forEach((governorate) => {
    const option = document.createElement("option");
    option.value = governorate;
    option.textContent = governorate;
    selectElement.appendChild(option);
  });
}

function populateCities(governorate, selectElement) {
  selectElement.innerHTML = '<option value="">اختر المدينة</option>';
  if (governorate && CITIES_DATA[governorate]) {
    CITIES_DATA[governorate].forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      selectElement.appendChild(option);
    });
  }
}

async function submitOrder() {
  const customerName = document.getElementById("customerName").value;
  const customerPhone = document.getElementById("customerPhone").value;
  const customerGovernorate = document.getElementById(
    "customerGovernorate"
  ).value;
  const customerCity = document.getElementById("customerCitySelect").value;
  const customerAddress = document.getElementById("customerAddress").value;
  const shippingMethod = document.getElementById("shippingMethod").value;
  const finalTotal = document.getElementById("checkoutFinalTotal").textContent;

  const orderId = `#${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const orderDate = new Date().toISOString();

  const orderDetails = {
    orderId: orderId,
    date: orderDate,
    customer: {
      name: customerName,
      phone: customerPhone,
      governorate: customerGovernorate,
      city: customerCity,
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
    status: "قيد المراجعة",
  };

  // Save order before sending to prevent data loss
  StorageManager.saveOrderHistory(orderDetails);

  const telegramMessage = formatOrderForTelegram(orderDetails);

  try {
    const sent = await sendOrderToTelegram(telegramMessage);

    if (sent) {
      // Clear cart after successful order
      cart = [];
      StorageManager.saveCart(cart);
      window.cart = cart;

      updateCartCount();
      updateCartUI();
      hideModal("checkoutModal");

      showToast("تم تأكيد طلبك بنجاح! رقم الطلب: " + orderId, "success");

      // Show order tracking after a delay
      setTimeout(() => {
        document.getElementById("orderIdInput").value = orderId;
        trackOrder();
      }, 2000);
    } else {
      // If telegram failed, still keep the order but inform user
      showToast(
        "تم حفظ طلبك محلياً، لكن فشل إرسال الإشعار. رقم الطلب: " + orderId,
        "info"
      );

      // Clear cart anyway since order is saved
      cart = [];
      StorageManager.saveCart(cart);
      window.cart = cart;

      updateCartCount();
      updateCartUI();
      hideModal("checkoutModal");
    }
  } catch (error) {
    console.error("Order submission failed:", error);
    showToast(
      "حدث خطأ أثناء إرسال الطلب. تم حفظ طلبك محلياً برقم: " + orderId,
      "error"
    );

    // Still clear cart as order is saved locally
    cart = [];
    StorageManager.saveCart(cart);
    window.cart = cart;

    updateCartCount();
    updateCartUI();
    hideModal("checkoutModal");
  }
}

function formatOrderForTelegram(order) {
  let message = `*طلب جديد!* \n\n`;
  message += `*رقم الطلب:* ${order.orderId}\n`;
  message += `*التاريخ:* ${order.date}\n\n`;
  message += `*بيانات العميل:*\n`;
  message += `الاسم: ${order.customer.name}\n`;
  message += `الهاتف: ${order.customer.phone}\n`;
  message += `المحافظة: ${order.customer.governorate}\n`;
  message += `المدينة: ${order.customer.city}\n`;
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

async function sendOrderToTelegram(message) {
  const { BOT_TOKEN, CHAT_ID } = TELEGRAM_CONFIG;
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const params = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: "Markdown",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Telegram API Error:", data);
      return false;
    }

    if (data.ok) {
      console.log("Order sent to Telegram successfully:", data);
      return true;
    } else {
      console.error("Failed to send order to Telegram:", data);
      return false;
    }
  } catch (error) {
    console.error("Network error sending message to Telegram:", error);
    return false;
  }
}

// ---------------------------------------------------------------------------------
// 8. ORDER TRACKING
// ---------------------------------------------------------------------------------

function trackOrder() {
  hideModal("checkoutModal");
  document.getElementById("orderTrackingModal").classList.remove("hidden");
  document.getElementById("orderDetails").innerHTML = "";
  document.getElementById("orderIdInput").value = "";
}

function findOrderDetails() {
  const orderIdInput = document.getElementById("orderIdInput").value.trim();
  const orderDetailsDiv = document.getElementById("orderDetails");
  const orderHistory = StorageManager.getOrderHistory();

  orderDetailsDiv.innerHTML = "";

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

function showOrderDetails(orderId) {
  document.getElementById("orderIdInput").value = orderId;
  trackOrder();
  findOrderDetails();
}

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
// 9. UI UTILITIES
// ---------------------------------------------------------------------------------

function hideModal(modalId) {
  document.getElementById(modalId).classList.add("hidden");
}

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
  }, 3000);
}

// ---------------------------------------------------------------------------------
// 10. INITIALIZATION
// ---------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Load data first
  cart = StorageManager.loadCart();
  favorites = StorageManager.loadFavorites();

  // Make globally accessible
  window.cart = cart;
  window.favorites = favorites;

  // Update UI
  updateCartCount();
  updateCartUI();
  updateFavoritesCount();
  setupOrderForm();

  // Initialize selected options
  selectedColor = "";
  selectedSize = "";

  console.log(
    "Script loaded, cart:",
    cart.length,
    "favorites:",
    favorites.length
  );
});
