import React from "react";
import { cn } from "@/lib/utils";

/**
 * BentoGrid — generic grid used on services pages.
 * Tailored to match Digilynk v2 theme (glass cards + rainbow/glow).
 */
export function BentoGrid({ className, children }) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  icon: Icon,
  header,
}) {
  return (
    <div className={cn("services-v2-card group flex flex-col h-full", className)}>
      {/* Optional header region (can be a skeleton / image / gradient) */}
      {header && (
        <div className="mb-4 rounded-xl overflow-hidden">
          {header}
        </div>
      )}

      <div className="relative z-10 flex flex-col gap-3">
        {Icon && (
          <div className="mb-2 p-3 bg-muted rounded-xl w-fit text-muted-foreground group-hover:text-foreground transition-colors">
            <Icon className="w-6 h-6" />
          </div>
        )}

        <div className="relative pl-4">
          <div className="absolute left-0 inset-y-0 w-[3px] rounded-full bg-border/40 stat-rainbow-strip" />
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 font-roboto">
            {title}
          </h3>
        </div>

        {description && (
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-roboto mt-1">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

