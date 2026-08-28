import React, { useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import {
  X,
  Printer,
  Download,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const ResumeModal: React.FC = () => {
  const { data, isResumeOpen, setIsResumeOpen, theme, accent, showToast, t } = usePortfolio();
  const isDark = theme === 'dark';
  const accentStyles = getAccentStyles(accent, isDark);
  const { profile, experiences, educations, skillCategories } = data;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
      }
    };
    if (isResumeOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isResumeOpen, setIsResumeOpen]);

  if (!isResumeOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${profile.name.replace(/\s+/g, '_')}_Portfolio_Resume.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast(t.toast.resumeDownloaded);
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsResumeOpen(false)}
    >
      <div
        id="resume-modal-content"
        className={`relative w-full max-w-4xl border shadow-2xl overflow-hidden my-4 sm:my-6 max-h-[92vh] flex flex-col ${
          isDark ? 'bg-[#080808] border-white/20 text-white' : 'bg-white border-black/20 text-black'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className={`p-4 border-b flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20 font-mono ${
          isDark ? 'bg-[#080808]/95 border-white/10' : 'bg-white/95 border-black/10'
        }`}>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs uppercase tracking-wider text-[#FF4E00]">SPECIFICATION // CV</span>
            <span className="text-xs text-neutral-400">[{profile.name}]</span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              id="print-resume-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-[#FF4E00] hover:text-[#FF4E00] uppercase tracking-wider transition-colors min-h-[36px]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              id="download-resume-json-btn"
              onClick={handleDownloadJSON}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-[#FF4E00] hover:text-[#FF4E00] uppercase tracking-wider transition-colors min-h-[36px]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>JSON</span>
            </button>

            <button
              id="close-resume-btn"
              onClick={() => setIsResumeOpen(false)}
              className="p-1.5 border border-white/20 hover:border-[#FF4E00] hover:text-[#FF4E00] transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Document Paper */}
        <div className={`p-6 sm:p-12 overflow-y-auto space-y-8 font-mono ${
          isDark ? 'bg-[#050505] text-neutral-200' : 'bg-[#FAFAFA] text-neutral-900'
        }`}>
          {/* Header */}
          <div className="border-b pb-8 border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight italic font-sans text-white">
                {profile.name}
              </h1>
              <p className="text-xs text-neutral-400 uppercase">
                {profile.location}
              </p>
            </div>
            
            <p className="text-sm font-bold mt-2 uppercase text-[#FF4E00] tracking-wider">
              {profile.role}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 mt-3 pt-3 border-t border-white/10">
              <span>{profile.email}</span>
              {profile.socialLinks.map((s) => (
                <React.Fragment key={s.id}>
                  <span>//</span>
                  <span className="uppercase">{s.username}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF4E00]">
              01 // {t.about.sectionTag}
            </div>
            <p className="text-xs sm:text-sm leading-relaxed font-light text-neutral-300">
              {profile.headline} {profile.bioParagraphs[0]}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF4E00] flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>02 // {t.experience.operationalEngagements}</span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 border border-white/10 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs pb-2 border-b border-white/10 gap-1">
                    <span className="font-bold text-sm uppercase text-white font-sans">
                      {exp.role} <span className="text-[#FF4E00]">@{exp.company}</span>
                    </span>
                    <span className="text-neutral-400 text-[11px] uppercase">{exp.period} | {exp.location}</span>
                  </div>

                  <p className="text-xs font-light text-neutral-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-neutral-400 pt-1">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#FF4E00] shrink-0">■</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-[10px] text-neutral-400 pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                    <span className="text-[#FF4E00] font-bold">STACK:</span>
                    {exp.technologies.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF4E00] flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>03 // {t.experience.academicFoundation}</span>
            </div>

            <div className="space-y-3">
              {educations.map((edu) => (
                <div key={edu.id} className="p-4 border border-white/10 text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-white uppercase font-sans gap-1">
                    <span>{edu.degree} — <span className="text-[#FF4E00]">{edu.institution}</span></span>
                    <span className="text-neutral-400 text-[11px]">{edu.period}</span>
                  </div>
                  {edu.honors && <p className="text-[#FF4E00] text-[11px] uppercase">{edu.honors}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-4">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF4E00]">
              04 // {t.skills.sectionTag}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-4 border border-white/10 bg-[#080808]">
                  <span className="font-bold text-white uppercase block mb-2">{cat.title}:</span>
                  <span className="text-neutral-400 text-xs leading-relaxed">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
