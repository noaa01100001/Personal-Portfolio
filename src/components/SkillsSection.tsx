import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import { SkillProficiency } from '../types';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Search,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { data, theme, accent } = usePortfolio();
  const isDark = theme === 'dark';
  const accentStyles = getAccentStyles(accent, isDark);

  const [selectedProficiency, setSelectedProficiency] = useState<'All' | SkillProficiency>('All');
  const [skillSearch, setSkillSearch] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-[#FF4E00]" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-[#FF4E00]" />;
      case 'Server':
        return <Server className="w-4 h-4 text-[#FF4E00]" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#FF4E00]" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-[#FF4E00]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#FF4E00]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#FF4E00]" />;
    }
  };

  const getLevelBadgeClass = (level: SkillProficiency) => {
    switch (level) {
      case 'Expert':
        return 'text-[#FF4E00] border-[#FF4E00]/40';
      case 'Advanced':
        return 'text-white border-white/30';
      case 'Proficient':
        return 'text-neutral-400 border-neutral-700';
      case 'Exploring':
        return 'text-neutral-500 border-neutral-800';
    }
  };

  return (
    <section id="skills" className={`py-24 border-b ${isDark ? 'border-white/10 bg-[#050505]' : 'border-black/10 bg-[#FAFAFA]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.35em] text-[#FF4E00] font-bold mb-2">
              03 // TECHNICAL STACK & DISCIPLINES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase italic">
              Domain Competencies <br className="hidden sm:inline" />
              <span className="text-neutral-500">& Systems Architecture</span>
            </h2>
          </div>

          {/* Quick filter & search */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 border border-white/10 p-1 bg-[#0A0A0A]">
              {(['All', 'Expert', 'Advanced', 'Proficient', 'Exploring'] as const).map((lvl) => (
                <button
                  key={lvl}
                  id={`skill-filter-${lvl}`}
                  onClick={() => setSelectedProficiency(lvl)}
                  className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-all ${
                    selectedProficiency === lvl
                      ? 'bg-[#FF4E00] text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="skill-search-input"
                type="text"
                placeholder="FILTER SPECS //"
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                className={`pl-8 pr-3 py-1.5 text-xs font-mono border focus:outline-none focus:border-[#FF4E00] uppercase placeholder:text-neutral-600 ${
                  isDark
                    ? 'bg-[#0A0A0A] border-white/10 text-white'
                    : 'bg-white border-black/10 text-black'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.skillCategories.map((category, idx) => {
            const filteredSkills = category.skills.filter((s) => {
              const matchesLevel = selectedProficiency === 'All' || s.level === selectedProficiency;
              const matchesSearch =
                !skillSearch ||
                s.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
                category.title.toLowerCase().includes(skillSearch.toLowerCase());
              return matchesLevel && matchesSearch;
            });

            if (filteredSkills.length === 0 && (selectedProficiency !== 'All' || skillSearch)) {
              return null;
            }

            return (
              <div
                key={category.id}
                id={`skill-category-${category.id}`}
                className={`border p-6 flex flex-col justify-between transition-all duration-300 ${
                  isDark
                    ? 'bg-[#080808] border-white/10 hover:border-white/30'
                    : 'bg-white border-black/10 hover:border-black/30'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(category.iconName)}
                      <span className="font-bold uppercase tracking-wider text-sm">
                        {category.title}
                      </span>
                    </div>
                    <span className="text-neutral-500">
                      SEC // 0{idx + 1}
                    </span>
                  </div>

                  <p className={`text-xs mb-6 font-light leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2 font-mono text-xs">
                    {filteredSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center justify-between p-2.5 border transition-colors ${
                          isDark
                            ? 'bg-[#0E0E0E] border-white/5 hover:border-white/20'
                            : 'bg-neutral-50 border-black/5 hover:border-black/20'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[#FF4E00] text-[10px]">■</span>
                          <span className="font-medium text-xs">
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] px-1.5 py-0.5 border ${getLevelBadgeClass(skill.level)}`}>
                            {skill.level}
                          </span>
                          <span className="text-[10px] text-neutral-500">
                            {skill.years}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle indicator */}
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  <span>PRODUCTION READINESS</span>
                  <span className="text-[#FF4E00] font-bold">VERIFIED 100%</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Emerging Focus Box */}
        <div className={`mt-12 p-6 border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${
          isDark ? 'bg-[#080808] border-white/10' : 'bg-white border-black/10'
        }`}>
          <div className="flex items-center gap-4">
            <div className="p-3 border border-[#FF4E00]/30 text-[#FF4E00] bg-[#FF4E00]/5">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FF4E00] font-bold">
                EXPLORING & R&D INITIATIVES //
              </div>
              <h4 className="font-bold text-base uppercase tracking-tight italic">
                Blockchain, LLMs & Sistemas RAG
              </h4>
              <p className={`text-xs mt-1 font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Investigación activa en arquitecturas descentralizadas con Blockchain, integración de modelos de lenguaje masivo (LLMs) y pipelines de generación aumentada por recuperación (Sistemas RAG).
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs shrink-0">
            <span className="px-3 py-1.5 border border-white/10 uppercase tracking-wider text-neutral-300">
              BLOCKCHAIN & WEB3
            </span>
            <span className="px-3 py-1.5 border border-white/10 uppercase tracking-wider text-neutral-300">
              MODELOS LLM
            </span>
            <span className="px-3 py-1.5 border border-[#FF4E00]/30 text-[#FF4E00] bg-[#FF4E00]/5 uppercase tracking-wider font-bold">
              SISTEMAS RAG
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
