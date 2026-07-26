"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { codingProfiles } from "@/data/codingProfiles";

const platformConfig = {
  leetcode: { label: "LeetCode", className: "from-amber-500/20 to-orange-500/20 text-amber-400" },
  gfg: { label: "GeeksforGeeks", className: "from-emerald-500/20 to-green-500/20 text-emerald-400" },
  hackerrank: { label: "HackerRank", className: "from-emerald-600/20 to-teal-500/20 text-emerald-400" },
  codechef: { label: "CodeChef", className: "from-amber-700/20 to-yellow-600/20 text-amber-400" },
  codeforces: { label: "Codeforces", className: "from-blue-600/20 to-red-500/20 text-accent-blue" },
};

export function CodingProfiles() {
  if (codingProfiles.length === 0) return null;

  return (
    <section id="coding" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-sm text-accent-blue">05 — Problem Solving</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Coding <span className="gradient-text">practice</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Daily DSA practice in C++, focused on building strong problem-solving fundamentals.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {codingProfiles.map((profile, index) => {
            const config = platformConfig[profile.platform];
            return (
              <motion.a
                key={profile.id}
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-50 ${config.className}`}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {config.label}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">
                    @{profile.username}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4">
                    {profile.problemsSolved !== undefined && (
                      <div>
                        <div className="font-mono text-2xl font-bold text-foreground">
                          {profile.problemsSolved}
                        </div>
                        <div className="text-xs text-muted-foreground">Problems Solved</div>
                      </div>
                    )}
                    {profile.rating !== undefined && (
                      <div>
                        <div className="font-mono text-2xl font-bold text-foreground">
                          {profile.rating}
                        </div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Actively practicing
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}