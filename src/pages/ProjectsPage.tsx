import { mockProjects } from '../data/mockData';
import { MapPin, CheckCircle, Clock } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dự Án Tiêu Biểu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sự tin tưởng của các tập đoàn lớn là minh chứng rõ nhất cho năng lực thi công và chất lượng sản phẩm của Duy Gia Phát.
          </p>
          <div className="h-1.5 w-20 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition">
                  {project.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin size={18} className="text-amber-500" />
                  <span className="text-sm">{project.location}</span>
                </div>

                {/* Category */}
                <div className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {project.category}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Status */}
                <div className="flex items-center gap-2 text-sm">
                  {project.status === 'Hoàn thành' ? (
                    <>
                      <CheckCircle size={18} className="text-green-500" />
                      <span className="text-green-700 font-semibold">{project.status}</span>
                    </>
                  ) : (
                    <>
                      <Clock size={18} className="text-amber-500" />
                      <span className="text-amber-700 font-semibold">{project.status}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Dự án hoàn thành', value: '156+' },
            { label: 'Khách hàng tin tưởng', value: '45+' },
            { label: 'Năm kinh nghiệm', value: '15+' },
            { label: 'Công nhân kỹ thuật', value: '200+' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-lg p-6 text-center border border-gray-200">
              <p className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
