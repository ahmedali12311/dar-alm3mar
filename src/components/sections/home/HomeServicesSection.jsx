import { useEffect, useMemo, useRef, useState } from "react";
import ModernHouseModel from "../../models/ModernHouseModel";
import { homeServices } from "../../../site-data";
import {
  containerClass,
  eyebrowClass,
  pageSectionClass,
  paragraphClass,
  sectionHeadingClass,
} from "../../../lib/ui";

const serviceVisuals = [
  {
    type: "image",
    src: "/images/blueprint.webp",
    alt: "مخطط هندسي",
    imageClass: "w-36 md:w-44 lg:w-48",
    wrapperClass: "w-[9rem] md:w-[11rem] lg:w-[12rem]",
  },
  {
    type: "image",
    src: "/images/helmet.webp",
    alt: "خوذة إشراف هندسي",
    imageClass: "w-28 md:w-32 lg:w-36",
    wrapperClass: "w-[8rem] md:w-[9.5rem] lg:w-[10rem]",
  },
  {
    type: "model",
    wrapperClass: "w-[15rem] md:w-[18rem] lg:w-[21rem]",
  },
];

export default function HomeServicesSection() {
  const [loadedImages, setLoadedImages] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const services = useMemo(() => homeServices.slice(0, serviceVisuals.length), []);

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean);
    if (!nodes.length) return;

    let frameId = 0;

    const updateActiveIndex = () => {
      frameId = 0;

      const focusLine = window.innerHeight * 0.45;
      let nextIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      nodes.forEach((node, index) => {
        const rect = node.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - focusLine);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextIndex = index;
        }
      });

      setActiveIndex((currentIndex) =>
        currentIndex === nextIndex ? currentIndex : nextIndex
      );
    };

    const scheduleUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateActiveIndex);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [services.length]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section className={`${pageSectionClass} bg-[#fdfdfd] py-24 lg:py-32`}>
      <div className={containerClass}>
        <div className="grid gap-16 lg:grid-cols-[minmax(20rem,0.8fr)_minmax(0,1.2fr)]">
          
          {/* الجانب الأيمن: القائمة والمحتوى الثابت */}
          <div className="lg:sticky lg:top-32 lg:h-fit text-right">
            <span className={`${eyebrowClass} !text-[#bf6a33] border-r-2 border-[#bf6a33] pr-4`}>
              مسار العمل
            </span>
            <h2 className={`mt-6 ${sectionHeadingClass} !text-4xl md:!text-5xl lg:!text-6xl text-slate-900`}>
              من الفكرة <br />
              <span className="text-slate-400 font-light underline decoration-[#bf6a33]/30 underline-offset-8">إلى الواقع</span>
            </h2>
            <p className={`mt-8 ${paragraphClass} ml-auto max-w-sm text-slate-500 leading-relaxed`}>
              نرافقك في رحلة البناء عبر منهجية هندسية دقيقة، تبدأ بالتخطيط المبتكر وتنتهي بإشراف يضمن أعلى معايير الجودة.
            </p>

            <div className="mt-12 space-y-6">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    className={`group relative pr-6 transition-all duration-500 ${
                      isActive ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    <div className={`absolute right-0 top-1/2 -translate-y-1/2 h-8 w-1 transition-all duration-500 ${
                      isActive ? "bg-[#bf6a33] h-full" : "bg-slate-200"
                    }`} />
                    <span className="font-mono text-xs font-bold text-[#bf6a33]">0{index + 1}</span>
                    <p className={`mt-1 font-['Cairo'] text-lg font-bold ${isActive ? "text-slate-900" : "text-slate-400"}`}>
                      {service.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* الجانب الأيسر: البطاقات المتراكمة */}
          <div className="space-y-[10vh]">
            {services.map((service, index) => {
              const visual = serviceVisuals[index];
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  ref={(node) => (itemRefs.current[index] = node)}
                  data-index={index}
                  className="relative"
                >
                    <article
                      className={`sticky top-32 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl shadow-slate-200/50 transition-all duration-700 ${
                        isActive ? "scale-100 opacity-100" : "scale-[0.98] opacity-60 blur-[1px]"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-4 p-6 sm:gap-8 sm:p-10 md:p-12">
                        <div className="min-w-0 flex-1 text-right">
                          <div className="mb-3 text-[#bf6a33] font-mono text-sm font-bold tracking-tighter italic" />
                          <h3 className="font-['Cairo'] text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4">
                            {service.title}
                          </h3>
                          <p className="text-slate-500 leading-7 text-sm sm:text-base md:text-lg italic font-medium">
                            "{service.text}"
                          </p>
                        </div>

                        <div className="flex shrink-0 items-center justify-center sm:justify-start self-center sm:self-stretch">
                          <ServiceVisual
                            index={index}
                            isLoaded={Boolean(loadedImages[index])}
                            onImageLoad={handleImageLoad}
                            visual={visual}
                          />
                        </div>
                      </div>
                    </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceVisual({ visual, index, isLoaded, onImageLoad }) {
  if (visual.type === "model") {
    return <InteractiveModelVisual wrapperClass={visual.wrapperClass} />;
  }

  return (
    <div className={`flex items-center justify-center ${visual.wrapperClass}`}>
      <img
        src={visual.src}
        alt={visual.alt}
        onLoad={() => onImageLoad(index)}
        className={`${visual.imageClass} h-auto transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-90"
        }`}
        style={{ filter: "drop-shadow(0 18px 30px rgba(15,23,42,0.1))" }}
      />
    </div>
  );
}

function InteractiveModelVisual({ wrapperClass }) {
  const [tilt, setTilt] = useState({ rotateX: 10, rotateY: -20, scale: 0.45 });

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;
    setTilt({ rotateX: 15 - relativeY * 10, rotateY: -25 + relativeX * 15, scale: 0.48 });
  };

  const handlePointerLeave = () => {
    setTilt({ rotateX: 10, rotateY: -20, scale: 0.45 });
  };

  return (
    <div
      className={`relative flex items-center justify-center h-[9rem] w-[9rem] sm:h-[12rem] sm:w-[12rem] md:h-[14rem] md:w-[18rem] lg:w-[21rem] [perspective:3000px] overflow-visible`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="absolute inset-x-[20%] bottom-2 h-4 rounded-full bg-slate-900/10 blur-xl" />
      <div
        className="absolute transition-transform duration-500 ease-out [transform-style:preserve-3d] will-change-transform"
        style={{
          transform: `scale(${tilt.scale}) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          width: '200%',
          height: '200%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ModernHouseModel />
      </div>
    </div>
  );
}
