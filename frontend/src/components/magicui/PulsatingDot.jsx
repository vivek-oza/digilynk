import React from "react";
import { motion } from "framer-motion";

/**
 * PulsatingDot
 *
 * @param {string} color - Hex code or CSS color (e.g. '#ff0000', 'rgb(0,255,0)')
 * @param {number} radius - Radius of center dot in pixels
 * @param {number} intensity - Controls speed and pulse distance (1–3 recommended)
 */
const PulsatingDot = ({ color = "#FF0000", radius = 8, intensity = 1 }) => {
  const pulseSize = radius * (2 + intensity * 0.5); // determines outer ring size
  const duration = 1.5 / intensity; // faster with higher intensity

  return (
    <div
      className="relative inline-block"
      style={{ width: pulseSize * 2, height: pulseSize * 2 }}
    >
      {/* Outer pulsing ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          backgroundColor: color,
          opacity: 0.3,
          width: pulseSize * 2,
          height: pulseSize * 2,
        }}
        initial={{ scale: 0.7, opacity: 0.5 }}
        animate={{ scale: 1.4, opacity: 0 }}
        transition={{
          duration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {/* Solid center dot */}
      <div
        className="absolute rounded-full"
        style={{
          backgroundColor: color,
          width: radius * 2,
          height: radius * 2,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default PulsatingDot;
