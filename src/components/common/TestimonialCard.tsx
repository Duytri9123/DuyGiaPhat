// src/components/TestimonialCard.tsx
import { Star } from 'lucide-react';
import { type Testimonial } from '../../data/mockData';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.comment}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-800">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.date}</p>
        </div>
        <div className="text-3xl">engineer</div>
      </div>
    </div>
  );
}