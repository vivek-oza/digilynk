import React from 'react'
import { motion } from 'framer-motion';
import heroBanner from '../../assets/images/heroBanner.png';
import { Button } from '../ui/button';
import RotatingText from '../reactbits/TextAnimations/RotatingText/RotatingText';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const navigate = useNavigate();
    function handleContactClick() {
        navigate('/contact');
    }
    function handleLearnmoreClick() {
        navigate('/services');
    }

    // Updated spring animation variants
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

    return (
        <>
            <motion.section 
                variants={container} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: false, margin: "-100px" }} 
                className='grid overflow-hidden md:grid-cols-2 place-items-end min-h-[calc(100vh-5rem)]'
            >
                {/* Left Column - Text Content */}
                <motion.div
                    className='min-h-[calc(100vh-5rem)] px-1 mx-12 flex flex-col space-y-8 justify-center w-auto'
                    variants={container}
                >
                    <motion.h1
                        className="text-5xl font-semibold text-zinc-800"
                        variants={fadeInUp}
                    >
                        Welcome to Digilynk
                    </motion.h1>

                    <motion.div
                        className="flex flex-col space-y-8 justify-center"
                        variants={container}
                    >
                        <motion.p
                            className='text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed'
                            variants={fadeInUp}
                        >
                            We are a creative studio specializing in website development and software testing. We blend creativity with technology to build scalable, user-focused digital experiences.
                        </motion.p>

                        <motion.div
                            className='flex space-x-5'
                            variants={fadeInUp}
                        >
                            <Button
                                onClick={handleContactClick}
                                size={"lg"}
                                className='font-medium shadow-xl shadow-black/20 py-5 text-lg'
                            >
                                Get Started
                            </Button>
                            <Button
                                onClick={handleLearnmoreClick}
                                size={"lg"}
                                className='font-medium shadow-xl shadow-black/20 bg-slate-100 py-5 text-lg'
                                variant="secondary"
                            >
                                Learn more
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Column - Image */}
                <motion.div
                    className='max-h-[calc(100vh-5rem)] h-full'
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { 
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: 0.4
                            }
                        }
                    }}
                >
                    <img
                        src={heroBanner}
                        className='h-full scale-x-[-1]'
                        alt="Digital creative illustration"
                    />
                </motion.div>
            </motion.section>

            {/* Second Section */}
            <motion.section
                className='flex flex-col space-y-10 my-36'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={container}
            >
                <motion.div
                    className='flex space-x-5 items-center justify-center md:text-5xl text-3xl font-semibold text-zinc-800'
                    variants={fadeInUp}
                >
                    <span>We Build</span>
                    <RotatingText
                        texts={['Smarter', 'Faster', 'Better']}
                        colors={['text-blue-500', 'text-green-500', 'text-purple-500']}
                        bgColors={['bg-blue-100', 'bg-green-100', 'bg-purple-100']}
                        mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
                    className='flex items-center justify-center text-center text-2xl px-20 text-zinc-600 tracking-tight font-medium leading-relaxed'
                    variants={fadeInUp}
                >
                    We design and develop websites, apps and digital experiences that help our clients grow, innovate, and transform. We listen, learn and understand before we build. We identify your goals together, then use our expertise to find that sweet spot of realistic and impactful.
                </motion.div>
            </motion.section>
        </>
    )
}














// import React from 'react'
// import { motion } from 'framer-motion';
// import heroBanner from '../../assets/images/heroBanner.png';
// import { Button } from '../ui/button';
// import RotatingText from '../reactbits/TextAnimations/RotatingText/RotatingText';
// import { useNavigate } from 'react-router-dom';

// export default function HeroSection() {
//     const navigate = useNavigate();
//     function handleContactClick() {
//         navigate('/contact');
//     }
//     function handleLearnmoreClick() {
//         navigate('/services');
//     }

//     // Animation variants
//     const container = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.2,
//                 delayChildren: 0.3
//             }
//         }
//     };

//     const fadeInUp = {
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.6, ease: "easeOut" }
//         }
//     };

