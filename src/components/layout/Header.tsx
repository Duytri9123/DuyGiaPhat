// src/components/layout/Header.tsx
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Search, Phone, ChevronDown } from "lucide-react";
import { categories } from "../../data/categories";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-xl group-hover:scale-105 transition-transform shadow-md">
                <span className="text-2xl text-white font-bold">Power</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  Duy Gia Phát
                </h1>
                <p className="text-xs text-gray-500 -mt-1">Thiết bị cơ điện chính hãng</p>
              </div>
            </Link>

            {/* Desktop: Tìm kiếm + Menu */}
            <div className="hidden lg:flex items-center flex-1 justify-center gap-8">
              {/* Tìm kiếm */}
              <form onSubmit={handleSearch} className="max-w-md w-full">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm động cơ, biến tần, tủ điện..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-shadow"
                  />
                  <button
                    type="submit"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </form>

              {/* Menu chính */}
              <nav className="flex items-center space-x-1">
                {mainMenu.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
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
                  <button className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 flex items-center gap-1 text-sm">
                    Danh mục <ChevronDown size={16} className="group-hover:rotate-180 transition" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {categories.slice(0, 8).map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/danh-muc/${cat.slug}`}
                          className="flex items-center justify-between px-4 py-2.5 hover:bg-blue-50 text-sm text-gray-700"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="flex items-center gap-2">
                            <span>{cat.icon}</span> {cat.name}
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
            </div>

            {/* Hotline + Mobile Menu */}
            <div className="flex items-center gap-3">
              <a
                href="tel:19001234"
                className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition font-medium text-sm shadow-md"
              >
                <Phone size={16} />
                <span>1900 1234</span>
              </a>

              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <Menu size={28} />
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
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 lg:hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2" onClick={() => setSidebarOpen(false)}>
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-xl">
                  <span className="text-xl text-white">Power</span>
                </div>
                <span className="font-bold text-lg">Duy Gia Phát</span>
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="p-1">
                <X size={24} />
              </button>
            </div>

            <div className="p-4 border-b">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button type="submit" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
                    <Search size={18} />
                  </button>
                </div>
              </form>
            </div>

            <nav className="p-4 space-y-1">
              {mainMenu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`block py-3 px-3 rounded-lg transition text-base font-medium ${
                    isActive(item.path) ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="py-2 border-t">
                <p className="text-sm font-semibold text-gray-600 px-3 mb-2">Danh mục</p>
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/danh-muc/${cat.slug}`}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center justify-between py-2 px-3 text-sm text-gray-700 hover:bg-blue-50 rounded"
                  >
                    <span className="flex items-center gap-2">
                      <span>{cat.icon}</span> {cat.name}
                    </span>
                    <span className="text-xs text-gray-500">({cat.count})</span>
                  </Link>
                ))}
              </div>
              <a
                href="tel:19001234"
                className="flex items-center space-x-2 mt-4 py-3 px-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:from-blue-700 hover:to-indigo-800 transition font-medium"
              >
                <Phone size={18} />
                <span>Gọi: 1900 1234</span>
              </a>
            </nav>
          </div>
        </>
      )}
    </>
  );
}