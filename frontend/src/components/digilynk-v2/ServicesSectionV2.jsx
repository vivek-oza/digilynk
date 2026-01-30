/**
 * ServicesSectionV2 — Two cards (Web Development, Software Testing).
 * Click to expand one; learn more content appears below. Glow accent from guide.
 */
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import { animations, typography, spacing } from "@/lib/designSystem";

function StatItem({ value, label, suffix = "+", showDivider = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      variants={animations.item}
      whileHover={{ scale: 1.04, y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex flex-col items-center text-center rounded-2xl px-6 py-6 md:px-10 md:py-10 bg-background/40 hover:bg-background/80 transition-all duration-300 overflow-hidden"
    >
      {showDivider && (
        <div className="absolute inset-y-4 left-0 flex items-stretch pointer-events-none">
          <div className="w-[3px] h-full bg-border/40 stat-rainbow-strip" />
        </div>
      )}
      <p className="relative text-6xl md:text-7xl font-bold text-foreground font-roboto mb-3 leading-none">
        {displayValue}
        {suffix}
      </p>
      <p className="relative text-base md:text-xl text-muted-foreground font-roboto">
        {label}
      </p>
    </motion.div>
  );
}

const services = [
  {
    id: "web",
    title: "Web Development",
    description: "Modern, high-performing websites tailored to your business.",
    link: "/services/web-development",
    detailTitle: "What We Offer",
    items: [
      "Website Design & Development - Clean, intuitive, conversion-focused websites",
      "Custom Web Applications - Scalable solutions for complex business problems",
      "E-commerce Solutions - End-to-end online stores with secure payments",
      "CMS-Based Development - WordPress, Shopify, Dukaan, Headless CMS",
      "No-Code & Low-Code Platforms - Webflow, Framer for rapid development",
      "Maintenance & Support - Continuous monitoring, updates, and optimization",
    ],
  },
  {
    id: "testing",
    title: "Software Testing",
    description: "End-to-end QA to keep your product stable and reliable.",
    link: "/services/software-testing",
    detailTitle: "Our Testing Services",
    items: [
      "Functional Testing - Manual, regression, smoke, sanity, and exploratory testing",
      "Automation Testing - Web and mobile automation with Playwright, Selenium, Appium",
      "Non-Functional Testing - Performance, load, stress, and scalability testing",
      "API Testing - Functional, integration, performance, and security validation",
      "Cross-Platform Testing - Browser and device compatibility across platforms",
      "AI Chatbot Testing - Response accuracy, NLP, context retention, and compliance",
    ],
  },
];

export default function ServicesSectionV2() {
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const expanded = services.find((s) => s.id === expandedId);

  return (
    <SectionWrapper
      id="services"
      aria-label="Services"
    >
      <div className={`${spacing.containerMaxWidth} ${spacing.containerPadding}`}>
        <SectionHeader
          title="Services"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 mt-4 md:mt-6"
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((s) => (
            <motion.button
              key={s.id}
              type="button"
              variants={animations.item}
              className="services-v2-card text-left w-full min-h-[220px] md:min-h-[260px]"
              data-active={expandedId === s.id}
              onClick={() => handleCardClick(s.id)}
              aria-expanded={expandedId === s.id}
              aria-controls={`services-detail-${s.id}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground font-roboto mb-2">
                    {s.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-roboto">
                    {s.description}
                  </p>
                </div>
                <motion.span
                  className="shrink-0 text-muted-foreground"
                  animate={{ rotate: expandedId === s.id ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {expanded && (
            <motion.div
              id={`services-detail-${expanded.id}`}
              key={expanded.id}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 md:mt-12"
            >
              <div className="rounded-xl bg-muted/50 border border-border p-6 md:p-8">
                <h4 className="text-lg font-semibold text-foreground font-roboto mb-6">
                  {expanded.detailTitle}
                </h4>
                <ul className="space-y-3 mb-8">
                  {expanded.items.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-foreground/80 font-roboto flex items-center gap-2 text-sm md:text-base"
                    >
                      <span className="text-muted-foreground">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(expanded.link);
                  }}
                  className="inline-flex items-center gap-2 text-foreground font-roboto font-medium hover:text-muted-foreground transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats row below services */}
        <motion.div
          className="mt-20 md:mt-24 lg:mt-28 pt-12 md:pt-16 pb-6 md:pb-10"
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="grid gap-10 md:gap-12 md:grid-cols-3 text-center justify-items-center">
            <StatItem value={30} label="Websites Delivered" showDivider />
            <StatItem value={40} label="Softwares Tested" showDivider />
            <StatItem value={4} label="Years in business" showDivider />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
