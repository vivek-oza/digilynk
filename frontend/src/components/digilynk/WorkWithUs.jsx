import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Users, Zap } from 'lucide-react';

export default function WorkWithUs() {
    const navigate = useNavigate();

    function handleContactClick() {
        navigate('/contact#top');
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

    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast Delivery",
            description: "Quick turnaround times"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Expert Team",
            description: "Skilled professionals"
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "24/7 Support",
            description: "Always available to help"
        }
    ];

    return (
        <section className='relative bg-gray-50 py-16 md:py-24 overflow-hidden'>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, #8b5cf6 2px, transparent 0)`,
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
                        Work With Us
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 max-w-2xl mx-auto font-light mb-12"
                        variants={fadeInUp}
                    >
                        Ready to transform your digital presence? Let's collaborate and bring your vision to life with our 
                        <span className="font-medium text-purple-600"> innovative</span> solutions.
                    </motion.p>
                    
                    {/* Features Grid */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                        variants={container}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-purple-600 mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-gray-900 font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    {/* CTA Button */}
                    <motion.button
                        className="relative px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        onClick={handleContactClick}
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
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ backgroundSize: '200% 200%' }}
                        />
                        <span className="relative z-10 text-white">Get a Quote</span>
                    </motion.button>
                    
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
            </div>
        </section>
    )
}