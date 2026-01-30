/**
 * HeroSectionV2 — Hero for new home page.
 * Hero text + CTA only. Full viewport height.
 */
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { typography, spacing } from "@/lib/designSystem";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSectionV2() {
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-background flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Light mode pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.08) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Dark mode pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex justify-center">
        <motion.div
          className="w-fit max-w-full flex flex-col items-center gap-8 md:gap-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="text-xs sm:text-sm md:text-base text-muted-foreground font-roboto tracking-[0.14em] uppercase mb-1 text-center"
          >
            Your partner for web development & software testing
          </motion.p>
          <motion.div variants={item} className="w-full flex justify-center text-center">
            <TypewriterEffectSmooth
              words={[
                {
                  text: "We design, engineer and develop\nbest websites for you.",
                  className: "text-foreground",
                },
              ]}
            />
          </motion.div>
          <motion.div
            variants={item}
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-2"
          >
            <span className="hero-cta-glow transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <button
                type="button"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    window.location.href = "/#contact";
                  }, 100);
                }}
                className="hero-cta-inner px-6 py-3 sm:px-8 sm:py-3.5 text-foreground font-roboto font-semibold text-sm sm:text-base"
              >
                Book a Call
              </button>
            </span>
            <span className="hero-cta-glow transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hero-cta-inner px-6 py-3 sm:px-8 sm:py-3.5 text-foreground font-roboto font-semibold text-sm sm:text-base"
              >
                View Services
              </button>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
