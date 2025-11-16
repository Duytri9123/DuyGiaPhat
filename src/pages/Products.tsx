// src/pages/Products.tsx
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { mockProducts} from "../data/mockData";
import {categories } from "../data/categories";
import ProductCard from "../components/common/ProductCard";
import { useState, useMemo } from "react";
import { Search, Filter, ChevronDown, X } from "lucide-react";

export default function Products() {
  const { category } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get("q") || "";
  const [sortBy, setSortBy] = useState<"name" | "price-asc" | "price-desc">("name");
  const [showFilters, setShowFilters] = useState(false);

  // Lọc sản phẩm
  const filteredProducts = useMemo(() => {
    let filtered = [...mockProducts];

    // Lọc theo danh mục
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Lọc theo tìm kiếm
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) 
      );
    }

    // Sắp xếp
    filtered.sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });

    return filtered;
  }, [category, searchQuery, sortBy]);

  const currentCategory = categories.find((c) => c.slug === category);
  const pageTitle = searchQuery
    ? `Tìm kiếm: "${searchQuery}"`
    : currentCategory
    ? currentCategory.name
    : "Tất cả sản phẩm";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">{pageTitle}</h1>
          <p className="text-blue-100">
            Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-xl shadow p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4 lg:mb-6">
                <h3 className="font-bold text-lg text-gray-800">Bộ lọc</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Danh mục */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Danh mục</h4>
                <ul className="space-y-2">
                  <li>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={!category}
                        onChange={() => navigate("/san-pham")}
                        className="mr-2 text-blue-600"
                      />
                      <span className={!category ? "font-medium text-blue-600" : "text-gray-700"}>
                        Tất cả sản phẩm
                      </span>
                    </label>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <label className="flex items-center justify-between cursor-pointer">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            checked={category === cat.slug}
                            onChange={() => navigate(`/danh-muc/${cat.slug}`)}
                            className="mr-2 text-blue-600"
                          />
                          <span className={category === cat.slug ? "font-medium text-blue-600" : "text-gray-700"}>
                            {cat.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500">({cat.count})</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Xóa bộ lọc */}
              {(category || searchQuery) && (
                <button
                  onClick={() => {
                    navigate("/san-pham");
                    setShowFilters(false);
                  }}
                  className="w-full text-sm text-blue-600 hover:underline"
                >
                  Xóa tất cả bộ lọc
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <Filter size={18} />
                <span>Bộ lọc</span>
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm text-gray-600 hidden sm:block">Sắp xếp:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="name">Tên A → Z</option>
                  <option value="price-asc">Giá tăng dần</option>
                  <option value="price-desc">Giá giảm dần</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl shadow">
                <p className="text-xl text-gray-500 mb-4">Không tìm thấy sản phẩm nào</p>
                <button
                  onClick={() => navigate("/san-pham")}
                  className="text-blue-600 hover:underline font-medium"
                >
                  ← Xem tất cả sản phẩm
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onToggleWishlist={() => {}}
                    onClick={() => navigate(`/san-pham/${product.id}`)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}