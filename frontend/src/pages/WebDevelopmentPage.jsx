import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
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
  Building2,
  Store,
  GraduationCap,
  Check,
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

  const popIn = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const websiteTypesData = [
    {
      title: "Portfolio Websites",
      description:
        "Personal or agency portfolios to showcase your work and expertise.",
      icon: <Code2 className="w-8 h-8" />,
      color: "text-blue-500",
    },
    {
      title: "Business Websites",
      description:
        "Corporate sites that build credibility and attract customers.",
      icon: <Building2 className="w-8 h-8" />,
      color: "text-purple-500",
    },
    {
      title: "E-Commerce Stores",
      description:
        "Online stores with secure checkout and inventory management.",
      icon: <Store className="w-8 h-8" />,
      color: "text-green-500",
    },
    {
      title: "Landing Pages",
      description:
        "High-converting pages designed to capture leads effectively.",
      icon: <Rocket className="w-8 h-8" />,
      color: "text-orange-500",
    },
    {
      title: "Booking Platforms",
      description: "Reservation systems for hotels, appointments, and events.",
      icon: <CreditCard className="w-8 h-8" />,
      color: "text-cyan-500",
    },
    {
      title: "Healthcare Portals",
      description:
        "Patient portals and appointment systems for medical practices.",
      icon: <HeartPulse className="w-8 h-8" />,
      color: "text-red-500",
    },
    {
      title: "Educational Platforms",
      description: "Learning management systems and educational websites.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "text-indigo-500",
    },
    {
      title: "Blogs & Content Sites",
      description: "SEO-optimized blogs with content management systems.",
      icon: <Palette className="w-8 h-8" />,
      color: "text-pink-500",
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
        image="/digilynk_about.png"
      />
      <div className="relative md:mt-16 mt-32 font-roboto">
        {/* Hero Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative min-h-screen py-20 overflow-hidden flex items-center justify-center"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1255')`,
            }}
          />

          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <motion.div className="space-y-12" variants={container}>
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-roboto"
                variants={fadeInUp}
              >
                Need a Website?
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-roboto"
                variants={fadeInUp}
              >
                We develop modern, fast and stunning websites
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Button
                  onClick={() => navigate("/contact")}
                  className="px-6 py-3 text-base font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                >
                  Get a quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
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
                className="text-2xl md:text-4xl font-bold text-white mb-4 font-roboto"
                variants={fadeInUp}
              >
                What we build?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-roboto"
                variants={fadeInUp}
              >
                We develop single page website to enterprise level solutions.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
            >
              {websiteTypesData.map((item, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 rounded-2xl p-6 shadow-xl border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 overflow-hidden"
                  variants={popIn}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 to-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon with background */}
                    <div
                      className={`${item.color} mb-4 p-3 bg-zinc-800/50 rounded-xl w-fit`}
                    >
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 font-roboto group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed font-roboto group-hover:text-zinc-300 transition-colors">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${item.color.replace(
                      "text-",
                      "bg-"
                    )} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}
                  />
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
                className="text-2xl md:text-4xl font-bold text-white mb-4 font-roboto"
                variants={fadeInUp}
              >
                Why Choose Digilynk?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-roboto"
                variants={fadeInUp}
              >
                We don't just build websites — we craft digital experiences that
                drive results
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
            >
              {whyChooseItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 rounded-2xl p-6 shadow-xl border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 overflow-hidden"
                  variants={popIn}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 to-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    {/* Icon with background */}
                    <div
                      className={`${item.color} mb-4 p-3 bg-zinc-800/50 rounded-xl w-fit`}
                    >
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 font-roboto group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 text-sm leading-relaxed font-roboto group-hover:text-zinc-300 transition-colors">
                      {item.text}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 ${item.color.replace(
                      "text-",
                      "bg-"
                    )} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Section */}
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
            {/* Section Header */}
            <motion.div className="text-center mb-16" variants={container}>
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-white mb-4 font-roboto"
                variants={fadeInUp}
              >
                Pricing Plans
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-roboto"
                variants={fadeInUp}
              >
                Choose the perfect plan for your business needs
              </motion.p>
            </motion.div>

            {/* Pricing Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              variants={container}
            >
              {/* Basic Plan */}
              <motion.div
                className="group relative bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 rounded-2xl p-8 border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 overflow-hidden"
                variants={popIn}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 font-roboto">
                    Basic Plan
                  </h3>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ₹14,999
                    </span>
                    <span className="text-gray-400"> - ₹24,999</span>
                  </div>

                  <p className="text-sm text-gray-400 mb-6 font-medium">
                    Best for: Freelancers, startups, or small businesses
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Up to 5 Static Pages
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Custom UI Design
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Mobile Responsive
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Contact Form Integration
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">Basic SEO</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        SSL Setup & Security
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        1 Month Free Maintenance
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-400 mb-6 pb-6 border-t border-zinc-800 pt-4">
                    <p>
                      <strong className="text-white">Delivery:</strong> 7-10
                      Business Days
                    </p>
                  </div>

                  <Button
                    onClick={() => navigate("/contact")}
                    className="w-full bg-white hover:bg-gray-100 text-black font-semibold"
                  >
                    Get a quote
                  </Button>
                </div>
              </motion.div>

              {/* Value Plan */}
              <motion.div
                className="group relative bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 rounded-2xl p-8 border-2 border-blue-500/50 hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-2xl shadow-blue-500/10"
                variants={popIn}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  POPULAR
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 font-roboto">
                    Value Plan
                  </h3>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ₹29,999
                    </span>
                    <span className="text-gray-400"> - ₹49,999</span>
                  </div>

                  <p className="text-sm text-gray-400 mb-6 font-medium">
                    Best for: Small and mid-sized businesses
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Up to 10 Pages
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Custom UI/UX Design
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        CMS Integration (WordPress/Webflow)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Blog Section Setup
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        API Integrations
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Standard SEO & Analytics
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        2 Months Maintenance
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-400 mb-6 pb-6 border-t border-zinc-800 pt-4">
                    <p>
                      <strong className="text-white">Delivery:</strong> 14-20
                      Business Days
                    </p>
                  </div>

                  <Button
                    onClick={() => navigate("/contact")}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
                  >
                    Get a quote
                  </Button>
                </div>
              </motion.div>

              {/* Premium Plan */}
              <motion.div
                className="group relative bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 rounded-2xl p-8 border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 overflow-hidden"
                variants={popIn}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 font-roboto">
                    Premium Plan
                  </h3>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ₹59,999
                    </span>
                    <span className="text-gray-400"> - ₹1,20,000+</span>
                  </div>

                  <p className="text-sm text-gray-400 mb-6 font-medium">
                    Best for: Enterprises and e-commerce stores
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Unlimited Pages
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Advanced UI/UX Design
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        E-commerce Development
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Custom CMS/Admin Dashboard
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Payment Gateway Integration
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        Advanced SEO
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">
                        3 Months Premium Support
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-400 mb-6 pb-6 border-t border-zinc-800 pt-4">
                    <p>
                      <strong className="text-white">Delivery:</strong> 25-40
                      Business Days
                    </p>
                  </div>

                  <Button
                    onClick={() => navigate("/contact")}
                    className="w-full bg-white hover:bg-gray-100 text-black font-semibold"
                  >
                    Get a quote
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Add-on Services */}
            <motion.div
              className="bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 rounded-2xl p-8 border border-zinc-800"
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-roboto">
                Add-on Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base text-gray-200 font-medium">
                      Website Redesign
                    </p>
                    <p className="text-sm text-gray-400 mt-1">from ₹7,999</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base text-gray-200 font-medium">
                      Landing Page Design
                    </p>
                    <p className="text-sm text-gray-400 mt-1">from ₹6,999</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base text-gray-200 font-medium">
                      Logo & Graphic Design
                    </p>
                    <p className="text-sm text-gray-400 mt-1">from ₹4,999</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base text-gray-200 font-medium">
                      Ongoing Maintenance
                    </p>
                    <p className="text-sm text-gray-400 mt-1">₹1,999/month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base text-gray-200 font-medium">
                      SEO & Marketing Setup
                    </p>
                    <p className="text-sm text-gray-400 mt-1">from ₹9,999</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          className="relative py-32 md:py-40 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={container}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1721864428907-647320ec2917?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074')`,
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
            <motion.div className="space-y-12" variants={container}>
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-white mb-6 font-roboto"
                variants={fadeInUp}
              >
                Let's Discuss Your Requirements
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12 font-roboto"
                variants={fadeInUp}
              >
                A 15-minute call is all we need to understand your vision and
                provide expert consultation
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Button
                  onClick={() => navigate("/contact")}
                  className="px-8 py-4 text-lg font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  Get a quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
