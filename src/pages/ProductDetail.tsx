import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Truck, Shield, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - trong thực tế sẽ fetch từ API
  const product = {
    id: 1,
    name: 'Bó hoa hồng đỏ cao cấp',
    price: 350000,
    oldPrice: 450000,
    images: ['🌹', '🌹', '🌹', '🌹'],
    rating: 4.8,
    reviews: 152,
    description: 'Bó hoa hồng đỏ tươi gồm 12 bông hồng Ecuador cao cấp, kèm hoa baby và lá phụ. Perfect choice for special occasions.',
    inStock: true,
    delivery: 'Giao hàng trong 2 giờ',
    category: 'tinh-yeu'
  };

  const relatedProducts = [
    { id: 2, name: 'Bó hoa hồng phấn', price: 380000, image: '🌺', rating: 4.8 },
    { id: 3, name: 'Bó hoa tulip', price: 400000, image: '🌷', rating: 4.6 },
    { id: 4, name: 'Hoa hồng Ecuador', price: 550000, image: '🌹', rating: 4.9 },
  ];

  const handleAddToCart = () => {
    alert(`Đã thêm ${quantity} ${product.name} vào giỏ hàng!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/gio-hang');
  };

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
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-rose-600 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Quay lại</span>
        </button>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-4">
              <div className="text-9xl text-center mb-6">
                {product.images[selectedImage]}
              </div>
            </div>
            
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition ${
                    selectedImage === index ? 'ring-2 ring-rose-500' : ''
                  }`}
                >
                  <div className="text-3xl">{image}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6 space-x-4">
              <div className="flex items-center">
                <Star size={20} className="text-yellow-400 fill-current" />
                <span className="ml-1 text-lg font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-500">({product.reviews} đánh giá)</span>
              <span className="text-green-600 font-medium">Còn hàng</span>
            </div>

            <div className="mb-6">
              {product.oldPrice && (
                <span className="text-gray-400 line-through text-xl mr-3">
                  {product.oldPrice.toLocaleString()}đ
                </span>
              )}
              <span className="text-rose-600 font-bold text-4xl">
                {product.price.toLocaleString()}đ
              </span>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-3">Số lượng:</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:text-rose-600"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:text-rose-600"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-500">Còn 25 sản phẩm</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-rose-600 text-white py-4 rounded-xl font-bold hover:bg-rose-700 transition flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={24} />
                <span>Thêm vào giỏ hàng</span>
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-yellow-400 text-rose-700 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
              >
                Mua ngay
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Truck size={20} />
                <span>{product.delivery}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Shield size={20} />
                <span>Đảm bảo hoa tươi 100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-rose-600 mb-8">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map(product => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                  <div className="text-6xl">{product.image}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-rose-600 font-bold text-lg">
                      {product.price.toLocaleString()}đ
                    </span>
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;