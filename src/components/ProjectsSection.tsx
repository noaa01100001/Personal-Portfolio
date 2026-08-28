import React, { useState, useMemo } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import { ProjectCategory } from '../types';
import {
  Search,
  ExternalLink,
  Github,
  Layers,
  ArrowUpRight,
  Plus
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { data, theme, accent, setSelectedProject, setIsCustomizerOpen, t } = usePortfolio();
  const isDark = theme === 'dark';
  const accentStyles = getAccentStyles(accent, isDark);

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'fullstack', label: t.projects.filterFullstack },
    { id: 'frontend', label: t.projects.filterFrontend },
  ];

  const filteredProjects = useMemo(() => {
    return data.projects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [data.projects, activeCategory, searchQuery]);

  return (
    <section id="projects" className={`py-20 md:py-24 border-b ${isDark ? 'border-white/10 bg-[#050505]' : 'border-black/10 bg-[#FAFAFA]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.35em] text-[#9E1B38] font-bold mb-2">
              {t.projects.sectionTag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase italic">
              {t.projects.title1} <br className="hidden sm:inline" />
              <span className="text-neutral-500">{t.projects.title2}</span>
            </h2>
          </div>

          <button
            id="add-project-trigger-btn"
            onClick={() => setIsCustomizerOpen(true)}
            className="inline-flex items-center gap-2 h-10 px-4 text-xs font-mono uppercase tracking-wider border border-white/20 hover:border-[#9E1B38] hover:text-[#9E1B38] transition-colors shrink-0 self-start md:self-auto min-h-[44px]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{t.customizerModal.title.replace('//', '').trim()}</span>
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 sm:mb-12">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`project-filter-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`h-10 px-4 sm:px-5 inline-flex items-center justify-center text-xs font-mono uppercase tracking-wider transition-all border whitespace-nowrap min-h-[44px] ${
                    isActive
                      ? 'bg-[#9E1B38] border-[#9E1B38] text-white font-bold'
                      : isDark
                      ? 'border-white/10 text-neutral-400 hover:text-white hover:border-white/30'
                      : 'border-black/10 text-neutral-600 hover:text-black hover:border-black/30'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="project-search-input"
              type="text"
              placeholder={t.projects.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full h-11 pl-10 pr-8 text-xs font-mono border focus:outline-none focus:border-[#9E1B38] uppercase placeholder:text-neutral-600 ${
                isDark
                  ? 'bg-[#0A0A0A] border-white/10 text-white'
                  : 'bg-white border-black/10 text-black'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-neutral-500 hover:text-white p-1"
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className={`text-center py-20 px-4 border ${
            isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-neutral-100 border-black/10'
          }`}>
            <Layers className="w-8 h-8 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-sm font-mono uppercase tracking-widest font-bold">{t.projects.noResults}</h3>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2.5 text-xs font-mono uppercase bg-[#9E1B38] text-white font-bold min-h-[44px]"
            >
              {t.projects.resetFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`group border flex flex-col justify-between transition-all duration-300 ${
                  isDark
                    ? 'bg-[#080808] border-white/10 hover:border-white/40'
                    : 'bg-white border-black/10 hover:border-black/40'
                }`}
              >
                {/* Project Image & Index header */}
                <div>
                  <div className="p-3 sm:p-4 border-b border-white/10 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-neutral-500">
                      INDEX // 00{idx + 1}
                    </span>
                    <span className="uppercase text-[#9E1B38] font-bold">
                      {project.category}
                    </span>
                  </div>

                  <div
                    className="relative aspect-16/10 w-full overflow-hidden bg-[#0A0A0A] cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {project.featured && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-mono bg-[#9E1B38] text-white font-bold uppercase tracking-wider">
                        {t.projects.featuredTag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg sm:text-xl font-bold tracking-tight uppercase italic cursor-pointer group-hover:text-[#9E1B38] transition-colors flex items-center justify-between gap-2"
                    >
                      <span className="line-clamp-2">{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#9E1B38] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </h3>
                    <p className={`text-xs leading-relaxed line-clamp-3 font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Impact Metric Banner */}
                  {project.impactMetric && (
                    <div className="text-[11px] font-mono text-[#9E1B38] flex items-center gap-1.5 py-1 border-t border-b border-white/5 truncate">
                      <span className="shrink-0">METRIC //</span>
                      <span className="truncate text-neutral-300">{project.impactMetric}</span>
                    </div>
                  )}

                  {/* Tech stack pills */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider border border-white/10 text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Bar */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-xs">
                      <button
                        id={`project-details-btn-${project.id}`}
                        onClick={() => setSelectedProject(project)}
                        className="text-neutral-300 hover:text-[#9E1B38] transition-colors uppercase tracking-wider flex items-center gap-1 min-h-[44px]"
                      >
                        [{t.projects.viewDossier}]
                      </button>

                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            id={`project-github-link-${project.id}`}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-neutral-400 hover:text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                            title="View Source Code"
                            aria-label="View Source Code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            id={`project-live-link-${project.id}`}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-neutral-400 hover:text-[#9E1B38] transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
                            title="Launch Live App"
                            aria-label="Launch Live App"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
