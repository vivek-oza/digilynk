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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const cardData = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      title: "Website Development",
      description: "Modern, responsive websites that reflect your brand and drive business growth through seamless user experiences.",
      buttonText: "Explore Service",
      buttonLink: "services/web-development",
      icon: "💻",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      title: "Software Testing",
      description: "Comprehensive QA solutions ensuring your applications are secure, stable, and ready for real-world deployment.",
      buttonText: "Explore Service",
      buttonLink: "services/software-testing",
      icon: "🔍",
      features: ["Automated Testing", "Performance Testing", "Security Audits"]
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      title: "Graphics Design",
      description: "Creative visual solutions and intuitive UI/UX designs that communicate your brand story effectively.",
      buttonText: "Explore Service",
      buttonLink: "services/graphic-design",
      icon: "🎨",
      features: ["Brand Identity", "UI/UX Design", "Print Design"]
    },
  ];

  return (
    <section ref={ref} className='relative bg-white py-16 md:py-24 overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-4"
            variants={fadeInUp}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto font-light"
            variants={fadeInUp}
          >
            Comprehensive digital solutions designed to help your business
            <span className="font-medium text-green-600"> thrive</span> in the modern world
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center mt-8 space-x-2"
            variants={fadeInUp}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y, opacity }}
          className="w-full"
        >
          <ImageCardGrid cards={cardData} />
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.p
            className="text-gray-600 mb-6"
            variants={fadeInUp}
          >
            Need a custom solution? Let's discuss your project requirements.
          </motion.p>
          <motion.button
            className="relative px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-black to-zinc-700"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ backgroundSize: '200% 200%' }}
            />
            <span className="relative z-10 text-white">Get Custom Quote</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}