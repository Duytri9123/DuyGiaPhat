// src/pages/Home.tsx
import { useNavigate } from "react-router-dom";
import { mockProducts} from "../data/mockData";
import {categories } from "../data/categories";
import ProductCard from "../components/common/ProductCard";
import { Phone, Shield, Truck, Wrench, Award, ChevronRight, Zap, ArrowRight } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  // Sản phẩm bán chạy
  const featuredProducts = [...mockProducts]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 8);

  // Danh mục nổi bật
  const featuredCategories = categories.slice(0, 6);

  const stats = [
    { icon: <Zap className="w-6 h-6" />, value: "10+", label: "Năm kinh nghiệm" },
    { icon: <Truck className="w-6 h-6" />, value: "5000+", label: "Khách hàng" },
    { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Hàng chính hãng" },
    { icon: <Award className="w-6 h-6" />, value: "4.9★", label: "Đánh giá" },
  ];

  const services = [
    { icon: <Shield className="w-12 h-12" />, title: "Hàng chính hãng", desc: "CO/CQ đầy đủ, nguồn gốc rõ ràng" },
    { icon: <Truck className="w-12 h-12" />, title: "Giao hàng nhanh", desc: "Miễn phí nội thành HCM & HN" },
    { icon: <Wrench className="w-12 h-12" />, title: "Lắp đặt chuyên nghiệp", desc: "Kỹ thuật viên giàu kinh nghiệm" },
    { icon: <Award className="w-12 h-12" />, title: "Bảo hành dài hạn", desc: "12-36 tháng, hỗ trợ 24/7" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Giải pháp <span className="text-yellow-400">Cơ Điện</span> Toàn Diện
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Nhà phân phối <strong>chính hãng</strong> động cơ, biến tần, tủ điện, máy bơm, cáp điện... 
                phục vụ nhà máy, khu công nghiệp, dự án lớn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:19001234"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition flex items-center justify-center gap-2 shadow-xl text-lg"
                >
                  <Phone size={22} />
                  Gọi báo giá: 1900 1234
                </a>
                <button
                  onClick={() => navigate("/san-pham")}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-700 transition flex items-center justify-center gap-2"
                >
                  Xem sản phẩm <ArrowRight size={20} />
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl animate-pulse">
                <div className="text-9xl text-yellow-400">gear</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Danh mục nổi bật */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Danh mục sản phẩm</h2>
            <p className="text-gray-600">Hơn 1000+ thiết bị chất lượng cao</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/danh-muc/${cat.slug}`)}
                className="group bg-white rounded-2xl shadow hover:shadow-xl transition-all hover:-translate-y-2 p-6 text-center border border-gray-100"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{cat.count} sản phẩm</p>
              </button>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/san-pham")}
              className="text-blue-600 font-medium hover:underline flex items-center mx-auto gap-1"
            >
              Xem tất cả danh mục <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Sản phẩm bán chạy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Sản phẩm bán chạy</h2>
            <p className="text-gray-600">Được hàng nghìn khách hàng tin dùng</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onToggleWishlist={() => {}}
                onClick={() => navigate(`/san-pham/${product.id}`)}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/san-pham")}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-md"
            >
              Xem tất cả sản phẩm
            </button>
          </div>
        </div>
      </section>

      {/* Cam kết dịch vụ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Tại sao chọn Duy Gia Phát?</h2>
            <p className="text-gray-600">Cam kết chất lượng – Đồng hành cùng dự án của bạn</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((item, i) => (
              <div key={i} className="text-center group">
                <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thống kê */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-5xl font-bold mb-2 flex items-center justify-center gap-2">
                  {stat.icon}
                  <span className="group-hover:scale-110 transition-transform inline-block">{stat.value}</span>
                </div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA cuối trang */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Sẵn sàng nâng cấp hệ thống cơ điện?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Liên hệ ngay để được <strong>báo giá tốt nhất</strong> trong <span className="text-blue-600 font-bold">5 phút</span>!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:19001234"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-10 py-5 rounded-full font-bold hover:from-yellow-300 hover:to-orange-400 transition shadow-xl text-lg flex items-center justify-center gap-3 transform hover:scale-105"
            >
              <Phone size={24} />
              Gọi ngay: 1900 1234
            </a>
            <button
              onClick={() => navigate("/gioi-thieu")}
              className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-full font-bold hover:bg-blue-50 transition text-lg"
            >
              Tư vấn miễn phí
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}