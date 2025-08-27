import React from "react";
import { motion } from "framer-motion";
import FaqSection from "../components/digilynk/FaqSection";
import { RainbowButton } from "../components/magicui/rainbow-button";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import {
  Heart,
  Target,
  Eye,
  Users,
  Sparkles,
  Award,
  Handshake,
  TrendingUp,
} from "lucide-react";

export default function AboutUs() {
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

  const coreValues = [
    {
      icon: <Sparkles className="w-8 h-8 text-blue-400" />,
      title: "Creativity & Innovation",
      description:
        "We push boundaries and think outside the box to create unique digital experiences that stand out in today's competitive landscape.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: "Professional Excellence",
      description:
        "Every project is delivered with the highest standards of quality, attention to detail, and professional craftsmanship.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-green-400" />,
      title: "Client Partnership",
      description:
        "We build long-term relationships based on trust, transparency, and mutual success rather than just delivering services.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: "Results-Driven",
      description:
        "Our focus is always on measurable outcomes and tangible business value for our clients.",
    },
  ];

  const whyChooseItems = [
    {
      id: 1,
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Partnership Approach",
      text: "At Digilynk, we don't just deliver services, we build partnerships that drive your success.",
    },
    {
      id: 2,
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Goal-Oriented",
      text: "Our approach is rooted in understanding your unique goals, challenges, and market positioning.",
    },
    {
      id: 3,
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "User-Centric",
      text: "We combine technical expertise with a deep understanding of user behavior and experience design.",
    },
    {
      id: 4,
      icon: <Eye className="w-8 h-8 text-purple-400" />,
      title: "Impactful Solutions",
      text: "Every solution we deliver is not just functional but impactful, designed to move your business forward.",
    },
  ];

  return (
    <>
      <SEO
        title="About Digilynk | Who We Are"
        description="Learn about Digilynk's mission, vision, and values. We craft impactful, user-centric digital solutions that drive real business results."
        path="/about"
        image="/digilynk_about.png"
      />
      <div className="relative md:mt-16 mt-32 font-roboto">
      {/* Hero Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="relative min-h-[calc(100vh-5rem)] py-20 bg-black overflow-hidden flex items-center justify-center"
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

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div className="space-y-8" variants={container}>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-8 leading-tight font-roboto"
              variants={fadeInUp}
            >
              About Digilynk
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-8 font-roboto"
              variants={fadeInUp}
            >
              We believe that every business is unique and deserves a digital
              presence that reflects its individuality and drives real results.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-12 font-roboto"
              variants={fadeInUp}
            >
              We are a creative, professional team passionate about design,
              innovation, and delivering solutions that help our clients{" "}
              <span className="font-medium text-white">grow</span> and{" "}
              <span className="font-medium text-white">transform</span>.
            </motion.p>

            <motion.img
              src="/digilynk_about.png"
              alt="About Digilynk"
              loading="lazy"
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl border border-zinc-800 mb-12"
              variants={fadeInUp}
            />

            <motion.div
              variants={fadeInUp}
              className="inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RainbowButton
                onClick={() => navigate("/contact")}
                size="lg"
                className="font-semibold font-roboto"
              >
                Work With Us
              </RainbowButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="relative bg-black py-24 md:py-32 overflow-hidden"
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
              backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div className="text-center mb-20" variants={container}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 font-roboto"
              variants={fadeInUp}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
              variants={fadeInUp}
            >
              The principles that guide everything we do and every decision we
              make
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
            variants={container}
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="group relative bg-zinc-900/50 rounded-3xl p-10 shadow-lg border-2 border-zinc-800/50 hover:border-pink-400/60 hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105 overflow-hidden"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-2xl bg-zinc-800/50 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-roboto group-hover:text-white transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-lg font-roboto group-hover:text-zinc-200 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="relative bg-black py-24 md:py-32 overflow-hidden"
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
              backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div className="text-center mb-20" variants={container}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 font-roboto"
              variants={fadeInUp}
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
              variants={fadeInUp}
            >
              We don't just deliver services — we build{" "}
              <span className="font-medium text-white">partnerships</span> that
              drive your success
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
            variants={container}
          >
            {whyChooseItems.map((item) => (
              <motion.div
                key={item.id}
                className="group relative bg-zinc-900/50 rounded-3xl p-10 shadow-lg border-2 border-zinc-800/50 hover:border-blue-400/60 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 overflow-hidden"
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Content */}
                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-2xl bg-zinc-800/50 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-roboto group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-lg font-roboto group-hover:text-zinc-200 transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        className="relative bg-black py-24 md:py-32 overflow-hidden"
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
              backgroundImage: `radial-gradient(circle at 25px 25px, #8b5cf6 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div className="text-center mb-20" variants={container}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 font-roboto"
              variants={fadeInUp}
            >
              Our Mission & Vision
            </motion.h2>
            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
              variants={fadeInUp}
            >
              The driving force behind everything we do at{" "}
              <span className="font-medium text-white">Digilynk</span>
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <motion.div className="space-y-6" variants={fadeInUp}>
              <h3 className="text-3xl font-semibold text-white mb-6 font-roboto">
                Our Mission
              </h3>
              <p className="text-lg text-zinc-300 leading-relaxed font-roboto">
                To design and develop innovative, high-quality websites and
                applications that help businesses grow, transform, and succeed
                in the digital world. We strive to deliver tailored digital
                experiences that truly reflect our clients' vision and drive
                measurable results.
              </p>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeInUp}>
              <h3 className="text-3xl font-semibold text-white mb-6 font-roboto">
                Our Vision
              </h3>
              <p className="text-lg text-zinc-300 leading-relaxed font-roboto">
                To be a leading creative partner known for crafting impactful,
                user-centric digital solutions that set new standards in the
                industry. We envision a future where every business has access
                to exceptional digital experiences that drive growth and
                success.
              </p>
            </motion.div>
          </div>
    </div>
  </motion.section>

  <FaqSection />
</div>
</>

  );
}
