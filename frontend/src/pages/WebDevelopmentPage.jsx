import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import SEO from "../components/SEO";
import {
  HeartPulse,
  ShoppingCart,
  ShieldCheck,
  FlaskConical,
  BrainCircuit,
  Gamepad2,
  CreditCard,
  Hotel,
  Code2,
  Smartphone,
  Database,
  Globe,
  Palette,
  Zap,
  Search,
  Rocket,
  Shield,
  Clock,
  Users,
} from "lucide-react";

export default function WebDevelopment() {
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

  const websiteTypesData = [
    {
      title: "Personal Portfolio Websites",
      description:
        "Showcase your skills, work, and achievements with a professional personal portfolio.",
      icon: <Code2 className="w-8 h-8" />,
      color: "text-blue-600",
    },
    {
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to capture leads and drive conversions.",
      icon: <Globe className="w-8 h-8" />,
      color: "text-green-600",
    },
    {
      title: "Ecommerce Websites",
      description:
        "Complete online stores with secure payment processing and inventory management.",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "text-purple-600",
    },
    {
      title: "Business Websites",
      description:
        "Professional corporate websites that establish credibility and drive growth.",
      icon: <Database className="w-8 h-8" />,
      color: "text-orange-600",
    },
    {
      title: "Educational Websites",
      description:
        "Interactive learning platforms and educational institution websites.",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "text-indigo-600",
    },
  ];

  const specializedWebsitesData = [
    {
      title: "Hotel Websites",
      description:
        "Beautiful hotel websites with booking systems and guest management features.",
      icon: <Hotel className="w-8 h-8" />,
      color: "text-blue-600",
    },
    {
      title: "Hospital Websites",
      description:
        "Professional healthcare websites with appointment booking and patient portals.",
      icon: <HeartPulse className="w-8 h-8" />,
      color: "text-red-600",
    },
    {
      title: "Event Websites",
      description:
        "Dynamic event websites with registration, ticketing, and event management.",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "text-green-600",
    },
    {
      title: "Booking Websites",
      description:
        "Comprehensive booking platforms for services, appointments, and reservations.",
      icon: <CreditCard className="w-8 h-8" />,
      color: "text-purple-600",
    },
    {
      title: "Blogs",
      description:
        "Content-rich blog websites with CMS integration and SEO optimization.",
      icon: <Palette className="w-8 h-8" />,
      color: "text-pink-600",
    },
  ];

  const whyChooseItems = [
    {
      id: 1,
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Web Design Excellence",
      text: "Our strength lies in delivering creative web designs that captivate visitors and reflect your brand identity.",
      color: "text-blue-600",
    },
    {
      id: 2,
      icon: <Shield className="w-6 h-6" />,
      title: "Bug-Free, Smooth, and Secure Websites",
      text: "We prioritize quality at every step, rigorously testing our websites to ensure they are bug-free and secure.",
      color: "text-green-600",
    },
    {
      id: 3,
      icon: <Rocket className="w-6 h-6" />,
      title: "Accelerate Your Business Growth",
      text: "A great website is a catalyst for business growth, converting visitors into loyal customers.",
      color: "text-purple-600",
    },
    {
      id: 4,
      icon: <Users className="w-6 h-6" />,
      title: "First Impressions That Build Trust",
      text: "Our visually appealing designs create strong first impressions, building trust and credibility.",
      color: "text-orange-600",
    },
  ];

  return (
    <>
      <SEO
        title="Web Development Services | Digilynk"
        description="Custom websites, landing pages, e-commerce, and business sites built for performance, security, and growth."
        path="/services/web-development"
        image="/vite.svg"
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

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div className="space-y-12" variants={container}>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 font-roboto"
              variants={fadeInUp}
            >
              Your <span className="font-medium text-white">Vision</span>, Our{" "}
              <span className="font-medium text-white">Code</span> — Crafting{" "}
              <span className="font-medium text-white">Ideas into Reality</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
              variants={fadeInUp}
            >
              We craft digital experiences that accelerate your business growth,
              showcase your brand, and inspire trust from the very first click.
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
              className="flex space-x-3 justify-center mt-12"
              variants={fadeInUp}
            >
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Website Types Section */}
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
              backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-20" variants={container}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
              variants={fadeInUp}
            >
              Website Types We Create
            </motion.h2>
            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
              variants={fadeInUp}
            >
              From personal portfolios to complex business platforms — we create{" "}
              <span className="font-medium text-white">diverse solutions</span>{" "}
              tailored to your needs
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              className="flex justify-center mt-10 space-x-3"
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

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={container}
          >
            {websiteTypesData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900/50 rounded-3xl p-10 shadow-lg border-2 border-pink-400/40 hover:border-pink-400/80 hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105"
                variants={fadeInUp}
              >
                <div className={`${item.color} mb-6`}>{item.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-roboto">
                  {item.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed text-lg font-roboto">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Specialized Websites Section */}
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

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-20" variants={container}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
              variants={fadeInUp}
            >
              Specialized Solutions
            </motion.h2>
            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
              variants={fadeInUp}
            >
              Industry-specific websites designed for{" "}
              <span className="font-medium text-white">
                unique requirements
              </span>{" "}
              and specialized functionalities
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              className="flex justify-center mt-10 space-x-3"
              variants={fadeInUp}
            >
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={container}
          >
            {specializedWebsitesData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900/50 rounded-3xl p-10 shadow-lg border-2 border-blue-400/40 hover:border-blue-400/80 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
                variants={fadeInUp}
              >
                <div className={`${item.color} mb-6`}>{item.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-roboto">
                  {item.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed text-lg font-roboto">
                  {item.description}
                </p>
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
              backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-20" variants={container}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
              variants={fadeInUp}
            >
              Why Choose Digilynk?
            </motion.h2>
            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
              variants={fadeInUp}
            >
              We don't just build websites — we craft{" "}
              <span className="font-medium text-white">
                digital experiences
              </span>{" "}
              that drive results
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              className="flex justify-center mt-10 space-x-3"
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

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={container}
          >
            {whyChooseItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-zinc-900/50 rounded-3xl p-12 shadow-lg border-2 border-green-400/40 hover:border-green-400/80 hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
                variants={fadeInUp}
              >
                <div className={`${item.color} mb-6`}>{item.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-6 font-roboto">
                  {item.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed text-lg font-roboto">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Development Showcase Section */}
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

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div className="space-y-12" variants={container}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
              variants={fadeInUp}
            >
              Craft Digital Excellence
            </motion.h2>

            <motion.p
              className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
              variants={fadeInUp}
            >
              Our team of passionate developers blends innovative web design
              with robust development practices, ensuring every project is
              visually stunning, bug-free, and optimized for growth.
            </motion.p>

            <motion.p
              className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
              variants={fadeInUp}
            >
              We believe that a well-crafted website is more than just an online
              presence. It's a powerful tool for building trust, impressing
              clients, and accelerating your business success.
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate("/contact")}
                className="text-white px-10 py-5 text-xl font-semibold font-roboto"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Get Custom Web Solutions
              </ShimmerButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
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

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div className="space-y-12" variants={container}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
              variants={fadeInUp}
            >
              Ready to Build Your Digital Presence?
            </motion.h2>

            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
              variants={fadeInUp}
            >
              Let's create a website that not only looks amazing but also drives
              your business{" "}
              <span className="font-medium text-white">forward</span>
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate("/contact")}
                className="text-white px-10 py-5 text-xl font-semibold font-roboto"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Start Your Project Today
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
      </motion.section>
    </div>
    </>
  );
}
