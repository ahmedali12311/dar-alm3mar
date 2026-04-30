import { contactMethods } from "../../../site-data";
import { containerClass } from "../../../lib/ui";

const icons = {
  الهاتف: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.04 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
  ),
  "البريد الإلكتروني": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  ),
  فيسبوك: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  الموقع: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export default function ContactContentSection() {
  return (
    <section className="relative bg-white">

      <div className={`${containerClass} py-24 md:py-36`}>

        {/* ── Section header ── */}
        <div className="flex flex-col items-start text-right mb-20" dir="rtl">
          <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#0e7490] mb-4">
            طرق التواصل
          </span>
          <h2 className='text-5xl md:text-6xl font-black text-slate-950 leading-[0.85] tracking-tighter font-["Cairo"]'>
            ابدأ المحادثة
          </h2>
          <div className="mt-5 w-16 h-[2px] bg-[#0e7490]" />
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6" dir="rtl">
          {contactMethods.map((method, idx) => (
            <a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group relative bg-white border border-slate-100 overflow-hidden flex flex-col p-8 gap-8 transition-shadow duration-400 hover:shadow-[0_8px_40px_rgba(14,116,144,0.10)] hover:border-[#0e7490]/30"
              style={{ minHeight: "260px" }}
            >
              {/* Animated bottom border — grows on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0e7490] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-out" />


              {/* Icon — stays teal always, grows on hover */}
              <div className="relative z-10 w-10 h-10 text-[#0e7490] transition-transform duration-300 group-hover:scale-110">
                {icons[method.label]}
              </div>

              {/* Content — text stays DARK always */}
              <div className="relative z-10 flex-1 flex flex-col justify-end gap-3">
                <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-400">
                  {method.label}
                </p>
                <p
                  className="text-slate-900 font-bold text-lg leading-snug break-all transition-colors duration-300 group-hover:text-[#0e7490]"
                  dir={method.label === "الهاتف" || method.label === "البريد الإلكتروني" ? "ltr" : "rtl"}
                  style={{ textAlign: "right" }}
                >
                  {method.value}
                </p>
              </div>

              {/* Arrow — appears on hover */}
              <div className="relative z-10 flex justify-start">
                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 group-hover:border-[#0e7490] group-hover:bg-[#0e7490] group-hover:scale-105">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors duration-300 rotate-180">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Divider + bottom strip ── */}
        <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6" dir="rtl">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#0e7490] animate-pulse" />
            <div>
              <p className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-0.5">المقر الرئيسي</p>
              <p className="text-slate-800 font-bold font-['Cairo'] text-sm">بنغازي — شارع دبي</p>
            </div>
          </div>
          <p className="text-[11px] font-mono tracking-wider text-slate-300">
            دار المعمار للاستشارات والأعمال الهندسية
          </p>
        </div>

      </div>
    </section>
  );
}
