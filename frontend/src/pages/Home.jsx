"use client";

import React from "react";
import "../index.css";
import ClickSpark from "../components/reactbits/Animations/ClickSpark/ClickSpark";
import HeroSection from "../components/digilynk/HeroSection";
import ServicesSection from "../components/digilynk/ServicesSection";
import SeeOurWork from "../components/digilynk/SeeOurWork";
// import HeroSection from "@/components/digilynk/HeroSection";
// import ServicesSection from "@/components/digilynk/Sections/ServicesSection";
// import { FeaturesMarquee } from "@/components/digilynk/Sections/FeaturesMarquee";
// import WhyChooseUs from "@/components/digilynk/Sections/WhyChooseUs";
// import ClickSpark from "../components/reactbits/Animations/ClickSpark/ClickSpark";
// import WorkWithUs from "../components/digilynk/Sections/WorkWithUs";



export default function Home() {
  return (
    <div className="flex flex-col poppins">

      {/* Hero section */}
      <div id="top">
        <HeroSection />
      </div>

      {/* Services section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* See our us secttion*/}
      <SeeOurWork></SeeOurWork>

      {/* Features scroll section */}
      {/* <FeaturesMarquee></FeaturesMarquee> */}

      {/* Whatsapp chat button */}
      {/* Back to top button */}
    </div>
  );
}
