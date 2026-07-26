"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Trophy, Briefcase } from "lucide-react";
import { timeline } from "@/data/timeline";
import { TimelineType } from "@/types";
import { cn } from "@/lib/utils";

const typeConfig: Record<TimelineType, { icon: typeof GraduationCap; className: string }> = {
  education: { icon: GraduationCap, className: "bg-accent-blue/10 text-accent-blue" },
  project: { icon: Code2, className: "bg-accent-purple/10 text-accent-purple" },
  achievement: { icon: Trophy, className: "bg-accent-cyan/10 text-accent-cyan" },
  career: { icon: Briefcase, className: "bg-emerald-400/10 text-emerald-400" },
};

function formatDate(date: string) {
  const [year, month] = date.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

export function Timeline() {
  // Most recent first
  const sorted = [...timeline].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <section id="timeline" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-sm text-accent-blue">04 — Journey</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            My <span className="gradient-text">timeline</span>
          </h2>
        </motion.div>

        <div className="relative space-y-8 border-l border-border pl-8">
          {sorted.map((item, index) => {
            const config = typeConfig[item.type];
            const Icon = config.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute -left-[calc(2rem+1px)] flex h-8 w-8 items-center justify-center rounded-full",
                    config.className
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <div className="glass-card rounded-2xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {formatDate(item.startDate)}
                      {item.current
                        ? " — Present"
                        : item.endDate
                        ? ` — ${formatDate(item.endDate)}`
                        : ""}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent-blue">{item.organization}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}