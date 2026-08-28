import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { getAccentStyles } from '../utils/themeHelpers';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Globe,
  Radio,
  ArrowUpRight
} from 'lucide-react';

export const ProfilesSection: React.FC = () => {
  const { data, theme, accent, showToast, t } = usePortfolio();
  const isDark = theme === 'dark';
  const accentStyles = getAccentStyles(accent, isDark);
  const { profile } = data;

  const [copiedEmail, setCopiedEmail] = useState(false);
  
  // Contact Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Consulting & Technical Architecture',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    showToast(t.toast.emailCopied);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast(t.toast.fillRequired);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      showToast(t.toast.messageSent);
      setFormData({
        name: '',
        email: '',
        subject: 'Consulting & Technical Architecture',
        message: ''
      });
      setTimeout(() => setSubmittedSuccess(false), 5000);
    }, 900);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="w-4 h-4 text-[#9E1B38]" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4 text-[#9E1B38]" />;
      case 'twitter':
        return <Twitter className="w-4 h-4 text-[#9E1B38]" />;
      case 'email':
        return <Mail className="w-4 h-4 text-[#9E1B38]" />;
      case 'phone':
        return <Phone className="w-4 h-4 text-[#9E1B38]" />;
      case 'blog':
        return <Radio className="w-4 h-4 text-[#9E1B38]" />;
      default:
        return <Globe className="w-4 h-4 text-[#9E1B38]" />;
    }
  };

  return (
    <section id="profiles" className={`py-20 md:py-24 border-b ${isDark ? 'border-white/10 bg-[#050505]' : 'border-black/10 bg-[#FAFAFA]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.35em] text-[#9E1B38] font-bold mb-2">
              {t.profiles.sectionTag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase italic">
              {t.profiles.title1} <br className="hidden sm:inline" />
              <span className="text-neutral-500">{t.profiles.title2}</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest max-w-xs text-left md:text-right">
            {t.profiles.subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Professional Profile Cards (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-neutral-500 mb-4">
              {t.profiles.verifiedIdentities}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.id}
                  id={`profile-card-${link.id}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-5 sm:p-6 border flex flex-col justify-between transition-all duration-200 min-h-[140px] ${
                    isDark
                      ? 'bg-[#080808] border-white/10 hover:border-white/30'
                      : 'bg-white border-black/10 hover:border-black/30'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 font-mono text-[10px] text-neutral-500">
                      <div className="flex items-center gap-2">
                        {getPlatformIcon(link.platform)}
                        <span className="uppercase">{link.platform}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-[#9E1B38] transition-colors" />
                    </div>

                    <h4 className="font-bold text-base uppercase tracking-tight italic font-sans group-hover:text-[#9E1B38] transition-colors">
                      {link.label}
                    </h4>
                    <p className="text-xs font-mono text-neutral-400 truncate mt-1">
                      {link.username}
                    </p>
                  </div>

                  <p className={`text-xs mt-4 leading-relaxed font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {link.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Quick Email Direct Copy Box */}
            <div className={`p-5 sm:p-6 border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-6 ${
              isDark ? 'bg-[#080808] border-white/10' : 'bg-white border-black/10'
            }`}>
              <div className="flex items-center gap-3.5 w-full sm:w-auto">
                <div className="p-3 border border-[#9E1B38]/30 text-[#9E1B38] bg-[#9E1B38]/5 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{t.profiles.primaryContact}</div>
                  <div className="text-xs sm:text-sm font-mono font-bold truncate text-white">{profile.email}</div>
                </div>
              </div>

              <button
                id="copy-email-btn"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono uppercase tracking-wider border border-white/20 hover:border-[#9E1B38] hover:text-[#9E1B38] transition-all min-h-[44px]"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#9E1B38]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? t.profiles.copied : t.profiles.copyAddress}</span>
              </button>
            </div>

          </div>

          {/* Contact Message Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className={`p-5 sm:p-8 border ${
              isDark ? 'bg-[#080808] border-white/10' : 'bg-white border-black/10'
            }`}>
              <div className="pb-4 mb-6 border-b border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="font-bold uppercase tracking-widest text-[#9E1B38]">
                  {t.profiles.directDispatch}
                </span>
                <span className="text-neutral-500">{t.profiles.secureDispatch}</span>
              </div>

              {submittedSuccess ? (
                <div className="p-8 border border-[#9E1B38]/40 bg-[#9E1B38]/5 text-center space-y-3 font-mono">
                  <div className="w-10 h-10 border border-[#9E1B38] text-[#9E1B38] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold uppercase tracking-wider text-white">{t.profiles.transmissionRecorded}</h4>
                  <p className="text-xs text-neutral-400 font-light">
                    {t.profiles.transmissionRecordedDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                        {t.profiles.senderIdentifier}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="NAME / ORG"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border focus:outline-none focus:border-[#9E1B38] uppercase placeholder:text-neutral-600 ${
                          isDark
                            ? 'bg-[#0E0E0E] border-white/10 text-white'
                            : 'bg-neutral-50 border-black/10 text-black'
                        }`}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                        {t.profiles.returnAddress}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="EMAIL@DOMAIN.COM"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 border focus:outline-none focus:border-[#9E1B38] uppercase placeholder:text-neutral-600 ${
                          isDark
                            ? 'bg-[#0E0E0E] border-white/10 text-white'
                            : 'bg-neutral-50 border-black/10 text-black'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                      {t.profiles.dispatchSubject}
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-3.5 py-2.5 border focus:outline-none focus:border-[#9E1B38] uppercase ${
                        isDark
                          ? 'bg-[#0E0E0E] border-white/10 text-white'
                          : 'bg-neutral-50 border-black/10 text-black'
                      }`}
                    >
                      <option value="Consulting & Technical Architecture">Software Engineering / QA Opportunity</option>
                      <option value="Full-Stack Collaboration">Full-Stack Collaboration</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-wider text-neutral-400 mb-1.5">
                      {t.profiles.messageBody}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="ENTER COMMUNICATION TEXT..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 border focus:outline-none focus:border-[#9E1B38] resize-none uppercase placeholder:text-neutral-600 ${
                        isDark
                          ? 'bg-[#0E0E0E] border-white/10 text-white'
                          : 'bg-neutral-50 border-black/10 text-black'
                      }`}
                    />
                  </div>

                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#9E1B38] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#b32548] transition-colors min-h-[44px]"
                  >
                    {isSubmitting ? (
                      <span>{t.profiles.transmitting}</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{t.profiles.dispatchMessage}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
