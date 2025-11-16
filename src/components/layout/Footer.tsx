// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, ArrowUp } from "lucide-react";
import { categories } from "../../data/categories";
import logo from "../../assets/logo.jpg";
export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-10 lg:py-12">

                {/* ==================== GRID: 1-2-4 CỘT ==================== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">

                    {/* CỘT 1: LOGO + GIỚI THIỆU (chiếm 2 cột trên LG) */}
                    <div className="lg:col-span-2 space-y-5">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                                <img
                                    src={logo}
                                    alt="Duy Gia Phát Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    Duy Gia Phát
                                </h3>
                                <p className="text-xs lg:text-sm text-gray-400">Thiết bị cơ điện chính hãng</p>
                            </div>
                        </Link>

                        <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
                            Nhà phân phối <strong>thiết bị cơ điện hàng đầu Việt Nam</strong> với hơn <strong className="text-yellow-400">10 năm kinh nghiệm</strong>.
                            Cam kết hàng chính hãng, giao nhanh, bảo hành dài hạn.
                        </p>

                        {/* Social */}
                        <div className="flex gap-3">
                            <a
                                href="https://facebook.com/duygiaphat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-2.5 rounded-full hover:bg-blue-600 transition-all hover:scale-110"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://youtube.com/@duygiaphat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-2.5 rounded-full hover:bg-red-600 transition-all hover:scale-110"
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-2 gap-2">

                        {/* CỘT 2: DANH MỤC */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-lg text-blue-400">Danh mục sản phẩm</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                {categories.slice(0, 7).map((cat) => (
                                    <li key={cat.slug}>
                                        <Link
                                            to={`/danh-muc/${cat.slug}`}
                                            className="flex items-center gap-2 hover:text-yellow-400 transition group"
                                        >
                                            <span className="text-yellow-500 opacity-0 group-hover:opacity-100 transition">›</span>
                                            {cat.name}
                                        </Link>
                                    </li>
                                ))}
                                {categories.length > 7 && (
                                    <li>
                                        <Link
                                            to="/san-pham"
                                            className="text-yellow-400 font-medium text-sm hover:underline"
                                        >
                                            Xem tất cả →
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>

                        {/* CỘT 3: HỖ TRỢ */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-lg text-blue-400">Hỗ trợ khách hàng</h4>
                            <ul className="space-y-2 text-sm text-gray-300">
                                {[
                                    { label: "Chính sách bảo hành", to: "/chinh-sach/bao-hanh" },
                                    { label: "Hướng dẫn mua hàng", to: "/huong-dan/mua-hang" },
                                    { label: "Chính sách vận chuyển", to: "/chinh-sach/van-chuyen" },
                                    { label: "Câu hỏi thường gặp", to: "/faq" },
                                    { label: "Báo giá dự án", to: "/bao-gia" },
                                ].map((item) => (
                                    <li key={item.to}>
                                        <Link
                                            to={item.to}
                                            className="hover:text-yellow-400 transition flex items-center gap-1"
                                        >
                                            <span className="text-xs">•</span> {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CỘT 4: LIÊN HỆ + HOTLINE */}
                    <div className="space-y-5">
                        <h4 className="font-bold text-lg text-blue-400">Liên hệ ngay</h4>
                        <div className="space-y-4 text-sm">
                            <a
                                href="tel:0976707297"
                                className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all group"
                            >
                                <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-gray-300 text-xs">Hotline 24/7</p>
                                    <p className="font-bold text-lg">0976707297</p>
                                </div>
                            </a>

                            <div className="space-y-3 text-gray-300">
                                <p className="flex items-center gap-2">
                                    <Mail size={16} className="text-yellow-400" />
                                    <a href="mailto:contact@duygiaphat.vn" className="hover:text-yellow-400 transition">
                                        contact@duygiaphat.vn
                                    </a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <MapPin size={16} className="text-yellow-400" />
                                    <span>TP.HCM • Hà Nội • Đà Nẵng</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Clock size={16} className="text-yellow-400" />
                                    <span>T2 - T7: 8:00 - 17:30</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==================== FOOTER BOTTOM ==================== */}
                <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3">
                    <p>© 2025 <span className="text-yellow-400 font-medium">Duy Gia Phát</span>. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link to="/dieu-khoan" className="hover:text-yellow-400 transition">Điều khoản</Link>
                        <span>•</span>
                        <Link to="/chinh-sach" className="hover:text-yellow-400 transition">Chính sách</Link>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-1 hover:text-yellow-400 transition font-medium"
                    >
                        <ArrowUp size={14} />
                        Về đầu trang
                    </button>
                </div>
            </div>
        </footer>
    );
}