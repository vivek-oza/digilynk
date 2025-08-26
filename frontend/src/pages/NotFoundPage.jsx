import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import hero_new from "../assets/images/hero_new.webp";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  return (
    <div className="md:min-h-[calc(100vh-5rem)] min-h-[calc(100vh-40vh)] md:mt-16 mt-32 relative overflow-hidden flex md:items-center justify-center">
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="w-full max-w-8xl py-16 relative z-10 rounded-xl mx-10"
        style={{
          backgroundImage: `url(${hero_new})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center flex py-16 flex-col items-center gap-4">
          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-9xl font-semibold text-white tracking-tight"
          >
            404
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-3xl text-gray-100 max-w-2xl"
          >
            The page you’re looking for doesn’t exist. Let’s get you back on track.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-6 flex flex-col sm:flex-row gap-4">
            <ShimmerButton
              onClick={() => navigate("/")}
              className="text-white px-8 py-4 text-lg font-semibold"
              shimmerColor="#ffffff"
              shimmerSize="0.15em"
              background="rgba(0, 0, 0, 1)"
            >
              Back to Home
            </ShimmerButton>
            <ShimmerButton
              onClick={() => navigate("/contact")}
              className="text-white px-8 py-4 text-lg font-semibold"
              shimmerColor="#ffffff"
              shimmerSize="0.15em"
              background="rgba(0, 0, 0, 1)"
            >
              Contact Us
            </ShimmerButton>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
