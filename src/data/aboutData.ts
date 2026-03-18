// src/data/aboutData.ts

export interface HistoryItem {
  id: number;
  title: string;
  description: string;
}

export interface ValueItem {
  id: number;
  title: string;
  description: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
}

export interface PartnerItem {
  id: number;
  name: string;
}

export interface CertificationItem {
  id: number;
  code: string;
}

export const aboutHistory: HistoryItem[] = [
  {
    id: 1,
    title: "Thành Lập & Khởi Nghiệp",
    description:
      "Bắt đầu từ một đội ngũ kỹ sư nhiệt huyết với khát vọng nâng tầm hạ tầng điện công nghiệp Việt Nam.",
  },
  {
    id: 2,
    title: "Mở Rộng Quy Mô",
    description:
      "Đầu tư hệ thống nhà xưởng hiện đại và thiết lập quan hệ đối tác chiến lược với các tập đoàn đa quốc gia.",
  },
  {
    id: 3,
    title: "Khẳng Định Vị Thế",
    description:
      "Trở thành đơn vị cung cấp giải pháp điện hàng đầu, phục vụ các dự án trọng điểm quốc gia.",
  },
];

export const visionMission: ValueItem[] = [
  {
    id: 1,
    title: "Tầm nhìn",
    description:
      "Trở thành biểu tượng của sự tin cậy và đổi mới trong ngành kỹ thuật điện, dẫn đầu xu hướng công nghệ xanh và tiết kiệm năng lượng tại khu vực Đông Nam Á.",
  },
  {
    id: 2,
    title: "Sứ mệnh",
    description:
      "Cung cấp các giải pháp kỹ thuật điện tối ưu, an toàn và hiệu quả nhất, góp phần thúc đẩy sự phát triển bền vững cho khách hàng và cộng đồng.",
  },
];

export const coreValues: ValueItem[] = [
  {
    id: 1,
    title: "Chất lượng",
    description:
      "Mọi sản phẩm và dịch vụ đều tuân thủ các tiêu chuẩn kỹ thuật nghiêm ngặt nhất của quốc tế.",
  },
  {
    id: 2,
    title: "Sáng tạo",
    description:
      "Không ngừng nghiên cứu và ứng dụng các công nghệ mới để tối ưu hóa hiệu suất vận hành.",
  },
  {
    id: 3,
    title: "Uy tín",
    description:
      "Cam kết đồng hành lâu dài, mang lại giá trị thực chất và sự hài lòng tuyệt đối cho đối tác.",
  },
];

export const manufacturingBullets: string[] = [
  "Thiết bị đo lường kiểm định chính xác cao",
  "Hệ thống quản lý chất lượng tự động hóa",
  "Đội ngũ chuyên gia tư vấn kỹ thuật quốc tế",
];

export const statsOverview: StatItem[] = [
  { id: 1, value: "200+", label: "Dự án hoàn thành" },
  { id: 2, value: "50+", label: "Đối tác toàn cầu" },
  { id: 3, value: "100%", label: "Đạt chuẩn an toàn" },
  { id: 4, value: "24/7", label: "Hỗ trợ kỹ thuật" },
];

export const partners: PartnerItem[] = [
  { id: 1, name: "SCHNEIDER" },
  { id: 2, name: "ABB" },
  { id: 3, name: "SIEMENS" },
  { id: 4, name: "LS" },
  { id: 5, name: "MITSUBISHI" },
  { id: 6, name: "PANASONIC" },
];

export const certifications: CertificationItem[] = [
  { id: 1, code: "ISO 9001:2015" },
  { id: 2, code: "ISO 14001" },
];
