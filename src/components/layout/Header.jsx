import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../../site-data";
import useCompactViewport from "../../hooks/useCompactViewport";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isCompactViewport = useCompactViewport(900);

  const items = useMemo(() => navLinks, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isCompactViewport) {
      setMenuOpen(false);
    }
  }, [isCompactViewport]);

  const headerFrameClass = scrolled
    ? "mx-auto mt-5 w-[94%] max-w-[1440px] border border-slate-200 bg-white/95 py-0 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
    : location.pathname === "/" 
      ? "w-full bg-transparent py-5" 
      : "w-full border-b border-slate-100 bg-white/60 py-3";

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
      <div
        className={`mx-auto overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${headerFrameClass}`}
      >
        <div className="flex h-16 items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-6">
            <Link
              className="hidden h-10 items-center justify-center bg-[#0f172a] px-7 text-[12px] font-bold uppercase tracking-widest text-white transition-all hover:bg-[#0284c7] active:scale-95 md:inline-flex"
              to="/contact"
            >
              ابدأ مشروعك
            </Link>

            {isCompactViewport ? (
              <button
                className="flex h-10 w-10 flex-col items-center justify-center gap-2"
                type="button"
                aria-expanded={menuOpen}
                aria-controls="site-nav"
                aria-label="فتح قائمة التنقل"
                onClick={() => setMenuOpen((current) => !current)}
              >
                <span
                  className={`h-[1.5px] w-6 bg-slate-900 transition-all duration-500 ${
                    menuOpen ? "translate-y-2.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-6 bg-slate-900 transition-all duration-500 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-6 bg-slate-900 transition-all duration-500 ${
                    menuOpen ? "-translate-y-1 -rotate-45" : ""
                  }`}
                />
              </button>
            ) : null}
          </div>

          {!isCompactViewport ? (
            <nav className="flex items-center gap-4" dir="rtl">
              {items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `relative px-5 py-2 text-[13.5px] font-bold tracking-tight transition-all ${
                      isActive 
                        ? "text-[#0284c7]" 
                        : (location.pathname === "/" && !scrolled) 
                          ? "text-slate-800 hover:text-black" 
                          : "text-slate-500 hover:text-slate-900"
                    }`
                  }
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-[2px] origin-right bg-[#0284c7] transition-transform duration-500 ${
                      location.pathname === item.to ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </NavLink>
              ))}
            </nav>
          ) : null}

          <NavLink
            className="group inline-flex shrink-0 items-center"
            to="/"
            aria-label="العودة إلى الصفحة الرئيسية"
          >
            <span className="flex flex-col items-end border-r-2 border-slate-900 pr-4 text-right transition-all duration-500 group-hover:border-[#0284c7]">
              <strong className="font-['Cairo'] text-xl font-black leading-none tracking-tight text-slate-900 lg:text-2xl">
                دار المعمار<span className="text-[#0284c7]">.</span>
              </strong>
              <small className="mt-1.5 block max-w-[132px] text-[8px] leading-tight tracking-[0.22em] text-slate-400 uppercase sm:max-w-none sm:text-[9px] sm:tracking-[0.35em]">
                Engineering Bureau
              </small>
            </span>
          </NavLink>
        </div>
      </div>

      {isCompactViewport ? (
        <div
          className={`absolute inset-x-0 top-full mx-auto mt-3 w-[94%] overflow-hidden border border-slate-100 bg-white/98 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col py-6" id="site-nav">
            {items.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className="border-b border-slate-50 px-10 py-5 text-center text-[14px] font-black tracking-[0.15em] text-slate-700 transition-colors last:border-none hover:bg-slate-50 hover:text-[#0284c7]"
              >
                {item.label}
              </NavLink>
            ))}
            <div className="p-6">
              <Link
                className="flex h-14 items-center justify-center bg-[#0f172a] text-[13px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#0284c7]"
                to="/contact"
              >
                ابدأ مشروعك الآن
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
