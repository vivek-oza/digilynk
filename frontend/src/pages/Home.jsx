"use client";

import React from "react";
import "../index.css";
import ClickSpark from "../components/reactbits/Animations/ClickSpark/ClickSpark";
import HeroSection from "../components/digilynk/HeroSection";
import ServicesSection from "../components/digilynk/ServicesSection";
import SeeOurWork from "../components/digilynk/SeeOurWork";
import WorkWithUs from "../components/digilynk/WorkWithUs";
import { FloatingButtons } from "../components/digilynk/FloatingButtons";
import TestComponent from "../components/ui/test-component";


export default function Home() {
  return (
    <div className="flex flex-col font-poppins">

      {/* Hero section */}
      <div id="top">
        <HeroSection />
      </div>

      {/* Services section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* See our us secttion*/}
      <SeeOurWork />

      {/* Work with section */}
      <WorkWithUs />

      <TestComponent />

      {/* <ContactForm /> */}

      {/* Whatsapp chat button */}
      {/* Back to top button */}
      <FloatingButtons></FloatingButtons>
    </div>
  );
}
