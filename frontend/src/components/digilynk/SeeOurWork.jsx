import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShimmerButton } from "../magicui/shimmer-button";

export default function SeeOurWork() {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden font-roboto">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <motion.div className="space-y-12" variants={container}>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
            variants={fadeInUp}
          >
            See Our Work
          </motion.h2>

          <motion.p
            className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
            variants={fadeInUp}
          >
            Explore our portfolio of successful projects that showcase our
            expertise in web development, software testing, and graphic design.
          </motion.p>

          <motion.p
            className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
            variants={fadeInUp}
          >
            Each project represents our commitment to quality, innovation, and
            delivering solutions that drive real business results.
          </motion.p>

          <motion.div variants={fadeInUp} className="inline-block">
            <ShimmerButton
              onClick={() => navigate("/contact")}
              className="text-white px-10 py-5 text-xl font-semibold font-roboto"
              shimmerColor="#ffffff"
              shimmerSize="0.15em"
              background="rgba(0, 0, 0, 1)"
            >
              View Portfolio
            </ShimmerButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
