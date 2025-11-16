// src/assets/images.ts
// Tự động import tất cả ảnh trong thư mục products/
// Tên key: chuyển từ kebab-case → camelCase (ví dụ: tu-tram.jpg → tuTram)

const images: Record<string, string> = {};

// Import tất cả file .jpg, .jpeg, .png
const modules = import.meta.glob('./products/*.{jpg,jpeg,png}', { eager: true });

for (const path in modules) {
  const fileName = path.split('/').pop()!.split('.').shift()!;
  
  // Chuyển kebab-case → camelCase
  const key = fileName
    .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, ''); // loại bỏ ký tự lạ

  // Lấy URL
  images[key] = (modules[path] as any).default;
}

export default images;