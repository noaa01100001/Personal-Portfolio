import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import {
  MapPin,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Phone,
  FileText,
  ExternalLink,
  Code2,
  CheckCircle2
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { data, theme, accent, setIsResumeOpen } = usePortfolio();
  const isDark = theme === 'dark';
  const accentStyles = getAccentStyles(accent, isDark);
  const { profile } = data;

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      case 'email':
        return <Mail className="w-4 h-4" />;
      case 'phone':
        return <Phone className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  // Splitting name for dramatic editorial styling
  const nameParts = profile.name.split(' ');
  const firstName = nameParts[0] || 'AINHOA';
  const lastName = nameParts.slice(1).join(' ') || 'CASTILLO GARAY';

  return (
    <section
      id="hero"
      className={`relative pt-28 pb-20 md:pt-36 md:pb-28 border-b ${
        isDark ? 'border-white/10' : 'border-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Editorial Eyebrow Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF4E00] animate-pulse" />
            <span className={`uppercase tracking-[0.25em] ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              {profile.availability}
            </span>
          </div>
          <div className="flex items-center gap-4 text-neutral-500">
            <span className="uppercase tracking-widest">{profile.location}</span>
            <span>•</span>
            <span className="uppercase tracking-widest">ARCHIVE VOL. 26</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-12">
          
          {/* Big Editorial Display Name (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-1">
              <h1 className="text-6xl sm:text-7xl lg:text-[100px] leading-[0.85] font-black tracking-tighter uppercase italic select-none">
                <span className="block">{firstName}</span>
                <span className={`block ${accentStyles.accentText}`}>{lastName}</span>
              </h1>
            </div>

            <p className={`text-xs uppercase tracking-[0.35em] font-mono mt-8 font-bold ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              {profile.role}
            </p>

            {/* Quick Profile Links Strip */}
            <div className="pt-8 flex items-center gap-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500">
                DISPATCH //
              </span>
              <div className="flex items-center gap-2">
                {profile.socialLinks.filter(s => s.featured).map((social) => (
                  <a
                    key={social.id}
                    id={`hero-social-${social.id}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 border transition-all ${
                      isDark
                        ? 'bg-[#111] border-white/10 text-neutral-300 hover:border-[#FF4E00] hover:text-white'
                        : 'bg-white border-black/10 text-neutral-700 hover:border-[#FF4E00] hover:text-black'
                    }`}
                    title={`${social.label}: ${social.username}`}
                    aria-label={social.label}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Editorial Bio & Pitch (Right 5 cols) */}
          <div className={`lg:col-span-5 flex flex-col justify-center space-y-6 lg:border-l pl-0 lg:pl-10 ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}>
            <div className="w-12 h-1 bg-[#FF4E00]" />
            
            <p className={`text-base sm:text-lg leading-relaxed font-light ${
              isDark ? 'text-neutral-300' : 'text-neutral-800'
            }`}>
              {profile.headline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-view-projects-btn"
                href="#projects"
                className={`inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold transition-all ${
                  isDark
                    ? 'bg-[#FF4E00] hover:bg-[#ff6524] text-black'
                    : 'bg-[#FF4E00] hover:bg-[#ff6524] text-white'
                }`}
              >
                <span>Explore Archive</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-view-resume-btn"
                onClick={() => setIsResumeOpen(true)}
                className={`inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-mono border transition-all ${
                  isDark
                    ? 'border-white/30 text-white hover:bg-white hover:text-black'
                    : 'border-black/30 text-black hover:bg-black hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4 text-[#FF4E00]" />
                <span>View CV / Resume</span>
              </button>
            </div>

            {/* Quick Specs Inset */}
            <div className={`p-4 border text-xs font-mono space-y-1.5 ${
              isDark ? 'bg-[#111] border-white/10 text-neutral-400' : 'bg-neutral-100 border-black/10 text-neutral-700'
            }`}>
              <div className="flex items-center justify-between text-[11px] text-neutral-500 pb-1 border-b border-white/5">
                <span>SYSTEM SPECIFICATION</span>
                <span className="text-[#FF4E00]">READY</span>
              </div>
              <div className="flex items-center justify-between">
                <span>FOCUS:</span>
                <span className="text-white font-medium">QA Automation & Multiplatform</span>
              </div>
              <div className="flex items-center justify-between">
                <span>STACK:</span>
                <span className="text-white font-medium">Cypress, Selenium, Flutter, Vue, .NET</span>
              </div>
            </div>

          </div>

        </div>

        {/* High-Level Impact Stats Grid Strip */}
        <div className={`pt-10 border-t grid grid-cols-2 md:grid-cols-4 gap-0 border-collapse ${
          isDark ? 'border-white/10' : 'border-black/10'
        }`}>
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className={`p-6 border-b md:border-b-0 border-r last:border-r-0 transition-colors ${
                isDark
                  ? 'border-white/10 bg-[#080808] hover:bg-[#111]'
                  : 'border-black/10 bg-neutral-50 hover:bg-white'
              }`}
            >
              <div className="text-xs font-mono text-neutral-500 mb-1">
                INDEX 0{idx + 1} //
              </div>
              <div className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#FF4E00]">
                {stat.value}
              </div>
              <div className={`text-xs uppercase tracking-wider font-bold mt-1.5 ${
                isDark ? 'text-neutral-200' : 'text-neutral-900'
              }`}>
                {stat.label}
              </div>
              <div className="text-[11px] font-mono mt-0.5 text-neutral-500">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
