/**
 * PinContainer — simple 3D hover card wrapper.
 * Inspired by Aceternity UI 3d-pin pattern.
 */
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PinContainer({ className = "", children }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.div
        className="relative [perspective:1600px]"
        whileHover={{ rotateX: -14, rotateY: 14, translateZ: 40 }}
        transition={{ type: "spring", stiffness: 230, damping: 20 }}
      >
        <motion.div
          className="relative rounded-3xl border border-white/12 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-[0_26px_80px_rgba(0,0,0,0.9)]"
          whileHover={{
            boxShadow: "0 36px 110px rgba(0,0,0,1)",
          }}
          transition={{ type: "spring", stiffness: 230, damping: 20 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

