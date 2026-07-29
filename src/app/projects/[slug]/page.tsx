import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { projects } from "@/data/projects";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Pre-generate a static page for every project at build time (great for performance + SEO)
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

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

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const status = statusConfig[project.status];

  return (
    <main className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
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

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            {project.longDescription}
          </p>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {project.timeline.start} — {project.timeline.end}
            </span>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), "gap-2 rounded-full")}
            >
              <Code2 className="h-4 w-4" />
              View Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "gap-2 rounded-full"
                )}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-10">
          <h2 className="text-sm font-semibold text-foreground">Tech Stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-secondary px-2.5 py-1.5 font-mono text-xs text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture */}
        {project.architecture && (
          <div className="glass-card mt-10 rounded-2xl p-6">
            <h2 className="text-sm font-semibold text-foreground">Architecture</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Challenges & Solutions */}
        {(project.challenges || project.solutions) && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {project.challenges && (
              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Lightbulb className="h-4 w-4 text-accent-blue" />
                  Challenges
                </h2>
                <ul className="mt-3 space-y-2">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-accent-blue">—</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.solutions && (
              <div>
                <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Solutions
                </h2>
                <ul className="mt-3 space-y-2">
                  {project.solutions.map((solution, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-emerald-400">—</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Future plans */}
        {project.futurePlans && project.futurePlans.length > 0 && (
          <div className="mt-10">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Rocket className="h-4 w-4 text-accent-purple" />
              Future Plans
            </h2>
            <ul className="mt-3 space-y-2">
              {project.futurePlans.map((plan, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-accent-purple">—</span>
                  {plan}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 border-t border-border pt-8 text-center">
          <Link
            href="/#projects"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "gap-2 rounded-full"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
