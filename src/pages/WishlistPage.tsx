// src/pages/WishlistPage.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { type Product } from '../data/mockData';

export default function WishlistPage() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load danh sách yêu thích từ localStorage khi component mount
  useEffect(() => {
    loadWishlist();
  }, []);

  // Load lại wishlist từ localStorage
  const loadWishlist = () => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Error loading wishlist:', error);
      }
    }
  };

  // Listen wishlist updates
  useEffect(() => {
    const handleWishlistUpdate = () => {
      loadWishlist();
    };

    window.addEventListener('wishlistUpdated', handleWishlistUpdate);
    window.addEventListener('storage', handleWishlistUpdate);

    return () => {
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
      window.removeEventListener('storage', handleWishlistUpdate);
    };
  }, []);

  // Xóa tất cả sản phẩm
  const handleClearAll = () => {
    setWishlist([]);
    localStorage.setItem('wishlist', JSON.stringify([]));
    window.dispatchEvent(new Event('wishlistUpdated'));
  };

  // Chuyển đến trang chi tiết sản phẩm
  const handleProductClick = (productId: number) => {
    navigate(`/san-pham/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="mb-8">
          {/* Nút quay lại */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Quay lại</span>
          </button>

          {/* Tiêu đề */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-2xl shadow-lg">
                <Heart size={28} className="text-white fill-current" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Sản phẩm yêu thích
                </h1>
                <p className="text-gray-600 mt-1">
                  {wishlist.length > 0
                    ? `Bạn có ${wishlist.length} sản phẩm yêu thích`
                    : 'Chưa có sản phẩm yêu thích'}
                </p>
              </div>
            </div>

            {/* Nút xóa tất cả */}
            {wishlist.length > 0 && (
              <button
                onClick={handleClearAll}
                className="flex items-center space-x-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all font-medium border border-red-200"
              >
                <Trash2 size={18} />
                <span>Xóa tất cả</span>
              </button>
            )}
          </div>
        </div>

        {/* NỘI DUNG */}
        {wishlist.length === 0 ? (
          /* TRẠNG THÁI TRỐNG */
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-red-100 to-pink-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={48} className="text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Chưa có sản phẩm yêu thích
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Khám phá và thêm những sản phẩm bạn yêu thích vào danh sách này.
                Nhấn vào biểu tượng trái tim trên sản phẩm để lưu lại!
              </p>
              <button
                onClick={() => navigate('/san-pham')}
                className="inline-flex items-center space-x-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                <ShoppingBag size={20} />
                <span>Khám phá sản phẩm</span>
              </button>
            </div>
          </div>
        ) : (
          /* DANH SÁCH SẢN PHẨM */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product.id)}
              />
            ))}
          </div>
        )}

        {/* GỢI Ý */}
        {wishlist.length > 0 && (
          <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 text-center border border-blue-100">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                💡 Bạn đã sẵn sàng đặt hàng?
              </h3>
              <p className="text-gray-600 mb-6">
                Liên hệ với chúng tôi để được tư vấn và báo giá chi tiết cho các
                sản phẩm yêu thích của bạn.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="tel:0976707297"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all font-medium shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Gọi ngay: 0976 707 297</span>
                </a>
                <a
                  href="https://zalo.me/0976707297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all font-medium shadow-lg"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.89 1.402 5.45 3.589 7.163l-.766 2.844a.5.5 0 00.713.572l3.167-1.823A10.277 10.277 0 0012 20.486c5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm3.5 11.5h-7a.5.5 0 010-1h7a.5.5 0 010 1zm0-3h-7a.5.5 0 010-1h7a.5.5 0 010 1z" />
                  </svg>
                  <span>Chat Zalo</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}