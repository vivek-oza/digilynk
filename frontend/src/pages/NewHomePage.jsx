"use client";

/**
 * HomePage — Main home page.
 * Sections: Hero, Services, Trusted by clients, Work samples, What client says, FAQ, Contact.
 * Reuses: Navbar & Footer (via Layout), TestimonialMarquee, CompanyMarquee.
 * All section components live in components/digilynk-v2 (independent, factored).
 */
import React from "react";
import SEO from "@/components/SEO";

import HeroSectionV2 from "@/components/digilynk-v2/HeroSectionV2";
import ServicesSectionV2 from "@/components/digilynk-v2/ServicesSectionV2";
import WhyChooseSectionV2 from "@/components/digilynk-v2/WhyChooseSectionV2";
import FaqSectionV2 from "@/components/digilynk-v2/FaqSectionV2";
import ContactSectionV2 from "@/components/digilynk-v2/ContactSectionV2";
import AboutUsSectionV2 from "@/components/digilynk-v2/AboutUsSectionV2";

import CompanyMarquee from "@/components/digilynk/CompanyMarquee";
import TestimonialMarquee from "@/components/digilynk/TestimonialMarquee";
import RateUsSectionV2 from "@/components/digilynk-v2/RateUsSectionV2";
import SplashCursor from "@/components/reactbits/Animations/SplashCursor/SplashCursor";

export default function NewHomePage() {
  return (
    <>
      <SplashCursor />
      <SEO
        title="Digilynk | Modern Web Development Agency"
        description="We design and develop high-performance websites, apps, and digital experiences that help businesses grow."
        path="/"
        image="/digilynk_about.png"
      />
      <div className="flex flex-col font-roboto overflow-x-hidden">
        <div id="top">
          <HeroSectionV2 />
        </div>

        <div id="services">
          <ServicesSectionV2 />
        </div>

        {/* Trusted by clients — existing CompanyMarquee, theme intact */}
        <CompanyMarquee />

        {/* What client says about us — existing TestimonialMarquee, theme intact */}
        <TestimonialMarquee />

        <div id="contact">
          <ContactSectionV2 />
        </div>

        <div id="faq">
          <FaqSectionV2 />
        </div>

        <WhyChooseSectionV2 />

        <div id="about">
          <AboutUsSectionV2 />
        </div>

        <div id="rate-us">
          <RateUsSectionV2 />
        </div>
      </div>
    </>
  );
}
