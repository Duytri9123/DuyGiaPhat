
import type { ReactNode } from 'react';

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-6">
      <div className="bg-blue-100 p-4 rounded-full shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}