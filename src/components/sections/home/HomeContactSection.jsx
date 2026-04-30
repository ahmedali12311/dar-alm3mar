import { motion } from "framer-motion";
import { containerClass, pageSectionClass } from "../../../lib/ui"; 

export default function HomeContactSection() {
  return (
    <section 
      className={`${pageSectionClass} relative overflow-hidden bg-white py-32 md:py-48 lg:py-56`}
      style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }}
    >
      <div className={`${containerClass} relative z-10 flex flex-col items-center text-center`}>
        
        {/* حاوية الصور المركزية */}
        <div className="relative mb-12 flex h-[400px] w-full max-w-[550px] items-center justify-center">
          
       

          {/* صورة الخوذة - مكبرة جداً وحركتها عائمة عمودية */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: [-10, -30, -10] 
            }}
            transition={{ 
              delay: 0.2,
              duration: 1,
              y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
            }}
            className="absolute z-10 w-[100%] md:w-[120%]" 
          >
            <img 
              src="public/images/helmet.png" 
              alt="Safety Helmet" 
              className="h-auto w-full object-contain drop-shadow-2xl" 
            />
          </motion.div>
        </div>

        {/* الخط الذهبي */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6 h-px bg-[#915025]"
        />

        {/* العنوان الرئيسي */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Cairo'] text-5xl font-black leading-[1.1] tracking-tight text-[#050a15] md:text-7xl lg:text-8xl max-w-5xl"
        >
          هل أنت جاهز لتبدأ مشروعك القادم؟
        </motion.h2>

        {/* النص الوصفي */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 max-w-2xl font-['Cairo'] text-base md:text-lg text-slate-500 font-normal leading-relaxed tracking-wide"
        >
          نحن هنا لتحويل رؤيتك إلى واقع هندسي ملموس. واجهة موثوقة وشريك استراتيجي للمشاريع الحكومية والخاصة الرائدة في ليبيا.
        </motion.p>

        {/* الزر */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-16"
        >
          <a 
            href="/contact" 
            className="group relative flex items-center gap-5 border border-[#050a15] bg-[#050a15] px-12 py-6 text-white transition-all duration-300 ease-in-out hover:bg-[#915025] hover:border-[#915025]"
          >
            <span className="font-['Cairo'] text-base font-bold tracking-[0.05em] uppercase">
              طلب استشارة هندسية
            </span>
            <svg 
              className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-[-8px]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}