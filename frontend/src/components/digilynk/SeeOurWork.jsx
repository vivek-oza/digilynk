import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCardGrid from '../magicui/project-card-grid';
import project1 from '../../assets/images/projects/project1.png';
import project2 from '../../assets/images/projects/project2.png';
import project3 from '../../assets/images/projects/project3.png';
import project4 from '../../assets/images/projects/project4.png';
import project5 from '../../assets/images/projects/project5.png';

export default function SeeOurWork() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Scroll-based animations
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

    const cardDetails = [
        {
            src: project4,
            title: "Creed Creations",
            description: "A creative agency website, with custom pages, design elements and 100% satisfaction in customer experience.",
            link: "https://creedcreation-draft.vercel.app/",
            category: "Website App",
            tech: ["React Native", "Firebase", "ML"]
        },
        {
            src: project3,
            title: "The bachelor's space ",
            description: "A beautiful landing page for a hostel, now converting more and more viewers into hostelers and tenants.",
            link: "https://the-bachelors-space.vercel.app/",
            category: "Web Development",
            tech: ["Next.js", "TypeScript", "Stripe"]
        },
        {
            src: project2,
            title: "Monday Labs",
            description: "AI-powered business solutions platform with dynamic content management and performance optimization.",
            link: "https://www.mondaylabs.ai/",
            category: "Web Development",
            tech: ["React", "Node.js", "AI Integration"]
        },
        {
            src: project1,
            title: "Placementor",
            description: "Campus recruitment platform with secure profiles, real-time notifications, and coordinator dashboards.",
            link: "https://placementportal.vercel.app/",
            category: "Full Stack",
            tech: ["React", "Express", "MongoDB"]
        },
        {
            src: project5,
            title: "Personal Portfolio",
            description: "Modern financial dashboard with advanced analytics and automated reporting features.",
            link: "https://sidefolio.vercel.app/",
            category: "Dashboard",
            tech: ["Vue.js", "D3.js", "Python"]
        },
        // {
        //     src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop",
        //     title: "CreativeStudio",
        //     description: "Digital design platform for creative professionals with collaborative tools and asset management.",
        //     link: "#",
        //     category: "Design Platform",
        //     tech: ["React", "WebGL", "AWS"]
        // }
    ];

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
            },
        },
    };

    return (
        <section ref={ref} className='relative bg-gray-50 py-16 md:py-24 overflow-hidden'>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)`,
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
                        See Our Work
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl mx-auto font-light"
                        variants={fadeInUp}
                    >
                        Discover our portfolio of innovative digital solutions that have helped businesses 
                        <span className="font-medium text-blue-600"> transform</span> and <span className="font-medium text-purple-600">grow</span>
                    </motion.p>
                    
                    {/* Decorative Elements */}
                    <motion.div 
                        className="flex justify-center mt-8 space-x-2"
                        variants={fadeInUp}
                    >
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ y, opacity }}
                    className="w-full"
                >
                    <ProjectCardGrid cards={cardDetails} />
                </motion.div>
            </div>
        </section>
    );
}