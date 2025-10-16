import React, { useRef, useEffect, useState } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  animate,
  motion,
} from "framer-motion";

// Hardcoded values
const STATS = {
  projects: 10,
  clients: 6,
  experience: 2,
  team: 5,
};

// Reusable animated counter component
const Counter = ({ target, trigger }) => {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (trigger) {
      animate(motionValue, target, { duration: 2 });
    } else {
      motionValue.set(0);
    }
  }, [trigger, motionValue, target]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setCurrent(Math.floor(latest));
    });
  }, [spring]);

  return <span>{current}</span>;
};

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const OurStatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 }); // 40% visible

  return (
    <div
      ref={sectionRef}
      className="bg-black text-white relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1677784975579-b16f8028b555?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Grid Pattern (subtle) */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#fff"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* "OUR STATS" Large BG Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[120px] md:text-[200px] lg:text-[280px] font-black text-gray-900/20 select-none tracking-wider">
          OUR STATS
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full max-w-6xl mx-auto">
          {/* Left - Text with Animation */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <p className="text-lg text-gray-300 font-light">We deliver</p>
              <div className="space-y-2">
                <motion.h2
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl font-bold text-white"
                >
                  IMPACT
                </motion.h2>
                <motion.h2
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl font-bold text-white"
                >
                  VALUE
                </motion.h2>
                <motion.h2
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl font-bold text-white"
                >
                  GROWTH
                </motion.h2>
              </div>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-gray-300 text-lg leading-relaxed max-w-md"
            >
              We have a proven track record of delivering growth to our clients.
            </motion.p>
          </motion.div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Projects */}
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-bold text-white">
                <Counter target={STATS.projects} trigger={isInView} />
                <span className="text-white">+</span>
              </div>
              <p className="text-gray-300 text-lg">Projects Delivered</p>
            </div>

            {/* Clients */}
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-bold text-white">
                <Counter target={STATS.clients} trigger={isInView} />
                <span className="text-white">+</span>
              </div>
              <p className="text-gray-300 text-lg">Happy Clients</p>
            </div>

            {/* Experience */}
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-bold text-white">
                <Counter target={STATS.experience} trigger={isInView} />
                <span className="text-white">+</span>
              </div>
              <p className="text-gray-300 text-lg">
                Years of Industry Experience
              </p>
            </div>

            {/* Team */}
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-bold text-white">
                <Counter target={STATS.team} trigger={isInView} />
                <span className="text-white">+</span>
              </div>
              <p className="text-gray-300 text-lg">Professional Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStatsSection;

// import React, { useRef, useEffect, useState } from 'react';
// import { useInView, useMotionValue, useSpring, animate } from 'framer-motion';

// // Hardcoded values
// const STATS = {
//   projects: 10,
//   clients: 5,
//   experience: 2,
//   team: 6,
// };

// // Reusable animated counter component
// const Counter = ({ target, trigger }) => {
//   const motionValue = useMotionValue(0);
//   const spring = useSpring(motionValue, { duration: 2 });
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     if (trigger) {
//       animate(motionValue, target, { duration: 2 });
//     } else {
//       motionValue.set(0);
//     }
//   }, [trigger, motionValue, target]);

//   useEffect(() => {
//     return spring.on("change", (latest) => {
//       setCurrent(Math.floor(latest));
//     });
//   }, [spring]);

//   return <span>{current}</span>;
// };

// const OurStatsSection = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { amount: 0.4 }); // 40% visible

//   return (
//     <div ref={sectionRef} className="bg-black text-white relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <svg className="w-full h-full" viewBox="0 0 1200 800">
//           <defs>
//             <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//               <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333" strokeWidth="1" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       {/* "OUR STATS" Large BG Text */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <h1 className="text-[120px] md:text-[200px] lg:text-[280px] font-black text-gray-900/20 select-none tracking-wider">
//           OUR STATS
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 container mx-auto px-6 py-20 h-full flex items-center">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full max-w-6xl mx-auto">

//           {/* Left - Text */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <p className="text-lg text-gray-300 font-light">We deliver</p>
//               <div className="space-y-2">
//                 <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">IMPACT</h2>
//                 <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">VALUE</h2>
//                 <h2 className="text-5xl md:text-6xl font-bold text-green-400">GROWTH</h2>
//               </div>
//             </div>
//             <p className="text-gray-300 text-lg leading-relaxed max-w-md">
//               We have a proven track record of delivering growth to our clients.
//             </p>
//           </div>

//           {/* Right - Stats Grid */}
//           <div className="grid grid-cols-2 gap-8">
//             {/* Projects */}
//             <div className="text-center space-y-3">
//               <div className="text-6xl md:text-7xl font-bold text-white">
//                 <Counter target={STATS.projects} trigger={isInView} /><span className="text-white">+</span>
//               </div>
//               <p className="text-gray-300 text-lg">Projects Delivered</p>
//             </div>

//             {/* Clients */}
//             <div className="text-center space-y-3">
//               <div className="text-6xl md:text-7xl font-bold text-white">
//                 <Counter target={STATS.clients} trigger={isInView} /><span className="text-white">+</span>
//               </div>
//               <p className="text-gray-300 text-lg">Happy Clients</p>
//             </div>

//             {/* Experience */}
//             <div className="text-center space-y-3">
//               <div className="text-6xl md:text-7xl font-bold text-white">
//                 <Counter target={STATS.experience} trigger={isInView} /><span className="text-white">+</span>
//               </div>
//               <p className="text-gray-300 text-lg">Years of Industry Experience</p>
//             </div>

//             {/* Team */}
//             <div className="text-center space-y-3">
//               <div className="text-6xl md:text-7xl font-bold text-white">
//                 <Counter target={STATS.team} trigger={isInView} /><span className="text-white">+</span>
//               </div>
//               <p className="text-gray-300 text-lg">Professional Team</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurStatsSection;
