/**
 * ContactPage — Contact page matching v2 design system.
 * Consistent with home page contact section design.
 */
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SimpleContactForm from "../components/digilynk/SimpleContactForm";
import { Mail, Phone, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { container, itemAnim } from "@/components/shared/animations";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/shared/PageHero";

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Contact Digilynk | Start Your Project"
        description="Contact Digilynk for web development, testing, and design services. We typically respond within 24 hours."
        path="/contact"
        image="/digilynk_about.png"
      />
      <div className="relative font-roboto bg-background">
        {/* Hero Section */}
        <SectionWrapper
          id="contact-hero"
          borderTop={false}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div className="space-y-8" variants={container}>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground tracking-tight leading-[1.08] font-roboto text-center"
                variants={itemAnim}
              >
                Let's discuss your ideas
              </motion.h1>

              <motion.p
                className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-roboto text-center"
                variants={itemAnim}
              >
                Get in touch—we typically respond within 24 hours
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8"
                variants={itemAnim}
              >
                <motion.a
                  href="mailto:digilynksolutions@gmail.com"
                  variants={itemAnim}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group font-roboto"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">
                    digilynksolutions@gmail.com
                  </span>
                </motion.a>
                <span className="hidden sm:block text-muted-foreground/50 text-2xl">•</span>
                <motion.a
                  href="tel:+916353959930"
                  variants={itemAnim}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group font-roboto"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">+91 6353959930</span>
                </motion.a>
              </motion.div>

              <motion.div variants={itemAnim} className="pt-4">
                <Button
                  onClick={() => navigate("/#contact")}
                  variant="outline"
                  className="inline-flex items-center gap-2 text-foreground border-border hover:border-foreground/20 hover:bg-muted font-roboto"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go to Home Contact Section</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Form Section */}
        <SectionWrapper id="contact-form">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <motion.div variants={itemAnim}>
              <SimpleContactForm />
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
    </>
  );
}
