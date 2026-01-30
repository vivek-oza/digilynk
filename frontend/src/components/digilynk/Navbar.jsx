"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { ChevronDown, Home, Mail, Sun, Moon, UserCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".mobile-menu-container") &&
        !event.target.closest(".hamburger-react")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const services = [
    {
      name: "Web Development",
      path: "/services/web-development",
    },
    {
      name: "Software Testing",
      path: "/services/software-testing",
    },
  ];

  if (!mounted) return null;

  return (
    <motion.nav
      className={`fixed top-5 w-full max-w-[93%] mx-auto left-0 right-0 h-16 flex items-center justify-between px-6 z-[100] transition-all duration-300 rounded-xl ${scrolled
          ? "bg-background/80 dark:bg-black/30 backdrop-blur-xl shadow-lg dark:shadow-zinc-900/50 border border-border dark:border-white/10"
          : "bg-transparent backdrop-blur-sm"
        }`}
      style={{ marginTop: "16px" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Logo and Brand */}
      <motion.a
        href="/"
        className="flex items-center gap-x-3 cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-4xl font-jersey text-foreground">digilynk</span>
      </motion.a>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-6">
        <ul className="flex items-center gap-1">
          <motion.li
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className={`px-4 py-2 font-medium rounded-xl transition-all duration-300 ${isActive("/")
                  ? "text-foreground"
                  : "text-foreground/80 hover:text-foreground"
                }`}
              onClick={() => handleNavigation("/")}
            >
              <span className="relative z-10">HOME</span>
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
              <button className="px-4 py-2 text-foreground/80 font-medium rounded-xl hover:text-foreground transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-1">
                  SERVICES
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                      }`}
                  />
                </span>
              </button>
            </motion.div>

            <AnimatePresence>
              {servicesOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-2 w-64 bg-background/90 dark:bg-black/30 backdrop-blur-xl shadow-xl rounded-2xl py-2 z-50 border border-border dark:border-white/10"
                >
                  {services.map((service, index) => (
                    <motion.li
                      key={service.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`px-4 py-3 cursor-pointer transition-all duration-300 mx-2 rounded-xl group ${isActive(service.path)
                          ? "text-foreground bg-muted"
                          : "text-muted-foreground hover:text-foreground"
                        }`}
                      onClick={() => handleNavigation(service.path)}
                    >
                      <span className="font-medium">{service.name}</span>
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
              className={`px-4 py-2 font-medium rounded-xl transition-all duration-300 ${isActive("/about")
                  ? "text-foreground"
                  : "text-foreground/80 hover:text-foreground"
                }`}
              onClick={() => handleNavigation("/about")}
            >
              <span className="relative z-10">ABOUT US</span>
            </button>
          </motion.li>
        </ul>

        {/* CTA Button (Contact first) */}
        <motion.button
          className="relative px-5 py-2 rounded-xl font-medium transition-all duration-300 overflow-hidden group bg-muted/0 hover:bg-muted/40"
          onClick={() => {
            if (location.pathname === "/") {
              window.location.href = "/#contact";
            } else {
              navigate("/#contact");
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div className="absolute inset-0 bg-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 text-foreground">CONTACT US</span>
        </motion.button>

        {/* Theme Toggle (last)
        <motion.button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative p-2 rounded-xl font-medium transition-all duration-300 overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle theme"
        >
          <motion.div className="absolute inset-0 bg-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 text-foreground">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </span>
        </motion.button> */}
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center gap-2">
        {/* <motion.button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative p-2 rounded-xl transition-all duration-300"
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle theme"
        >
          <span className="text-foreground">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </span>
        </motion.button> */}
        <motion.button
          className="focus:outline-none p-2 rounded-xl hover:bg-muted transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <Hamburger
            toggled={isOpen}
            duration={0.4}
            toggle={setIsOpen}
            color={isOpen ? "#60a5fa" : "currentColor"}
            size={20}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 999 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 999 }}
            transition={{ type: "ease", stiffness: 300, damping: 30 }}
            className="lg:hidden fixed top-16 right-0 w-full bg-background/95 dark:bg-black/30 rounded-2xl mt-2 backdrop-blur-xl border-l border-b border-border dark:border-white/10 shadow-2xl flex justify-start mobile-menu-container overflow-hidden"
          >
            <div className="relative w-full p-5">
              <ul className="flex flex-col gap-2 font-medium">
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="w-full"
                >
                  <button
                    className={`w-full text-left py-3 px-4 rounded-xl transition-all duration-300 font-medium flex items-center gap-3 ${isActive("/")
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
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
                  <div
                    className="flex justify-between items-center w-full py-3 px-4 text-muted-foreground hover:text-foreground rounded-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    <span className="font-medium flex items-center gap-3">
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
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden ml-4 mt-2 space-y-1"
                      >
                        {services.map((service, index) => (
                          <motion.li
                            key={service.name}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 ${isActive(service.path)
                                ? "text-foreground bg-muted"
                                : "text-muted-foreground hover:text-foreground"
                              }`}
                            onClick={() => handleNavigation(service.path)}
                          >
                            <span>{service.name.toUpperCase()}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="w-full"
                >
                  <button
                    className={`w-full text-left py-3 px-4 rounded-xl transition-all duration-300 font-medium flex items-center gap-3 ${isActive("/about")
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                    onClick={() => handleNavigation("/about")}
                  >
                    <UserCircle size={18} />
                    ABOUT US
                  </button>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full mt-2"
                >
                  <button
                    className="w-full text-left py-3 px-4 rounded-xl transition-all duration-300 font-medium text-foreground bg-muted/0 hover:bg-muted/40"
                    onClick={() => {
                      if (location.pathname === "/") {
                        window.location.href = "/#contact";
                      } else {
                        navigate("/#contact");
                        setIsOpen(false);
                      }
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <Mail size={18} />
                      CONTACT US
                    </span>
                  </button>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
