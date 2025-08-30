// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Squash as Hamburger } from "hamburger-react";
// import { useNavigate } from "react-router-dom";
// import { ChevronDown, ChevronUp, Monitor, Settings, Wand2, Home, Users } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isOpen && !event.target.closest('.mobile-menu-container') &&
//         !event.target.closest('.hamburger-react')) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isOpen]);

//   const handleNavigation = (path) => {
//     navigate(path);
//     setIsOpen(false);
//     setServicesOpen(false);
//     setMobileServicesOpen(false);
//   };

//   return (
//     <motion.nav
//       className={`fixed top-5 w-full max-w-[93%] mx-auto left-0 right-0 h-16 flex items-center justify-between px-6 z-50 transition-all duration-300 rounded-xl ${
//         scrolled
//           ? 'bg-black backdrop-blur-xl shadow-lg shadow-zinc-900 border border-zinc-800'
//           : 'bg-black backdrop-blur-md'
//         }`}
//       style={{ marginTop: '16px' }}
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//     >
//       {/* Logo and Brand */}
//       <motion.a
//         href="/"
//         className="flex items-center gap-x-3 cursor-pointer group"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <span className="text-4xl font-jersey text-white">digilynk</span>
//       </motion.a>

//       {/* Desktop Navigation */}
//       <div className="hidden lg:flex items-center gap-6">
//         <ul className="flex items-center gap-1">
//           <motion.li
//             className="relative group"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <button
//               className="px-4 py-2 text-white font-medium rounded-xl hover:text-gray-300 transition-all duration-300"
//               onClick={() => handleNavigation("/")}
//             >
//               <span className="relative z-10">HOME</span>
//             </button>
//           </motion.li>

//           {/* Services Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setServicesOpen(true)}
//             onMouseLeave={() => setServicesOpen(false)}
//           >
//             <motion.div
//               className="flex items-center"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <button className="px-4 py-2 text-white font-medium rounded-xl hover:text-gray-300 transition-all duration-300 relative overflow-hidden group">
//                 <span className="relative z-10 flex items-center gap-1">
//                   SERVICES
//                   <ChevronDown size={16} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
//                 </span>
//               </button>
//             </motion.div>

//             <AnimatePresence>
//               {servicesOpen && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -10, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: -10, scale: 0.95 }}
//                   transition={{ duration: 0.2, ease: "easeOut" }}
//                   className="absolute top-full left-0 mt-2 w-64 bg-zinc-950 backdrop-blur-xl shadow-xl rounded-2xl py-2 z-50 border border-zinc-800"
//                 >
//                   {[
//                     { name: "Web Development", path: "/services/web-development", icon: Monitor },
//                     { name: "Software Testing", path: "/services/software-testing", icon: Settings },
//                     // { name: "Graphic Design", path: "/services/design", icon: Wand2 }
//                   ].map((service, index) => (
//                     <motion.li
//                       key={service.name}
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.05 }}
//                       className="px-4 py-3 text-gray-300 hover:text-white hover:bg-zinc-900 cursor-pointer transition-all duration-300 mx-2 rounded-xl group"
//                       onClick={() => handleNavigation(service.path)}
//                     >
//                       <div className="flex items-center gap-3">
//                         <service.icon size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
//                         <span className="font-medium">{service.name}</span>
//                       </div>
//                     </motion.li>
//                   ))}
//                 </motion.ul>
//               )}
//             </AnimatePresence>
//           </div>

//           <motion.li
//             className="relative group"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <button
//               className="px-4 py-2 text-white font-medium rounded-xl hover:text-gray-300 transition-all duration-300 relative overflow-hidden group"
//               onClick={() => handleNavigation("/about")}
//             >
//               <span className="relative z-10">ABOUT</span>
//             </button>
//           </motion.li>
//         </ul>

