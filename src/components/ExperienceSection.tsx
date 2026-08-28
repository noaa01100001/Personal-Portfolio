import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import {
  Calendar,
  MapPin,
  Award,
  ArrowUpRight
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const { data, theme, accent } = usePortfolio();
  const isDark = theme === 'dark';
  const accentStyles = getAccentStyles(accent, isDark);

  return (
    <section id="experience" className={`py-24 border-b ${isDark ? 'border-white/10 bg-[#050505]' : 'border-black/10 bg-[#FAFAFA]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.35em] text-[#FF4E00] font-bold mb-2">
              04 // CHRONOLOGY & RECORD
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase italic">
              Professional Trajectory <br className="hidden sm:inline" />
              <span className="text-neutral-500">& Technical Leadership</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest max-w-xs text-left md:text-right">
            [EXPERIENCE & EDUCATION TIMELINE]
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Work Experience Timeline (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-neutral-500 mb-6">
              OPERATIONAL ENGAGEMENTS //
            </div>

            <div className="space-y-8">
              {data.experiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  id={`experience-item-${exp.id}`}
                  className={`border p-6 transition-all ${
                    isDark
                      ? 'bg-[#080808] border-white/10 hover:border-white/30'
                      : 'bg-white border-black/10 hover:border-black/30'
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 mb-4 border-b border-white/10 font-mono">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-neutral-500 text-xs">0{idx + 1} /</span>
                        <h4 className="text-lg font-bold uppercase tracking-tight italic font-sans">
                          {exp.role}
                        </h4>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-[10px] bg-[#FF4E00] text-black font-bold uppercase tracking-wider">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-mono text-[#FF4E00] uppercase tracking-wider font-bold">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-light ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-3 mb-6">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
                      KEY DELIVERABLES & BENCHMARKS
                    </div>
                    <ul className="space-y-2 text-xs">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2.5">
                          <span className="text-[#FF4E00] font-mono mt-0.5">■</span>
                          <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider border border-white/10 text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-neutral-500 mb-6">
              ACADEMIC FOUNDATION //
            </div>

            <div className="space-y-6">
              {data.educations.map((edu) => (
                <div
                  key={edu.id}
                  id={`education-card-${edu.id}`}
                  className={`p-6 border ${
                    isDark ? 'bg-[#080808] border-white/10' : 'bg-white border-black/10'
                  }`}
                >
                  <div className="pb-3 mb-3 border-b border-white/10">
                    <div className="text-xs font-mono text-neutral-500 mb-1">
                      {edu.period}
                    </div>
                    <h4 className="font-bold text-base uppercase italic tracking-tight leading-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-mono text-[#FF4E00] uppercase font-bold mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  {edu.honors && (
                    <div className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono uppercase bg-[#FF4E00]/10 text-[#FF4E00] border border-[#FF4E00]/30 mb-4">
                      <Award className="w-3 h-3" />
                      <span>{edu.honors}</span>
                    </div>
                  )}

                  <ul className="space-y-2 text-xs font-light text-neutral-400">
                    {edu.details.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Continuous Learning Card */}
            <div className={`p-6 border ${
              isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-neutral-50 border-black/10'
            }`}>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FF4E00] font-bold mb-2">
                CONTINUOUS MASTERY //
              </div>
              <p className={`text-xs leading-relaxed font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Actively reviewing research papers on distributed consensus algorithms, participating in ACM conferences, and contributing to open-source RFC discussions.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
