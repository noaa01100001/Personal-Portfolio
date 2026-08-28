import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import { ProjectItem } from '../types';
import {
  X,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  SlidersHorizontal,
  User,
  FolderGit2,
  Link
} from 'lucide-react';

export const CustomizerModal: React.FC = () => {
  const {
    data,
    updateProfile,
    updateProjects,
    addProject,
    resetToDefaults,
    isCustomizerOpen,
    setIsCustomizerOpen,
    theme,
    accent,
    showToast
  } = usePortfolio();

  const isDark = theme === 'dark';
  const accentStyles = getAccentStyles(accent, isDark);

  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'social'>('profile');

  // Profile local form state
  const [profileForm, setProfileForm] = useState(data.profile);

  // New Project local form state
  const [newProjectForm, setNewProjectForm] = useState<Partial<ProjectItem>>({
    title: '',
    tagline: '',
    description: '',
    category: 'fullstack',
    tags: ['TypeScript', 'React'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    year: '2025',
    impactMetric: '',
    liveUrl: '',
    githubUrl: '',
    architectureHighlights: ['High-throughput architecture', 'Optimized data caching'],
    keyFeatures: ['Modern responsive UI', 'Instant real-time search'],
    challengesSolved: ''
  });

  const [rawTags, setRawTags] = useState('TypeScript, React, Node.js');

  useEffect(() => {
    setProfileForm(data.profile);
  }, [data.profile]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCustomizerOpen(false);
      }
    };
    if (isCustomizerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCustomizerOpen, setIsCustomizerOpen]);

  if (!isCustomizerOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(profileForm);
  };

  const handleSocialChange = (id: string, newUrl: string, newUsername: string) => {
    const updatedSocials = profileForm.socialLinks.map((s) =>
      s.id === id ? { ...s, url: newUrl, username: newUsername } : s
    );
    setProfileForm({ ...profileForm, socialLinks: updatedSocials });
  };

  const handleAddNewProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectForm.title || !newProjectForm.description) {
      showToast('Please enter a project title and description');
      return;
    }

    const tagsArray = rawTags.split(',').map((t) => t.trim()).filter(Boolean);

    const project: ProjectItem = {
      id: `custom-proj-${Date.now()}`,
      title: newProjectForm.title || 'New Project',
      tagline: newProjectForm.tagline || 'Custom built project',
      description: newProjectForm.description || '',
      longDescription: newProjectForm.description || '',
      category: newProjectForm.category || 'fullstack',
      tags: tagsArray.length ? tagsArray : ['TypeScript', 'React'],
      image: newProjectForm.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      featured: true,
      year: newProjectForm.year || '2025',
      impactMetric: newProjectForm.impactMetric || 'Production deployed',
      liveUrl: newProjectForm.liveUrl,
      githubUrl: newProjectForm.githubUrl,
      architectureHighlights: newProjectForm.architectureHighlights || ['Clean scalable architecture'],
      keyFeatures: newProjectForm.keyFeatures || ['Responsive interface'],
      challengesSolved: newProjectForm.challengesSolved || ''
    };

    addProject(project);
    setNewProjectForm({
      title: '',
      tagline: '',
      description: '',
      category: 'fullstack',
      tags: ['TypeScript', 'React'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      year: '2025',
      impactMetric: '',
      liveUrl: '',
      githubUrl: '',
      architectureHighlights: ['High-throughput architecture'],
      keyFeatures: ['Modern responsive UI'],
      challengesSolved: ''
    });
  };

  const handleDeleteProject = (id: string) => {
    const remaining = data.projects.filter((p) => p.id !== id);
    updateProjects(remaining);
    showToast('Project removed');
  };

  return (
    <div
      id="customizer-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsCustomizerOpen(false)}
    >
      <div
        id="customizer-modal-content"
        className={`relative w-full max-w-3xl border shadow-2xl overflow-hidden my-6 max-h-[90vh] flex flex-col font-mono ${
          isDark ? 'bg-[#080808] border-white/20 text-white' : 'bg-white border-black/20 text-black'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-4 sm:p-5 border-b flex items-center justify-between sticky top-0 z-20 ${
          isDark ? 'bg-[#080808]/95 border-white/10' : 'bg-white/95 border-black/10'
        }`}>
          <div className="flex items-center gap-3">
            <div className="p-2 border border-[#FF4E00]/40 text-[#FF4E00] bg-[#FF4E00]/5">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-bold text-xs uppercase tracking-wider text-white">PORTFOLIO PERSONALIZER //</h2>
              <p className="text-[11px] text-neutral-400 font-light">Customize your name, links, bio, and projects</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <button
              id="reset-portfolio-defaults-btn"
              onClick={() => {
                if (window.confirm('Reset all portfolio details to demo template defaults?')) {
                  resetToDefaults();
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-rose-500/40 text-rose-400 hover:bg-rose-500/10 uppercase tracking-wider transition-colors"
              title="Reset to demo profile data"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESET</span>
            </button>

            <button
              onClick={() => setIsCustomizerOpen(false)}
              className="p-1.5 border border-white/20 hover:border-[#FF4E00] hover:text-[#FF4E00] transition-colors text-neutral-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className={`flex border-b px-4 sm:px-6 gap-3 text-xs uppercase tracking-wider ${
          isDark ? 'border-white/10 bg-[#050505]' : 'border-black/10 bg-[#FAFAFA]'
        }`}>
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'profile'
                ? 'border-[#FF4E00] text-[#FF4E00] font-bold'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Profile & Bio</span>
          </button>

          <button
            onClick={() => setActiveTab('social')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'social'
                ? 'border-[#FF4E00] text-[#FF4E00] font-bold'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Link className="w-3.5 h-3.5" />
            <span>Social Channels</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'projects'
                ? 'border-[#FF4E00] text-[#FF4E00] font-bold'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Projects ({data.projects.length})</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-xs">
          {/* TAB 1: PROFILE */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className={`w-full px-3 py-2 border ${
                      isDark ? 'bg-[#0E0E0E] border-white/10 text-white' : 'bg-white border-black/10'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Pronouns (e.g. he/him)</label>
                  <input
                    type="text"
                    value={profileForm.pronouns}
                    onChange={(e) => setProfileForm({ ...profileForm, pronouns: e.target.value })}
                    className={`w-full px-3 py-2 border ${
                      isDark ? 'bg-[#0E0E0E] border-white/10 text-white' : 'bg-white border-black/10'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Professional Role / Title</label>
                  <input
                    type="text"
                    value={profileForm.role}
                    onChange={(e) => setProfileForm({ ...profileForm, role: e.target.value })}
                    className={`w-full px-3 py-2 border ${
                      isDark ? 'bg-[#0E0E0E] border-white/10 text-white' : 'bg-white border-black/10'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Location</label>
                  <input
                    type="text"
                    value={profileForm.location}
                    onChange={(e) => setProfileForm({ ...profileForm, location: e.target.value })}
                    className={`w-full px-3 py-2 border ${
                      isDark ? 'bg-[#0E0E0E] border-white/10 text-white' : 'bg-white border-black/10'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Availability Status</label>
                  <input
                    type="text"
                    value={profileForm.availability}
                    onChange={(e) => setProfileForm({ ...profileForm, availability: e.target.value })}
                    className={`w-full px-3 py-2 border ${
                      isDark ? 'bg-[#0E0E0E] border-white/10 text-white' : 'bg-white border-black/10'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Contact Email Address</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                    className={`w-full px-3 py-2 border ${
                      isDark ? 'bg-[#0E0E0E] border-white/10 text-white' : 'bg-white border-black/10'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Avatar Image URL</label>
                <input
                  type="url"
                  value={profileForm.avatarUrl}
                  onChange={(e) => setProfileForm({ ...profileForm, avatarUrl: e.target.value })}
                  className={`w-full px-3 py-2 border ${
                    isDark ? 'bg-[#0E0E0E] border-white/10 text-white' : 'bg-white border-black/10'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Elevator Pitch / Headline</label>
                <textarea
                  rows={2}
                  value={profileForm.headline}
                  onChange={(e) => setProfileForm({ ...profileForm, headline: e.target.value })}
                  className={`w-full px-3 py-2 border resize-none ${
                    isDark ? 'bg-[#0E0E0E] border-white/10 text-white' : 'bg-white border-black/10'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1">Biography (Paragraph 1)</label>
                <textarea
                  rows={3}
                  value={profileForm.bioParagraphs[0] || ''}
                  onChange={(e) => {
                    const newBio = [...profileForm.bioParagraphs];
                    newBio[0] = e.target.value;
                    setProfileForm({ ...profileForm, bioParagraphs: newBio });
                  }}
                  className={`w-full px-3 py-2 border resize-none ${
                    isDark ? 'bg-[#0E0E0E] border-white/10 text-white' : 'bg-white border-black/10'
                  }`}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#FF4E00] text-black font-bold uppercase tracking-wider hover:bg-[#ff6a26] transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>SAVE PROFILE SPECS</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: SOCIAL & LINKS */}
          {activeTab === 'social' && (
            <div className="space-y-4">
              <p className="text-neutral-400">
                Update URLs for your GitHub, LinkedIn, and social profiles.
              </p>

              {profileForm.socialLinks.map((link) => (
                <div
                  key={link.id}
                  className={`p-4 border space-y-2 ${
                    isDark ? 'bg-[#0E0E0E] border-white/10' : 'bg-neutral-50 border-black/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold uppercase text-white">{link.label}</span>
                    <span className="text-[11px] text-neutral-500 uppercase">{link.platform}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] uppercase text-neutral-400">Handle / Username</label>
                      <input
                        type="text"
                        value={link.username}
                        onChange={(e) => handleSocialChange(link.id, link.url, e.target.value)}
                        className={`w-full px-3 py-1.5 border ${
                          isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-black/10'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-neutral-400">Destination URL</label>
                      <input
                        type="text"
                        value={link.url}
                        onChange={(e) => handleSocialChange(link.id, e.target.value, link.username)}
                        className={`w-full px-3 py-1.5 border ${
                          isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-black/10'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => updateProfile(profileForm)}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#FF4E00] text-black font-bold uppercase tracking-wider hover:bg-[#ff6a26] transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>SAVE SOCIAL CHANNELS</span>
              </button>
            </div>
          )}

          {/* TAB 3: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {/* Add New Project Card */}
              <form onSubmit={handleAddNewProject} className={`p-4 border space-y-3 ${
                isDark ? 'bg-[#0E0E0E] border-white/10' : 'bg-neutral-50 border-black/10'
              }`}>
                <h3 className="font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-[#FF4E00]" />
                  <span>ADD DOSSIER ITEM</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase text-neutral-400">Project Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. HYPERCANVAS"
                      value={newProjectForm.title}
                      onChange={(e) => setNewProjectForm({ ...newProjectForm, title: e.target.value })}
                      className={`w-full px-3 py-1.5 border ${
                        isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-black/10'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-400">Category</label>
                    <select
                      value={newProjectForm.category}
                      onChange={(e) => setNewProjectForm({ ...newProjectForm, category: e.target.value as any })}
                      className={`w-full px-3 py-1.5 border uppercase ${
                        isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-black/10'
                      }`}
                    >
                      <option value="fullstack">Full-Stack</option>
                      <option value="ai">AI & Systems</option>
                      <option value="cloud">Cloud & Infra</option>
                      <option value="frontend">Frontend & UI</option>
                      <option value="opensource">Open Source</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase text-neutral-400">Tagline / Short Summary *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Distributed collaborative workspace with CRDT sync"
                    value={newProjectForm.tagline}
                    onChange={(e) => setNewProjectForm({ ...newProjectForm, tagline: e.target.value })}
                    className={`w-full px-3 py-1.5 border ${
                      isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-black/10'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase text-neutral-400">Description *</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Detailed explanation of the project, architecture, and impact..."
                    value={newProjectForm.description}
                    onChange={(e) => setNewProjectForm({ ...newProjectForm, description: e.target.value })}
                    className={`w-full px-3 py-1.5 border resize-none ${
                      isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-black/10'
                    }`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase text-neutral-400">Tech Tags (comma-separated)</label>
                    <input
                      type="text"
                      placeholder="React, TypeScript, Go, PostgreSQL"
                      value={rawTags}
                      onChange={(e) => setRawTags(e.target.value)}
                      className={`w-full px-3 py-1.5 border ${
                        isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-black/10'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-400">Impact Metric Badge</label>
                    <input
                      type="text"
                      placeholder="e.g. <15ms latency across 10k users"
                      value={newProjectForm.impactMetric}
                      onChange={(e) => setNewProjectForm({ ...newProjectForm, impactMetric: e.target.value })}
                      className={`w-full px-3 py-1.5 border ${
                        isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-black/10'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase text-neutral-400">Live Demo URL</label>
                    <input
                      type="text"
                      placeholder="https://..."
                      value={newProjectForm.liveUrl}
                      onChange={(e) => setNewProjectForm({ ...newProjectForm, liveUrl: e.target.value })}
                      className={`w-full px-3 py-1.5 border ${
                        isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-black/10'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase text-neutral-400">GitHub Source Code URL</label>
                    <input
                      type="text"
                      placeholder="https://github.com/..."
                      value={newProjectForm.githubUrl}
                      onChange={(e) => setNewProjectForm({ ...newProjectForm, githubUrl: e.target.value })}
                      className={`w-full px-3 py-1.5 border ${
                        isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-white border-black/10'
                      }`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#FF4E00] text-black font-bold uppercase tracking-wider hover:bg-[#ff6a26] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>ADD TO DOSSIER</span>
                </button>
              </form>

              {/* Current Projects List */}
              <div className="space-y-3">
                <h4 className="font-bold uppercase tracking-wider text-neutral-400">
                  CURRENT DOSSIER ITEMS ({data.projects.length})
                </h4>

                <div className="space-y-2">
                  {data.projects.map((proj) => (
                    <div
                      key={proj.id}
                      className={`p-3 border flex items-center justify-between gap-3 ${
                        isDark ? 'bg-[#0E0E0E] border-white/10' : 'bg-neutral-50 border-black/10'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-bold uppercase text-white truncate">{proj.title}</p>
                        <p className="text-[11px] text-neutral-400 truncate">{proj.tagline}</p>
                      </div>

                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="p-1.5 text-rose-400 hover:bg-rose-500/20 transition-colors"
                        title="Delete project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className={`p-4 border-t flex justify-end ${
          isDark ? 'bg-[#080808] border-white/10' : 'bg-neutral-50 border-black/10'
        }`}>
          <button
            onClick={() => setIsCustomizerOpen(false)}
            className="px-6 py-2 bg-[#FF4E00] text-black font-bold uppercase tracking-wider hover:bg-[#ff6a26] transition-colors"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
};
