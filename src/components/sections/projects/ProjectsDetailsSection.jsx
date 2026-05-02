import { Link } from "react-router-dom";
import { projectDetails } from "../../../site-data";
import { containerClass } from "../../../lib/ui";

export default function ProjectsDetailsSection() {
  return (
    <section className="content-visibility-auto relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(circle, #0284c7 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className={`${containerClass} relative z-10`}>
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#0284c7]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0284c7]">
                مشاريع موثقة
              </span>
            </div>
            <h2 className="font-['Cairo'] text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              نماذج من أعمالنا
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-400 md:text-right">
            أعمال تعكس دقة التنفيذ وعمق الخبرة الهندسية التي بنتها دار المعمار على مدار سنوات.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectDetails.map((project, idx) => (
            <article
              key={project.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_4px_32px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)]"
            >
              {/* Image */}
              <div className="relative h-[260px] flex-shrink-0 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80" />
                {/* Date badge */}
                <div className="absolute bottom-5 right-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0ea5e9]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                      {project.date}
                    </span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">
                <div className="flex-1">
                  {/* Label */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-6 bg-slate-200" />
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0284c7]">
                      مشروع
                    </span>
                  </div>

                  <h3 className="font-['Cairo'] text-xl font-black text-slate-900 leading-snug mb-3 group-hover:text-[#0284c7] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 line-clamp-3">
                    {project.text}
                  </p>
                </div>

                {/* Facts grid */}
                <div className="mt-6 grid grid-cols-2 gap-2 pt-6 border-t border-slate-100">
                  {project.facts.slice(0, 4).map((fact) => (
                    <div key={fact.label} className="flex flex-col gap-1">
                      <span className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                        {fact.label}
                      </span>
                      <strong className="text-xs font-bold text-slate-800">
                        {fact.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA to Gallery */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/gallery"
            className="group flex items-center gap-4 rounded-full bg-slate-900 px-8 py-4 text-white transition-all duration-300 hover:bg-[#0284c7] hover:shadow-lg hover:shadow-[#0284c7]/20"
          >
            <span className="font-['Cairo'] text-sm font-bold tracking-wide">
              الاطلاع على معرض الصور
            </span>
            <span className="transition-transform duration-300 group-hover:-translate-x-2">
              ←
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
