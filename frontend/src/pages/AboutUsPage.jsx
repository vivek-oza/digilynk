import React from "react";
import { motion } from "framer-motion";
import About from "../assets/images/About.png";
import values from "../assets/images/values.png";
import mission from "../assets/images/mission.png";
import vision from "../assets/images/vision.png";
import FaqSection from "../components/digilynk/FaqSection";
import ServicesCardStack from "@/components/digilynk/ServicesCardStack";
import { cn } from "@/lib/utils";

export default function AboutUs() {
  // Matching service page animations
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
        bounce: 0.4,
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        bounce: 0.4,
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        bounce: 0.4,
      },
    },
  };

  const aboutCards = [
    {
      title: "Values",
      description:
        "We believe in creativity, professionalism, and collaboration. Every project is unique, and we strive to deliver tailored digital experiences that truly reflect our clients' vision.",
      image: values,
      reverse: false,
      link: "#values",
    },
    {
      title: "Mission",
      description:
        "To design and develop innovative, high-quality websites and apps that help businesses grow, transform, and succeed in the digital world.",
      image: mission,
      reverse: true,
      link: "#mission",
    },
    {
      title: "Vision",
      description:
        "To be a leading creative partner known for crafting impactful, user-centric digital solutions that set new standards in writing your growth story.",
      image: vision,
      reverse: false,
      link: "#vision",
    },
  ];

  // Enhanced Why Choose Us items with spring animations
  const whyChooseItems = [
    {
      id: 1,
      text: "At Digilynk, we don't just deliver services,  we build partnerships.",
    },
    {
      id: 2,
      text: "Our approach is rooted in understanding your unique goals, challenges, and market.",
    },
    {
      id: 3,
      text: "We combine technical expertise with a deep understanding of user behavior.",
    },
    {
      id: 4,
      text: "Every solution we deliver is not just functional but impactful.",
    },
  ];

  return (
    <div className="relative">
      {/* Background effects matching service page */}
      {/* <div className={cn(
                "absolute z-0 inset-0 w-full max-h-[calc(100vh-5rem)]",
                "[background-size:150px_50px]",
                "[background-image:linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]",
            )} />
            <div className="pointer-events-none max-h-[calc(100vh-5rem)] absolute inset-0 flex items-center justify-center bg-white md:bg-zinc-50 [mask-image:radial-gradient(circle_at_top,transparent_5%,black)] md:[mask-image:radial-gradient(circle_at_top,transparent_1%,black)] dark:bg-black"></div> */}

      {/* Main About Container */}
      <div className="relative  z-10">
        {/* Hero Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative bg-black mb-32 z-10 w-full overflow-hidden grid place-items-center grid-cols-1 gap-5 md:flex max-h-[calc(100vh-5rem)]"
        >
          {/* Left Column - Text Content */}
          <motion.div
            className="min-h-[calc(100vh-20rem)] w-1/2 md:mx-12 m-4 md:my-0 flex flex-col md:space-y-8 space-y-3 justify-center"
            variants={container}
          >
            <motion.h2
              className="text-3xl font-semibold text-center md:text-start text-white"
              variants={fadeInUp}
            >
              About Us
            </motion.h2>

            <motion.div
              className="flex flex-col space-y-2 justify-center"
              variants={container}
            >
              <motion.p
                className="text-base text-center md:text-start text-white tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                We believe that every business is unique and deserves a digital
                presence that reflects its individuality.
              </motion.p>

              <motion.p
                className="text-base text-center md:text-start text-white tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                We are a creative, professional team passionate about design,
                innovation, and delivering results that help our clients grow
                and transform.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex items-center md:min-h-[calc(100vh-5rem)] w-1/2"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  bounce: 0.4,
                  delay: 0.4,
                },
              },
            }}
          >
            <img
              src={About}
              className="md:min-h-[calc(100vh-5rem)] w-auto object-contain"
              alt="About us illustration"
            />
          </motion.div>
        </motion.section>

        {/* Why Choose Us Section with enhanced animations */}
        <motion.section
          className="max-w-5xl mx-auto py-16 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={container}
        >
          <motion.h2
            className="text-3xl font-semibold text-zinc-800 mb-12 text-center"
            variants={fadeInUp}
          >
            Why choose us?
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={container}
          >
            {whyChooseItems.map((item) => (
              <motion.div
                key={item.id}
                className="p-6 bg-white rounded-xl shadow-sm border border-zinc-100"
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 10 },
                }}
              >
                <p className="text-base text-zinc-600 tracking-tight font-medium leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* About Cards Section using ServicesCardStack */}
        <section className="py-16">
          <ServicesCardStack
            cardData={aboutCards}
            title="Our Core Principles"
            description="These fundamentals guide everything we do at Digilynk"
          />
        </section>

        <FaqSection />
      </div>
    </div>
  );
}

// import React from 'react';
// import { motion } from 'framer-motion';
// import About from '../assets/images/About.png';
// import values from '../assets/images/values.png';
// import mission from '../assets/images/mission.png';
// import vision from '../assets/images/vision.png';
// import FaqSection from '../components/digilynk/FaqSection';
// import { cn } from '@/lib/utils';

// export default function AboutUs() {
//     // Matching service page animations
//     const container = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.15,
//                 delayChildren: 0.2,
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10
//             }
//         }
//     };

//     const fadeInUp = {
//         hidden: { opacity: 0, y: 30 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10
//             }
//         }
//     };

//     const fadeInLeft = {
//         hidden: { opacity: 0, x: -30 },
//         visible: {
//             opacity: 1,
//             x: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10
//             }
//         }
//     };

//     const fadeInRight = {
//         hidden: { opacity: 0, x: 30 },
//         visible: {
//             opacity: 1,
//             x: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10
//             }
//         }
//     };

