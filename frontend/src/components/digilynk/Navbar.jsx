"use client";

import React, { useState, useEffect } from "react";
import logo from "../../assets/icons/digilynk_dark.png";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();

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
    <nav className={`fixed top-0 left-0 right-0 h-20 flex shadow-xl shadow-black/10 border-gray-500 bg-white/40 border-b-2 items-center justify-between p-2 px-4 sm:px-12 backdrop-blur-3xl z-50 transition-all duration-1000`}>
      {/* Logo and Brand */}
      <a href="/" className="list-none cursor-pointer">
        <div className="flex items-center gap-x-2">
          <img src={logo} className="md:size-10 size-8 transition-all duration-1000" alt="LOGO" />
          <span className="text-2xl font-semibold text-zinc-800">
            Digilynk
          </span>
        </div>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        <ul className="flex font-semibold text-sm gap-x-2">
          <li
            className="hover:bg-zinc-800 text-zinc-800 hover:text-white px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition"
            onClick={() => handleNavigation("/")}
          >
            HOME
          </li>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center">
              <button
                className="hover:bg-zinc-800 text-zinc-800 hover:text-white px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition"
                onClick={() => handleNavigation("/services")}
              >
                SERVICES
              </button>
              <button
                className="p-1 text-zinc-800 hover:text-white cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-label="Toggle services dropdown"
              >
                <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            <AnimatePresence>
              {servicesOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 z-50 border border-zinc-200"
                >
                  <li
                    className="px-4 py-2 text-zinc-800 hover:bg-zinc-100 cursor-pointer transition"
                    onClick={() => handleNavigation("/services/web-development")}
                  >
                    Web Development
                  </li>
                  <li
                    className="px-4 py-2 text-zinc-800 hover:bg-zinc-100 cursor-pointer transition"
                    onClick={() => handleNavigation("/services/software-testing")}
                  >
                    Software Testing
                  </li>
                  <li
                    className="px-4 py-2 text-zinc-800 hover:bg-zinc-100 cursor-pointer transition"
                    onClick={() => handleNavigation("/services/design")}
                  >
                    Graphic Design
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <li
            className="hover:bg-zinc-800 text-zinc-800 hover:text-white px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition"
            onClick={() => handleNavigation("/about")}
          >
            ABOUT
          </li>
          <li
            className="hover:bg-zinc-800 text-zinc-800 hover:text-white px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition"
            onClick={() => handleNavigation("/contact")}
          >
            CONTACT
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center gap-4">
        <button
          className="focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Hamburger
            toggled={isOpen}
            duration={0.4}
            toggle={setIsOpen}
            color="#1f2937"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 350 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 350 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
            className="lg:hidden absolute top-[calc(5rem)] right-0 w-72 h-[calc(100vh)] bg-zinc-50 border-s-2 border-zinc-500 backdrop-blur-3xl flex justify-start mobile-menu-container"
          >
            <ul className="flex flex-col items-start pt-8 px-6 gap-4 font-semibold w-full">
              <li
                className="hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-left py-2 text-gray-800"
                onClick={() => handleNavigation("/")}
              >
                HOME
              </li>
              
              {/* Mobile Services Dropdown */}
              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <li
                    className="hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-left py-2 text-gray-800"
                    onClick={() => handleNavigation("/services")}
                  >
                    SERVICES
                  </li>
                  <button
                    className="p-1 text-gray-800 hover:text-blue-500 cursor-pointer"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    aria-label="Toggle services dropdown"
                  >
                    {mobileServicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4"
                    >
                      <li
                        className="hover:text-blue-500 cursor-pointer transition py-2 text-gray-800"
                        onClick={() => handleNavigation("/services/web-development")}
                      >
                        Web Development
                      </li>
                      <li
                        className="hover:text-blue-500 cursor-pointer transition py-2 text-gray-800"
                        onClick={() => handleNavigation("/services/software-testing")}
                      >
                        Software Testing
                      </li>
                      <li
                        className="hover:text-blue-500 cursor-pointer transition py-2 text-gray-800"
                        onClick={() => handleNavigation("/services/design")}
                      >
                        Graphic Design
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <li
                className="hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-left py-2 text-gray-800"
                onClick={() => handleNavigation("/about")}
              >
                ABOUT
              </li>
              <li
                className="hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-left py-2 text-gray-800"
                onClick={() => handleNavigation("/contact")}
              >
                CONTACT
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
















// "use client";

// import React, { useState, useEffect } from "react";
// import logo from "../../assets/icons/digilynk_dark.png";
// import logoLight from "../../assets/icons/digilynk_light.svg";
// import { motion, AnimatePresence } from "framer-motion";
// import { Squash as Hamburger } from "hamburger-react";
// import { useNavigate } from "react-router-dom";
// import { LucideMoon, LucideSun, ChevronDown, ChevronUp } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const navigate = useNavigate();

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

//   const handleWebDevClick = () => {
//     navigate("/services/web-development");
//     setIsOpen(false);
//   };

//   const handleTestingClick = () => {
//     navigate("/services/testing");
//     setIsOpen(false);
//   };

//   const handleDesignClick = () => {
//     navigate("/services/design");
//     setIsOpen(false);
//   };

//   const handleContactClick = () => {
//     navigate("/contact");
//     setIsOpen(false);
//   };

//   const handleAboutClick = () => {
//     navigate("/about");
//     setIsOpen(false);
//   };

//   const handleHomeClick = () => {
//     navigate("/#top");
//     setIsOpen(false);
//   };

//   const handleServicesClick = () => {
//     navigate("/services");
//     setIsOpen(false);
//   };

//   return (
//     <nav className={`fixed top-0 left-0 right-0 h-20 flex shadow-xl shadow-black/10 ${'border-gray-500 bg-white/40'} border-b-2 items-center justify-between p-2 px-4 sm:px-12 backdrop-blur-3xl z-50 transition-all duration-1000`}>
//       {/* Logo and Brand */}
//       <a href="/" className="list-none cursor-pointer">
//         <div className="flex items-center gap-x-2">
//           <img src={logo} className="md:size-10 size-8 transition-all duration-1000" alt="LOGO" />
//           <span className="text-2xl font-semibold text-zinc-800">
//             Digilynk
//           </span>
//         </div>
//       </a>

//       {/* Desktop Navigation */}
//       <div className="hidden lg:flex items-center gap-10">
//         <ul className="flex font-semibold text-sm gap-x-2">
//           <li
//             className={`${'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//             onClick={handleHomeClick}
//           >
//             HOME
//           </li>
          
//           {/* Services Dropdown */}
//           <div 
//             className="relative"
//             onMouseEnter={() => setServicesOpen(true)}
//             onMouseLeave={() => setServicesOpen(false)}
//           >
//             <button
//               className={`${'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition flex items-center gap-1`}
//             >
//               SERVICES
//               <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
//             </button>
            
//             <AnimatePresence>
//               {servicesOpen && (
//                 <motion.ul
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-1 z-50 border border-zinc-200"
//                 >
//                   <li
//                     className="px-4 py-2 text-zinc-800 hover:bg-zinc-100 cursor-pointer transition"
//                     onClick={handleWebDevClick}
//                   >
//                     Web Development
//                   </li>
//                   <li
//                     className="px-4 py-2 text-zinc-800 hover:bg-zinc-100 cursor-pointer transition"
//                     onClick={handleTestingClick}
//                   >
//                     Software Testing
//                   </li>
//                   <li
//                     className="px-4 py-2 text-zinc-800 hover:bg-zinc-100 cursor-pointer transition"
//                     onClick={handleDesignClick}
//                   >
//                     Graphic Design
//                   </li>
//                 </motion.ul>
//               )}
//             </AnimatePresence>
//           </div>

//           <li
//             className={`${'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//             onClick={handleAboutClick}
//           >
//             ABOUT
//           </li>
//           <li
//             className={`${'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//             onClick={handleContactClick}
//           >
//             CONTACT
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="lg:hidden flex items-center gap-4">
//         <button
//           className="focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           <Hamburger
//             toggled={isOpen}
//             duration={0.4}
//             toggle={setIsOpen}
//             color={darkMode ? "#ffffff" : "#1f2937"}
//           />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: 350 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 1, x: 350 }}
//             transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
//             className={`lg:hidden absolute top-[calc(5rem)] right-0 w-72 h-[calc(100vh)] ${darkMode ? 'bg-slate-950' : 'bg-zinc-50'} text-white border-s-2 border-zinc-500 backdrop-blur-3xl flex justify-start mobile-menu-container`}
//           >
//             <ul className="flex flex-col items-start pt-8 px-6 gap-4 font-semibold w-full">
//               <li
//                 className={`hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
//                 onClick={handleHomeClick}
//               >
//                 HOME
//               </li>
              
//               {/* Mobile Services Dropdown */}
//               <div className="w-full">
//                 <div 
//                   className={`hover:text-blue-500 flex justify-between items-center cursor-pointer transition w-full text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
//                   onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                 >
//                   <span>SERVICES</span>
//                   {mobileServicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//                 </div>
                
//                 <AnimatePresence>
//                   {mobileServicesOpen && (
//                     <motion.ul
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: 'auto', opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden pl-4"
//                     >
//                       <li
//                         className={`hover:text-blue-500 cursor-pointer transition py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
//                         onClick={handleWebDevClick}
//                       >
//                         Web Development
//                       </li>
//                       <li
//                         className={`hover:text-blue-500 cursor-pointer transition py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
//                         onClick={handleTestingClick}
//                       >
//                         Software Testing
//                       </li>
//                       <li
//                         className={`hover:text-blue-500 cursor-pointer transition py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
//                         onClick={handleDesignClick}
//                       >
//                         Graphic Design
//                       </li>
//                     </motion.ul>
//                   )}
//                 </AnimatePresence>
//               </div>

//               <li
//                 className={`hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
//                 onClick={handleAboutClick}
//               >
//                 ABOUT
//               </li>
//               <li
//                 className={`hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
//                 onClick={handleContactClick}
//               >
//                 CONTACT
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
















// "use client";

// import React, { useState, useEffect } from "react";
// import logo from "../../assets/icons/digilynk_dark.png";
// import logoLight from "../../assets/icons/digilynk_light.svg";
// import { motion, AnimatePresence } from "framer-motion";
// import { Squash as Hamburger } from "hamburger-react";
// import { useNavigate } from "react-router-dom";
// import { LucideMoon, LucideSun } from "lucide-react";


// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const navigate = useNavigate();



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

//   const navLinks = [
//     // { name: "HOME", href: "#home" },
//     // { name: "SERVICES", href: "#services" },
//     // { name: "ABOUT", href: "#about" },
//     // { name: "PACKAGES", href: "" },
//   ];

//   const handlePackageClick = () => {
//     navigate("/services/web-development");
//     setIsOpen(false);
//   };
//   const handleContactClick = () => {
//     navigate("/contact");
//     setIsOpen(false);
//   };
//   const handleAboutClick = () => {
//     navigate("/about");
//     setIsOpen(false);
//   };
//   const handleHomeClick = () => {
//     navigate("/#top");
//     setIsOpen(false);
//   };
//   const handleServicesClick = () => {
//     navigate("/services");
//     setIsOpen(false);
//   };


//   return (
//     <nav className={`fixed top-0 left-0 right-0 h-20 flex shadow-xl shadow-black/10 ${'border-gray-500 bg-white/40'} border-b-2 items-center justify-between p-2 px-4 sm:px-12 backdrop-blur-3xl z-50 transition-all duration-1000`}>
//       {/* Logo and Brand */}
//       <a href="/" className="list-none cursor-pointer">
//         <div className="flex items-center gap-x-2">
//           <img src={logo} className="md:size-10 size-8 transition-all duration-1000" alt="LOGO" />
//           <span className="text-2xl font-semibold text-zinc-800">
//             Digilynk
//           </span>
//         </div>
//       </a>

//       {/* Desktop Navigation */}
//       <div className="hidden lg:flex items-center gap-10">
//         <ul className="flex font-semibold text-sm gap-x-2">
//           {navLinks.map((link) => (
//             <li
//               key={link.name}
//               className={`${'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md cursor-pointer transition`}
//               onClick={() => navigate(link.href)}
//             >
//               {link.name}
//             </li>
//           ))}
//           <li
//             className={`${'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//             onClick={handleHomeClick}
//           >
//             HOME
//           </li>
//           <li
//             className={`${'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//             onClick={handleServicesClick}
//           >
//             SERVICES
//           </li>
//           <li
//             className={`${'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//             onClick={handleAboutClick}
//           >
//             ABOUT
//           </li>
//           {/* <li
//             className={`${'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//             onClick={handlePackageClick}
//           >
//             PACKAGES
//           </li> */}
//           <li
//             className={`${'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//             onClick={handleContactClick}
//           >
//             CONTACT
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Navigation */}
//       <div className="lg:hidden flex items-center gap-4">
//         <button
//           className="focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           <Hamburger
//             toggled={isOpen}
//             duration={0.4}
//             toggle={setIsOpen}
//             color={darkMode ? "#ffffff" : "#1f2937"}
//           />
//         </button>
//       </div>

//       {/* Original Style Mobile Menu - Not Full Page */}
//       <AnimatePresence className="">
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: 350 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 1, x: 350 }}
//             transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
//             className={`lg:hidden absolute top-[calc(5rem)] right-0 w-72 h-[calc(100vh)] ${darkMode ? 'bg-slate-950' : 'bg-zinc-50'} text-white border-s-2 border-zinc-500 backdrop-blur-3xl flex justify-start mobile-menu-container`}
//           >
//             <ul className="flex flex-col items-start pt-8 px-6 gap-4 font-semibold w-full">
//               {navLinks.map((link) => (
//                 <li
//                   key={link.name}
//                   className={`hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
//                   onClick={() => {
//                     navigate(link.href);
//                     setIsOpen(false);
//                   }}
//                 >
//                   {link.name}
//                 </li>
//               ))}

//               <li
//                 className={`'hover:bg-zinc-800 text-zinc-800 hover:text-white' px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//                 onClick={handleHomeClick}
//               >
//                 HOME
//               </li>
//               <a href="#services">
//                 <li
//                   className={`'hover:bg-zinc-800 text-zinc-800 hover:text-white' px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//                   onClick={handleServicesClick}
//                 >
//                   SERVICES
//                 </li>
//               </a>
//               <li
//                 className={`'hover:bg-zinc-800 text-zinc-800 hover:text-white' px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//                 onClick={handleAboutClick}
//               >
//                 ABOUT
//               </li>
//               {/* <li
//                 className={`'hover:bg-zinc-800 text-zinc-800 hover:text-white' px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
//                 onClick={handlePackageClick}
//               >
//                 PACKAGES
//               </li> */}
//               <li onClick={handleContactClick} className={`'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}>
//                 CONTACT
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav >
//   );
// }