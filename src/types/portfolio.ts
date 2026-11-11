export interface ProjectSpec {
  label: string;
  value: string;
}

export interface MinimalProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  architecture: string;
  specs: ProjectSpec[];
  highlights: string[];
  tools: string[];
  githubUrl: string;
}

export interface FocusArea {
  id: string;
  code: string;
  title: string;
  description: string;
}

export interface EngineeringPrinciple {
  label: string;
  detail: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; tag?: string }[];
}

export interface DirectoryItem {
  channel: string;
  address: string;
  href?: string;
  note: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  institution: string;
  department: string;
  batch: string;
  location: string;
  email: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  resumeUrl: string;
  about: string[];
  focusAreas: FocusArea[];
  principles: EngineeringPrinciple[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  major: string;
  duration: string;
  description: string;
  relevantCoursework: string[];
  initiatives: string[];
}

