import React from 'react'
import { motion } from 'framer-motion';
import heroBanner from '../../assets/images/heroBanner.png';
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
            <div className="relative">
                {/* Grid background - only for hero section */}
                <div className={cn(
                    "absolute z-0 inset-0 h-[calc(100vh-5rem)] w-full",
                    "[background-size:100px_40px]",
                    "[background-image:linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]",
                )} />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-blue-100 [mask-image:radial-gradient(circle_at_top,transparent_5%,black)] dark:bg-black"></div>

                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className='relative z-10 overflow-hidden grid place-items-center grid-cols-1 gap-5 md:flex min-h-[calc(100vh-5rem)]'
                >
                    {/* Left Column - Text Content */}
                    <motion.div
                        className='min-h-[calc(100vh-20rem)] px-1 md:mx-12 mx-4 my-4 md:my-0 flex flex-col md:space-y-8 space-y-3 justify-center w-auto'
                        variants={container}
                    >
                        <motion.h1
                            className="md:text-5xl text-3xl text-center md:text-start font-semibold text-zinc-800"
                            variants={fadeInUp}
                        >
                            Welcome to Digilynk
                        </motion.h1>

                        <motion.div
                            className="flex flex-col space-y-8 justify-center"
                            variants={container}
                        >
                            <motion.p
                                className='text-base md:text-xl mx-auto md:max-w-full max-w-80 text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed'
                                variants={fadeInUp}
                            >
                                We are a creative studio specializing in website development, software testing and graphic designing. We blend creativity with technology to build scalable, user-focused digital experiences.
                            </motion.p>

                            <motion.div
                                className='flex md:flex-row flex-col space-y-5 md:space-y-0 md:space-x-5'
                                variants={fadeInUp}
                            >
                                <Button
                                    onClick={handleContactClick}
                                    size={"md"}
                                    className='font-medium shadow-xl shadow-black/20 py-5 text-base'
                                >
                                    Get Started
                                </Button>
                                <Button
                                    onClick={handleLearnmoreClick}
                                    size={"md"}
                                    className='font-medium shadow-xl shadow-black/20 bg-slate-100 py-5 text-base'
                                    variant="secondary"
                                >
                                    Learn more
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        className='flex items-center md:min-h-[calc(100vh-5rem)] bg-emerald-500'
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
                            className='md:min-h-[calc(100vh-5rem)] md:min-w-[calc(100vh-5rem)] aspect-square scale-x-[-1]'
                            alt="Digital creative illustration"
                        />
                    </motion.div>
                </motion.section>
            </div>

            {/* Second Section - No grid background here */}
            <motion.section
                className='flex flex-col space-y-10 md:my-36 my-10 mb-20'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={container}
            >
                <motion.div
                    className='flex md:space-x-5 space-x-2 items-center justify-center md:text-5xl text-2xl font-semibold text-zinc-800'
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
                    className='flex items-center justify-center text-center text-base md:px-20 px-4 text-zinc-600 tracking-tight font-medium leading-relaxed'
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
// import { cn } from '../../lib/utils';

// export default function HeroSection() {
//     const navigate = useNavigate();
//     function handleContactClick() {
//         navigate('/contact');
//     }
//     function handleLearnmoreClick() {
//         navigate('/services');
//     }

//     // Updated spring animation variants
//     const container = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.15,
//                 delayChildren: 0.2,
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10
//             }
//         }
//     };

//     const fadeInUp = {
//         hidden: { opacity: 0, y: 30 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10
//             }
//         }
//     };

//     const fadeInLeft = {
//         hidden: { opacity: 0, x: -30 },
//         visible: {
//             opacity: 1,
//             x: 0,
//             transition: {
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10
//             }
//         }
//     };

