export type SkillProficiency = 'Expert' | 'Advanced' | 'Proficient' | 'Exploring';

export interface SkillItem {
  name: string;
  category: string;
  level: SkillProficiency;
  years: string;
  iconName?: string;
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export type ProjectCategory = 'all' | 'fullstack' | 'ai' | 'cloud' | 'frontend' | 'opensource';

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'fullstack' | 'ai' | 'cloud' | 'frontend' | 'opensource';
  tags: string[];
  image: string;
  featured: boolean;
  year: string;
  impactMetric: string;
  liveUrl?: string;
  githubUrl?: string;
  architectureHighlights: string[];
  keyFeatures: string[];
  challengesSolved: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
  details: string[];
}

export interface SocialLink {
  id: string;
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'phone' | 'discord' | 'website' | 'blog';
  label: string;
  username: string;
  url: string;
  description: string;
  featured: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  sublabel: string;
}

export interface PersonalProfile {
  name: string;
  pronouns: string;
  role: string;
  headline: string;
  location: string;
  availability: string;
  email: string;
  avatarUrl: string;
  bioParagraphs: string[];
  coreValues: { title: string; description: string; icon: string }[];
  stats: StatItem[];
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  profile: PersonalProfile;
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  educations: EducationItem[];
}

export type ThemeMode = 'dark' | 'light';
export type AccentColor = 'burgundy' | 'indigo' | 'emerald' | 'cyan' | 'violet' | 'amber' | 'orange';
export type Language = 'es' | 'en' | 'fr';
