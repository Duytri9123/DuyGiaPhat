// src/components/common/ProductCard.tsx
import { Heart, Star, Phone } from 'lucide-react';
import { type Product } from '../../data/mockData';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onToggleWishlist: (product: Product) => void;
  onClick: () => void;
  isWishlisted?: boolean;
}

export default function ProductCard({
  product,
  onToggleWishlist,
  onClick,
  isWishlisted = false,
}: ProductCardProps) {
  // State để theo dõi lỗi tải ảnh
  const [imageError, setImageError] = useState(false);

  // Ảnh fallback (Unsplash hoặc placeholder)
  const fallbackImage =
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop';

  // Ảnh thực tế
  const displayImage = imageError ? fallbackImage : product.image;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-blue-200 flex flex-col h-full"
    >
      {/* HÌNH ẢNH SẢN PHẨM */}
      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden flex-shrink-0">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={() => setImageError(true)}
          loading="lazy" // Tối ưu hiệu năng
        />

        {/* Badge góc trên trái */}
        {product.badge && (
          <div
            className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg transition-all ${
              product.badge === 'Bán chạy'
                ? 'bg-red-600 text-white'
                : product.badge === 'Mới'
                ? 'bg-green-500 text-white'
                : product.badge === 'Cao cấp'
                ? 'bg-purple-600 text-white'
                : 'bg-blue-600 text-white'
            }`}
          >
            {product.badge}
          </div>
        )}

        {/* Nút yêu thích */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute bottom-3 right-3 p-2.5 rounded-full shadow-lg transition-all ${
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
          }`}
          aria-label={isWishlisted ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}
        >
          <Heart size={18} className={isWishlisted ? 'fill-current' : ''} />
        </button>
      </div>

      {/* NỘI DUNG */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Tên sản phẩm */}
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors h-12 text-sm leading-tight">
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

        {/* Mô tả ngắn */}
        <div className="mb-3 h-10">
          {product.description ? (
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
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

        {/* NÚT HÀNH ĐỘNG */}
        <div className="flex space-x-2 mb-3">
          {/* Báo giá */}
          <a
            href="tel:0976707297"
            onClick={(e) => e.stopPropagation()}
            className={`flex-1 py-2.5 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all text-sm ${
              product.inStock
                ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            {...(!product.inStock && { 'aria-disabled': true })}
          >
            <Phone size={16} className="flex-shrink-0" />
            <span>Báo giá</span>
          </a>

          {/* Chat Zalo */}
          <a
            href="https://zalo.me/0976707297"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-3 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all font-medium shadow-md hover:shadow-lg flex items-center justify-center flex-shrink-0"
            aria-label="Chat Zalo"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.89 1.402 5.45 3.589 7.163l-.766 2.844a.5.5 0 00.713.572l3.167-1.823A10.277 10.277 0 0012 20.486c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm3.5 11.5h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1z" />
            </svg>
          </a>
        </div>

        {/* THÔNG SỐ KỸ THUẬT NỔI BẬT */}
        <div className="pt-3 border-t border-gray-100">
          {product.specs && product.specs.length > 0 ? (
            <div className="grid grid-cols-2 gap-2 text-sm min-h-12">
              {product.specs.slice(0, 2).map((spec, index) => (
                <div key={index} className="flex flex-col justify-start">
                  <span className="text-gray-500 text-xs font-medium">
                    {spec.label}:
                  </span>
                  <span className="text-gray-700 font-medium text-sm leading-snug line-clamp-2">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-12" />
          )}
        </div>
      </div>
    </div>
  );
}