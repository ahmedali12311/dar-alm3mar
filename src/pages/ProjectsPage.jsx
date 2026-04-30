import ProjectsDetailsSection from "../components/sections/projects/ProjectsDetailsSection";
import ProjectsHeroSection from "../components/sections/projects/ProjectsHeroSection";
import ProjectsProcessSection from "../components/sections/projects/ProjectsProcessSection";
import ProjectsScopesSection from "../components/sections/projects/ProjectsScopesSection";
import SectionStack from "../components/layout/SectionStack";
import { usePageMeta } from "../hooks/usePageMeta";

const projectsConnectors = [
  {
    from: "#f8fafc",
    to: "#ffffff",
    accent: "rgba(2, 132, 199, 0.3)",
    heightClass: "h-20 md:h-28",
  },
  {
    // White (ProjectsDetails) → Light warm gray (ProjectsScopes)
    from: "#ffffff",
    to: "#f7f4ef",
    accent: "rgba(2, 132, 199, 0.3)",
    heightClass: "h-20 md:h-28",
  },
  {
    // Light warm gray (ProjectsScopes) → White (ProjectsProcess)
    from: "#f7f4ef",
    to: "#ffffff",
    accent: "rgba(2, 132, 199, 0.25)",
    heightClass: "h-20 md:h-28",
  },
];

export default function ProjectsPage() {
  usePageMeta(
    "مشاريع دار المعمار | أعمالنا الهندسية والعقارية",
    "استعرض المشاريع والأعمال البارزة لشركة دار المعمار للاستشارات الهندسية والاستثمار العقاري."
  );

  return (
    <main className="grid w-full gap-0 py-0">
      <SectionStack connectors={projectsConnectors}>
        <ProjectsHeroSection />
        <ProjectsDetailsSection />
        <ProjectsScopesSection />
        <ProjectsProcessSection />
      </SectionStack>
    </main>
  );
}
