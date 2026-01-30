/**
 * AboutSectionV2 — About us content. Matches Services UI (bg, typography, layout).
 * Uses HoverEffect component for Core Values and Why Choose Us sections.
 */
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  Handshake,
  TrendingUp,
  Code,
  MessageSquare,
  Clock,
  Zap,
} from "lucide-react";
import { HoverEffect } from "./HoverEffect";

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

// Core Values - principles that guide everything we do
const coreValues = [
  {
    icon: Sparkles,
    title: "Creativity & Innovation",
    description:
      "We push boundaries and think outside the box to create unique digital experiences that stand out in today's competitive landscape. Every project is an opportunity to innovate.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description:
      "Every project is delivered with the highest standards of quality, attention to detail, and professional craftsmanship. We never compromise on excellence.",
  },
  {
    icon: Handshake,
    title: "Client Partnership",
    description:
      "We build long-term relationships based on trust, transparency, and mutual success rather than just delivering services. Your success is our success.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description:
      "Our focus is always on measurable outcomes and tangible business value for our clients. We track metrics that matter and deliver real impact.",
  },
];

// Why Choose Us - unique benefits and advantages
const whyChoose = [
  {
    icon: Code,
    title: "Modern Technology Stack",
    description:
      "We use cutting-edge technologies and frameworks to build fast, scalable, and maintainable solutions. Stay ahead with the latest tools and best practices.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Clear, honest communication throughout the project lifecycle. Regular updates, detailed reports, and open dialogue ensure you're always in the loop.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect deadlines and deliver projects on schedule without compromising quality. Your timeline is our commitment, and we take it seriously.",
  },
  {
    icon: Zap,
    title: "Experienced Team",
    description:
      "Our team brings years of combined experience in web development and software testing. We've worked with diverse industries and understand what works.",
  },
];

export default function AboutSectionV2() {
  return (
    <section
      id="about"
      className="relative bg-background py-24 md:py-32 overflow-hidden font-roboto"
      aria-label="About us"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
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
            className="text-2xl md:text-4xl font-medium text-white font-roboto"
          >
            About us
          </motion.h2>
          <motion.p
            variants={itemAnim}
            className="mt-3 text-zinc-400 max-w-2xl mx-auto font-roboto"
          >
            We craft impactful, user-centric digital solutions that drive real
            business results
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-6 text-zinc-300 font-roboto text-base md:text-lg leading-relaxed mb-16 md:mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p variants={itemAnim}>
            At Digilynk, we help businesses turn ideas into reliable digital
            solutions. We're a technology services company driven by experienced
            professionals, delivering high-quality Web Development and Software
            Testing with a focus on performance, usability, and trust.
          </motion.p>
          <motion.p variants={itemAnim}>
            Our Web Development team builds websites that combine design
            precision with technical strength. From corporate sites to
            e-commerce platforms, we create fast, secure, and responsive
            solutions that help brands connect with customers and grow online.
          </motion.p>
          <motion.p variants={itemAnim}>
            Our Quality Assurance team ensures every product we test meets the
            highest standards. We specialize in manual and automation
            testing—functional, regression, UI/UX, and cross-platform—so your
            applications work seamlessly across devices and environments.
          </motion.p>
          <motion.p variants={itemAnim} className="text-white font-medium">
            At Digilynk, we don't just develop and test software—we strengthen
            the digital foundation of your business.
          </motion.p>
        </motion.div>

        <motion.div
          className="text-center mb-10 md:mb-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.h3
            variants={itemAnim}
            className="text-xl md:text-2xl font-semibold text-white font-roboto"
          >
            Our Core Values
          </motion.h3>
          <motion.p
            variants={itemAnim}
            className="mt-2 text-zinc-400 font-roboto"
          >
            The principles that guide everything we do
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <HoverEffect items={coreValues} />
        </motion.div>

        <motion.div
          className="text-center mb-10 md:mb-12 mt-16 md:mt-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.h3
            variants={itemAnim}
            className="text-xl md:text-2xl font-semibold text-white font-roboto"
          >
            Why Choose Us
          </motion.h3>
          <motion.p
            variants={itemAnim}
            className="mt-2 text-zinc-400 font-roboto"
          >
            What sets us apart and makes us the right partner for your project
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <HoverEffect items={whyChoose} />
        </motion.div>
      </div>
    </section>
  );
}
