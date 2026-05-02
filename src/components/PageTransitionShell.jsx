import { motion, AnimatePresence } from "framer-motion";

const contentVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // Extra smooth, premium deceleration
      delay: 0.35, 
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.96,
    transition: {
      duration: 0.4,
      ease: [0.32, 0, 0.67, 0]
    }
  }
};

const primaryWipe = {
  initial: { scaleY: 1, transformOrigin: "top" },
  animate: { 
    scaleY: 0, 
    transformOrigin: "top",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0 } 
  },
  exit: { 
    scaleY: 1, 
    transformOrigin: "bottom",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 } 
  }
};

const secondaryWipe = {
  initial: { scaleY: 1, transformOrigin: "top" },
  animate: { 
    scaleY: 0, 
    transformOrigin: "top",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.15 } 
  },
  exit: { 
    scaleY: 1, 
    transformOrigin: "bottom",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0 } 
  }
};

export default function PageTransitionShell({ children, transitionKey }) {
  return (
    <div className="relative min-h-screen w-full bg-[#f4f5ec]">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={transitionKey}
          className="relative w-full min-h-screen"
        >
          {/* Transition Overlay Wipes */}
          <motion.div
            className="fixed inset-0 z-[100] bg-[#5a5c3b] pointer-events-none"
            variants={primaryWipe}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          <motion.div
            className="fixed inset-0 z-[99] bg-[#c8d44b] pointer-events-none"
            variants={secondaryWipe}
            initial="initial"
            animate="animate"
            exit="exit"
          />

          {/* Page Content */}
          <motion.div
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-screen"
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

