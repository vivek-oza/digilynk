import React from 'react'
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const ServicesCardStack = ({ cardData }) => {
    const navigate = useNavigate();

    const handleContactClick = () => navigate('/contact');
    const handleServiceClick = (service) => navigate(`/${service.toLowerCase()}`);

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

    return (
        <div className="relative z-10">
            {cardData.map((service, index) => (
                <motion.section
                    key={index}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className={`relative z-10 md:px-20 px-5 overflow-hidden my-20 grid place-items-center grid-cols-1 gap-5 md:flex min-h-[calc(100vh-5rem)] ${service.reverse ? 'flex-row-reverse' : ''}`}
                >
                    {/* Text Content */}
                    <motion.div
                        className={`min-h-[calc(100vh-20rem)] px-1 m-4 flex flex-col md:space-y-8 space-y-3 justify-center w-auto`}
                        variants={container}
                    >
                        <motion.h2
                            className={`md:text-5xl text-3xl text-center ${service.reverse ? 'md:text-start' : 'md:text-start'} font-semibold text-zinc-800`}
                            variants={fadeInUp}
                        >
                            {service.title}
                        </motion.h2>

                        <motion.p
                            className={`text-base md:text-xl mx-auto md:max-w-full max-w-80 text-center ${service.reverse ? 'md:text-start' : 'md:text-start'} text-zinc-600 tracking-tight font-medium leading-relaxed`}
                            variants={fadeInUp}
                        >
                            {service.description}
                        </motion.p>

                        {service.showButton && (
                            <motion.div
                                className={`flex md:flex-row flex-col space-y-5 md:space-y-0 md:space-x-5 ${service.reverse ? 'md:justify-start' : 'md:justify-start'}`}
                                variants={fadeInUp}
                            >
                                <Button
                                    onClick={() => handleServiceClick(service.link)}
                                    size={"md"}
                                    className='font-medium shadow-xl shadow-black/20 py-5 text-base'
                                >
                                    Get Started
                                </Button>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        className='flex items-center md:min-h-[calc(100vh-5rem)]'
                        variants={{
                            hidden: { opacity: 0, x: service.reverse ? -50 : 50 },
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
                            src={service.image}
                            className='md:max-w-[calc(100vh-10rem)] rounded-2xl aspect-square shadow-xl'
                            alt={`${service.title} illustration`}
                        />
                    </motion.div>
                </motion.section>
            ))}
        </div>
    );
};

export default ServicesCardStack;