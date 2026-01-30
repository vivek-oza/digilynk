/**
 * RateUsSectionV2 — Rate us on Google section with 3D card.
 * Uses PinContainer for subtle 3D hover, aligned with v2 theme.
 */
import React from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeader from "@/components/shared/SectionHeader";
import { animations, spacing } from "@/lib/designSystem";
import { PinContainer } from "@/components/ui/3d-pin";

export default function RateUsSectionV2() {
  return (
    <SectionWrapper
      id="rate-us"
      aria-label="Rate us on Google"
      className="pt-40 md:pt-48 pb-32 md:pb-40"
    >
      <div className={`${spacing.containerMaxWidthNarrow} ${spacing.containerPadding}`}>
        <SectionHeader
          title="Rate us on Google"
          description="It only takes a minute and helps other businesses discover us."
        />

        <motion.div
          variants={animations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 flex justify-center"
        >
          <motion.div variants={animations.item}>
            <PinContainer>
              <div className="flex h-[22rem] w-[22rem] sm:h-[24rem] sm:w-[26rem] flex-col p-5 sm:p-7 tracking-tight text-slate-100/80">
                <h3 className="text-xl font-semibold text-foreground font-roboto">
                  Loved working with us?
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground font-roboto max-w-md">
                  Leave a quick Google review so other founders and teams can trust Digilynk with their next project.
                </p>

                <div className="mt-5 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1614854262178-03c96e9c8c28?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Customer leaving a positive review"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://g.page/r/CaJmAHoO9fyaEAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <span className="hero-cta-glow w-full inline-flex">
                      <span className="hero-cta-inner inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 text-sm sm:text-base font-semibold text-foreground font-roboto">
                        <Star className="w-4 h-4" />
                        <span>Rate us</span>
                      </span>
                    </span>
                  </a>

                  <a
                    href="https://g.co/kgs/fmvoHYc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <span className="hero-cta-glow w-full inline-flex">
                      <span className="hero-cta-inner inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 text-sm sm:text-base font-semibold text-foreground font-roboto">
                        <ExternalLink className="w-4 h-4" />
                        <span>View profile</span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </PinContainer>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
