// src/data/mockData.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string; // Tên icon hoặc URL ảnh
  rating: number;
  sales: number;
  badge?: string;
  category: string; // slug
  inStock: boolean;
  description?: string;
  specs?: { label: string; value: string }[];
  featured?: boolean;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
  slug: string;
  description?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  company?: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
}

// === SẢN PHẨM ===
export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Động cơ điện 3 pha 5.5kW Teco",
    price: 8500000,
    oldPrice: 9500000,
    image: "motor",
    rating: 4.8,
    sales: 152,
    badge: "Bán chạy",
    category: "dong-co",
    inStock: true,
    description: "Hiệu suất cao, vỏ gang, tiết kiệm điện 15%",
    specs: [
      { label: "Công suất", value: "5.5 kW" },
      { label: "Điện áp", value: "380V" },
      { label: "Tốc độ", value: "1450 RPM" },
      { label: "Bảo hành", value: "24 tháng" },
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Biến tần INVT GD20 7.5kW",
    price: 12500000,
    image: "inverter",
    rating: 4.9,
    sales: 98,
    badge: "Mới",
    category: "bien-tan",
    inStock: true,
    description: "Điều khiển vector, tích hợp PLC, giao tiếp Modbus",
    specs: [
      { label: "Công suất", value: "7.5 kW" },
      { label: "Điện áp", value: "380V" },
      { label: "Tần số", value: "0-400 Hz" },
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Máy bơm ly tâm Pentax 1HP",
    price: 3200000,
    image: "pump",
    rating: 4.7,
    sales: 203,
    category: "may-bom",
    inStock: true,
    description: "Lưu lượng lớn, cánh inox, chống ăn mòn",
    specs: [
      { label: "Lưu lượng", value: "12 m³/h" },
      { label: "Cột áp", value: "18 m" },
      { label: "Vật liệu", value: "Inox 304" },
    ],
  },
  {
    id: 4,
    name: "Tủ điện điều khiển 3 pha 12 đường",
    price: 9500000,
    oldPrice: 11000000,
    image: "cabinet",
    rating: 5.0,
    sales: 87,
    badge: "Cao cấp",
    category: "tu-dien",
    inStock: true,
    description: "Tiêu chuẩn IEC, bảo vệ quá tải, ngắn mạch",
    specs: [
      { label: "Số đường", value: "12" },
      { label: "Điện áp", value: "380V" },
      { label: "Chống thấm", value: "IP55" },
    ],
  },
  {
    id: 5,
    name: "Cáp điện Cadivi 4x16mm²",
    price: 125000,
    image: "cable",
    rating: 4.6,
    sales: 134,
    category: "cap-dien",
    inStock: true,
    description: "Giá/mét, ruột đồng 99.99%, vỏ PVC chống cháy",
  },
  {
    id: 6,
    name: "Máy khoan cầm tay Bosch GSB 550",
    price: 1850000,
    image: "drill",
    rating: 4.8,
    sales: 176,
    badge: "Bán chạy",
    category: "dung-cu",
    inStock: true,
    description: "Công suất 550W, đảo chiều, chống rung",
  },
  {
    id: 7,
    name: "Máy hàn điện tử 200A Jasic",
    price: 4200000,
    image: "welder",
    rating: 4.9,
    sales: 65,
    category: "may-han",
    inStock: false,
    description: "Hàn que, hàn TIG, dòng ổn định",
  },
  {
    id: 8,
    name: "Bơm chìm nước thải 2HP Ebara",
    price: 6800000,
    image: "submersible",
    rating: 4.7,
    sales: 112,
    category: "may-bom",
    inStock: true,
    description: "Cánh nghiền rác, chống ăn mòn, tự động",
  },
  {
    id: 9,
    name: "MCB 2P 32A Schneider",
    price: 185000,
    image: "switch",
    rating: 4.8,
    sales: 623,
    category: "dong-cat",
    inStock: true,
    description: "Cầu dao tự động, chịu tải cao, tuổi thọ 10.000 lần",
  },
  {
    id: 10,
    name: "Đèn LED Highbay 150W Philips",
    price: 2850000,
    image: "light",
    rating: 4.7,
    sales: 89,
    category: "den-led",
    inStock: true,
    description: "Ánh sáng trắng 6500K, chống nước IP65",
  },
];

// === ĐÁNH GIÁ KHÁCH HÀNG ===
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    company: "Công ty TNHH SX ABC",
    avatar: "man",
    rating: 5,
    comment: "Sản phẩm chất lượng, giao hàng nhanh, kỹ thuật viên hỗ trợ tận tình. Động cơ chạy êm, tiết kiệm điện rõ rệt.",
    date: "2 ngày trước",
  },
  {
    id: 2,
    name: "Trần Thị B",
    company: "Nhà máy May XYZ",
    avatar: "woman",
    rating: 5,
    comment: "Biến tần INVT hoạt động ổn định, điều chỉnh tốc độ chính xác. Giá hợp lý, bảo hành dài hạn. Rất hài lòng!",
    date: "1 tuần trước",
  },
  {
    id: 3,
    name: "Lê Văn C",
    company: "Khu công nghiệp Tân Tạo",
    avatar: "man",
    rating: 5,
    comment: "Tủ điện được lắp đặt chuyên nghiệp, hoạt động ổn định 24/7. Đội ngũ kỹ thuật hỗ trợ nhanh chóng.",
    date: "3 ngày trước",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    company: "Xí nghiệp Thủy sản 123",
    avatar: "woman",
    rating: 5,
    comment: "Máy bơm chìm Ebara xử lý nước thải hiệu quả, không nghẹt rác. Đáng tiền!",
    date: "5 ngày trước",
  },
];