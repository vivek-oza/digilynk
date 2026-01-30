/**
 * SoftwareTestingPage — Updated with new theme: dark bg, rainbow glow cards, glass morphism
 * Consistent with v2 design system
 */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { cn } from "../lib/utils";
import {
  HeartPulse,
  ShoppingCart,
  ShieldCheck,
  FlaskConical,
  BrainCircuit,
  Gamepad2,
  CreditCard,
  Hotel,
  Zap,
  Gauge,
  Code2,
  Eye,
  Cpu,
  Smartphone,
  Database,
  CheckCircle,
  Target,
  Clock,
  Users,
  FileText,
  Globe,
} from "lucide-react";

// --- Grid overlay (same as WebDevelopmentPage) ---
function GridPattern({ width, height, x, y, squares, ...props }) {
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id="grid-pattern-st"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#grid-pattern-st)" />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy]) => (
            <rect
              strokeWidth="0"
              key={`${sx}-${sy}`}
              width={width + 1}
              height={height + 1}
              x={sx * width}
              y={sy * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function Grid({ pattern, size }) {
  const p =
    pattern ?? [
      [8, 2],
      [9, 4],
      [10, 3],
      [11, 5],
      [12, 2],
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

const industriesData = [
  {
    title: "Healthcare",
    description:
      "Delivering secure, reliable, and compliant testing for critical healthcare systems.",
    icon: HeartPulse,
  },
  {
    title: "Insurance & Risk Management",
    description:
      "Ensuring flawless policy management and claims processing through robust QA.",
    icon: ShieldCheck,
  },
  {
    title: "E-commerce",
    description:
      "Enabling smooth, secure, and bug-free shopping experiences through QA.",
    icon: CreditCard,
  },
  {
    title: "Mobile Gaming",
    description:
      "Ensuring high-performance and crash-free gameplay across devices.",
    icon: Gamepad2,
  },
  {
    title: "FMCG",
    description:
      "Optimizing digital touchpoints with reliable and user-centric testing.",
    icon: ShoppingCart,
  },
  {
    title: "AI-Based Platforms",
    description:
      "Testing LLMs and AI tools for accuracy, safety, and optimal performance.",
    icon: BrainCircuit,
  },
  {
    title: "Hospitality",
    description:
      "Testing booking and service platforms for seamless guest experiences.",
    icon: Hotel,
  },
  {
    title: "EdTech",
    description:
      "Validating learning management systems and educational platforms.",
    icon: FlaskConical,
  },
  {
    title: "Job Portals",
    description:
      "Ensuring seamless candidate and employer experiences.",
    icon: Users,
  },
  {
    title: "Designing & Printing",
    description:
      "Testing design tools and printing management systems.",
    icon: Eye,
  },
];

const initialDomainsToShow = 6;

const testingServicesData = [
  {
    title: "Functional Testing",
    description:
      "We validate that every feature works exactly as expected under real-world conditions. Includes manual, regression, smoke, sanity, exploratory, and UI/UX testing.",
    icon: Code2,
    details: ["Manual Testing", "Regression Testing", "Smoke Testing", "Sanity Testing", "Exploratory Testing", "Ad-hoc Testing", "UI/UX Testing"],
  },
  {
    title: "Automation Testing",
    description:
      "We build reliable and maintainable automation frameworks to accelerate release cycles. Web and mobile automation with Playwright, Selenium, Appium.",
    icon: Zap,
    details: ["Web Automation", "Mobile Automation", "Playwright, Selenium, Appium", "JavaScript, Python, Java", "CI/CD Integration"],
  },
  {
    title: "Performance Testing",
    description:
      "We evaluate system behavior to ensure performance, scalability, and reliability under high traffic and peak load conditions using Apache JMeter.",
    icon: Gauge,
    details: ["Performance Testing", "Load Testing", "Stress Testing", "Scalability Testing", "Apache JMeter"],
  },
  {
    title: "API Testing",
    description:
      "We ensure backend services are reliable, secure, and consistent. Functional, integration, performance, validation, fuzz, and reliability testing.",
    icon: Cpu,
    details: ["Functional Testing", "Integration Testing", "Performance Testing", "Validation Testing", "Fuzz Testing", "Postman, Swagger"],
  },
  {
    title: "Cross-Platform Testing",
    description:
      "We ensure consistent user experience across Chrome, Firefox, Safari, Edge, and devices using BrowserStack and LambdaTest.",
    icon: Smartphone,
    details: ["Browser Compatibility", "Device Testing", "Desktop, Mobile, Tablets", "BrowserStack, LambdaTest"],
  },
  {
    title: "AI Chatbot Testing",
    description:
      "We specialize in testing AI-driven conversational systems for response accuracy, context retention, NLP, error handling, and compliance.",
    icon: BrainCircuit,
    details: ["Response Accuracy", "Context Retention", "NLP Testing", "Error Handling", "Load Handling", "Ethical Compliance"],
  },
];

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

const whyChooseItems = [
  {
    id: 1,
    icon: Code2,
    title: "Modern Technology Stack",
    text: "We use cutting-edge testing tools and frameworks including Playwright, Selenium, Appium, and industry-standard test management platforms to deliver comprehensive QA solutions.",
  },
  {
    id: 2,
    icon: Users,
    title: "Skilled & Experienced Professionals",
    text: "Our QA team brings years of combined experience across diverse industries. We understand business risks and user expectations deeply.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Cost-Effective Solutions",
    text: "We deliver high-quality QA services that provide excellent value, helping you achieve quality goals within budget through efficient testing strategies.",
  },
  {
    id: 4,
    icon: Clock,
    title: "Faster Delivery Cycles",
    text: "Our automation frameworks and efficient testing processes accelerate release cycles, reducing manual effort and enabling faster time-to-market.",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "Scalable & Secure Architecture",
    text: "We test for scalability, security, and reliability, ensuring your applications perform reliably under high traffic and peak load conditions.",
  },
  {
    id: 6,
    icon: CheckCircle,
    title: "Quality-First Approach",
    text: "Quality is embedded into every stage. We go beyond surface-level testing to rigorously examine every aspect, ensuring your product meets the highest standards.",
  },
];

export default function SoftwareTestingPage() {
  const navigate = useNavigate();
  const [showAllDomains, setShowAllDomains] = useState(false);

  return (
    <>
      <SEO
        title="Software Testing Services | Digilynk"
        description="End-to-end QA: automation, performance, functional, API, mobile, and UX testing to ensure reliability and speed."
        path="/services/software-testing"
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
              <motion.div className="w-full max-w-4xl flex flex-col items-center gap-8 md:gap-10" variants={container}>
                <motion.p
                  className="text-xs sm:text-sm md:text-base text-white/90 font-roboto tracking-[0.14em] uppercase mb-1 text-center"
                  variants={itemAnim}
                >
                  Reliable QA for modern products
                </motion.p>
                <motion.div variants={itemAnim} className="w-full flex justify-center text-center">
                  <TypewriterEffectSmooth
                    words={[{ text: "Software Testing Services", className: "text-white" }]}
                    cursorClassName="bg-white"
                    className="text-center"
                  />
                </motion.div>

                <motion.div variants={itemAnim} className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mt-2">
                  <span className="hero-cta-glow transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                    <button
                      type="button"
                      onClick={() => {
                        navigate("/");
                        setTimeout(() => {
                          window.location.href = "/#contact";
                        }, 100);
                      }}
                      className="hero-cta-inner px-6 py-3 sm:px-8 sm:py-3.5 text-foreground font-roboto font-semibold text-base sm:text-lg"
                    >
                      Get a quote
                    </button>
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </BackgroundGradientAnimation>
        </motion.section>

        {/* Testing Services Section */}
        <motion.section
          className="relative bg-background py-32 md:py-40 lg:py-48 overflow-hidden"
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

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-16 md:mb-20 lg:mb-24" variants={container}>
              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 font-roboto"
                variants={itemAnim}
              >
                Testing Services
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-roboto"
                variants={itemAnim}
              >
                Comprehensive QA solutions tailored to validate every aspect of
                your product
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
            >
              {testingServicesData.map((service, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={itemAnim}
                    className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden group"
                  >
                    <Grid size={20} />
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-roboto">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed font-roboto mb-3 group-hover:text-foreground/80 transition-colors">
                        {service.description}
                      </p>

                      {service.details && (
                        <ul className="space-y-1 mt-3">
                          {service.details.slice(0, 3).map((detail, i) => (
                            <li key={i} className="text-xs text-muted-foreground/80 font-roboto flex items-center gap-1">
                              <span className="text-foreground/60">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* Industries Section */}
        <motion.section
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
                className="text-2xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 font-roboto"
                variants={itemAnim}
              >
                Industries We Serve
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-roboto"
                variants={itemAnim}
              >
                Delivering tailored QA solutions for your industry's unique
                challenges
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12"
              variants={container}
            >
              {(showAllDomains ? industriesData : industriesData.slice(0, initialDomainsToShow)).map((industry, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={itemAnim}
                    className="services-v2-card group overflow-hidden border-t-[1px]"
                    style={{ borderTopColor: "var(--border)" }}
                  >
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 font-roboto">
                        {industry.title}
                      </h3>

                      <p className="text-base text-muted-foreground leading-relaxed font-roboto group-hover:text-foreground/80 transition-colors">
                        {industry.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            {industriesData.length > initialDomainsToShow && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllDomains(!showAllDomains)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-sm font-medium font-roboto transition-colors"
                >
                  <span>{showAllDomains ? "View Less" : "View More"}</span>
                </button>
              </div>
            )}
          </div>
        </motion.section>

        
        {/* Why Choose Us Section */}
        <motion.section
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
                "radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-16 md:mb-20 lg:mb-24" variants={container}>
              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 font-roboto"
                variants={itemAnim}
              >
                Why choose Digilynk?
              </motion.h2>
              <motion.p
                className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-roboto"
                variants={itemAnim}
              >
                We help you build, test, and deploy with confidence
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10"
              variants={container}
            >
              {whyChooseItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={itemAnim}
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
        </motion.section>

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

          <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <motion.div className="space-y-8" variants={container}>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
                variants={itemAnim}
              >
                Build With Confidence
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-roboto"
                variants={itemAnim}
              >
                Flawless software isn't optional — it's expected. We deliver
                comprehensive QA that catches bugs early, boosts performance,
                and ensures your product exceeds quality standards every time.
              </motion.p>

              <motion.div variants={itemAnim} className="inline-block">
                <Button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      window.location.href = "/#contact";
                    }, 100);
                  }}
                  className="bg-foreground text-background px-10 py-5 text-xl font-semibold font-roboto hover:bg-foreground/90 transition-all duration-300 rounded-xl"
                >
                  Get a quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
