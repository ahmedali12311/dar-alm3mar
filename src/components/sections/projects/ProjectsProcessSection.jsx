import { processSteps } from "../../../site-data";
import { containerClass } from "../../../lib/ui";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectsProcessSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Color palette for the gradient progression
  const stepColors = [
    { from: "#D4A373", to: "#915025" }, 
    { from: "#BC6C25", to: "#915025" }, 
    { from: "#915025", to: "#603813" }, 
    { from: "#102933", to: "#08161d" }, 
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
              className="h-1.5 w-1.5 rounded-full bg-[#915025]" 
            />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#915025]">
              منهجية العمل الاحترافية
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Cairo'] text-4xl font-black leading-tight text-slate-900 md:text-6xl mb-6"
          >
            مسارنا نحو <span className="text-[#915025]">الكمال</span> المعماري
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-transparent via-[#915025] to-transparent mx-auto rounded-full" 
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
                  className="relative z-10 h-full p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(145,80,37,0.15)] group-hover:-translate-y-6 flex flex-col items-center text-center"
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
                      className="absolute -inset-2 rounded-[2.5rem] bg-[#915025]/5 blur-lg -z-10" 
                    />
                  </motion.div>

                  <h3 className="font-['Cairo'] text-2xl font-bold text-slate-900 mb-5 group-hover:text-[#915025] transition-colors duration-300">
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-48 relative"
        >
           <div className="absolute inset-0 bg-[#102933] rounded-[4rem] shadow-2xl overflow-hidden">
              {/* Animated background patterns */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1/2 -right-1/2 w-full h-full border-[1px] border-white/5 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1/2 -left-1/2 w-full h-full border-[1px] border-white/5 rounded-full"
              />
           </div>

           <div className="relative z-10 p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-right">
              <div className="max-w-xl">
                <motion.h4 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="font-['Cairo'] text-3xl font-black text-white mb-6 md:text-5xl"
                >
                  مستعد لنقل فكرتك <br/>إلى المرحلة التالية؟
                </motion.h4>
                <p className="text-slate-400 text-lg leading-relaxed">نحن نؤمن بأن كل مشروع هو فرصة لخلق شيء استثنائي.</p>
              </div>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-8 bg-gradient-to-r from-[#915025] to-[#bf6a33] px-14 py-7 rounded-3xl text-white font-black text-xl shadow-[0_20px_50px_rgba(145,80,37,0.3)] transition-all overflow-hidden"
              >
                {/* Shine effect on hover */}
                <motion.div 
                  initial={{ left: "-100%" }}
                  whileHover={{ left: "100%" }}
                  transition={{ duration: 0.8 }}
                  className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <span className="font-['Cairo'] relative z-10">طلب استشارة مجانية</span>
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md transition-all group-hover:bg-white group-hover:text-[#915025]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                </div>
              </motion.a>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
