/**
 * Button — Standardized button component with consistent styling
 */
import React from "react";
import { motion } from "framer-motion";
import { components, typography } from "@/lib/designSystem";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  disabled = false,
  ...props
}) {
  const baseClasses = "font-roboto transition-all duration-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    secondary: "border border-border text-foreground hover:bg-muted",
    outline: "border border-border text-foreground hover:bg-muted/50",
  };
  
  const sizes = {
    default: "px-6 py-3 text-base font-semibold",
    large: "px-8 py-4 text-lg font-semibold",
    small: "px-4 py-2 text-sm font-semibold",
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
