import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, Heart, CheckCircle, Truck, Headphones } from "lucide-react";
import { mockProducts } from "../../data/mockData";
import logo from "../../assets/logo.png";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showMobileSearchBar, setShowMobileSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryMobile, setSearchQueryMobile] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showSuggestionsMobile, setShowSuggestionsMobile] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const searchRefMobile = useRef<HTMLDivElement>(null);

  // Load wishlist count từ localStorage
  useEffect(() => {
    const loadCounts = () => {
      // Load wishlist
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        try {
          const wishlist = JSON.parse(savedWishlist);
          setWishlistCount(wishlist.length);
        } catch (error) {
          setWishlistCount(0);
        }
      }
      // Load cart
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const cart = JSON.parse(savedCart);
          setCartCount(cart.length);
        } catch (error) {
          setCartCount(0);
        }
      }
    };

    loadCounts();

    const handleStorageChange = () => {
      loadCounts();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('wishlistUpdated', handleStorageChange);
    window.addEventListener('cartUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('wishlistUpdated', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange);
    };
  }, []);

  const mainMenu = [
    { label: "Giới thiệu", path: "/gioi-thieu" },
    { label: "Sản phẩm", path: "/san-pham" },
    { label: "Dịch vụ", path: "/dich-vu" },
    { label: "Dự án", path: "/du-an" },
    { label: "Tin tức", path: "/tin-tuc" },
    { label: "Liên hệ", path: "/lien-he" },
  ];

  // Lọc sản phẩm gợi ý
  const suggestions = searchQuery.trim()
    ? mockProducts
        .filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  const suggestionsMobile = searchQueryMobile.trim()
    ? mockProducts
        .filter((p) =>
          p.name.toLowerCase().includes(searchQueryMobile.toLowerCase())
        )
        .slice(0, 5)
    : [];

  // Click outside để đóng suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
      if (searchRefMobile.current && !searchRefMobile.current.contains(event.target as Node)) {
        setShowSuggestionsMobile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tim-kiem?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setShowSuggestions(false);
    }
  };

  const handleSearchMobile = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQueryMobile.trim()) {
      navigate(`/tim-kiem?q=${encodeURIComponent(searchQueryMobile.trim())}`);
      setSearchQueryMobile("");
      setShowSuggestionsMobile(false);
      setSidebarOpen(false);
    }
  };

  const handleSuggestionClick = (productId: number) => {
    navigate(`/san-pham/${productId}`);
    setSearchQuery("");
    setShowSuggestions(false);
  };

  const handleSuggestionClickMobile = (productId: number) => {
    navigate(`/san-pham/${productId}`);
    setSearchQueryMobile("");
    setShowSuggestionsMobile(false);
    setSidebarOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Utility Bar - FIXED */}
      <div className="bg-gray-900 text-white py-2 text-xs md:text-sm font-medium border-b border-gray-800 hidden md:block fixed top-0 left-0 right-0 z-40 h-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-4 h-full">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle size={18} className="text-amber-500" />
              <span>Chất lượng quốc tế</span>
            </div>
            <div className="flex items-center gap-2 border-l border-gray-700 pl-6">
              <Truck size={18} className="text-amber-500" />
              <span>Giao hàng nhanh</span>
            </div>
            <button
              type="button"
              onClick={() => navigate("/quy-trinh-bao-gia")}
              className="flex items-center gap-2 border-l border-gray-700 pl-6 hover:text-amber-400 transition-colors"
            >
              <Headphones size={18} className="text-amber-500" />
              <span>Hỗ trợ kỹ thuật</span>
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-4 text-xs">
            <span>Hotline: 0976707297</span>
            <span className="text-gray-600">|</span>
            <span>Email: info@duygiaphat.com.vn</span>
          </div>
        </div>
      </div>

      {/* Main Header - positioned below utility bar */}
      <header className="bg-white fixed top-0 md:top-10 left-0 right-0 z-50 border-b border-gray-100 h-20">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full gap-4">
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <img
                src={logo}
                alt="Duy Gia Phát Logo"
                className="h-12 sm:h-16 md:h-18 w-auto hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center flex-1 justify-center gap-8">
              {mainMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium text-sm whitespace-nowrap transition-colors ${
                    isActive(item.path)
                      ? "text-amber-600"
                      : "text-gray-700 hover:text-amber-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop: Search + Wishlist + Cart + User */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Search Desktop */}
              <div ref={searchRef} className="relative w-64">
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowSuggestions(true);
                      }}
                      onFocus={() => setShowSuggestions(true)}
                      placeholder="Tìm kiếm thiết bị..."
                      className="w-full pl-9 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    />
                    <button
                      type="submit"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-600 transition"
                    >
                      <Search size={16} />
                    </button>
                  </div>
                </form>

                {/* Suggestions Desktop */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-100 z-50 max-h-96 overflow-y-auto">
                    <div className="p-2">
                      <p className="px-3 py-2 text-xs text-gray-500 font-medium">Gợi ý sản phẩm</p>
                      {suggestions.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleSuggestionClick(product.id)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-amber-50 rounded-lg transition text-left"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-800 line-clamp-1">
                              {product.name}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-amber-600">⭐ {product.rating}</span>
                              <span className="text-xs text-gray-500">{product.sales} lượt</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Wishlist Icon */}
              <Link
                to="/yeu-thich"
                className="relative p-2.5 rounded-full hover:bg-red-50 transition-all group"
                aria-label="Sản phẩm yêu thích"
              >
                <Heart 
                  size={22} 
                  className={`transition-colors ${
                    isActive('/yeu-thich')
                      ? 'text-red-500 fill-current'
                      : 'text-gray-600 group-hover:text-red-500'
                  }`}
                />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Icon */}
              <button 
                onClick={() => navigate('/gio-hang')}
                className="relative p-2.5 rounded-full hover:bg-gray-100 transition-all"
              >
                <ShoppingCart size={22} className="text-gray-700 hover:text-amber-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>

              {/* User Icon */}
              {/* <button className="p-2.5 rounded-full hover:bg-gray-100 transition-all">
                <User size={22} className="text-gray-700 hover:text-amber-600" />
              </button> */}
            </div>

            {/* Mobile: Search icon + Wishlist + Cart + Menu */}
            <div className="flex lg:hidden items-center gap-1">
              {/* Search toggle icon */}
              <button
                type="button"
                onClick={() => setShowMobileSearchBar((prev) => !prev)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Tìm kiếm sản phẩm"
              >
                <Search size={20} className="text-gray-700" />
              </button>

              {/* Wishlist Mobile */}
              <Link
                to="/yeu-thich"
                className="relative p-2 rounded-full hover:bg-red-50 transition-all"
                aria-label="Sản phẩm yêu thích"
              >
                <Heart
                  size={20}
                  className={`transition-colors ${
                    isActive('/yeu-thich')
                      ? 'text-red-500 fill-current'
                      : 'text-gray-600'
                  }`}
                />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Mobile */}
              <button
                onClick={() => navigate('/gio-hang')}
                className="relative p-2 rounded-full hover:bg-gray-100"
                aria-label="Giỏ hàng"
              >
                <ShoppingCart size={20} className="text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-[10px] animate-pulse">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>

              {/* Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
                aria-label="Mở menu"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile search bar dropdown (hiển thị bên dưới header) */}
      {showMobileSearchBar && (
        <div className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <form onSubmit={handleSearchMobile} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQueryMobile}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchQueryMobile(value);
                    setShowSuggestionsMobile(value.trim().length > 0);
                  }}
                  onFocus={() => {
                    if (searchQueryMobile.trim()) {
                      setShowSuggestionsMobile(true);
                    }
                  }}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full pl-9 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
                <button
                  type="submit"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <Search size={16} />
                </button>

                {/* Gợi ý tìm kiếm Mobile dưới input */}
                {showSuggestionsMobile && suggestionsMobile.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-100 max-h-80 overflow-y-auto shadow-lg z-50">
                    <div className="p-2">
                      {suggestionsMobile.map((product) => (
                        <button
                          key={product.id}
                          type="button"
                          onClick={() => handleSuggestionClickMobile(product.id)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-amber-50 rounded-lg transition text-left text-sm"
                        >
                          <span className="font-medium text-gray-800 line-clamp-1">{product.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 overflow-y-auto">
            {/* Header Sidebar */}
            <div className="p-6 border-b flex items-center justify-between sticky top-0 bg-white z-10">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setSidebarOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg">
                <X size={24} />
              </button>
            </div>

            {/* Search Sidebar */}
            <div ref={searchRefMobile} className="px-4 py-4 border-b relative">
              <form onSubmit={handleSearchMobile}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQueryMobile}
                    onChange={(e) => {
                      setSearchQueryMobile(e.target.value);
                      setShowSuggestionsMobile(true);
                    }}
                    onFocus={() => setShowSuggestionsMobile(true)}
                    placeholder="Tìm kiếm sản phẩm..."
                    className="w-full pl-9 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                  <button type="submit" className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search size={16} />
                  </button>
                </div>
              </form>

              {/* Suggestions Mobile */}
              {showSuggestionsMobile && suggestionsMobile.length > 0 && (
                <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-xl border border-gray-100 z-50 max-h-80 overflow-y-auto">
                  <div className="p-2">
                    {suggestionsMobile.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleSuggestionClickMobile(product.id)}
                        className="w-full flex items-center gap-3 p-3 hover:bg-amber-50 rounded-lg transition text-left text-sm"
                      >
                        <span className="font-medium text-gray-800 line-clamp-1">{product.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Menu Items (Mobile sidebar: text & padding gọn hơn) */}
            <div className="p-3 space-y-2">
              {mainMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`block py-2.5 px-3 rounded-lg transition font-medium text-sm ${
                    isActive(item.path)
                      ? "bg-amber-100 text-amber-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Wishlist Link in Mobile */}
              <Link
                to="/yeu-thich"
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3 rounded-lg transition font-medium text-sm ${
                  isActive('/yeu-thich')
                    ? "bg-amber-100 text-amber-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Heart size={18} className={isActive('/yeu-thich') ? 'fill-current' : ''} />
                  Yêu thích
                </span>
                {wishlistCount > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Link in Mobile */}
              <Link
                to="/gio-hang"
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3 rounded-lg transition font-medium text-sm ${
                  isActive('/gio-hang')
                    ? "bg-amber-100 text-amber-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="flex items-center gap-2">
                  <ShoppingCart size={18} />
                  Giỏ hàng
                </span>
                {cartCount > 0 && (
                  <span className="bg-amber-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </>
      )}


    </>
  );
}