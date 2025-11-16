// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, ArrowUp } from "lucide-react";
import { categories } from "../../data/categories";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Cột 1: Logo + Giới thiệu */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-xl">
                <span className="text-xl text-white font-bold">Power</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Duy Gia Phát</h3>
                <p className="text-xs text-gray-400">Thiết bị cơ điện chính hãng</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Nhà phân phối thiết bị cơ điện hàng đầu Việt Nam với hơn <strong>10 năm kinh nghiệm</strong>. 
              Cam kết hàng chính hãng, giao nhanh, bảo hành dài hạn.
            </p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Cột 2: Danh mục */}
          <div>
            <h4 className="font-bold text-lg mb-4">Danh mục sản phẩm</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/danh-muc/${cat.slug}`} className="hover:text-blue-400 transition flex items-center gap-1">
                    <span></span> {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hỗ trợ khách hàng</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/gioi-thieu" className="hover:text-blue-400 transition">Chính sách bảo hành</Link></li>
              <li><Link to="/gioi-thieu" className="hover:text-blue-400 transition">Hướng dẫn mua hàng</Link></li>
              <li><Link to="/gioi-thieu" className="hover:text-blue-400 transition">Chính sách vận chuyển</Link></li>
              <li><Link to="/gioi-thieu" className="hover:text-blue-400 transition">Câu hỏi thường gặp</Link></li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ */}
          <div>
            <h4 className="font-bold text-lg mb-4">Liên hệ ngay</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-blue-400" />
                <span>Hotline: <a href="tel:19001234" className="text-white font-medium">1900 1234</a></span>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:contact@duygiaphat.vn" className="text-white">contact@duygiaphat.vn</a>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-blue-400" />
                <span>TP.HCM & Hà Nội</span>
              </p>
              <p className="flex items-center gap-2 text-gray-400">
                <Clock size={16} className="text-blue-400" />
                <span>T2 - T7: 8:00 - 17:30</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 Duy Gia Phát. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-1 hover:text-blue-400 transition"
          >
            <ArrowUp size={14} /> Về đầu trang
          </button>
        </div>
      </div>
    </footer>
  );
}