import { mockNews } from "../data/mockData";
import { CalendarDays, Eye, ChevronRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function NewsPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const articleId = id ? parseInt(id, 10) : mockNews[0]?.id;
  const article =
    mockNews.find((item) => item.id === articleId) || mockNews[0];
  const related = mockNews.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-100 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-8">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-amber-500"
          >
            Trang chủ
          </button>
          <ChevronRight size={14} className="text-slate-400" />
          <button
            type="button"
            onClick={() => navigate("/tin-tuc")}
            className="cursor-pointer hover:text-amber-500"
          >
            Tin tức
          </button>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-slate-900 truncate max-w-[260px] md:max-w-[360px]">
            {article.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Article content */}
          <section className="lg:col-span-8">
            <article className="bg-white rounded-lg p-2 overflow-hidden">
              {/* Header */}
              <header className="px-0 md:px-0 mb-6 md:mb-8">
                <h1 className="text-2xl md:text-4xl font-black text-slate-950 leading-tight mb-4 md:mb-6 tracking-tight">
                  {article.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 border-y border-slate-100 py-3 md:py-4">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-amber-500" />
                    <span>
                      {new Date(article.date).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-700">
                      {article.author
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-amber-500" />
                    <span>{article.views.toLocaleString("vi-VN")} lượt xem</span>
                  </div>
                </div>
              </header>

              {/* Hero image */}
              <div className="mb-8 aspect-video w-full bg-slate-200 rounded-lg overflow-hidden group">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Body content */}
              <div className="max-w-none pb-8 text-slate-700">
                <p className="text-lg font-medium leading-relaxed text-slate-900 mb-6">
                  {article.excerpt}
                </p>

                {/* Nội dung chi tiết dạng đoạn, tách theo xuống dòng */}
                {article.content.split("\n\n").map((block, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {block}
                  </p>
                ))}

                {/* Tags */}
                <footer className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Tags:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold uppercase rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </footer>
              </div>
            </article>

            {/* Related posts */}
            <section className="mt-14">
              <h3 className="text-xl md:text-2xl font-black text-slate-950 mb-6 flex items-center gap-3">
                <span className="w-2 h-7 bg-amber-500 block" />
                BÀI VIẾT LIÊN QUAN
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigate(`/tin-tuc/${item.id}`)}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer text-left"
                  >
                    <div className="aspect-video bg-slate-200 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-amber-500 transition-colors text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:space-y-10">
            {/* Latest posts widget */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100">
              <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-6 pb-2 border-b-2 border-amber-500 inline-block">
                BÀI VIẾT MỚI NHẤT
              </h4>
              <div className="space-y-5">
                {mockNews.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => navigate(`/tin-tuc/${item.id}`)}
                    className="flex gap-4 group cursor-pointer text-left w-full"
                  >
                    <div className="w-20 h-20 bg-slate-200 rounded overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 group-hover:text-amber-500 transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h5>
                      <span className="text-[10px] text-slate-400 uppercase font-bold">
                        {new Date(item.date).toLocaleDateString("vi-VN")}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA banner */}
            <div className="bg-slate-900 p-7 rounded-lg relative overflow-hidden text-white shadow-md">
              <div className="absolute inset-0 bg-amber-500/5" />
              <div className="relative z-10">
                <h4 className="text-xl font-black mb-2 leading-tight">
                  CẦN TƯ VẤN KỸ THUẬT TRỰC TIẾP?
                </h4>
                <p className="text-slate-300 text-sm mb-5">
                  Đội ngũ kỹ sư giàu kinh nghiệm của chúng tôi luôn sẵn sàng hỗ trợ 24/7 cho mọi dự án điện công nghiệp.
                </p>
                <button
                  type="button"
                  onClick={() => navigate("/lien-he")}
                  className="w-full py-3 bg-amber-500 text-slate-950 font-black uppercase tracking-[0.18em] text-xs rounded hover:scale-[1.02] transition-transform"
                >
                  Gửi yêu cầu ngay
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
