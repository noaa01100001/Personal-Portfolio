import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import {
  ArrowUp,
  SlidersHorizontal,
  FileText
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { data, theme, accent, setIsResumeOpen, setIsCustomizerOpen } = usePortfolio();
  const isDark = theme === 'dark';
  const accentStyles = getAccentStyles(accent, isDark);
  const { profile } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors ${
      isDark ? 'bg-[#050505] border-white/10 text-neutral-400' : 'bg-[#FAFAFA] border-black/10 text-neutral-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Role */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black border border-white/30 text-white flex items-center justify-center font-mono font-bold text-xs">
                {profile.name
                  .split(' ')
                  .map((w) => w[0])
                  .filter(Boolean)
                  .join('')
                  .slice(0, 3)
                  .toUpperCase() || 'ACG'}
              </div>
              <span className="font-mono font-bold text-sm tracking-widest uppercase text-white">
                {profile.name} // ARCHIVE
              </span>
            </div>
            <p className="text-xs font-light text-neutral-400 max-w-lg leading-relaxed">
              {profile.role} — Engineered with deliberate typographic rhythm, hairline grids, and deterministic systems design.
            </p>
          </div>

          {/* Col 2: Quick Links & Actions */}
          <div className="md:col-span-5 flex flex-wrap md:justify-end items-center gap-4 font-mono text-xs">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-3 py-1.5 border border-white/10 hover:border-[#FF4E00] hover:text-[#FF4E00] transition-colors flex items-center gap-1.5 uppercase tracking-wider"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>RESUME SPEC</span>
            </button>

            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="px-3 py-1.5 border border-white/10 hover:border-[#FF4E00] hover:text-[#FF4E00] transition-colors flex items-center gap-1.5 uppercase tracking-wider"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>CUSTOMIZE</span>
            </button>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FF4E00] text-black font-bold uppercase tracking-wider hover:bg-[#ff6a26] transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            <span>© {new Date().getFullYear()} {profile.name.toUpperCase()}. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            {profile.socialLinks.filter(s => s.featured).map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF4E00] transition-colors"
                title={link.label}
              >
                [{link.label}]
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
