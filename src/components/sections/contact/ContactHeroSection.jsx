import { useState } from "react";
import { containerClass } from "../../../lib/ui";
import useCompactViewport from "../../../hooks/useCompactViewport";

// Depth: offset copies shifted down-right to simulate isometric thickness
// The map stays flat/upright — depth is shown via 2D offsets
const DEPTH_LAYERS = [
  { x: 5, y: 6, brightness: 0.20 },
  { x: 3, y: 4, brightness: 0.26 },
  { x: 1.5, y: 2, brightness: 0.34 },
];

export default function ContactHeroSection() {
  const [isHovering, setIsHovering] = useState(false);
  const isCompactViewport = useCompactViewport(900);
  const mapSrc = "/images/libya-admin1.svg";
  const depthLayers = isCompactViewport ? DEPTH_LAYERS.slice(1, 2) : DEPTH_LAYERS;

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden border-b border-slate-100 bg-white pb-16 pt-32 sm:pt-36 md:py-0">
      <div className={`${containerClass} relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16`}>

        {/* 1. Hero Text Side */}
        <div className="relative z-20 w-full p-6 md:p-10 border-r-8 border-[#0284c7] text-right">
          <h1 className='text-6xl sm:text-7xl lg:text-[8.5rem] font-black uppercase leading-[0.8] text-slate-950 tracking-tighter font-["Cairo"]'>
            تواصل
          </h1>
          <p className='text-xl lg:text-2xl text-slate-400 font-bold leading-relaxed mt-10 md:mt-14 tracking-tight font-["Cairo"]'>
            دار المعمار للاستشارات والأعمال الهندسية في ليبيا.
          </p>
        </div>

        {/* 2. Map Side */}
        <div
          className="relative flex w-full items-center justify-center py-4 sm:py-8"
          onMouseEnter={() => !isCompactViewport && setIsHovering(true)}
          onMouseLeave={() => !isCompactViewport && setIsHovering(false)}
        >
          {/* Map wrapper — fixed size, position:relative for stacking */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "820px",
              aspectRatio: "1 / 0.75",
            }}
          >
            {/* ── DEPTH LAYERS: offset copies below/behind the main map ── */}
            {depthLayers.map(({ x, y, brightness }) => (
              <img
                key={`depth-${x}`}
                src={mapSrc}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  // shifted down and right → creates visible thickness edge
                  transform: `translate(${x}px, ${y}px)`,
                  filter: `contrast(2) sepia(100%) hue-rotate(150deg) saturate(2) brightness(${brightness})`,
                  opacity: 1,
                  pointerEvents: "none",
                }}
              />
            ))}

            {/* ── TOP FACE: main map, flat and upright ── */}
            <img
              src={mapSrc}
              alt="Libya Map"
              loading="lazy"
              decoding="async"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: isCompactViewport ? 0.78 : isHovering ? 0.85 : 0.7,
                filter: !isCompactViewport && isHovering
                  ? "contrast(1.1) sepia(50%) hue-rotate(150deg) saturate(4) brightness(1.0)"
                  : "contrast(1.2) sepia(50%) hue-rotate(150deg) saturate(5) brightness(0.8)",
                transition: "opacity 0.5s ease, filter 0.5s ease",
                pointerEvents: "none",
              }}
            />

            {/* Benghazi Hub Node
                 Geographic: 20.07°E, 32.1°N
                 Map left = (20.07-9.4)/(25.2-9.4) ≈ 67.5%
                 Map top  = (33.5-32.1)/(33.5-19.5) ≈ 10%
                 Adjusted for objectFit:contain padding in a 4:3 container */}
            <div
              className="absolute"
              style={{ top: "9%", left: "67%", zIndex: 50, transform: "translate(-50%, -50%)" }}
            >
              <div className="relative flex h-14 w-14 cursor-pointer items-center justify-center sm:h-16 sm:w-16">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0e7490]/25 opacity-75" />
                <span className="absolute inline-flex h-10 w-10 rounded-full bg-[#0e7490]/10 sm:h-12 sm:w-12" />
                <span
                  className="relative inline-flex h-6 w-6 rounded-full border-[3px] border-white bg-[#0e7490] sm:h-7 sm:w-7"
                  style={{
                    boxShadow: !isCompactViewport && isHovering
                      ? "0 0 0 5px rgba(14,116,144,0.25), 0 0 28px rgba(14,116,144,0.7)"
                      : "0 0 18px rgba(14,116,144,0.8), 0 2px 8px rgba(0,0,0,0.2)",
                    transition: "box-shadow 0.4s ease",
                  }}
                />
              </div>

              {/* Tooltip */}
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%) translateY(8px)",
                  width: "260px",
                  opacity: !isCompactViewport && isHovering ? 1 : 0,
                  pointerEvents: !isCompactViewport && isHovering ? "auto" : "none",
                  transition: "opacity 0.35s ease 0.15s",
                  zIndex: 60,
                }}
              >
                <div className="bg-white/96 backdrop-blur-xl border-t-4 border-[#0e7490] p-5 shadow-2xl border border-slate-100 rounded-sm">
                  <span className="text-[10px] text-[#0e7490] font-bold tracking-widest uppercase block mb-2 text-right">
                    الموقع الحالي
                  </span>
                  <h4 className="text-2xl font-black text-slate-900 leading-none mb-3 font-['Cairo'] text-right">
                    فرع بنغازي
                  </h4>
                  <div className="pt-3 border-t border-slate-100 font-mono text-[10px] space-y-1 text-slate-500 text-right">
                    <p className="flex flex-row-reverse justify-between uppercase tracking-tighter">
                      <span>خط العرض:</span>
                      <span className="text-[#0e7490] font-bold">32.102517 N</span>
                    </p>
                    <p className="flex flex-row-reverse justify-between uppercase tracking-tighter">
                      <span>خط الطول:</span>
                      <span className="text-[#0e7490] font-bold">20.101078 E</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
