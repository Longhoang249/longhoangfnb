
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

export interface ServiceSection {
  title: string;
  description: string;
  gallery?: string[];
  videos?: { url: string; isVertical?: boolean }[];
  subSections?: ServiceSection[];
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
