import { useEffect, useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { containerClass } from "../lib/ui";
import GalleryHeroSection from "../components/sections/gallery/GalleryHeroSection";
import useCompactViewport from "../hooks/useCompactViewport";

const rawImages = [
  { id: "1486406146926-c627a92ad1ab", title: "ناطحة سحاب تجارية" },
  { id: "1497366216548-37526070297c", title: "مساحات مكتبية ذكية" },
  { id: "1487958449943-2429e8be8625", title: "تصميم معماري معاصر" }, // New for #3
  { id: "1497366754035-f200968a6e72", title: "قاعة اجتماعات كبرى" },
  { id: "1511818966892-d7d671e672a2", title: "واجهة مبنى تبسيطي" },
  { id: "1518005020411-38b81210a7aa", title: "تفاصيل هندسية حديثة" }, // New for #6
  { id: "1503387762-592dee58c460", title: "زوايا معمارية فنية" },
  { id: "1492133969098-09ba49699f47", title: "تصميم داخلي فاخر" },
  { id: "1504307651254-35680f3344d7", title: "إشراف هندسي وتنفيذ" }, // New for #9
  { id: "1449156001437-3a16d1d8e900", title: "فيلا مودرن متكاملة" }, // New for #10
  { id: "1554232456-8727aae3cfa9", title: "تغطية خارجية للمباني" }, // New for #11
  { id: "1545558014-8692077e9b5c", title: "إبداع معماري بنغازي" },
];

const galleryImages = Array.from({ length: 48 }).map((_, i) => {
  const base = rawImages[i % rawImages.length];
  const layouts = [
    "md:col-span-2 md:row-span-2", "md:col-span-1 md:row-span-1",
    "md:col-span-1 md:row-span-2", "md:col-span-1 md:row-span-1",
    "md:col-span-2 md:row-span-1", "md:col-span-1 md:row-span-1",
  ];
  return {
    thumbSrc: `https://images.unsplash.com/photo-${base.id}?q=76&w=720&auto=format&fit=crop`,
    fullSrc: `https://images.unsplash.com/photo-${base.id}?q=82&w=1600&auto=format&fit=crop`,
    title: base.title,
    id: i,
    span: layouts[i % layouts.length]
  };
});

const IMAGES_PER_PAGE = 12;

// Safe Image Component with fallback
function SafeImage({ src, alt, className, sizes, fetchPriority = "auto" }) {
  const [error, setError] = useState(false);
  const fallback = "/images/project-villa.jpg"; // Reliable local fallback

  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      onError={() => setError(true)}
      loading="lazy"
      decoding="async"
      fetchPriority={fetchPriority}
      sizes={sizes}
      draggable="false"
      className={className}
    />
  );
}

