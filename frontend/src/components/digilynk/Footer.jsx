import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, Star, ExternalLink } from "lucide-react";

export default function Footer() {
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
      {/* Footer Content */}
      <footer className="relative bg-black px-4 sm:px-6 py-8 md:py-8 text-gray-300 w-full overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto">
          {/* Global Rating Strip */}
          <motion.div
            className="mb-10 bg-black py-16 px-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            <div className="flex flex-col justify-center items-center text-center">
              {/* Call to Rate */}
              <motion.div
                className="flex flex-col items-center"
                variants={fadeInUp}
              >
                <div className="mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-roboto">
                    Rate us on Google
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300 font-roboto">
                    Your feedback keeps our team inspired.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://g.page/r/CaJmAHoO9fyaEAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105 rounded font-roboto"
                  >
                    <Star className="w-4 h-4" />
                    <span>Rate us on Google</span>
                  </a>

                  <a
                    href="https://g.co/kgs/fmvoHYc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded font-roboto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Profile</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 md:gap-12"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
          >
            {/* Brand Section */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              variants={fadeInUp}
            >
              <div className="flex flex-row items-center space-x-3">
                <span className="text-4xl font-jersey text-white">
                  digilynk
                </span>
              </div>
              <p className="text-base text-center md:text-left text-gray-400 max-w-md font-light">
                Transforming ideas into digital reality. We provide
                <span className="text-white font-medium"> innovative</span>{" "}
                solutions for your business needs.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              variants={fadeInUp}
            >
              <h2 className="text-xl font-semibold text-white">Quick Links</h2>
              <ul className="flex flex-col items-center md:items-start space-y-3">
                <li className="hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1">
                  Home
                </li>
                <li className="hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1">
                  Services
                </li>
                <li className="hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1">
                  About us
                </li>
                <li className="hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1">
                  Contact
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              variants={fadeInUp}
            >
              <h2 className="text-xl font-semibold text-white">
                Connect With Us
              </h2>
              <ul className="flex flex-col items-center md:items-start space-y-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/digilynk-448720354/"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center space-x-2 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </li>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/digilynk.in/"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center space-x-2 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1">
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </li>
                </a>
                <a href="mailto:digilynksolutions@gmail.com?subject=I want to contact Digilynk&body=Hello Digilynk team,%0D%0A%0D%0AI would like to discuss my project requirements.%0D%0A%0D%0AThank you!">
                  <li className="flex items-center space-x-2 hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1">
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </li>
                </a>
              </ul>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="mt-12 pt-6 border-t border-gray-700 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-gray-400 font-light">
              © {new Date().getFullYear()} Digilynk. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
