import React from "react";
import { motion } from "framer-motion";
import SimpleContactForm from "../components/digilynk/SimpleContactForm";
import { Mail, Phone } from "lucide-react";
import SEO from "../components/SEO";

export default function ContactPage() {
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
      <SEO
        title="Contact Digilynk | Start Your Project"
        description="Contact Digilynk for web development, testing, and design services. We typically respond within 24 hours."
        path="/contact"
        image="/digilynk_about.png"
      />
      <div className="relative md:mt-16 mt-32 font-roboto">
        {/* Hero Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative min-h-screen py-20 bg-black overflow-hidden flex items-center justify-center"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg')`,
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative max-w-4xl mx-auto px-4 w-full text-center">
            <motion.div className="space-y-8" variants={container}>
              {/* Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-roboto"
                variants={fadeInUp}
              >
                Let's discuss your ideas
              </motion.h1>

              {/* Contact Info */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8"
                variants={fadeInUp}
              >
                <a
                  href="mailto:digilynksolutions@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">
                    digilynksolutions@gmail.com
                  </span>
                </a>
                <span className="hidden sm:block text-gray-600 text-2xl">
                  •
                </span>
                <a
                  href="tel:+916353959930"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-base md:text-lg">+91 6353959930</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Form Section */}
        <motion.section
          className="relative bg-black py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={container}
        >
          <div className="relative max-w-2xl mx-auto px-4">
            <motion.div variants={fadeInUp}>
              <SimpleContactForm />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
