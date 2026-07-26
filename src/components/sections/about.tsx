"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Rocket, Target } from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Full-Stack Architecture",
    description:
      "I design systems end-to-end — from database schema and REST APIs to authentication and deployment — not just UI screens.",
  },
  {
    icon: Rocket,
    title: "Ship Real Products",
    description:
      "Every project I build gets deployed and used, not left as a local demo. I debug real production issues: CORS, auth, deployment pipelines.",
  },
  {
    icon: Target,
    title: "Problem-First Thinking",
    description:
      "I approach features by understanding the business goal first, then architecting the simplest system that solves it well.",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    description:
      "Alongside project work, I practice data structures & algorithms daily in C++ to sharpen problem-solving fundamentals.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm text-accent-blue">01 — About</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Engineer by discipline,{" "}
            <span className="gradient-text">builder by habit</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-muted-foreground"
          >
            <p>
              I&apos;m a final-year{" "}
              <span className="text-foreground">
                Information Technology student at Silver Oak University, Ahmedabad
              </span>
              , graduating in 2026 with a CGPA of 8.31/10.0. But my real education
              has happened outside the classroom — building and deploying full-stack
              applications that solve real problems.
            </p>
            <p>
              My core focus is the{" "}
              <span className="font-mono text-foreground">MERN stack</span> and{" "}
              <span className="font-mono text-foreground">Next.js</span>, with strong
              emphasis on secure authentication (JWT), role-based access control, and
              scalable REST API design. I&apos;ve deployed every project I&apos;ve built —
              frontend on Vercel, backend on Render — and personally debugged the
              real-world issues that come with production deployment: CORS
              mismatches, environment variable configuration, and database
              connectivity.
            </p>
            <p>
              I&apos;m currently seeking a{" "}
              <span className="text-foreground">Full Stack Developer</span> role
              where I can contribute to a product team, keep shipping, and keep
              learning from engineers further along the path than me.
            </p>
          </motion.div>

          {/* Strengths grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {strengths.map((strength) => (
              <div
                key={strength.title}
                className="glass-card rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <strength.icon className="h-5 w-5 text-accent-blue" />
                <h3 className="mt-3 text-sm font-semibold text-foreground">
                  {strength.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {strength.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}