//     return (
//         <>
//             <motion.section
//                 variants={container}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false, margin: "-100px" }}
//                 className='overflow-hidden grid place-items-center grid-cols-1 gap-5 md:flex min-h-[calc(100vh-5rem)]'
//             >
//                 {/* Left Column - Text Content */}
//                 <motion.div
//                     className='min-h-[calc(100vh-20rem)] px-1 md:mx-12 mx-4 my-4 md:my-0 flex flex-col md:space-y-8 space-y-3 justify-center w-auto'
//                     variants={container}
//                 >
//                     <div
//                         className={cn(
//                             "absolute z-0 inset-0",
//                             "[background-size:100px_40px]",
//                             "[background-image:linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]",
//                             // "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
//                         )}
//                     />
//                     <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-blue-100 [mask-image:radial-gradient(circle_at_top,transparent_5%,black)] dark:bg-black"></div>


//                     <motion.h1
//                         className="md:text-5xl text-3xl text-center md:text-start font-semibold text-zinc-800"
//                         variants={fadeInUp}
//                     >
//                         Welcome to Digilynk
//                     </motion.h1>

//                     <motion.div
//                         className="flex flex-col space-y-8 justify-center"
//                         variants={container}
//                     >
//                         <motion.p
//                             className='text-base md:text-xl mx-auto md:max-w-full max-w-80  text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed'
//                             variants={fadeInUp}
//                         >
//                             We are a creative studio specializing in website development, software testing and graphic designing. We blend creativity with technology to build scalable, user-focused digital experiences.
//                         </motion.p>

//                         <motion.div
//                             className='flex md:flex-row flex-col space-y-5 md:space-y-0  md:space-x-5'
//                             variants={fadeInUp}
//                         >
//                             <Button
//                                 onClick={handleContactClick}
//                                 size={"md"}
//                                 className='font-medium shadow-xl shadow-black/20 py-5 text-base'
//                             >
//                                 Get Started
//                             </Button>
//                             <Button
//                                 onClick={handleLearnmoreClick}
//                                 size={"md"}
//                                 className='font-medium shadow-xl shadow-black/20 bg-slate-100 py-5 text-base'
//                                 variant="secondary"
//                             >
//                                 Learn more
//                             </Button>
//                         </motion.div>
//                     </motion.div>
//                 </motion.div>

//                 {/* Right Column - Image */}
//                 <motion.div
//                     className='flex items-center md:min-h-[calc(100vh-5rem)]  bg-emerald-500'
//                     variants={{
//                         hidden: { opacity: 0, x: 50 },
//                         visible: {
//                             opacity: 1,
//                             x: 0,
//                             transition: {
//                                 type: "spring",
//                                 stiffness: 100,
//                                 damping: 10,
//                                 delay: 0.4
//                             }
//                         }
//                     }}
//                 >
//                     <img
//                         src={heroBanner}
//                         className='md:min-h-[calc(100vh-5rem)] md:min-w-[calc(100vh-5rem)] aspect-square scale-x-[-1]'
//                         alt="Digital creative illustration"
//                     />
//                 </motion.div>
//             </motion.section>

//             {/* Second Section */}
//             <motion.section
//                 className='flex flex-col space-y-10 md:my-36 my-10 mb-20'
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: false, margin: "-100px" }}
//                 variants={container}
//             >
//                 <motion.div
//                     className='flex md:space-x-5 space-x-2 items-center justify-center md:text-5xl text-2xl font-semibold text-zinc-800'
//                     variants={fadeInUp}
//                 >
//                     <span>We Build</span>
//                     <RotatingText
//                         texts={['Smarter', 'Faster', 'Better']}
//                         colors={['text-blue-500', 'text-green-500', 'text-purple-500']}
//                         bgColors={['bg-blue-100', 'bg-green-100', 'bg-purple-100']}
//                         mainClassName="px-4 sm:px-2 md:px-3 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
//                     className='flex items-center justify-center text-center text-base md:px-20 px-4 text-zinc-600 tracking-tight font-medium leading-relaxed'
//                     variants={fadeInUp}
//                 >
//                     We design and develop websites, apps and digital experiences that help our clients grow, innovate, and transform. We listen, learn and understand before we build. We identify your goals together, then use our expertise to find that sweet spot of realistic and impactful.
//                 </motion.div>
//             </motion.section>
//         </>
//     )
// }