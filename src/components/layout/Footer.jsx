import { NavLink } from "react-router-dom";
import { footerCopy, navLinks } from "../../site-data";
import { containerClass } from "../../lib/ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="content-visibility-auto relative overflow-hidden bg-[#ffffff] pt-20 pb-10">
      {/* خط علوي ذهبي */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-px bg-gradient-to-r from-transparent via-[#0284c7]/30 to-transparent" />
      {/* شبكة هندسية خفيفة */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(90deg, #0284c7 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className={`${containerClass} relative z-10`}>
        <div className="grid gap-14 lg:grid-cols-[2fr_1fr_1.2fr]">

          {/* Brand */}
          <div className="flex flex-col items-start gap-8 border-r border-slate-100 pr-8 md:pr-14">
            <NavLink className="group flex flex-col gap-5" to="/">
              <div className="h-14 flex items-center overflow-hidden">
                <img
                  src="/images/logo.jpg"
                  alt="Logo"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-auto object-contain object-left transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1.5">
                <h2 className="font-['Cairo'] text-2xl font-black tracking-tight text-slate-900 leading-none">
                  دار المعمار
                </h2>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-[#0284c7] transition-all duration-500 group-hover:w-10" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#0284c7]/70">
                    Benghazi Office
                  </span>
                </div>
              </div>
            </NavLink>
            <p className="max-w-xs text-sm leading-[1.9] text-slate-400 font-light italic">
              {footerCopy?.["/"] || "نصمم استثمارات عقارية مستدامة ونشرف على أدق تفاصيل التنفيذ لنضمن لك جودة تليق بتطلعاتك."}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-7">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 border-b border-slate-100 pb-3">
              الصفحات
            </h3>
            <nav className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-300 flex items-center gap-2.5 group ${
                      isActive ? "text-[#0284c7]" : "text-slate-500 hover:text-slate-900"
                    }`
                  }
                >
                  <span className="h-px w-0 bg-[#0284c7] transition-all duration-300 group-hover:w-3 flex-shrink-0" />
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-7">
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 border-b border-slate-100 pb-3">
              تواصل
            </h3>
            <div className="space-y-6">
              <a href="tel:+218913768844" dir="ltr" className="group flex flex-col gap-1">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0284c7]/50 group-hover:text-[#0284c7] transition-colors">
                  Phone
                </span>
                <span className="text-base font-light text-slate-600 group-hover:text-slate-900 transition-colors tracking-wide">
                  +218 91 376 8844
                </span>
              </a>
              <a href="mailto:dar.alma3mar@gmail.com" className="group flex flex-col gap-1">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0284c7]/50 group-hover:text-[#0284c7] transition-colors">
                  Email
                </span>
                <span className="text-base font-light text-slate-600 group-hover:text-slate-900 transition-colors break-all">
                  dar.alma3mar@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-slate-100 flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300">
            © {year} Dar Al-Me'mar · Architecture & Design
          </div>
          <div className="flex items-center gap-5">
            <span className="h-px w-8 bg-slate-200" />
            <a href="#" className="text-[9px] font-bold text-slate-300 uppercase tracking-widest hover:text-[#0284c7] transition-colors">
              Instagram
            </a>
            <a href="#" className="text-[9px] font-bold text-slate-300 uppercase tracking-widest hover:text-[#0284c7] transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Geometric Accent */}
      <div className="absolute left-[-2%] bottom-[-6%] opacity-[0.025] pointer-events-none select-none">
        <span className="text-[22vw] font-black leading-none text-[#0284c7]">DAR</span>
      </div>
    </footer>
  );
}
