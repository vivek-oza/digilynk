"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * TracingBeam — simple vertical scroll-follow highlight for content sections.
 * Inspired by Aceternity UI tracing-beam pattern.
 */
export function TracingBeam({ className, children }) {
  return (
    <div className={cn("relative mx-auto max-w-4xl", className)}>
      <div className="pointer-events-none absolute left-4 top-0 bottom-0 hidden md:block">
        <motion.div
          className="h-24 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

