// src/pages/CategoryPage.tsx
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { mockProducts } from "../data/mockData";
import { categories } from "../data/categories";
import ProductCard from "../components/common/ProductCard";
import { useState, useMemo } from "react";
import { Filter, X } from "lucide-react";

type SortOption = "name" | "rating-desc" | "rating-asc" | "sales-desc" | "sales-asc" | "stock";

export default function CategoryPage() {
  const { category: categorySlug } = useParams<{ category: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get("q") || "";
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [showFilters, setShowFilters] = useState(false);
  const [filterInStock, setFilterInStock] = useState<boolean | null>(null);

  // Tìm danh mục hiện tại
  const currentCategory = categories.find((c) => c.slug === categorySlug);
  if (!currentCategory && categorySlug) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-lg sm:text-xl text-gray-600 mb-4">Danh mục không tồn tại</p>
          <button
            onClick={() => navigate("/san-pham")}
            className="text-blue-600 hover:underline font-medium"
          >
            ← Quay lại sản phẩm
          </button>
        </div>
      </div>
    );
  }

  // Lọc và sắp xếp sản phẩm
  const filteredProducts = useMemo(() => {
    let filtered = mockProducts.filter((p) => p.category === categorySlug);

    // Lọc theo tìm kiếm
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(query)
      );
    }

    // Lọc theo tình trạng kho
    if (filterInStock !== null) {
      filtered = filtered.filter((p) => p.inStock === filterInStock);
    }

    // Sắp xếp
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name, "vi");
        case "rating-desc":
          return b.rating - a.rating;
        case "rating-asc":
          return a.rating - b.rating;
        case "sales-desc":
          return b.sales - a.sales;
        case "sales-asc":
          return a.sales - b.sales;
        case "stock":
          // Còn hàng lên trước
          return b.inStock === a.inStock ? 0 : b.inStock ? 1 : -1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [categorySlug, searchQuery, sortBy, filterInStock]);

  const pageTitle = searchQuery
    ? `Tìm kiếm trong "${currentCategory?.name}": "${searchQuery}"`
    : currentCategory?.name || "Danh mục";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 break-words">
            {pageTitle}
          </h1>
          <p className="text-sm sm:text-base text-blue-100">
            Hiển thị <strong>{filteredProducts.length}</strong> sản phẩm
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block lg:w-64">
            <div className="bg-white rounded-xl shadow p-6 sticky top-24">
              <h3 className="font-bold text-lg text-gray-800 mb-6">Bộ lọc</h3>

              {/* Danh mục */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Danh mục</h4>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => navigate(`/danh-muc/${cat.slug}`)}
                        className={`w-full text-left p-3 rounded-lg transition flex items-center justify-between ${
                          cat.slug === categorySlug
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <span className="text-sm">{cat.name}</span>
                        <span className="text-xs text-gray-500">
                          ({cat.count})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tình trạng kho */}
              <div className="mb-6 border-t pt-4">
                <h4 className="font-semibold text-gray-700 mb-3">
                  Tình trạng
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stock"
                      checked={filterInStock === null}
                      onChange={() => setFilterInStock(null)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm text-gray-700">Tất cả</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stock"
                      checked={filterInStock === true}
                      onChange={() => setFilterInStock(true)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm text-gray-700">Còn hàng</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stock"
                      checked={filterInStock === false}
                      onChange={() => setFilterInStock(false)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="text-sm text-gray-700">Hết hàng</span>
                  </label>
                </div>
              </div>

              <button
                onClick={() => navigate("/san-pham")}
                className="mt-6 w-full text-sm text-blue-600 hover:underline text-center"
              >
                Xem tất cả sản phẩm
              </button>
            </div>
          </aside>

          {/* Mobile Filter Modal */}
          {showFilters && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
              <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl overflow-y-auto">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b">
                    <h3 className="font-bold text-xl text-gray-800">Bộ lọc</h3>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Danh mục */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3 text-base">
                      Danh mục
                    </h4>
                    <ul className="space-y-2">
                      {categories.map((cat) => (
                        <li key={cat.id}>
                          <button
                            onClick={() => {
                              navigate(`/danh-muc/${cat.slug}`);
                              setShowFilters(false);
                            }}
                            className={`w-full text-left p-3 rounded-lg transition flex items-center justify-between ${
                              cat.slug === categorySlug
                                ? "bg-blue-100 text-blue-700 font-medium"
                                : "hover:bg-gray-100 text-gray-700"
                            }`}
                          >
                            <span className="text-sm">{cat.name}</span>
                            <span className="text-xs text-gray-500">
                              ({cat.count})
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tình trạng kho */}
                  <div className="mb-6 border-t pt-4">
                    <h4 className="font-semibold text-gray-700 mb-3 text-base">
                      Tình trạng
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
                        <input
                          type="radio"
                          name="stock-mobile"
                          checked={filterInStock === null}
                          onChange={() => setFilterInStock(null)}
                          className="w-5 h-5 text-blue-600"
                        />
                        <span className="text-sm text-gray-700">Tất cả</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
                        <input
                          type="radio"
                          name="stock-mobile"
                          checked={filterInStock === true}
                          onChange={() => setFilterInStock(true)}
                          className="w-5 h-5 text-blue-600"
                        />
                        <span className="text-sm text-gray-700">Còn hàng</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
                        <input
                          type="radio"
                          name="stock-mobile"
                          checked={filterInStock === false}
                          onChange={() => setFilterInStock(false)}
                          className="w-5 h-5 text-blue-600"
                        />
                        <span className="text-sm text-gray-700">Hết hàng</span>
                      </label>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-4 border-t">
                    <button
                      onClick={() => {
                        setFilterInStock(null);
                        setSortBy("name");
                      }}
                      className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition"
                    >
                      Đặt lại bộ lọc
                    </button>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                      Áp dụng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-xl shadow p-3 sm:p-4 mb-4 sm:mb-6">
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium px-3 py-2 hover:bg-gray-50 rounded-lg transition"
                >
                  <Filter size={18} />
                  <span className="text-sm sm:text-base">Bộ lọc</span>
                </button>

                <div className="flex items-center gap-2 flex-1 lg:flex-none justify-end">
                  <span className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                    Sắp xếp:
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full sm:w-auto border border-gray-300 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="name">Tên A → Z</option>
                    <option value="rating-desc">Đánh giá cao nhất</option>
                    <option value="rating-asc">Đánh giá thấp nhất</option>
                    <option value="sales-desc">Bán chạy nhất</option>
                    <option value="sales-asc">Bán ít nhất</option>
                    <option value="stock">Còn hàng trước</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 sm:py-20 bg-white rounded-xl shadow px-4">
                <p className="text-lg sm:text-xl text-gray-500 mb-4">
                  Không có sản phẩm nào
                </p>
                <button
                  onClick={() => {
                    setFilterInStock(null);
                    navigate("/san-pham");
                  }}
                  className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
                >
                  ← Xem tất cả sản phẩm
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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