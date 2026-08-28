import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, ProjectItem, ThemeMode, AccentColor, Language } from '../types';
import { initialPortfolioData } from '../data/portfolioData';
import { translations, localizedPortfolioData, TranslationStrings } from '../i18n/translations';

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

  // Language / i18n
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStrings;

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

const STORAGE_KEY = 'ainhoa_castillo_portfolio_v12';
const THEME_KEY = 'portfolio_theme_mode';
const ACCENT_KEY = 'portfolio_accent_color';
const LANG_KEY = 'portfolio_active_language';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && (saved === 'es' || saved === 'en' || saved === 'fr')) {
        return saved as Language;
      }
    } catch {
      // ignore
    }
    return 'es';
  });

  const [customData, setCustomData] = useState<Partial<Record<Language, PortfolioData>>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return {};
  });

  const activeData: PortfolioData = customData[language] || localizedPortfolioData[language] || initialPortfolioData;

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
      if (saved === 'orange') return 'burgundy';
      if (saved && ['burgundy', 'indigo', 'emerald', 'cyan', 'violet', 'amber'].includes(saved)) {
        return saved as AccentColor;
      }
    } catch {
      // ignore
    }
    return 'burgundy';
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const t = translations[language] || translations.es;

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // ignore
    }
    const langNames: Record<Language, string> = {
      es: 'Español',
      en: 'English',
      fr: 'Français'
    };
    showToast(`${t.nav.language}: ${langNames[lang]}`);
  };

  // Sync custom data to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customData));
    } catch (e) {
      console.warn('Failed to save portfolio state to localStorage', e);
    }
  }, [customData]);

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
    setCustomData(prev => ({
      ...prev,
      [language]: {
        ...(prev[language] || localizedPortfolioData[language] || initialPortfolioData),
        profile
      }
    }));
    showToast(t.toasts.profileSaved);
  };

  const updateProjects = (projects: ProjectItem[]) => {
    setCustomData(prev => ({
      ...prev,
      [language]: {
        ...(prev[language] || localizedPortfolioData[language] || initialPortfolioData),
        projects
      }
    }));
  };

  const addProject = (project: ProjectItem) => {
    const current = activeData.projects;
    updateProjects([project, ...current]);
    showToast(`${t.toasts.projectAdded}: "${project.title}"`);
  };

  const editProject = (updated: ProjectItem) => {
    const current = activeData.projects;
    updateProjects(current.map(p => (p.id === updated.id ? updated : p)));
    showToast(`${t.toasts.projectUpdated}: "${updated.title}"`);
  };

  const deleteProject = (id: string) => {
    const current = activeData.projects;
    updateProjects(current.filter(p => p.id !== id));
    showToast(t.toasts.projectRemoved);
  };

  const resetToDefaults = () => {
    setCustomData(prev => {
      const copy = { ...prev };
      delete copy[language];
      return copy;
    });
    showToast(t.toasts.resetDone);
  };

  return (
    <PortfolioContext.Provider
      value={{
        data: activeData,
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
        language,
        setLanguage,
        t,
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
