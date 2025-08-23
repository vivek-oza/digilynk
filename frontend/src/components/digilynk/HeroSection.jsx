import React, { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ShimmerButton } from "../magicui/shimmer-button";
import RotatingText from "../reactbits/TextAnimations/RotatingText/RotatingText";
import { useNavigate } from "react-router-dom";
import { cn } from "../../lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const World = React.lazy(() =>
  import("../ui/globe").then((m) => ({ default: m.World }))
);
import hero_new from "../../assets/images/hero_new.webp";

export default function HeroSection() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#1a1a1a",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
    zoom: 2.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 24.6139,
      endLng: 72.209,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  const navigate = useNavigate();

  function handleContactClick() {
    navigate("/contact");
  }
  function handleLearnmoreClick() {
    navigate("/services");
  }

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
    <>
      <div
        id="hero"
        className="md:min-h-[calc(100vh-5rem)] min-h-[calc(100vh-40vh)] bg:url('../../assets/images/hero_new.webp') md:mt-16 mt-32 relative overflow-hidden flex md:items-center justify-center"
      >
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="w-full  max-w-8xl py-10 relative z-10 rounded-xl mx-10"
          style={{
            backgroundImage: `url(${hero_new})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Main Content */}
          <div className="text-center flex py-10 flex-col items-center">
            <div className="text-center  px-4 flex flex-col items-center">
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-8xl font-semibold text-white mb-6 whitespace-nowrap"
              >
                <span className="">Digilynk</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-3xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto"
              >
                We build tech solutions for your business.
              </motion.p>

              <motion.div variants={fadeInUp} className="mb-8">
                <ShimmerButton
                  onClick={handleContactClick}
                  className="text-white px-8 py-4 text-lg font-semibold"
                  shimmerColor="#ffffff"
                  shimmerSize="0.15em"
                  background="rgba(0, 0, 0, 1)"
                >
                  Get Started
                </ShimmerButton>
              </motion.div>
            </div>
            {/* Globe */}
            {/* <div className="md:h-[600px] h-[350px] aspect-square p-0 m-0">
              <React.Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
                </div>
              }>
                <World data={sampleArcs} globeConfig={globeConfig} />
              </React.Suspense>
            </div> */}
          </div>
        </motion.section>
      </div>

      {/* Second Section */}
      <motion.section
        className="relative bg-black py-16 md:py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={container}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8"
            variants={fadeInUp}
          >
            <span>We Build</span>
            <RotatingText
              texts={["Smarter", "Faster", "Better"]}
              colors={["text-white", "text-white", "text-white"]}
              bgColors={["", "", ""]}
              mainClassName="px-3 sm:px-4 md:px-6 py-2 md:py-3 overflow-hidden justify-center rounded-2xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
            <span>Websites</span>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-light"
            variants={fadeInUp}
          >
            We design and develop websites, apps and digital experiences that
            help our clients{" "}
            <span className="font-medium text-white">grow</span>,{" "}
            <span className="font-medium text-white">innovate</span>, and{" "}
            <span className="font-medium text-white">transform</span>. We
            listen, learn and understand before we build. We identify your goals
            together, then use our expertise to find that sweet spot of
            realistic and impactful.
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center mt-12 space-x-2"
            variants={fadeInUp}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
