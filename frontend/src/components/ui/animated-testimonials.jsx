"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
  className,
}) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay && testimonials.length > 0) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  if (!testimonials?.length) return null;

  const activeTestimonial = testimonials[active];

  return (
    <div className={cn("relative mx-auto w-full max-w-4xl", className)}>
      {/* Avatar strip - clickable circles */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name + index}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              isActive(index)
                ? "border-primary scale-110 ring-2 ring-primary/20"
                : "border-border hover:border-muted-foreground/50 hover:scale-105"
            )}
          >
            <img
              src={testimonial.src}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Active testimonial content */}
      <div className="relative min-h-[200px] px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <p className="mb-2 text-lg font-semibold text-foreground md:text-xl">
              {activeTestimonial.name}
            </p>
            <p className="mb-6 text-sm text-muted-foreground">
              {activeTestimonial.designation}
            </p>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {activeTestimonial.quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.03,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next arrows */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
