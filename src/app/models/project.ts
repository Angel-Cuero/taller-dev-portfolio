export interface Project {
  id: string;
  title: string;
  category: 'Angular' | 'Flutter' | 'Arquitectura';
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  repositoryUrl: string;
  demoUrl: string;
  accent: string;
  icon: string;
  number: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export interface ProfileLink {
  label: string;
  url: string;
  icon: string;
}
