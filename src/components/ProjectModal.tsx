import React, { useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import {
  X,
  ExternalLink,
  Github,
  Cpu,
  Sparkles,
  Zap,
  Calendar,
  Tag
} from 'lucide-react';

export const ProjectModal: React.FC = () => {
  const { selectedProject, setSelectedProject, theme, accent } = usePortfolio();
  const isDark = theme === 'dark';
  const accentStyles = getAccentStyles(accent, isDark);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, setSelectedProject]);

  if (!selectedProject) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={() => setSelectedProject(null)}
    >
      <div
        id="project-detail-modal-content"
        className={`relative w-full max-w-4xl border shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col ${
          isDark ? 'bg-[#080808] border-white/20 text-white' : 'bg-white border-black/20 text-black'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className={`p-4 sm:p-6 border-b flex items-center justify-between sticky top-0 z-20 font-mono ${
          isDark ? 'bg-[#080808]/95 border-white/10' : 'bg-white/95 border-black/10'
        }`}>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#FF4E00] text-black">
              {selectedProject.category}
            </span>
            <span className="text-xs text-neutral-400 flex items-center gap-1.5 uppercase">
              <Calendar className="w-3.5 h-3.5 text-neutral-500" />
              SPEC YEAR // {selectedProject.year}
            </span>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={() => setSelectedProject(null)}
            className="p-1.5 border border-white/20 hover:border-[#FF4E00] hover:text-[#FF4E00] transition-colors text-neutral-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          {/* Title & Tagline */}
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#FF4E00] font-bold mb-2">
              PROJECT DOSSIER //
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tight font-sans">
              {selectedProject.title}
            </h2>
            <p className="text-base sm:text-lg mt-2 text-[#FF4E00] font-mono uppercase font-bold tracking-wide">
              {selectedProject.tagline}
            </p>
          </div>

          {/* Project Cover Image */}
          <div className="relative aspect-16/9 w-full overflow-hidden bg-black border border-white/10">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Impact Metric Badge Overlay */}
            {selectedProject.impactMetric && (
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-black/95 border border-[#FF4E00]/40 text-[#FF4E00] px-4 py-2 text-xs font-mono flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FF4E00] shrink-0" />
                <span className="truncate uppercase font-bold tracking-wider">{selectedProject.impactMetric}</span>
              </div>
            )}
          </div>

          {/* Primary Action Links */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
            {selectedProject.liveUrl && (
              <a
                id="modal-live-link"
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4E00] text-black font-bold uppercase tracking-widest hover:bg-[#ff6a26] transition-colors"
              >
                <span>LAUNCH DEPLOYMENT</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {selectedProject.githubUrl && (
              <a
                id="modal-github-link"
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white text-white uppercase tracking-widest transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>INSPECT SOURCE REPO</span>
              </a>
            )}
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
              ARCHITECTURAL OVERVIEW & PURPOSE //
            </div>
            <p className={`text-sm sm:text-base leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {selectedProject.longDescription || selectedProject.description}
            </p>
          </div>

          {/* Architecture Highlights & Key Features 2-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 border ${
              isDark ? 'bg-[#0E0E0E] border-white/10' : 'bg-neutral-50 border-black/10'
            }`}>
              <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#FF4E00]" />
                <span>ARCHITECTURE HIGHLIGHTS</span>
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                {selectedProject.architectureHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#FF4E00] mt-0.5">■</span>
                    <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-6 border ${
              isDark ? 'bg-[#0E0E0E] border-white/10' : 'bg-neutral-50 border-black/10'
            }`}>
              <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FF4E00]" />
                <span>CAPABILITY SPECIFICATION</span>
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                {selectedProject.keyFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#FF4E00] mt-0.5">■</span>
                    <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges Solved */}
          {selectedProject.challengesSolved && (
            <div className="p-6 border border-[#FF4E00]/30 bg-[#FF4E00]/5">
              <h4 className="font-mono font-bold text-xs uppercase tracking-wider text-[#FF4E00] mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FF4E00]" />
                <span>ENGINEERING CHALLENGE & RESOLUTION</span>
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                {selectedProject.challengesSolved}
              </p>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div className="space-y-3 pt-2">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 flex items-center gap-2">
              <Tag className="w-3.5 h-3.5" />
              <span>STACK COMPONENTS</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-white/10 text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`p-4 border-t flex justify-end font-mono text-xs ${
          isDark ? 'bg-[#080808] border-white/10' : 'bg-neutral-50 border-black/10'
        }`}>
          <button
            onClick={() => setSelectedProject(null)}
            className="px-6 py-2 border border-white/20 hover:border-white text-white uppercase tracking-wider transition-colors"
          >
            DISMISS DOSSIER
          </button>
        </div>

      </div>
    </div>
  );
};
