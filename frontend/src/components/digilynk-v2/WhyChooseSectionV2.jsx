/**
 * WhyChooseSectionV2 — "Why choose Digilynk" for home page.
 * Uses tabler icons + rainbow strip, aligned with v2 design system.
 */
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import { animations, spacing } from "@/lib/designSystem";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

const features = [
  {
    title: "Development + QA in one team",
    description:
      "We combine modern web development with robust quality assurance so your product is both beautiful and battle‑tested.",
    icon: IconTerminal2,
  },
  {
    title: "Smooth, guided process",
    description:
      "From first call to launch, we keep the process structured, transparent, and easy to follow for non‑technical founders.",
    icon: IconEaseInOut,
  },
  {
    title: "Pricing that fits your stage",
    description:
      "Starter, growth, and scale packages designed for Indian businesses, with clear scope and no hidden costs.",
    icon: IconCurrencyDollar,
  },
  {
    title: "Performance & uptime focused",
    description:
      "Fast loading, responsive, and production‑ready builds so your website feels reliable on every device.",
    icon: IconCloud,
  },
  {
    title: "Clear ownership & handover",
    description:
      "Structured documentation, access handover, and training so you are never locked out of your own product.",
    icon: IconRouteAltLeft,
  },
  {
    title: "Support that actually replies",
    description:
      "We stay available on the same channels you use daily, with realistic response times and honest communication.",
    icon: IconHelp,
  },
  {
    title: "Built for long‑term partnerships",
    description:
      "Most clients stay with us for multiple projects—maintenance, new features, and ongoing QA.",
    icon: IconAdjustmentsBolt,
  },
  {
    title: "We care about your outcome",
    description:
      "Our goal is simple: ship something you’re proud to show to clients, investors, and your own team.",
    icon: IconHeart,
  },
];

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={animations.item}
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 h-full",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <Icon className="w-6 h-6" />
      </div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10 font-roboto">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {feature.title}
        </span>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 font-roboto">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function WhyChooseSectionV2() {
  return (
    <SectionWrapper
      id="why-choose"
      aria-label="Why choose Digilynk"
    >
      <div className={`${spacing.containerMaxWidth} ${spacing.containerPadding}`}>
        <SectionHeader
          title="Why choose Digilynk?"
          description="A focused team that blends modern web development with deep quality assurance experience."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10"
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

