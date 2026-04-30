import { useState } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import Layout from "./components/Layout";
import PageTransitionShell from "./components/PageTransitionShell";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

function AppShell() {
  const location = useLocation();

  return (
    <Layout>
      <PageTransitionShell
        location={location}
        transitionKey={`${location.pathname}${location.search}${location.hash}`}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransitionShell>
    </Layout>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="min-h-screen"
        >
          <AppShell />
        </motion.div>
      )}
    </HashRouter>
  );
}
