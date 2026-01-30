/**
 * SectionWrapper — Reusable section container with background pattern and animations
 */
import React from "react";
import { motion } from "framer-motion";
import { animations, components } from "@/lib/designSystem";

export default function SectionWrapper({
  id,
  className = "",
  children,
  patternColor = "#3b82f6",
  patternOpacity = 0.03,
  borderTop = false,
  ...props
}) {
  return (
    <section
      id={id}
      className={`${components.section} ${components.sectionPadding} ${className}`}
      {...props}
    >
      <div
        className={components.patternOverlay}
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, ${patternColor} 2px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />
      <motion.div
        className="relative"
        variants={animations.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
