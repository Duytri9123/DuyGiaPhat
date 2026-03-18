import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { mockProducts } from "../../data/mockData";
import logo from "../../assets/logo.png";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryMobile, setSearchQueryMobile] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showSuggestionsMobile, setShowSuggestionsMobile] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const searchRefMobile = useRef<HTMLDivElement>(null);

  const mainMenu = [
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
      {/* Header chính */}
      <header className="bg-white fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
        <div className="max-w-full mx-auto px-4">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Duy Gia Phát Logo"
                className="h-18 w-auto hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Menu và Search */}
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

            {/* Desktop: Search + Cart + User */}
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

              {/* Cart Icon */}
              <button className="relative p-2.5 rounded-full hover:bg-gray-100 transition-all">
                <ShoppingCart size={22} className="text-gray-700 hover:text-amber-600" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>

              {/* User Icon */}
              <button className="p-2.5 rounded-full hover:bg-gray-100 transition-all">
                <User size={22} className="text-gray-700 hover:text-amber-600" />
              </button>
            </div>

            {/* Mobile: Search + Cart + Menu */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Search Mobile */}
              <div className="relative flex-1">
                <input
                  type="text"
                  value={searchQueryMobile}
                  onChange={(e) => {
                    setSearchQueryMobile(e.target.value);
                    setShowSuggestionsMobile(true);
                  }}
                  onFocus={() => setShowSuggestionsMobile(true)}
                  placeholder="Tìm kiếm..."
                  className="w-full pl-8 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs"
                />
                <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Cart Mobile */}
              <button className="relative p-2 rounded-full hover:bg-gray-100">
                <ShoppingCart size={20} className="text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </button>

              {/* Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 overflow-y-auto">
            {/* Header Sidebar */}
            <div className="p-4 border-b flex items-center justify-between sticky top-0 bg-white z-10">
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

            {/* Menu Items */}
            <div className="p-4 space-y-3">
              {mainMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition font-medium ${
                    isActive(item.path)
                      ? "bg-amber-100 text-amber-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Spacer */}
      <div className="h-20 md:h-20"></div>
    </>
  );
}
