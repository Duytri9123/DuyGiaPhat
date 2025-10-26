import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import TemplateHome from "./template/templateHome";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      {/* Trang chủ */}
      <Route path="/" element={<TemplateHome />} />

      {/* Trang danh mục với dynamic parameter */}
      <Route path="/danh-muc/:category" element={<CategoryPage />} />
      
      {/* Các route danh mục cũ vẫn giữ để redirect (tuỳ chọn) */}
      <Route path="/danh-muc/hoa-sinh-nhat" element={<Navigate to="/danh-muc/sinh-nhat" replace />} />
      <Route path="/danh-muc/hoa-cuoi" element={<Navigate to="/danh-muc/cuoi" replace />} />
      <Route path="/danh-muc/hoa-khai-truong" element={<Navigate to="/danh-muc/khai-truong" replace />} />
      <Route path="/danh-muc/hoa-tinh-yeu" element={<Navigate to="/danh-muc/tinh-yeu" replace />} />
      <Route path="/danh-muc/hoa-chia-buon" element={<Navigate to="/danh-muc/chia-buon" replace />} />
      <Route path="/danh-muc/hoa-chuc-mung" element={<Navigate to="/danh-muc/chuc-mung" replace />} />
      
      {/* Trang chi tiết sản phẩm */}
      <Route path="/san-pham/:id" element={<ProductDetail />} />
      
      {/* Giỏ hàng */}
      <Route path="/gio-hang" element={<Cart />} />
      
      {/* Giới thiệu */}
      <Route path="/about" element={<About />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;