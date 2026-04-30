import { useState } from "react";
import { containerClass } from "../../../lib/ui";

function CloudMark({
  className = "",
  imageClassName = "",
  driftClassName = "",
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{ opacity: 0.2 }}
    >
      <div className="absolute inset-[14%] rounded-full bg-white/26 blur-3xl" />
      <div className={`relative h-full w-full ${driftClassName}`}>
        <img
          alt=""
          className={`absolute inset-0 h-full w-full object-contain ${imageClassName}`}
          loading="eager"
          src="/images/CLOUSD.png"
          style={{
            filter:
              "brightness(1.04) saturate(0.9) contrast(1.02) drop-shadow(0 24px 34px rgba(6,10,14,0.26))",
            mixBlendMode: "screen",
          }}
        />
      </div>
    </div>
  );
}

export default function HomeHeroSection() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const overlayOffsetClass =
    "scale-[1.08] -translate-y-[1.5vh] sm:scale-[1.08] sm:-translate-y-[1.5vh] md:scale-[1.06] md:-translate-y-[1.25vh] lg:scale-[1.05] lg:-translate-y-[1vh] xl:scale-[1.04] xl:-translate-y-[0.75vh] 2xl:scale-[1.03] 2xl:-translate-y-[0.5vh]";

  const workflowSteps = [
    { id: "01", title: "التصميم المعماري والمخططات التنفيذية" },
    { id: "02", title: "الإشراف الهندسي وإدارة التنفيذ" },
    { id: "03", title: "النمذجة ثلاثية الأبعاد والتصور البصري" },
  ];

  return (
    <section className="relative h-[120vh] overflow-hidden bg-[#d8e4ec]">
      {/* --- الطبقات الخلفية --- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[34vh]"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,246,240,0.62) 0%, rgba(250,246,240,0.24) 42%, rgba(250,246,240,0) 100%)",
        }}
      />

      <img
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 z-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${isImageLoaded ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
          }`}
        loading="eager"
        onLoad={() => setIsImageLoaded(true)}
        src="/images/HOUSE.webp"
        style={{
          filter: "brightness(0.82) saturate(0.92) contrast(1.04)",
          transformOrigin: "center top",
        }}
      />

      <div className={`pointer-events-none absolute inset-0 z-30 ${overlayOffsetClass}`}>
        <img
          alt=""
          aria-hidden="true"
          className={`h-full w-full object-cover object-top transition-[opacity,transform] duration-[1400ms] ${isImageLoaded ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
            }`}
          loading="eager"
          src="/images/on-top.png"
          style={{
            filter:
              "brightness(0.92) saturate(0.96) drop-shadow(0 34px 60px rgba(18,24,30,0.3))",
            transformOrigin: "center top",
          }}
        />
      </div>

      {/* --- تم استعادة تنسيق العنوان الأصلي بدقة هنا --- */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center px-4 pt-[4.9rem] sm:pt-[3.9rem] md:pt-[2.9rem] lg:pt-[5.9rem]">
        <div className={`relative isolate transition-all duration-1000 ${isImageLoaded ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}>
          <CloudMark className="-left-6 top-[10%] h-[10rem] w-[13rem] -translate-x-[76%]" driftClassName="animate-cloud-drift-left" imageClassName="scale-[1.28]" />
          <CloudMark className="-right-6 top-[4%] h-[10rem] w-[13rem] translate-x-[76%]" driftClassName="animate-cloud-drift-right" imageClassName="scale-[1.28]" />

          <div className={`relative z-10 ${isImageLoaded ? "animate-hero-title-float" : ""}`}>
            {/* طبقة الـ Stroke الخلفية */}
            <span
              aria-hidden="true"
              className="absolute inset-0 text-center text-[clamp(4.75rem,15vw,11rem)] font-black leading-[1.0] text-transparent"
              style={{
                WebkitTextStroke: "4px rgba(255,255,255,0.96)",
                textShadow: "0 10px 24px rgba(255,255,255,0.24)",
              }}
            >
              دار المعمار
            </span>
            {/* طبقة النص النص الأساسية */}
            <h1 className="relative text-center text-[clamp(4.75rem,15vw,11rem)] font-black leading-[0.88] text-black" style={{ textShadow: "0 12px 24px rgba(255,255,255,0.12)" }}>
              دار المعمار
            </h1>
          </div>
        </div>
      </div>

      {/* المحتوى السفلي المرفوع للأعلى مع مسار العمل */}
      <div className="absolute inset-0 z-40 flex items-end pb-[10vh] sm:pb-[22vh] lg:pb-[25vh]">
        <div className={`${containerClass} w-full`}>
          <div className={`flex flex-col lg:flex-row justify-between items-end gap-6 sm:gap-10 lg:gap-12 transition-all duration-700 delay-100 ${isImageLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>

            {/* المحتوى الرئيسي للموبايل والويب - مضمون وجوده على اليمين دائماً */}
            <div className="w-full flex justify-start"> 
              <div className="max-w-2xl text-right">
                <h2 className="font-['Cairo'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.25] drop-shadow-lg">
                  نصيغ الفراغ.. <br />
                  <span className="text-[#0ea5e9]">لنمنحك قيمة تدوم.</span>
                </h2>
                <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-white/85 drop-shadow-md max-w-sm sm:max-w-lg lg:max-w-2xl ml-auto">
                  في بنغازي، نحن لا نبني جدراناً فقط؛ نحن نصمم استثمارات عقارية مستدامة ونشرف على أدق تفاصيل التنفيذ لنضمن لك جودة تليق بتطلعاتك.
                </p>
              </div>
            </div>

            {/* جهة اليسار: مسار العمل — يظهر فقط في الويب ومتموضع لليسار */}
            <div className="hidden lg:block absolute left-4 bottom-0 max-w-xs text-right flex-shrink-0">
              <div className="mb-3">
                <span className="text-[#0ea5e9] font-bold tracking-widest uppercase text-xs sm:text-sm drop-shadow">مسار العمل</span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white mt-1 drop-shadow-lg">من الفكرة إلى الواقع</h3>
              </div>
              <p className="text-white/70 text-xs sm:text-sm mb-4 leading-relaxed drop-shadow">
                نرافقك في رحلة البناء عبر منهجية هندسية دقيقة، تبدأ بالتخطيط المبتكر وتنتهي بإشراف يضمن أعلى معايير الجودة.
              </p>
              <div className="space-y-3">
                {workflowSteps.map((step) => (
                  <div key={step.id} className="flex items-center justify-end gap-3 group">
                    <span className="text-white/80 text-xs sm:text-sm font-medium group-hover:text-white transition-colors drop-shadow">{step.title}</span>
                    <span className="text-[#0ea5e9] font-black text-base sm:text-lg border-r border-[#0ea5e9]/30 pr-3 drop-shadow">{step.id}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 h-[90vh] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
    </section>
  );
}