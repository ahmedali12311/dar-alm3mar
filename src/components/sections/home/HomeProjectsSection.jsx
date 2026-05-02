import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { featuredProjects } from "../../../site-data";
import { containerClass, pageSectionClass } from "../../../lib/ui";
import useCompactViewport from "../../../hooks/useCompactViewport";

export default function HomeProjectsSection() {
  const projects = featuredProjects.slice(0, 3);
  const reduceMotion = useReducedMotion();
  const isCompactViewport = useCompactViewport(900);
  const shouldAnimateShapes = !reduceMotion && !isCompactViewport;

  return (
    <section className={`${pageSectionClass} content-visibility-auto bg-white overflow-hidden`}>
      <div className={containerClass}>
        {/* Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-[10px] font-black uppercase tracking-[0.5em] text-[#0284c7]"
          >
            التميز المعماري
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-['Cairo'] text-5xl font-black text-slate-900 md:text-6xl"
          >
            مشاريع <span className="text-[#0284c7]">مختارة</span>
          </motion.h2>
        </div>

        {/* 3 Projects: Morphing Shape Layout */}
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`group relative ${
                index === 0 ? "lg:mt-0" : index === 1 ? "lg:mt-24" : "lg:mt-48"
              }`}
            >
              <span className="absolute -right-6 -top-12 font-['Cairo'] text-9xl font-black text-slate-50 opacity-10">
                0{index + 1}
              </span>

              {/* Morphing Image Container */}
              <motion.div 
                className="relative aspect-[3/4] overflow-hidden bg-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-700 group-hover:shadow-[0_40px_80px_-15px_rgba(2, 132, 199,0.15)]"
                animate={
                  shouldAnimateShapes
                    ? {
                        borderRadius: [
                          "100px 24px 100px 24px",
                          "40px 100px 40px 100px",
                          "100px 24px 100px 24px",
                        ],
                      }
                    : {
                        borderRadius: "100px 24px 100px 24px",
                      }
                }
                transition={
                  shouldAnimateShapes
                    ? {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 1,
                      }
                    : { duration: 0 }
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-[#0f172a]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="absolute bottom-6 right-6">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-[10px] font-bold text-slate-900 shadow-xl">
                    {project.tag}
                  </span>
                </div>
              </motion.div>

              {/* Content */}
              <div className="mt-10 text-right">
                <h3 className="font-['Cairo'] text-2xl font-black text-slate-800 transition-colors group-hover:text-[#0284c7]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {project.text}
                </p>
                
                <div className="mt-6 flex flex-wrap justify-start gap-3">
                  {project.meta.slice(0, 2).map((m) => (
                    <span key={m} className="text-[11px] font-semibold text-slate-400">
                      • {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-48 flex justify-center">
          <Link 
            to="/projects"
            className="group relative overflow-hidden rounded-full border-2 border-slate-900 px-12 py-5 text-sm font-black text-slate-900 transition-all hover:text-white"
          >
            <span className="relative z-10">تصفح معرض الأعمال بالكامل</span>
            <div className="absolute inset-0 -z-0 translate-y-full bg-slate-900 transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
