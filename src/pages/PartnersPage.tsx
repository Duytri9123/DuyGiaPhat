import { mockPartners } from '../data/mockData';
import { Globe } from 'lucide-react';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Đối Tác Chiến Lược</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Duy Gia Phát hợp tác với các thương hiệu hàng đầu thế giới để cung cấp giải pháp điện tốt nhất cho khách hàng Việt Nam.
          </p>
          <div className="h-1.5 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mockPartners.map((partner) => (
            <div key={partner.id} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              {/* Logo Area */}
              <div className="h-24 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-6 group-hover:from-amber-50 group-hover:to-amber-100 transition">
                <p className="text-xl md:text-2xl font-bold text-gray-700 group-hover:text-amber-600 transition">
                  {partner.logo}
                </p>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                {partner.name}
              </h3>

              {/* Country */}
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <Globe size={18} className="text-amber-500" />
                <span className="font-semibold">{partner.country}</span>
              </div>

              {/* Category */}
              <p className="text-sm text-gray-600 line-clamp-2">
                {partner.category}
              </p>

              {/* Divider */}
              <div className="w-12 h-1 bg-amber-500 rounded-full mt-6"></div>
            </div>
          ))}
        </div>

        {/* Collaboration Section */}
        <div className="bg-white rounded-xl p-12 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Lợi Ích Hợp Tác</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Chất lượng chuẩn quốc tế',
                desc: 'Sản phẩm đạt tiêu chuẩn ISO, CE, CCC từ các nhà sản xuất uy tín',
              },
              {
                title: 'Giá cả cạnh tranh',
                desc: 'Hợp tác trực tiếp giúp giảm chi phí, giá tốt nhất cho khách hàng',
              },
              {
                title: 'Hỗ trợ kỹ thuật chuyên sâu',
                desc: 'Đội kỹ thuật có chứng chỉ, sẵn sàng hỗ trợ 24/7',
              },
              {
                title: 'Bảo hành toàn diện',
                desc: 'Bảo hành từ 12-36 tháng, sửa chữa miễn phí trong thời hạn',
              },
            ].map((benefit, i) => (
              <div key={i} className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-amber-500 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bạn cần tư vấn sản phẩm?</h2>
          <p className="text-amber-50 mb-8 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để được tư vấn giải pháp điện phù hợp nhất cho công trình của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0976707297"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-bold transition"
            >
              📞 Gọi: 0976707297
            </a>
            <a
              href="#"
              className="bg-white hover:bg-gray-50 text-amber-600 px-8 py-3 rounded-lg font-bold transition"
            >
              💬 Chat Zalo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
