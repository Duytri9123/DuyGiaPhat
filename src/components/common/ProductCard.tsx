// src/components/common/ProductCard.tsx
import { Heart, Star, Phone } from 'lucide-react';
import { type Product } from '../../data/mockData';
import { useState, useEffect } from 'react';
import type React from 'react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onToggleWishlist?: () => void;
}

export default function ProductCard({
  product,
  onClick,
  onToggleWishlist,
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Ảnh fallback
  const fallbackImage =
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop';

  const displayImage = imageError ? fallbackImage : product.image;

  // Kiểm tra sản phẩm có trong wishlist không
  useEffect(() => {
    const checkWishlist = () => {
      const savedWishlist = localStorage.getItem('wishlist');
      if (savedWishlist) {
        try {
          const wishlist = JSON.parse(savedWishlist);
          const isInWishlist = wishlist.some((item: Product) => item.id === product.id);
          setIsWishlisted(isInWishlist);
        } catch (error) {
          console.error('Error checking wishlist:', error);
        }
      }
    };

    checkWishlist();

    // Listen cho wishlist updates
    const handleWishlistUpdate = () => {
      checkWishlist();
    };

    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    window.addEventListener('storage', handleWishlistUpdate);

    return () => {
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
      window.removeEventListener('storage', handleWishlistUpdate);
    };
  }, [product.id]);

  // Toggle wishlist
  const handleToggleWishlist = () => {
    const savedWishlist = localStorage.getItem('wishlist');
    let wishlist: Product[] = [];

    if (savedWishlist) {
      try {
        wishlist = JSON.parse(savedWishlist);
      } catch (error) {
        wishlist = [];
      }
    }

    const isInWishlist = wishlist.some((item) => item.id === product.id);

    if (isInWishlist) {
      // Xóa khỏi wishlist
      wishlist = wishlist.filter((item) => item.id !== product.id);
      setIsWishlisted(false);
    } else {
      // Thêm vào wishlist
      wishlist.push(product);
      setIsWishlisted(true);
    }

    // Lưu vào localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // Dispatch event để update header
    window.dispatchEvent(new Event('wishlistUpdated'));

    // Callback bên ngoài nếu cần
    if (onToggleWishlist) {
      onToggleWishlist();
    }
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const savedCart = localStorage.getItem('cart');
    let cart: Product[] = [];

    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          cart = parsed;
        }
      } catch (error) {
        cart = [];
      }
    }

    const existingItem = cart.find((item) => item.id === product.id);

    if (!existingItem) {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cartUpdated'));
      alert(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
    } else {
      alert(`ℹ️ Sản phẩm này đã có trong giỏ hàng!`);
    }
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-amber-200 flex flex-col h-full"
    >
      {/* HÌNH ẢNH SẢN PHẨM */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-amber-50 overflow-hidden flex-shrink-0">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={() => setImageError(true)}
          loading="lazy"
        />

        {/* Badge góc trên trái */}
        {product.badge && (
          <div
            className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              product.badge === 'Bán chạy'
                ? 'bg-red-600 text-white'
                : product.badge === 'Mới'
                ? 'bg-green-500 text-white'
                : product.badge === 'Cao cấp'
                ? 'bg-purple-600 text-white'
                : 'bg-amber-500 text-white'
            }`}
          >
            {product.badge}
          </div>
        )}
      </div>

      {/* NỘI DUNG */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Tên sản phẩm - CỐ ĐỊNH CHIỀU CAO */}
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors h-12 text-sm leading-tight">
          {product.name}
        </h3>

        {/* Đánh giá & lượt hỏi */}
        <div className="flex items-center mb-3 space-x-2 text-sm">
          <div className="flex items-center space-x-1">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="font-semibold text-gray-700">{product.rating}</span>
          </div>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500">
            <span className="font-medium text-gray-700">{product.sales}</span> lượt hỏi
          </span>
        </div>

        {/* Mô tả ngắn - CỐ ĐỊNH CHIỀU CAO */}
        <div className="mb-3 h-10 flex-shrink-0">
          {product.description ? (
            <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
              {product.description}
            </p>
          ) : (
            <div className="h-full"></div>
          )}
        </div>

        {/* Trạng thái kho */}
        <div className="mb-3 flex items-center space-x-2">
          <div
            className={`w-2 h-2 rounded-full flex-shrink-0 ${
              product.inStock ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <span
            className={`text-sm font-medium ${
              product.inStock ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {product.inStock ? 'Còn hàng' : 'Hết hàng'}
          </span>
        </div>

        {/* Spacer đẩy nút xuống dưới */}
        <div className="flex-grow"></div>

        {/* NÚT YÊUTHÍCH + GIỎ HÀNG */}
        <div className="flex gap-2">
          {/* Nút yêu thích */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggleWishlist();
            }}
            className={`flex-1 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all text-sm border-2 ${
              isWishlisted
                ? 'bg-red-500 text-white border-red-500 hover:bg-red-600'
                : 'bg-white text-red-500 border-red-500 hover:bg-red-50'
            }`}
            aria-label={isWishlisted ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}
          >
            <Heart size={16} className={isWishlisted ? 'fill-current' : ''} />
            <span className="hidden sm:inline">Yêu thích</span>
          </button>

          {/* Nút giỏ hàng */}
          <button
            onClick={handleAddToCart}
            className="flex-1 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-medium flex items-center justify-center gap-2 transition-all text-sm"
            aria-label="Thêm vào giỏ hàng"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className="hidden sm:inline">Giỏ hàng</span>
          </button>
        </div>

        {/* THÔNG SỐ KỸ THUẬT NỔI BẬT - ẨN TRÊN MOBILE */}
        <div className="hidden md:block pt-3 border-t border-gray-100 h-20 flex-shrink-0">
          {product.specs && product.specs.length > 0 && (
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {product.specs.slice(0, 2).map((spec, index) => (
                <div key={index} className="flex flex-col justify-start overflow-hidden">
                  <span className="text-gray-500 text-xs font-medium mb-0.5 whitespace-nowrap">
                    {spec.label}:
                  </span>
                  <span className="text-gray-700 font-semibold text-xs leading-tight line-clamp-2 break-words">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}