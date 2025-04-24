import React from 'react'
import { motion } from 'framer-motion';
import Services from '../../assets/images/services.png';
import testing from '../../assets/images/testing.png';
import digital from '../../assets/images/digital.png';
import webdevelopment from '../../assets/images/webdevelopment.png';
import graphic from '../../assets/images/graphic.png';
import WebDevelopment from './WebDevelopment';
import { useNavigate } from 'react-router-dom';

export default function Service() {
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

    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/webdevelopment");
  };
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white gap-16">
                <motion.div className="md:w-1/2 mb-8 md:mb-0" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                    <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Our Services</h2>
                    <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" initial="hidden" whileInView="visible" variants={fadeInUp}>
                    At Digilynk, we offer a full spectrum of digital services designed to help your business thrive in today’s competitive landscape. 
                    <br />
                </motion.p>
                <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
                Whether you're launching a new brand, refining an existing product, or scaling your online presence — we bring the right mix of creativity, technology, and strategy to deliver results that matter.
                </motion.p>
                </motion.div>
                <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                    <img
                        src={Services}
                        alt="Services"
                        className="w-90 h-83 object-contain rounded-xl shadow-md"
                    />
                </motion.div>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-6">
                <div className="flex items-center gap-16">
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <img src={testing} alt="Values" className="w-83 h-82 rounded-xl shadow-md" />
                    </motion.div>
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                        <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Software Testing</h2>
                        <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                        Quality is at the core of everything we do. We ensure your software works flawlessly under all conditions.
                        </p>
                        <div className="mt-6 flex gap-4">
            <button className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:opacity-90 transition">
              Get Started
            </button>
            <button className="bg-zinc-100 text-zinc-800 px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-zinc-200 transition">
              Learn More
            </button>
          </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-6">
                <div className="flex items-center flex-row-reverse gap-16">
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                        <img src={webdevelopment} alt="Mission" className="w-83 h-82 rounded-xl shadow-md" />
                    </motion.div>
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Web Development</h2>
                        <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                        We build responsive, high-performance websites that align with your business goals and delight your users
                        </p>
                        <div className="mt-6 flex gap-4">
            <button className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:opacity-90 transition">
              Get Started
            </button>
            <button className="bg-zinc-100 text-zinc-800 px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-zinc-200 transition" onClick={handleClick}>
              Learn More
            </button>
          </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-6">
                <div className="flex items-center gap-16">
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <img src={digital} alt="Vision" className="w-83 h-82 rounded-xl shadow-md" />
                    </motion.div>
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                        <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Digital Marketing</h2>
                        <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                        We craft campaigns that are data-driven, performance-focused, and designed to increase visibility, engagement, and growth.
                        </p>
                        <div className="mt-6 flex gap-4">
            <button className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:opacity-90 transition">
              Get Started
            </button>
            <button className="bg-zinc-100 text-zinc-800 px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-zinc-200 transition">
              Learn More
            </button>
          </div>
                    </motion.div>
                </div>
            </div>
            
            <div className="max-w-5xl mx-auto py-16 px-6">
                <div className="flex items-center flex-row-reverse gap-16">
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                        <img src={graphic} alt="Mission" className="w-83 h-82 rounded-xl shadow-md" />
                    </motion.div>
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Graphic Design</h2>
                        <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                        We think and brew intuitive visuals that are not only stunning but strategically aligned with your business goals.
                        </p>
                        <div className="mt-6 flex gap-4">
            <button className="bg-zinc-900 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:opacity-90 transition">
              Get Started
            </button>
            <button className="bg-zinc-100 text-zinc-800 px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-zinc-200 transition">
              Learn More
            </button>
          </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