//     const fadeInLeft = {
//         hidden: { opacity: 0, x: -30 },
//         visible: {
//             opacity: 1,
//             x: 0,
//             transition: { duration: 0.8, ease: "easeOut" }
//         }
//     };

//     return (
//         <>

//             <motion.section variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-100px" }} className='grid overflow-y-hidden md:grid-cols-2 place-items-end min-h-[calc(100vh-5rem)]'>
//                 {/* Left Column - Text Content */}
//                 <motion.div
//                     className='min-h-[calc(100vh-5rem)] px-1 mx-12 flex flex-col space-y-8 justify-center w-auto'
//                     initial="hidden"
//                     animate="visible"
//                     variants={container}
//                 >
//                     <motion.h1
//                         className="text-5xl font-semibold text-zinc-800"
//                         variants={fadeInUp}
//                     >
//                         Welcome to Digilynk
//                     </motion.h1>

//                     <motion.div
//                         className="flex flex-col space-y-8 justify-center"
//                         variants={container}
//                     >
//                         <motion.p
//                             className='text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed'
//                             variants={fadeInUp}
//                         >
//                             We are a creative studio specializing in website development and software testing. We blend creativity with technology to build scalable, user-focused digital experiences.
//                         </motion.p>

//                         <motion.div
//                             className='flex space-x-5'
//                             variants={fadeInUp}
//                         >
//                             <Button
//                                 onClick={handleContactClick}
//                                 size={"lg"}
//                                 className='font-medium shadow-xl shadow-black/20 py-5 text-lg'
//                             >
//                                 Get Started
//                             </Button>
//                             <Button
//                                 onClick={handleLearnmoreClick}
//                                 size={"lg"}
//                                 className='font-medium shadow-xl shadow-black/20 bg-slate-100 py-5 text-lg'
//                                 variant="secondary"
//                             >
//                                 Learn more
//                             </Button>
//                         </motion.div>
//                     </motion.div>
//                 </motion.div>

//                 {/* Right Column - Image */}
//                 <motion.div
//                     className='max-h-[calc(100vh-5rem)] h-full'
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ type: 'spring', delay: 0.4, duration: 0.8, ease: "easeOut" }}
//                 >
//                     {/* <img
//                         src={"https://burst.shopifycdn.com/photos/working-at-night.jpg?width=5000&format=pjpg&exif=0&iptc=0"}
//                         className='h-full scale-x-[-1]'
//                         alt="Digital creative illustration"
//                     /> */}
//                     <img
//                         src={heroBanner}
//                         className='h-full scale-x-[-1]'
//                         alt="Digital creative illustration"
//                     />
//                 </motion.div>
//             </motion.section>

//             {/* Second Section */}
//             <motion.section
//                 className='flex flex-col space-y-10 my-36'
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false, margin: "-100px" }}
//                 variants={container}
//             >
//                 <motion.div
//                     className='flex space-x-5 items-center justify-center md:text-5xl text-3xl font-semibold text-zinc-800'
//                     variants={fadeInUp}
//                 >
//                     <span>We Build</span>
//                     <RotatingText
//                         texts={['Smarter', 'Faster', 'Better']}
//                         colors={['text-blue-500', 'text-green-500', 'text-purple-500']}
//                         bgColors={['bg-blue-100', 'bg-green-100', 'bg-purple-100']}
//                         mainClassName="px-2 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
//                         staggerFrom={"last"}
//                         initial={{ y: "100%" }}
//                         animate={{ y: 0 }}
//                         exit={{ y: "-120%" }}
//                         staggerDuration={0.025}
//                         splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//                         transition={{ type: "spring", damping: 30, stiffness: 400 }}
//                         rotationInterval={2000}
//                     />
//                     <span>Websites</span>
//                 </motion.div>

//                 <motion.div
//                     className='flex items-center justify-center text-center text-2xl px-20 text-zinc-600 tracking-tight font-medium leading-relaxed'
//                     variants={fadeInUp}
//                 >
//                     We design and develop websites, apps and digital experiences that help our clients grow, innovate, and transform. We listen, learn and understand before we build. We identify your goals together, then use our expertise to find that sweet spot of realistic and impactful.
//                 </motion.div>
//             </motion.section>
//         </>
//     )
// }