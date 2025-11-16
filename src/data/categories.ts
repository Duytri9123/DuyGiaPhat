// src/data/categories.ts
export interface Category {
  id: number;
  name: string;
  slug: string;
  iconUrl: string;
  count: number;
  description?: string;
  featured?: boolean;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Thang máng và phụ kiện",
    slug: "thang-mang-va-phu-kien",
    iconUrl: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=100&h=100&fit=crop&q=80",
    count: 128,
    description: "Thang cáp, máng cáp, phụ kiện lắp đặt - chất lượng cao",
    featured: true,
  },
  {
    id: 2,
    name: "Tủ điện",
    slug: "tu-dien",
    iconUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=100&h=100&fit=crop&q=80",
    count: 97,
    description: "Tủ ATS, MDB, tủ bù công suất, tủ điều khiển công nghiệp",
    featured: true,
  },
  {
    id: 3,
    name: "Tủ cứu hoả",
    slug: "tu-cuu-hoa",
    iconUrl: "https://images.unsplash.com/photo-1585933646315-8e759dcc565d?w=100&h=100&fit=crop&q=80",
    count: 64,
    description: "Tủ chữa cháy, bình cứu hỏa, thiết bị PCCC đạt chuẩn",
    featured: true,
  },
  {
    id: 4,
    name: "Vỏ tủ",
    slug: "vo-tu",
    iconUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=100&h=100&fit=crop&q=80",
    count: 156,
    description: "Vỏ tủ điện treo tường, âm tường, đứng sàn - IP65/IP66",
    featured: true,
  },
  {
    id: 5,
    name: "Tủ điều khiển",
    slug: "tu-dieu-khien",
    iconUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&q=80",
    count: 83,
    description: "Tủ điều khiển PLC, tủ tự động hóa, tủ điều khiển máy bơm",
    featured: true,
  },
];