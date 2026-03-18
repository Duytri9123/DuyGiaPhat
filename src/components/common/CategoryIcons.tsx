// Category SVG Icons for Featured Categories
import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

// Tủ Điện (Electrical Cabinet)
export const ElectricalCabinetIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="8" width="40" height="48" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="16" y="12" width="32" height="16" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1"/>
    <circle cx="20" cy="24" r="1.5" fill="currentColor"/>
    <circle cx="28" cy="24" r="1.5" fill="currentColor"/>
    <circle cx="36" cy="24" r="1.5" fill="currentColor"/>
    <circle cx="44" cy="24" r="1.5" fill="currentColor"/>
    <line x1="16" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="1"/>
    <rect x="18" y="36" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="29" y="36" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="40" y="36" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="18" y1="48" x2="48" y2="48" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

// Thang Máng Cáp (Cable Tray)
export const CableTrayIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="16" width="44" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
    <line x1="14" y1="16" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="22" y1="16" x2="22" y2="24" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="30" y1="16" x2="30" y2="24" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="38" y1="16" x2="38" y2="24" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="46" y1="16" x2="46" y2="24" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="12" y="30" width="40" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
    <line x1="16" y1="30" x2="16" y2="36" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="24" y1="30" x2="24" y2="36" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="32" y1="30" x2="32" y2="36" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="40" y1="30" x2="40" y2="36" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="48" y1="30" x2="48" y2="36" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 42 L14 48 L50 48 L52 42" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="16" y1="42" x2="16" y2="48" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="24" y1="42" x2="24" y2="48" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="32" y1="42" x2="32" y2="48" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="40" y1="42" x2="40" y2="48" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="48" y1="42" x2="48" y2="48" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// Vỏ Tủ (Enclosure)
export const EnclosureIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="10" width="36" height="44" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="18" y="14" width="28" height="24" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="32" cy="26" r="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
    <rect x="22" y="44" width="5" height="6" rx="1" fill="currentColor"/>
    <rect x="37" y="44" width="5" height="6" rx="1" fill="currentColor"/>
    <circle cx="24.5" cy="31" r="1.5" fill="currentColor" opacity="0.6"/>
    <circle cx="39.5" cy="31" r="1.5" fill="currentColor" opacity="0.6"/>
  </svg>
);

// Phụ Kiện (Accessories)
export const AccessoriesIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="20" r="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="24" cy="20" r="3" fill="currentColor" opacity="0.3"/>
    <path d="M30 20 L36 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="40" cy="20" r="6" stroke="currentColor" strokeWidth="2"/>
    <circle cx="40" cy="20" r="3" fill="currentColor" opacity="0.3"/>
    <circle cx="18" cy="40" r="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M23 40 L30 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="36" cy="40" r="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M41 40 L48 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="52" cy="40" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="20" cy="56" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 54 L28 58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="44" cy="56" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// Tủ Cứu Hỏa (Fire Safety Cabinet)
export const FireSafetyIcon: React.FC<IconProps> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="12" width="32" height="40" rx="2" stroke="currentColor" strokeWidth="2"/>
    <rect x="20" y="16" width="24" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M32 24 L28 32 L32 36 L36 32 Z" fill="currentColor" opacity="0.7"/>
    <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.3"/>
    <line x1="20" y1="48" x2="44" y2="48" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="24" y="50" width="4" height="4" rx="1" fill="currentColor"/>
    <rect x="32" y="50" width="4" height="4" rx="1" fill="currentColor"/>
    <rect x="40" y="50" width="4" height="4" rx="1" fill="currentColor"/>
  </svg>
);

interface CategoryIconProps {
  categorySlug: string;
  size?: number;
  className?: string;
}

export const getCategoryIcon: React.FC<CategoryIconProps> = ({ categorySlug, size = 64, className = '' }) => {
  const iconClass = `text-amber-600 ${className}`;
  
  switch (categorySlug) {
    case 'tu-dien':
      return <ElectricalCabinetIcon size={size} className={iconClass} />;
    case 'tu-dieu-khien':
      return <ElectricalCabinetIcon size={size} className={iconClass} />;
    case 'thang-mang-va-phu-kien':
      return <CableTrayIcon size={size} className={iconClass} />;
    case 'vo-tu':
      return <EnclosureIcon size={size} className={iconClass} />;
    case 'phu-kien':
      return <AccessoriesIcon size={size} className={iconClass} />;
    case 'tu-cuu-hoa':
      return <FireSafetyIcon size={size} className={iconClass} />;
    default:
      return <ElectricalCabinetIcon size={size} className={iconClass} />;
  }
};

// Export icon component selector
export const CategoryIcon: React.FC<CategoryIconProps> = (props) => {
  return getCategoryIcon(props);
};
