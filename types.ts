
export interface Achievement {
  id: string;
  title: string;
  metric: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Course {
  id: string;
  title: string;
  price: string;
  image: string;
  category: 'Document' | 'Course' | 'Workshop';
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ProjectDetail {
  title: string;
  results: string;
  videoUrl: string;
  image: string;
  isVertical?: boolean;
  brand?: string;
  subItems?: { name: string; image: string }[];
}

export interface BrandLogo {
  id: string;
  name: string;
  src: string;
  note: string;
  fill?: boolean;
}

export interface LogoRole {
  title: string;
  time: string;
}

export interface LogoGroup {
  company: string;
  roles: LogoRole[];
  logos: BrandLogo[];
  featuredImage?: string;
}

export interface ChecklistItem {
  title: string;
  reason: string;
}

export interface MentorDetail {
  name: string;
  role: string;
  story: string;
  image: string;
}

export interface Offering {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}


export type SectionType = 'default' | 'grid' | 'timeline' | 'pricing' | 'comparison' | 'faq' | 'checklist' | 'intro' | 'text';

export interface ServiceSection {
  title: string;
  description?: string;
  type?: SectionType;
  image?: string;
  items?: {
    title?: string;
    subtitle?: string;
    description?: string;
    icon?: string;
    image?: string;
    price?: string;
    tags?: string[];
    isFeatured?: boolean;
    lists?: string[]; // For checklists inside items
    pros?: string[];
    cons?: string[];
  }[];
  gallery?: string[];
  videos?: { url: string; isVertical?: boolean }[];
  subSections?: ServiceSection[];
  note?: {
    title: string;
    items: string[];
  };
}

export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  description: string; // Full HTML content
  gallery: string[];
  videos: string[];
  thumbnail: string;
  detailedServices?: ServiceSection[];
}