export default function GalleryPage() {
  const isCompactViewport = useCompactViewport(900);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);

  const currentImages = useMemo(() => {
    const start = (currentPage - 1) * IMAGES_PER_PAGE;
    return galleryImages.slice(start, start + IMAGES_PER_PAGE);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNext = useCallback(() => setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1)), []);
  const handlePrev = useCallback(() => setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1)), []);
  const openLightbox = useCallback((index) => setSelectedIndex(index), []);

  const handleKeyDown = useCallback((e) => {
    if (selectedIndex === null) return;
    if (e.key === "Escape") setSelectedIndex(null);
    if (e.key === "ArrowRight") handlePrev();
    if (e.key === "ArrowLeft") handleNext();
  }, [selectedIndex, handleNext, handlePrev]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (selectedIndex !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [handleKeyDown, selectedIndex]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
    setTouchStart(null);
    setTouchEnd(null);
  };


  return (
    <main className="grid w-full gap-0 py-0">
      <GalleryHeroSection />

      <div className="relative bg-[#f1f5f9] pt-10 pb-8">
        <div className={containerClass}>

          {/* Premium Grid Gallery */}
          <div className="grid grid-flow-dense grid-cols-2 auto-rows-[10.5rem] gap-3 sm:auto-rows-[13.75rem] sm:gap-5 md:grid-cols-4 md:auto-rows-[220px]">
            {currentImages.map((img, i) => (
              <motion.button
                type="button"
                layout
                key={img.id}
                initial={isCompactViewport ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: isCompactViewport ? 0.22 : 0.6, delay: isCompactViewport ? 0 : (i % 6) * 0.1 }}
                onClick={() => openLightbox(img.id)}
                aria-label={`فتح صورة: ${img.title}`}
                className={`content-visibility-auto group relative w-full appearance-none overflow-hidden rounded-[1.5rem] border-0 bg-white p-0 text-right touch-manipulation transition-all duration-700 hover:shadow-[0_20px_50px_rgba(2,132,199,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7] ${img.span}`}
              >
                <SafeImage
                  src={img.thumbSrc}
                  alt={img.title}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="pointer-events-none absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 opacity-80 backdrop-blur-md transition-opacity duration-500 sm:right-6 sm:top-6 sm:opacity-0 sm:group-hover:opacity-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M15 3h6v6M10 14L21 3M9 21H3v-6M20 10l-11 11" /></svg>
                </div>
              </motion.button>
            ))}
          </div>

        </div>

        {/* ── Pagination ── */}
        <div className="mt-12 pb-8 sm:mt-16">
          <div className={containerClass}>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 transition-all hover:text-[#0284c7] disabled:opacity-20"
              >
                <span>السابق</span>
                <span className="h-px w-6 bg-slate-300 transition-all group-hover:w-10 group-hover:bg-[#0284c7]" />
              </button>

              <div className="flex items-center gap-2 sm:gap-4">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`relative h-9 w-9 text-[11px] font-black transition-all sm:h-10 sm:w-10 sm:text-[12px] ${currentPage === i + 1 ? "text-[#0284c7]" : "text-slate-300 hover:text-slate-600"
                      }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                    {currentPage === i + 1 && (
                      <motion.span layoutId="page-dot" className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[#0284c7]" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 transition-all hover:text-[#0284c7] disabled:opacity-20"
              >
                <span className="h-px w-6 bg-slate-300 transition-all group-hover:w-10 group-hover:bg-[#0284c7]" />
                <span>التالي</span>
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Full-Screen Lightbox */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505]"
            >
              <div className="absolute inset-0 z-0" onClick={() => setSelectedIndex(null)} />

              <div className="pointer-events-none absolute left-0 right-0 top-0 z-[100002] flex items-center justify-between p-4 sm:p-8">
                <span className="pointer-events-auto font-mono text-[9px] uppercase tracking-[0.35em] text-white/40 sm:text-[10px] sm:tracking-[0.5em]">
                  {String(selectedIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
                </span>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white backdrop-blur-xl transition-all hover:bg-white/15 hover:rotate-90 sm:h-14 sm:w-14"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="relative z-[100001] flex h-full w-full items-center justify-center px-4 pb-24 pt-20 sm:px-6 sm:pb-0 sm:pt-0">
                <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="absolute right-8 top-1/2 -translate-y-1/2 z-[100005] hidden h-20 w-20 items-center justify-center rounded-full text-white/20 transition-all hover:text-white hover:bg-white/5 sm:flex"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
                <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="absolute left-8 top-1/2 -translate-y-1/2 z-[100005] hidden h-20 w-20 items-center justify-center rounded-full text-white/20 transition-all hover:text-white hover:bg-white/5 sm:flex"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polyline points="15 18 9 12 15 6"></polyline></svg></button>

                <div className="relative flex h-full w-full items-center justify-center" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedIndex}
                      initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col items-center"
                    >
                      <SafeImage
                        src={
                          isCompactViewport
                            ? galleryImages[selectedIndex].thumbSrc
                            : galleryImages[selectedIndex].fullSrc
                        }
                        alt={galleryImages[selectedIndex].title}
                        fetchPriority="high"
                        sizes="100vw"
                        className="max-h-[78vh] w-auto max-w-full object-contain sm:max-h-[85vh]"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-5 left-0 right-0 z-[100002] flex items-center justify-center gap-3 sm:bottom-12">
                <div className="pointer-events-auto flex items-center gap-3 rounded-full bg-white/5 p-2 backdrop-blur-md sm:hidden">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8 text-white/80"
                    aria-label="الصورة السابقة"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8 text-white/80"
                    aria-label="الصورة التالية"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                </div>
                <div className="pointer-events-auto hidden max-w-[80vw] items-center gap-1.5 overflow-x-auto rounded-full bg-white/5 p-2 backdrop-blur-md sm:flex no-scrollbar">
                  {galleryImages.map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                      className={`h-1 shrink-0 transition-all duration-500 rounded-full ${selectedIndex === i ? "w-8 bg-gradient-to-r from-[#0284c7] to-[#0ea5e9]" : "w-1 bg-white/10"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </main>
  );
}
