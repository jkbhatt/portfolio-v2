export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  type: "project" | "internship" | "freelance";
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "fullstack-developer-projects",
    role: "Full Stack Developer",
    organization: "Independent Projects",
    type: "project",
    startDate: "2025-08",
    current: true,
    description:
      "Designed and built three production-style full-stack applications end-to-end — from database schema and REST API architecture to authentication, RBAC, and deployment — using the MERN stack and Next.js.",
    highlights: [
      "Architected JWT-based authentication and role-based access control systems across multiple applications",
      "Built and deployed RESTful APIs with Express.js and MongoDB, handling real-time features via Socket.io",
      "Deployed full-stack applications with Vercel (frontend) and Render (backend) using CI/CD workflows",
      "Practiced data structures & algorithms in C++ daily, focused on array and string problem patterns",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
      "JWT",
    ],
  },
];