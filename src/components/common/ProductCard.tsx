// src/components/ProductCard.tsx
import { Heart, Star, Phone } from 'lucide-react';
import {type Product } from '../../data/mockData';

interface ProductCardProps {
  product: Product;
  onToggleWishlist: (product: Product) => void;
  onClick: () => void;
}

export default function ProductCard({ product, onToggleWishlist, onClick }: ProductCardProps) {
  return (
    <div onClick={onClick} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-7xl group-hover:scale-110 transition-transform">gear</div>
        
        {product.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
            product.badge === 'Bán chạy' ? 'bg-red-600 text-white' :
            product.badge === 'Mới' ? 'bg-green-500 text-white' :
            'bg-purple-600 text-white'
          }`}>
            {product.badge}
          </div>
        )}

        <button 
          onClick={(e) => { e.stopPropagation(); onToggleWishlist(product); }} 
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-blue-50"
        >
          <Heart size={18} className="text-blue-600" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600">{product.name}</h3>
        
        <div className="flex items-center mb-3 space-x-2">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-gray-400 text-sm">({product.sales} lượt hỏi)</span>
        </div>

        <div className="mb-4">
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm mr-2">
              {product.oldPrice.toLocaleString()}đ
            </span>
          )}
          <span className="text-blue-600 font-bold text-xl">
            {product.price.toLocaleString()}đ
          </span>
        </div>

        {/* NÚT MỚI: Liên hệ báo giá */}
        <a
          href={`tel:19001234`}
          onClick={(e) => e.stopPropagation()}
          className={`w-full py-3 rounded-xl font-medium flex items-center justify-center space-x-2 transition-all ${
            product.inStock
              ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Phone size={18} />
          <span>{product.inStock ? 'Liên hệ báo giá' : 'Hết hàng'}</span>
        </a>
      </div>
    </div>
  );
}