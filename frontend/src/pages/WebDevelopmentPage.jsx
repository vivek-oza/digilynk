import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import web1 from "../assets/images/web1.png";
import web2 from "../assets/images/web2.png";
import web3 from "../assets/images/web3.png";
import web4 from "../assets/images/web4.png";
import web5 from "../assets/images/web5.png";
import web6 from "../assets/images/web6.png";
import web7 from "../assets/images/web7.png";
import web8 from "../assets/images/web8.png";
import { ShimmerButton } from "../components/magicui/shimmer-button";
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
  Users
} from 'lucide-react';

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
      description: "Showcase your skills, work, and achievements with a professional personal portfolio.",
      icon: <Code2 className="w-8 h-8" />,
      color: "text-blue-600"
    },
    {
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads and drive conversions.",
      icon: <Globe className="w-8 h-8" />,
      color: "text-green-600"
    },
    {
      title: "Ecommerce Websites",
      description: "Complete online stores with secure payment processing and inventory management.",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "text-purple-600"
    },
    {
      title: "Business Websites",
      description: "Professional corporate websites that establish credibility and drive growth.",
      icon: <Database className="w-8 h-8" />,
      color: "text-orange-600"
    },
    {
      title: "Educational Websites",
      description: "Interactive learning platforms and educational institution websites.",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "text-indigo-600"
    },
  ];

  const specializedWebsitesData = [
    {
      title: "Hotel Websites",
      description: "Beautiful hotel websites with booking systems and guest management features.",
      icon: <Hotel className="w-8 h-8" />,
      color: "text-blue-600"
    },
    {
      title: "Hospital Websites",
      description: "Professional healthcare websites with appointment booking and patient portals.",
      icon: <HeartPulse className="w-8 h-8" />,
      color: "text-red-600"
    },
    {
      title: "Event Websites",
      description: "Dynamic event websites with registration, ticketing, and event management.",
      icon: <Gamepad2 className="w-8 h-8" />,
      color: "text-green-600"
    },
    {
      title: "Booking Websites",
      description: "Comprehensive booking platforms for services, appointments, and reservations.",
      icon: <CreditCard className="w-8 h-8" />,
      color: "text-purple-600"
    },
    {
      title: "Blogs",
      description: "Content-rich blog websites with CMS integration and SEO optimization.",
      icon: <Palette className="w-8 h-8" />,
      color: "text-pink-600"
    },
  ];

  const whyChooseItems = [
    {
      id: 1,
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Web Design Excellence",
      text: "Our strength lies in delivering creative web designs that captivate visitors and reflect your brand identity.",
      color: "text-blue-600"
    },
    {
      id: 2,
      icon: <Shield className="w-6 h-6" />,
      title: "Bug-Free, Smooth, and Secure Websites",
      text: "We prioritize quality at every step, rigorously testing our websites to ensure they are bug-free and secure.",
      color: "text-green-600"
    },
    {
      id: 3,
      icon: <Rocket className="w-6 h-6" />,
      title: "Accelerate Your Business Growth",
      text: "A great website is a catalyst for business growth, converting visitors into loyal customers.",
      color: "text-purple-600"
    },
    {
      id: 4,
      icon: <Users className="w-6 h-6" />,
      title: "First Impressions That Build Trust",
      text: "Our visually appealing designs create strong first impressions, building trust and credibility.",
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
              Web Development
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              Your <span className="font-medium text-blue-600">Vision</span>, Our <span className="font-medium text-green-600">Code</span> — Crafting <span className="font-medium text-purple-600">Ideas into Reality</span>
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              We craft digital experiences that accelerate your business growth, showcase your brand, and inspire trust from the very first click.
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate('/contact')}
                className="text-white px-8 py-4 text-lg font-semibold"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Start Your Project
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
              src={web1}
              className="w-full max-w-lg object-contain rounded-2xl"
              alt="Web development illustration"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Website Types Section */}
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
              Website Types We Create
            </motion.h2>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              From personal portfolios to complex business platforms — we create <span className="font-medium text-green-600">diverse solutions</span> tailored to your needs
            </motion.p>

            {/* Decorative Elements */}
            <motion.div className="flex justify-center mt-8 space-x-2" variants={fadeInUp}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container}>
            {websiteTypesData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-800"
                variants={fadeInUp}
              >
                <div className={`${item.color} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Specialized Websites Section */}
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

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Specialized Solutions
            </motion.h2>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              Industry-specific websites designed for <span className="font-medium text-blue-600">unique requirements</span> and specialized functionalities
            </motion.p>

            {/* Decorative Elements */}
            <motion.div className="flex justify-center mt-8 space-x-2" variants={fadeInUp}>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={container}>
            {specializedWebsitesData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-800"
                variants={fadeInUp}
              >
                <div className={`${item.color} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
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
              Why Choose Digilynk?
            </motion.h2>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              We don't just build websites — we craft <span className="font-medium text-green-600">digital experiences</span> that drive results
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

      {/* Development Showcase Section */}
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

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8 text-center md:text-left" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Craft Digital Excellence
            </motion.h2>

            <motion.p
              className="text-lg text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              Our team of passionate developers blends innovative web design with robust development practices, ensuring every project is visually stunning, bug-free, and optimized for growth.
            </motion.p>

            <motion.p
              className="text-lg text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              We believe that a well-crafted website is more than just an online presence. It's a powerful tool for building trust, impressing clients, and accelerating your business success.
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate('/contact')}
                className="text-white px-8 py-4 text-lg font-semibold"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Get Custom Web Solutions
              </ShimmerButton>
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
              src={web2}
              className="w-full max-w-lg object-contain rounded-2xl"
              alt="Web development services illustration"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
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

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div className="space-y-8" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Ready to Build Your Digital Presence?
            </motion.h2>

            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              Let's create a website that not only looks amazing but also drives your business <span className="font-medium text-green-600">forward</span>
            </motion.p>

            <motion.div
              className="flex justify-center"
              variants={fadeInUp}
            >
              <img
                src={web3}
                alt="Web development services"
                className="w-full max-w-2xl object-contain rounded-2xl"
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div className="flex justify-center mt-8 space-x-2" variants={fadeInUp}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
