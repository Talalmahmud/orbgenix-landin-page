import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServiceSection from "./components/ServiceSection";
import ProcessSection from "./components/ProcessSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ProjectSection from "./components/ProjectSection";
import FAQ from "./components/Faq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <ServiceSection />
      <ProcessSection />
      <FAQ />
      <Contact />
    </>
  );
}
