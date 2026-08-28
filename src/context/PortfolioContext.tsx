import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, ProjectItem, ThemeMode, AccentColor } from '../types';
import { initialPortfolioData } from '../data/portfolioData';

interface PortfolioContextType {
  data: PortfolioData;
  updateProfile: (profile: PortfolioData['profile']) => void;
  updateProjects: (projects: ProjectItem[]) => void;
  addProject: (project: ProjectItem) => void;
  editProject: (project: ProjectItem) => void;
  deleteProject: (id: string) => void;
  resetToDefaults: () => void;
  
  // Theme
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;

  // Active Modals & Views
  selectedProject: ProjectItem | null;
  setSelectedProject: (project: ProjectItem | null) => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  isResumeOpen: boolean;
  setIsResumeOpen: (open: boolean) => void;

  // Toast feedback
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const STORAGE_KEY = 'ainhoa_castillo_portfolio_v10';
const THEME_KEY = 'portfolio_theme_mode';
const ACCENT_KEY = 'portfolio_accent_color';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return initialPortfolioData;
  });

  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // ignore
    }
    return 'dark';
  });

  const [accent, setAccent] = useState<AccentColor>(() => {
    try {
      const saved = localStorage.getItem(ACCENT_KEY);
      if (saved && ['orange', 'indigo', 'emerald', 'cyan', 'violet', 'amber'].includes(saved)) {
        return saved as AccentColor;
      }
    } catch {
      // ignore
    }
    return 'orange';
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync data to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save portfolio state to localStorage', e);
    }
  }, [data]);

  // Sync theme
  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme);
      if (theme === 'light') {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('bg-[#050505]', 'text-[#FAFAFA]', 'bg-slate-950', 'text-slate-100');
        document.body.classList.add('bg-[#FAFAFA]', 'text-[#0A0A0A]');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        document.body.classList.add('bg-[#050505]', 'text-[#FAFAFA]');
        document.body.classList.remove('bg-[#FAFAFA]', 'text-[#0A0A0A]', 'bg-slate-50', 'text-slate-900');
      }
    } catch {
      // ignore
    }
  }, [theme]);

  // Sync accent
  useEffect(() => {
    try {
      localStorage.setItem(ACCENT_KEY, accent);
    } catch {
      // ignore
    }
  }, [accent]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3500);
  };

  const updateProfile = (profile: PortfolioData['profile']) => {
    setData(prev => ({ ...prev, profile }));
    showToast('Profile information updated');
  };

  const updateProjects = (projects: ProjectItem[]) => {
    setData(prev => ({ ...prev, projects }));
  };

  const addProject = (project: ProjectItem) => {
    setData(prev => ({ ...prev, projects: [project, ...prev.projects] }));
    showToast(`Added project "${project.title}"`);
  };

  const editProject = (updated: ProjectItem) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => (p.id === updated.id ? updated : p))
    }));
    showToast(`Updated "${updated.title}"`);
  };

  const deleteProject = (id: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
    showToast('Project removed');
  };

  const resetToDefaults = () => {
    setData(initialPortfolioData);
    showToast('Portfolio reset to default template data');
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updateProfile,
        updateProjects,
        addProject,
        editProject,
        deleteProject,
        resetToDefaults,
        theme,
        setTheme,
        toggleTheme,
        accent,
        setAccent,
        selectedProject,
        setSelectedProject,
        isCustomizerOpen,
        setIsCustomizerOpen,
        isResumeOpen,
        setIsResumeOpen,
        toastMessage,
        showToast
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
