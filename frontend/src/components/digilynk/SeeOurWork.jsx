import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCardGrid from '../magicui/project-card-grid';
import project1 from '../../assets/images/projects/project1.png';
import project2 from '../../assets/images/projects/project2.png';

export default function SeeOurWork() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Scroll-based animations
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    const cardDetails = [
        {
            src: project2,
            title: "Monday Labs",
            description: "Developed Monday Labs' conversion-focused website with dynamic content management, performance optimization, and seamless contact integration - boosting lead generation by 35%.",
            link: "https://www.mondaylabs.ai/"
        },
        {
            src: project1,
            title: "Placementor - Placement cell website",
            description: "Developed a campus recruitment website with secure student profiles, real-time notifications, and coordinator dashboards - slashing placement process time by 40% and integrated placement process.",
            link: "https://placementportal.vercel.app/"
        },
    ];

    return (
        <section ref={ref} className='mb-32'>
            <motion.div
                className="flex justify-center md:mb-20 mb-5 mt-20 md:text-5xl text-3xl mx-auto font-semibold text-zinc-800"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                }}
            >
                See our Work
            </motion.div>

            <motion.div
                style={{ y, opacity }}
                className="w-full"
            >
                <ProjectCardGrid cards={cardDetails} />
            </motion.div>
        </section>
    );
}