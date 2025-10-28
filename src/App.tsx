import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import CursorLight from "./components/CursorLight"; // ✅ importe o efeito

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />
      <CursorLight /> {/* efeito de luz - não bloqueia cliques */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>

  );
}
