import React, { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const FlowerShopHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  const categories = [
    { id: 1, name: 'Hoa sinh nhật', icon: '🎂' },
    { id: 2, name: 'Hoa cưới', icon: '💒' },
    { id: 3, name: 'Hoa khai trương', icon: '🎊' },
    { id: 4, name: 'Hoa tình yêu', icon: '💕' },
    { id: 5, name: 'Hoa chia buồn', icon: '🕯️' },
    { id: 6, name: 'Hoa chúc mừng', icon: '🎉' }
  ];

  return (
    <header className="w-full bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-rose-400 to-pink-500 p-2 rounded-xl">
              <span className="text-3xl">🌸</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Hoa Tươi Xinh
              </h1>
              <p className="text-xs text-gray-500">Giao nhanh trong ngày</p>
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            
            {/* Danh mục - All categories visible */}
            {categories.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-rose-600 transition font-medium text-lg"
              >
                <span className="text-xl">{cat.icon}</span>
                <span>{cat.name}</span>
              </a>
            ))}

            <a href="#about" className="text-gray-700 hover:text-rose-600 transition font-medium text-lg">
              Giới thiệu
            </a>
            
            <a href="#contact" className="text-gray-700 hover:text-rose-600 transition font-medium text-lg">
              Liên hệ
            </a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            
            {/* Cart Button */}
            <button className="flex items-center space-x-2 bg-rose-500 text-white px-5 py-2.5 rounded-full hover:bg-rose-600 transition shadow-lg">
              <div className="relative">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-rose-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-medium">Giỏ hàng</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-gray-700 hover:text-rose-600 transition"
            >
              {showMobileMenu ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            
            {/* Danh mục */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-rose-600">Danh mục</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-rose-50 transition"
                  >
                    <span className="text-2xl">{cat.icon}</span>
                    <span className="font-medium text-gray-700">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Other Menu Items */}
            <div className="border-t pt-3 space-y-2">
              <a href="#about" className="block py-2 text-gray-700 font-medium text-lg hover:text-rose-600">
                Giới thiệu
              </a>
              <a href="#contact" className="block py-2 text-gray-700 font-medium text-lg hover:text-rose-600">
                Liên hệ
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default FlowerShopHeader;