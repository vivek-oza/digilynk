import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/digilynk/ContactForm';
import contactBanner from '../assets/images/contactBanner2.jpg';
import { Mail, Phone, MapPin, Clock, Laugh } from 'lucide-react';

export default function ContactPage() {
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

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Us",
            content: "digilynk2025@gmail.com",
            color: "text-blue-600"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            content: "+91 6353959930",
            color: "text-green-600"
        },
        {
            icon: <Laugh className="w-6 h-6" />,
            title: "Satisfaction",
            content: "100% Client satisfaction",
            color: "text-purple-600"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Response Time",
            content: "Within 24 hours",
            color: "text-orange-600"
        },
    ];

    return (
        <div className="relative">
            {/* Hero Section */}
            <motion.section
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                className="relative min-h-[calc(100vh-5rem)] py-6 bg-white overflow-hidden flex items-center justify-center"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div className="space-y-8 text-center md:text-left" variants={container}>
                        <motion.h1
                            className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6"
                            variants={fadeInUp}
                        >
                            Let's Build Something Amazing Together!
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-600 leading-relaxed"
                            variants={fadeInUp}
                        >
                            Ready to transform your ideas into reality? We're here to help you create digital experiences that <span className="font-medium text-blue-600">inspire</span> and <span className="font-medium text-purple-600">engage</span>.
                        </motion.p>

                        {/* Contact Info Cards */}
                        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8" variants={container}>
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300"
                                    variants={fadeInUp}
                                    whileHover={{
                                        y: -3,
                                        transition: { type: "spring", stiffness: 300, damping: 10 },
                                    }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className={`${info.color} bg-white rounded-lg p-2 shadow-sm`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-900 text-sm">{info.title}</h3>
                                            <p className="text-gray-600 text-sm">{info.content}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Decorative Elements */}
                        <motion.div className="flex space-x-2 justify-center md:justify-start" variants={fadeInUp}>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        className="flex justify-center"
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.4,
                                },
                            },
                        }}
                    >
                        <img
                            src={contactBanner}
                            className="w-full max-w-lg object-contain rounded-2xl scale-x-[-1]"
                            alt="Contact us illustration"
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* Contact Form Section */}
            <motion.section
                className="relative bg-gray-50 py-16 md:py-24 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={container}
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4">
                    <motion.div className="text-center mb-12" variants={container}>
                        <motion.h2
                            className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-4"
                            variants={fadeInUp}
                        >
                            Start Your Project
                        </motion.h2>
                        <motion.p
                            className="text-lg text-gray-600 max-w-2xl mx-auto font-light"
                            variants={fadeInUp}
                        >
                            Tell us about your vision and we'll help bring it to <span className="font-medium text-green-600">life</span>
                        </motion.p>

                        {/* Decorative Elements */}
                        <motion.div className="flex justify-center mt-6 space-x-2" variants={fadeInUp}>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        variants={fadeInUp}
                        whileHover={{
                            y: -5,
                            transition: { type: "spring", stiffness: 300, damping: 10 },
                        }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}


