import React from 'react';
import { motion } from 'framer-motion';
import web1 from '../assets/images/web1.png';
import web2 from '../assets/images/web2.png';
import web3 from '../assets/images/web3.png';
import web4 from '../assets/images/web4.png';
import web5 from '../assets/images/web5.png';
import web6 from '../assets/images/web6.png';
import web7 from '../assets/images/web7.png';
import web8 from '../assets/images/web8.png';
import ServicesCardStack from '@/components/digilynk/ServicesCardStack';  // Import the card stack component

// Reusable animations from About page
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
            damping: 10,
            bounce: 0.4
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
            damping: 10,
            bounce: 0.4
        }
    }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "ease",
            stiffness: 100,
            damping: 0,
            bounce: 0
        }
    }
};

// Card data array for DRY principle
const featureCards = [
    {
        title: "Client-Focused Collaboration",
        description: "We begin every project by understanding your business, your goals, and your audience. This helps us create a website that's not only visually appealing but also aligned with your objectives and user needs.",
        image: web4,
        reverse: false
    },
    {
        title: "SEO-Optimization",
        description: "Every website we build is optimized for search engines, using targeted keywords such as 'web development,' 'web development company,' 'website development services,' and 'ecommerce website development' to boost your online presence and drive organic traffic.",
        image: web5,
        reverse: true
    },
    {
        title: "Responsive and Mobile-Friendly Designs",
        description: "With the majority of users browsing on mobile devices, we ensure your website looks and performs flawlessly on all screen sizes.",
        image: web6,
        reverse: false
    },
    {
        title: "Support and Maintenance",
        description: "Our relationship doesn't end at launch. We provide ongoing support and maintenance to keep your website running smoothly and securely as your business evolves.",
        image: web7,
        reverse: true
    }
];

// Why Choose Us items
const whyChooseItems = [
    {
        id: 1,
        title: "Creative Web Design Excellence",
        text: "Our strength lies in delivering creative web designs that captivate visitors and reflect your brand identity. Every website we build is crafted with attention to detail, ensuring a unique and engaging user experience that sets you apart from the competition."
    },
    {
        id: 2,
        title: "Bug-Free, Smooth, and Secure Websites",
        text: "We prioritize quality at every step, rigorously testing our websites to ensure they are bug-free, smooth in performance, and protected with the latest security measures. Your peace of mind is our priority."
    },
    {
        id: 3,
        title: "Accelerate Your Business Growth",
        text: "A great website is a catalyst for business growth. We design websites that not only attract visitors but also convert them into loyal customers, helping you achieve your business goals faster."
    },
    {
        id: 4,
        title: "First Impressions That Build Trust",
        text: "Your website is often the first point of contact with potential clients. Our visually appealing and professional designs create a strong first impression, building trust and credibility from the moment visitors land on your site."
    },
    {
        id: 5,
        title: "Efficient, Research-Driven Processes",
        text: "We follow well-researched Standard Operating Procedures (SOPs) and industry best practices, making our development process efficient and time-saving. This allows us to deliver projects on time, every time, without compromising on creativity or quality."
    },
    {
        id: 6,
        title: "On-Time Delivery",
        text: "We understand the importance of deadlines. Our streamlined workflow ensures there are no delays. Expect your website to be delivered on time, with responsive and amazing web design that exceeds your expectations."
    }
];

// Reusable FeatureCard component
const FeatureCard = ({ title, description, image, reverse }) => (
    <div className={`max-w-5xl mx-auto py-16 px-6 flex items-center ${reverse ? 'flex-row-reverse' : ''} gap-16`}>
        <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={reverse ? fadeInRight : fadeInLeft}>
            <img src={image} alt={title} className="w-full max-w-md rounded-xl shadow-md" />
        </motion.div>
        <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={reverse ? fadeInLeft : fadeInRight}>
            <h2 className="text-5xl font-semibold text-zinc-800 mb-6">{title}</h2>
            <p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                {description}
            </p>
        </motion.div>
    </div>
);

