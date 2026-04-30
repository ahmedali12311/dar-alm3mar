import { processSteps } from "../../../site-data";
import { containerClass } from "../../../lib/ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function ProjectsProcessSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Color palette for the gradient progression
  const stepColors = [
    { from: "#38bdf8", to: "#0284c7" }, 
    { from: "#0ea5e9", to: "#0284c7" }, 
    { from: "#0284c7", to: "#0369a1" }, 
    { from: "#0f172a", to: "#020617" }, 
  ];

  return (
    <section ref={containerRef} className="relative bg-white py-32 overflow-hidden border-t border-slate-100">
      {/* Dynamic Background Architectural Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div 
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
            className="absolute top-0 bottom-0 w-px bg-slate-900 origin-top"
            style={{ left: `${(i + 1) * 16}%` }}
          />
        ))}
      </div>

      <div className={`${containerClass} relative z-10`}>
        {/* Header with Reveal Animation */}
        <div className="mb-32 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm"
          >
            <motion.span 
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" 
            />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0284c7]">
              منهجية العمل الاحترافية
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Cairo'] text-4xl font-black leading-tight text-slate-900 md:text-6xl mb-6"
          >
            مسارنا نحو <span className="text-[#0284c7]">الكمال</span> المعماري
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-transparent via-[#0284c7] to-transparent mx-auto rounded-full" 
          />
        </div>

        {/* Dynamic Staggered Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 items-start">
          {processSteps.map((step, i) => {
            const colors = stepColors[i % stepColors.length];
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
                className={`group relative ${isEven ? "lg:mt-0" : "lg:mt-24"}`}
              >
                {/* Continuous Floating Animation */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className="relative z-10 h-full p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(2, 132, 199,0.15)] group-hover:-translate-y-6 flex flex-col items-center text-center"
                >
                  
                  {/* Interactive Step Number */}
                  <motion.div className="mb-10 relative">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 15 }}
                      className="h-28 w-28 rounded-[2.5rem] flex items-center justify-center shadow-xl cursor-default"
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
                        boxShadow: `0 15px 30px ${colors.to}33`
                      }}
                    >
                      <span className="font-mono text-5xl font-black text-white drop-shadow-md">
                        {String(step.number).padStart(2, "0")}
                      </span>
                    </motion.div>
                    {/* Pulsing glow beneath */}
                    <motion.div 
                      animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -inset-2 rounded-[2.5rem] bg-[#0284c7]/5 blur-lg -z-10" 
                    />
                  </motion.div>

                  <h3 className="font-['Cairo'] text-2xl font-bold text-slate-900 mb-5 group-hover:text-[#0284c7] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm leading-8 text-slate-500/90 mb-10">
                    {step.text}
                  </p>

                  {/* Animated Progress indicator */}
                  <div className="mt-auto flex gap-1.5">
                    {Array.from({ length: 4 }).map((_, dotIdx) => (
                      <motion.div 
                        key={dotIdx}
                        initial={{ opacity: 0.3 }}
                        whileInView={{ opacity: dotIdx <= i ? 1 : 0.3 }}
                        className={`h-1.5 rounded-full`}
                        style={{ 
                          width: dotIdx <= i ? 20 : 6,
                          backgroundColor: dotIdx <= i ? colors.to : "#f1f1f1" 
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mt-40 relative group"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a] rounded-[3rem] overflow-hidden border border-white/5 shadow-[0_20px_80px_rgba(2,132,199,0.15)]">
              
              {/* Architectural Grid Background */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Glowing Accent Orbs */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0284c7] rounded-full mix-blend-screen filter blur-[100px] opacity-20 transition-opacity duration-700 group-hover:opacity-40" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0ea5e9] rounded-full mix-blend-screen filter blur-[100px] opacity-10 transition-opacity duration-700 group-hover:opacity-30" />

              {/* Animated Light Sweep */}
              <motion.div
                initial={{ left: "-100%" }}
                whileInView={{ left: "200%" }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
              />
           </div>

           <div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-right">
              <div className="max-w-2xl relative">
                <div className="absolute -right-6 top-0 w-1.5 h-20 bg-gradient-to-b from-[#0ea5e9] to-transparent rounded-full hidden md:block" />
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#0284c7]/20 border border-[#0284c7]/30 text-[#0ea5e9] text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                  ابدأ مشروعك الآن
                </span>
                <motion.h4 
                  className="font-['Cairo'] text-4xl font-black text-white mb-6 md:text-5xl leading-tight"
                >
                  مستعد لنقل فكرتك <br/>
                  إلى <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#0284c7] to-[#0ea5e9]">المرحلة التالية؟</span>
                </motion.h4>
                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  نحن نؤمن بأن كل مشروع هو فرصة لخلق شيء استثنائي. دعنا نحوّل رؤيتك إلى واقع ملموس يتجاوز التوقعات.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center gap-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0284c7]/50 backdrop-blur-xl px-10 py-6 rounded-2xl text-white font-bold text-lg shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all overflow-hidden"
                >
                  <span className="font-['Cairo'] relative z-10 tracking-wide">طلب استشارة مجانية</span>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] shadow-[0_0_20px_rgba(2,132,199,0.5)] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                  </div>
                </Link>
              </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
