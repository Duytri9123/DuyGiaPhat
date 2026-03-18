import { ClipboardList, SearchCheck, Calculator, FileCheck2, Factory, Bolt, Settings, HeadsetIcon, ArrowRight } from "lucide-react";

export default function QuoteProcessPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-32">
      {/* Hero */}
      <section className="relative h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden bg-slate-950">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center grayscale"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-block px-3 py-1 bg-amber-500 text-slate-950 text-[10px] font-black tracking-[0.3em] uppercase mb-4 rounded-sm">
            DUY GIA PHAT TECHNICAL
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            QUY TRÌNH BÁO GIÁ <br />
            <span className="text-amber-400">& TRIỂN KHAI</span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-xs md:text-sm font-medium tracking-[0.18em] uppercase">
            Tiêu chuẩn kỹ thuật chính xác cho mọi công trình công nghiệp
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500/40" />
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">
          {/* Step 1 */}
          <div className="group bg-white p-6 md:p-8 border-l-4 border-amber-500 shadow-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-between min-h-[260px] md:min-h-80">
            <div>
              <span className="text-5xl md:text-6xl font-black block leading-none mb-4 text-transparent [text-stroke:1px_rgba(255,217,0,0.35)]">
                01
              </span>
              <h3 className="font-black text-slate-950 uppercase tracking-tight text-base md:text-lg mb-3">
                Tiếp nhận yêu cầu
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Khách hàng gửi thông tin chi tiết qua form trực tuyến hoặc hotline kỹ thuật.
              </p>
            </div>
            <div className="mt-6 flex justify-between items-end">
              <ClipboardList className="text-amber-500 w-8 h-8" />
              <div className="h-1 w-12 bg-slate-100 group-hover:bg-amber-500 transition-colors" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="group bg-slate-900 p-6 md:p-8 border-l-4 border-amber-500 shadow-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-between min-h-[260px] md:min-h-80">
            <div>
              <span className="text-5xl md:text-6xl font-black block leading-none mb-4 text-transparent opacity-50 [text-stroke:1px_rgba(255,217,0,0.3)]">
                02
              </span>
              <h3 className="font-black text-amber-400 uppercase tracking-tight text-base md:text-lg mb-3">
                Khảo sát & tư vấn
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Kỹ sư chuyên môn liên hệ xác nhận và khảo sát thực tế tại hiện trường.
              </p>
            </div>
            <div className="mt-6 flex justify-between items-end">
              <SearchCheck className="text-amber-400 w-8 h-8" />
              <div className="h-1 w-12 bg-slate-800 group-hover:bg-amber-500 transition-colors" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="group bg-white p-6 md:p-8 border-l-4 border-amber-500 shadow-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-between min-h-[260px] md:min-h-80">
            <div>
              <span className="text-5xl md:text-6xl font-black block leading-none mb-4 text-transparent [text-stroke:1px_rgba(255,217,0,0.35)]">
                03
              </span>
              <h3 className="font-black text-slate-950 uppercase tracking-tight text-base md:text-lg mb-3">
                Tính toán & báo giá
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Phòng kỹ thuật tối ưu phương án và gửi báo giá chi tiết trong vòng 24h.
              </p>
            </div>
            <div className="mt-6 flex justify-between items-end">
              <Calculator className="text-amber-500 w-8 h-8" />
              <div className="h-1 w-12 bg-slate-100 group-hover:bg-amber-500 transition-colors" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="group bg-slate-900 p-6 md:p-8 border-l-4 border-amber-500 shadow-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-between min-h-[260px] md:min-h-80">
            <div>
              <span className="text-5xl md:text-6xl font-black block leading-none mb-4 text-transparent opacity-50 [text-stroke:1px_rgba(255,217,0,0.3)]">
                04
              </span>
              <h3 className="font-black text-amber-400 uppercase tracking-tight text-base md:text-lg mb-3">
                Chốt hợp đồng
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Thống nhất điều khoản, thanh toán tạm ứng và xác nhận tiến độ bàn giao.
              </p>
            </div>
            <div className="mt-6 flex justify-between items-end">
              <FileCheck2 className="text-amber-400 w-8 h-8" />
              <div className="h-1 w-12 bg-slate-800 group-hover:bg-amber-500 transition-colors" />
            </div>
          </div>

          {/* Step 5 */}
          <div className="group bg-white p-6 md:p-8 border-l-4 border-amber-500 shadow-xl hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-between min-h-[260px] md:min-h-80">
            <div>
              <span className="text-5xl md:text-6xl font-black block leading-none mb-4 text-transparent [text-stroke:1px_rgba(255,217,0,0.35)]">
                05
              </span>
              <h3 className="font-black text-slate-950 uppercase tracking-tight text-base md:text-lg mb-3">
                Sản xuất & bàn giao
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gia công tại nhà máy theo tiêu chuẩn và lắp đặt hoàn thiện tại công trình.
              </p>
            </div>
            <div className="mt-6 flex justify-between items-end">
              <Factory className="text-amber-500 w-8 h-8" />
              <div className="h-1 w-12 bg-slate-100 group-hover:bg-amber-500 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Commitments & CTA */}
      <section className="bg-slate-100 py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-950 mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-amber-500 flex items-center justify-center text-slate-950 rounded">
                <Bolt className="w-5 h-5" />
              </span>
              Cam kết dịch vụ
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Bolt className="text-amber-500 mt-1 w-5 h-5" />
                <div>
                  <h4 className="font-black uppercase text-[11px] tracking-[0.22em] text-slate-900">
                    Phản hồi siêu tốc
                  </h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Xử lý mọi yêu cầu báo giá trong vòng tối đa 24 giờ làm việc.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Settings className="text-amber-500 mt-1 w-5 h-5" />
                <div>
                  <h4 className="font-black uppercase text-[11px] tracking-[0.22em] text-slate-900">
                    Độ chính xác kỹ thuật
                  </h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Tính toán bám sát bản vẽ, loại bỏ mọi rủi ro sai lệch vật tư.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <HeadsetIcon className="text-amber-500 mt-1 w-5 h-5" />
                <div>
                  <h4 className="font-black uppercase text-[11px] tracking-[0.22em] text-slate-900">
                    Hỗ trợ 24/7
                  </h4>
                  <p className="text-slate-600 text-sm mt-1">
                    Đội ngũ kỹ thuật luôn sẵn sàng giải đáp mọi thắc mắc của chủ đầu tư.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-950 p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-6 transition-transform">
                <Settings className="text-amber-500 w-24 h-24" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4">
                Sẵn sàng triển khai dự án?
              </h3>
              <p className="text-slate-400 text-sm mb-8 max-w-md">
                Hãy gửi thông tin dự án của bạn ngay hôm nay để nhận được giải pháp kỹ thuật tối ưu nhất từ Duy Gia Phát.
              </p>
              <a
                href="/lien-he"
                className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-10 uppercase tracking-[0.25em] rounded-lg flex items-center justify-center gap-3 transition-all active:scale-95 text-xs md:text-sm"
              >
                Gửi yêu cầu ngay
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
