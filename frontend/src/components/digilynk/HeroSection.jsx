import React from 'react';
import { motion } from 'framer-motion';
// import heroBanner from '../../assets/images/heroBanner.png';
import heroBanner from '../../assets/images/heroBanner.jpg';
import { Button } from '../ui/button';
import RotatingText from '../reactbits/TextAnimations/RotatingText/RotatingText';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function HeroSection() {
    const navigate = useNavigate();

    function handleContactClick() {
        navigate('/contact');
    }
    function handleLearnmoreClick() {
        navigate('/services');
    }

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

    return (
        <>
            <div className="relative bg-black text-white">
                {/* Background grid - removed styles if not needed */}
                <div className={cn(
                    "absolute z-0 inset-0 h-[calc(100vh-5rem)] w-full",
                    "[background-size:150px_60px]"
                )} />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-zinc-900 md:bg-zinc-900 [mask-image:radial-gradient(circle_at_top,transparent_6%,black)] md:[mask-image:radial-gradient(circle_at_right,transparent_50%,black)] dark:bg-black"></div>

                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className='relative z-10 overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-5rem)]'
                >
                    {/* Left Column - Text Content */}
                    <motion.div
                        className='flex flex-col justify-center px-4 py-8 md:px-12 space-y-6'
                        variants={container}
                    >
                        <motion.h1
                            className="text-3xl md:text-3xl text-center md:text-start"
                            variants={fadeInUp}
                        >
                            Welcome to Digilynk
                        </motion.h1>

                        <motion.p
                            className='text-base md:text-base text-zinc-300 tracking-tight font-medium leading-relaxed text-center md:text-start'
                            variants={fadeInUp}
                        >
                            We are a results-driven digital solutions company specializing in website development and software testing. We blend creativity with technology to build scalable, user-focused digital experiences. From startups to enterprises, we help brands grow, innovate, and transform through tailored innovative solutions.
                        </motion.p>

                        <motion.div
                            className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center md:justify-start'
                            variants={fadeInUp}
                        >
                            <Button
                                onClick={handleContactClick}
                                size={""}
                                className='font-medium shadow-xl shadow-black/20 bg-slate-100 py-5 text-base'
                                variant="secondary"
                            >
                                Get Started
                            </Button>
                            <Button
                                onClick={handleLearnmoreClick}
                                size={""}
                                className='font-medium shadow-xl shadow-black/20 py-5 text-base'
                            >
                                Learn more
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        className='flex items-center justify-center'
                        variants={fadeInUp}
                    >
                        <img
                            src={heroBanner}
                            className='w-full h-full object-cover md:max-h-[calc(100vh-5rem)]'
                            alt="Digital creative illustration"
                        />
                    </motion.div>
                </motion.section>
            </div>

            {/* Second Section */}
            <motion.section
                className='flex flex-col space-y-10 md:my-60 my-10 mb-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={container}
            >
                <motion.div
                    className='flex md:space-x-5 space-x-2 items-center justify-center md:text-3xl text-2xl font-semibold text-zinc-800'
                    variants={fadeInUp}
                >
                    <span>We Build</span>
                    <RotatingText
                        texts={['Smarter', 'Faster', 'Better']}
                        colors={['text-blue-500', 'text-green-500', 'text-purple-500']}
                        bgColors={['bg-blue-100', 'bg-green-100', 'bg-purple-100']}
                        mainClassName="px-4 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                    <span>Websites</span>
                </motion.div>

                <motion.div
                    className='flex items-center justify-center text-center text-base md:text-md md:px-20 px-4 text-zinc-600 tracking-tight font-medium leading-relaxed'
                    variants={fadeInUp}
                >
                    We design and develop websites, apps and digital experiences that help our clients grow, innovate, and transform. We listen, learn and understand before we build. We identify your goals together, then use our expertise to find that sweet spot of realistic and impactful.
                </motion.div>
            </motion.section>
        </>
    );
}
