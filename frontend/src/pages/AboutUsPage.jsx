import React from "react";
import { motion } from "framer-motion";
import About from "../assets/images/About.png";
import values from "../assets/images/values.png";
import mission from "../assets/images/mission.png";
import vision from "../assets/images/vision.png";
import FaqSection from "../components/digilynk/FaqSection";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import { useNavigate } from "react-router-dom";
import { Users, Target, Eye, Heart } from "lucide-react";

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

  const aboutCards = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "We believe in creativity, professionalism, and collaboration. Every project is unique, and we strive to deliver tailored digital experiences that truly reflect our clients' vision.",
      image: values,
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To design and develop innovative, high-quality websites and apps that help businesses grow, transform, and succeed in the digital world.",
      image: mission,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be a leading creative partner known for crafting impactful, user-centric digital solutions that set new standards in writing your growth story.",
      image: vision,
      color: "from-purple-500 to-indigo-500"
    },
  ];

  const whyChooseItems = [
    {
      id: 1,
      icon: <Users className="w-6 h-6" />,
      title: "Partnership Approach",
      text: "At Digilynk, we don't just deliver services, we build partnerships.",
      color: "text-blue-600"
    },
    {
      id: 2,
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      text: "Our approach is rooted in understanding your unique goals, challenges, and market.",
      color: "text-green-600"
    },
    {
      id: 3,
      icon: <Heart className="w-6 h-6" />,
      title: "User-Centric",
      text: "We combine technical expertise with a deep understanding of user behavior.",
      color: "text-purple-600"
    },
    {
      id: 4,
      icon: <Eye className="w-6 h-6" />,
      title: "Impactful Solutions",
      text: "Every solution we deliver is not just functional but impactful.",
      color: "text-orange-600"
    },
  ];

  return (
    <div className="relative md:mt-16 mt-32">
      {/* Hero Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="relative min-h-[calc(100vh-5rem)] py-6 bg-black overflow-hidden flex items-center justify-center"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8 text-center md:text-left" variants={container}>
            <motion.h1
              className="text-4xl md:text-6xl font-semibold text-white mb-6"
              variants={fadeInUp}
            >
              About Digilynk
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              We believe that every business is unique and deserves a digital presence that reflects its individuality.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              We are a creative, professional team passionate about design, innovation, and delivering results that help our clients <span className="font-medium text-blue-600">grow</span> and <span className="font-medium text-purple-600">transform</span>.
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate('/contact')}
                className="text-white px-8 py-4 text-lg font-semibold"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Work With Us
              </ShimmerButton>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div className="flex space-x-2 justify-center md:justify-start" variants={fadeInUp}>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex justify-center"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                },
              },
            }}
          >
            <img
              src={About}
              className="w-full max-w-lg object-contain rounded-2xl"
              alt="About us illustration"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="relative bg-black py-16 md:py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={container}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              We don't just deliver services — we build <span className="font-medium text-green-600">partnerships</span> that drive your success
            </motion.p>

            {/* Decorative Elements */}
            <motion.div className="flex justify-center mt-8 space-x-2" variants={fadeInUp}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={container}>
            {whyChooseItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-800"
                variants={fadeInUp}
              >
                <div className={`${item.color} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ---------------- */}

      {/* Our Core Principles Section */}
      <motion.section
        className="relative bg-black py-16 md:py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={container}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative mx-auto px-4 max-w-5xl">
          <motion.div className="text-center mb-16" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Our Core Principles
            </motion.h2>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              These fundamentals guide everything we do at <span className="font-medium text-blue-600">Digilynk</span>
            </motion.p>

            {/* Decorative Elements */}
            <motion.div className="flex justify-center mt-8 space-x-2" variants={fadeInUp}>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          <div className="space-y-12 md:space-y-24">
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
                variants={container}
              >
                <motion.div className={`w-full md:w-1/2 flex justify-center ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`} variants={fadeInUp}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full max-w-md rounded-3xl shadow-lg"
                  />
                </motion.div>
                <motion.div className="w-full md:w-1/2 space-y-6 text-center md:text-left" variants={fadeInUp}>
                  <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${card.color} text-white`}>
                    {card.icon}
                  </div>
                  <h3 className="text-3xl font-semibold text-white">{card.title}</h3>
                  <p className="text-lg text-zinc-300 leading-relaxed">{card.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
          
      </motion.section>

      <FaqSection />
    </div>
  );
}


