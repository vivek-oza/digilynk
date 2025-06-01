import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom';

export default function WorkWithUs() {
    const navigate = useNavigate();

    function handleContactClick() {
        navigate('/contact#top');
    }

    return (
        <motion.section
            className='min-h-96 mt-20 bg-zinc-100 flex flex-col justify-center items-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10
            }}
        >
            <motion.div
                className="mb-20 md:text-3xl text-3xl mx-auto font-semibold text-zinc-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.2
                }}
            >
                Work with us
            </motion.div>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button
                    onClick={handleContactClick}
                    size={"md"}
                    className='text-lg shadow-xl hover:scale-105 shadow-black/40'
                >
                    Get a quote
                </Button>
            </motion.div>
        </motion.section>
    )
}