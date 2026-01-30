/**
 * WebDevelopmentPage — Updated with new theme: dark bg, rainbow glow cards, glass morphism
 * Consistent with v2 design system
 */
import React, { useId, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../hooks/use-outside-click";
import { Button } from "../components/ui/button";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { cn } from "../lib/utils";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeader from "../components/shared/SectionHeader";
import { spacing, animations } from "../lib/designSystem";
import {
  Code2,
  Building2,
  Store,
  Rocket,
  CreditCard,
  HeartPulse,
  GraduationCap,
  Palette,
  Shield,
  Users,
  Zap,
  Database,
  Globe,
  FileCode,
  Settings,
  CheckCircle2,
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

const websiteTypesData = [
  {
    title: "Portfolio Websites",
    description:
      "Personal or agency portfolios to showcase your work and expertise.",
    icon: Code2,
  },
  {
    title: "Business Websites",
    description:
      "Corporate sites that build credibility and attract customers.",
    icon: Building2,
  },
  {
    title: "E-Commerce Stores",
    description:
      "Online stores with secure checkout and inventory management.",
    icon: Store,
  },
  {
    title: "Landing Pages",
    description:
      "High-converting pages designed to capture leads effectively.",
    icon: Rocket,
  },
  {
    title: "Booking Platforms",
    description: "Reservation systems for hotels, appointments, and events.",
    icon: CreditCard,
  },
  {
    title: "Healthcare Portals",
    description:
      "Patient portals and appointment systems for medical practices.",
    icon: HeartPulse,
  },
  {
    title: "Educational Platforms",
    description: "Learning management systems and educational websites.",
    icon: GraduationCap,
  },
  {
    title: "Blogs & Content Sites",
    description: "SEO-optimized blogs with content management systems.",
    icon: Palette,
  },
];

const whyChooseItems = [
  {
    id: 1,
    icon: Code2,
    title: "Modern Technology Stack",
    text: "We use cutting-edge technologies and frameworks to build fast, scalable, and maintainable solutions that stay ahead with the latest tools and best practices.",
  },
  {
    id: 2,
    icon: Users,
    title: "Skilled & Experienced Professionals",
    text: "Our team brings years of combined experience in web development. We've worked with diverse industries and understand what works.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Cost-Effective Solutions",
    text: "We deliver high-quality solutions that provide excellent value for your investment, helping you achieve your goals within budget.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Faster Delivery Cycles",
    text: "Our efficient development processes and streamlined workflows enable faster time-to-market without compromising on quality.",
  },
  {
    id: 5,
    icon: Shield,
    title: "Scalable & Secure Architecture",
    text: "We build with scalability and security in mind, ensuring your website can grow with your business and protect user data.",
  },
  {
    id: 6,
    icon: CheckCircle2,
    title: "Quality-First Approach",
    text: "Quality is embedded into every stage of development. We rigorously test and optimize to ensure bug-free, high-performing websites.",
  },
  {
    id: 7,
    icon: Building2,
    title: "Industry Expertise",
    text: "We've built websites across diverse industries—healthcare, e-commerce, education, and more. Our domain knowledge helps us deliver solutions that fit your business needs.",
  },
  {
    id: 8,
    icon: Settings,
    title: "Ongoing Support & Maintenance",
    text: "Our relationship doesn't end at launch. We provide continuous support, updates, and maintenance to keep your website running smoothly and securely.",
  },
];

const heroWords = [
  {
    text: "We develop Modern and High-performance\nwebsites just like your business.",
    className: "text-foreground",
  },
];

const addOnServices = [
  {
    title: "Design Services",
    description: "Professional design solutions",
    services: [
      { name: "Website Redesign", price: "₹8,000 – ₹20,000" },
      { name: "Landing Page Design", price: "₹6,000 – ₹12,000" },
      { name: "UI/UX Audit & Improvement", price: "₹7,000" },
      { name: "Logo Design", price: "₹4,000 – ₹8,000" },
      { name: "Brand Identity Kit", price: "₹9,000 – ₹15,000" },
    ],
  },
  {
    title: "Enhancements",
    description: "Custom development features",
    services: [
      { name: "Additional Page", price: "₹1,000 – ₹2,000/page" },
      { name: "Custom Form / Workflow", price: "₹2,500 – ₹6,000" },
      { name: "API Integration", price: "₹4,000 – ₹10,000" },
      { name: "Custom Admin Feature", price: "₹6,000+" },
      { name: "Website Speed Optimization", price: "₹4,000 – ₹8,000" },
    ],
  },
  {
    title: "E-Commerce Add-Ons",
    description: "E-commerce enhancements",
    services: [
      { name: "Product Upload (Bulk)", price: "₹1,500 – ₹3,000" },
      { name: "Advanced Filters & Search", price: "₹5,000 – ₹10,000" },
      { name: "Custom Checkout Flow", price: "₹6,000 – ₹12,000" },
      { name: "GST / Invoice Setup", price: "₹3,000" },
    ],
  },
  {
    title: "SEO & Marketing",
    description: "SEO and marketing services",
    services: [
      { name: "Basic SEO Setup", price: "₹5,000" },
      { name: "Advanced SEO Setup", price: "₹10,000 – ₹18,000" },
      { name: "Google Analytics + Search Console", price: "₹2,000" },
      { name: "Conversion Tracking Setup", price: "₹3,000" },
      { name: "SEO Monthly Retainer", price: "₹7,000 – ₹15,000/month" },
    ],
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support services",
    services: [
      { name: "Ongoing Maintenance", price: "₹2,000 – ₹4,000/month" },
      { name: "Security Monitoring", price: "₹1,500/month" },
      { name: "Content Updates", price: "₹1,000/hour" },
      { name: "Emergency Fix Support", price: "₹800/hour" },
    ],
  },
  {
    title: "Hosting & Deployment",
    description: "Infrastructure services",
    services: [
      { name: "Domain & Hosting Setup", price: "₹2,000" },
      { name: "Cloud Deployment (AWS/Vercel)", price: "₹4,000 – ₹8,000" },
      { name: "Backup & Restore Setup", price: "₹2,500" },
    ],
  },
];

const industries = [
  {
    title: "Healthcare & Life Sciences",
    description: "Hospitals, clinics, HealthTech startups, medical device companies, and wellness platforms.",
    focus: "Secure portals, appointment systems, compliance-ready architecture, patient-centric UX.",
  },
  {
    title: "Technology, IT & SaaS",
    description: "SaaS products, IT service providers, AI platforms, and software startups.",
    focus: "Product websites, dashboards, API-driven systems, subscription-based platforms.",
  },
  {
    title: "Finance, Banking & Insurance",
    description: "FinTech startups, banks, NBFCs, insurance firms, and investment platforms.",
    focus: "Secure transactions, customer portals, compliance, and data protection.",
  },
  {
    title: "E-Commerce & Retail",
    description: "Online stores, D2C brands, marketplaces, and retail businesses.",
    focus: "Product catalogs, payment integration, order management, and scalable storefronts.",
  },
  {
    title: "Education & E-Learning",
    description: "Schools, colleges, EdTech startups, coaching institutes, and online academies.",
    focus: "Learning management systems, online assessments, student portals.",
  },
  {
    title: "Real Estate, Construction & Infrastructure",
    description: "Property developers, brokers, construction firms, and facility management companies.",
    focus: "Property listings, virtual tours, lead generation, and CRM integration.",
  },
  {
    title: "Manufacturing, Logistics & Industrial",
    description: "Manufacturers, exporters, logistics providers, and supply chain companies.",
    focus: "B2B portals, product catalogs, distributor systems, operational dashboards.",
  },
  {
    title: "Travel, Hospitality & Lifestyle",
    description: "Hotels, travel agencies, restaurants, fitness brands, and lifestyle businesses.",
    focus: "Booking systems, reservations, memberships, and experience-driven design.",
  },
  {
    title: "Media, Startups & Professional Services",
    description: "Startups, consulting firms, agencies, media companies, and NGOs.",
    focus: "Brand storytelling, lead generation, scalable platforms, and rapid deployment.",
  },
];

const developmentServices = [
  {
    title: "Strategy & Consulting",
    description: "Requirement Analysis, Business & Technical Consulting, Website Architecture Planning, Technology Stack Recommendation, UX Strategy & User Journey Mapping",
  },
  {
    title: "UI/UX Design Services",
    description: "Wireframing & Prototyping, Responsive UI Design, UX Research & Usability Testing, Design Systems & Style Guides, Accessibility (WCAG) Design",
  },
  {
    title: "Frontend Development",
    description: "HTML5, CSS3, JavaScript Development, Framework-based Development (React, Vue, Angular), Responsive & Mobile-First Development, Performance Optimization, Cross-Browser Compatibility",
  },
  {
    title: "Backend Development",
    description: "Custom Backend Development, REST & GraphQL API Development, Database Design & Management, Authentication & Authorization, Server-Side Performance Optimization",
  },
  {
    title: "Full-Stack Development",
    description: "End-to-End Web Application Development, Third-Party API Integrations, Cloud-Based Application Development, Microservices Architecture",
  },
  {
    title: "CMS Development",
    description: "Custom CMS Development, WordPress Development, Headless CMS (Strapi, Sanity, Contentful), CMS Migration & Customization",
  },
  {
    title: "E-Commerce Development",
    description: "Custom E-Commerce Solutions, Shopify / WooCommerce / Magento Development, Payment Gateway Integration, Product, Cart & Order Management, Security & Compliance (PCI-DSS)",
  },
  {
    title: "Website Testing & Quality Assurance",
    description: "Functional Testing, UI & UX Validation, Performance & Load Testing, Security Testing, Cross-Device & Cross-Browser Testing",
  },
  {
    title: "DevOps & Deployment",
    description: "CI/CD Pipeline Setup, Cloud Deployment (AWS, Azure, GCP), Domain & Hosting Configuration, Version Control & Release Management",
  },
  {
    title: "SEO & Performance Optimization",
    description: "Technical SEO Implementation, Page Speed Optimization, Core Web Vitals Improvement, Schema Markup Integration",
  },
  {
    title: "Security Services",
    description: "Secure Coding Practices, SSL & HTTPS Implementation, Vulnerability Assessment, Data Protection & Compliance",
  },
  {
    title: "Maintenance & Support",
    description: "Bug Fixing & Enhancements, Security Updates & Patching, Performance Monitoring, SLA-Based Support",
  },
  {
    title: "Analytics & Monitoring",
    description: "Google Analytics / GA4 Integration, Event Tracking & Conversion Setup, Error & Uptime Monitoring",
  },
  {
    title: "Content & Migration Services",
    description: "Website Content Integration, Website Redesign & Revamp, Platform & Data Migration",
  },
  {
    title: "Emerging & Value-Added Services",
    description: "Progressive Web Apps (PWA), AI/Chatbot Integration, API-First Development, Automation & Workflow Tools",
  },
];

// Grid Pattern Component
function GridPattern({ width, height, x, y, squares, ...props }) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

// Grid Component
function Grid({ pattern, size }) {
  const p =
    pattern ?? [
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black dark:text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default function WebDevelopmentPage() {
  const navigate = useNavigate();
  const [expandedIndustry, setExpandedIndustry] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [activeAddOn, setActiveAddOn] = useState(null);
  const addOnRef = useRef(null);
  const addOnId = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveAddOn(null);
      }
    }

    if (activeAddOn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeAddOn]);

  useOutsideClick(addOnRef, () => setActiveAddOn(null));

  return (
    <>
      <SEO
        title="Web Development Services | Digilynk"
        description="Custom websites, landing pages, e-commerce, and business sites built for performance, security, and growth."
        path="/services/web-development"
        image="/digilynk_about.png"
      />
      <div className="relative font-roboto bg-background">
        {/* Hero Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
        >
          <BackgroundGradientAnimation containerClassName="absolute inset-0 h-full w-full" className="h-full w-full">
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
              <motion.div
                className="w-full max-w-4xl flex flex-col items-center justify-center gap-8 md:gap-10"
                variants={container}
              >
                <motion.p
                  className="text-xs sm:text-sm md:text-base text-white/90 font-roboto tracking-[0.14em] uppercase mb-1 text-center"
                  variants={itemAnim}
                >
                  Need website for your business?
                </motion.p>

                <motion.div variants={itemAnim} className="w-full flex justify-center text-center">
                  <TypewriterEffectSmooth
                    words={heroWords.map((w) => ({ ...w, className: "text-white" }))}
                    cursorClassName="bg-white"
                    className="text-center"
                  />
                </motion.div>

                <motion.div
                  variants={itemAnim}
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
                    Get a quote
                  </button>
                </span>
                <span className="hero-cta-glow transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById("pricing");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="hero-cta-inner px-6 py-3 sm:px-8 sm:py-3.5 text-foreground font-roboto font-semibold text-sm sm:text-base"
                  >
                    View plans
                  </button>
                </span>
              </motion.div>
            </motion.div>
          </div>
          </BackgroundGradientAnimation>
        </motion.section>

        {/* Development Services Section */}
        <section className="py-20 lg:py-40 bg-background">
          <div className={`${spacing.containerMaxWidth} ${spacing.containerPadding}`}>
            <SectionHeader
              title="Development Services"
              description="Comprehensive web development solutions tailored to your business needs"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto mt-12">
              {(showAllServices ? developmentServices : developmentServices.slice(0, 8)).map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemAnim}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
                >
                  <Grid size={20} />
                  <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20 font-roboto">
                    {feature.title}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20 font-roboto">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
            {developmentServices.length > 8 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllServices(!showAllServices)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-sm font-medium font-roboto transition-colors"
                >
                  <span>{showAllServices ? "View Less" : "View More"}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showAllServices ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-20 lg:py-40 bg-background">
          <div className={`${spacing.containerMaxWidth} ${spacing.containerPadding}`}>
            <SectionHeader
              title="Industries We Serve"
              description="We design and develop high-performance websites tailored to the unique needs of businesses across diverse industries. Our domain-focused approach ensures scalability, security, and measurable business impact."
            />
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {(showAllIndustries ? industries : industries.slice(0, 6)).map((industry) => {
                const isExpanded = expandedIndustry === industry.title;
                return (
                  <motion.div
                    key={industry.title}
                    variants={itemAnim}
                    className="services-v2-card group overflow-hidden border-t-[1px] cursor-pointer"
                    style={{ borderTopColor: 'var(--border)' }}
                    onClick={() => setExpandedIndustry(isExpanded ? null : industry.title)}
                    animate={{
                      height: isExpanded ? 'auto' : '280px',
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="relative z-10 flex flex-col h-full p-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 font-roboto">
                        {industry.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed font-roboto mb-4">
                        {industry.description}
                      </p>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-border/50">
                              <p className="text-sm font-semibold text-foreground mb-2 font-roboto">
                                Key Focus:
                              </p>
                              <p className="text-sm text-muted-foreground leading-relaxed font-roboto">
                                {industry.focus}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            {industries.length > 6 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllIndustries(!showAllIndustries)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-sm font-medium font-roboto transition-colors"
                >
                  <span>{showAllIndustries ? "View Less" : "View More"}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showAllIndustries ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            )}
            <motion.div
              className="mt-12 text-center"
              variants={itemAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-roboto">
                We work with both startups and enterprises, delivering tailored web solutions that align with industry standards, user expectations, and business goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <motion.section
        id="pricing"
        className="relative bg-background py-32 md:py-40 lg:py-48 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-16 md:mb-20 lg:mb-24" variants={container}>
              <motion.h2
                className="text-2xl md:text-4xl font-medium text-foreground mb-4 font-roboto"
                variants={itemAnim}
              >
                Pricing Plans
              </motion.h2>
              <motion.p
                className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-roboto"
                variants={itemAnim}
              >
                Choose the perfect plan for your business needs
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 items-stretch"
              variants={container}
            >
              {/* Starter Plan */}
              <motion.div
                variants={itemAnim}
                className="services-v2-card group flex flex-col min-h-[600px]"
                style={{ borderTopColor: 'var(--border)' }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-white mb-2 font-roboto">
                    Starter Plan
                  </h3>
                  <p className="text-sm text-zinc-400 mb-3 font-medium font-roboto">
                    (Essential Website)
                  </p>

                  <div className="mb-4">
                    <span className="text-4xl font-semibold text-white">
                      ₹13,000
                    </span>
                    <span className="text-muted-foreground text-lg"> – ₹19,000*</span>
                  </div>

                  <div className="space-y-2 mb-6 flex-grow">
                    {[
                      "Up to 5 professionally structured pages",
                      "Clean, modern UI with pre-designed layout",
                      "Custom branding (colors, fonts, spacing)",
                      "Fully mobile-responsive design",
                      "Contact form with email notification",
                      "WhatsApp chat button integration",
                      "Basic on-page SEO (meta tags, URLs)",
                      "XML sitemap & robots.txt setup",
                      "SSL certificate & basic security",
                      "Cross-browser compatibility testing",
                      "Basic performance optimization",
                      "Social media link integration",
                      "One round of minor revisions",
                      "1 month post-delivery support",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/90 font-roboto leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-muted-foreground mb-4 pb-4 border-t border-border pt-4 font-roboto">
                    <p className="mb-2">
                      <strong className="text-foreground">Delivery:</strong> 7–10 Business Days
                    </p>
                    <p className="italic">
                      *Pricing may vary based on requirements
                    </p>
                  </div>

                  <div className="mt-auto">
                    <Button
                      onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        window.location.href = "/#contact";
                      }, 100);
                    }}
                      className="w-full bg-white hover:bg-gray-100 text-black font-semibold font-roboto"
                    >
                      Get a quote
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Growth Plan */}
              <motion.div
                variants={itemAnim}
                className="services-v2-card group flex flex-col min-h-[600px]"
                data-active="true"
                style={{ borderTopColor: 'var(--border)' }}
              >
                <div className="absolute top-4 right-4 bg-muted text-foreground px-3 py-1 rounded-full text-xs font-bold font-roboto z-20">
                  MOST POPULAR
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-white mb-2 font-roboto">
                    Growth Plan
                  </h3>
                  <p className="text-sm text-zinc-400 mb-3 font-medium font-roboto">
                    (Business Website)
                  </p>

                  <div className="mb-4">
                    <span className="text-4xl font-semibold text-white">
                      ₹30,000
                    </span>
                    <span className="text-zinc-400 text-lg"> – ₹42,000*</span>
                  </div>

                  <div className="space-y-2 mb-6 flex-grow">
                    {[
                      "Up to 10 fully customized pages",
                      "Custom UI/UX design aligned with brand",
                      "Enhanced visual design & consistency",
                      "Fully responsive across all devices",
                      "CMS integration (WordPress/Webflow)",
                      "Blog / article section setup",
                      "Multiple lead capture forms",
                      "Third-party API integration (basic)",
                      "Standard on-page SEO (keywords, headings)",
                      "Google Analytics & Search Console",
                      "Performance & speed optimization",
                      "Image optimization & lazy loading",
                      "Basic accessibility best practices",
                      "Security hardening & spam protection",
                      "Two rounds of revisions",
                      "Basic content management training",
                      "2 months post-delivery support",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/90 font-roboto leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-muted-foreground mb-4 pb-4 border-t border-border pt-4 font-roboto">
                    <p className="mb-2">
                      <strong className="text-white">Delivery:</strong> 14–20 Business Days
                    </p>
                    <p className="italic">
                      *Pricing subject to change based on requirements
                    </p>
                  </div>

                  <div className="mt-auto">
                    <Button
                      onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        window.location.href = "/#contact";
                      }, 100);
                    }}
                      className="w-full bg-white hover:bg-gray-100 text-black font-semibold font-roboto"
                    >
                      Get a quote
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Scale Plan */}
              <motion.div
                variants={itemAnim}
                className="services-v2-card group flex flex-col min-h-[600px]"
                style={{ borderTopColor: 'var(--border)' }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-white mb-2 font-roboto">
                    Scale Plan
                  </h3>
                  <p className="text-sm text-zinc-400 mb-3 font-medium font-roboto">
                    (Advanced / E-Commerce)
                  </p>

                  <div className="mb-4">
                    <span className="text-4xl font-semibold text-white">
                      ₹60,000
                    </span>
                    <span className="text-zinc-400 text-lg"> – ₹95,000+*</span>
                  </div>

                  <div className="space-y-2 mb-6 flex-grow">
                    {[
                      "Unlimited pages with custom layouts",
                      "Advanced UI/UX with detailed user flows",
                      "Fully custom visual design & interactions",
                      "CMS or custom admin dashboard",
                      "Complete e-commerce (products, cart, checkout)",
                      "Payment gateway (Razorpay/Stripe/etc.)",
                      "GST-ready invoice & order structure",
                      "Product categories, filters & search",
                      "Role-based admin access",
                      "Advanced on-page SEO structure",
                      "Schema markup & technical SEO",
                      "High-level performance optimization",
                      "Advanced security configuration",
                      "API integrations & automation workflows",
                      "Scalability & future-ready architecture",
                      "Multiple rounds of revisions",
                      "Basic deployment & production setup",
                      "3 months priority support",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/90 font-roboto leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-muted-foreground mb-4 pb-4 border-t border-border pt-4 font-roboto">
                    <p className="mb-2">
                      <strong className="text-white">Delivery:</strong> 25–40 Business Days
                    </p>
                    <p className="italic">
                      *Final pricing depends on project scope
                    </p>
                  </div>

                  <div className="mt-auto">
                    <Button
                      onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        window.location.href = "/#contact";
                      }, 100);
                    }}
                      className="w-full bg-white hover:bg-gray-100 text-black font-semibold font-roboto"
                    >
                      Get a quote
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Add-on Services */}
            <motion.div
              variants={itemAnim}
              className="w-full"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 font-roboto text-center">
                Add-On Services
              </h3>
              
              <AnimatePresence>
                {activeAddOn && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-gradient-to-br from-black via-neutral-950 to-black h-full w-full z-50 backdrop-blur-sm"
                  />
                )}
              </AnimatePresence>

              <AnimatePresence>
                {activeAddOn ? (
                  <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                    <motion.button
                      key={`button-${activeAddOn.title}-${addOnId}`}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white dark:bg-neutral-900 rounded-full h-8 w-8 z-[101]"
                      onClick={() => setActiveAddOn(null)}
                    >
                      <CloseIcon />
                    </motion.button>
                    <motion.div
                      layoutId={`card-${activeAddOn.title}-${addOnId}`}
                      ref={addOnRef}
                      className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-background border border-border rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <div className="p-5 border-b border-border">
                        <div className="flex justify-between items-start">
                          <div>
                            <motion.h3
                              layoutId={`title-${activeAddOn.title}-${addOnId}`}
                              className="text-xl font-bold text-foreground mb-1 font-roboto"
                            >
                              {activeAddOn.title}
                            </motion.h3>
                            <motion.p
                              layoutId={`description-${activeAddOn.description}-${addOnId}`}
                              className="text-sm text-muted-foreground font-roboto"
                            >
                              {activeAddOn.description}
                            </motion.p>
                          </div>
                          <button
                            className="hidden lg:flex items-center justify-center bg-muted hover:bg-muted/80 rounded-full h-8 w-8 transition-colors"
                            onClick={() => setActiveAddOn(null)}
                          >
                            <CloseIcon />
                          </button>
                        </div>
                      </div>
                      <div className="p-6 overflow-y-auto max-h-[50vh]">
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-2"
                        >
                          {activeAddOn.services.map((service, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between gap-4 p-3 rounded-md bg-muted/20 hover:bg-muted/40 transition-colors"
                            >
                              <div className="flex items-center gap-2.5 flex-1 min-w-0">
                                <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                <p className="text-sm text-foreground font-medium font-roboto truncate">
                                  {service.name}
                                </p>
                              </div>
                              <p className="text-xs text-muted-foreground font-semibold font-roboto whitespace-nowrap">
                                {service.price}
                              </p>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                      <div className="p-4 border-t border-border bg-muted/30">
                        <p className="text-xs text-muted-foreground italic text-center font-roboto">
                          All prices are indicative and may vary based on project scope, integrations, and timelines.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ) : null}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {addOnServices.map((card) => (
                  <motion.div
                    layoutId={`card-${card.title}-${addOnId}`}
                    key={card.title}
                    onClick={() => setActiveAddOn(card)}
                    className="services-v2-card group flex flex-col cursor-pointer overflow-hidden border-t-[1px] min-h-[180px]"
                    style={{ borderTopColor: 'var(--border)' }}
                  >
                    <div className="relative z-10 flex flex-col h-full p-4">
                      <motion.h3
                        layoutId={`title-${card.title}-${addOnId}`}
                        className="font-semibold text-lg text-foreground mb-1.5 font-roboto"
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${card.description}-${addOnId}`}
                        className="text-xs text-muted-foreground mb-3 font-roboto"
                      >
                        {card.description}
                      </motion.p>
                      <div className="mt-auto">
                        <motion.button
                          layoutId={`button-${card.title}-${addOnId}`}
                          className="w-full px-3 py-1.5 text-xs rounded-lg font-semibold bg-muted hover:bg-primary hover:text-primary-foreground text-foreground transition-colors font-roboto"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <SectionWrapper
          id="why-choose"
          aria-label="Why choose Digilynk"
        >
          <div className={`${spacing.containerMaxWidth} ${spacing.containerPadding}`}>
            <SectionHeader
              title="Why choose Digilynk?"
              description="We help you build, test, and deploy with confidence"
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10"
              variants={animations.container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {whyChooseItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={animations.item}
                    className={cn(
                      "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 h-full",
                      (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
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
                        {item.title}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 font-roboto">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </SectionWrapper>

        {/* PDF Viewer Section */}
        <section className="py-20 lg:py-40 bg-background">
          <div className={`${spacing.containerMaxWidth} ${spacing.containerPadding}`}>
            <SectionHeader
              title="Our Portfolio"
              description="View our creative web designs and projects"
            />
            <motion.div
              variants={itemAnim}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-12"
            >
              <div className="services-v2-card overflow-hidden p-0">
                <iframe
                  src="https://drive.google.com/file/d/1BHyvN8eg_29G5R80_hxopE5ak00cutru/preview"
                  className="w-full h-[600px] md:h-[800px] lg:h-[900px] border-0"
                  allow="autoplay"
                  title="Digilynk Portfolio PDF"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <motion.section
          className="relative py-32 md:py-40 lg:py-48 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />

          <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div className="space-y-8" variants={container}>
              <motion.h2
                className="text-3xl md:text-5xl font-medium text-white mb-6 font-roboto"
                variants={itemAnim}
              >
                Let's Discuss Your Requirements
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 font-roboto"
                variants={itemAnim}
              >
                A 15-minute call is all we need to understand your vision and
                provide expert consultation
              </motion.p>

              <motion.div variants={itemAnim}>
                <Button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      window.location.href = "/#contact";
                    }, 100);
                  }}
                  className="px-8 py-4 text-lg font-semibold bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 shadow-2xl font-roboto"
                >
                  Get a quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
