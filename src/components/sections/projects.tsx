"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

const categories: { label: string; value: Project["category"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "DSA", value: "dsa" },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<Project["category"] | "all">(
    "all"
  );

  const filteredProjects = useMemo(() => {
    const list =
      activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    // Featured projects first
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [activeCategory]);

  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm text-accent-blue">03 — Projects</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Things I&apos;ve <span className="gradient-text">built and shipped</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Each project is deployed and fully functional — not just a local demo.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