export default function WebDevelopment() {
    return (
        <div className="relative">
            {/* Background effects matching about page */}
            <div className="absolute z-0 inset-0 w-full max-h-[calc(100vh-5rem)] [background-size:150px_50px] [background-image:linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]" />
            <div className="pointer-events-none max-h-[calc(100vh-5rem)] absolute inset-0 flex items-center justify-center bg-white md:bg-zinc-50 [mask-image:radial-gradient(circle_at_top,transparent_5%,black)] md:[mask-image:radial-gradient(circle_at_top,transparent_1%,black)] dark:bg-black"></div>

            {/* Main Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className='relative mb-32 z-10 w-full overflow-hidden grid place-items-center grid-cols-1 gap-5 md:flex max-h-[calc(100vh-5rem)]'
                >
                    {/* Left Column - Text Content */}
                    <motion.div
                        className='min-h-[calc(100vh-20rem)] w-1/2 md:mx-12 m-4 md:my-0 flex flex-col md:space-y-8 space-y-3 justify-center'
                        variants={container}
                    >
                        <motion.h1
                            className="md:text-5xl text-3xl text-center md:text-start font-semibold text-zinc-800"
                            variants={fadeInUp}
                        >
                            Website Development by Digilynk
                        </motion.h1>

                        <motion.div
                            className="flex flex-col space-y-4 justify-center"
                            variants={container}
                        >
                            <motion.p
                                className='text-2xl text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed'
                                variants={fadeInUp}
                            >
                                Your <span className="text-blue-500 font-medium">Vision</span>, Our <span className="text-green-500 font-medium">Code</span>,
                            </motion.p>
                            <motion.p
                                className='text-2xl text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed'
                                variants={fadeInUp}
                            >
                                Crafting <span className="text-purple-500 font-medium">Ideas into Reality</span>
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        className='flex items-center md:min-h-[calc(100vh-5rem)] w-1/2'
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    bounce: 0.4,
                                    delay: 0.4,
                                }
                            }
                        }}
                    >
                        <img
                            src={web1}
                            className='md:min-h-[calc(100vh-5rem)] w-auto object-contain'
                            alt="Web development illustration"
                        />
                    </motion.div>
                </motion.section>

                {/* Intro Section */}
                <motion.section
                    className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white gap-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={container}
                >
                    <motion.div className="md:w-1/2 mb-8 md:mb-0" variants={fadeInLeft}>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" variants={fadeInUp}>
                            We craft digital experiences that accelerate your business growth, showcase your brand, and inspire trust from the very first click.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" variants={fadeInUp}>
                            We are dedicated to delivering creative, secure, and high-performance websites tailored to your business needs. Our team of passionate developers blends innovative web design with robust development practices, ensuring every project is visually stunning, bug-free, and optimized for growth.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed" variants={fadeInUp}>
                            We believe that a well-crafted website is more than just an online presence. It's a powerful tool for building trust, impressing clients, and accelerating your business success.
                        </motion.p>
                    </motion.div>
                    <motion.div className="md:w-1/2" variants={fadeInRight}>
                        <img
                            src={web2}
                            alt="Web development services"
                            className="w-full rounded-xl shadow-md"
                        />
                    </motion.div>
                </motion.section>

                {/* Importance Section */}
                <motion.section
                    className="flex flex-col items-center justify-center py-6 md:py-16 bg-white gap-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={container}
                >
                    <motion.div className="md:w-2/3" variants={fadeInLeft}>
                        <motion.h2 className="text-5xl mb-10 font-semibold text-center text-zinc-800" variants={fadeInUp}>
                            Why Website is important?
                        </motion.h2>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" variants={fadeInUp}>
                            A website is essential for business growth in today's digital landscape. It acts as your virtual storefront, allowing customers to discover your products and services at any time, from anywhere.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" variants={fadeInUp}>
                            With more than 80% of consumers researching online before making a purchase, having a professional website ensures you're visible when potential customers are searching for solutions you offer. This continuous online presence expands your reach, generates new leads, and opens up opportunities for increased sales and profitability.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" variants={fadeInUp}>
                            Beyond visibility, a website builds credibility and trust with your audience. A well-designed, informative site signals professionalism and reliability, making customers more likely to choose your business over competitors.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed" variants={fadeInUp}>
                            It also serves as a central hub for your marketing efforts, supporting SEO, social media campaigns, and paid advertising, all of which drive targeted traffic and accelerate business growth.
                        </motion.p>
                    </motion.div>
                </motion.section>

                {/* Services Section */}
                <motion.section
                    className="min-h-screen bg-white flex items-center justify-center px-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={container}
                >
                    <motion.div className="max-w-4xl w-full" variants={fadeInUp}>
                        <motion.h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8" variants={fadeInUp}>
                            Development Services
                        </motion.h2>

                        <motion.div
                            className="bg-gray-900 text-white rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
                            variants={fadeInUp}
                        >
                            <div className="space-y-4 flex flex-col">
                                <h1 className='text-2xl'>Website Types</h1>
                                <div className='text-zinc-300 space-y-4'>
                                    <p>Personal Portfolio Websites</p>
                                    <p>Landing Pages</p>
                                    <p>Ecommerce Websites</p>
                                    <p>Business Websites</p>
                                    <p>Educational Websites</p>
                                </div>
                            </div>

                            <div className="space-y-4 flex flex-col">
                                <h1 className='text-2xl'>Specialized Websites</h1>
                                <div className='text-zinc-300 space-y-4'>
                                    <p>Hotel Websites</p>
                                    <p>Hospital Websites</p>
                                    <p>Event Websites</p>
                                    <p>Booking Websites</p>
                                    <p>Blogs</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Why Choose Us Section */}
                <motion.section
                    className="w-full bg-white py-16 px-4 md:px-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={container}
                >
                    <motion.div className="flex flex-col items-center justify-center text-start" variants={fadeInLeft}>
                        <motion.h2 className="text-5xl font-semibold text-zinc-800 mb-6" variants={fadeInUp}>
                            Why Digilynk?
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-8 mt-12"
                        variants={container}
                    >
                        {whyChooseItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className="p-6 bg-white rounded-xl shadow-sm border border-zinc-100"
                                variants={fadeInUp}
                                whileHover={{
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300, damping: 10 }
                                }}
                            >
                                <h4 className="text-2xl font-semibold text-zinc-500 mb-4">{item.title}</h4>
                                <p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div className="flex flex-col items-center justify-center mt-16" variants={fadeInUp}>
                        <img
                            src={web3}
                            alt="Web development services"
                            className="w-full max-w-2xl object-contain"
                        />
                    </motion.div>
                </motion.section>

                {/* Feature Cards Section */}
                {featureCards.map((card, index) => (
                    <FeatureCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        reverse={card.reverse}
                    />
                ))}

                {/* Design Philosophy Section */}
                <motion.section
                    className="flex flex-col items-center justify-between p-6 md:p-16 bg-white gap-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={container}
                >
                    <motion.div className="mb-8 flex flex-col md:mb-0" variants={fadeInLeft}>
                        <motion.h2 className="text-5xl font-semibold text-center text-zinc-800 mb-12" variants={fadeInUp}>
                            We believe in Design
                        </motion.h2>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" variants={fadeInUp}>
                            Web design is a critical factor in shaping your business's first impression. Visitors form opinions about your brand within seconds of landing on your site, and a visually appealing, user-friendly design can immediately convey trust, professionalism, and credibility. A modern, clean layout not only attracts attention but also encourages users to explore your offerings, increasing the likelihood of engagement and conversion.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed" variants={fadeInUp}>
                            Effective web design goes beyond aesthetic. It ensures intuitive navigation, fast loading times, and mobile responsiveness, all of which enhance the user experience. By investing in high-quality web design, your business stands out in a crowded market, leaving a memorable impression that builds customer confidence and loyalty.
                        </motion.p>
                    </motion.div>
                </motion.section>

                {/* Approach Section */}
                <motion.section
                    className="w-full px-4 md:px-16 py-16 bg-white text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={container}
                >
                    <motion.div className="mb-12" variants={fadeInUp}>
                        <motion.h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4" variants={fadeInUp}>
                            Our Development Approach
                        </motion.h2>
                        <motion.h3 className="text-3xl md:text-4xl font-bold" variants={fadeInUp}>
                            <span className="text-blue-500">Quality </span>
                            <span className="text-green-500">Transparency </span>
                            <span className="text-purple-500">& Collaboration</span>
                        </motion.h3>
                    </motion.div>
                </motion.section>

                {/* Final Section */}
                <motion.section
                    className="flex flex-col items-center justify-center pb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={container}
                >
                    <motion.div className="w-full" variants={fadeInLeft}>
                        <motion.h4 className="text-3xl font-semibold text-zinc-900 mb-6 text-center" variants={fadeInUp}>
                            Modern, Aesthetic, Clean, and Appealing Unique Designs
                        </motion.h4>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                            variants={fadeInUp}
                        >
                            At Digilynk, we specialize in crafting modern, aesthetic, and uniquely appealing web designs that elevate your brand identity. Our creative team blends the latest design trends with your business goals, ensuring every website is visually stunning, clean, and easy to navigate. We prioritize minimalism and clarity, using whitespace, balanced color schemes, and striking visuals to create an engaging and memorable digital experience.
                        </motion.p>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                            variants={fadeInUp}
                        >
                            Every project at Digilynk is tailored to your specific needs, resulting in a website that is not only beautiful but also highly functional and responsive across all devices. Our commitment to originality means your site will stand out with a design that's truly one-of-a-kind reflecting your brand's personality and values while driving user engagement and conversions.
                        </motion.p>
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
}