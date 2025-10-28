import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection
          showLink={false}
          showButtons={true}
          showPhoto={true}
          showTechStack={true}
        />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
