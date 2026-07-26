"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { getIcon } from "@/lib/icon-map";
import { SkillCategory } from "@/types";
import { cn } from "@/lib/utils";

const categoryLabels: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  languages: "Languages",
  cloud: "Cloud & Deployment",
  devops: "DevOps",
  testing: "Testing",
  tools: "Tools",
};

const categoryOrder: SkillCategory[] = [
  "languages",
  "frontend",
  "backend",
  "database",
  "cloud",
  "tools",
  "devops",
  "testing",
];

export function Skills() {
  const groupedSkills = categoryOrder
    .map((category) => ({
      category,
      items: skills.filter((skill) => skill.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm text-accent-blue">02 — Skills</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            My <span className="gradient-text">technical toolkit</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {groupedSkills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.05 }}
            >
              <h3 className="mb-4 font-mono text-sm font-medium text-muted-foreground">
                {categoryLabels[group.category]}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.items.map((skill) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <div
                      key={skill.id}
                      className={cn(
                        "glass-card group relative flex flex-col items-start gap-2 rounded-xl p-4",
                        "transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-blue/40"
                      )}
                    >
                      <Icon className="h-5 w-5 text-accent-blue" />
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span
                        className={cn(
                          "absolute right-3 top-3 h-1.5 w-1.5 rounded-full",
                          skill.experienceLevel === "advanced" && "bg-emerald-400",
                          skill.experienceLevel === "intermediate" && "bg-accent-blue",
                          skill.experienceLevel === "beginner" && "bg-muted-foreground"
                        )}
                      />
                      {/* Tooltip-style description on hover */}
                      <span className="pointer-events-none absolute inset-x-0 -bottom-1 translate-y-full rounded-xl border border-border bg-popover p-3 text-xs leading-relaxed text-muted-foreground opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-[calc(100%+8px)] group-hover:opacity-100 z-20">
                        {skill.description}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}