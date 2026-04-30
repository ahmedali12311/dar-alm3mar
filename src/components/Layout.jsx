import { useLocation } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SectionConnector from "./layout/SectionConnector";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-white font-sans text-slate-800">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-30 bg-[linear-gradient(rgba(24,36,45,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(24,36,45,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.55),transparent_85%)]"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-24 top-24 -z-20 h-64 w-64 rounded-full bg-[#0ea5e9]/15 blur-3xl"
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -right-20 top-96 -z-20 h-60 w-60 rounded-full bg-[#0f172a]/15 blur-3xl"
      ></div>
      <div className="relative z-10">
        <Header />
        <div className="pt-0">
          {children}
        </div>
        <div className={location.pathname === "/gallery" ? "bg-[#f1f5f9]" : "bg-white"}>
          <SectionConnector
            from={location.pathname === "/gallery" ? "#f1f5f9" : "#ffffff"}
            to="#ffffff"
            accent="rgba(2, 132, 199, 0.3)"
            heightClass="h-24 md:h-32"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
