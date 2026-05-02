import { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Layout from "./components/Layout";

// Lazy load pages
const HomePage    = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const GalleryPage  = lazy(() => import("./pages/GalleryPage"));
const ContactPage  = lazy(() => import("./pages/ContactPage"));

// Parent wrapper variants to propagate animations
const pageVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
};

// Impressive 3D Spatial Glide transition (Ultra Premium)
const contentVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.96,
    rotateX: -5,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1.2, // Long, elegant settling time
      ease: [0.16, 1, 0.3, 1], // Expo out (very smooth deceleration)
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.96,
    rotateX: 5,
    transition: {
      duration: 0.5,
      ease: [0.32, 0, 0.67, 0], // Smooth acceleration
    },
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function AppShell() {
  const location = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative w-full"
        >
          {/* Page Content */}
          <motion.div variants={contentVariants} style={{ perspective: "1200px" }}>
            <Suspense fallback={<div className="h-screen w-full bg-[#f8fafc]" />}>
              <Routes location={location}>
                <Route path="/"         element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/gallery"  element={<GalleryPage />} />
                <Route path="/contact"  element={<ContactPage />} />
                <Route path="*"         element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window === "undefined") return true;
    return !window.sessionStorage.getItem("dar-alm3mar-preloader-seen");
  });

  const handlePreloaderComplete = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("dar-alm3mar-preloader-seen", "1");
    }
    setLoading(false);
  };

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="min-h-screen"
        >
          <AppShell />
        </motion.div>
      )}
    </BrowserRouter>
  );
}
