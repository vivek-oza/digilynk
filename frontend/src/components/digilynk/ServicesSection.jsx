import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Code2, TestTube, Palette } from "lucide-react";

export default function ServicesSection() {
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

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies and best practices.",
      link: "/services/web-development",
      color: "text-blue-400",
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Software Testing",
      description:
        "Comprehensive QA solutions to ensure your software is bug-free and performs flawlessly.",
      link: "/services/software-testing",
      color: "text-green-400",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Design",
      description:
        "Creative visual solutions that strengthen your brand and engage your audience.",
      link: "/services/graphic-design",
      color: "text-purple-400",
    },
  ];

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden font-roboto">
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
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
            variants={fadeInUp}
          >
            Comprehensive digital solutions designed to help your business
            <span className="font-medium text-white"> thrive</span> in the
            modern world
          </motion.p>
          <motion.p className="text-lg text-zinc-600 mb-6 font-roboto">
            Need a custom solution? Let's discuss your project requirements.
          </motion.p>
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-8" variants={container}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900/50 rounded-3xl p-8 shadow-lg border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
              variants={fadeInUp}
              onClick={() => navigate(service.link)}
            >
              <div className={`${service.color} mb-6`}>{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4 font-roboto">
                {service.title}
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg mb-6 font-roboto">
                {service.description}
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                <span className="text-sm font-medium font-roboto">
                  Learn More
                </span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
