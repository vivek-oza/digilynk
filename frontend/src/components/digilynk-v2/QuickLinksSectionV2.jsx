/**
 * QuickLinksSectionV2 — Important links section matching v2 design style.
 * Consistent with Services/About/Contact sections (bg, typography, layout).
 */
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Code,
  TestTube,
  BookOpen,
  UserCircle,
  Mail,
  ArrowRight,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const quickLinks = [
  {
    icon: Home,
    title: "Home",
    description: "Back to homepage",
    path: "/",
    external: false,
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom website solutions",
    path: "/services/web-development",
    external: false,
  },
  {
    icon: TestTube,
    title: "Software Testing",
    description: "Quality assurance services",
    path: "/services/software-testing",
    external: false,
  },
  {
    icon: BookOpen,
    title: "Blog",
    description: "Latest insights and updates",
    path: "/blog",
    external: false,
  },
  {
    icon: UserCircle,
    title: "About Us",
    description: "Learn more about Digilynk",
    path: "/about",
    external: false,
  },
  {
    icon: Mail,
    title: "Contact",
    description: "Get in touch with us",
    path: "/contact",
    external: false,
  },
];

export default function QuickLinksSectionV2() {
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    if (link.external) {
      window.open(link.path, "_blank", "noopener,noreferrer");
    } else {
      navigate(link.path);
    }
  };

  return (
    <section
      id="quick-links"
      className="relative bg-background py-32 md:py-40 lg:py-48 overflow-hidden font-roboto"
      aria-label="Quick Links"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={itemAnim}
            className="text-2xl md:text-4xl font-medium text-foreground font-roboto"
          >
            Quick Links
          </motion.h2>
          <motion.p
            variants={itemAnim}
            className="mt-3 text-muted-foreground max-w-2xl mx-auto font-roboto text-base md:text-lg"
          >
            Explore our services and resources
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.div
                key={index}
                variants={itemAnim}
                whileHover={{ y: -4 }}
                className="group"
              >
                <button
                  onClick={() => handleLinkClick(link)}
                  className="w-full bg-muted/50 rounded-xl p-5 md:p-6 shadow-lg border border-border transition-all duration-300 text-left hover:border-foreground/20 hover:bg-muted/70"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-base md:text-lg font-semibold text-foreground font-roboto group-hover:text-foreground transition-colors">
                          {link.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground font-roboto group-hover:text-foreground/80 transition-colors">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
