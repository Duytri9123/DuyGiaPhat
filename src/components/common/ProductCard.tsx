// src/components/common/ProductCard.tsx
import { Heart, Star, Phone } from 'lucide-react';
import { type Product } from '../../data/mockData';

interface ProductCardProps {
  product: Product;
  onToggleWishlist: (product: Product) => void;
  onClick: () => void;
  isWishlisted?: boolean;
}

export default function ProductCard({ product, onToggleWishlist, onClick, isWishlisted = false }: ProductCardProps) {
  // Tính % giảm giá
  const discountPercent = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div 
      onClick={onClick} 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-blue-200"
    >
      {/* Hình ảnh sản phẩm */}
      <div className="relative h-56 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            // Fallback nếu ảnh lỗi
            e.currentTarget.src = 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop';
          }}
        />
        
        {/* Badge góc trên trái */}
        {product.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${
            product.badge === 'Bán chạy' ? 'bg-red-600 text-white' :
            product.badge === 'Mới' ? 'bg-green-500 text-white' :
            product.badge === 'Cao cấp' ? 'bg-purple-600 text-white' :
            'bg-blue-600 text-white'
          }`}>
            {product.badge}
          </div>
        )}

        {/* Giảm giá % */}
        {discountPercent > 0 && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">
            -{discountPercent}%
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
        >
          <Heart 
            size={18} 
            className={isWishlisted ? 'fill-current' : ''} 
          />
        </button>

        {/* Overlay khi hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity" />
      </div>

      {/* Nội dung */}
      <div className="p-4">
        {/* Tên sản phẩm */}
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[3rem]">
          {product.name}
        </h3>
        
        {/* Đánh giá và lượt mua */}
        <div className="flex items-center mb-3 space-x-3">
          <div className="flex items-center space-x-1">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
          </div>
          <span className="text-gray-400 text-sm">|</span>
          <span className="text-gray-500 text-sm">
            <span className="font-medium text-gray-700">{product.sales}</span> lượt hỏi
          </span>
        </div>

        {/* Mô tả ngắn (nếu có) */}
        {product.description && (
          <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        )}

        {/* Giá */}
        <div className="mb-4 pb-3 border-b border-gray-100">
          {product.oldPrice && (
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-gray-400 line-through text-sm">
                {product.oldPrice.toLocaleString('vi-VN')}đ
              </span>
              <span className="text-orange-500 text-xs font-bold">
                Tiết kiệm {(product.oldPrice - product.price).toLocaleString('vi-VN')}đ
              </span>
            </div>
          )}
          <div className="flex items-baseline space-x-1">
            <span className="text-blue-600 font-bold text-2xl">
              {product.price.toLocaleString('vi-VN')}
            </span>
            <span className="text-blue-600 font-medium text-sm">đ</span>
          </div>
        </div>

        {/* Trạng thái kho */}
        <div className="mb-3 flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
          <span className={`text-xs font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? 'Còn hàng' : 'Hết hàng'}
          </span>
        </div>

        {/* Nút hành động */}
        <div className="flex space-x-2">
          {/* Nút liên hệ báo giá */}
          <a
            href={`tel:0976707297`}
            onClick={(e) => e.stopPropagation()}
            className={`flex-1 py-3 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all ${
              product.inStock
                ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            {...(!product.inStock && { 'aria-disabled': true })}
          >
            <Phone size={16} />
            <span className="text-sm">Báo giá</span>
          </a>

          {/* Nút chat Zalo */}
          <a
            href="https://zalo.me/0976707297"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all font-medium shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.89 1.402 5.45 3.589 7.163l-.766 2.844a.5.5 0 00.713.572l3.167-1.823A10.277 10.277 0 0012 20.486c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm3.5 11.5h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1z"/>
            </svg>
          </a>
        </div>

        {/* Thông số kỹ thuật nổi bật (nếu có) */}
        {product.specs && product.specs.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-2 text-xs">
              {product.specs.slice(0, 2).map((spec, index) => (
                <div key={index} className="flex items-start space-x-1">
                  <span className="text-gray-500">{spec.label}:</span>
                  <span className="text-gray-700 font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}