// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import logo from "../../assets/logo.png";

const ZaloIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.49 10.272v-.45h1.347v6.322h-.77a.576.576 0 0 1-.577-.573v.001a3.27 3.27 0 0 1-1.938.632a3.284 3.284 0 0 1-3.284-3.282a3.284 3.284 0 0 1 3.284-3.282a3.27 3.27 0 0 1 1.937.632zM6.919 7.79v.205c0 .382-.051.694-.3 1.06l-.03.034a8 8 0 0 0-.242.285L2.024 14.8h4.895v.768a.576.576 0 0 1-.577.576H0v-.362c0-.443.11-.641.25-.847L4.858 9.23H.192V7.79zm8.551 8.354a.48.48 0 0 1-.48-.48V7.79h1.441v8.354zM20.693 9.6a3.306 3.306 0 1 1 .002 6.612a3.306 3.306 0 0 1-.002-6.612m-10.14 5.253a1.932 1.932 0 1 0 0-3.863a1.932 1.932 0 0 0 0 3.863m10.14-.003a1.945 1.945 0 1 0 0-3.89a1.945 1.945 0 0 0 0 3.89"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Social */}
          <div>
            <div className="mb-6">
              <img
                src={logo}
                alt="Duy Gia Phát Logo"
                className="h-24 w-auto object-contain"
              />
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Chuyên cung cấp vật tư, thiết bị điện công nghiệp và giải pháp tự động hóa hàng đầu Việt Nam. Chất lượng không thương hiệu.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition">
                <Facebook size={18} className="text-slate-300" />
              </a>
              <a href="https://zalo.me/0976707297" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition text-slate-300">
                <ZaloIcon />
              </a>
              <a href="mailto:info@duygiaphat.com.vn" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition">
                <Mail size={18} className="text-slate-300" />
              </a>
            </div>
          </div>

          {/* Column 2: Sản phẩm chính */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 pb-2 border-b border-amber-500 border-opacity-30">
              Sản phẩm chính
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-amber-500 transition cursor-pointer flex items-center gap-2">
                <span className="text-amber-500">•</span>
                <span>Hệ thống Tủ điện MSB</span>
              </li>
              <li className="hover:text-amber-500 transition cursor-pointer flex items-center gap-2">
                <span className="text-amber-500">•</span>
                <span>Thang máng cáp điện</span>
              </li>
              <li className="hover:text-amber-500 transition cursor-pointer flex items-center gap-2">
                <span className="text-amber-500">•</span>
                <span>Tủ tu bộ công suất</span>
              </li>
              <li className="hover:text-amber-500 transition cursor-pointer flex items-center gap-2">
                <span className="text-amber-500">•</span>
                <span>Vỏ tủ điện Inox 304</span>
              </li>
              <li className="hover:text-amber-500 transition cursor-pointer flex items-center gap-2">
                <span className="text-amber-500">•</span>
                <span>Thiết bị đóng cắt</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Thông tin liên hệ */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 pb-2 border-b border-amber-500 border-opacity-30">
              Thông tin liên hệ
            </h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex gap-3">
                <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Khu Công Nghiệp Tân Bình, P. Tây Thạnh, Q. Tân Phú, TP. Hồ Chí Minh</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Hotline: 090x xxx xxx</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400">info@duygiaphat.com.vn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Vị trí (Map) */}
          <div>
            <h3 className="text-white font-bold text-base mb-6 pb-2 border-b border-amber-500 border-opacity-30">
              Vị trí
            </h3>
            <div className="rounded-lg overflow-hidden h-40 bg-slate-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3282957876586!2d106.63547!3d10.785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f17e9c5e0cf%3A0x0!2sDuy%20Gia%20Phat!5e0!3m2!1svi!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 bg-slate-900/50 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 CÔNG TY TNHH KỸ THUẬT DUY GIA PHÁT. TẤT CẢ QUYỀN LỢI ĐƯỢC BẢO LƯU.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-500 transition">CHÍNH SÁCH BẢO MẬT</a>
            <a href="#" className="hover:text-amber-500 transition">ĐIỀU KHOẢN DỊCH VỤ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}