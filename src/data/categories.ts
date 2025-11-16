// src/data/categories.ts
export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  count: number;
  description?: string;
  featured?: boolean;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Động cơ điện",
    slug: "dong-co",
    icon: "motor",
    count: 128,
    description: "Động cơ 1 pha, 3 pha, chống cháy nổ, tiết kiệm điện",
    featured: true,
  },
  {
    id: 2,
    name: "Biến tần - Inverter",
    slug: "bien-tan",
    icon: "zap",
    count: 89,
    description: "INVT, ABB, Siemens, Delta – điều chỉnh tốc độ chính xác",
    featured: true,
  },
  {
    id: 3,
    name: "Máy bơm nước",
    slug: "may-bom",
    icon: "droplet",
    count: 156,
    description: "Bơm ly tâm, bơm chìm, bơm đẩy cao, bơm hóa chất",
    featured: true,
  },
  {
    id: 4,
    name: "Tủ điện điều khiển",
    slug: "tu-dien",
    icon: "box",
    count: 97,
    description: "Tủ ATS, MDB, tủ bù công suất, tủ điều khiển PLC",
    featured: true,
  },
  {
    id: 5,
    name: "Cáp điện công nghiệp",
    slug: "cap-dien",
    icon: "cable",
    count: 203,
    description: "Cadivi, LS, Trần Phú – cáp lực, cáp điều khiển, chống cháy",
    featured: true,
  },
  {
    id: 6,
    name: "Dụng cụ cơ khí",
    slug: "dung-cu",
    icon: "wrench",
    count: 312,
    description: "Máy khoan, máy mài, cờ lê, kìm, thước kẹp",
    featured: true,
  },
  {
    id: 7,
    name: "Thiết bị đóng cắt",
    slug: "dong-cat",
    icon: "switch",
    count: 74,
    description: "MCB, MCCB, ACB, contactor, relay",
    featured: false,
  },
  {
    id: 8,
    name: "Đèn LED công nghiệp",
    slug: "den-led",
    icon: "light",
    count: 67,
    description: "Đèn highbay, đèn pha, đèn phòng nổ",
    featured: false,
  },
  {
    id: 9,
    name: "Phụ kiện điện",
    slug: "phu-kien",
    icon: "plug",
    count: 189,
    description: "Ống luồn, hộp kỹ thuật, thanh cái, domino",
    featured: false,
  },
  {
    id: 10,
    name: "Hệ thống tự động hóa",
    slug: "tu-dong-hoa",
    icon: "cpu",
    count: 45,
    description: "PLC, HMI, cảm biến, servo, SCADA",
    featured: false,
  },
];