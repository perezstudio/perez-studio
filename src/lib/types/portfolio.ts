// Portfolio post types
export interface Technology {
  name: string;
  icon?: string;
  description?: string;
  featured?: boolean;
  version?: string;
  category?: 'frontend' | 'backend' | 'database' | 'tool' | 'language';
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  thumbnail?: string;
}

export interface ProjectLink {
  type: 'demo' | 'github' | 'design' | 'documentation';
  url: string;
  label?: string;
}

export interface PortfolioPost {
  title: string;
  description: string;
  slug: string;
  date: string;
  published: boolean;
  featured?: boolean;
  
  // Project specific
  technologies: Technology[];
  images: ProjectImage[];
  links: ProjectLink[];
  
  // Optional metadata
  client?: string;
  duration?: string;
  role?: string;
  team?: string[];
  status?: 'completed' | 'in-progress' | 'archived';
  
  // SEO
  tags?: string[];
  category?: string;
  excerpt?: string;
}

// Helper functions
export function getTechnologiesByCategory(technologies: Technology[]) {
  return technologies.reduce((acc, tech) => {
    const category = tech.category || 'other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);
}

export function getFeaturedTechnologies(technologies: Technology[]) {
  return technologies.filter(tech => tech.featured);
}
