// src/components/layout/Header.tsx
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Search, Phone, ChevronDown, Heart } from "lucide-react";
import { categories } from "../../data/categories";
import { mockProducts } from "../../data/mockData";
import logo from "../../assets/logo.jpg";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQueryMobile, setSearchQueryMobile] = useState("");
  const [showSuggestionsMobile, setShowSuggestionsMobile] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  
  // State cho ẩn/hiện header
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const searchRefMobile = useRef<HTMLDivElement>(null);

  const mainMenu = [
    { label: "Trang chủ", path: "/" },
    { label: "Sản phẩm", path: "/san-pham" },
    { label: "Giới thiệu", path: "/gioi-thieu" },
  ];

  // Load wishlist count từ localStorage
  useEffect(() => {
    const loadWishlistCount = () => {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        try {
          const wishlist = JSON.parse(savedWishlist);
          setWishlistCount(wishlist.length);
        } catch (error) {
          setWishlistCount(0);
        }
      }
    };

    // Load ban đầu
    loadWishlistCount();

    // Listen storage event để update khi có thay đổi
    const handleStorageChange = () => {
      loadWishlistCount();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Custom event để update trong cùng tab
    window.addEventListener('wishlistUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('wishlistUpdated', handleStorageChange);
    };
  }, []);

  // Xử lý ẩn/hiện header khi scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lọc sản phẩm gợi ý - Desktop
  const suggestions = searchQuery.trim()
    ? mockProducts
        .filter((p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  // Lọc sản phẩm gợi ý - Mobile
  const suggestionsMobile = searchQueryMobile.trim()
    ? mockProducts
        .filter((p) =>
          p.name.toLowerCase().includes(searchQueryMobile.toLowerCase())
        )
        .slice(0, 5)
    : [];

  // Click outside để đóng suggestions - Desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Click outside để đóng suggestions - Mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRefMobile.current &&
        !searchRefMobile.current.contains(event.target as Node)
      ) {
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
      {/* Header chính */}
      <header className={`bg-white shadow-md fixed top-0 left-0 right-0 z-50 border-b border-gray-100 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 group flex-shrink-0"
            >
              <img
                src={logo}
                alt="Duy Gia Phát Logo"
                className="h-18 w-auto group-hover:scale-105 transition-transform"
              />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent whitespace-nowrap">
                  Duy Gia Phát
                </h1>
                <p className="text-sm text-gray-500 -mt-0.5 hidden sm:block">
                  Thiết bị cơ điện
                </p>
              </div>
            </Link>

            {/* Desktop: Menu + Tìm kiếm */}
            <div className="hidden lg:flex items-center flex-1 justify-end gap-4">
              {/* Menu chính */}
              <nav className="flex items-center space-x-1">
                {mainMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-lg font-medium transition-all text-base whitespace-nowrap ${
                      isActive(item.path)
                        ? "bg-blue-100 text-blue-700 shadow-sm"
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Dropdown Danh mục */}
                <div className="relative group">
                  <button className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 flex items-center gap-1 text-base whitespace-nowrap">
                    Danh mục{" "}
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition"
                    />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {categories.slice(0, 8).map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/danh-muc/${cat.slug}`}
                          className="flex items-center justify-between px-4 py-2.5 hover:bg-blue-50 text-base text-gray-700"
                        >
                          <span className="flex items-center gap-2">
                            <span></span> {cat.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            ({cat.count})
                          </span>
                        </Link>
                      ))}
                      <div className="border-t mt-2 pt-2">
                        <Link
                          to="/san-pham"
                          className="block px-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50"
                        >
                          Xem tất cả danh mục →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Tìm kiếm với gợi ý - Desktop */}
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
                      placeholder="Tìm kiếm sản phẩm..."
                      className="w-full pl-9 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-shadow"
                    />
                    <button
                      type="submit"
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition"
                    >
                      <Search size={16} />
                    </button>
                  </div>
                </form>

                {/* Gợi ý tìm kiếm - Desktop */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 max-h-96 overflow-y-auto">
                    <div className="p-2">
                      <p className="px-3 py-2 text-xs text-gray-500 font-medium">
                        Gợi ý sản phẩm
                      </p>
                      {suggestions.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleSuggestionClick(product.id)}
                          className="w-full flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition text-left"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-800 line-clamp-1">
                              {product.name}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-yellow-600">
                                ⭐ {product.rating}
                              </span>
                              <span className="text-xs text-gray-500">
                                {product.sales} lượt mua
                              </span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    {suggestions.length >= 5 && (
                      <div className="border-t p-3">
                        <button
                          onClick={() => {
                            handleSearch(new Event("submit") as any);
                          }}
                          className="w-full text-sm text-blue-600 font-medium hover:underline"
                        >
                          Xem tất cả kết quả →
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Icon Yêu thích với badge đếm */}
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
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
              </Link>

              {/* Hotline */}
              <a
                href="tel:0976707297"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition font-medium text-sm shadow-md whitespace-nowrap"
              >
                <Phone size={16} />
                <span>0976707297</span>
              </a>
            </div>

            {/* Mobile: Wishlist + Menu button */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Icon Yêu thích Mobile */}
              <Link
                to="/yeu-thich"
                className="relative p-2 rounded-full hover:bg-red-50 transition-all"
                aria-label="Sản phẩm yêu thích"
              >
                <Heart 
                  size={22} 
                  className={`transition-colors ${
                    isActive('/yeu-thich')
                      ? 'text-red-500 fill-current'
                      : 'text-gray-600'
                  }`}
                />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {wishlistCount > 9 ? '9+' : wishlistCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer để content không bị che bởi fixed header */}
      <div className="h-20"></div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden overflow-y-auto">
            {/* Header sidebar */}
            <div className="sticky top-0 bg-white border-b z-10">
              <div className="p-4 flex items-center justify-between">
                <Link
                  to="/"
                  className="flex items-center space-x-2"
                  onClick={() => setSidebarOpen(false)}
                >
                  <img
                    src={logo}
                    alt="Duy Gia Phát Logo"
                    className="h-8 w-auto"
                  />
                  <span className="font-bold text-lg bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
                    Duy Gia Phát
                  </span>
                </Link>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Tìm kiếm trong sidebar với gợi ý */}
              <div ref={searchRefMobile} className="px-4 pb-4 relative">
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <button
                      type="submit"
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
                    >
                      <Search size={18} />
                    </button>
                  </div>
                </form>

                {/* Gợi ý tìm kiếm - Mobile */}
                {showSuggestionsMobile && suggestionsMobile.length > 0 && (
                  <div className="absolute top-full left-4 right-4 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 max-h-80 overflow-y-auto">
                    <div className="p-2">
                      <p className="px-3 py-2 text-xs text-gray-500 font-medium">
                        Gợi ý sản phẩm
                      </p>
                      {suggestionsMobile.map((product) => (
                        <button
                          key={product.id}
                          onClick={() =>
                            handleSuggestionClickMobile(product.id)
                          }
                          className="w-full flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition text-left"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-800 line-clamp-1">
                              {product.name}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-yellow-600">
                                ⭐ {product.rating}
                              </span>
                              <span className="text-xs text-gray-500">
                                {product.sales} lượt mua
                              </span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-1">
              {mainMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition text-base font-medium ${
                    isActive(item.path)
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Link Yêu thích trong sidebar */}
              <Link
                to="/yeu-thich"
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center justify-between py-3 px-4 rounded-lg transition text-base font-medium ${
                  isActive('/yeu-thich')
                    ? "bg-blue-100 text-blue-700"
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

              {/* Toggle Danh mục */}
              <div className="border-t pt-3 mt-3">
                <button
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  <span>Danh mục sản phẩm</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      categoriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Categories list */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    categoriesOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="mt-2 space-y-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/danh-muc/${cat.slug}`}
                        onClick={() => setSidebarOpen(false)}
                        className="flex items-center justify-between py-2.5 px-4 text-sm text-gray-700 hover:bg-blue-50 rounded-lg transition"
                      >
                        <span className="flex items-center gap-2">
                          <span></span> {cat.name}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                          {cat.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hotline button */}
              <a
                href="tel:0976707297"
                className="flex items-center justify-center space-x-2 mt-6 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition font-medium shadow-lg"
              >
                <Phone size={18} />
                <span>Gọi ngay: 0976707297</span>
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}