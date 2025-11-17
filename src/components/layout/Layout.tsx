// src/components/layout/Layout.tsx
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Theo dõi scroll để hiện/ẩn nút Back to Top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hàm scroll lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen relative">
        <Outlet />
      </main>
      <Footer />

      {/* ==================== NÚT BACK TO TOP ==================== */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-8 z-50 group transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Lên đầu trang"
      >
        <div className="relative">
          {/* Hiệu ứng glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
          
          {/* Nút chính */}
          <div className="relative bg-gradient-to-r from-gray-700 to-gray-800 p-3 rounded-full shadow-xl hover:shadow-gray-600/50 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
            <ChevronUp className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap hidden lg:block">
            <div className="bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg">
              Lên đầu trang
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-gray-900"></div>
            </div>
          </div>
        </div>
      </button>

      {/* ==================== ZALO NỔI (FLOATING BUTTON) ==================== */}
      <a
        href="https://zalo.me/0976707297"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat Zalo"
      >
        <div className="relative">
          {/* Hiệu ứng rung nhẹ khi hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 animate-pulse"></div>
          
          {/* Nút chính */}
          <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.89 1.402 5.45 3.589 7.163l-.766 2.844a.5.5 0 00.713.572l3.167-1.823A10.277 10.277 0 0012 20.486c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm3.5 11.5h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1z" />
            </svg>
          </div>

          {/* Tooltip khi hover (chỉ trên desktop) */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap hidden lg:block">
            <div className="bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg">
              Chat Zalo: 0976 707 297
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-gray-900"></div>
            </div>
          </div>

          {/* Badge "Online" */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
            Online
          </span>
        </div>
      </a>
    </>
  );
}