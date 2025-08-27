import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/digilynk/ContactForm";
import { Mail, Phone, MapPin, Clock, Laugh } from "lucide-react";
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "digilynksolutions@gmail.com",
      color: "text-blue-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call",
      content: "+91 6353959930",
      color: "text-green-600",
    },
    {
      icon: <Laugh className="w-6 h-6" />,
      title: "Satisfaction",
      content: "100% Client satisfaction",
      color: "text-purple-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      content: "Within 24 hours",
      color: "text-orange-600",
    },
  ];

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
              Let's Build Something Amazing Together!
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
              variants={fadeInUp}
            >
              Ready to transform your ideas into reality? We're here to help you
              create digital experiences that{" "}
              <span className="font-medium text-white">inspire</span> and{" "}
              <span className="font-medium text-white">engage</span>.
            </motion.p>

            {/* Contact Info Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto"
              variants={container}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 hover:scale-105"
                  variants={fadeInUp}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`${info.color} bg-zinc-800/50 rounded-xl p-3 shadow-sm`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-white text-lg font-roboto">
                        {info.title}
                      </h3>
                      <p className="text-zinc-300 text-base font-roboto">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
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

        <div className="relative max-w-4xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={container}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
              variants={fadeInUp}
            >
              Start Your Project
            </motion.h2>
            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
              variants={fadeInUp}
            >
              Tell us about your vision and we'll help bring it to{" "}
              <span className="font-medium text-white">life</span>
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-zinc-900/50 rounded-3xl shadow-lg border border-zinc-800/50 overflow-hidden"
            variants={fadeInUp}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.section>
    </div>
    </>
  );
}
