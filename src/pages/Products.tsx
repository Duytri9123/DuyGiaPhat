// src/pages/Products.tsx
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { mockProducts } from "../data/mockData";
import { categories } from "../data/categories";
import ProductCard from "../components/common/ProductCard";
import { useState, useMemo } from "react";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import AMB_headerbanner from "../assets/AMB_headerbanner.jpg";

type SortOption = "name" | "rating-desc" | "rating-asc" | "sales-desc" | "sales-asc" | "stock";

export default function Products() {
  const { category } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get("q") || "";
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [showFilters, setShowFilters] = useState(false);
  const [filterInStock, setFilterInStock] = useState<boolean | null>(null);
  const [powerRange, setPowerRange] = useState(100);

  const productsInCategory = useMemo(() => {
    if (category) {
      return mockProducts.filter((p) => p.category === category);
    }
    return mockProducts;
  }, [category]);

  // Lọc và sắp xếp sản phẩm
  const filteredProducts = useMemo(() => {
    let filtered = [...productsInCategory];

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
          return b.inStock === a.inStock ? 0 : b.inStock ? 1 : -1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [productsInCategory, searchQuery, sortBy, filterInStock]);

  const currentCategory = categories.find((c) => c.slug === category);
  const pageTitle = searchQuery
    ? `Tìm kiếm: "${searchQuery}"`
    : currentCategory
    ? currentCategory.name
    : "Tất cả sản phẩm";

  return (
    <div className="min-h-screen bg-[#f3f4f6] pt-20 md:pt-32">
      {/* Hero */}
      <section className="relative h-44 md:h-52 flex items-center bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url(" + AMB_headerbanner + ")" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col gap-2">
            <span className="text-amber-400 font-bold tracking-[0.2em] text-[11px] uppercase">
              Danh mục thiết bị
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight break-words">
              {pageTitle}
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-28 h-fit bg-white rounded-xl p-6 shadow-sm border border-slate-200/60">
          <div className="flex items-center gap-2 mb-8 border-b border-slate-100 pb-4">
            <SlidersHorizontal className="w-4 h-4 text-amber-500" />
            <h2 className="font-bold tracking-[0.2em] text-[11px] uppercase text-slate-700">
              Bộ lọc tối ưu
            </h2>
          </div>

          {/* Danh mục */}
          <div className="mb-8">
            <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-slate-400 mb-4">
              Danh mục
            </h3>
            <div className="flex flex-col gap-1 text-sm">
              <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer group">
                <input
                  type="radio"
                  name="category-sidebar"
                  checked={!category}
                  onChange={() => navigate("/san-pham")}
                  className="h-4 w-4 text-amber-500 border-slate-300 focus:ring-amber-500"
                />
                <span
                  className={`font-medium ${
                    !category ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                  }`}
                >
                  Tất cả sản phẩm
                </span>
              </label>
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="category-sidebar"
                    checked={category === cat.slug}
                    onChange={() => navigate(`/danh-muc/${cat.slug}`)}
                    className="h-4 w-4 text-amber-500 border-slate-300 focus:ring-amber-500"
                  />
                  <span
                    className={`flex-1 text-sm ${
                      category === cat.slug
                        ? "font-semibold text-slate-900"
                        : "text-slate-700 group-hover:text-slate-900"
                    }`}
                  >
                    {cat.name}
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold">({cat.count})</span>
                </label>
              ))}
            </div>
          </div>

          {/* Công suất (UI minh họa) */}
          <div className="mb-8">
            <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-slate-400 mb-4">
              Công suất (kVA/A)
            </h3>
            <div className="px-2">
              <input
                type="range"
                min={0}
                max={2500}
                value={powerRange}
                onChange={(e) => setPowerRange(Number(e.target.value))}
                className="w-full accent-amber-500 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-500">
                <span>0 kVA</span>
                <span>2500 kVA</span>
              </div>
            </div>
          </div>

          {/* Tình trạng */}
          <div className="mb-8">
            <h3 className="text-[11px] font-black tracking-[0.18em] uppercase text-slate-400 mb-4">
              Tình trạng
            </h3>
            <div className="grid grid-cols-1 gap-2 text-xs font-bold uppercase tracking-[0.18em]">
              <button
                onClick={() => setFilterInStock(null)}
                className={`text-left px-4 py-2 rounded ${
                  filterInStock === null
                    ? "bg-amber-500 text-slate-950"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Tất cả
              </button>
              <button
                onClick={() => setFilterInStock(true)}
                className={`text-left px-4 py-2 rounded ${
                  filterInStock === true
                    ? "bg-amber-500 text-slate-950"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                Còn hàng
              </button>
              <button
                onClick={() => setFilterInStock(false)}
                className={`text-left px-4 py-2 rounded ${
                  filterInStock === false
                    ? "bg-amber-500 text-slate-950"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                Đang về
              </button>
            </div>
          </div>

          {(category || searchQuery || filterInStock !== null) && (
            <button
              onClick={() => {
                setFilterInStock(null);
                navigate("/san-pham");
                setShowFilters(false);
              }}
              className="w-full bg-slate-900 text-white py-3 text-[11px] font-bold tracking-[0.2em] uppercase rounded hover:bg-slate-800 transition-colors"
            >
              Xóa bộ lọc
            </button>
          )}
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
                      <li>
                        <label className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg">
                          <input
                            type="radio"
                            name="category-mobile"
                            checked={!category}
                            onChange={() => {
                              navigate("/san-pham");
                              setShowFilters(false);
                            }}
                            className="mr-3 w-5 h-5 text-blue-600"
                          />
                          <span
                            className={
                              !category
                                ? "font-medium text-blue-600"
                                : "text-gray-700"
                            }
                          >
                            Tất cả sản phẩm
                          </span>
                        </label>
                      </li>
                      {categories.map((cat) => (
                        <li key={cat.id}>
                          <label className="flex items-center justify-between cursor-pointer p-3 hover:bg-gray-50 rounded-lg">
                            <div className="flex items-center flex-1">
                              <input
                                type="radio"
                                name="category-mobile"
                                checked={category === cat.slug}
                                onChange={() => {
                                  navigate(`/danh-muc/${cat.slug}`);
                                  setShowFilters(false);
                                }}
                                className="mr-3 w-5 h-5 text-blue-600"
                              />
                              <span
                                className={
                                  category === cat.slug
                                    ? "font-medium text-blue-600 text-sm"
                                    : "text-gray-700 text-sm"
                                }
                              >
                                {cat.name}
                              </span>
                            </div>
                            <span className="text-xs text-gray-500 ml-2">
                              ({cat.count})
                            </span>
                          </label>
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
                        navigate("/san-pham");
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
          <section className="flex-1">
            {/* Sorting & summary */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
              <p className="text-sm text-slate-600">
                Hiển thị <span className="font-semibold text-slate-900">{filteredProducts.length}</span> trên
                <span className="font-semibold text-slate-900"> {productsInCategory.length}</span> sản phẩm
              </p>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full bg-white border border-slate-200 rounded px-4 py-2 text-sm font-medium focus:ring-amber-500 focus:border-amber-500 appearance-none"
                  >
                    <option value="name">Sắp xếp theo: Tên A → Z</option>
                    <option value="rating-desc">Đánh giá cao nhất</option>
                    <option value="rating-asc">Đánh giá thấp nhất</option>
                    <option value="sales-desc">Bán chạy nhất</option>
                    <option value="sales-asc">Bán ít nhất</option>
                    <option value="stock">Còn hàng trước</option>
                  </select>
                </div>
                <button
                  onClick={() => setShowFilters(true)}
                  className="inline-flex lg:hidden items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
                >
                  <Filter size={18} />
                  Bộ lọc
                </button>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 sm:py-20 bg-white rounded-xl shadow px-4">
                <p className="text-lg sm:text-xl text-gray-500 mb-4">
                  Không tìm thấy sản phẩm nào
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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
          </section>
        </div>
      </div>
  );
}