// src/pages/Home.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { mockProducts, mockPartners, mockNews, mockProjects } from "../data/mockData";
import { categories } from "../data/categories";
import { ChevronRight, CheckCircle, Heart, BadgeCheck, Truck, Headphones, Zap, Globe, Calendar, Clock, Tag, Phone, Minus } from "lucide-react";
import AMB_headerbanner from "../assets/AMB_headerbanner.jpg";
import { CategoryIcon } from "../components/common/CategoryIcons";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [heroBackground, setHeroBackground] = useState<string>(AMB_headerbanner);
  
  // Animated text rotation
  const heroTexts = [
    "Hệ Thống Tủ Điều Khiển PLC Cao Cấp",
    "Giải Pháp Tự Động Hóa Toàn Diện",
    "Thiết Bị Điện Công Nghiệp Hàng Đầu",
    "Chuẩn ISO - Hiệu Suất Tối Ưu"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Sản phẩm bán chạy - 4 sản phẩm
  const bestSellers = [...mockProducts]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 4);

  // State cho wishlist
  const [wishlisted, setWishlisted] = useState<{[key: number]: boolean}>({});
  // State cho sản phẩm đã trong giỏ hàng
  const [inCartMap, setInCartMap] = useState<{[key: number]: boolean}>({});

  // Load wishlist từ localStorage
  useEffect(() => {
    const loadWishlist = () => {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        try {
          const wishlist = JSON.parse(savedWishlist);
          const wishlistMap: {[key: number]: boolean} = {};
          wishlist.forEach((item: any) => {
            wishlistMap[item.id] = true;
          });
          setWishlisted(wishlistMap);
        } catch (error) {
          console.error('Error loading wishlist:', error);
        }
      }
    };

    loadWishlist();

    const handleWishlistUpdate = () => {
      loadWishlist();
    };

    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    return () => {
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
    };
  }, []);

  // Load trạng thái giỏ hàng từ localStorage
  useEffect(() => {
    const loadCart = () => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const cart = JSON.parse(savedCart);
          const cartMap: { [key: number]: boolean } = {};
          if (Array.isArray(cart)) {
            cart.forEach((item: any) => {
              if (item && typeof item.id === 'number') {
                cartMap[item.id] = true;
              }
            });
          }
          setInCartMap(cartMap);
        } catch (error) {
          console.error('Error loading cart:', error);
        }
      } else {
        setInCartMap({});
      }
    };

    loadCart();

    const handleCartUpdate = () => {
      loadCart();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  // Toggle wishlist
  const handleToggleWishlist = (product: typeof mockProducts[0], e: React.MouseEvent) => {
    e.stopPropagation();
    
    const savedWishlist = localStorage.getItem('wishlist');
    let wishlist: typeof mockProducts = [];

    if (savedWishlist) {
      try {
        wishlist = JSON.parse(savedWishlist);
      } catch (error) {
        wishlist = [];
      }
    }

    const isInWishlist = wishlist.some((item) => item.id === product.id);

    if (isInWishlist) {
      wishlist = wishlist.filter((item) => item.id !== product.id);
      setWishlisted(prev => ({
        ...prev,
        [product.id]: false
      }));
    } else {
      wishlist.push(product);
      setWishlisted(prev => ({
        ...prev,
        [product.id]: true
      }));
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  // Listening for category change from Header
  useEffect(() => {
    const handleCategorySelect = (e: CustomEvent) => {
      const categorySlug = e.detail;
      const category = categories.find(c => c.slug === categorySlug);
      if (category) {
        setSelectedCategory(categorySlug);
        setHeroBackground(category.iconUrl);
      }
    };

    window.addEventListener('categorySelected', handleCategorySelect as EventListener);
    return () => {
      window.removeEventListener('categorySelected', handleCategorySelect as EventListener);
    };
  }, []);

  // Animated text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
        setFadeIn(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle Add/Remove Cart trực tiếp trên thẻ sản phẩm
  const handleAddToCart = (product: typeof mockProducts[0], e: React.MouseEvent) => {
    e.stopPropagation();
    
    const savedCart = localStorage.getItem('cart');
    let cart: typeof mockProducts = [];

    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          cart = parsed;
        }
      } catch (error) {
        cart = [];
      }
    }

    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex >= 0) {
      // Đã có trong giỏ -> xoá khỏi giỏ
      cart.splice(existingIndex, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cartUpdated'));
      setInCartMap((prev) => ({ ...prev, [product.id]: false }));
    } else {
      // Chưa có -> thêm vào giỏ
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cartUpdated'));
      setInCartMap((prev) => ({ ...prev, [product.id]: true }));
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32">
      {/* Hero Slider Banner */}
      <section className="relative w-full bg-slate-900 overflow-hidden h-[420px] sm:h-[480px] md:h-[500px]">
        <div 
          className="absolute inset-0 opacity-60 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url('${heroBackground}')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
          {/* Badge with animation */}
          <span className="animate-pulse bg-amber-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            ✨ Sản phẩm tiêu biểu
          </span>
          
          {/* Animated Title */}
          <h2 
            className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 max-w-2xl leading-tight transition-all duration-500 transform ${
              fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {heroTexts[currentTextIndex]}
          </h2>
          
          {/* Animated Subtitle */}
          <p className={`text-sm sm:text-lg text-slate-200 mb-6 sm:mb-8 max-w-xl transition-all duration-700 transform ${
            fadeIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            Giải pháp tự động hóa toàn diện cho nhà máy, thiết kế chuẩn ISO, bền bỉ và hiệu suất tối ưu.
          </p>
          
          {/* CTA Buttons with stagger animation */}
          <div className={`flex gap-3 sm:gap-4 transition-all duration-700 transform ${
            fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '0.1s' }}>
            <button 
              onClick={() => navigate("/san-pham")}
              className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 sm:px-8 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-all transform hover:scale-105 hover:shadow-xl"
            >
              Khám phá ngay
            </button>
            <button
              onClick={() => navigate("/lien-he")}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-5 py-2.5 sm:px-8 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Gửi yêu cầu tư vấn
            </button>
          </div>
          
          {/* Animated scroll indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-slate-300 font-medium">Cuộn để xem thêm</span>
              <svg className="w-5 h-5 text-amber-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="max-w-7xl mx-auto px-4 py-12 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quality */}
          <div className="bg-white p-6 rounded-xl flex items-center gap-5 border border-amber-200/50">
            <div className="bg-amber-500/10 p-4 rounded-full text-amber-600 flex items-center justify-center flex-shrink-0">
              <BadgeCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Chất lượng quốc tế</h3>
              <p className="text-sm text-slate-600">Sản phẩm đạt chuẩn IEC/ISO</p>
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-white p-6 rounded-xl flex items-center gap-5 border border-amber-200/50">
            <div className="bg-amber-500/10 p-4 rounded-full text-amber-600 flex items-center justify-center flex-shrink-0">
              <Truck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Giao hàng nhanh</h3>
              <p className="text-sm text-slate-600">Vận chuyển toàn quốc 24/7</p>
            </div>
          </div>

          {/* Support */}
          <button
            type="button"
            onClick={() => navigate("/quy-trinh-bao-gia")}
            className="bg-white p-6 rounded-xl flex items-center gap-5 border border-amber-200/50 text-left hover:border-amber-400 hover:shadow-md transition-all"
          >
            <div className="bg-amber-500/10 p-4 rounded-full text-amber-600 flex items-center justify-center flex-shrink-0">
              <Headphones className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Hỗ trợ kỹ thuật</h3>
              <p className="text-sm text-slate-600">Tư vấn giải pháp miễn phí</p>
            </div>
          </button>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Danh Mục Nổi Bật</h2>
            <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {categories.slice(0, 5).map((category) => (
              <div
                key={category.id}
                onClick={() => navigate(`/danh-muc/${category.slug}`)}
                className="group bg-white rounded-lg p-8 text-center border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all cursor-pointer hover:translateY-2"
              >
                <div className="w-16 h-16 mx-auto mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all flex items-center justify-center">
                  <CategoryIcon categorySlug={category.slug} size={56} />
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{category.count} sản phẩm</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Sản Phẩm Bán Chạy</h2>
            <div className="h-1.5 w-24 bg-amber-500 mt-2 rounded-full"></div>
          </div>
          <a 
            onClick={() => navigate("/san-pham")}
            className="text-amber-600 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
          >
            Xem tất cả <ChevronRight size={20} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 transition-all duration-300 cursor-pointer flex flex-col h-full"
              onClick={() => navigate(`/san-pham/${product.id}`)}
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100 flex-shrink-0">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-slate-400 text-xs font-medium uppercase tracking-tighter">
                  Mã: DGP-{String(product.id).padStart(3, '0')}
                </span>
                <h3 className="font-bold text-slate-800 mt-1 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex-grow"></div>

                {/* Giá */}
                <div className="mb-3">
                  <span className="text-amber-600 font-bold text-lg">Giá: Liên hệ</span>
                </div>
                
                {/* 2 nút: Yêu thích + Giỏ hàng */}
                <div className="flex gap-2">
                  {/* Nút yêu thích */}
                  <button
                    onClick={(e) => handleToggleWishlist(product, e)}
                    className={`flex-1 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all text-sm border-2 ${
                      wishlisted[product.id]
                        ? 'bg-red-500 text-white border-red-500 hover:bg-red-600'
                        : 'bg-white text-red-500 border-red-500 hover:bg-red-50'
                    }`}
                    aria-label="Thêm vào yêu thích"
                  >
                    <Heart size={16} className={wishlisted[product.id] ? 'fill-current' : ''} />
                    <span className="hidden sm:inline">Yêu thích</span>
                  </button>

                  {/* Nút giỏ hàng */}
                  <button 
                    className={`flex-1 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all text-sm hover:shadow-lg transform hover:scale-105 border-2 ${
                      inCartMap[product.id]
                        ? 'bg-white text-amber-600 border-amber-500 hover:bg-amber-50'
                        : 'bg-amber-500 hover:bg-amber-600 text-white border-amber-500'
                    }`}
                    onClick={(e) => handleAddToCart(product, e)}
                    aria-label={inCartMap[product.id] ? 'Bỏ khỏi giỏ hàng' : 'Thêm vào giỏ hàng'}
                  >
                    {inCartMap[product.id] ? (
                      <span className="relative inline-flex items-center justify-center">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                        <span className="absolute -top-1 -right-1 bg-amber-500 text-white rounded-full p-[1px] flex items-center justify-center">
                          <Minus className="w-2.5 h-2.5" />
                        </span>
                      </span>
                    ) : (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    )}
                    <span className="hidden sm:inline">
                      {inCartMap[product.id] ? 'Loại bỏ' : 'Thêm vào'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-amber-50/50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl"></div>
            <img 
              src={AMB_headerbanner}
              alt="Electrical engineer working"
              className="rounded-2xl relative z-10 w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-900">
              Giải Pháp Cơ Điện Toàn Diện
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Duy Gia Phát tự hào là đơn vị hàng đầu cung cấp giải pháp thiết kế và lắp đặt hệ thống điện công nghiệp. Chúng tôi cam kết mang lại sản phẩm an toàn, tiết kiệm và hiện đại nhất cho dự án của bạn.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <span>Tư vấn kỹ thuật chuyên sâu từ chuyên gia</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <span>Thi công nhanh chóng, đúng tiến độ cam kết</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <span>Bảo hành dài hạn lên tới 24 tháng</span>
              </li>
            </ul>
            <button
              onClick={() => navigate("/lien-he")}
              className="bg-slate-900 text-white px-6 py-3 md:px-10 md:py-4 rounded-lg font-bold text-sm md:text-base hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              <Phone size={18} />
              Liên hệ tư vấn ngay
            </button>
          </div>
        </div>
      </section>

      {/* Partner Brands Section */}
      <section className="bg-slate-900/5 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Các Thương Hiệu Hợp Tác</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Duy Gia Phát hợp tác với các nhà cung cấp hàng đầu thế giới để mang lại sản phẩm chất lượng cao nhất.
            </p>
            <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mockPartners.slice(0, 6).map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-lg p-6 flex items-center justify-center h-32 border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="text-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-amber-600 group-hover:scale-110 transition-all">
                    {partner.logo}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/doi-tac"
              className="text-amber-600 hover:text-amber-700 font-bold flex items-center gap-2 justify-center"
            >
              Xem tất cả đối tác <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Dự Án Tiêu Biểu</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-3">
            Sự tin tưởng của các tập đoàn lớn là niềm chúc của Duy Gia Phát.
          </p>
          <div className="h-1.5 w-24 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/du-an/${project.id}`)}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-64 bg-slate-900"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 z-10"></div>
                <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                  <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    🏭
                  </div>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-amber-400 font-semibold text-sm">
                  {project.category}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 z-15 flex items-center justify-center">
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-bold transition-all">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/du-an"
            className="text-amber-600 hover:text-amber-700 font-bold flex items-center gap-2 justify-center"
          >
            Xem tất cả dự án <ChevronRight size={20} />
          </a>
        </div>
      </section>

      {/* News Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">Tin tức & Bài viết</h2>
          <a
            href="/tin-tuc"
            className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Xem tất cả <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNews.slice(0, 3).map((article) => (
            <a
              key={article.id}
              href={`/tin-tuc/${article.id}`}
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:border-amber-200 transition-all"
            >
              {/* Article Image */}
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Article Content */}
              <div className="p-5">
                {/* Category & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Tag size={14} className="text-amber-500" />
                    <span className="text-xs font-bold text-amber-600 uppercase">{article.category}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={14} />
                    {article.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm mb-3 line-clamp-2 group-hover:text-amber-600 transition">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-gray-600 line-clamp-2 mb-4">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                <div className="text-amber-600 font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                  Đọc thêm <ChevronRight size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-16 sm:py-20 md:py-24 overflow-hidden relative">
        {/* Animated Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-0 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5 -z-0">
          <div className="absolute inset-0 bg-cover" style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,200,87,0.05) 25%, rgba(255,200,87,0.05) 26%, transparent 27%, transparent 74%, rgba(255,200,87,0.05) 75%, rgba(255,200,87,0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,200,87,0.05) 25%, rgba(255,200,87,0.05) 26%, transparent 27%, transparent 74%, rgba(255,200,87,0.05) 75%, rgba(255,200,87,0.05) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          {/* Animated Title */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 animate-slideInDown">
            Bạn Cần Tư Vấn Giải Pháp Điện Công Nghiệp?
          </h2>
          
          {/* Animated Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 sm:mb-10 max-w-3xl mx-auto animate-fadeInScale" style={{ animationDelay: '0.2s' }}>
            Duy Gia Phát sẵn sàng hỗ trợ bạn với các giải pháp điện hàng đầu, tư vấn miễn phí từ các chuyên gia có chứng chỉ quốc tế.
          </p>

          {/* Animated Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInScale" style={{ animationDelay: '0.4s' }}>
            {/* Phone Button */}
            <a
              href="tel:0976707297"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 md:px-10 md:py-4 rounded-lg font-bold text-sm sm:text-base transition-all transform hover:scale-110 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-amber-500/50 relative group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform translate-x-full group-hover:translate-x-0 transition-all duration-700"></span>
              <span className="text-xl sm:text-2xl group-hover:animate-bounce">📞</span> 
              <span className="relative">Gọi: 0976707297</span>
            </a>

            {/* Chat Zalo Button */}
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white px-6 py-3 md:px-10 md:py-4 rounded-lg font-bold text-sm sm:text-base transition-all transform hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-white/10 relative group overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></span>
              <span className="flex items-center justify-center gap-2 relative">
                <span className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform">💬</span> 
                <span>Chat Zalo</span>
              </span>
            </button>
          </div>

          {/* Animated Footer Text */}
          <p className="text-slate-400 mt-8 text-sm animate-fadeInScale" style={{ animationDelay: '0.6s' }}>
            Thời gian phản hồi: &lt; 15 phút | Hỗ trợ: 8:00 - 17:00 (Thứ 2 - Thứ 6)
          </p>
        </div>
      </section>
    </div>
  );
}