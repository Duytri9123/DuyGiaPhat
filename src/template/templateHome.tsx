import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Truck, Phone, Shield, Menu, X, Search } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  sales: number;
  badge?: string;
  category: string;
}

interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
  slug: string;
}

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const TemplateHome = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProducts: Product[] = [
    { 
      id: 1, 
      name: 'Bó hoa hồng đỏ cao cấp', 
      price: 350000, 
      oldPrice: 450000,
      image: '🌹', 
      rating: 4.8,
      sales: 152,
      badge: 'Bán chạy',
      category: 'tinh-yeu'
    },
    { 
      id: 2, 
      name: 'Bó hoa hướng dương tươi', 
      price: 450000, 
      image: '🌻', 
      rating: 4.9,
      sales: 98,
      badge: 'Mới',
      category: 'sinh-nhat'
    },
    { 
      id: 3, 
      name: 'Bó hoa cúc pastel', 
      price: 350000, 
      image: '🌸', 
      rating: 4.7,
      sales: 203,
      badge: 'Yêu thích',
      category: 'sinh-nhat'
    },
    { 
      id: 4, 
      name: 'Bó hoa lan trắng sang trọng', 
      price: 500000, 
      oldPrice: 600000,
      image: '🤍', 
      rating: 5.0,
      sales: 87,
      badge: 'Cao cấp',
      category: 'cuoi'
    },
    { 
      id: 5, 
      name: 'Bó hoa tulip Hà Lan', 
      price: 400000, 
      image: '🌷', 
      rating: 4.6,
      sales: 134,
      category: 'tinh-yeu'
    },
    { 
      id: 6, 
      name: 'Bó hoa hồng phấn lãng mạn', 
      price: 380000, 
      image: '🌺', 
      rating: 4.8,
      sales: 176,
      badge: 'Bán chạy',
      category: 'tinh-yeu'
    },
    { 
      id: 7, 
      name: 'Giỏ hoa chúc mừng đẹp', 
      price: 650000, 
      image: '💐', 
      rating: 4.9,
      sales: 65,
      category: 'chuc-mung'
    },
    { 
      id: 8, 
      name: 'Bó hoa lily trắng tinh khôi', 
      price: 420000, 
      image: '🌼', 
      rating: 4.7,
      sales: 112,
      category: 'khai-truong'
    }
  ];

  const categories: Category[] = [
    { id: 1, name: 'Hoa sinh nhật', icon: '🎂', count: 156, slug: 'sinh-nhat' },
    { id: 2, name: 'Hoa cưới', icon: '💒', count: 89, slug: 'cuoi' },
    { id: 3, name: 'Hoa khai trương', icon: '🎊', count: 134, slug: 'khai-truong' },
    { id: 4, name: 'Hoa tình yêu', icon: '💕', count: 267, slug: 'tinh-yeu' },
    { id: 5, name: 'Hoa chia buồn', icon: '🕯️', count: 45, slug: 'chia-buon' },
    { id: 6, name: 'Hoa chúc mừng', icon: '🎉', count: 198, slug: 'chuc-mung' }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Nguyễn Thu Hà',
      rating: 5,
      comment: 'Hoa rất tươi và đẹp, giao hàng đúng giờ. Nhân viên tư vấn nhiệt tình, sẽ ủng hộ shop dài lâu!',
      date: '2 ngày trước'
    },
    {
      id: 2,
      name: 'Trần Minh Tuấn',
      rating: 5,
      comment: 'Đặt hoa sinh nhật cho vợ, cô ấy rất thích. Hoa đẹp hơn trong hình, giao hàng nhanh chóng.',
      date: '1 tuần trước'
    },
    {
      id: 3,
      name: 'Lê Thị Mai',
      rating: 5,
      comment: 'Hoa đẹp hơn mong đợi, giá cả hợp lý. Dịch vụ giao hàng chuyên nghiệp, rất đáng tiền!',
      date: '3 ngày trước'
    }
  ];

  const handleCategoryClick = (slug: string) => {
    navigate(`/danh-muc/${slug}`);
    setMobileMenuOpen(false);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/san-pham/${productId}`);
  };

  const addToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    setCartCount(prev => prev + 1);
    // In thực tế sẽ có toast notification thay vì alert
    console.log(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  const toggleWishlist = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Đã thêm ${product.name} vào yêu thích!`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tim-kiem?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const featuredCategories = categories.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Header/Navigation */}
      <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => navigate('/')} 
              className="flex items-center space-x-3 group"
            >
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-2 rounded-xl group-hover:scale-105 transition-transform">
                <span className="text-2xl">🌸</span>
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Hoa Tươi Xinh
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">Giao nhanh trong 2H</p>
              </div>
            </button>

            {/* Search Bar - Desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Tìm kiếm hoa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-rose-600"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => navigate('/')} 
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
              >
                Trang chủ
              </button>
              <button 
                onClick={() => navigate('/about')} 
                className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
              >
                Giới thiệu
              </button>
              <button 
                onClick={() => navigate('/gio-hang')} 
                className="relative p-2 text-gray-700 hover:text-rose-600 transition-colors"
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Search Bar - Mobile */}
          <form onSubmit={handleSearch} className="md:hidden mt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm hoa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-rose-600"
              >
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4 animate-slideDown">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => { navigate('/'); setMobileMenuOpen(false); }} 
                  className="text-left text-gray-700 hover:text-rose-600 font-medium py-2 transition-colors"
                >
                  Trang chủ
                </button>
                <button 
                  onClick={() => { navigate('/about'); setMobileMenuOpen(false); }} 
                  className="text-left text-gray-700 hover:text-rose-600 font-medium py-2 transition-colors"
                >
                  Giới thiệu
                </button>
                <button 
                  onClick={() => { navigate('/gio-hang'); setMobileMenuOpen(false); }} 
                  className="text-left text-gray-700 hover:text-rose-600 font-medium py-2 flex items-center space-x-2 transition-colors"
                >
                  <ShoppingCart size={20} />
                  <span>Giỏ hàng ({cartCount})</span>
                </button>
                
                {/* Mobile Categories */}
                <div className="border-t pt-4">
                  <h3 className="font-bold text-gray-800 mb-3">Danh mục</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.slice(0, 4).map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.slug)}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-rose-50 transition-colors text-left"
                      >
                        <span className="text-xl">{cat.icon}</span>
                        <span className="text-sm">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-9xl animate-pulse">🌸</div>
          <div className="absolute bottom-20 right-20 text-8xl animate-bounce delay-1000">🌺</div>
          <div className="absolute top-40 right-40 text-7xl animate-pulse delay-500">🌷</div>
          <div className="absolute bottom-10 left-40 text-6xl animate-bounce delay-1500">🌻</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hoa Tươi Giao
                <br />
                <span className="text-yellow-200 animate-pulse">Trong 2 Giờ</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-rose-100 leading-relaxed">
                Giao hàng nhanh trong 2 giờ - Hoa tươi 100% bảo đảm
                <br />
                Mang yêu thương và hạnh phúc đến mọi nhà
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => handleCategoryClick('tinh-yeu')}
                  className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Mua ngay
                </button>
                <button 
                  onClick={() => navigate('/about')}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-rose-600 transition-all"
                >
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
            
            <div className="text-8xl lg:text-9xl text-center animate-float">
              💐
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white shadow-lg py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-rose-100 p-4 rounded-full shrink-0">
                <Truck className="text-rose-600" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Giao hàng nhanh 2H</h3>
                <p className="text-gray-600">Miễn phí nội thành HCM & HN</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-rose-100 p-4 rounded-full shrink-0">
                <Shield className="text-rose-600" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Hoa tươi 100%</h3>
                <p className="text-gray-600">Đảm bảo chất lượng, tươi mới</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-rose-100 p-4 rounded-full shrink-0">
                <Phone className="text-rose-600" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Hỗ trợ 24/7</h3>
                <p className="text-gray-600">Hotline: 1900-1234</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4">Danh Mục Hoa</h2>
          <p className="text-gray-600 text-lg">Chọn hoa phù hợp cho mọi dịp đặc biệt</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {featuredCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.slug)}
              className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 group"
            >
              <div className="text-5xl md:text-6xl mb-3 md:mb-4 text-center group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-center font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                {cat.name}
              </h3>
              <p className="text-center text-xs md:text-sm text-gray-500">{cat.count} sản phẩm</p>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-white to-pink-50 rounded-3xl -mt-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4">Sản Phẩm Nổi Bật</h2>
          <p className="text-gray-600 text-lg">Những bó hoa được yêu thích nhất</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center overflow-hidden">
                <div className="text-7xl group-hover:scale-110 transition-transform duration-500">
                  {product.image}
                </div>
                
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
                    product.badge === 'Bán chạy' ? 'bg-rose-600 text-white' :
                    product.badge === 'Mới' ? 'bg-green-500 text-white' :
                    product.badge === 'Yêu thích' ? 'bg-yellow-500 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {product.badge}
                  </div>
                )}
                
                {/* Wishlist Button */}
                <button 
                  onClick={(e) => toggleWishlist(product, e)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-rose-50 transition-colors"
                >
                  <Heart size={18} className="text-rose-600" />
                </button>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 hover:text-rose-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3 space-x-2">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">({product.sales} đã bán)</span>
                </div>
                
                {/* Price */}
                <div className="mb-4">
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm mr-2">
                      {product.oldPrice.toLocaleString()}đ
                    </span>
                  )}
                  <span className="text-rose-600 font-bold text-xl">
                    {product.price.toLocaleString()}đ
                  </span>
                </div>
                
                {/* Add to Cart Button */}
                <button 
                  onClick={(e) => addToCart(product, e)}
                  className="w-full bg-rose-600 text-white py-3 rounded-xl font-medium hover:bg-rose-700 transition-all flex items-center justify-center space-x-2 group/btn"
                >
                  <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform" />
                  <span>Thêm vào giỏ</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => handleCategoryClick('tinh-yeu')}
            className="bg-rose-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Xem tất cả sản phẩm
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4">Khách Hàng Nói Gì</h2>
            <p className="text-gray-600 text-lg">Đánh giá từ khách hàng đã mua hàng</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map(testimonial => (
              <div 
                key={testimonial.id} 
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={`${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.date}</p>
                  </div>
                  <div className="text-3xl">😊</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rose-500 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Đặt Hoa Ngay Hôm Nay</h2>
          <p className="text-lg md:text-xl mb-8 text-rose-100">
            Nhận ưu đãi đặc biệt 10% cho đơn hàng đầu tiên
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="tel"
              placeholder="Nhập số điện thoại"
              className="px-6 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 flex-1"
            />
            <button className="bg-yellow-400 text-rose-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl">
              Nhận ưu đãi
            </button>
          </div>
          <p className="text-rose-200 text-sm mt-4">Chúng tôi sẽ liên hệ tư vấn trong 5 phút</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-rose-500 p-2 rounded-xl">
                  <span className="text-xl">🌸</span>
                </div>
                <h3 className="text-xl font-bold text-rose-400">Hoa Tươi Xinh</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mang yêu thương và hạnh phúc đến mọi nhà với những bó hoa tươi đẹp nhất, 
                dịch vụ chuyên nghiệp nhất.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigate('/')} className="hover:text-rose-400 transition-colors">Trang chủ</button></li>
                <li><button onClick={() => navigate('/about')} className="hover:text-rose-400 transition-colors">Về chúng tôi</button></li>
                <li><button onClick={() => handleCategoryClick('khuyen-mai')} className="hover:text-rose-400 transition-colors">Khuyến mãi</button></li>
                <li><button className="hover:text-rose-400 transition-colors">Tin tức</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Hỗ trợ khách hàng</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-rose-400 transition-colors">Chính sách đổi trả</button></li>
                <li><button className="hover:text-rose-400 transition-colors">Hướng dẫn đặt hàng</button></li>
                <li><button className="hover:text-rose-400 transition-colors">Phương thức thanh toán</button></li>
                <li><button className="hover:text-rose-400 transition-colors">Câu hỏi thường gặp</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Liên hệ</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <Phone size={16} />
                  <span>Hotline: 1900-1234</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>📧</span>
                  <span>contact@hoatuoixinh.vn</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span>📍</span>
                  <span>TP. Hồ Chí Minh & Hà Nội</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Hoa Tươi Xinh. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TemplateHome;