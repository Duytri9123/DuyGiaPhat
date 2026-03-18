// src/pages/About.tsx
import { Phone, Mail, MapPin, Clock, Eye, Rocket, Lightbulb, Handshake, CheckCircle2, Factory, Sparkles } from "lucide-react";
import type React from "react";
import {
  aboutHistory,
  visionMission,
  coreValues,
  manufacturingBullets,
  statsOverview,
  partners,
  certifications,
} from "../data/aboutData";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAgB_B6ynhw64V5jw1s6TwnuOkZXQfE3gQsXfNOEQwmnLHA6ydmCy__XQC6urg7u2zc4TbG49qel7FUL6bVybwk-WmkcirBK17Iu2vL2oykeyLCxtbl4YamsBMtpZvnm-JpdFSG7CP-pUmyNzk7zLEYANriZvANBGQHmZEgERTTzWZJeNuPXjK5OUARU4_XOZvIF4NqedoKfH-mPurDyrrDinKp2wCowT17bMTZdLentkC0ZVCFj7h_mTQZnZ8-03HmupKmJr9cHLc2";

const WORKSHOP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBQzCqrsy5dSL5r0kUe5jADsTbQCo0j3t8SJtGHzKLeHab6w3DJV7Aqa3aS6ENVI26qDfYVHq0sodPtrm7uYhowycLifXT1-RhY0lXmCfEx-aDK9jwV_yjWZBf0G1E4AwfkezS6w49ehJontU4DUGm-ArICK3c1K7JpE_4rhxaqFqXyU6t9qiy9PxqpeB3CY9cHjdqb_jhIwfZfmbG9z8WzkZIFUW3KXEtre6s6pwL5eeUrWzXFrXO3FwZsBaTT4k8qkGPWUZI_nA2Q";

