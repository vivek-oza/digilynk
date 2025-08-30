"use client";

import React from "react";
import "../index.css";
import ClickSpark from "../components/reactbits/Animations/ClickSpark/ClickSpark";
import HeroSection from "../components/digilynk/HeroSection";
import ServicesSection from "../components/digilynk/ServicesSection";
import WorkWithUs from "../components/digilynk/WorkWithUs";
import OurStatsSection from "../components/digilynk/OurStatsSection";
import { FloatingButtons } from "../components/digilynk/FloatingButtons";
import TestComponent from "../components/ui/test-component";
import SEO from "../components/SEO";
import TestimonialMarquee from "../components/digilynk/TestimonialMarquee";
import CompanyMarquee from "../components/digilynk/CompanyMarquee";
import BlogSection from "../components/digilynk/BlogSection";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Digilynk | Modern Web Development Agency"
        description="We design and develop high-performance websites, apps, and digital experiences that help businesses grow."
        path="/"
        image="/digilynk_about.png"
      />
      <div className="flex flex-col font-roboto overflow-y-hidden">
        {/* Hero section */}
        <div id="top" className="overflow-y-hidden">
          <HeroSection />
        </div>
        {/* Services section */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* Our Stats Section */}
        <OurStatsSection />

        {/* Company logos marquee */}
        <CompanyMarquee />

        {/* Testimonials after Services */}
        <TestimonialMarquee />

        {/* Blog Section */}
        <BlogSection />

        {/* Work with section */}
        <WorkWithUs />

        {/* Test component */}
        <TestComponent />

        {/* Floating buttons */}
        <FloatingButtons></FloatingButtons>
      </div>
    </>
  );
}
