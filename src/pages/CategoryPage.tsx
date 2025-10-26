import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Star, ArrowLeft, Filter, SlidersHorizontal, Grid, List } from 'lucide-react';

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
  description?: string;
}

interface CategoryInfo {
  title: string;
  icon: string;
  description: string;
  bgColor: string;
  textColor?: string;
}

const CategoryPage = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [cartCount, setCartCount] = useState(0);

  const categoryInfo: Record<string, CategoryInfo> = {
    'sinh-nhat': {
      title: 'Hoa Sinh Nhật',
      icon: '🎂',
      description: 'Những bó hoa tươi thắm nhất dành tặng sinh nhật',
      bgColor: 'from-pink-400 to-rose-500'
    },
    'cuoi': {
      title: 'Hoa Cưới',
      icon: '💒',
      description: 'Hoa cưới sang trọng, lãng mạn cho ngày trọng đại',
      bgColor: 'from-white to-pink-200',
      textColor: 'text-gray-800'
    },
    'khai-truong': {
      title: 'Hoa Khai Trương',
      icon: '🎊',
      description: 'Hoa chúc mừng khai trương phát đạt, thịnh vượng',
      bgColor: 'from-yellow-400 to-orange-500'
    },
    'tinh-yeu': {
      title: 'Hoa Tình Yêu',
      icon: '💕',
      description: 'Hoa dành tặng người thương - Trao gửi yêu thương',
      bgColor: 'from-red-400 to-pink-500'
    },
    'chia-buon': {
      title: 'Hoa Chia Buồn',
      icon: '🕯️',
      description: 'Hoa chia buồn trang trọng, thành kính',
      bgColor: 'from-gray-400 to-gray-600'
    },
    'chuc-mung': {
      title: 'Hoa Chúc Mừng',
      icon: '🎉',
      description: 'Hoa chúc mừng mọi dịp vui trong cuộc sống',
      bgColor: 'from-green-400 to-teal-500'
    }
  };

  const allProducts: Product[] = [
    { id: 1, name: 'Bó hoa hồng đỏ cao cấp 12 bông', price: 350000, oldPrice: 450000, image: '🌹', rating: 4.8, sales: 152, badge: 'Bán chạy', category: 'tinh-yeu', description: 'Hoa hồng đỏ Ecuador cao cấp, kèm hoa baby trắng' },
    { id: 2, name: 'Bó hoa hướng dương tươi sáng', price: 450000, image: '🌻', rating: 4.9, sales: 98, badge: 'Mới', category: 'sinh-nhat', description: 'Hướng dương tươi kết hợp với hoa cúc và lá xanh' },
    { id: 3, name: 'Bó hoa cúc pastel dịu dàng', price: 350000, image: '🌸', rating: 4.7, sales: 203, badge: 'Yêu thích', category: 'sinh-nhat', description: 'Tông màu pastel nhẹ nhàng, phù hợp nhiều dịp' },
    { id: 4, name: 'Bó hoa lan trắng sang trọng', price: 500000, oldPrice: 600000, image: '🤍', rating: 5.0, sales: 87, badge: 'Cao cấp', category: 'cuoi', description: 'Lan trắng cao cấp, thiết kế tinh tế' },
    { id: 5, name: 'Bó hoa tulip Hà Lan', price: 400000, image: '🌷', rating: 4.6, sales: 134, category: 'tinh-yeu', description: 'Tulip nhiều màu sắc, tươi lâu' },
    { id: 6, name: 'Bó hoa hồng phấn lãng mạn', price: 380000, image: '🌺', rating: 4.8, sales: 176, badge: 'Bán chạy', category: 'tinh-yeu', description: 'Hồng phấn kết hợp với hoa baby và lá thuỷ tiên' },
    { id: 7, name: 'Giỏ hoa chúc mừng đẹp', price: 650000, image: '💐', rating: 4.9, sales: 65, category: 'chuc-mung', description: 'Giỏ hoa mix nhiều loại, thiết kế đẹp mắt' },
    { id: 8, name: 'Bó hoa lily trắng tinh khôi', price: 420000, image: '🌼', rating: 4.7, sales: 112, category: 'khai-truong', description: 'Lily trắng thơm ngát, tinh khiết' },
    { id: 9, name: 'Hoa hồng vàng rực rỡ', price: 320000, image: '🌻', rating: 4.5, sales: 89, category: 'sinh-nhat', description: 'Hồng vàng tươi sáng, ý nghĩa thành công' },
    { id: 10, name: 'Kệ hoa khai trương lớn', price: 1200000, image: '🎊', rating: 5.0, sales: 34, badge: 'Cao cấp', category: 'khai-truong', description: 'Kệ hoa lớn, phù hợp khai trương cửa hàng' },
    { id: 11, name: 'Hoa cẩm chướng nhiều màu', price: 280000, image: '🌺', rating: 4.4, sales: 156, category: 'sinh-nhat', description: 'Cẩm chướng bền đẹp, nhiều màu sắc' },
    { id: 12, name: 'Bó hoa baby trắng tinh khôi', price: 390000, image: '🤍', rating: 4.7, sales: 78, category: 'cuoi', description: 'Baby trắng tinh khôi, nhẹ nhàng' },
  ];

  const currentCategory = category ? categoryInfo[category] : categoryInfo['sinh-nhat'];
  const filteredProducts = allProducts.filter(p => p.category === category);

  // Sorting and filtering logic
  let sortedProducts = [...filteredProducts];
  
  if (sortBy === 'price-low') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'sales') {
    sortedProducts.sort((a, b) => b.sales - a.sales);
  }

  // Price filter
  if (priceRange === 'under-400k') {
    sortedProducts = sortedProducts.filter(p => p.price < 400000);
  } else if (priceRange === '400k-600k') {
    sortedProducts = sortedProducts.filter(p => p.price >= 400000 && p.price <= 600000);
  } else if (priceRange === 'over-600k') {
    sortedProducts = sortedProducts.filter(p => p.price > 600000);
  }

  const handleProductClick = (productId: number) => {
    navigate(`/san-pham/${productId}`);
  };

  const addToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    setCartCount(prev => prev + 1);
    console.log(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  const toggleWishlist = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Đã thêm ${product.name} vào yêu thích!`);
  };

  if (!category || !currentCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😢</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Không tìm thấy danh mục</h2>
          <button 
            onClick={() => navigate('/')}
            className="bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition"
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
                <p className="text-xs text-gray-500">Danh mục</p>
              </div>
            </button>
            
            <button 
              onClick={() => navigate('/gio-hang')} 
              className="relative p-2 text-gray-700 hover:text-rose-600 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Category Banner */}
      <section className={`relative bg-gradient-to-r ${currentCategory.bgColor} ${
        currentCategory.textColor || 'text-white'
      } py-12 md:py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Quay lại trang chủ</span>
          </button>
          
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="text-7xl md:text-8xl animate-bounce">{currentCategory.icon}</div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">{currentCategory.title}</h1>
              <p className="text-lg md:text-xl opacity-90 mb-2">{currentCategory.description}</p>
              <p className="text-sm opacity-75">{sortedProducts.length} sản phẩm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Sort */}
              <div className="flex items-center space-x-3">
                <SlidersHorizontal size={20} className="text-gray-600" />
                <span className="text-gray-700 font-medium">Sắp xếp:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 min-w-40"
                >
                  <option value="popular">Phổ biến nhất</option>
                  <option value="price-low">Giá thấp đến cao</option>
                  <option value="price-high">Giá cao đến thấp</option>
                  <option value="rating">Đánh giá cao nhất</option>
                  <option value="sales">Bán chạy nhất</option>
                </select>
              </div>

              {/* Price Filter */}
              <div className="flex items-center space-x-3">
                <Filter size={20} className="text-gray-600" />
                <span className="text-gray-700 font-medium">Giá:</span>
                <select 
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500 min-w-40"
                >
                  <option value="all">Tất cả giá</option>
                  <option value="under-400k">Dưới 400.000đ</option>
                  <option value="400k-600k">400.000đ - 600.000đ</option>
                  <option value="over-600k">Trên 600.000đ</option>
                </select>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-rose-600 text-white' : 'text-gray-600'}`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-rose-600 text-white' : 'text-gray-600'}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😢</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Không tìm thấy sản phẩm</h3>
            <p className="text-gray-500 mb-6">Vui lòng thử thay đổi bộ lọc hoặc khoảng giá</p>
            <button
              onClick={() => {
                setPriceRange('all');
                setSortBy('popular');
              }}
              className="bg-rose-600 text-white px-6 py-3 rounded-full hover:bg-rose-700 transition"
            >
              Xóa bộ lọc
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          // Grid View
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map(product => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500">
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
        ) : (
          // List View
          <div className="space-y-4">
            {sortedProducts.map(product => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Product Image */}
                  <div className="relative md:w-48 h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center overflow-hidden">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-500">
                      {product.image}
                    </div>
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold ${
                        product.badge === 'Bán chạy' ? 'bg-rose-600 text-white' :
                        product.badge === 'Mới' ? 'bg-green-500 text-white' :
                        product.badge === 'Yêu thích' ? 'bg-yellow-500 text-white' :
                        'bg-purple-600 text-white'
                      }`}>
                        {product.badge}
                      </div>
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-1 p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                        
                        <div className="flex items-center mb-4 space-x-4">
                          <div className="flex items-center">
                            <Star size={16} className="text-yellow-400 fill-current" />
                            <span className="ml-1 font-medium">{product.rating}</span>
                          </div>
                          <span className="text-gray-400 text-sm">({product.sales} đã bán)</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          {product.oldPrice && (
                            <span className="text-gray-400 line-through text-sm mr-2">
                              {product.oldPrice.toLocaleString()}đ
                            </span>
                          )}
                          <span className="text-rose-600 font-bold text-2xl">
                            {product.price.toLocaleString()}đ
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <button 
                            onClick={(e) => toggleWishlist(product, e)}
                            className="p-2 rounded-full border border-gray-300 hover:bg-rose-50 transition-colors"
                          >
                            <Heart size={18} className="text-rose-600" />
                          </button>
                          <button 
                            onClick={(e) => addToCart(product, e)}
                            className="bg-rose-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-rose-700 transition flex items-center space-x-2"
                          >
                            <ShoppingCart size={18} />
                            <span>Thêm vào giỏ</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {sortedProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="border-2 border-rose-600 text-rose-600 px-8 py-3 rounded-full font-bold hover:bg-rose-600 hover:text-white transition-all">
              Xem thêm sản phẩm
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-rose-500 p-2 rounded-xl">
                  <span className="text-xl">🌸</span>
                </div>
                <h3 className="text-xl font-bold text-rose-400">Hoa Tươi Xinh</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Mang yêu thương đến mọi nhà với những bó hoa tươi đẹp nhất
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Liên kết</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => navigate('/')} className="hover:text-rose-400 transition-colors">Trang chủ</button></li>
                <li><button onClick={() => navigate('/about')} className="hover:text-rose-400 transition-colors">Về chúng tôi</button></li>
                <li><button className="hover:text-rose-400 transition-colors">Khuyến mãi</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-rose-400 transition-colors">Chính sách đổi trả</button></li>
                <li><button className="hover:text-rose-400 transition-colors">Hướng dẫn đặt hàng</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 Hotline: 1900-1234</li>
                <li>📧 Email: contact@hoatuoixinh.vn</li>
                <li>📍 TP. Hồ Chí Minh & Hà Nội</li>
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

export default CategoryPage;