//         {/* CTA Button */}
//         <motion.button
//           className="relative px-5 py-2 rounded-xl font-medium transition-all duration-300 overflow-hidden group border border-zinc-600 hover:border-zinc-500"
//           onClick={() => handleNavigation("/contact")}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <motion.div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           <span className="relative z-10 text-white">CONTACT</span>
//         </motion.button>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="lg:hidden flex items-center">
//         <motion.button
//           className="focus:outline-none p-2 rounded-xl hover:bg-zinc-800 transition-colors duration-300"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//           whileTap={{ scale: 0.95 }}
//         >
//           <Hamburger
//             toggled={isOpen}
//             duration={0.4}
//             toggle={setIsOpen}
//             color={isOpen ? "#60a5fa" : "#f3f4f6"}
//             size={20}
//           />
//         </motion.button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: 999 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 999 }}
//             transition={{ type: "ease", stiffness: 300, damping: 30 }}
//             className="lg:hidden fixed top-16 right-0 w-full bg-black rounded-2xl mt-2 backdrop-blur-xl border-l border-b border-zinc-800 shadow-2xl flex justify-start mobile-menu-container overflow-hidden"
//           >
//             <div className="relative w-full p-5">
//               <ul className="flex flex-col gap-2 font-medium">
//                 <motion.li
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.1 }}
//                   className="w-full"
//                 >
//                   <button
//                     className="w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-zinc-800 rounded-xl transition-all duration-300 font-medium flex items-center gap-3"
//                     onClick={() => handleNavigation("/")}
//                   >
//                     <Home size={18} />
//                     HOME
//                   </button>
//                 </motion.li>

//                 {/* Mobile Services Dropdown */}
//                 <motion.div
//                   className="w-full"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <div
//                     className="flex justify-between items-center w-full py-3 px-4 text-gray-300 hover:text-white hover:bg-zinc-800 rounded-xl transition-all duration-300 cursor-pointer"
//                     onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                   >
//                     <span className="font-medium flex items-center gap-3">
//                       <Monitor size={18} />
//                       SERVICES
//                     </span>
//                     <motion.div
//                       animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <ChevronDown size={18} />
//                     </motion.div>
//                   </div>

//                   <AnimatePresence>
//                     {mobileServicesOpen && (
//                       <motion.ul
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="overflow-hidden ml-4 mt-2 space-y-1"
//                       >
//                         {[
//                           { name: "WEB DEVELOPMENT", path: "/services/web-development", icon: Monitor },
//                           { name: "SOFTWARE TESTING", path: "/services/software-testing", icon: Settings },
//                           // { name: "GRAPHIC DESIGN", path: "/services/design", icon: Wand2 }
//                         ].map((service, index) => (
//                           <motion.li
//                             key={service.name}
//                             initial={{ opacity: 0, x: 10 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: index * 0.1 }}
//                             className="py-2 px-4 text-gray-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition-all duration-300"
//                             onClick={() => handleNavigation(service.path)}
//                           >
//                             <span className="flex items-center gap-3">
//                               <service.icon size={16} />
//                               <span>{service.name}</span>
//                             </span>
//                           </motion.li>
//                         ))}
//                       </motion.ul>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>

//                 <motion.li
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="w-full"
//                 >
//                   <button
//                     className="w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-zinc-800 rounded-xl transition-all duration-300 font-medium flex items-center gap-3"
//                     onClick={() => handleNavigation("/about")}
//                   >
//                     <Users size={18} />
//                     ABOUT
//                   </button>
//                 </motion.li>

