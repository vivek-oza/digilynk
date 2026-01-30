/**
 * PageHero — Full-screen hero with gradient background and typing effect.
 * Use on all pages for consistent hero: gradient bg + TypewriterEffectSmooth.
 */
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";

export default function PageHero({
  words,
  className,
  children,
  containerClassName = "h-full w-full",
}) {
  if (!words?.length) return null;

  return (
    <section className={cn("relative h-screen w-full overflow-hidden", className)}>
      <BackgroundGradientAnimation
        containerClassName={containerClassName}
        className="h-full w-full"
      >
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <div className="w-full max-w-4xl">
            <TypewriterEffectSmooth
              words={words.map((w) => ({ ...w, className: w.className || "text-white" }))}
              className="text-white drop-shadow-lg"
              cursorClassName="bg-white"
            />
          </div>
          {children}
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}
