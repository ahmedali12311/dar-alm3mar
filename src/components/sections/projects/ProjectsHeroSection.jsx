import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { containerClass } from "../../../lib/ui";
import LuxuryVillaColorSvg from "./LuxuryVillaColorSvg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const drawLine = (delay = 0) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ProjectsHeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 16,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-[100vh] min-h-[700px] flex-col overflow-hidden bg-[#f8fafc]"
    >
      {/* ── Subtle dot grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(2, 132, 199,0.18) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Corner accents ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Top-left */}
        <div className="absolute top-32 left-8 w-20 h-20 border-l-2 border-t-2 border-[#0284c7]/30" />
        {/* Top-right */}
        <div className="absolute top-32 right-8 w-20 h-20 border-r-2 border-t-2 border-[#0284c7]/30" />
        {/* Bottom-left */}
        <div className="absolute bottom-24 left-8 w-20 h-20 border-l-2 border-b-2 border-[#0284c7]/15" />
        {/* Bottom-right */}
        <div className="absolute bottom-24 right-8 w-20 h-20 border-r-2 border-b-2 border-[#0284c7]/15" />
      </div>

      {/* ── Center content wrapper ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-32">

        {/* ── Eyebrow ── */}
        <motion.div {...fadeUp(0.1)} className="mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-[#0284c7]/50" />
          <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-[#0284c7]">
            Dar Al-Me'mar · Portfolio
          </span>
          <span className="h-px w-10 bg-[#0284c7]/50" />
        </motion.div>

        {/* ── Title text ── */}
        <motion.div
          {...fadeUp(0.2)}
          className="select-none text-center mb-8"
        >
          <span
            className="block font-black leading-none"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              color: "rgba(16, 24, 40, 0.92)",
              letterSpacing: "-0.02em",
            }}
          >
            أعمالنا
          </span>
          <span
            aria-hidden="true"
            className="block font-black leading-none text-[#0284c7]"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.8rem)",
              letterSpacing: "0.2em",
              marginTop: "0.5em",
            }}
          >
            دار المعمار
          </span>
        </motion.div>

        {/* ── DRAWING WRAPPER ── */}
        <div className="relative flex items-center justify-center w-full">

          {/* Animated Luxury Villa Watercolor Sketch */}
          <motion.div
            style={{
              x: mouse.x,
              y: mouse.y,
            }}
            className="relative z-30 w-[95vw] max-w-[860px]"
            animate={{ x: mouse.x, y: mouse.y }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            <LuxuryVillaColorSvg />
          </motion.div>
        </div>

        {/* ── Scroll hint ── */}

      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 border-t border-slate-100">
        <div className={`${containerClass} grid grid-cols-3 divide-x divide-x-reverse divide-slate-100`}>
          {[{ n: "+40", l: "مشروع منجز" }, { n: "12+", l: "سنة خبرة" }, { n: "100%", l: "رضا العملاء" }].map((s, i) => (
            <motion.div
              key={s.l}
              className="py-5 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
            >
              <div className="text-xl font-black text-[#1e2832] sm:text-2xl">{s.n}</div>
              <div className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