//                 <motion.li
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.4 }}
//                   className="w-full mt-2"
//                 >
//                   <button
//                     className="w-full text-left py-3 px-4 text-white hover:bg-zinc-800 rounded-xl transition-all duration-300 font-medium border border-zinc-700"
//                     onClick={() => handleNavigation("/contact")}
//                   >
//                     CONTACT
//                   </button>
//                 </motion.li>
//               </ul>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Monitor,
  Settings,
  Wand2,
  Home,
  Users,
  BookOpen,
  Cog,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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

  return (
    <motion.nav
      className={`fixed top-5 w-full max-w-[93%] mx-auto left-0 right-0 h-16 flex items-center justify-between px-6 z-50 transition-all duration-300 rounded-xl ${
        scrolled
          ? "bg-black backdrop-blur-xl shadow-lg shadow-zinc-900 border border-zinc-800"
          : "bg-black backdrop-blur-md"
      }`}
      style={{ marginTop: '16px' }}
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
        <span className="text-4xl font-jersey text-white">digilynk</span>
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
              className="px-4 py-2 text-white font-medium rounded-xl hover:text-gray-300 transition-all duration-300"
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
              <button className="px-4 py-2 text-white font-medium rounded-xl hover:text-gray-300 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-1">
                  SERVICES
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
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
                  className="absolute top-full left-0 mt-2 w-64 bg-zinc-950 backdrop-blur-xl shadow-xl rounded-2xl py-2 z-50 border border-zinc-800"
                >
                  {[
                    {
                      name: "Web Development",
                      path: "/services/web-development",
                      icon: Monitor,
                    },
                    {
                      name: "Software Testing",
                      path: "/services/software-testing",
                      icon: Cog,
                    },
                    // {
                    //   name: "Graphic Design",
                    //   path: "/services/design",
                    //   icon: Wand2,
                    // },
                  ].map((service, index) => (
                    <motion.li
                      key={service.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-3 text-gray-300 hover:text-white hover:bg-zinc-900 cursor-pointer transition-all duration-300 mx-2 rounded-xl group"
                      onClick={() => handleNavigation(service.path)}
                    >
                      <div className="flex items-center gap-3">
                        <service.icon
                          size={18}
                          className="text-gray-400 group-hover:text-white transition-colors duration-300"
                        />
                        <span className="font-medium">{service.name}</span>
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
              className="px-4 py-2 text-white font-medium rounded-xl hover:text-gray-300 transition-all duration-300 relative overflow-hidden group"
              onClick={() => handleNavigation("/blog")}
            >
              <span className="relative z-10">BLOG</span>
            </button>
          </motion.li>
        </ul>

        {/* CTA Button */}
        <motion.button
          className="relative px-5 py-2 rounded-xl font-medium transition-all duration-300 overflow-hidden group border border-zinc-600 hover:border-zinc-500"
          onClick={() => handleNavigation("/contact")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 text-white">CONTACT</span>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center">
        <motion.button
          className="focus:outline-none p-2 rounded-xl hover:bg-zinc-800 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <Hamburger
            toggled={isOpen}
            duration={0.4}
            toggle={setIsOpen}
            color={isOpen ? "#60a5fa" : "#f3f4f6"}
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
            className="lg:hidden fixed top-16 right-0 w-full bg-black rounded-2xl mt-2 backdrop-blur-xl border-l border-b border-zinc-800 shadow-2xl flex justify-start mobile-menu-container overflow-hidden"
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
                    className="w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-zinc-800 rounded-xl transition-all duration-300 font-medium flex items-center gap-3"
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
                    className="flex justify-between items-center w-full py-3 px-4 text-gray-300 hover:text-white hover:bg-zinc-800 rounded-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
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
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden ml-4 mt-2 space-y-1"
                      >
                        {[
                          {
                            name: "WEB DEVELOPMENT",
                            path: "/services/web-development",
                            icon: Monitor,
                          },
                          {
                            name: "SOFTWARE TESTING",
                            path: "/services/software-testing",
                            icon: Cog,
                          },
                          // {
                          //   name: "GRAPHIC DESIGN",
                          //   path: "/services/design",
                          //   icon: Wand2,
                          // },
                        ].map((service, index) => (
                          <motion.li
                            key={service.name}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="py-2 px-4 text-gray-400 hover:text-white hover:bg-zinc-800 rounded-lg cursor-pointer transition-all duration-300"
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
                    className="w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-zinc-800 rounded-xl transition-all duration-300 font-medium flex items-center gap-3"
                    onClick={() => handleNavigation("/about")}
                  >
                    <Users size={18} />
                    ABOUT
                  </button>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="w-full"
                >
                  <button
                    className="w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-zinc-800 rounded-xl transition-all duration-300 font-medium flex items-center gap-3"
                    onClick={() => handleNavigation("/blog")}
                  >
                    <BookOpen size={18} />
                    BLOG
                  </button>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full mt-2"
                >
                  <button
                    className="w-full text-left py-3 px-4 text-white hover:bg-zinc-800 rounded-xl transition-all duration-300 font-medium border border-zinc-700"
                    onClick={() => handleNavigation("/contact")}
                  >
                    CONTACT
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
