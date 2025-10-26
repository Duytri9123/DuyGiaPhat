import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '🚚',
      title: 'Giao hàng nhanh',
      description: 'Giao hoa tươi trong vòng 2 giờ'
    },
    {
      icon: '🌸',
      title: 'Hoa tươi 100%',
      description: 'Cam kết hoa tươi mới nhất'
    },
    {
      icon: '💝',
      title: 'Chuyên nghiệp',
      description: 'Đội ngũ tư vấn nhiệt tình'
    },
    {
      icon: '💰',
      title: 'Giá tốt nhất',
      description: 'Giá cả cạnh tranh trên thị trường'
    }
  ];

  const team = [
    {
      name: 'Nguyễn Thu Hà',
      role: 'Founder & CEO',
      avatar: '👩‍💼'
    },
    {
      name: 'Trần Minh Tuấn',
      role: 'Head Florist',
      avatar: '👨‍🌾'
    },
    {
      name: 'Lê Thị Mai',
      role: 'Customer Service',
      avatar: '👩‍💻'
    }
  ];

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

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-rose-600 mb-6">Về Hoa Tươi Xinh</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Với hơn 5 năm kinh nghiệm trong ngành hoa tươi, chúng tôi tự hào mang đến những 
            bó hoa đẹp nhất, tươi nhất với dịch vụ giao hàng nhanh chóng và chuyên nghiệp.
          </p>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-rose-600 mb-6">Câu chuyện của chúng tôi</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Hoa Tươi Xinh được thành lập từ năm 2020 với mong muốn mang vẻ đẹp 
                  và hương thơm của hoa tươi đến mọi gia đình Việt Nam.
                </p>
                <p>
                  Từ một cửa hàng nhỏ, chúng tôi đã phát triển thành hệ thống cung cấp 
                  hoa tươi trực tuyến với dịch vụ giao hàng tận nơi nhanh chóng.
                </p>
                <p>
                  Mỗi bó hoa của chúng tôi không chỉ là sản phẩm mà còn chứa đựng tình 
                  yêu và sự tận tâm của đội ngũ nghệ nhân.
                </p>
              </div>
            </div>
            <div className="text-9xl text-center">💐</div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-rose-600 text-center mb-12">Đội ngũ của chúng tôi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition">
                <div className="text-8xl mb-4">{member.avatar}</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{member.name}</h3>
                <p className="text-rose-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl text-white p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-rose-100">Năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-rose-100">Khách hàng</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-rose-100">Bó hoa đã giao</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-rose-100">Đánh giá</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-rose-600 mb-6">Sẵn sàng đặt hoa?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Liên hệ với chúng tôi để được tư vấn và đặt hoa ngay hôm nay!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-700 transition"
            >
              Mua hàng ngay
            </button>
            <button className="border border-rose-600 text-rose-600 px-8 py-4 rounded-full font-bold hover:bg-rose-50 transition">
              Liên hệ: 1900-xxxx
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;