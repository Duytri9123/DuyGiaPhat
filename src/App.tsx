
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      {/* Tất cả trang dùng chung Layout (Header + Footer) */}
      <Route element={<Layout/>}>
        {/* Trang chủ */}
        <Route path="/" element={<Home />} />

        {/* Danh sách sản phẩm (tất cả + tìm kiếm) */}
        <Route path="/san-pham" element={<Products />} />
        <Route path="/tim-kiem" element={<Products />} />

        {/* Danh mục sản phẩm */}
        <Route path="/danh-muc/:category" element={<CategoryPage />} />

        {/* Chi tiết sản phẩm */}
        <Route path="/san-pham/:id" element={<ProductDetail />} />

        {/* Giới thiệu */}
        <Route path="/gioi-thieu" element={<About />} />
        <Route path="/about" element={<Navigate to="/gioi-thieu" replace />} />


        {/* 404 - Về trang chủ */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;