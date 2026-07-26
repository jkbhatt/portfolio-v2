// ============================================
// PROJECT TYPES
// ============================================

export type ProjectStatus = "live" | "in-progress" | "archived";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  coverImage: string;
  images: string[];
  techStack: string[];
  status: ProjectStatus;
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  category: "fullstack" | "frontend" | "backend" | "dsa";
  tags: string[];
  metrics?: ProjectMetric[];
  timeline: {
    start: string;
    end: string;
  };
  architecture?: string;
  challenges?: string[];
  solutions?: string[];
  futurePlans?: string[];
}

// ============================================
// SKILL TYPES
// ============================================

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "languages"
  | "cloud"
  | "devops"
  | "testing"
  | "tools";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  icon: string; // lucide icon name
  experienceLevel: "beginner" | "intermediate" | "advanced";
  description: string;
}

// ============================================
// EXPERIENCE / TIMELINE TYPES
// ============================================

export type TimelineType = "education" | "project" | "achievement" | "career";

export interface TimelineItem {
  id: string;
  type: TimelineType;
  title: string;
  organization: string;
  description: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
}

// ============================================
// CERTIFICATE TYPES
// ============================================

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  credentialUrl?: string;
  imageUrl: string;
}

// ============================================
// CODING PROFILE TYPES
// ============================================

export interface CodingProfile {
  id: string;
  platform: "leetcode" | "gfg" | "hackerrank" | "codechef" | "codeforces";
  username: string;
  profileUrl: string;
  problemsSolved?: number;
  rating?: number;
  badge?: string;
}

// ============================================
// SOCIAL LINKS
// ============================================

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

// ============================================
// NAVIGATION
// ============================================

export interface NavItem {
  id: string;
  label: string;
  href: string;
}