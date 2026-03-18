
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import ProjectsPage from "./pages/ProjectsPage";
import PartnersPage from "./pages/PartnersPage";
import NewsPage from "./pages/NewsPage";
import QuoteProcessPage from "./pages/QuoteProcessPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <Routes>
      {/* Tất cả trang dùng chung Layout (Header + Footer) */}
      <Route element={<Layout />}>
        {/* Trang chủ */}
        <Route path="/" element={<Home />} />

        {/* Danh sách sản phẩm (tất cả + tìm kiếm + danh mục) */}
        <Route path="/san-pham" element={<Products />} />
        <Route path="/tim-kiem" element={<Products />} />
        <Route path="/yeu-thich" element={<WishlistPage />} />
        {/* Danh mục sản phẩm dùng chung giao diện Products */}
        <Route path="/danh-muc/:category" element={<Products />} />

        {/* Chi tiết sản phẩm */}
        <Route path="/san-pham/:id" element={<ProductDetail />} />

        {/* Giới thiệu */}
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/about" element={<Navigate to="/gioi-thieu" replace />} />

        {/* Giỏ hàng */}
        <Route path="/gio-hang" element={<CartPage />} />

        {/* Dịch vụ */}
        <Route path="/dich-vu" element={<ServicesPage />} />

        {/* Dự án */}
        <Route path="/du-an" element={<ProjectsPage />} />

        {/* Đối tác */}
        <Route path="/doi-tac" element={<PartnersPage />} />

        {/* Tin tức */}
        <Route path="/tin-tuc" element={<NewsPage />} />
        <Route path="/tin-tuc/:id" element={<NewsPage />} />

        {/* Liên hệ */}
        <Route path="/lien-he" element={<ContactPage />} />

        {/* Quy trình báo giá */}
        <Route path="/quy-trinh-bao-gia" element={<QuoteProcessPage />} />

        {/* 404 - Về trang chủ */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;