import React from 'react'
import { motion } from 'framer-motion';
import ServicesBanner from '../assets/images/servicesBanner.png';
import testing from '../assets/images/testing.png';
import digital from '../assets/images/digital.png';
import webdevelopment from '../assets/images/webdevelopment.png';
import graphic from '../assets/images/graphic.png';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ServicesCardStack from '@/components/digilynk/ServicesCardStack'; // Import the new component

export default function ServicesPage() {
    const navigate = useNavigate();

    const handleContactClick = () => navigate('/contact');
    const handleServiceClick = (service) => navigate(`/${service.toLowerCase()}`);

    // Matching hero section animations
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

    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const cardData = [
        {
            title: "Web Development",
            description: "We build responsive, high-performance websites that align with your business goals and delight your users.",
            image: webdevelopment,
            link: "services/web-development",
            reverse: true
        },
        {
            title: "Software Testing",
            description: "Quality is at the core of everything we do. We ensure your software works flawlessly under all conditions.",
            image: testing,
            link: "services/software-testing"
        },
        {
            title: "Graphic Design",
            description: "We think and brew intuitive visuals that are not only stunning but strategically aligned with your business goals.",
            image: graphic,
            link: "services/design",
            reverse: true
        }
    ];

    return (
        <div className="relative">
            {/* Matching hero section background effects */}
            <div className={cn(
                "absolute z-0 inset-0 w-full max-h-[calc(100vh-5rem)]",
                "[background-size:150px_50px]",
                "[background-image:linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]",
            )} />
            <div className="pointer-events-none max-h-[calc(100vh-5rem)] absolute inset-0 flex items-center justify-center bg-white md:bg-zinc-50 [mask-image:radial-gradient(circle_at_top,transparent_5%,black)] md:[mask-image:radial-gradient(circle_at_top,transparent_1%,black)] dark:bg-black"></div>

            {/* Main Services Container */}
            <div className="relative z-10">
                {/* First Service Section - matches hero layout exactly */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className='relative mb-32 z-10 w-full overflow-hidden grid place-items-center grid-cols-1 gap-5 md:flex max-h-[calc(100vh-5rem)]'
                >
                    {/* Left Column - Text Content */}
                    <motion.div
                        className='min-h-[calc(100vh-20rem)] w-1/2 md:mx-12 m-4 md:my-0 flex flex-col md:space-y-8 space-y-3 justify-center'
                        variants={container}
                    >
                        <motion.h2
                            className="md:text-5xl text-3xl text-center md:text-start font-semibold text-zinc-800"
                            variants={fadeInUp}
                        >
                            Our Services
                        </motion.h2>

                        <motion.div
                            className="flex flex-col space-y-8 justify-center"
                            variants={container}
                        >
                            <motion.p
                                className='text-base md:text-xl mx-auto md:max-w-full max-w-80 text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed'
                                variants={fadeInUp}
                            >
                                At Digilynk, we offer a full spectrum of digital services designed to help your business thrive in today's competitive landscape.
                            </motion.p>

                            <motion.p
                                className='text-base md:text-xl mx-auto md:max-w-full max-w-80 text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed'
                                variants={fadeInUp}
                            >
                                Whether you're launching a new brand, refining an existing product, or scaling your online presence — we bring the right mix of creativity, technology, and strategy.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        className='flex items-center md:min-h-[calc(100vh-5rem)] w-1/2'
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    type: "easeOut",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.4,
                                }
                            }
                        }}
                    >
                        <img
                            src={ServicesBanner}
                            className='md:min-h-[calc(100vh-5rem)] w-auto'
                            alt="Digital services illustration"
                        />
                    </motion.div>
                </motion.section>

                {/* Individual Service Sections */}
                <ServicesCardStack cardData={cardData} />
            </div>
        </div>
    )
}