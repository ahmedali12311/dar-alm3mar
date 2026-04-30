import ContactContentSection from "../components/sections/contact/ContactContentSection";
import ContactHeroSection from "../components/sections/contact/ContactHeroSection";
import SectionStack from "../components/layout/SectionStack";
import { usePageMeta } from "../hooks/usePageMeta";

const contactConnectors = [
  {
    from: "#ffffff",
    to: "#ffffff",
    accent: "rgba(2, 132, 199, 0.3)",
    heightClass: "h-16 md:h-20",
    variant: "blueprint",
  },
];

export default function ContactPage() {
  usePageMeta(
    "تواصل مع دار المعمار | استشارة ومتابعة مشروعك",
    "تواصل مع شركة دار المعمار للاستشارات الهندسية والاستثمار العقاري عبر الهاتف أو البريد الإلكتروني."
  );

  return (
    <main className="grid w-full gap-0 py-0">
      <SectionStack connectors={contactConnectors}>
        <ContactHeroSection />
        <ContactContentSection />
      </SectionStack>
    </main>
  );
}
