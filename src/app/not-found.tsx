import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="gradient-blob absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="relative z-10">
        <p className="font-mono text-8xl font-bold gradient-text">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for might have been moved, renamed, or
          never existed in the first place.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/"
            className={cn(buttonVariants({ size: "lg" }), "gap-2 rounded-full")}
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/#projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 rounded-full"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}