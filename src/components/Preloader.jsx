import { useEffect } from "react";
import { motion } from "framer-motion";
import LogoSvg from "./sections/gallery/LogoSvg";

export default function Preloader({ onComplete }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const duration = reduceMotion ? 700 : 1650;

    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="h-[220px] w-[220px] sm:h-[280px] sm:w-[280px]">
        <LogoSvg />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.72, duration: 0.45 }}
        className="mt-8 flex items-center gap-4"
      >
        <span className="h-px w-8 bg-[#111111]" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#111111]">
          دار المعمار
        </span>
        <span className="h-px w-8 bg-[#111111]" />
      </motion.div>
    </motion.div>
  );
}
