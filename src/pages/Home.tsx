// src/pages/Home.tsx
import { useNavigate } from "react-router-dom";
import { mockProducts } from "../data/mockData";
import { categories } from "../data/categories";
import ProductCard from "../components/common/ProductCard";
import { Phone, Shield, Truck, Wrench, Award, ChevronRight, Zap, ArrowRight, CheckCircle } from "lucide-react";
import AMB_headerbanner from "../assets/AMB_headerbanner.jpg";
import banner from "../assets/banner.jpg";

export default function Home() {
  const navigate = useNavigate();

  // Sản phẩm bán chạy
  const featuredProducts = [...mockProducts]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 8);

  // Danh mục nổi bật - hiển thị tất cả 5 danh mục
  const featuredCategories = categories.filter(cat => cat.featured);

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

  const highlights = [
    "Giá cạnh tranh, chiết khấu cao cho dự án lớn",
    "Hơn 10,000+ thiết bị luôn có sẵn trong kho",
    "Tư vấn kỹ thuật 24/7 bởi đội ngũ chuyên gia"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section - Professional Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Image Background with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95">
          <img
            src={AMB_headerbanner}
            alt="Industrial Equipment"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold border border-yellow-400/30">
                  ⚡ Nhà phân phối thiết bị cơ điện hàng đầu
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Giải pháp{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Cơ Điện
                </span>
                <br />Toàn Diện
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Cung cấp động cơ, biến tần, tủ điện, máy bơm, cáp điện chính hãng
                cho nhà máy, khu công nghiệp và dự án lớn trên toàn quốc.
              </p>

              {/* Highlights */}
              <div className="space-y-3 pt-2">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:0976707297"
                  className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 md:px-8 py-3.5 md:py-4 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  <Phone size={20} className="group-hover:animate-pulse" />
                  <span className="text-base md:text-lg">Gọi báo giá: 0976707297</span>
                </a>
                <button
                  onClick={() => navigate("/san-pham")}
                  className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3.5 md:py-4 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all flex items-center justify-center gap-2"
                >
                  <span className="text-base md:text-lg">Xem sản phẩm</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                {/* Main Image Card */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={banner}
                    alt="Electric Motor"
                    className="rounded-xl shadow-2xl w-full h-auto"
                  />

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full font-bold shadow-xl rotate-12 animate-pulse">
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-xs">Chính hãng</div>
                    </div>
                  </div>

                  {/* Stats Card */}
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-xl shadow-2xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold">5000+</div>
                      <div className="text-sm text-blue-100">Khách hàng tin tưởng</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="rgb(249, 250, 251)"></path>
          </svg>
        </div>
      </section>

      {/* Danh mục nổi bật */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Danh mục sản phẩm</h2>
            <p className="text-gray-600">Hơn 1000+ thiết bị chất lượng cao</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/danh-muc/${cat.slug}`)}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 p-2 text-center border border-gray-100"
              >
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img
                    src={cat.iconUrl}
                    alt={cat.name}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition text-sm mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-500">{cat.count} sản phẩm</p>
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
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
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
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                ⭐ Cam kết chất lượng
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Tại sao chọn Duy Gia Phát?
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Đồng hành cùng dự án của bạn với đội ngũ chuyên nghiệp và dịch vụ tận tâm
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {services.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-700 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <div className="scale-75 md:scale-90 lg:scale-100">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-sm md:text-base lg:text-lg text-gray-800 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Hơn 10 năm kinh nghiệm</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Phục vụ 5000+ khách hàng</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>Đánh giá 4.9⭐</span>
            </div>
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
              href="tel:0976707297"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 px-10 py-5 rounded-full font-bold hover:from-yellow-300 hover:to-orange-400 transition shadow-xl text-lg flex items-center justify-center gap-3 transform hover:scale-105"
            >
              <Phone size={24} />
              Gọi ngay: 0976707297
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