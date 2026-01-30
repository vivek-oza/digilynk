/**
 * SectionHeader — Reusable section header with title and description
 */
import React from "react";
import { motion } from "framer-motion";
import { animations, components, typography } from "@/lib/designSystem";

export default function SectionHeader({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) {
  return (
    <motion.div
      className={`${components.sectionHeader} ${className}`}
      variants={animations.item}
    >
      <motion.h2
        variants={animations.item}
        className={`${components.sectionTitle} ${typography.h2} ${titleClassName}`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={animations.item}
          className={`${components.sectionDescription} ${typography.body} ${descriptionClassName}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
