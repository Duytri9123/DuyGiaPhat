import {
  Wrench,
  Settings,
  Cpu,
  CircuitBoard,
  ShieldCheck,
  Gauge,
  Clock,
  ArrowRight,
  CheckCircle2,
  Headphones,
} from "lucide-react";
import { SEO } from "../components/common/SEO";

const services = [
  {
    id: 1,
    icon: Wrench,
    title: "Thiết kế & lắp đặt tủ điện",
    description:
      "Giải pháp tủ điện điều khiển, tủ phân phối theo tiêu chuẩn IEC, tối ưu không gian và chi phí.",
  },
  {
    id: 2,
    icon: Cpu,
    title: "Hệ thống thang máng cáp",
    description:
      "Thiết kế, gia công và thi công hệ thống thang cáp, máng cáp cho nhà xưởng, tòa nhà, khu công nghiệp.",
  },
  {
    id: 3,
    icon: CircuitBoard,
    title: "Tự động hóa & điều khiển",
    description:
      "Tư vấn, lập trình PLC, HMI, SCADA cho dây chuyền sản xuất và hệ thống công nghệ.",
  },
  {
    id: 4,
    icon: Settings,
    title: "Bảo trì & sửa chữa hệ thống",
    description:
      "Bảo dưỡng định kỳ, nâng cấp hệ thống điện – điều khiển đang vận hành, giảm tối đa thời gian dừng máy.",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "Giải pháp an toàn – chống sét",
    description:
      "Thiết kế, thi công hệ thống tiếp địa, chống sét, bảo vệ thiết bị quan trọng cho nhà máy.",
  },
  {
    id: 6,
    icon: Gauge,
    title: "Tư vấn tối ưu năng lượng",
    description:
      "Đánh giá phụ tải, đề xuất giải pháp tiết kiệm điện năng và tối ưu hiệu suất vận hành.",
  },
];

const reasons = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Kỹ thuật chính xác",
    description:
      "Đội ngũ kỹ sư nhiều năm kinh nghiệm trong lĩnh vực cơ điện công nghiệp và tự động hóa.",
  },
  {
    id: 2,
    icon: Clock,
    title: "Tiến độ đảm bảo",
    description:
      "Quy trình triển khai chặt chẽ, cam kết bàn giao đúng thời gian đã thống nhất với khách hàng.",
  },
  {
    id: 3,
    icon: Headphones,
    title: "Hỗ trợ tận tâm",
    description:
      "Đồng hành từ giai đoạn tư vấn, thiết kế đến vận hành và bảo trì sau bàn giao.",
  },
];

