import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import {
  ShieldCheck,
  Sparkles,
  Cpu,
  Users,
  Terminal,
  Layers,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { data, theme, accent, t } = usePortfolio();
  const isDark = theme === 'dark';
  const accentStyles = getAccentStyles(accent, isDark);
  const { profile } = data;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#9E1B38]" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#9E1B38]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#9E1B38]" />;
      case 'Users':
        return <Users className="w-4 h-4 text-[#9E1B38]" />;
      default:
        return <Layers className="w-4 h-4 text-[#9E1B38]" />;
    }
  };

  return (
    <section id="about" className={`py-20 md:py-24 border-b ${isDark ? 'border-white/10 bg-[#050505]' : 'border-black/10 bg-[#FAFAFA]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Index & Eyebrow */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-8 mb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.35em] text-[#9E1B38] font-bold mb-2">
              {t.about.sectionTag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase italic">
              {t.about.title1} <br className="hidden sm:inline" />
              <span className="text-neutral-500">{t.about.title2}</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest max-w-xs text-left sm:text-right">
            {t.about.subtitle}
          </div>
        </div>

        {/* 2-Column Grid: Narrative Bio & Terminal/Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Narrative Biography (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Editorial Lead Paragraph with Left Accent */}
            {profile.bioParagraphs[0] && (
              <div className="border-l-2 border-[#9E1B38] pl-4 sm:pl-6 py-1">
                <p className={`text-lg sm:text-2xl font-light italic leading-relaxed ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  "{profile.bioParagraphs[0]}"
                </p>
              </div>
            )}

            <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-light text-neutral-400">
              {profile.bioParagraphs.slice(1).map((para, idx) => (
                <p key={idx} className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                  {para}
                </p>
              ))}
            </div>

            {/* Core Values Cards Grid */}
            <div className="pt-4 sm:pt-6">
              <div className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-neutral-500 mb-4">
                {t.about.foundationalPillars}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.coreValues.map((val, idx) => (
                  <div
                    key={idx}
                    id={`value-card-${idx}`}
                    className={`p-5 border transition-all ${
                      isDark
                        ? 'bg-[#0A0A0A] border-white/10 hover:border-white/30'
                        : 'bg-white border-black/10 hover:border-black/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {renderIcon(val.icon)}
                        <h4 className="font-bold text-xs uppercase tracking-wider font-mono">
                          {val.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-600">0{idx + 1}</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Facts & Interactive Terminal Snapshot (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Terminal Window Card */}
            <div className={`border font-mono text-xs ${
              isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-[#111] text-[#FAFAFA] border-black/10'
            }`}>
              {/* Terminal Titlebar */}
              <div className="bg-[#151515] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9E1B38] inline-block" />
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400">{t.about.systemManifest}</span>
                </div>
                <Terminal className="w-3.5 h-3.5 text-neutral-500" />
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-3">
                <div className="text-[11px] text-neutral-500">
                  <span>$ inspect --identity</span>
                </div>
                <pre className="text-neutral-300 leading-relaxed overflow-x-auto text-[11px] sm:text-xs">
{`{
  "entity": "${profile.name}",
  "domain": "${profile.role}",
  "location": "${profile.location}",
  "runtime": ["Cypress", "Selenium", "Flutter", "Vue.js", ".NET", "Java"],
  "focus": [
    "Test Automation & Regression",
    "Multiplatform Architecture",
    "Clean Architecture & DDD",
    "Agile Quality Assurance"
  ],
  "status": "${profile.availability}"
}`}
                </pre>

                <div className="pt-3 border-t border-white/10 text-[11px] text-neutral-400 flex items-center justify-between">
                  <span className="text-[#9E1B38]">{t.about.kernelStatus}</span>
                  <span>{t.about.testsPassing}</span>
                </div>
              </div>
            </div>

            {/* Quick Highlights Card */}
            <div className={`p-6 border ${
              isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-white border-black/10'
            }`}>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#9E1B38] font-bold mb-4">
                <span>{t.about.keyCredentialsTitle}</span>
              </div>
              <ul className="space-y-3 text-xs">
                {t.about.credentials.map((cred, idx) => (
                  <li key={idx} className={`flex items-start gap-2.5 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    <span className="text-[#9E1B38] font-mono mt-0.5 shrink-0">/0{idx + 1}</span>
                    <span className="leading-relaxed">{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
