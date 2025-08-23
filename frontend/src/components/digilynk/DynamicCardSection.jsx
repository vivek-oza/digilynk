import React from "react";
import PulsatingDot from "../magicui/PulsatingDot";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      bounce: 0.4,
    },
  },
};

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

const viewportSettings = {
  once: false, // Trigger every time element comes into view
  margin: "0px 0px -100px 0px", // Adjust when the trigger happens (negative margin = earlier)
  amount: 0.2, // Percentage of element that needs to be visible to trigger
};

const DynamicCardSection = ({
  title,
  description,
  buttonText,
  buttonLink,
  cards = [],
}) => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-10 lg:mb-16 flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={container}
        >
          <div className="text-center lg:text-left lg:w-1/2">
            <motion.h2
              className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight lg:leading-[3.25rem]"
              variants={fadeInUp}
            >
              {title}
            </motion.h2>
          </div>
          <motion.div
            className="text-center lg:text-left lg:w-1/2"
            variants={fadeInUp}
          >
            <motion.p
              className="text-lg text-gray-500 mb-5 max-w-lg mx-auto lg:mx-0 lg:max-w-2xl"
              variants={fadeInUp}
            >
              {description}
            </motion.p>
            {buttonText && (
              <motion.a
                href={buttonLink || "#"}
                className="inline-flex items-center gap-2 text-base font-semibold text-zinc-600 hover:text-white transition-colors"
                variants={fadeInUp}
              >
                <PulsatingDot color="#3b82f6" radius={3} intensity={1} />
                {buttonText}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={container}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-100 border border-gray-300 rounded-2xl p-6 transition-all duration-300 hover:bg-blue-500"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                {card.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white">
                {card.title}
              </h4>
              <p className="text-sm text-gray-500 transition-colors duration-300 leading-5 group-hover:text-white">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicCardSection;

// import React from "react";
// import PulsatingDot from "../magicui/PulsatingDot";
// import { motion } from "framer-motion";

// const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             type: "spring",
//             stiffness: 100,
//             damping: 10,
//             bounce: 0.4,
//         },
//     },
// };

// const container = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.15,
//             delayChildren: 0.2,
//             type: "spring",
//             stiffness: 100,
//             damping: 10,
//         },
//     },
// };

// const DynamicCardSection = ({
//     title,
//     description,
//     buttonText,
//     buttonLink,
//     cards = [],
// }) => {
//     return (

//         <section className="py-24">
//             <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
//                 {/* Section Header */}
//                 <div className="mb-10 lg:mb-16 flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
//                     <motion.div
//                         className="text-center lg:text-left lg:w-1/2"
//                         variants={container}
//                     >
//                         <motion.h2
//                             className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight lg:leading-[3.25rem]"
//                             variants={fadeInUp}
//                         >
//                             {title}
//                         </motion.h2>
//                     </motion.div>
//                     <div className="text-center lg:text-left lg:w-1/2">
//                         <p className="text-lg text-gray-500 mb-5 max-w-lg mx-auto lg:mx-0 lg:max-w-2xl">
//                             {description}
//                         </p>
//                         {buttonText && (
//                             <a
//                                 href={buttonLink || "#"}
//                                 className="inline-flex items-center gap-2 text-base font-semibold text-zinc-600 hover:text-blue-500 transition-colors"
//                             >
//                                 <PulsatingDot color="#3b82f6" radius={3} intensity={1} />
//                                 {buttonText}
//                                 <svg
//                                     width="20"
//                                     height="20"
//                                     viewBox="0 0 20 20"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
//                                         stroke="currentColor"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     ></path>
//                                 </svg>
//                             </a>
//                         )}
//                     </div>
//                 </div>

//                 {/* Cards */}
//                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                     {cards.map((card, index) => (
//                         <div
//                             key={index}
//                             className="group relative bg-gray-100 rounded-2xl p-6 transition-all duration-300 hover:bg-blue-500"
//                         >
//                             <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
//                                 {card.icon}
//                             </div>
//                             <h4 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white">
//                                 {card.title}
//                             </h4>
//                             <p className="text-sm text-gray-500 transition-colors duration-300 leading-5 group-hover:text-white">
//                                 {card.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DynamicCardSection;
