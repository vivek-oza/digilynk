import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShimmerButton } from "../magicui/shimmer-button";

export default function WorkWithUs() {
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
            backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
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
            Ready to Work Together?
          </motion.h2>

          <motion.p
            className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
            variants={fadeInUp}
          >
            Let's transform your ideas into reality. Whether you need a stunning
            website, robust software testing, or compelling graphic design —
            we're here to help you succeed.
          </motion.p>

          <motion.p
            className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
            variants={fadeInUp}
          >
            Our team combines creativity with technical expertise to deliver
            solutions that not only meet your requirements but exceed your
            expectations.
          </motion.p>

          <motion.div variants={fadeInUp} className="inline-block">
            <ShimmerButton
              onClick={() => navigate("/contact")}
              className="text-white px-10 py-5 text-xl font-semibold font-roboto"
              shimmerColor="#ffffff"
              shimmerSize="0.15em"
              background="rgba(0, 0, 0, 1)"
            >
              Start Your Project
            </ShimmerButton>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center mt-12 space-x-3"
            variants={fadeInUp}
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div
              className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
