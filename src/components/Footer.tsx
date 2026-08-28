import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import {
  ArrowUp,
  SlidersHorizontal,
  FileText
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { data, theme, accent, setIsResumeOpen, setIsCustomizerOpen, t } = usePortfolio();
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
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 sm:pb-12 border-b border-white/10">
          
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
                {profile.name} // {t.footer.archiveTag}
              </span>
            </div>
            <p className="text-xs font-light text-neutral-400 max-w-lg leading-relaxed">
              {profile.role} — {t.footer.footerNote}
            </p>
          </div>

          {/* Col 2: Quick Links & Actions */}
          <div className="md:col-span-5 flex flex-wrap md:justify-end items-center gap-3 sm:gap-4 font-mono text-xs">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-3.5 py-2 border border-white/10 hover:border-[#9E1B38] hover:text-[#9E1B38] transition-colors flex items-center gap-1.5 uppercase tracking-wider min-h-[40px]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.footer.resumeSpec}</span>
            </button>

            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="px-3.5 py-2 border border-white/10 hover:border-[#9E1B38] hover:text-[#9E1B38] transition-colors flex items-center gap-1.5 uppercase tracking-wider min-h-[40px]"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{t.footer.customize}</span>
            </button>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#9E1B38] text-white font-bold uppercase tracking-wider hover:bg-[#b32548] transition-colors min-h-[40px]"
            >
              <span>{t.footer.top}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            <span>© {new Date().getFullYear()} {profile.name.toUpperCase()}. {t.footer.allRightsReserved}.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] uppercase tracking-wider">
            {profile.socialLinks.filter(s => s.featured).map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#9E1B38] transition-colors py-1"
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
