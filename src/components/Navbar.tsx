import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import {
  Sun,
  Moon,
  FileText,
  SlidersHorizontal,
  Menu,
  X,
  ExternalLink,
  Code2,
  Sparkles
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { data, theme, toggleTheme, accent, setAccent, setIsResumeOpen, setIsCustomizerOpen } = usePortfolio();
  const isDark = theme === 'dark';
  const accentStyles = getAccentStyles(accent, isDark);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Profiles & Contact', href: '#profiles' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'profiles'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const accents: Array<'orange' | 'indigo' | 'emerald' | 'cyan' | 'violet' | 'amber'> = [
    'orange',
    'indigo',
    'emerald',
    'cyan',
    'violet',
    'amber'
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10'
            : 'bg-[#FAFAFA]/90 backdrop-blur-md border-b border-black/10'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Personal Monogram */}
          <a
            id="nav-logo-link"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div
              className={`w-9 h-9 flex items-center justify-center font-mono font-bold text-xs border transition-colors ${
                isDark
                  ? 'bg-[#111] border-white/15 text-white group-hover:border-[#FF4E00]'
                  : 'bg-white border-black/15 text-black group-hover:border-[#FF4E00]'
              }`}
            >
              <span className="text-[#FF4E00] font-black">
                {data.profile.name
                  .split(' ')
                  .map((w) => w[0])
                  .filter(Boolean)
                  .join('')
                  .slice(0, 3)
                  .toUpperCase() || 'ACG'}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.35em] font-bold">
                {data.profile.name}
              </span>
              <span className={`text-[10px] uppercase tracking-[0.25em] font-mono ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                Portfolio—2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-widest font-medium">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  id={`nav-link-${sectionId}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? isDark
                        ? 'text-white font-bold'
                        : 'text-black font-bold'
                      : isDark
                      ? 'text-neutral-500 hover:text-white'
                      : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF4E00]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Controls: Theme, Resume, Customizer */}
          <div className="hidden md:flex items-center gap-3">
            {/* Color Accent Picker */}
            <div className={`flex items-center gap-1.5 px-2 py-1 border ${isDark ? 'bg-[#111] border-white/10' : 'bg-neutral-100 border-black/10'}`}>
              {accents.map((acc) => (
                <button
                  key={acc}
                  id={`accent-btn-${acc}`}
                  onClick={() => setAccent(acc)}
                  title={`Set accent color: ${acc}`}
                  className={`w-3.5 h-3.5 rounded-full transition-transform ${
                    acc === 'orange'
                      ? 'bg-[#FF4E00]'
                      : acc === 'indigo'
                      ? 'bg-indigo-500'
                      : acc === 'emerald'
                      ? 'bg-emerald-400'
                      : acc === 'cyan'
                      ? 'bg-cyan-400'
                      : acc === 'violet'
                      ? 'bg-purple-500'
                      : 'bg-amber-400'
                  } ${accent === acc ? 'scale-125 ring-2 ring-white/70' : 'opacity-50 hover:opacity-100'}`}
                />
              ))}
            </div>

            {/* Dark/Light toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className={`p-2 border transition-colors ${
                isDark
                  ? 'bg-[#111] border-white/10 text-neutral-300 hover:border-white/30'
                  : 'bg-white border-black/10 text-neutral-700 hover:border-black/30'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              id="view-resume-nav-btn"
              onClick={() => setIsResumeOpen(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 border text-[10px] uppercase font-mono tracking-wider transition-all ${
                isDark
                  ? 'bg-transparent border-white/20 text-neutral-200 hover:border-white/50 hover:text-white'
                  : 'bg-transparent border-black/20 text-neutral-800 hover:border-black/50 hover:text-black'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#FF4E00]" />
              <span>Resume</span>
            </button>

            {/* Customize / Personalize Button */}
            <button
              id="customize-portfolio-btn"
              onClick={() => setIsCustomizerOpen(true)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all border ${
                isDark
                  ? 'bg-[#FF4E00] text-black border-[#FF4E00] font-bold hover:bg-[#ff6524]'
                  : 'bg-[#FF4E00] text-white border-[#FF4E00] font-bold hover:bg-[#ff6524]'
              }`}
              title="Personalize name, bio, links, and projects"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Customize</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-theme-toggle-btn"
              onClick={toggleTheme}
              className={`p-2 border ${
                isDark ? 'bg-[#111] border-white/10 text-neutral-300' : 'bg-white border-black/10 text-neutral-700'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 border ${
                isDark ? 'bg-[#111] border-white/10 text-neutral-200' : 'bg-white border-black/10 text-neutral-800'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className={`md:hidden border-b px-6 pt-4 pb-8 space-y-4 ${
            isDark ? 'bg-[#0A0A0A] border-white/10' : 'bg-white border-black/10 shadow-xl'
          }`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  id={`mobile-nav-link-${sectionId}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-xs uppercase tracking-widest font-medium border-l-2 ${
                    isActive
                      ? 'border-[#FF4E00] text-white font-bold bg-white/5'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              id="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsResumeOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono uppercase tracking-wider border border-white/20 text-neutral-200"
            >
              <FileText className="w-4 h-4 text-[#FF4E00]" />
              <span>View Full Resume / CV</span>
            </button>
            <button
              id="mobile-customize-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCustomizerOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono uppercase tracking-wider bg-[#FF4E00] text-black font-bold"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Customize Portfolio Information</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