const processSteps = [
  {
    id: 1,
    label: "Bước 1",
    title: "Tiếp nhận yêu cầu",
    description: "Khách hàng gửi thông tin dự án, nhu cầu kỹ thuật và phạm vi công việc.",
  },
  {
    id: 2,
    label: "Bước 2",
    title: "Khảo sát & phân tích",
    description: "Kỹ sư Duy Gia Phát khảo sát hiện trường, thu thập dữ liệu và tiêu chuẩn áp dụng.",
  },
  {
    id: 3,
    label: "Bước 3",
    title: "Đề xuất giải pháp",
    description: "Lên phương án kỹ thuật, gửi báo giá chi tiết và tối ưu cho khách hàng.",
  },
  {
    id: 4,
    label: "Bước 4",
    title: "Thi công & giám sát",
    description: "Tổ chức thi công, lắp đặt, lập trình và kiểm thử theo đúng tiêu chuẩn.",
  },
  {
    id: 5,
    label: "Bước 5",
    title: "Bàn giao & bảo hành",
    description: "Nghiệm thu, đào tạo vận hành và bảo hành – bảo trì dài hạn.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 md:pt-32">
      <SEO
        title="Dịch vụ kỹ thuật & bảo trì hệ thống"
        description="Dịch vụ kỹ thuật, lắp đặt, bảo trì và nâng cấp hệ thống điện – tự động hóa cho nhà máy từ Duy Gia Phát. Đảm bảo vận hành ổn định và an toàn."
        url="https://duygiaphat.vn/dich-vu"
        image="https://duygiaphat.vn/og/services.jpg"
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-[11px] font-semibold tracking-[0.25em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Duy Gia Phát Services
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Giải pháp kỹ thuật & dịch vụ
              <span className="block text-amber-400">chuyên nghiệp cho nhà máy</span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-xl">
              Từ tư vấn, thiết kế đến thi công và bảo trì hệ thống cơ điện – tự động hóa, Duy Gia
              Phát cung cấp dịch vụ trọn gói, chuẩn kỹ thuật và tối ưu chi phí cho doanh nghiệp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/lien-he"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm md:text-base shadow-lg transition-all"
              >
                Tư vấn ngay
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/quy-trinh-bao-gia"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600/70 text-slate-200 hover:bg-slate-800/60 text-sm md:text-base font-semibold transition-all"
              >
                Xem quy trình dịch vụ
              </a>
            </div>
          </div>
          <div className="relative hidden md:flex justify-end">
            <div className="w-full max-w-md rounded-3xl bg-gradient-to-br from-amber-400/15 via-slate-900 to-slate-900/90 border border-amber-500/30 p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-amber-300 font-semibold">
                    Bảng điều khiển công nghiệp
                  </p>
                  <p className="text-sm text-slate-300 mt-1">
                    Thiết kế – lắp đặt – lập trình – bảo trì
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-950">
                  <Settings className="w-5 h-5" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-2 text-xs text-slate-200">
                <div className="bg-slate-900/70 rounded-xl px-3 py-3 flex flex-col gap-1">
                  <span className="text-amber-300 font-semibold">100+</span>
                  <span className="text-[11px] text-slate-400">Dự án tủ điện</span>
                </div>
                <div className="bg-slate-900/70 rounded-xl px-3 py-3 flex flex-col gap-1">
                  <span className="text-amber-300 font-semibold">24/7</span>
                  <span className="text-[11px] text-slate-400">Hỗ trợ kỹ thuật</span>
                </div>
                <div className="bg-slate-900/70 rounded-xl px-3 py-3 flex flex-col gap-1">
                  <span className="text-amber-300 font-semibold">ISO</span>
                  <span className="text-[11px] text-slate-400">Tiêu chuẩn chất lượng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Danh mục dịch vụ
              </h2>
              <div className="mt-2 h-1.5 w-20 bg-amber-500 rounded-full" />
            </div>
            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              Dịch vụ được thiết kế chuyên biệt cho nhà máy, khu công nghiệp, tòa nhà và hệ thống sản
              xuất cần độ tin cậy cao.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between min-h-[190px]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm md:text-base group-hover:text-amber-600">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-slate-600 flex-1">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 text-center md:text-left max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
              Tại sao chọn Duy Gia Phát
            </h2>
            <p className="text-sm md:text-base text-slate-300">
              Kết hợp kinh nghiệm thi công thực tế và tư duy kỹ thuật chuẩn quốc tế, chúng tôi mang lại
              giải pháp tối ưu, an toàn và bền vững cho từng nhà máy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.id}
                  className="bg-slate-800/80 border border-slate-700 rounded-xl p-6 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">{reason.title}</h3>
                  <p className="text-xs md:text-sm text-slate-300">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Quy trình dịch vụ
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Quy trình 5 bước rõ ràng, minh bạch giúp dự án của bạn được triển khai nhanh chóng và
              kiểm soát được chất lượng ở từng giai đoạn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`group rounded-xl border bg-white p-6 flex flex-col justify-between min-h-[210px] text-sm transition-transform duration-200 hover:-translate-y-1 ${
                  index % 2 === 1 ? "bg-slate-900 text-white border-slate-800" : "border-slate-200"
                }`}
              >
                <div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-500">
                    <span className="w-6 h-6 rounded-full border border-amber-400 flex items-center justify-center text-[10px]">
                      {String(step.id).padStart(2, "0")}
                    </span>
                    {step.label}
                  </span>
                  <h3 className="mt-3 font-semibold text-sm md:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-slate-600 group-[.bg-slate-900]:text-slate-300">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-1 w-12 rounded-full bg-slate-100 group-[.bg-slate-900]:bg-slate-700 group-hover:bg-amber-500 transition-colors" />
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-4">
            Khởi động dự án của bạn cùng chúng tôi
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8">
            Hãy chia sẻ nhu cầu và bài toán kỹ thuật của bạn. Duy Gia Phát sẽ đề xuất giải pháp phù
            hợp nhất, kèm báo giá chi tiết và lộ trình triển khai rõ ràng.
          </p>
          <a
            href="/lien-he"
            className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold uppercase tracking-[0.22em] text-xs md:text-sm shadow-lg transition-transform active:scale-95"
          >
            Bắt đầu ngay
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
