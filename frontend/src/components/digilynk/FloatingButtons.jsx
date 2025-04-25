import { ArrowUp, MessageCircle } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconBrandWhatsapp } from '@tabler/icons-react';
// import { IconBrandWhatsapp } from '@tabler/icons-react';

const WhatsappButton = () => {
    function handleWhatsappClick() {
        const phoneNumber = '6353959930'; // replace with actual number
        const message = encodeURIComponent("Hi, I'm contacting you from Digilynk website regarding your services.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`);
    }
    return (
        <motion.a
            onClick={handleWhatsappClick}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-10 bottom-10 z-50 bg-green-500 text-white flex justify-center items-center rounded-full size-12 cursor-pointer shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <IconBrandWhatsapp size={30}     />

        </motion.a>
    );
};

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed right-10 bottom-10 z-40"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: 1,
                        y: -60,
                        transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    exit={{
                        opacity: 1,
                        y: -20,
                        transition: { duration: 0.2, ease: "easeIn" }
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.button
                        onClick={scrollToTop}
                        className="bg-zinc-800 text-white flex justify-center items-center rounded-full size-12 cursor-pointer shadow-lg"
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.span
                            whileHover={{ y: -3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <ArrowUp size={30} />
                        </motion.span>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const FloatingButtons = () => {
    return (
        <>
            <WhatsappButton />
            <BackToTop />
        </>
    );
};