//     const aboutCards = [
//         {
//             title: "Values",
//             description: "We believe in creativity, professionalism, and collaboration. Every project is unique, and we strive to deliver tailored digital experiences that truly reflect our clients' vision.",
//             image: values,
//             reverse: false
//         },
//         {
//             title: "Mission",
//             description: "To design and develop innovative, high-quality websites and apps that help businesses grow, transform, and succeed in the digital world.",
//             image: mission,
//             reverse: true
//         },
//         {
//             title: "Vision",
//             description: "To be a leading creative partner known for crafting impactful, user-centric digital solutions that set new standards in writing your growth story.",
//             image: vision,
//             reverse: false
//         }
//     ];

//     return (
//         <div className="relative overflow-x-hidden">
//             {/* Matching service page background effects */}
//             <div className={cn(
//                 "absolute z-0 inset-0 w-full max-h-[calc(100vh-5rem)]",
//                 "[background-size:150px_50px]",
//                 "[background-image:linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]",
//             )} />
//             <div className="pointer-events-none max-h-[calc(100vh-5rem)] absolute inset-0 flex items-center justify-center bg-white md:bg-zinc-50 [mask-image:radial-gradient(circle_at_top,transparent_5%,black)] md:[mask-image:radial-gradient(circle_at_top,transparent_1%,black)] dark:bg-black"></div>

//             {/* Main About Container */}
//             <div className="relative z-10">
//                 {/* Hero Section */}
//                 <motion.section
//                     variants={container}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: false, margin: "-100px" }}
//                     className='relative mb-32 z-10 w-full overflow-hidden grid place-items-center grid-cols-1 gap-5 md:flex max-h-[calc(100vh-5rem)]'
//                 >
//                     {/* Left Column - Text Content */}
//                     <motion.div
//                         className='min-h-[calc(100vh-20rem)] w-1/2 md:mx-12 m-4 md:my-0 flex flex-col md:space-y-8 space-y-3 justify-center'
//                         variants={container}
//                     >
//                         <motion.h2
//                             className="md:text-3xl text-3xl text-center md:text-start font-semibold text-zinc-800"
//                             variants={fadeInUp}
//                         >
//                             About Us
//                         </motion.h2>

//                         <motion.div
//                             className="flex flex-col space-y-8 justify-center"
//                             variants={container}
//                         >
//                             <motion.p
//                                 className='text-base md:text-xl mx-auto md:max-w-full max-w-80 text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed'
//                                 variants={fadeInUp}
//                             >
//                                 We believe that every business is unique and deserves a digital presence that reflects its individuality.
//                             </motion.p>

//                             <motion.p
//                                 className='text-base md:text-xl mx-auto md:max-w-full max-w-80 text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed'
//                                 variants={fadeInUp}
//                             >
//                                 We are a creative, professional team passionate about design, innovation, and delivering results that help our clients grow and transform.
//                             </motion.p>
//                         </motion.div>
//                     </motion.div>

//                     {/* Right Column - Image */}
//                     <motion.div
//                         className='flex items-center md:min-h-[calc(100vh-5rem)] w-1/2'
//                         variants={{
//                             hidden: { opacity: 0, x: 50 },
//                             visible: {
//                                 opacity: 1,
//                                 x: 0,
//                                 transition: {
//                                     type: "easeOut",
//                                     stiffness: 100,
//                                     damping: 10,
//                                     delay: 0.4,
//                                 }
//                             }
//                         }}
//                     >
//                         <img
//                             src={About}
//                             className='md:min-h-[calc(100vh-5rem)] w-auto object-contain'
//                             alt="About us illustration"
//                         />
//                     </motion.div>
//                 </motion.section>

//                 {/* Why Choose Us Section */}
//                 <motion.section
//                     className="max-w-3xl mx-auto py-16 px-6"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, margin: "-100px" }}
//                     variants={container}
//                 >
//                     <motion.h2
//                         className="text-3xl font-semibold text-zinc-800 mb-6 text-center"
//                         variants={fadeInUp}
//                     >
//                         Why choose us?
//                     </motion.h2>
//                     <motion.p
//                         className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 text-center"
//                         variants={fadeInUp}
//                     >
//                         At Digilynk, we don't just deliver services — we build partnerships. Our approach is rooted in understanding your unique goals, challenges, and market before proposing any solution.
//                     </motion.p>
//                     <motion.p
//                         className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed text-center"
//                         variants={fadeInUp}
//                     >
//                         What sets us apart is our dedication to quality, creativity, and results. We combine technical expertise with a deep understanding of user behavior.
//                     </motion.p>
//                 </motion.section>

//                 {/* About Cards Section */}
//                 <div className="max-w-7xl mx-auto space-y-32 py-16 px-6">
//                     {aboutCards.map((card, index) => (
//                         <motion.div
//                             key={index}
//                             className={`flex flex-col ${card.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true, margin: "-100px" }}
//                             variants={container}
//                         >
//                             <motion.div
//                                 className="w-full md:w-1/2"
//                                 variants={card.reverse ? fadeInRight : fadeInLeft}
//                             >
//                                 <img
//                                     src={card.image}
//                                     alt={card.title}
//                                     className="w-full max-w-md mx-auto rounded-xl shadow-md"
//                                 />
//                             </motion.div>
//                             <motion.div
//                                 className="w-full md:w-1/2"
//                                 variants={card.reverse ? fadeInLeft : fadeInRight}
//                             >
//                                 <h2 className="text-3xl font-semibold text-zinc-800 mb-6">{card.title}</h2>
//                                 <p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed">
//                                     {card.description}
//                                 </p>
//                             </motion.div>
//                         </motion.div>
//                     ))}
//                 </div>

//                 <FaqSection />
//             </div>
//         </div>
//     );
// }
