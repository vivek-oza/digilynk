/**
 * GlowCard — Reusable card component with rainbow glow effect
 */
import React from "react";
import { motion } from "framer-motion";

const itemAnim = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function GlowCard({
  children,
  className = "",
  active = false,
  onClick,
  ...props
}) {
  return (
    <motion.div
      variants={itemAnim}
      className={`services-v2-card group ${className}`}
      data-active={active}
      onClick={onClick}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
