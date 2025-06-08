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
      description: "We build fast, responsive, and user-friendly websites that reflect your brand and meet your business needs. We turn ideas into seamless digital experiences.",
      buttonText: "View More",
      buttonLink: "services/web-development"
    },
    {
      image: "https://framerusercontent.com/images/50a1D0xjPf1fmGvtEauBQeqUU.png",
      title: "Graphic Design",
      description: "We craft amazing visuals and intuitive UI/UX that leave a lasting impression. We combine creativity with strategy to communicate your story.",
      buttonText: "View More",
      buttonLink: "services/graphic-design"
    },
    {
      image: "https://framerusercontent.com/images/nqxXDQ0LRxsVDjpnbJj473mWQ.png",
      title: "Software Testing",
      description: "We ensure your system secure, stable, and ready for real users. Our QA process minimizes bugs and improves user experience and performance.",
      buttonText: "View More",
      buttonLink: "services/software-testing"
    }
  ];

  return (
    <section ref={ref} className='my-32'>
      <motion.div
        className="flex justify-center md:mb-20 mb-10 md:text-3xl text-base mx-auto font-semibold text-zinc-800"
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
        className="w-full mt-16"
      >
        <ImageCardGrid cards={cardData} />
      </motion.div>
    </section>
  );
}