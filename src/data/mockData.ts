// src/data/mockData.ts

import images from '../assets/images';

export interface Product {
  id: number;
  name: string;
  image: string;
  images: string[];
  rating: number;
  sales: number;
  badge?: string;
  category: string;
  inStock: boolean;
  description?: string;
  specs?: { label: string; value: string }[];
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

export const mockProducts: Product[] = [
  // TỦ ĐIỆN
  {
    id: 1,
    name: "Tủ trạm hạ thế 630A",
    image: images.tuTram,
    images: [images.tuTram],
    rating: 4.9,
    sales: 78,
    badge: "Bán chạy",
    category: "tu-dien",
    inStock: true,
    description: "Tủ trạm hạ thế 3 pha, aptomat chính 630A, có đồng hồ đo đa năng",
    specs: [
      { label: "Dòng định mức", value: "630A" },
      { label: "Điện áp", value: "380V" },
      { label: "Số đường ra", value: "12 đường" },
      { label: "Chuẩn chống thấm", value: "IP54" },
      { label: "Bảo hành", value: "24 tháng" },
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Tủ điều khiển BMS tòa nhà",
    image: images.tuDieuKhienBms,
    images: [images.tuDieuKhienBms],
    rating: 5.0,
    sales: 45,
    badge: "Cao cấp",
    category: "tu-dieu-khien",
    inStock: true,
    description: "Hệ thống quản lý tòa nhà thông minh, tích hợp PLC Siemens S7-1200",
    specs: [
      { label: "PLC", value: "Siemens S7-1200" },
      { label: "HMI", value: "Màn hình cảm ứng 10 inch" },
      { label: "Số kênh I/O", value: "64 điểm" },
      { label: "Giao tiếp", value: "Modbus TCP/IP, RS485" },
      { label: "Bảo hành", value: "36 tháng" },
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Tủ công tơ 15 hộ dân",
    image: images.tuCongTo,
    images: [images.tuCongTo],
    rating: 4.7,
    sales: 156,
    category: "tu-dien",
    inStock: true,
    description: "Tủ công tơ điện tử, chống thấm nước, 15 ô đồng hồ",
    specs: [
      { label: "Số ô đồng hồ", value: "15 ô" },
      { label: "Loại công tơ", value: "Điện tử 1 pha" },
      { label: "Vật liệu", value: "Thép tráng kẽm" },
      { label: "Chuẩn chống thấm", value: "IP55" },
    ],
  },
  {
    id: 4,
    name: "Tủ điều khiển động cơ biến tần 15kW",
    image: images.tuDieuKhienDongCoKhoiDongTruc, 
    images: [images.tuDieuKhienDongCoKhoiDongTruc],
    rating: 4.8,
    sales: 92,
    badge: "Mới",
    category: "tu-dieu-khien",
    inStock: true,
    description: "Tủ điều khiển động cơ sử dụng biến tần INVT, khởi động mềm",
    specs: [
      { label: "Biến tần", value: "INVT GD20 15kW" },
      { label: "Điện áp vào", value: "380V 3 pha" },
      { label: "Bảo vệ", value: "Quá tải, ngắn mạch, quá áp" },
      { label: "Chế độ điều khiển", value: "Tự động/Thủ công" },
    ],
    featured: true,
  },
  {
    id: 5,
    name: "Tủ điều khiển động cơ 2 cấp tốc độ",
    image: images.tuDieuKhienDongCo2Cap,
    images: [images.tuDieuKhienDongCo2Cap],
    rating: 4.6,
    sales: 67,
    category: "tu-dieu-khien",
    inStock: true,
    description: "Tủ điều khiển động cơ chạy 2 tốc độ hoặc 2 động cơ luân phiên",
    specs: [
      { label: "Công suất", value: "7.5kW x 2" },
      { label: "Điện áp", value: "380V" },
      { label: "Chế độ", value: "2 tốc độ / Luân phiên" },
      { label: "Timer", value: "Có" },
    ],
  },
  {
    id: 7,
    name: "Tủ ATS chuyển nguồn tự động 400A",
    image: images.tuAts,
    images: [images.tuAts],
    rating: 4.9,
    sales: 56,
    badge: "Cao cấp",
    category: "tu-dien",
    inStock: true,
    description: "Tủ ATS 3 pha, chuyển nguồn lưới - máy phát tự động trong 3-5 giây",
    specs: [
      { label: "Dòng định mức", value: "400A" },
      { label: "Loại chuyển đổi", value: "Tự động" },
      { label: "Thời gian chuyển", value: "3-5 giây" },
      { label: "Điều khiển", value: "PLC hoặc Relay logic" },
    ],
    featured: true,
  },
  {
    id: 8,
    name: "Tủ phòng cháy chữa cháy PCCC",
    image: images.tuPhongChayChuaChay,
    images: [images.tuPhongChayChuaChay],
    rating: 4.8,
    sales: 89,
    category: "tu-cuu-hoa",
    inStock: true,
    description: "Tủ điều khiển hệ thống PCCC, bơm chữa cháy tự động",
    specs: [
      { label: "Công suất bơm", value: "15HP + 15HP (dự phòng)" },
      { label: "Điều khiển", value: "Tự động/Thủ công" },
      { label: "Bảo vệ", value: "Quá tải, chạy khô" },
      { label: "Chuẩn", value: "Theo PCCC Việt Nam" },
    ],
    featured: true,
  },

  // THANG MÁNG CÁP
  {
    id: 16,
    name: "Thang cáp 200mm x 3m mạ kẽm",
    image: images.coLenThangCap,
    images: [
      images.coLenThangCap,
      images.ngaBaThangCap,
      images.ngaTuThangCap,
    ],
    rating: 4.7,
    sales: 567,
    badge: "Bán chạy",
    category: "thang-mang-va-phu-kien",
    inStock: true,
    description: "Thang cáp mạ kẽm nhúng nóng, chịu tải 50kg/m",
    specs: [
      { label: "Chiều rộng", value: "200mm" },
      { label: "Chiều dài", value: "3m/thanh" },
      { label: "Độ dày thép", value: "1.2mm" },
      { label: "Chịu tải", value: "50kg/m" },
    ],
  },
  {
    id: 17,
    name: "Máng cáp 100mm x 2.4m sơn tĩnh điện",
    image: images.mangCap,
    images: [
      images.mangCap,
      images.coXuongMangCap,
      images.ngaBaMangCap,
      images.ngaTuMangCap,
      images.cutVuong90DoMangCap,
    ],
    rating: 4.6,
    sales: 445,
    category: "thang-mang-va-phu-kien",
    inStock: true,
    description: "Máng cáp thép sơn tĩnh điện, có nắp đậy",
    specs: [
      { label: "Chiều rộng", value: "100mm" },
      { label: "Chiều dài", value: "2.4m/thanh" },
      { label: "Độ dày", value: "1.0mm" },
      { label: "Màu sắc", value: "Xám RAL 7035" },
    ],
  },

  // TỦ CỨU HỎA
  {
    id: 19,
    name: "Tủ đựng bình chữa cháy CO2 4.6kg",
    image: images.keDungBinhChuaChay,
    images: [images.keDungBinhChuaChay],
    rating: 4.7,
    sales: 187,
    category: "tu-cuu-hoa",
    inStock: true,
    description: "Tủ PCCC thép sơn đỏ, kính cường lực, có khóa niêm phong",
    specs: [
      { label: "Kích thước", value: "650x950x220 mm" },
      { label: "Loại bình", value: "CO2 4.6kg hoặc bột 6kg" },
      { label: "Vật liệu", value: "Thép sơn tĩnh điện màu đỏ" },
      { label: "Kính", value: "Kính cường lực 5mm" },
    ],
  },
  {
    id: 20,
    name: "Tủ cứu hỏa tổng hợp 1200x1800x300",
    image: images.tuCuuHoa,
    images: [images.tuCuuHoa, images.voTuTrongNhaVaNgoaiTroi],
    rating: 4.8,
    sales: 112,
    badge: "Bán chạy",
    category: "tu-cuu-hoa",
    inStock: true,
    description: "Tủ PCCC lớn, chứa 2 bình, vòi chữa cháy, dụng cụ phá dỡ",
    specs: [
      { label: "Kích thước", value: "1200x1800x300 mm" },
      { label: "Chứa", value: "2 bình, cuộn vòi 20m, dụng cụ" },
      { label: "Vật liệu", value: "Thép dày 1.5mm" },
      { label: "Cửa kính", value: "2 cánh, có khóa" },
    ],
    featured: true,
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
    comment: "Tủ điện chất lượng cao, lắp đặt chuyên nghiệp. Đội ngũ kỹ thuật tận tâm, hỗ trợ nhiệt tình. Tủ ATS hoạt động ổn định, chuyển nguồn nhanh chóng.",
    date: "2 ngày trước",
  },
  {
    id: 2,
    name: "Trần Thị B",
    company: "Nhà máy May XYZ",
    avatar: "woman",
    rating: 5,
    comment: "Tủ điều khiển biến tần rất tốt, động cơ chạy êm, điều chỉnh tốc độ chính xác. Giá cả hợp lý, giao hàng đúng hẹn. Rất hài lòng!",
    date: "1 tuần trước",
  },
  {
    id: 3,
    name: "Lê Văn C",
    company: "Khu công nghiệp Tân Tạo",
    avatar: "man",
    rating: 5,
    comment: "Tủ trạm hạ thế chất lượng tốt, đầy đủ thiết bị bảo vệ. Kỹ thuật viên lắp đặt chuyên nghiệp, test kỹ càng. Hoạt động ổn định 24/7.",
    date: "3 ngày trước",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    company: "Tòa nhà văn phòng Sunrise Tower",
    avatar: "woman",
    rating: 5,
    comment: "Tủ điều khiển BMS hoạt động tốt, giao diện thân thiện, dễ sử dụng. Hệ thống giám sát toàn bộ tòa nhà hiệu quả. Đáng đầu tư!",
    date: "5 ngày trước",
  },
  {
    id: 5,
    name: "Hoàng Minh E",
    company: "Nhà máy Thực phẩm Delta",
    avatar: "man",
    rating: 5,
    comment: "Tủ PCCC đạt chuẩn, kiểm định PCCC thông qua ngay. Thiết bị chất lượng, giá tốt. Sẽ tiếp tục đặt hàng cho nhà máy mới.",
    date: "1 tuần trước",
  },
];