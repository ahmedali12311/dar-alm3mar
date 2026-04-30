import HomeContactSection from "../components/sections/home/HomeContactSection";
import HomeHeroSection from "../components/sections/home/HomeHeroSection";
import HomeProjectsSection from "../components/sections/home/HomeProjectsSection";
import HomeServicesSection from "../components/sections/home/HomeServicesSection";
import SectionStack from "../components/layout/SectionStack";
import { usePageMeta } from "../hooks/usePageMeta";

const homeConnectors = [
  {
    from: "transparent",
    to: "#ffffff",
    accent: "rgba(198, 221, 231, 0.72)",
    heightClass: "h-20 md:h-28 -mt-20 md:-mt-28 relative z-50",
  },
  {
    from: "#ffffff",
    to: "#ffffff",
    accent: "rgba(145, 80, 37, 0.3)",
    heightClass: "h-20 md:h-28",
  },
  {
    from: "#ffffff",
    to: "#ffffff",
    accent: "rgba(16, 41, 51, 0.3)",
    heightClass: "h-20 md:h-28",
  },
];

export default function HomePage() {
  usePageMeta(
    "دار المعمار | الاستشارات الهندسية والاستثمار العقاري",
    "الموقع الرسمي لشركة دار المعمار للاستشارات الهندسية والاستثمار العقاري في بنغازي."
  );

  return (
    <main className="grid w-full gap-0 py-0">
      <SectionStack connectors={homeConnectors}>
        <HomeHeroSection />
        <HomeServicesSection />
        <HomeProjectsSection />
        <HomeContactSection />
      </SectionStack>
    </main>
  );
}