const FACTORY_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBvcppQxgSeWkV2MbqHEWUoKBVM2NqHX-1gebJh8L-9-wz5Y3VMScjiTZ0hky3sZ_XGAznNs0xPXDgC-Z19zB-q9GpltO1OnFjuCWPTDgUhFXD4jMW15Rg2ftnb7E91pb7bm-G_3CB8WfpOBQW71bqY4q03pU-uF98EyciSzp15gh9xyiYgAKJls3C7RQ2AE8zkoPV4GNuenvOwuw-0mLnac9DiH5j16sIBRosMDmWFaEN_FNE4GHAfuns09huPG8Yq-qkEG137gOH4";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pb-20 space-y-20">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl md:rounded-[2.25rem] h-[520px] md:h-[640px] flex items-center shadow-2xl">
          <img
            src={HERO_IMAGE}
            alt="Hệ thống tủ điện công nghiệp"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/10" />
          <div className="relative z-10 px-6 md:px-16 max-w-3xl">
            <span className="inline-block bg-amber-400 text-slate-900 px-3 py-1 text-[11px] font-black tracking-[0.25em] uppercase rounded-sm mb-5">
              KỸ THUẬT CHÍNH XÁC
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 uppercase">
              VỀ <span className="text-amber-400">DUY GIA PHÁT</span>
            </h1>
            <p className="text-sm md:text-lg text-slate-100/90 leading-relaxed max-w-xl font-light">
              Tiên phong trong lĩnh vực kỹ thuật điện công nghiệp và giải pháp năng lượng. Chúng tôi kiến tạo
              nền tảng vững chắc cho sự vận hành ổn định của mọi hệ thống sản xuất hiện đại.
            </p>
          </div>
        </section>

        {/* STORY / TIMELINE */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-black tracking-[0.3em] text-amber-500 uppercase mb-3">
              LỊCH SỬ HÌNH THÀNH
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-slate-800 mb-6 md:mb-8 uppercase tracking-tight">
              HÀNH TRÌNH PHÁT TRIỂN
            </h2>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
              {aboutHistory.map((item, index) => (
                <div key={item.id} className="relative pl-12">
                  <div
                    className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm z-10 ${
                      index === 0 ? "bg-amber-400" : "bg-slate-800"
                    }`}
                  />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl transform rotate-2">
              <img
                src={WORKSHOP_IMAGE}
                alt="Xưởng sản xuất cơ điện công nghiệp"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -left-6 bg-amber-400 px-8 py-6 rounded-xl shadow-2xl hidden md:block">
              <p className="text-3xl lg:text-4xl font-black text-slate-900 leading-none mb-1">15+</p>
              <p className="text-[11px] font-bold tracking-[0.25em] text-slate-900/80 uppercase">
                NĂM KINH NGHIỆM
              </p>
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-14 px-6 md:px-10 bg-slate-900 rounded-3xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {visionMission.map((item) => {
              const Icon = item.title.toLowerCase().includes("tầm") ? Eye : Rocket;
              return (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-9 backdrop-blur-sm hover:border-amber-400/60 transition-colors group"
                >
                  <Icon className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-300 text-sm md:text-lg leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="space-y-10">
          <div className="text-center">
            <p className="text-xs font-black tracking-[0.3em] text-amber-500 uppercase mb-3">
              BẢN SẮC DOANH NGHIỆP
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tight">
              GIÁ TRỊ CỐT LÕI
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => {
              const iconMap: Record<number, React.ReactNode> = {
                1: <CheckCircle2 className="w-9 h-9" />,
                2: <Lightbulb className="w-9 h-9" />,
                3: <Handshake className="w-9 h-9" />,
              };
              return (
                <div
                  key={value.id}
                  className="p-9 bg-white rounded-2xl shadow-sm border-b-4 border-transparent hover:border-amber-400 hover:shadow-xl transition-all text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mx-auto mb-5 text-amber-500">
                    {iconMap[value.id]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">{value.title}</h3>
                  <p className="text-slate-600 text-sm md:text-base">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* MANUFACTURING CAPACITY + STATS */}
        <section className="space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={FACTORY_IMAGE}
                alt="Nhà xưởng sản xuất quy mô lớn"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent flex items-end p-7">
                <div className="text-white">
                  <p className="text-[11px] font-black tracking-[0.26em] text-amber-300 uppercase mb-1">
                    XƯỞNG SẢN XUẤT
                  </p>
                  <p className="text-base md:text-xl font-bold">
                    Quy mô 5000m² đạt chuẩn ISO
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-black tracking-[0.3em] text-amber-500 uppercase mb-3">
                CÔNG SUẤT VẬN HÀNH
              </p>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-5 uppercase tracking-tight">
                NĂNG LỰC SẢN XUẤT
              </h2>
              <p className="text-slate-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-7">
                Duy Gia Phát sở hữu hệ thống máy móc gia công cơ khí chính xác CNC, phòng thí nghiệm điện hiện
                đại và đội ngũ kỹ sư, công nhân lành nghề.
              </p>
              <ul className="space-y-3">
                {manufacturingBullets.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 font-semibold text-slate-900">
                    <span className="mt-1 text-amber-500">
                      <CheckCircle2 className="w-5 h-5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsOverview.map((stat) => (
              <div
                key={stat.id}
                className={`rounded-xl p-7 text-center shadow-sm ${
                  stat.id === 2
                    ? "bg-slate-900 text-amber-400"
                    : stat.id === 4
                    ? "bg-amber-400 text-slate-900"
                    : "bg-white text-slate-900"
                }`}
              >
                <p className="text-2xl md:text-3xl font-black mb-1">{stat.value}</p>
                <p className="text-[11px] font-black tracking-[0.25em] uppercase opacity-80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PARTNERS & CERTIFICATIONS */}
        <section className="space-y-12 bg-white rounded-3xl shadow-sm px-6 md:px-10 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-slate-100 pb-8">
            <div>
              <p className="text-xs font-black tracking-[0.3em] text-amber-500 uppercase mb-3">
                ĐỒNG HÀNH CÙNG THÀNH CÔNG
              </p>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
                ĐỐI TÁC & CHỨNG CHỈ
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-lg text-slate-900"
                >
                  <Factory className="w-4 h-4 text-amber-500" />
                  <span className="text-[11px] font-black tracking-[0.22em] uppercase">{cert.code}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-70">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <span className="text-base sm:text-lg md:text-xl font-black text-slate-400 tracking-wide">{partner.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT + CTA (GIỐNG HTML GỐC VỀ TONE) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Liên hệ ngay</h2>
            {[ 
              { icon: Phone, label: "Hotline", value: "0976 707 297", href: "tel:0976707297" },
              { icon: Mail, label: "Email", value: "info@duygiaphat.com.vn", href: "mailto:info@duygiaphat.com.vn" },
              { icon: MapPin, label: "Văn phòng", value: "KCN Biên Hòa 2, Đồng Nai", href: "#" },
              { icon: Clock, label: "Giờ làm việc", value: "T2 - T7: 8:00 - 17:30", href: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl hover:from-slate-100 hover:to-slate-200 transition-all group"
              >
                <div className="bg-slate-900 text-white p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="text-base md:text-lg text-slate-700">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-pink-500 rounded-3xl shadow-2xl p-8 md:p-10 text-white flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-black mb-3 md:mb-4">Cần tư vấn giải pháp?</h2>
            <p className="text-sm md:text-lg mb-6 md:mb-7 text-amber-50">
              Đội kỹ thuật sẽ liên hệ trong vài phút để báo giá chi tiết và đề xuất cấu hình tủ điện tối ưu cho dự
              án của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0976707297"
                className="flex-1 bg-white text-slate-900 py-3 md:py-4 rounded-2xl font-bold text-base md:text-xl flex items-center justify-center gap-3 hover:bg-amber-50 transition shadow-xl"
              >
                <Phone className="w-6 h-6" />
                <span> 0976 707 297</span>
              </a>
              <a
                href="https://zalo.me/0976707297"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-slate-900/90 py-3 md:py-4 rounded-2xl font-bold text-base md:text-xl flex items-center justify-center gap-3 hover:bg-slate-900 transition shadow-xl"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 font-black text-xs">
                  Z
                </span>
                Chat Zalo
              </a>
            </div>
            <p className="text-center mt-5 text-amber-100 text-sm flex items-center justify-center gap-1">
              <Sparkles className="w-4 h-4" />
              <span>Hoặc để lại thông tin, chúng tôi gọi lại ngay!</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}