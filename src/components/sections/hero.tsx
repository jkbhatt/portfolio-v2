"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Circle } from "lucide-react";
import { siteMetadata } from "@/data/siteMetadata";
import { buttonVariants } from "@/components/ui/button";
import { HeroBackground } from "@/components/hero-background";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Live Applications", value: "3+" },
  { label: "Technologies", value: "15+" },
  { label: "DSA Problems Solved", value: "36+" },
  { label: "Years Learning", value: "2+" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-16"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
        >
          <Circle className="h-2 w-2 fill-emerald-400 text-emerald-400" />
          <span className="text-muted-foreground">{siteMetadata.availability}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          Building <span className="gradient-text">production-grade</span> full-stack
          applications
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
        >
          I&apos;m {siteMetadata.name}, a full-stack developer specializing in the{" "}
          <span className="font-mono text-foreground">MERN stack</span> and{" "}
          <span className="font-mono text-foreground">Next.js</span>. I architect
          scalable APIs, secure authentication systems, and ship real products end to
          end.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className={cn(buttonVariants({ size: "lg" }), "gap-2 rounded-full")}
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={siteMetadata.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 rounded-full"
            )}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "rounded-full"
            )}
          >
            Hire Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl px-4 py-5">
              <div className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
