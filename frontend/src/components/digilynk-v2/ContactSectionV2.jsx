/**
 * ContactSectionV2 — Contact us content.
 * Same UI pattern as Services / About. Includes heading, email, phone, form.
 */
import React from "react";
import { motion } from "framer-motion";
import SimpleContactForm from "@/components/digilynk/SimpleContactForm";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import { animations, spacing, typography, colors } from "@/lib/designSystem";

export default function ContactSectionV2() {
  return (
    <SectionWrapper
      id="contact"
      aria-label="Contact us"
      className="pt-40 md:pt-48 pb-32 md:pb-40"
    >
      <div className={`${spacing.containerMaxWidthNarrow} ${spacing.containerPadding}`}>
        <SectionHeader
          title="Book a call today"
          description="10 mins is all we need to discuss your project and quote for free."
          className="mb-6 md:mb-8"
        />

        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={animations.item} className="max-w-xl mx-auto">
            <SimpleContactForm />
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
