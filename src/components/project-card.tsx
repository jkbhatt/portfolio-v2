"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

const statusConfig = {
  live: { label: "Live", className: "bg-emerald-400/10 text-emerald-400" },
  "in-progress": {
    label: "In Progress",
    className: "bg-accent-blue/10 text-accent-blue",
  },
  archived: {
    label: "Archived",
    className: "bg-muted-foreground/10 text-muted-foreground",
  },
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="glass-card group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40"
    >
      {/* Top row: badges */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {project.featured && (
            <span className="rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-2.5 py-0.5 text-xs font-medium text-white">
              Featured
            </span>
          )}
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-xs font-medium",
              status.className
            )}
          >
            {status.label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Code2 className="h-4 w-4" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Title + description */}
      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.shortDescription}
      </p>

      {/* Tech stack */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground">
            +{project.techStack.length - 5}
          </span>
        )}
      </div>

      {/* Footer link */}
      <div className="mt-6 flex items-center gap-1 text-sm font-medium text-accent-blue opacity-0 transition-opacity group-hover:opacity-100">
        View case study
        <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </motion.div>
  );
}
