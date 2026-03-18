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

export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  date: string;
  author: string;
  views: number;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface Project {
  id: number;
  title: string;
  image: string;
  location: string;
  category: string;
  description: string;
  status: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  country: string;
  category: string;
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

// NEWS & ARTICLES
// Dữ liệu mô phỏng chi tiết bám sát giao diện HTML trang tin tức
export const mockNews: NewsArticle[] = [
  {
    id: 1,
    title: "HƯỚNG DẪN LẮP ĐẶT TỦ ĐIỆN AN TOÀN CHUẨN KỸ THUẬT NĂM 2024",
    slug: "huong-dan-lap-dat-tu-dien-an-toan-2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDu9tADSRmaHTUgUHqsxyAqlaU72W8I322iA-7Mr1BuI0xwlCnpe5Dq8fZAKSkAl9sCjXixXKeFeurzRX_7DGVVK_gqxnqaHfKK7731HiPX9wS9ctM8RVuSZ-bp-DGd0CYHKKM5-b5b4C0xFGmwTSfHF68_JyJV1rLDUoWT2PfXUKGNoTQZt6imc7uUlsmixqpN4bPT70vBxAn3IaIrSrrW2XmSKozPDz6cWIff72lhEEX6AFlDLQwLWtrDS_XHKfRO-dXko3BykdTH",
    category: "Kỹ thuật",
    date: "2024-05-24",
    author: "Kỹ sư Duy Gia Phát",
    views: 1245,
    excerpt:
      "Việc lắp đặt tủ điện công nghiệp đòi hỏi kiến thức chuyên môn và tuân thủ tuyệt đối các nguyên tắc an toàn. Bài viết tổng hợp quy trình chuẩn kỹ thuật mới nhất năm 2024.",
    content:
      "Việc lắp đặt tủ điện công nghiệp không chỉ đòi hỏi kiến thức chuyên môn sâu mà còn cần sự tỉ mỉ và tuân thủ tuyệt đối các quy tắc an toàn. Bài viết này Duy Gia Phát sẽ hướng dẫn chi tiết từng bước để bạn có thể triển khai một cách an toàn và chuyên nghiệp.\n\n" +
      "1. Lập sơ đồ khối và bố trí linh kiện: trước khi thi công cần xây dựng bản vẽ nguyên lý, bố trí thiết bị trên mặt tủ, tính toán không gian thoát nhiệt và phễu đi dây.\n\n" +
      "2. Quy trình lắp đặt cơ khí: cố định vỏ tủ, gắn thanh rail, ống máng cáp, khoét lỗ cho thiết bị điều khiển, đảm bảo tiêu chuẩn IP phù hợp với môi trường làm việc.\n\n" +
      "3. Kỹ thuật đấu nối dây dẫn: sử dụng đầu cos, kìm bấm chuẩn; tuân thủ mã màu pha, trung tính, tiếp địa; kiểm tra siết chặt từng điểm đấu để tránh phát nhiệt, hồ quang.\n\n" +
      "4. Kiểm tra và chạy thử (commissioning): đo cách điện, kiểm tra thông mạch, thử liên động, mô phỏng các chế độ sự cố trước khi chính thức đóng điện vận hành.",
    tags: ["tủ điện", "kỹ thuật", "an toàn", "lắp đặt"],
  },
  {
    id: 2,
    title: "GIẢI PHÁP TỰ ĐỘNG HÓA CHO NHÀ MÁY MAY MẶC 2024",
    slug: "giai-phap-tu-dong-hoa-nha-may-may-mac-2024",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_TwJkxanD1r3z97H-FiMqCixXU3Md_ScHiGIOW18-FCTiJMGikz68dgFImZtITAMhoNiboIdYu86Ai83JMbSTLoKEwLqml2oiAdVlz3h24nIq_twR3Y7rEy9aBnJpHPlnjzEkBJ4LDBt2I8s0Wadnvwm0hmEukxAPe_MP3YSVmRFuCRKPdgvLt8YQCsbaNgd3rlc_q-MKugW6dBy-pRK-4pjMaFtp2IYWbwoPhiXRViOKBElMg-lqSLj1LDstS1Z057ZBIBOMkF0q",
    category: "Công nghệ",
    date: "2024-05-15",
    author: "Phòng giải pháp tự động hóa",
    views: 980,
    excerpt:
      "Tối ưu hóa năng suất và chất lượng cho ngành may mặc với hệ thống PLC, biến tần và SCADA đồng bộ, phù hợp tiêu chuẩn nhà máy thông minh.",
    content:
      "Ngành may mặc đang chịu áp lực lớn về chi phí lao động và tiến độ giao hàng. Việc áp dụng tự động hóa giúp doanh nghiệp kiểm soát tốt hơn năng suất, chất lượng và truy xuất dữ liệu. Bài viết phân tích các cấu hình tủ điều khiển, lựa chọn PLC và biến tần phù hợp cho từng công đoạn như may, ủi, đóng gói.\n\n" +
      "Ngoài ra, hệ thống SCADA được đề xuất để giám sát trạng thái máy theo thời gian thực, cảnh báo sớm lỗi cơ khí và điện, từ đó giảm tối đa thời gian dừng máy.",
    tags: ["tự động hóa", "PLC", "SCADA", "may mặc"],
  },
  {
    id: 3,
    title: "BẢO TRÌ HỆ THỐNG ĐIỆN CÔNG NGHIỆP: NHỮNG ĐIỀU CẦN LƯU Ý",
    slug: "bao-tri-he-thong-dien-cong-nghiep",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDIJnYENXnOiSAnH3jC3RUjJcQ0jd4lPY7nm8iNWyAGmpH0ZLB_xm_-1QroTTdMHGR7SJcQvUuFtaiHSm_BmuhCR3a2Jk4z4TFMdTkpJIXbtW9G9Jh_i04ZbnWm3mle0Rq_PUMDV4ClRHveGCDjzqhXOs6xrc2ONouu0Jy4QYkgNyYXvMsruTdRueWCzjYZQfYwDkqk_TjnvJx7CGBWzh0vJ-61IjBiRjEmc0PbpRNJuxWoAft2gREOKoZJl6aBcQCEsnNPJZjYTKWL",
    category: "Kỹ thuật",
    date: "2024-05-10",
    author: "Bộ phận dịch vụ kỹ thuật",
    views: 742,
    excerpt:
      "Kế hoạch bảo trì định kỳ giúp giảm thiểu rủi ro dừng máy đột ngột, kéo dài tuổi thọ thiết bị và đảm bảo an toàn cho người vận hành.",
    content:
      "Bảo trì hệ thống điện công nghiệp cần tuân thủ quy trình từ kiểm tra trực quan, siết lại đầu cos, đo nhiệt độ điểm nối, đến thử nghiệm relay bảo vệ.\n\n" +
      "Bài viết gợi ý chu kỳ bảo trì theo từng cấp công suất, danh sách hạng mục kiểm tra và biểu mẫu ghi nhận kết quả để doanh nghiệp dễ áp dụng.",
    tags: ["bảo trì", "hệ thống điện", "an toàn", "kiểm định"],
  },
  {
    id: 4,
    title: "LỰA CHỌN THIẾT BỊ ĐIỆN CHUẨN EU/G7 CHO DỰ ÁN LỚN",
    slug: "lua-chon-thiet-bi-dien-chuan-eu-g7",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDusuoXnEopnKO-4Yr5pQBI660sWOV7ZQ8vg2wXC3ZHnmJmVFWhxphE7Qqy-p0d3XdnuGqIBYO2kri3yBX-8r2i_BBfu4J9Tb33c9sRHCswNnEoQJPS_C9ML1EMHvtmmq2o0E8NRhQ5bfOyDVKBnp0wbBika2U-XTzga9TKHFx08fWf49tMNtoCoInIOrDk8jlxZ6FTYU1o0BUoXz4FvWJqkaN3n6EBEWFQe8W18b_OTp9WQaFeas1C39eyNorkkU1wPF7jH-pzEkn6",
    category: "Công nghệ",
    date: "2024-05-05",
    author: "Phòng thiết kế dự án",
    views: 628,
    excerpt:
      "So sánh các dòng thiết bị đóng cắt từ Schneider, ABB, LS, Siemens để lựa chọn cấu hình phù hợp tiêu chuẩn EU/G7 cho dự án công nghiệp quy mô lớn.",
    content:
      "Khi triển khai các dự án cho khách hàng FDI hoặc tiêu chuẩn EU/G7, việc lựa chọn thiết bị đạt chứng chỉ IEC, VDE, UL là bắt buộc. Bài viết so sánh ưu nhược điểm của các thương hiệu lớn, chi phí đầu tư và khả năng thay thế tại thị trường Việt Nam.",
    tags: ["thiết bị điện", "EU", "G7", "Schneider", "ABB", "Siemens"],
  },
  {
    id: 5,
    title: "HƯỚNG DẪN ĐỌC BẢN VẼ ĐIỆN CÔNG NGHIỆP",
    slug: "huong-dan-doc-ban-ve-dien-cong-nghiep",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLVbrFjpYeNBqQZoCAZSC68pUcW6y7cz5Lf8p84J7corLSz9EtMe1PUWwQjvX0VNR5hxuj7Mtd5oGl_Rj0ygRvmCNGnsdQ7EOxJw8eqOgtwSk6nLh8vc0E6oqpGsRrGLkTI8jwkdRi0AS-OOf_7GY29tzq1EkVxfZzO6zn70A9ifIbDcJ471M0b7H8mmojoc6jGysOJxWOklz5_ku5ceGXcDihF6JAM4wRoafmLVfdgCXlyGTOELBySlQaD6w-aAlvyKmPhoU78NTN",
    category: "Kỹ thuật",
    date: "2024-05-15",
    author: "Phòng thiết kế",
    views: 512,
    excerpt:
      "Tổng hợp các ký hiệu thường dùng, cách đọc sơ đồ nguyên lý và sơ đồ lắp đặt trong hệ thống điện công nghiệp.",
    content:
      "Bài viết minh họa từng loại bản vẽ: sơ đồ khối, sơ đồ nguyên lý, sơ đồ đơn tuyến và sơ đồ lắp đặt, giúp kỹ sư trẻ dễ tiếp cận hơn khi tham gia dự án thực tế.",
    tags: ["bản vẽ điện", "ký hiệu", "sơ đồ nguyên lý"],
  },
  {
    id: 6,
    title: "KHẮC PHỤC LỖI BIẾN TẦN THƯỜNG GẶP",
    slug: "khac-phuc-loi-bien-tan-thuong-gap",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuiPMLVlxBbYDKlkVQBeYWL0Sv2MwwnbiRCf0MNgHdLETYBFdYpeYObsXP7ZHm_THQ9MIB9RFsRnBwyGdZJfme_-sqV1om5q8wZiK-ZHgZ-zgfFlOnB4Ohu2wulNtyEXw6JdUYVYLqqb4KaUZfTalNCbkPRRxXACQnQ1p0zo7UzGaAeSUYBaW85RtOecJn1GoswplX_-B8uNysjeUhqp8d5vges4fjLNYDa2pE7yo2w_D2dGJA9mcLvUxeh7RK8HKZWckorr_WcYaH",
    category: "Kỹ thuật",
    date: "2024-05-10",
    author: "Bộ phận hỗ trợ kỹ thuật",
    views: 430,
    excerpt:
      "Tổng hợp các mã lỗi phổ biến trên biến tần và quy trình xử lý an toàn cho kỹ thuật viên bảo trì.",
    content:
      "Bài viết liệt kê các nhóm lỗi quá dòng, quá áp, mất pha, quá nhiệt trên biến tần cùng nguyên nhân đi kèm. Mỗi nhóm lỗi đều có khuyến nghị kiểm tra thực tế trước khi thay thế thiết bị.",
    tags: ["biến tần", "lỗi", "bảo trì"],
  },
  {
    id: 7,
    title: "QUY TRÌNH NGHIỆM THU TỦ ĐIỆN TẠI XƯỞNG",
    slug: "quy-trinh-nghiem-thu-tu-dien-tai-xuong",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-kTfL36oeBDtK9gsIYXOgGDQMptQVGGbT8PoTKzCIdKKTr1_4hDbHXWnk4Deo9xrOy8W2LPsqmnDAmcjzxB7ItOqYBMaISBRKCFMoZhKyJuusX5ZEFBMEH7BIcLEt4UJqMwYKMGQuM6N_IKnq89brCyG-rsol6A1wcTTBArt1jsQzwre_CfD42rkBYh8x-Is2tQ2Z3ClUX__EUgYzCTLlwkSTvMqvW0w9eLamp00_dHukvDpMt1BdWR9kEYyUyhL8LzdXfEEzwJH",
    category: "Kỹ thuật",
    date: "2024-05-02",
    author: "Phòng QA/QC",
    views: 389,
    excerpt:
      "Quy trình nghiệm thu tủ điện chi tiết từ khâu kiểm tra ngoại quan, thử nghiệm điện đến lập biên bản bàn giao.",
    content:
      "Nội dung tập trung vào các bước thử cao áp, đo cách điện, kiểm tra chức năng liên động, kiểm tra nhãn mác – tem kiểm định trước khi xuất xưởng.",
    tags: ["nghiệm thu", "tủ điện", "QA/QC"],
  },
];

// PROJECTS
export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Nhà máy thực phẩm CP",
    image: images.tuTram || images.tuDieuKhienBms,
    location: "Bình Dương",
    category: "Hệ thống tủ điện & Thang máng cáp",
    description: "Cung cấp hệ thống tủ điện điều khiển tự động cho dây chuyền sản xuất.",
    status: "Hoàn thành",
  },
  {
    id: 2,
    title: "Khu công nghiệp VSIP II",
    image: images.tuCongTo,
    location: "Bình Dương",
    category: "Trạm biến áp & Tủ MSB",
    description: "Thiết kế và lắp đặt trạm biến áp 10/0.4kV cho toàn khu công nghiệp.",
    status: "Hoàn thành",
  },
  {
    id: 3,
    title: "Tòa nhà chung cư Vincom Mega Mall",
    image: images.tuDieuKhienDongCoKhoiDongTruc,
    location: "TP. Hồ Chí Minh",
    category: "Hệ thống phân phối điện tầng",
    description: "Hệ thống điện phân phối cho 45 tầng với công suất tổng 5MVA.",
    status: "Hoàn thành",
  },
  {
    id: 4,
    title: "Nhà máy Sữa Cô Gái Hà Lan",
    image: images.tuDieuKhienDongCo2Cap,
    location: "Đồng Nai",
    category: "Hệ thống tự động hóa toàn bộ",
    description: "PLC, HMI, Biến tần cho hệ thống sản xuất hiện đại.",
    status: "Hoàn thành",
  },
  {
    id: 5,
    title: "Khu công nghiệp Amata Biên Hòa",
    image: images.mangCap,
    location: "Đồng Nai",
    category: "Thang máng cáp & Phụ kiện",
    description: "Thang máng cáp toàn bộ khu công nghiệp với chiều dài 15km.",
    status: "Hoàn thành",
  },
  {
    id: 6,
    title: "Nhà máy điện tử Samsung",
    image: images.tuAts,
    location: "Bắc Ninh",
    category: "Hệ thống điều khiển công nghiệp",
    description: "PLC Siemens S7-1500 cho dây chuyền sản xuất tối tân.",
    status: "Đang thực hiện",
  },
];

// PARTNERS
export const mockPartners: Partner[] = [
  {
    id: 1,
    name: "Schneider Electric",
    logo: "SCHNEIDER",
    country: "Pháp",
    category: "Thiết bị điện hạng sang",
  },
  {
    id: 2,
    name: "ABB",
    logo: "ABB",
    country: "Thụy Điển",
    category: "Biến tần & Công nghệ tự động",
  },
  {
    id: 3,
    name: "LS Industrial Systems",
    logo: "LS",
    country: "Hàn Quốc",
    category: "PLC & Thiết bị tự động hóa",
  },
  {
    id: 4,
    name: "Mitsubishi Electric",
    logo: "MITSUBISHI",
    country: "Nhật Bản",
    category: "PLC & Biến tần",
  },
  {
    id: 5,
    name: "Siemens",
    logo: "SIEMENS",
    country: "Đức",
    category: "Công nghệ hàng đầu",
  },
  {
    id: 6,
    name: "Fuji Electric",
    logo: "FUJI",
    country: "Nhật Bản",
    category: "Biến tần & Đơn vị điều khiển",
  },
];