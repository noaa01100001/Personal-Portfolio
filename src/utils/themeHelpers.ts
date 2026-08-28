import { AccentColor } from '../types';

export const getAccentStyles = (accent: AccentColor, isDark: boolean = true) => {
  switch (accent) {
    case 'burgundy':
    case 'orange': // fallback/alias to burgundy
      return {
        badgeBg: isDark ? 'bg-[#9E1B38]/15 text-[#D4375E] border-[#9E1B38]/40' : 'bg-[#9E1B38]/10 text-[#800020] border-[#9E1B38]/30',
        textGradient: isDark ? 'from-white via-[#FAFAFA] to-neutral-400' : 'from-black via-neutral-900 to-neutral-700',
        primaryBtn: isDark ? 'bg-[#9E1B38] hover:bg-[#b32548] text-white font-bold uppercase tracking-wider' : 'bg-[#800020] hover:bg-[#9E1B38] text-white font-bold uppercase tracking-wider',
        secondaryBtn: isDark ? 'bg-white/5 hover:bg-white/10 text-white border-white/20' : 'bg-black/5 hover:bg-black/10 text-black border-black/20',
        cardGlow: 'hover:border-[#9E1B38]/60',
        accentBorder: 'border-[#9E1B38]',
        accentText: isDark ? 'text-[#D4375E]' : 'text-[#800020]',
        accentRing: 'focus:ring-[#9E1B38]/40',
        tagBg: isDark ? 'bg-white/5 text-neutral-300 border-white/15' : 'bg-black/5 text-neutral-700 border-black/15'
      };
    case 'emerald':
      return {
        badgeBg: isDark ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-emerald-50 text-emerald-700 border-emerald-200',
        textGradient: isDark ? 'from-white via-[#FAFAFA] to-neutral-400' : 'from-black via-neutral-900 to-neutral-700',
        primaryBtn: isDark ? 'bg-emerald-400 hover:bg-emerald-300 text-black font-bold uppercase tracking-wider' : 'bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider',
        secondaryBtn: isDark ? 'bg-white/5 hover:bg-white/10 text-white border-white/20' : 'bg-black/5 hover:bg-black/10 text-black border-black/20',
        cardGlow: 'hover:border-emerald-500/50',
        accentBorder: 'border-emerald-400',
        accentText: isDark ? 'text-emerald-400' : 'text-emerald-600',
        accentRing: 'focus:ring-emerald-500/40',
        tagBg: isDark ? 'bg-white/5 text-neutral-300 border-white/15' : 'bg-black/5 text-neutral-700 border-black/15'
      };
    case 'cyan':
      return {
        badgeBg: isDark ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : 'bg-cyan-50 text-cyan-700 border-cyan-200',
        textGradient: isDark ? 'from-white via-[#FAFAFA] to-neutral-400' : 'from-black via-neutral-900 to-neutral-700',
        primaryBtn: isDark ? 'bg-cyan-400 hover:bg-cyan-300 text-black font-bold uppercase tracking-wider' : 'bg-cyan-600 hover:bg-cyan-700 text-white font-bold uppercase tracking-wider',
        secondaryBtn: isDark ? 'bg-white/5 hover:bg-white/10 text-white border-white/20' : 'bg-black/5 hover:bg-black/10 text-black border-black/20',
        cardGlow: 'hover:border-cyan-500/50',
        accentBorder: 'border-cyan-400',
        accentText: isDark ? 'text-cyan-400' : 'text-cyan-600',
        accentRing: 'focus:ring-cyan-500/40',
        tagBg: isDark ? 'bg-white/5 text-neutral-300 border-white/15' : 'bg-black/5 text-neutral-700 border-black/15'
      };
    case 'violet':
      return {
        badgeBg: isDark ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' : 'bg-purple-50 text-purple-700 border-purple-200',
        textGradient: isDark ? 'from-white via-[#FAFAFA] to-neutral-400' : 'from-black via-neutral-900 to-neutral-700',
        primaryBtn: isDark ? 'bg-purple-400 hover:bg-purple-300 text-black font-bold uppercase tracking-wider' : 'bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider',
        secondaryBtn: isDark ? 'bg-white/5 hover:bg-white/10 text-white border-white/20' : 'bg-black/5 hover:bg-black/10 text-black border-black/20',
        cardGlow: 'hover:border-purple-500/50',
        accentBorder: 'border-purple-400',
        accentText: isDark ? 'text-purple-400' : 'text-purple-600',
        accentRing: 'focus:ring-purple-500/40',
        tagBg: isDark ? 'bg-white/5 text-neutral-300 border-white/15' : 'bg-black/5 text-neutral-700 border-black/15'
      };
    case 'amber':
      return {
        badgeBg: isDark ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' : 'bg-amber-50 text-amber-700 border-amber-200',
        textGradient: isDark ? 'from-white via-[#FAFAFA] to-neutral-400' : 'from-black via-neutral-900 to-neutral-700',
        primaryBtn: isDark ? 'bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider' : 'bg-amber-600 hover:bg-amber-700 text-white font-bold uppercase tracking-wider',
        secondaryBtn: isDark ? 'bg-white/5 hover:bg-white/10 text-white border-white/20' : 'bg-black/5 hover:bg-black/10 text-black border-black/20',
        cardGlow: 'hover:border-amber-500/50',
        accentBorder: 'border-amber-400',
        accentText: isDark ? 'text-amber-400' : 'text-amber-600',
        accentRing: 'focus:ring-amber-500/40',
        tagBg: isDark ? 'bg-white/5 text-neutral-300 border-white/15' : 'bg-black/5 text-neutral-700 border-black/15'
      };
    case 'indigo':
    default:
      return {
        badgeBg: isDark ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' : 'bg-indigo-50 text-indigo-700 border-indigo-200',
        textGradient: isDark ? 'from-white via-[#FAFAFA] to-neutral-400' : 'from-black via-neutral-900 to-neutral-700',
        primaryBtn: isDark ? 'bg-indigo-400 hover:bg-indigo-300 text-black font-bold uppercase tracking-wider' : 'bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase tracking-wider',
        secondaryBtn: isDark ? 'bg-white/5 hover:bg-white/10 text-white border-white/20' : 'bg-black/5 hover:bg-black/10 text-black border-black/20',
        cardGlow: 'hover:border-indigo-500/50',
        accentBorder: 'border-indigo-400',
        accentText: isDark ? 'text-indigo-400' : 'text-indigo-600',
        accentRing: 'focus:ring-indigo-500/40',
        tagBg: isDark ? 'bg-white/5 text-neutral-300 border-white/15' : 'bg-black/5 text-neutral-700 border-black/15'
      };
  }
};
