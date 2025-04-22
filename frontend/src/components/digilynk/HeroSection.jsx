import React from 'react'
import heroBanner from '../../assets/images/heroBanner.png';
import { Button } from '../ui/button';
import RotatingText from '../reactbits/TextAnimations/RotatingText/RotatingText';

export default function HeroSection() {
    return (
        <>
            <section className='grid md:grid-cols-2 mb-32 min-h-[calc(100vh-5rem)]'>
                <div className='min-h-[calc(100vh-5rem)]  px-1 mx-12 flex flex-col space-y-8 justify-center w-auto'>
                    <div className="flex text-5xl font-semibold text-zinc-800">Welcome to Digilynk</div>
                    <div className="flex flex-col space-y-8 justify-center">
                        <div className='text-2xl text-zinc-400 tracking-tight font-medium leading-relaxed'>We are a creative studio specializing in website development and software testing. We blend creativity with technology to build scalable, user-focused digital experiences.</div>
                        <div className='flex space-x-5'>
                            <Button className='font-semibold'>Get Started</Button>
                            <Button className='font-semibold' variant="secondary">Learn more</Button>
                        </div>
                    </div>
                </div>
                <div className='min-h-[calc(100vh-5rem)] h-full'>
                    <img src={heroBanner} className='h-full w-full  scale-x-[-1]' alt="Logo" />
                </div>
            </section>
            <section className='flex flex-col space-y-10 my-60'>
                <div className='flex space-x-5 items-center justify-center md:text-5xl text-3xl font-semibold text-zinc-800'>
                    <span>
                        We Build
                    </span>
                    <RotatingText
                        texts={['Smarter', 'Faster', 'Better']}
                        colors={['text-blue-500', 'text-green-500', 'text-purple-500']} // Text colors
                        bgColors={['bg-blue-100', 'bg-green-100', 'bg-purple-100']} // Background colors
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
                    <span>
                        Websites
                    </span>
                </div>
                <div className='flex items-center justify-center text-center text-2xl px-20 text-zinc-400 tracking-tight font-medium leading-relaxed'>We design and develop websites, apps and digital experiences that help our clients grow, innovate, and transform. We listen, learn and understand before we build. We identify your goals together, then use our expertise to find that sweet spot of realistic and impactful.</div>
            </section>
        </>
    )
}
