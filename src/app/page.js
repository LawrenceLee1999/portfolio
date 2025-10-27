import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <AboutSection
        showLink={true}
        showButtons={false}
        showPhoto={false}
        showTechStack={false}
      />
      <ContactSection />
      <Footer />
    </>
  );
}
