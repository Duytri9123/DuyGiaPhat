// src/components/CategoryCard.tsx
import {type Category } from '../../data/categories';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 group"
    >
      <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
        {/* {category.icon === 'motor' ? 'motor' : category.icon === 'inverter' ? 'inverter' : 'tools'} */}
      </div>
      <h3 className="text-center font-bold text-gray-800 mb-1">{category.name}</h3>
      <p className="text-center text-sm text-gray-500">{category.count} sản phẩm</p>
    </button>
  );
}