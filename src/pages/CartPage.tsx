import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { mockProducts } from '../data/mockData';
import { SEO } from '../components/common/SEO';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: string | number;
  quantity: number;
  category: string;
  inStock: boolean;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [note, setNote] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const loadCart = () => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const parsed = JSON.parse(savedCart);
          if (!Array.isArray(parsed)) {
            setCartItems([]);
            return;
          }
          const items: CartItem[] = parsed.map((entry: any) => ({
            id: entry.id,
            name: entry.name,
            image: entry.image,
            price: typeof entry.price === 'number' ? entry.price : 'Liên hệ',
            quantity:
              typeof entry.quantity === 'number' && entry.quantity > 0
                ? entry.quantity
                : 1,
            category: entry.category,
            inStock: entry.inStock ?? true,
          }));
          setCartItems(items);
        } catch (error) {
          setCartItems([]);
        }
      }
    };

    loadCart();

    const handleCartUpdate = () => {
      loadCart();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  const handleRemove = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity > 0) {
      const updatedCart = cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCart);
    }
  };

  const total = cartItems.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : 0;
    return sum + price * item.quantity;
  }, 0);

  const GOOGLE_SHEET_ENDPOINT = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || '';

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cartItems.length) {
      alert('Giỏ hàng đang trống, vui lòng thêm sản phẩm trước.');
      return;
    }

    if (!GOOGLE_SHEET_ENDPOINT) {
      alert('Chưa cấu hình URL lưu Google Sheet (VITE_GOOGLE_SHEET_WEBHOOK_URL).');
      return;
    }

    setSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData();
      formData.append('formType', 'cart');
      formData.append('customerName', customerName);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('company', company);
      formData.append('note', note);
      formData.append('total', String(total));
      formData.append('items', JSON.stringify(cartItems));
      formData.append('submittedAt', new Date().toISOString());

      await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setSubmitStatus('success');
      alert('Đã gửi yêu cầu báo giá thành công!');
    } catch (error) {
      console.error('Error submitting quote request:', error);
      setSubmitStatus('error');
      alert('Gửi yêu cầu thất bại, vui lòng thử lại sau.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-40">
      <SEO
        title="Giỏ hàng & yêu cầu báo giá thiết bị"
        description="Xem lại các sản phẩm đã chọn và gửi yêu cầu báo giá thiết bị, tủ điện và giải pháp kỹ thuật tới Duy Gia Phát."
        url="https://duygiaphat.vn/gio-hang"
        image="https://duygiaphat.vn/og/cart.jpg"
      />
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 transition-colors mb-3"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Quay lại</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Giỏ hàng</h1>
          <p className="text-gray-600 mt-2">Bạn có {cartItems.length} sản phẩm trong giỏ</p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition"
                  >
                    {/* Left: Image + Info */}
                    <div className="flex gap-4 w-full sm:w-auto">
                      {/* Product Image */}
                      {item.image && (
                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                      )}

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">{item.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-500">Mã: DGP-{String(item.id).padStart(3, '0')}</p>
                        <p className="text-amber-600 font-bold mt-1 text-sm sm:text-base">
                          {typeof item.price === 'number' ? `${item.price.toLocaleString()}đ` : item.price}
                        </p>
                      </div>
                    </div>

                    {/* Right: Quantity + Subtotal + Delete */}
                    <div className="flex items-center justify-between sm:justify-end w-full gap-4">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-lg">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold text-sm">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Subtotal */}
                      <div className="text-right min-w-[80px]">
                        <p className="font-bold text-gray-900 text-sm sm:text-base">
                          {typeof item.price === 'number'
                            ? `${(item.price * item.quantity).toLocaleString()}đ`
                            : 'Liên hệ'}
                        </p>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                        aria-label="Xóa sản phẩm"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary + Quote Form */}
            <div>
              <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-32">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tóm tắt & yêu cầu báo giá</h3>

                <div className="space-y-3 pb-4 border-b border-gray-200 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Tạm tính (ước tính):</span>
                    <span>{total.toLocaleString()}đ</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Phí vận chuyển:</span>
                    <span>Trao đổi sau</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Thuế (VAT):</span>
                    <span>Trao đổi sau</span>
                  </div>
                </div>

                <form onSubmit={handleSubmitQuote} className="mt-4 space-y-3 text-sm">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Ví dụ: 0976 707 297"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Nhập email (nếu có)"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Công ty / đơn vị
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Tên công ty / nhà máy"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Ghi chú thêm
                    </label>
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                      placeholder="Ví dụ: yêu cầu thời gian giao hàng, tiêu chuẩn kỹ thuật, ngân sách dự kiến..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 mt-2"
                  >
                    <ShoppingCart size={20} />
                    {submitting ? 'Đang gửi yêu cầu...' : 'Gửi yêu cầu báo giá'}
                  </button>

                  <Link
                    to="/san-pham"
                    className="block text-center text-amber-600 font-semibold py-2 hover:underline"
                  >
                    Tiếp tục xem thêm sản phẩm
                  </Link>

                  {submitStatus === 'success' && (
                    <p className="text-xs text-green-600 text-center">
                      Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-xs text-red-600 text-center">
                      Có lỗi xảy ra, vui lòng kiểm tra kết nối hoặc thử lại sau.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Giỏ hàng trống</h2>
            <p className="text-gray-600 mb-6">Bạn chưa thêm sản phẩm nào vào giỏ hàng</p>
            <Link
              to="/san-pham"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Tiếp tục mua hàng
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
