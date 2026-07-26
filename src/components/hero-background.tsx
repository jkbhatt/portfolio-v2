"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="gradient-blob absolute h-[500px] w-[500px] rounded-full"
        style={{ backgroundColor: "var(--accent-blue)", top: "-10%", left: "10%" }}
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="gradient-blob absolute h-[400px] w-[400px] rounded-full"
        style={{ backgroundColor: "var(--accent-purple)", top: "20%", right: "5%" }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="gradient-blob absolute h-[350px] w-[350px] rounded-full"
        style={{ backgroundColor: "var(--accent-cyan)", bottom: "-5%", left: "35%" }}
        animate={{
          x: [0, 25, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}