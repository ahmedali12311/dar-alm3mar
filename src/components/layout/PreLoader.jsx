import { motion } from 'framer-motion';

export default function PreLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-[#050a15] px-5 sm:px-8"
      initial={{ scaleY: 1, transformOrigin: "bottom" }}
      animate={{ scaleY: 1, transformOrigin: "bottom" }}
      exit={{ 
        scaleY: 0,
        transformOrigin: "bottom",
        transition: { 
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.1
        } 
      }}
      style={{ willChange: "transform" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full max-w-[24rem] flex-col items-center text-center"
      >
        {/* You can place Dar Al M3mar Logo here */}
        <div className="text-white text-3xl font-['Cairo'] font-black tracking-widest uppercase">
          دار المعمار
        </div>

        <div className="mt-16 flex w-full max-w-72 flex-col items-center gap-4 sm:mt-20 md:mt-24">
          <span className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.55em] text-[#0284c7] sm:text-sm sm:tracking-[0.8em]">
            Loading
          </span>
          <div className="relative h-[1px] w-full overflow-hidden bg-[#0284c7]/10">
            <motion.div 
              className="absolute h-full bg-[#0284c7] w-full"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                ease: "easeInOut" 
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
