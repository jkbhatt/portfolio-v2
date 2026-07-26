import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "leetcode-clone",
    slug: "leetcode-clone",
    title: "LeetCode Clone",
    shortDescription:
      "A full-stack coding practice platform with authentication, role-based access, and problem management.",
    longDescription:
      "A production-style clone of LeetCode built to practice full-stack architecture end-to-end — covering authentication, authorization, RBAC, and cross-domain deployment challenges between a Next.js frontend and an Express/MongoDB backend.",
    coverImage: "/projects/leetcode-clone/cover.png",
    images: [],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "RBAC",
    ],
    status: "live",
    featured: true,
    githubUrl: "https://github.com/jkbhatt/leetcode-clone",
    liveUrl: "https://leetcode-clone-black.vercel.app",
    category: "fullstack",
    tags: ["Authentication", "RBAC", "Full Stack"],
    timeline: {
      start: "2026-01",
      end: "Present",
    },
    architecture:
      "Next.js frontend with server-side rendering deployed on Vercel, Express + Node.js backend deployed on Render, MongoDB Atlas for persistence, JWT-based auth with role-based access control.",
    challenges: [
      "Handling cross-domain cookie behavior between Vercel and Render",
      "Implementing secure JWT authentication with role-based access control",
      "Synchronizing frontend-backend data flow reliably",
    ],
    solutions: [
      "Configured proper CORS and cookie settings for cross-domain auth",
      "Built middleware-based RBAC to gate routes by user role",
    ],
    futurePlans: [
      "Add a code execution engine for real problem submissions",
      "Expand the real-time global leaderboard",
    ],
  },
  {
    id: "projectflow",
    slug: "projectflow",
    title: "ProjectFlow",
    shortDescription:
      "A collaborative project management application with three-tier RBAC and hierarchical task tracking.",
    longDescription:
      "A high-performance RESTful API service supporting hierarchical task tracking, protected routes, and multimedia attachments, with a three-tier Role-Based Access Control system (Admin, Project Admin, Member) enforcing granular data permissions across all endpoints.",
    coverImage: "/projects/projectflow/cover.png",
    images: [],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    status: "live",
    featured: true,
    githubUrl: "https://github.com/jkbhatt/projectflow",
    liveUrl: "https://projectflow-pi-opal.vercel.app",
    category: "fullstack",
    tags: ["Project Management", "RBAC", "Full Stack"],
    timeline: {
      start: "2025-11",
      end: "2026-01",
    },
    architecture:
      "RESTful API architecture with three-tier RBAC (Admin, Project Admin, Member), JWT session management with refresh token rotation, encrypted password recovery, and automated health monitoring alerts.",
    challenges: [
      "Enforcing granular permissions across all endpoints for three distinct roles",
      "Implementing secure refresh token rotation",
    ],
    solutions: [
      "Architected a three-tier RBAC system with middleware-based permission checks",
      "Built encrypted password recovery and email verification workflows",
    ],
  },
  {
    id: "chatapp",
    slug: "chatapp",
    title: "ChatApp",
    shortDescription:
      "A real-time full-stack messaging application with live delivery status and media sharing.",
    longDescription:
      "A real-time messaging platform enabling low-latency bidirectional communication between users, with secure authentication, file/media sharing, and live read receipts for message delivery and read status.",
    coverImage: "/projects/chatapp/cover.png",
    images: [],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Socket.io", "MongoDB", "JWT"],
    status: "live",
    featured: true,
    githubUrl: "https://github.com/jkbhatt/chatapp",
    liveUrl: "https://chatapp-kappa-bay.vercel.app",
    category: "fullstack",
    tags: ["Real-Time", "WebSockets", "Full Stack"],
    timeline: {
      start: "2025-08",
      end: "2025-10",
    },
    architecture:
      "Next.js + TypeScript frontend deployed on Vercel, Express + Socket.io + MongoDB backend deployed on Render, JWT-based authentication with protected routes and persistent sessions.",
    challenges: [
      "Enabling low-latency bidirectional real-time communication",
      "Handling efficient storage for shared images and attachments",
      "Keeping delivery/read status in sync across connected clients",
    ],
    solutions: [
      "Used Socket.io for real-time bidirectional event-based communication",
      "Built a read-receipt system with live status updates via sockets",
    ],
  },
];