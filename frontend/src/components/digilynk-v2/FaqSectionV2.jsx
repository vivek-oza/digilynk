/**
 * FaqSectionV2 — FAQ section matching v2 design style.
 * Consistent with Services/About/Contact sections (bg, typography, layout).
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import { animations, typography, colors, spacing, components } from "@/lib/designSystem";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on what you need. A simple starter site usually takes 7-10 business days. More complex sites with custom features can take 3-6 weeks. We'll give you a clear timeline upfront and keep you updated as we go.",
  },
  {
    question: "How much will my website cost?",
    answer:
      "Pricing depends on pages, design complexity, and features. Starter packages begin around ₹13,000, while full custom builds can range from ₹30,000 to ₹95,000+. We'll share a detailed quote after understanding your needs—no surprises.",
  },
  {
    question: "What happens if I find bugs after launch?",
    answer:
      "We include post-launch support in all packages. If something breaks or doesn't work as expected, we'll fix it. Support periods range from 1-3 months depending on your package, and we offer extended maintenance plans if needed.",
  },
  {
    question: "How do I pay? Can we split the payment?",
    answer:
      "Yes, we typically split payments. Most projects start with an advance (usually 50%) to begin work, and the rest is due on delivery. For larger projects, we can break it into milestones. We accept UPI, bank transfers, and other local payment methods.",
  },
  {
    question: "What's included in the website? Will it work on mobile?",
    answer:
      "Yes, all our websites are mobile-friendly and responsive. Every package includes mobile optimization, basic SEO setup, contact forms, and SSL security. Higher packages add more pages, custom features, CMS access, and advanced SEO.",
  },
  {
    question: "Can I update the website myself later?",
    answer:
      "If your package includes a CMS (like WordPress or Webflow), yes! You can update content, add blog posts, and manage pages yourself. We'll show you how during handover. If you prefer, we can also handle updates for you.",
  },
  {
    question: "What if I need changes or extra features later?",
    answer:
      "No problem. We offer add-on services like extra pages, integrations, SEO upgrades, and new features. You can add these anytime—during the project or after launch. We'll quote each addition separately so you know the cost upfront.",
  },
  {
    question: "How does the project process work?",
    answer:
      "We start with a call to understand your needs and goals. Then we share a proposal with timeline and pricing. Once you approve, we begin design and development, sharing progress along the way. You'll see drafts, test the site, and we'll make revisions before final launch.",
  },
  {
    question: "Do you help with hosting and domain setup?",
    answer:
      "Yes, we can guide you through domain purchase and hosting setup, or handle it for you. We'll ensure your site has SSL, proper email configuration, and is ready to go live. We'll also help you understand what you need for ongoing hosting.",
  },
  {
    question: "What kind of support do you provide after launch?",
    answer:
      "All packages include post-launch support for bug fixes and basic help. We also offer maintenance plans for regular updates, security patches, backups, and performance monitoring. You can reach us via email or your preferred communication channel—we respond promptly.",
  },
];

export default function FaqSectionV2() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleFAQ = (index) => {
    if (!showAllFaqs) setShowAllFaqs(true);
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <SectionWrapper
      id="faq"
      aria-label="Frequently Asked Questions"
      className="pt-40 md:pt-48 pb-32 md:pb-40"
    >
      <div className={`${spacing.containerMaxWidthNarrow} ${spacing.containerPadding}`}>
        <SectionHeader
          title="Frequently Asked Questions"
          description="Common questions about our services and working process"
        />

        <motion.div
          className="space-y-6"
          variants={animations.container}
          initial="hidden"
          animate="visible"
        >
          {(showAllFaqs ? faqs : faqs.slice(0, 2)).map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div key={index} variants={animations.item}>
                <motion.div
                  className={`${colors.bgMuted} rounded-xl ${components.cardPadding} shadow-lg ${colors.border} transition-all duration-300 ${
                    isActive ? "ring-2 ring-foreground/20 border-foreground/20" : ""
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-start w-full text-left gap-4"
                  >
                    <span className="text-base md:text-lg font-semibold text-foreground font-roboto flex-1 leading-relaxed">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="flex-shrink-0 mt-1"
                    >
                      {isActive ? (
                        <ChevronUp
                          size={20}
                          className="text-foreground"
                          strokeWidth={2}
                        />
                      ) : (
                        <ChevronDown
                          size={20}
                          className="text-muted-foreground"
                          strokeWidth={2}
                        />
                      )}
                    </motion.span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      height: isActive ? "auto" : 0,
                      marginTop: isActive ? "1rem" : 0,
                    }}
                    transition={{
                      opacity: { duration: 0.2 },
                      height: { type: "spring", stiffness: 300, damping: 25 },
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed font-roboto text-base md:text-lg pt-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {faqs.length > 2 && (
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={() => {
                setShowAllFaqs((v) => {
                  const next = !v;
                  if (!next) setActiveIndex(null);
                  return next;
                });
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-sm font-medium font-roboto transition-colors"
            >
              <span>{showAllFaqs ? "View Less" : "View More"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  showAllFaqs ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
