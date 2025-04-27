import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageCardGrid from '../magicui/image-card-grid';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Scroll-based animations
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const cardData = [
    {
      image: "https://framerusercontent.com/images/U5Tc0PdLNj5yoL19oAkc74mkiXA.png",
      title: "Website Development",
      description: "Learn how Framer can optimize your site for search engines.",
      buttonText: "View More",
      buttonLink: "/web-development"
    },
    {
      image: "https://framerusercontent.com/images/50a1D0xjPf1fmGvtEauBQeqUU.png",
      title: "Graphic Design",
      description: "Master the principles of effective graphic design and UI/UX.",
      buttonText: "View More",
      buttonLink: "/graphic-design"
    },
    {
      image: "https://framerusercontent.com/images/nqxXDQ0LRxsVDjpnbJj473mWQ.png",
      title: "Software Testing",
      description: "Speed up your website with these optimization techniques.",
      buttonText: "View More",
      buttonLink: "/software-testing"
    }
  ];

  return (
    <section ref={ref} className='mb-32'>
      <motion.div
        className="flex justify-center md:mb-20 mb-10 md:text-5xl text-3xl mx-auto font-semibold text-zinc-800"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
      >
        Services
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="w-full"
      >
        <ImageCardGrid cards={cardData} />
      </motion.div>
    </section>
  );
}