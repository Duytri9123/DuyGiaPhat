import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockProducts, mockNews } from "../data/mockData";
import {
  Phone, ChevronRight, ArrowLeft, Heart, Download, FileText, ShareIcon, ShoppingCart,
  Zap, Calendar, Building2, Gauge, Plus, Minus, X, ZoomIn, Clock, Tag,
  Facebook, Twitter, Linkedin, Mail, MessageCircle, Check
} from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [inCart, setInCart] = useState(false);

  const productId = parseInt(id || "0");
  const product = mockProducts.find((p) => p.id === productId);

  // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
  useEffect(() => {
    if (!product) return;

    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          const exists = parsed.some((item: typeof mockProducts[0]) => item.id === product.id);
          setInCart(exists);
        } else {
          setInCart(false);
        }
      } catch (error) {
        setInCart(false);
      }
    } else {
      setInCart(false);
    }
  }, [product]);

  const productUrl = `https://duy-gia-phat.vercel.app/san-pham/${productId}`;
  const productTitle = product?.name || 'Sản phẩm điện công nghiệp';
  const shareText = `Xem sản phẩm: ${productTitle}`;

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(productUrl);
    const encodedText = encodeURIComponent(shareText);

    const shareLinks: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      email: `mailto:?subject=${encodeURIComponent(productTitle)}&body=${encodedText}%20${encodedUrl}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(productUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } else if (shareLinks[platform]) {
      window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 md:pt-40 flex items-center justify-center p-4">
        <div className="text-center bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <div className="text-6xl mb-4">📦</div>
          <p className="text-xl font-semibold text-gray-900 mb-4">Không tìm thấy sản phẩm</p>
          <button
            onClick={() => navigate("/san-pham")}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-bold transition"
          >
            <ArrowLeft size={20} /> Quay lại
          </button>
        </div>
      </div>
    );
  }

  const allImages = [product.image, ...(product.images || [])];
  const relatedProducts = mockProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!product) return;

    const savedCart = localStorage.getItem('cart');
    let cart: typeof mockProducts = [];

    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          cart = parsed;
        }
      } catch (error) {
        cart = [];
      }
    }

    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex >= 0) {
      // Đã có trong giỏ -> xoá khỏi giỏ
      cart.splice(existingIndex, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cartUpdated'));
      setInCart(false);
    } else {
      // Chưa có -> thêm vào giỏ
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      window.dispatchEvent(new Event('cartUpdated'));
      setInCart(true);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-40">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex flex-wrap gap-2 text-sm text-gray-600">
          <button onClick={() => navigate("/")} className="hover:text-amber-600">Trang chủ</button>
          <span className="text-gray-400">/</span>
          <button onClick={() => navigate("/san-pham")} className="hover:text-amber-600">Thiết bị cơ điện</button>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">{product.name}</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-square flex items-center justify-center cursor-pointer group" onClick={() => setIsZoomed(true)}>
              <img
                src={allImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                {/* <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform">
                  <ZoomIn size={24} className="text-gray-900" />
                </div> */}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg overflow-hidden border-2 transition-all aspect-square ${
                    selectedImage === idx
                      ? "border-amber-500 ring-2 ring-amber-300"
                      : "border-gray-200 opacity-75 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
              ✓ Sẵn hàng
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{product.name}</h1>
            <p className="text-gray-600 mb-6">Mã sản phẩm: <span className="font-semibold text-gray-900">DGP-{String(product.id).padStart(3, '0')}</span></p>

            {/* Price Box */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <p className="text-3xl font-bold text-gray-900">Liên hệ báo giá</p>
              <p className="text-sm text-gray-500 italic">(Đã bao gồm VAT)</p>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              {product.description || "Sản phẩm chất lượng cao, giải pháp điện công nghiệp hàng đầu."}
            </p>

            {/* Key Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {product.specs?.slice(0, 4).map((spec, idx) => {
                const getSpecIcon = () => {
                  const label = spec.label.toLowerCase();
                  if (label.includes('công suất') || label.includes('power') || label.includes('kw')) return <Zap className="text-amber-500" size={20} />;
                  if (label.includes('bảo hành') || label.includes('warranty') || label.includes('tháng')) return <Calendar className="text-blue-500" size={20} />;
                  if (label.includes('thương hiệu') || label.includes('brand') || label.includes('siemens')) return <Building2 className="text-purple-500" size={20} />;
                  return <Gauge className="text-green-500" size={20} />;
                };
                return (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-gray-50">
                    {getSpecIcon()}
                    <div className="flex-1">
                      <p className="text-xs text-gray-600 font-bold uppercase">{spec.label}</p>
                      <p className="text-sm font-semibold text-gray-900">{spec.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 ${
                  inCart
                    ? "bg-white text-amber-600 border-amber-500 hover:bg-amber-50"
                    : "bg-amber-500 hover:bg-amber-600 text-white border-amber-500"
                }`}
              >
                {inCart ? (
                  <span className="relative inline-flex items-center justify-center">
                    <ShoppingCart size={20} />
                    <span className="absolute -top-1 -right-1 bg-amber-500 text-white rounded-full p-[2px] flex items-center justify-center">
                      <Minus className="w-3 h-3" />
                    </span>
                  </span>
                ) : (
                  <ShoppingCart size={20} />
                )}
                <span>{inCart ? "Loại bỏ" : "Thêm vào"}</span>
              </button>
              <a
                href="tel:0976707297"
                className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-amber-500 text-amber-600 font-bold py-4 px-6 rounded-lg hover:bg-amber-50 transition-all"
              >
                <Phone size={20} />
                LIÊN HỆ BÁO GIÁ
              </a>
            </div>

            {/* Share & Wishlist */}
            <div className="flex gap-2 mt-6">
              <div className="flex-1 relative">
                <button
                  onClick={() => setIsShareOpen(!isShareOpen)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                >
                  <ShareIcon size={18} /> Chia sẻ
                </button>

                {/* Share Modal */}
                {isShareOpen && (
                  <div className="absolute top-12 left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-40 w-56">
                    <p className="text-xs font-bold text-gray-600 uppercase mb-3 px-2">Chia sẻ trên</p>
                    <div className="space-y-2">
                      <button
                        onClick={() => { handleShare('facebook'); setIsShareOpen(false); }}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition text-gray-700 hover:text-blue-600"
                      >
                        <Facebook size={18} className="text-blue-600" />
                        <span className="text-sm font-medium">Facebook</span>
                      </button>
                      <button
                        onClick={() => { handleShare('twitter'); setIsShareOpen(false); }}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition text-gray-700 hover:text-blue-400"
                      >
                        <Twitter size={18} className="text-blue-400" />
                        <span className="text-sm font-medium">Twitter</span>
                      </button>
                      <button
                        onClick={() => { handleShare('linkedin'); setIsShareOpen(false); }}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition text-gray-700 hover:text-blue-700"
                      >
                        <Linkedin size={18} className="text-blue-700" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </button>
                      <button
                        onClick={() => { handleShare('whatsapp'); setIsShareOpen(false); }}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition text-gray-700 hover:text-green-500"
                      >
                        <MessageCircle size={18} className="text-green-500" />
                        <span className="text-sm font-medium">WhatsApp</span>
                      </button>
                      <button
                        onClick={() => { handleShare('telegram'); setIsShareOpen(false); }}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition text-gray-700 hover:text-blue-500"
                      >
                        <MessageCircle size={18} className="text-blue-500" />
                        <span className="text-sm font-medium">Telegram</span>
                      </button>
                      <button
                        onClick={() => { handleShare('email'); setIsShareOpen(false); }}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition text-gray-700 hover:text-amber-600"
                      >
                        <Mail size={18} className="text-amber-600" />
                        <span className="text-sm font-medium">Email</span>
                      </button>
                      <div className="border-t border-gray-200 my-2"></div>
                      <button
                        onClick={() => { handleShare('copy'); setIsShareOpen(false); }}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition text-gray-700 hover:text-gray-900"
                      >
                        {copySuccess ? (
                          <>
                            <Check size={18} className="text-green-500" />
                            <span className="text-sm font-medium text-green-500">Đã sao chép!</span>
                          </>
                        ) : (
                          <>
                            <ShareIcon size={18} />
                            <span className="text-sm font-medium">Sao chép liên kết</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition ${
                  isWishlisted
                    ? "bg-red-500 border-red-500 text-white"
                    : "border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Heart size={18} className={isWishlisted ? "fill-current" : ""} /> Yêu thích
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-gray-200 pt-8">
          {/* Tab Buttons */}
          <div className="flex gap-8 border-b border-gray-200 mb-8 overflow-x-auto">
            {["description", "specs", "documents"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 font-semibold text-sm whitespace-nowrap border-b-2 transition-all ${
                  activeTab === tab
                    ? "border-amber-500 text-gray-900"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab === "description" && "Mô tả chi tiết"}
                {tab === "specs" && "Thông số kỹ thuật"}
                {tab === "documents" && "Tài liệu hướng dẫn"}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {activeTab === "description" && (
                <div className="space-y-6">
                  <section>
                    <h3 className="text-xl font-bold mb-4">Tổng quan sản phẩm</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Tủ điều khiển được thiết kế chuyên dụng cho các ứng dụng công nghiệp nặng. Với khả năng vận hành ổn định trong môi trường khắc nghiệt, thiết bị này là sự lựa chọn tối ưu cho các hệ thống máy nén, máy đùn, và hệ thống vận chuyển vật liệu.
                    </p>
                  </section>
                  <section>
                    <h3 className="text-xl font-bold mb-4">Tính năng nổi bật</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex gap-3">
                        <span className="text-amber-500">✓</span>
                        <span>Tích hợp bộ lọc EMC lớp A chống nhiễu điện từ</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-amber-500">✓</span>
                        <span>Chế độ điều khiển Vector không cần cảm biến cho momen xoắn cao</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-amber-500">✓</span>
                        <span>Giao thức truyền thông RS485/USS/Modbus RTU tích hợp sẵn</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-amber-500">✓</span>
                        <span>Cấp bảo vệ IP54, chống bụi và tia nước bắn từ mọi phía</span>
                      </li>
                    </ul>
                  </section>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="space-y-4">
                  {product.specs?.map((spec, idx) => (
                    <div key={idx} className="flex justify-between pb-4 border-b border-gray-200 last:border-0">
                      <span className="text-gray-600 font-medium">{spec.label}</span>
                      <span className="font-semibold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "documents" && (
                <div className="space-y-4">
                  {[
                    { name: "Catalog sản phẩm.pdf", size: "2.4 MB" },
                    { name: "Hướng dẫn lắp đặt tủ.pdf", size: "1.8 MB" },
                    { name: "Sơ đồ đấu nối mạch.pdf", size: "3.1 MB" },
                  ].map((doc, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition group"
                    >
                      <FileText size={32} className="text-red-500 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm group-hover:text-amber-600 transition line-clamp-1">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.size}</p>
                      </div>
                      <Download size={20} className="text-gray-400 group-hover:text-amber-600 transition shrink-0" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit">
              <h3 className="text-lg font-bold mb-6">Thông số cơ bản</h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">Hãng SX</span>
                  <span className="font-semibold text-sm">Siemens</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">Series</span>
                  <span className="font-semibold text-sm">G120</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600 text-sm">Kiểu lắp</span>
                  <span className="font-semibold text-sm">Treo tường</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm">Bảo hành</span>
                  <span className="font-semibold text-sm">24 tháng</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Sản phẩm liên quan</h2>
              <button
                onClick={() => navigate("/san-pham")}
                className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Xem tất cả <ChevronRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((related) => (
                <button
                  key={related.id}
                  onClick={() => navigate(`/san-pham/${related.id}`)}
                  className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:border-amber-200 transition-all text-left"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 font-bold mb-1 uppercase">Siemens</p>
                    <h3 className="font-bold text-sm mb-2 group-hover:text-amber-600 transition line-clamp-2">
                      {related.name}
                    </h3>
                    <p className="text-amber-600 font-bold text-sm">Liên hệ</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* News & Articles Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Tin tức & Bài viết liên quan</h2>
            <button
              onClick={() => navigate("/tin-tuc")}
              className="text-amber-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Xem tất cả <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockNews.slice(0, 3).map((article) => (
              <button
                key={article.id}
                onClick={() => navigate(`/tin-tuc/${article.id}`)}
                className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:border-amber-200 transition-all text-left"
              >
                {/* Article Image */}
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Article Content */}
                <div className="p-5">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Tag size={14} className="text-amber-500" />
                      <span className="text-xs font-bold text-amber-600 uppercase">{article.category}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={14} />
                      {article.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-sm mb-3 line-clamp-2 group-hover:text-amber-600 transition">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-600 line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="text-amber-600 font-semibold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                    Đọc thêm <ChevronRight size={14} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setIsZoomed(false)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <div className="bg-white rounded-lg overflow-hidden flex items-center justify-center" style={{ maxHeight: '80vh' }}>
              <div className="relative" style={{ overflow: 'auto', maxHeight: '80vh', maxWidth: '100%' }}>
                <img
                  src={allImages[selectedImage]}
                  alt={product.name}
                  style={{
                    transform: `scale(${zoomLevel / 100})`,
                    transition: 'transform 0.2s',
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/95 rounded-full px-6 py-3 shadow-lg">
              <button
                onClick={() => setZoomLevel(Math.max(100, zoomLevel - 20))}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <Minus size={20} className="text-gray-700" />
              </button>
              <span className="w-12 text-center font-bold text-gray-900">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel(Math.min(300, zoomLevel + 20))}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <Plus size={20} className="text-gray-700" />
              </button>
              <div className="w-px h-6 bg-gray-300 mx-2"></div>
              <button
                onClick={() => setZoomLevel(100)}
                className="px-4 py-1 hover:bg-amber-50 text-amber-600 font-bold rounded-full transition"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}