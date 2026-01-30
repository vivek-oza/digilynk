import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
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

  return (
    <>
      {/* Footer Content */}
      <footer className="relative bg-background px-4 sm:px-6 py-12 md:py-16 text-muted-foreground w-full overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #8b5cf6 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
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
                <span className="text-4xl font-jersey text-foreground">
                  digilynk
                </span>
              </div>
              <p className="text-base text-center md:text-left text-muted-foreground max-w-md font-roboto">
                Transforming ideas into digital reality. We provide
                <span className="text-foreground font-medium"> innovative</span>{" "}
                solutions for your business needs.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              variants={fadeInUp}
            >
              <h2 className="text-xl font-semibold text-foreground font-roboto">Quick Links</h2>
              <ul className="flex flex-col items-center md:items-start space-y-3">
                <li
                  className="hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1"
                  onClick={() => navigate("/")}
                >
                  Home
                </li>
                <li
                  className="hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1"
                  onClick={() => navigate("/services/web-development")}
                >
                  Web Development
                </li>
                <li
                  className="hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1"
                  onClick={() => navigate("/services/software-testing")}
                >
                  Software Testing
                </li>
                <li
                  className="hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1"
                  onClick={() => navigate("/blog")}
                >
                  Blog
                </li>
                <li
                  className="hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1"
                  onClick={() => navigate("/about")}
                >
                  About Us
                </li>
                <li
                  className="hover:text-white transition-all duration-300 cursor-pointer hover:translate-x-1"
                  onClick={() => {
                    if (window.location.pathname === "/") {
                      window.location.href = "/#contact";
                    } else {
                      navigate("/");
                      setTimeout(() => {
                        window.location.href = "/#contact";
                      }, 100);
                    }
                  }}
                >
                  Contact
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex flex-col items-center md:items-start space-y-4"
              variants={fadeInUp}
            >
              <h2 className="text-xl font-semibold text-foreground font-roboto">
                Connect With Us
              </h2>
              <ul className="flex flex-col items-center md:items-start space-y-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/digilynk-448720354/"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer hover:translate-x-1 font-roboto">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </li>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/digilynk.in/"
                  rel="noopener noreferrer"
                >
                  <li className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer hover:translate-x-1 font-roboto">
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </li>
                </a>
                <a href="mailto:digilynksolutions@gmail.com?subject=I want to contact Digilynk&body=Hello Digilynk team,%0D%0A%0D%0AI would like to discuss my project requirements.%0D%0A%0D%0AThank you!">
                  <li className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer hover:translate-x-1 font-roboto">
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </li>
                </a>
              </ul>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="mt-12 pt-6 border-t border-border text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-muted-foreground font-roboto">
              © {new Date().getFullYear()} Digilynk. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}
