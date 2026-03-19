import React from "react";
import { Building2, Factory, AlertTriangle, Headset, Phone, Mail, MapPin, Send } from "lucide-react";
import { SEO } from "../components/common/SEO";

const GOOGLE_SHEET_SCRIPT = "https://script.google.com/macros/s/AKfycbyhVaELyytmcfZMpksKsiDLwfb2clZ-7mFv48vt8SC1lcdfyelSaApBQTdBIAdNpqC9/exec";

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Lấy đúng tên hiển thị của mục đích liên hệ (text trong select)
    const purposeSelect = form.querySelector<HTMLSelectElement>('select[name="purpose"]');
    if (purposeSelect) {
      const selectedText = purposeSelect.options[purposeSelect.selectedIndex]?.text || "";
      formData.set("purpose", selectedText);
    }

    // Đánh dấu loại form để Apps Script tách đúng sheet
    formData.append("formType", "contact");
    formData.append("timestamp", new Date().toISOString());
    formData.append("ip", "");

    try {
      await fetch(GOOGLE_SHEET_SCRIPT, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      // Với mode "no-cors" ta không đọc được phản hồi,
      // nhưng request vẫn được gửi tới Apps Script/Google Sheet
      alert("Gửi thành công! Cảm ơn bạn đã gửi yêu cầu. Chúng tôi sẽ liên hệ trong thời gian sớm nhất!");
      form.reset();
    } catch (error) {
      alert("Gửi thất bại! Vui lòng thử lại sau.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-32">
      <SEO
        title="Liên hệ & yêu cầu báo giá"
        description="Gửi yêu cầu tư vấn, báo giá thiết bị và giải pháp kỹ thuật tới Duy Gia Phát. Đội ngũ chuyên gia phản hồi trong vòng 24 giờ."
        url="https://duygiaphat.vn/lien-he"
        image="https://duygiaphat.vn/og/contact.jpg"
      />
      {/* Hero */}
      <section className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 block">
            Communication Portal
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            LIÊN HỆ VỚI <br /> <span className="text-amber-400">CHÚNG TÔI</span>
          </h1>
          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left info cards */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            {/* Văn phòng chính */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-lg md:text-xl font-black text-slate-900 tracking-tight uppercase mb-5 md:mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-400 flex items-center justify-center rounded-lg text-slate-900">
                  <Building2 size={22} />
                </span>
                Văn phòng chính
              </h2>
              <div className="space-y-4 text-sm md:text-base">
                <div className="flex gap-3">
                  <MapPin className="text-amber-400 mt-1" size={18} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                      Địa chỉ
                    </p>
                    <p className="text-slate-900 font-medium">
                      Số 123 Đường Công Nghệ, Khu Công Nghiệp Cao, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-amber-400 mt-1" size={18} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                      Hotline tổng đài
                    </p>
                    <p className="text-slate-900 font-black text-lg">028 1234 5678</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-amber-400 mt-1" size={18} />
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                      Email liên hệ
                    </p>
                    <p className="text-slate-900 font-medium">contact@duygiaphat.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nhà máy sản xuất */}
            <div className="bg-slate-900 p-6 md:p-8 rounded-xl shadow-xl text-white">
              <h2 className="text-lg md:text-xl font-black tracking-tight uppercase mb-5 md:mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-400 flex items-center justify-center rounded-lg text-slate-900">
                  <Factory size={22} />
                </span>
                Nhà máy sản xuất
              </h2>
              <div className="space-y-4 text-sm md:text-base">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">
                    Cơ sở sản xuất
                  </p>
                  <p className="text-slate-100">
                    Lô B2, KCN Long Hậu, Cần Giuộc, Long An
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-1">
                    Hotline điều phối
                  </p>
                  <p className="text-2xl font-black text-white">090 999 8888</p>
                </div>
              </div>
            </div>

            {/* Khiếu nại & phản hồi */}
            <div className="bg-red-50 p-6 md:p-8 rounded-xl border border-red-200/60">
              <h2 className="text-lg md:text-xl font-black text-red-900 tracking-tight uppercase mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-lg text-white">
                  <AlertTriangle size={22} />
                </span>
                Khiếu nại & phản hồi
              </h2>
              <p className="text-sm text-red-900/80 mb-5 font-medium">
                Chúng tôi luôn lắng nghe để cải thiện chất lượng dịch vụ.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="text-[10px] font-bold uppercase text-red-600 mb-1">
                    Hotline khiếu nại
                  </p>
                  <p className="font-black text-slate-900">1900 6789</p>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <p className="text-[10px] font-bold uppercase text-red-600 mb-1">
                    Email phản hồi
                  </p>
                  <p className="font-black text-slate-900 text-sm">cskh@duygiaphat.com</p>
                </div>
              </div>
            </div>

            {/* Hỗ trợ kỹ thuật */}
            <div className="bg-sky-50 p-6 md:p-8 rounded-xl border border-sky-200/70">
              <h2 className="text-lg md:text-xl font-black text-sky-900 tracking-tight uppercase mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-sky-500 flex items-center justify-center rounded-lg text-white">
                  <Headset size={22} />
                </span>
                Hỗ trợ kỹ thuật 24/7
              </h2>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase text-sky-900/80 mb-1 tracking-[0.18em]">
                    Kỹ thuật viên trực tuyến
                  </p>
                  <p className="text-2xl font-black text-sky-900">091 222 3344</p>
                </div>
                <Headset className="text-sky-300 w-12 h-12 hidden md:block" />
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl border border-gray-200 lg:sticky lg:top-28">
              <div className="mb-8 md:mb-10">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  Gửi yêu cầu & báo giá
                </h3>
                <p className="text-slate-500 mt-3 text-sm md:text-base">
                  Vui lòng điền thông tin bên dưới, đội ngũ chuyên gia của chúng tôi sẽ phản hồi trong vòng 24h.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 text-sm md:text-base">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 px-1">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-gray-100 border-none focus:ring-2 focus:ring-amber-400/70 rounded-lg px-4 py-3 placeholder:text-slate-400 text-slate-900 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 px-1">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="0901 234 567"
                      className="w-full bg-gray-100 border-none focus:ring-2 focus:ring-amber-400/70 rounded-lg px-4 py-3 placeholder:text-slate-400 text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 px-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="example@mail.com"
                      className="w-full bg-gray-100 border-none focus:ring-2 focus:ring-amber-400/70 rounded-lg px-4 py-3 placeholder:text-slate-400 text-slate-900 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 px-1">
                      Mục đích liên hệ
                    </label>
                    <select
                      name="purpose"
                      className="w-full bg-gray-100 border-none focus:ring-2 focus:ring-amber-400/70 rounded-lg px-4 py-3 text-slate-700 outline-none transition-all cursor-pointer"
                      defaultValue="quotation"
                    >
                      <option value="quotation">Yêu cầu báo giá</option>
                      <option value="complaint">Khiếu nại & phản hồi dịch vụ</option>
                      <option value="technical">Hỗ trợ kỹ thuật</option>
                      <option value="cooperation">Hợp tác dự án</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 px-1">
                    Nội dung chi tiết
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Hãy mô tả yêu cầu của bạn chi tiết nhất có thể để chúng tôi hỗ trợ tốt hơn..."
                    className="w-full bg-gray-100 border-none focus:ring-2 focus:ring-amber-400/70 rounded-lg px-4 py-3 placeholder:text-slate-400 text-slate-900 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 text-slate-900 font-black uppercase tracking-[0.25em] py-4 rounded-lg hover:brightness-110 shadow-lg shadow-amber-400/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-xs md:text-sm"
                >
                  <span>GỬI YÊU CẦU NGAY</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map section with real Google Maps iframe */}
      <section className="w-full h-96 md:h-[460px] relative border-y border-gray-300 mt-6 overflow-hidden">
        <iframe
          title="Bản đồ văn phòng Duy Gia Phát"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.885763067143!2d106.660172!3d10.762622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTAuNzYyNjIyLCAxMDYuNjYwMTcy!5e0!3m2!1svi!2svi!4v1710000000000!5m2!1svi!2svi"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition duration-700"
        />

        <div className="absolute bottom-6 left-4 md:left-10 bg-white/95 backdrop-blur p-4 rounded-lg shadow-xl max-w-xs hidden md:block border border-gray-200">
          <h4 className="font-black text-slate-900 uppercase text-[11px] tracking-[0.2em] mb-2">
            Văn phòng đại diện
          </h4>
          <p className="text-xs text-slate-600">
            Mở trong Google Maps để nhận chỉ đường chi tiết.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=10.762622,106.660172"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold text-amber-500 uppercase"
          >
            Xem bản đồ
          </a>
        </div>
      </section>
    </div>
  );
}
