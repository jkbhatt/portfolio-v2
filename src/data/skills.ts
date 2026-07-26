import { Skill } from "@/types";

export const skills: Skill[] = [
  // ============================================
  // LANGUAGES
  // ============================================
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    category: "languages",
    icon: "FileCode",
    experienceLevel: "advanced",
    description: "Core language for full-stack development, from DOM manipulation to Node.js backends.",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "languages",
    icon: "FileType",
    experienceLevel: "advanced",
    description: "Strict-mode typed development for scalable, maintainable applications.",
  },
  {
    id: "cpp",
    name: "C++",
    category: "languages",
    icon: "Braces",
    experienceLevel: "advanced",
    description: "Used for DSA practice — arrays, strings, sliding window, and optimization techniques.",
  },
  {
    id: "c",
    name: "C",
    category: "languages",
    icon: "Terminal",
    experienceLevel: "intermediate",
    description: "Foundational systems programming and data structures.",
  },
  {
    id: "python",
    name: "Python",
    category: "languages",
    icon: "FileCode2",
    experienceLevel: "intermediate",
    description: "Scripting and problem solving.",
  },
  {
    id: "php",
    name: "PHP",
    category: "languages",
    icon: "Code2",
    experienceLevel: "intermediate",
    description: "Backend development for server-rendered web applications.",
  },

  // ============================================
  // FRONTEND
  // ============================================
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    icon: "Layers",
    experienceLevel: "advanced",
    description: "App Router, server-side rendering, and full-stack React applications.",
  },
  {
    id: "react",
    name: "React.js",
    category: "frontend",
    icon: "Atom",
    experienceLevel: "advanced",
    description: "Component-driven UI development with hooks and context.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    icon: "Palette",
    experienceLevel: "advanced",
    description: "Utility-first responsive design system.",
  },
  {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    icon: "FileCode",
    experienceLevel: "advanced",
    description: "Semantic, accessible markup.",
  },
  {
    id: "css3",
    name: "CSS3",
    category: "frontend",
    icon: "Paintbrush",
    experienceLevel: "advanced",
    description: "Responsive layouts, animations, and design systems.",
  },

  // ============================================
  // BACKEND
  // ============================================
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    icon: "Server",
    experienceLevel: "advanced",
    description: "Server-side JavaScript runtime for scalable backend services.",
  },
  {
    id: "expressjs",
    name: "Express.js",
    category: "backend",
    icon: "Route",
    experienceLevel: "advanced",
    description: "RESTful API design, middleware, and route protection.",
  },
  {
    id: "socketio",
    name: "Socket.io",
    category: "backend",
    icon: "Radio",
    experienceLevel: "intermediate",
    description: "Real-time, bidirectional, event-based communication.",
  },

  // ============================================
  // DATABASE
  // ============================================
  {
    id: "mongodb",
    name: "MongoDB",
    category: "database",
    icon: "Database",
    experienceLevel: "advanced",
    description: "NoSQL document database with Mongoose ODM for schema modeling.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    icon: "Database",
    experienceLevel: "intermediate",
    description: "Relational database design and querying.",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "database",
    icon: "Database",
    experienceLevel: "intermediate",
    description: "Relational database management for structured data applications.",
  },

  // ============================================
  // TOOLS
  // ============================================
  {
    id: "git",
    name: "Git",
    category: "tools",
    icon: "GitBranch",
    experienceLevel: "advanced",
    description: "Version control and collaborative workflows.",
  },
  {
    id: "github",
    name: "GitHub",
    category: "tools",
    icon: "Github",
    experienceLevel: "advanced",
    description: "Repository hosting, CI workflows, and collaboration.",
  },
  {
    id: "postman",
    name: "Postman",
    category: "tools",
    icon: "Send",
    experienceLevel: "advanced",
    description: "API testing and endpoint documentation.",
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    icon: "Code",
    experienceLevel: "advanced",
    description: "Primary development environment.",
  },
  {
    id: "gitkraken",
    name: "GitKraken",
    category: "tools",
    icon: "GitCommit",
    experienceLevel: "intermediate",
    description: "Visual Git client for branch management.",
  },

  // ============================================
  // CLOUD / DEVOPS
  // ============================================
  {
    id: "vercel",
    name: "Vercel",
    category: "cloud",
    icon: "Cloud",
    experienceLevel: "advanced",
    description: "Frontend deployment with CI/CD workflows.",
  },
  {
    id: "render",
    name: "Render",
    category: "cloud",
    icon: "CloudCog",
    experienceLevel: "advanced",
    description: "Backend service deployment and hosting.",
  },
];