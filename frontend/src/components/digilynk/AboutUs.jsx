import React from 'react';
import { motion } from 'framer-motion';
import About from '../../assets/images/About.png';
import values from '../../assets/images/values.png';
import mission from '../../assets/images/mission.png';
import vision from '../../assets/images/vision.png';
import FaqSection from './FaqSection';

export default function AboutUs() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white gap-16">
                <motion.div className="md:w-1/2 mb-8 md:mb-0" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                    <h2 className="text-5xl font-semibold text-zinc-800 mb-6">About Us</h2>
                    <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                        We believe that every business is unique and deserves a digital presence that reflects its individuality.
                        We are a creative, professional team passionate about design, innovation, and delivering results that help our clients grow and transform.
                        We listen, learn, and understand your goals before we start any project. By combining your vision with our expertise, we find that sweet spot where realistic solutions meet impactful results.
                    </p>
                </motion.div>
                <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                    <img
                        src={About}
                        alt="About Us"
                        className="w-78 h-80 object-contain rounded-xl shadow-md"
                    />
                </motion.div>
            </div>

            <div className="max-w-3xl mx-auto py-16 px-6">
                <motion.h2 className="text-5xl font-semibold text-zinc-800 mb-6" initial="hidden" whileInView="visible" variants={fadeInUp}>
                    Why choose us?
                </motion.h2>
                <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" initial="hidden" whileInView="visible" variants={fadeInUp}>
                    At Digilynk, we don’t just deliver services — we build partnerships. Our approach is rooted in understanding your unique goals, challenges, and market before proposing any solution. Every project we take on is treated with the same care and precision as if it were our own product.
                    <br />
                </motion.p>
                <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
                    What sets us apart is our dedication to quality, creativity, and results. We combine technical expertise with a deep understanding of user behavior, ensuring every solution we deliver is not just functional but impactful.
                </motion.p>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-6">
                <div className="flex items-center gap-16">
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <img src={values} alt="Values" className="w-80 h-80 rounded-xl shadow-md" />
                    </motion.div>
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                        <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Values</h2>
                        <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                            We believe in creativity, professionalism, and collaboration. Every project is unique, and we strive to deliver tailored digital experiences that truly reflect our clients’ vision.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-6">
                <div className="flex items-center flex-row-reverse gap-16">
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                        <img src={mission} alt="Mission" className="w-80 h-80 rounded-xl shadow-md" />
                    </motion.div>
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Mission</h2>
                        <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                            To design and develop innovative, high-quality websites and apps that help businesses grow, transform, and succeed in the digital world.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-6">
                <div className="flex items-center gap-16">
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <img src={vision} alt="Vision" className="w-80 h-80 rounded-xl shadow-md" />
                    </motion.div>
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                        <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Vision</h2>
                        <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                            To be a leading creative partner known for crafting impactful, user-centric digital solutions that set new standards in writing your growth story.
                        </p>
                    </motion.div>
                </div>
            </div>
            <FaqSection />
        </div>
    );
}
