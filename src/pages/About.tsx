// src/pages/About.tsx
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield, Truck, Wrench, Award } from "lucide-react";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Sản phẩm", path: "/san-pham" },
    { label: "Danh mục", path: "/danh-muc/dong-co" },
    { label: "Giới thiệu", path: "/gioi-thieu" },
    { label: "Liên hệ", path: "/gioi-thieu" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tim-kiem?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const features = [
    { icon: <Truck className="w-10 h-10" />, title: "Giao hàng toàn quốc", description: "Miễn phí nội thành HCM & HN" },
    { icon: <Shield className="w-10 h-10" />, title: "Hàng chính hãng", description: "100% CO/CQ đầy đủ" },
    { icon: <Wrench className="w-10 h-10" />, title: "Lắp đặt chuyên nghiệp", description: "Kỹ thuật viên giàu kinh nghiệm" },
    { icon: <Award className="w-10 h-10" />, title: "Bảo hành dài hạn", description: "Từ 12 đến 36 tháng" },
  ];

  const team = [
    { name: "Nguyễn Văn Duy", role: "Giám đốc & Sáng lập", avatar: "man" },
    { name: "Trần Thị Gia", role: "Giám đốc kỹ thuật", avatar: "woman" },
    { name: "Lê Minh Phát", role: "Trưởng phòng kinh doanh", avatar: "man" },
  ];

  const stats = [
    { value: "10+", label: "Năm kinh nghiệm" },
    { value: "5000+", label: "Khách hàng" },
    { value: "100K+", label: "Sản phẩm đã cung cấp" },
    { value: "4.9★", label: "Đánh giá trung bình" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* ==================== HEADER ==================== */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-xl group-hover:scale-105 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  Duy Gia Phát
                </h1>
              </div>
            </Link>

            {/* Desktop: Tìm kiếm ngắn */}
            <div className="hidden md:flex items-center flex-1 justify-center max-w-md mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm thiết bị..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </form>
            </div>

            {/* Desktop: Menu + Hotline */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.slice(0, 4).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:19001234"
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
              >
                <Phone size={16} />
                <span>1900 1234</span>
              </a>
            </nav>

            {/* Mobile: Hamburger */}
            <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2">
              <Menu size={28} className="text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* ==================== MOBILE SIDEBAR (PHẢI) ==================== */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-2xl z-50 transition-transform duration-300 md:hidden">
            <div className="p-4 border-b flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-xl">
                  <span className="text-xl">⚡</span>
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
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </form>
            </div>

            <nav className="p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className="block py-3 px-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:19001234"
                className="flex items-center space-x-2 mt-6 py-3 px-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <Phone size={18} />
                <span className="font-medium">1900 1234</span>
              </a>
            </nav>
          </div>
        </>
      )}

      {/* ==================== NỘI DUNG ABOUT ==================== */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-700 mb-6">Về Duy Gia Phát</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nhà phân phối thiết bị cơ điện hàng đầu Việt Nam với hơn <strong>10 năm kinh nghiệm</strong>, 
            cung cấp giải pháp toàn diện cho nhà máy, xưởng sản xuất và công trình công nghiệp.
          </p>
        </section>

        {/* Features */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-700 mb-6">Hành trình phát triển</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong>Duy Gia Phát</strong> được thành lập năm 2015 với sứ mệnh mang đến 
                  các giải pháp cơ điện chất lượng cao, ổn định và tiết kiệm chi phí cho doanh nghiệp Việt.
                </p>
                <p>
                  Từ một công ty nhỏ, chúng tôi đã trở thành đối tác chiến lược của hàng nghìn 
                  nhà máy, khu công nghiệp và dự án lớn trên toàn quốc.
                </p>
                <p>
                  Mỗi sản phẩm đều được kiểm định nghiêm ngặt, đội ngũ kỹ thuật luôn sẵn sàng 
                  hỗ trợ 24/7 để đảm bảo hệ thống vận hành trơn tru.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-9xl text-blue-600">gear</div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">Đội ngũ lãnh đạo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all">
                <div className="text-8xl mb-4">{member.avatar}</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white p-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Liên hệ với chúng tôi</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
              <div className="bg-blue-600 p-3 rounded-full text-white"><Phone size={24} /></div>
              <div><p className="font-bold text-gray-800">Hotline</p><p className="text-lg">1900 1234</p></div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
              <div className="bg-blue-600 p-3 rounded-full text-white"><Mail size={24} /></div>
              <div><p className="font-bold text-gray-800">Email</p><p>contact@duygiaphat.vn</p></div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
              <div className="bg-blue-600 p-3 rounded-full text-white"><MapPin size={24} /></div>
              <div><p className="font-bold text-gray-800">Văn phòng</p><p>TP.HCM & Hà Nội</p></div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
              <div className="bg-blue-600 p-3 rounded-full text-white"><Clock size={24} /></div>
              <div><p className="font-bold text-gray-800">Giờ làm việc</p><p>T2 - T7: 8:00 - 17:30</p></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Cần tư vấn giải pháp?</h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Đội ngũ kỹ thuật của chúng tôi luôn sẵn sàng hỗ trợ bạn chọn thiết bị phù hợp nhất cho dự án.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:19001234"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-bold hover:from-blue-700 hover:to-indigo-800 transition shadow-lg flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Gọi ngay: 1900 1234
            </a>
            <button
              onClick={() => navigate("/")}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition"
            >
              Xem sản phẩm
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}