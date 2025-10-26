import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();

  // Mock cart data
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: 'Bó hoa hồng đỏ',
      price: 350000,
      quantity: 1,
      image: '🌹'
    },
    {
      id: 2,
      name: 'Bó hoa hướng dương',
      price: 450000,
      quantity: 2,
      image: '🌻'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = 30000;
  const total = subtotal + shippingFee;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="text-2xl font-bold text-rose-600 flex items-center space-x-2"
            >
              <span>🌸</span>
              <span>Hoa Tươi Xinh</span>
            </button>
            
            <button 
              onClick={() => navigate('/gio-hang')}
              className="relative text-gray-700 hover:text-rose-600"
            >
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-rose-600 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Tiếp tục mua hàng</span>
        </button>

        <h1 className="text-4xl font-bold text-rose-600 mb-8">Giỏ hàng của bạn</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Giỏ hàng trống</h2>
            <p className="text-gray-500 mb-8">Hãy thêm sản phẩm vào giỏ hàng!</p>
            <button
              onClick={() => navigate('/')}
              className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-700 transition"
            >
              Mua sắm ngay
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 py-6 border-b border-gray-100 last:border-b-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl flex items-center justify-center">
                      <div className="text-3xl">{item.image}</div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 mb-1">{item.name}</h3>
                      <p className="text-rose-600 font-bold text-lg">
                        {item.price.toLocaleString()}đ
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-medium w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-lg text-rose-600 mb-2">
                        {(item.price * item.quantity).toLocaleString()}đ
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-rose-600 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Tổng đơn hàng</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Tạm tính:</span>
                    <span>{subtotal.toLocaleString()}đ</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Phí vận chuyển:</span>
                    <span>{shippingFee.toLocaleString()}đ</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-rose-600 pt-3 border-t">
                    <span>Tổng cộng:</span>
                    <span>{total.toLocaleString()}đ</span>
                  </div>
                </div>

                <button className="w-full bg-rose-600 text-white py-4 rounded-xl font-bold hover:bg-rose-700 transition mb-4">
                  Tiến hành thanh toán
                </button>
                
                <button className="w-full border border-rose-600 text-rose-600 py-4 rounded-xl font-bold hover:bg-rose-50 transition">
                  Tiếp tục mua hàng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;