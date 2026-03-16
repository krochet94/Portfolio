export interface ProjectItem {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog?: boolean;
}

export interface TechItem {
  icon: string;
  desc: string;
}

export interface SocialLinkItem {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactContent {
  cvUrl: string;
  location: string;
  email: string;
  phone: string;
}

export interface AboutContent {
  imgPath: string;
  bioParagraphs: string[];
}

export interface PortfolioContent {
  typewriterStrings: string[];
  projects: ProjectItem[];
  skillset: TechItem[];
  tools: TechItem[];
  socialLinks: SocialLinkItem[];
  contact: ContactContent;
  about: AboutContent;
}
