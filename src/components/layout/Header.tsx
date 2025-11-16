// src/components/layout/Header.tsx
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Search, Phone, ChevronDown } from "lucide-react";
import { categories } from "../../data/categories";
import logo from "../../assets/logo.jpg";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const mainMenu = [
    { label: "Trang chủ", path: "/" },
    { label: "Sản phẩm", path: "/san-pham" },
    { label: "Giới thiệu", path: "/gioi-thieu" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tim-kiem?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSidebarOpen(false);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Header chính */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
              <img 
                src={logo} 
                alt="Duy Gia Phát Logo" 
                className="h-18 w-auto group-hover:scale-105 transition-transform"
              />
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent whitespace-nowrap">
                  Duy Gia Phát
                </h1>
                <p className="text-sm text-gray-500 -mt-0.5 hidden sm:block">Thiết bị cơ điện</p>
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
                    Danh mục <ChevronDown size={16} className="group-hover:rotate-180 transition" />
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
                          <span className="text-xs text-gray-500">({cat.count})</span>
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

              {/* Tìm kiếm nhỏ gọn */}
              <form onSubmit={handleSearch} className="w-56">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm..."
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

              {/* Hotline */}
              <a
                href="tel:19001234"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition font-medium text-sm shadow-md whitespace-nowrap"
              >
                <Phone size={16} />
                <span>1900 1234</span>
              </a>
            </div>

            {/* Mobile: Tìm kiếm + Menu button */}
            <div className="flex lg:hidden items-center gap-2">
              <form onSubmit={handleSearch} className="hidden sm:block w-40">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm..."
                    className="w-full pl-8 pr-2 py-1.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <Search size={14} />
                  </button>
                </div>
              </form>

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
                <Link to="/" className="flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
                  <img 
                    src={logo} 
                    alt="Duy Gia Phát Logo" 
                    className="h-8 w-auto"
                  />
                  <span className="font-bold text-lg bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
                    Duy Gia Phát
                  </span>
                </Link>
                <button onClick={() => setSidebarOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg transition">
                  <X size={24} />
                </button>
              </div>

              {/* Tìm kiếm trong sidebar */}
              <div className="px-4 pb-4">
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Tìm động cơ, biến tần..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
                      <Search size={18} />
                    </button>
                  </div>
                </form>
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
                    isActive(item.path) ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Toggle Danh mục */}
              <div className="border-t pt-3 mt-3">
                <button
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  <span>Danh mục sản phẩm</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${categoriesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Categories list - chỉ hiện khi toggle */}
                <div className={`overflow-hidden transition-all duration-300 ${categoriesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
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
                href="tel:19001234"
                className="flex items-center justify-center space-x-2 mt-6 py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition font-medium shadow-lg"
              >
                <Phone size={18} />
                <span>Gọi ngay: 1900 1234</span>
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}