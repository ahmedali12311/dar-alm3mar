import { workScopes } from "../../../site-data";
import { containerClass } from "../../../lib/ui";

const icons = ["◈", "◎", "⬡", "◉", "◆", "⊕"];

export default function ProjectsScopesSection() {
  return (
    <section className="relative bg-[#f7f4ef] py-24 sm:py-32 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0284c7]/20 to-transparent" />

      {/* Large background text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[20vw] font-black uppercase leading-none text-[#0284c7]/[0.03]"
      >
        SCOPE
      </div>

      <div className={`${containerClass} relative z-10`}>
        {/* Header */}
        <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#0284c7]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0284c7]">
                نطاق الخدمات
              </span>
            </div>
            <h2 className="font-['Cairo'] text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              ما الذي نقدمه لك؟
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-slate-400 lg:text-right">
            إلى جانب المشاريع المنشورة، تعمل الشركة ضمن نطاق واسع من الحلول الهندسية والعقارية.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-px bg-slate-200/60 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
          {workScopes.map((item, i) => (
            <article
              key={item.title}
              className="group relative flex flex-col gap-5 bg-white p-8 transition-colors duration-300 hover:bg-[#faf6f0]"
            >
              {/* Icon */}
              <div className="flex items-center justify-end mb-2">
                <span className="text-2xl text-[#0284c7]/40 group-hover:text-[#0284c7]/70 transition-colors duration-300">
                  {icons[i % icons.length]}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-slate-100 group-hover:bg-[#0284c7]/15 transition-colors duration-300" />

              {/* Content */}
              <div>
                <h3 className="font-['Cairo'] text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0284c7] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-slate-400">{item.text}</p>
              </div>

              {/* Hover arrow */}
              <div className="mt-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#0284c7]">اعرف أكثر</span>
                <span className="text-[#0284c7]">←</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
