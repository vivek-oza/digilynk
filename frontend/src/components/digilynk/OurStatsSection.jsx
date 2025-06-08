import React, { useRef, useEffect, useState } from 'react';
import { useInView, useMotionValue, useSpring, animate } from 'framer-motion';

// Hardcoded values
const STATS = {
  projects: 10,
  clients: 5,
  experience: 2,
  team: 6,
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

const OurStatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.4 }); // 40% visible

  return (
    <div ref={sectionRef} className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333" strokeWidth="1" />
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

          {/* Left - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-300 font-light">We deliver</p>
              <div className="space-y-2">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">IMPACT</h2>
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">VALUE</h2>
                <h2 className="text-5xl md:text-6xl font-bold text-green-400">GROWTH</h2>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              We have a proven track record of delivering growth to our clients.
            </p>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* Projects */}
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-bold text-white">
                <Counter target={STATS.projects} trigger={isInView} /><span className="text-white">+</span>
              </div>
              <p className="text-gray-300 text-lg">Projects Delivered</p>
            </div>

            {/* Clients */}
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-bold text-white">
                <Counter target={STATS.clients} trigger={isInView} /><span className="text-white">+</span>
              </div>
              <p className="text-gray-300 text-lg">Happy Clients</p>
            </div>

            {/* Experience */}
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-bold text-white">
                <Counter target={STATS.experience} trigger={isInView} /><span className="text-white">+</span>
              </div>
              <p className="text-gray-300 text-lg">Years of Industry Experience</p>
            </div>

            {/* Team */}
            <div className="text-center space-y-3">
              <div className="text-6xl md:text-7xl font-bold text-white">
                <Counter target={STATS.team} trigger={isInView} /><span className="text-white">+</span>
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

// // Hardcoded stats
// const STATS = {
//   projects: 25,
//   clients: 10,
//   experience: 12,
//   team: 10,
// };

// // Reusable counter component
// const Counter = ({ target }) => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { amount: 0.4, once: true });
//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, { duration: 2 });
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     if (inView) {
//       animate(motionValue, target, { duration: 2 });
//     }
//   }, [inView, motionValue, target]);

//   useEffect(() => {
//     return springValue.on("change", latest => {
//       setCurrent(Math.floor(latest));
//     });
//   }, [springValue]);

//   return <span ref={ref}>{current}</span>;
// };

// const OurStatsSection = () => {
//   return (
//     <div className="bg-black text-white relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-full h-full">
//           <svg className="w-full h-full" viewBox="0 0 1200 800">
//             <defs>
//               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#333" strokeWidth="1" />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#grid)" />
//           </svg>
//         </div>
//       </div>

//       {/* Large "OUR STATS" text in background */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <h1 className="text-[120px] md:text-[200px] lg:text-[280px] font-black text-gray-900/20 select-none tracking-wider">
//           OUR STATS
//         </h1>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 container mx-auto px-6 py-20 h-full flex items-center">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full max-w-6xl mx-auto">

//           {/* Left side - Text content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <p className="text-lg text-gray-300 font-light">We deliver</p>

//               <div className="space-y-2">
//                 <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
//                   IMPACT
//                 </h2>
//                 <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
//                   VALUE
//                 </h2>
//                 <h2 className="text-5xl md:text-6xl font-bold text-green-400">
//                   GROWTH
//                 </h2>
//               </div>
//             </div>

//             <p className="text-gray-300 text-lg leading-relaxed max-w-md">
//               We have a proven track record of delivering growth to our clients.
//             </p>
//           </div>

//           {/* Right side - Stats grid */}
//           <div className="grid grid-cols-2 gap-8">

//             {/* Projects Delivered */}
//             <div className="text-center space-y-3">
//               <div className="text-6xl md:text-7xl font-bold text-white">
//                 <Counter target={STATS.projects} /><span className="text-green-400">+</span>
//               </div>
//               <p className="text-gray-300 text-lg">Projects Delivered</p>
//             </div>

//             {/* Happy Clients */}
//             <div className="text-center space-y-3">
//               <div className="text-6xl md:text-7xl font-bold text-white">
//                 <Counter target={STATS.clients} /><span className="text-green-400">+</span>
//               </div>
//               <p className="text-gray-300 text-lg">Happy Clients</p>
//             </div>

//             {/* Years of Experience */}
//             <div className="text-center space-y-3">
//               <div className="text-6xl md:text-7xl font-bold text-white">
//                 <Counter target={STATS.experience} /><span className="text-green-400">+</span>
//               </div>
//               <p className="text-gray-300 text-lg">Years of Industry Experience</p>
//             </div>

//             {/* Professional Team */}
//             <div className="text-center space-y-3">
//               <div className="text-6xl md:text-7xl font-bold text-white">
//                 <Counter target={STATS.team} /><span className="text-green-400">+</span>
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
