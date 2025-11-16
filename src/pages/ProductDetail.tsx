// src/pages/ProductDetail.tsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockProducts } from "../data/mockData";
import { categories } from "../data/categories";
import {
  Phone, ChevronRight, ArrowLeft, ChevronLeft, ChevronRight as ChevronRightIcon, Check
} from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const productId = parseInt(id || "0");
  const product = mockProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-6xl mb-4">box</div>
          <p className="text-xl font-semibold text-gray-700 mb-4">Không tìm thấy sản phẩm</p>
          <button
            onClick={() => navigate("/san-pham")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-6 py-3 rounded-full font-bold hover:from-yellow-300 hover:to-orange-400 transition shadow-lg"
          >
            <ArrowLeft size={20} /> Quay lại danh sách
          </button>
        </div>
      </div>
    );
  }

  const currentCategory = categories.find((c) => c.slug === product.category);
  const relatedProducts = mockProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 6);

  const allImages = [product.image, ...(product.images || [])];
  const totalImages = allImages.length;

  const nextImage = () => setSelectedImage((prev) => (prev + 1) % totalImages);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + totalImages) % totalImages);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8 overflow-x-auto">
          <button onClick={() => navigate("/")} className="hover:text-blue-600 whitespace-nowrap">Trang chủ</button>
          <ChevronRight size={16} />
          <button onClick={() => navigate("/san-pham")} className="hover:text-blue-600 whitespace-nowrap">Sản phẩm</button>
          {currentCategory && (
            <>
              <ChevronRight size={16} />
              <button
                onClick={() => navigate(`/danh-muc/${currentCategory.slug}`)}
                className="hover:text-blue-600 whitespace-nowrap"
              >
                {currentCategory.name}
              </button>
            </>
          )}
          <ChevronRight size={16} />
          <span className="text-gray-900 font-medium whitespace-nowrap">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* === GALLERY ẢNH === */}
          <div className="space-y-6">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group">
              <div className="aspect-square relative">
                <img
                  src={allImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {totalImages > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur rounded-full p-3 shadow-lg hover:bg-white transition opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur rounded-full p-3 shadow-lg hover:bg-white transition opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRightIcon size={24} />
                    </button>
                  </>
                )}
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {product.badge}
                  </div>
                )}
              </div>
            </div>

            {totalImages > 1 && (
              <div className="grid grid-cols-5 gap-3">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === i ? "border-yellow-500 shadow-lg" : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* === THÔNG TIN CHI TIẾT === */}
          <div className="space-y-8">
            {/* Tiêu đề */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="ml-2 font-medium text-gray-700">{product.rating}</span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">{product.sales} lượt đặt hàng</span>
              </div>
            </div>

            {/* MÔ TẢ + THÔNG SỐ KỸ THUẬT */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Mô tả sản phẩm</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

              {product.specs && product.specs.length > 0 && (
                <>
                  <h4 className="font-bold text-lg mb-3 text-gray-800">Thông số kỹ thuật</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <div>
                          <span className="font-medium text-gray-700">{spec.label}:</span>
                          <span className="ml-1 text-gray-800">{spec.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* NÚT BÁO GIÁ + ZALO - MÀU VÀNG CAM */}
            <div className="flex gap-3">
              {/* Nút Báo giá */}
              <a
                href={`tel:0976707297`}
                className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-lg transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 ${
                  product.inStock
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 hover:from-yellow-300 hover:to-orange-400"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                {...(!product.inStock && { "aria-disabled": true })}
              >
                <Phone size={22} />
                <span>Báo giá ngay</span>
              </a>

              {/* Nút Zalo */}
              <a
                href="https://zalo.me/0976707297"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.89 1.402 5.45 3.589 7.163l-.766 2.844a.5.5 0 00.713.572l3.167-1.823A10.277 10.277 0 0012 20.486c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm3.5 11.5h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1z" />
                </svg>
              </a>
            </div>

            {/* Cam kết */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                "Hàng chính hãng 100%",
                "Giao hàng toàn quốc",
                "Hỗ trợ lắp đặt",
                "Bảo hành dài hạn",
                "CO/CQ đầy đủ",
                "Tư vấn 24/7",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-green-600">
                  <Check size={18} />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SẢN PHẨM LIÊN QUAN */}
        {relatedProducts.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
              Sản phẩm cùng danh mục
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {relatedProducts.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedImage(0);
                    navigate(`/san-pham/${item.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-3 text-left overflow-hidden"
                >
                  <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition">
                      {item.name}
                    </h3>
                    <div className="mt-3 flex gap-2">
                      <a
                        href="tel:0976707297"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 text-xs font-bold hover:from-yellow-300 hover:to-orange-400 transition shadow"
                      >
                        Báo giá
                      </a>
                      <a
                        href="https://zalo.me/0976707297"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-2 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.89 1.402 5.45 3.589 7.163l-.766 2.844a.5.5 0 00.713.572l3.167-1.823A10.277 10.277 0 0012 20.486c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm3.5 11.5h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}