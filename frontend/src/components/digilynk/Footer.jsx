import React from "react";
import { motion } from "framer-motion";
import digiLynkLight from "../../assets/icons/digilynk_light.svg";
import {
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import GradientText from "../reactbits/TextAnimations/GradientText/GradientText";

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
      <footer className="relative bg-zinc-900 px-4 sm:px-6 py-8 md:py-8 text-gray-300 w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #8b5cf6 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
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
                <img
                  src={digiLynkLight}
                  className="size-12"
                  alt="Digilynk Logo"
                />
                <h1 className="text-3xl text-white">Digilynk</h1>
              </div>
              <p className="text-base text-center md:text-left text-gray-400 max-w-md font-light">
                Transforming ideas into digital reality. We provide
                <span className="text-blue-400 font-medium"> innovative</span> solutions for your business needs.
              </p>
              
              {/* Decorative Elements */}
              <motion.div 
                className="flex justify-center md:justify-start mt-4 space-x-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              variants={fadeInUp}
            >
              <h2 className="text-xl font-semibold text-white">Quick Links</h2>
              <ul className="flex flex-col items-center md:items-start space-y-3">
                <li className="hover:text-blue-400 transition-all duration-300 cursor-pointer hover:translate-x-1">
                  Home
                </li>
                <li className="hover:text-purple-400 transition-all duration-300 cursor-pointer hover:translate-x-1">
                  Services
                </li>
                <li className="hover:text-green-400 transition-all duration-300 cursor-pointer hover:translate-x-1">
                  About us
                </li>
                <li className="hover:text-blue-400 transition-all duration-300 cursor-pointer hover:translate-x-1">
                  Contact
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              variants={fadeInUp}
            >
              <h2 className="text-xl font-semibold text-white">Connect With Us</h2>
              <ul className="flex flex-col items-center md:items-start space-y-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/digilynk-448720354/"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center space-x-2 hover:text-blue-400 transition-all duration-300 cursor-pointer hover:translate-x-1">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </li>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/digilynk.in/"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center space-x-2 hover:text-purple-400 transition-all duration-300 cursor-pointer hover:translate-x-1">
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </li>
                </a>
                <a
                  href="mailto:digilynk2025@gmail.com?subject=I want to contact Digilynk&body=Hello Digilynk team,%0D%0A%0D%0AI would like to discuss my project requirements.%0D%0A%0D%0AThank you!"
                >
                  <li className="flex items-center space-x-2 hover:text-green-400 transition-all duration-300 cursor-pointer hover:translate-x-1">
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
