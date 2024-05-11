import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSections";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <Navbar />
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        {/* <ExperienceSection /> */}
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}