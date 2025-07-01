export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  initials: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface CompanyStats {
  label: string;
  value: string;
  description: string;
}