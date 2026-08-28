import React from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProfilesSection } from './components/ProfilesSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { CustomizerModal } from './components/CustomizerModal';
import { CheckCircle2 } from 'lucide-react';

const ToastNotification: React.FC = () => {
  const { toastMessage } = usePortfolio();

  if (!toastMessage) return null;

  return (
    <div
      id="portfolio-toast"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-none bg-[#111] border border-white/20 text-[#FAFAFA] text-xs font-mono shadow-2xl backdrop-blur-md animate-fade-in"
    >
      <div className="w-2 h-2 rounded-full bg-[#FF4E00] shrink-0" />
      <span>{toastMessage}</span>
    </div>
  );
};

const PortfolioAppContent: React.FC = () => {
  const { theme } = usePortfolio();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isDark ? 'bg-[#050505] text-[#FAFAFA]' : 'bg-[#FAFAFA] text-[#0A0A0A]'
    }`}>
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ProfilesSection />
      </main>

      <Footer />

      {/* Interactive Modals */}
      <ProjectModal />
      <ResumeModal />
      <CustomizerModal />
      <ToastNotification />
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioAppContent />
    </PortfolioProvider>
  );
}
