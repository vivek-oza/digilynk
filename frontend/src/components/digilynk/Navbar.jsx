"use client";

import React, { useState, useEffect } from "react";
import logo from "../../assets/icons/digilynk_dark.png";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, Monitor, Settings, Wand2, Home, Users } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container') &&
        !event.target.closest('.hamburger-react')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <motion.nav
      className={`sticky top-0 w-full h-20 flex items-center justify-between px-4 sm:px-8 lg:px-12 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg'
          : 'bg-white/80 backdrop-blur-md shadow-sm'
        }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Logo and Brand */}
      <motion.a
        href="/"
        className="flex items-center gap-x-3 cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src={logo}
          className="md:size-10 size-8 transition-all duration-300"
          alt="LOGO"
        />
        <span className="text-3xl font-bold text-zinc-800">
          Digilynk
        </span>
      </motion.a>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        <ul className="flex items-center gap-2">
          <motion.li
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className="px-4 py-2 text-gray-700 font-medium rounded-xl hover:text-black transition-all duration-300 relative overflow-hidden group"
              onClick={() => handleNavigation("/")}
            >
              <span className="relative z-10">HOME</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="navHover"
              />
            </button>
          </motion.li>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="px-4 py-2 text-gray-700 font-medium rounded-xl hover:text-black transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-1">
                  SERVICES
                  <ChevronDown size={16} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </button>
            </motion.div>

            <AnimatePresence>
              {servicesOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl shadow-xl rounded-2xl py-2 z-50 border border-gray-200/50"
                >
                  {[
                    { name: "Web Development", path: "/services/web-development", icon: Monitor },
                    { name: "Software Testing", path: "/services/software-testing", icon: Settings },
                    { name: "Graphic Design", path: "/services/design", icon: Wand2 }
                  ].map((service, index) => (
                    <motion.li
                      key={service.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 cursor-pointer transition-all duration-300 mx-2 rounded-xl group"
                      onClick={() => handleNavigation(service.path)}
                    >
                      <div className="flex items-center gap-3">
                        <service.icon size={18} className="text-gray-500 group-hover:text-black transition-colors duration-300" />
                        <span className="font-medium group-hover:text-black transition-colors duration-300">{service.name}</span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <motion.li
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className="px-4 py-2 text-gray-700 font-medium rounded-xl hover:text-black transition-all duration-300 relative overflow-hidden group"
              onClick={() => handleNavigation("/about")}
            >
              <span className="relative z-10">ABOUT</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </button>
          </motion.li>
        </ul>

        {/* CTA Button */}
        <motion.button
          className="relative px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
          onClick={() => handleNavigation("/contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black to-zinc-700"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ backgroundSize: '200% 200%' }}
          />
          <span className="relative z-10 text-white">CONTACT</span>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center gap-4">
        <motion.button
          className="focus:outline-none p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <Hamburger
            toggled={isOpen}
            duration={0.4}
            toggle={setIsOpen}
            color={isOpen ? "#3b82f6" : "#1f2937"}
            size={20}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 350 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 350 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden absolute top-[calc(5rem)] right-0 w-80 h-[calc(100vh-5rem)] bg-white/95 backdrop-blur-xl border-l border-gray-200/50 shadow-2xl flex justify-start mobile-menu-container"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>

            <div className="relative w-full p-6">
              <ul className="flex flex-col gap-2 font-medium">
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-full"
                >
                  <button
                    className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-black rounded-xl transition-all duration-300 font-medium flex items-center gap-3"
                    onClick={() => handleNavigation("/")}
                  >
                    <Home size={18} />
                    HOME
                  </button>
                </motion.li>

                {/* Mobile Services Dropdown */}
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex justify-between items-center w-full py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-black rounded-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                    <span className="font-medium flex items-center gap-3">
                      <Monitor size={18} />
                      SERVICES
                    </span>
                    <motion.div
                      animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden ml-4 mt-2 space-y-1"
                      >
                        {[
                          { name: "Web Development", path: "/services/web-development", icon: Monitor },
                          { name: "Software Testing", path: "/services/software-testing", icon: Settings },
                          { name: "Graphic Design", path: "/services/design", icon: Wand2 }
                        ].map((service, index) => (
                          <motion.li
                            key={service.name}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="py-2 px-4 text-gray-600 hover:text-black hover:bg-blue-50 rounded-lg cursor-pointer transition-all duration-300"
                            onClick={() => handleNavigation(service.path)}
                          >
                            <span className="flex items-center gap-3">
                              <service.icon size={16} />
                              <span>{service.name}</span>
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full"
                >
                  <button
                    className="w-full text-left py-3 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-black rounded-xl transition-all duration-300 font-medium flex items-center gap-3"
                    onClick={() => handleNavigation("/about")}
                  >
                    <Users size={18} />
                    ABOUT
                  </button>
                </motion.li>

                {/* <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full mt-4"
                >
                  <button
                    className="w-full py-3 px-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                    onClick={() => handleNavigation("/contact")}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ backgroundSize: '200% 200%' }}
                    />
                    <span className="relative z-10 text-white">GET IN TOUCH</span>
                  </button>
                </motion.li> */}
                <motion.li
                  className="relative px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  onClick={() => handleNavigation("/contact")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black to-zinc-700"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  />
                  <span className="relative z-10 text-white">CONTACT</span>
                </motion.li>
              </ul>

              {/* Decorative Elements */}
              <motion.div
                className="flex justify-center mt-8 space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}