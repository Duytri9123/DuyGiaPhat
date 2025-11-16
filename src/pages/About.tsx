// src/pages/About.tsx

import { Phone, Mail, MapPin, Clock, Shield, Truck, Wrench, Award } from "lucide-react";

export default function About() {

  const features = [
    { icon: Truck, title: "Giao hàng toàn quốc", desc: "Miễn phí nội thành HCM & HN" },
    { icon: Shield, title: "Hàng chính hãng", desc: "CO/CQ đầy đủ, kiểm định kỹ" },
    { icon: Wrench, title: "Lắp đặt chuyên nghiệp", desc: "Đội kỹ thuật 10+ năm kinh nghiệm" },
    { icon: Award, title: "Bảo hành dài hạn", desc: "12–36 tháng, hỗ trợ 24/7" },
  ];

  const timeline = [
    { year: "2015", title: "Thành lập", desc: "Từ xưởng nhỏ tại TP.HCM" },
    { year: "2018", title: "Mở chi nhánh Hà Nội", desc: "Phủ sóng miền Bắc" },
    { year: "2020", title: "Hợp tác Siemens", desc: "Đối tác chiến lược" },
    { year: "2023", title: "5000+ khách hàng", desc: "Tin tưởng & đồng hành" },
    { year: "2025", title: "Top 10 nhà phân phối", desc: "Thiết bị cơ điện VN" },
  ];

  const team = [
    { name: "Nguyễn Duy Trí", role: "CEO & Sáng lập", exp: "15 năm ngành cơ điện" },
    { name: "Nguyễn Duy Phúc", role: "Giám đốc Kỹ thuật", exp: "Chuyên gia tự động hóa" },
    { name: "Nguyễn Duy Trí", role: "Trưởng phòng KD", exp: "Hỗ trợ 300+ dự án" },
  ];

  const stats = [
    { value: "10+", label: "Năm kinh nghiệm" },
    { value: "5,000+", label: "Khách hàng doanh nghiệp" },
    { value: "100K+", label: "Sản phẩm cung cấp" },
    { value: "4.9★", label: "Đánh giá trung bình" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 lg:space-y-20">

        {/* ==================== HERO - ĐẸP TRÊN DESKTOP ==================== */}
        <section className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Award size={18} />
            <span>Top 10 Nhà phân phối cơ điện Việt Nam 2025</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight">
            Duy Gia Phát – Giải pháp cơ điện toàn diện
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Hơn <strong>10 năm</strong> đồng hành cùng <strong>5000+ doanh nghiệp</strong>,
            cung cấp thiết bị chất lượng cao, dịch vụ lắp đặt chuyên nghiệp và hỗ trợ kỹ thuật <strong>24/7</strong>.
          </p>
        </section>

        {/* ==================== FEATURES - 4 CỘT TRÊN DESKTOP ==================== */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-3 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-4 rounded-2xl text-white w-fit mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <f.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* ==================== TIMELINE - NGANG TRÊN DESKTOP ==================== */}
        <section className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-700 mb-12">
            Hành trình phát triển
          </h2>
          <div className="hidden lg:grid grid-cols-5 gap-6">
            {timeline.map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="absolute top-8 left-16 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-700 -z-10"></div>
                  )}
                </div>
                <div className="mt-6 space-y-2">
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile: Dọc */}
          <div className="lg:hidden space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-blue-600 to-indigo-700 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="font-bold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== TEAM - 3 CỘT TRÊN DESKTOP ==================== */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-700 mb-12">
            Đội ngũ lãnh đạo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all">
                {/* <div className="text-9xl text-blue-100 mb-6">briefcase</div> */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-bold text-lg mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.exp}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== STATS - 4 CỘT TRÊN DESKTOP ==================== */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-3xl p-8 lg:p-10 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl lg:text-5xl font-bold group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="mt-3 text-blue-100 font-medium text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== CONTACT + CTA - 2 CỘT TRÊN DESKTOP ==================== */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 space-y-5">
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-700 mb-6 text-center lg:text-left">
              Liên hệ ngay
            </h2>
            {[
              { icon: Phone, label: "Hotline", value: "0976707297", href: "tel:0976707297" },
              { icon: Mail, label: "Email", value: "contact@duygiaphat.vn", href: "mailto:contact@duygiaphat.vn" },
              { icon: MapPin, label: "Văn phòng", value: "TP.HCM • Hà Nội • Đà Nẵng", href: "#" },
              { icon: Clock, label: "Giờ làm việc", value: "T2 - T7: 8:00 - 17:30", href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl hover:from-blue-100 hover:to-indigo-100 transition-all group"
              >
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{item.label}</p>
                  <p className="text-lg text-blue-700">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA - SIÊU NỔI BẬT TRÊN DESKTOP */}
          <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-3xl shadow-2xl p-8 lg:p-10 text-white flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Cần tư vấn giải pháp?</h2>
            <p className="text-lg mb-8 text-yellow-50">
              Đội kỹ thuật sẽ <strong>liên hệ trong 5 phút</strong> để báo giá chi tiết và đề xuất thiết bị tối ưu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0976707297"
                className="flex-1 px-4 justify-center bg-white text-blue-900 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-50 transition shadow-xl flex items-center justify-center"
              >
                <Phone size={28} />
                <span className="text-center">
                  GỌI NGAY: 0976707297
                </span>
              </a>
              <a
                href="https://zalo.me/0976707297"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 py-5 rounded-2xl font-bold text-xl hover:from-blue-700 hover:to-indigo-800 transition shadow-xl flex items-center justify-center gap-3"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.89 1.402 5.45 3.589 7.163l-.766 2.844a.5.5 0 00.713.572l3.167-1.823A10.277 10.277 0 0012 20.486c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm3.5 11.5h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1z" />
                </svg>
                Chat Zalo
              </a>
            </div>
            <p className="text-center mt-6 text-yellow-100 text-sm">
              Hoặc để lại thông tin, chúng tôi gọi lại ngay!
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}