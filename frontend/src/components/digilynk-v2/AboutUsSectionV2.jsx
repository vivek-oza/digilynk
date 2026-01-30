"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import { spacing } from "@/lib/designSystem";

const content = [
  {
    title: "Who we are",
    description:
      "Digilynk is a web development and QA studio from India. We help small and growing teams turn ideas into clean, reliable websites that feel fast, look modern, and don’t break in production.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white">
        <div className="text-center px-8">
          <h3 className="text-2xl font-bold mb-4">Development + QA</h3>
          <p className="text-lg">One team, complete solutions</p>
        </div>
      </div>
    ),
  },
  {
    title: "How we build your website",
    description:
      "We design and develop responsive, performance-focused websites using modern tools like React, Next.js, Tailwind, and Node. Every build is structured, documented, and ready to scale as your business grows.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <div className="text-center px-8">
          <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
          <p className="text-lg">React • Next.js • Node.js • Playwright</p>
        </div>
      </div>
    ),
  },
  {
    title: "How we ensure quality",
    description:
      "Quality is baked in, not bolted on. We combine manual and automation testing—covering functional flows, UI/UX, performance, API, and cross-device checks—so your users get a smooth experience from day one.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <div className="text-center px-8">
          <h3 className="text-2xl font-bold mb-4">Partnership</h3>
          <p className="text-lg">Built for long-term success</p>
        </div>
      </div>
    ),
  },
  {
    title: "What you get with Digilynk",
    description:
      "Clear communication, realistic timelines, and support after launch. We stay available for updates, add-ons, and maintenance so your website keeps evolving with your business.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white">
        <div className="text-center px-8">
          <h3 className="text-2xl font-bold mb-4">Results</h3>
          <p className="text-lg">Measurable outcomes, real impact</p>
        </div>
      </div>
    ),
  },
];

export default function AboutUsSectionV2() {
  return (
    <SectionWrapper
      id="about"
      aria-label="About Digilynk"
      className="py-20 md:py-28"
    >
      <div className={`${spacing.containerMaxWidth} ${spacing.containerPadding}`}>
        <SectionHeader
          title="About Digilynk"
          description="A focused web development and QA studio helping businesses launch reliable, fast, and user-friendly websites."
        />

        <div className="w-full py-4 mt-8 md:mt-12">
          <StickyScroll content={content} />
        </div>
      </div>
    </SectionWrapper>
  );
}
