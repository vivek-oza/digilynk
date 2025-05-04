import React from 'react';
import { motion } from 'framer-motion';
import testing1 from '../assets/images/testing/testing1.png';
import testing2 from '../assets/images/testing/testing2.png';
import testing3 from '../assets/images/testing/testing3.png';
import testing4 from '../assets/images/testing/testing4.png';
import testing5 from '../assets/images/testing/testing5.png';
// import testing6 from '../assets/images/testing/testing6.png';
// import testing7 from '../assets/images/testing/testing7.png';
// import testing8 from '../assets/images/testing/testing8.png';
import ServicesCardStack from '@/components/digilynk/ServicesCardStack';

// Reusable animations
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

// Card data array
const featureCards = [
    {
        title: "Comprehensive Test Coverage",
        description: "We implement thorough testing strategies that cover all aspects of your software, from functional requirements to performance benchmarks and security vulnerabilities, ensuring complete quality assurance.",
        image: testing4,
        reverse: false
    },
    {
        title: "Domain-Specific Expertise",
        description: "Our team brings specialized knowledge in healthcare, insurance, ecommerce, and gaming domains, allowing us to test your software with industry-specific requirements in mind.",
        image: testing5,
        reverse: true
    },
    // {
    //     title: "Automation Integration",
    //     description: "We strategically implement test automation where it delivers the most value, combining it with manual testing for comprehensive coverage and efficient regression testing.",
    //     image: testing6,
    //     reverse: false
    // },
    // {
    //     title: "Continuous Testing Support",
    //     description: "Our relationship extends beyond initial testing. We provide ongoing support, maintenance testing, and CI/CD integration to keep your software reliable as it evolves.",
    //     image: testing7,
    //     reverse: true
    // }
];

// Why Choose Us items
const whyChooseItems = [
    {
        id: 1,
        title: "Rigorous Quality Assurance",
        text: "We go beyond surface-level testing to rigorously examine every aspect of your software. Our meticulous approach identifies even the most subtle defects, ensuring your product meets the highest quality standards before launch."
    },
    {
        id: 2,
        title: "Bug-Free, High-Performance Software",
        text: "We prioritize quality at every step, rigorously testing software to ensure it's bug-free, performs smoothly under load, and is protected with the latest security measures. Your peace of mind is our priority."
    },
    {
        id: 3,
        title: "Accelerate Your Product Launch",
        text: "Our efficient testing processes help identify issues early, reducing development cycles and enabling faster time-to-market without compromising on quality."
    },
    {
        id: 4,
        title: "User Experience Optimization",
        text: "We test not just for functionality but for exceptional user experiences. Our UX testing ensures your software is intuitive, accessible, and enjoyable for all users."
    },
    {
        id: 5,
        title: "Research-Driven Testing Processes",
        text: "We follow well-researched Standard Operating Procedures (SOPs) and industry best practices, making our testing process efficient and comprehensive. This allows us to deliver thorough results on time, every time."
    },
    {
        id: 6,
        title: "On-Time Delivery",
        text: "We understand the importance of deadlines in product development. Our streamlined testing workflow ensures there are no delays, delivering comprehensive test reports when you need them."
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

export default function SoftwareTesting() {
    return (
        <div className="relative overflow-x-hidden md:p-0 px-3">
            {/* Background effects */}
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
                            Software Testing by Digilynk
                        </motion.h1>

                        <motion.div
                            className="flex flex-col space-y-4 justify-center"
                            variants={container}
                        >
                            <motion.p
                                className='text-2xl text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed'
                                variants={fadeInUp}
                            >
                                Ensuring <span className="text-blue-500 font-medium">Flawless Performance</span>, 
                            </motion.p>
                            <motion.p
                                className='text-2xl text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed'
                                variants={fadeInUp}
                            >
                                Exceptional <span className="text-green-500 font-medium">User Experiences</span>
                            </motion.p>
                            <motion.p
                                className='text-2xl text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed'
                                variants={fadeInUp}
                            >
                                and <span className="text-purple-500 font-medium">Business Success</span>
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
                            src={testing1}
                            className='md:min-h-[calc(100vh-5rem)] w-auto object-contain'
                            alt="Software testing illustration"
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
                            We believe that in today's digital world, software quality is non-negotiable. Whether you're launching a mission-critical healthcare app, an engaging mobile game, or a sophisticated AI chatbot, the success of your product depends on rigorous, end-to-end testing.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" variants={fadeInUp}>
                            Our expert software testing services are designed to identify defects early, improve usability, optimize performance, and ensure your software works seamlessly across platforms and domains.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed" variants={fadeInUp}>
                            We combine technical expertise with business acumen to deliver testing solutions that not only find bugs but also enhance your product's market readiness and user appeal.
                        </motion.p>
                    </motion.div>
                    <motion.div className="md:w-1/2" variants={fadeInRight}>
                        <img
                            src={testing2}
                            alt="Software testing services"
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
                            Why Software Testing is Important?
                        </motion.h2>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" variants={fadeInUp}>
                            Software testing is not just a step in the development cycle—it is the foundation of trust between you and your users. It protects your brand reputation, reduces costly post-release fixes, and ensures compliance with industry standards.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" variants={fadeInUp}>
                            With increasing consumer expectations for flawless digital experiences, comprehensive testing ensures your software meets these demands. Testing helps identify and fix defects early in the development process, leading to improved software quality, increased user satisfaction, and reduced costs.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" variants={fadeInUp}>
                            Beyond defect detection, testing validates that your software meets business requirements, performs under load, remains secure against threats, and delivers an intuitive user experience across all platforms and devices.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed" variants={fadeInUp}>
                            At Digilynk, we go beyond traditional testing; we deliver insights that help you innovate confidently and launch products that excel in competitive markets.
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
                            Testing Services
                        </motion.h2>

                        <motion.div
                            className="bg-gray-900 text-white rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-6"
                            variants={fadeInUp}
                        >
                            <div className="space-y-4 flex flex-col">
                                <h1 className='text-2xl'>Testing Services</h1>
                                <div className='text-zinc-300 space-y-4'>
                                    <p>Functional Testing</p>
                                    <p>Usability Testing</p>
                                    <p>UI/UX Testing</p>
                                    <p>Gameplay Testing</p>
                                    <p>AI Chatbot Testing</p>
                                    <p>CRM Testing</p>
                                    <p>Cross-Browser Testing</p>
                                    <p>Compatibility Testing</p>
                                </div>
                            </div>

                            <div className="space-y-4 flex flex-col">
                                <h1 className='text-2xl'>Testing Types</h1>
                                <div className='text-zinc-300 space-y-4'>
                                    <p>Manual Testing</p>
                                    <p>Automated Testing</p>
                                    <p>Regression Testing</p>
                                    <p>Performance Testing</p>
                                    <p>Security Testing</p>
                                    <p>Accessibility Testing</p>
                                    <p>Localization Testing</p>
                                    <p>API Testing</p>
                                </div>
                            </div>

                            <div className="space-y-4 flex flex-col">
                                <h1 className='text-2xl'>Testing Domains</h1>
                                <div className='text-zinc-300 space-y-4'>
                                    <p>Web Applications</p>
                                    <p>Mobile Applications</p>
                                    <p>Mobile Games</p>
                                    <p>AI Chatbots</p>
                                    <p>Healthcare Systems</p>
                                    <p>Insurance Platforms</p>
                                    <p>Ecommerce Solutions</p>
                                    <p>Enterprise Software</p>
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
                            Why Digilynk for Testing?
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
                            src={testing3}
                            alt="Software testing services"
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

                {/* Industry Expertise Section */}
                <motion.section
                    className="flex flex-col items-center justify-between p-6 md:p-16 bg-white gap-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={container}
                >
                    <motion.div className="mb-8 flex flex-col md:mb-0" variants={fadeInLeft}>
                        <motion.h2 className="text-5xl font-semibold text-center text-zinc-800 mb-12" variants={fadeInUp}>
                            Industry-Specific Testing Expertise
                        </motion.h2>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" variants={fadeInUp}>
                            Different industries have unique software requirements and regulatory standards. Our team brings specialized knowledge across multiple domains, allowing us to test your software with industry-specific requirements in mind.
                        </motion.p>
                        <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed" variants={fadeInUp}>
                            Whether you're in healthcare needing HIPAA compliance testing, in finance requiring rigorous security validation, or in gaming needing immersive experience testing, we tailor our approach to your specific industry challenges and opportunities.
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
                            Our Testing Methodology
                        </motion.h2>
                        <motion.h3 className="text-3xl md:text-4xl font-bold" variants={fadeInUp}>
                            <span className="text-blue-500">Comprehensive </span>
                            <span className="text-green-500">Strategic </span>
                            <span className="text-purple-500">& Results-Driven</span>
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
                            Thorough, Methodical, and Quality-Focused Testing
                        </motion.h4>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                            variants={fadeInUp}
                        >
                            At Digilynk, we specialize in delivering comprehensive software testing services that go beyond basic validation. Our approach combines technical expertise with business understanding to ensure your software not only works correctly but also delivers exceptional user experiences and meets market demands.
                        </motion.p>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                            variants={fadeInUp}
                        >
                            We employ a balanced mix of manual and automated testing techniques, tailored to your project's specific needs. Our testers become an extension of your team, providing not just bug reports but actionable insights to improve your product's quality, performance, and user satisfaction.
                        </motion.p>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed max-w-5xl mx-auto"
                            variants={fadeInUp}
                        >
                            Partner with Digilynk for testing services that don't just find issues—they help you build better software. Contact us today to discuss how we can support your quality assurance needs and help you deliver exceptional digital products to your users.
                        </motion.p>
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
}














// import React from 'react'
// import { motion } from 'framer-motion';
// import testingBanner from '../../assets/images/testing/testingBanner.png';
// import web2 from '../../assets/images/web2.png';
// import web3 from '../../assets/images/web3.png';
// import web4 from '../../assets/images/web4.png';
// import web5 from '../../assets/images/web5.png';
// import web6 from '../../assets/images/web6.png';
// import web7 from '../../assets/images/web7.png';
// import web8 from '../../assets/images/testing/testingBannerEnd.png';

// export default function SoftwareTesting() {
//     const fadeInUp = {
//         hidden: { opacity: 0, y: 40 },
//         visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
//     };

//     const fadeInLeft = {
//         hidden: { opacity: 0, x: -50 },
//         visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
//     };

//     const fadeInRight = {
//         hidden: { opacity: 0, x: 50 },
//         visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
//     };
//     return (
//         <div className="min-h-screen bg-white flex flex-col items-center justify-center">
//             <div className='min-h-screen flex flex-col items-center justify-center'>
//                 <h1 className="text-4xl md:text-5xl font-semibold text-center text-zinc-800 mb-4">
//                     Testing by Digilynk
//                 </h1>
//                 <p className="text-2xl text-center text-gray-600 mb-1">
//                     Ensuring {" "}
//                     <span className="text-blue-500 font-medium">Flawless Software</span>
//                     <br />
//                     Exceptional <span className="text-green-500 font-medium">User Experiences</span>
//                 </p>
//                 <p className="text-2xl text-center text-gray-600 mb-10">
//                     and{" "}
//                     <span className="text-purple-500 font-medium">Business Success</span>
//                 </p>
//             </div>
//             <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white gap-16">
//                 <motion.div className="md:w-1/2 mb-8 md:mb-0" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                     <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" initial="hidden" whileInView="visible" variants={fadeInUp}>
//                         We believe that in today’s digital world, software quality is non-negotiable. Whether you’re launching a mission-critical healthcare app, an engaging mobile game, or a sophisticated AI chatbot, the success of your product depends on rigorous, end-to-end testing.
//                         <br />
//                     </motion.p>
//                     <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
//                         Our expert software testing services are designed to identify defects early, improve usability, optimize performance, and ensure your software works seamlessly across platforms and domains.
//                         <br />
//                     </motion.p>
//                 </motion.div>
//                 <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
//                     <img
//                         src={testingBanner}
//                         alt="Services"
//                         className="w-90 h-90 object-contain rounded-xl shadow-md"
//                     />
//                 </motion.div>
//             </div>
//             <div className="flex flex-col md:flex-row items-center justify-center py-6 md:py-16  bg-white gap-16">
//                 <motion.div className="md:w-2/3 " initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                     <h2 className="text-5xl mb-10 font-semibold text-center text-zinc-800">Why Testing is important?</h2>
//                     <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
//                         Software testing is not just a step in the development cycle it is the foundation of trust between you and your users. It protects your brand reputation, reduces costly post-release fixes, and ensures compliance with industry standards. At Digilynk, we go beyond traditional testing; we deliver insights that help you innovate confidently.
//                         <br /> <br />
//                     </motion.p>
//                     <motion.p className="text-xl text-zinc-600 tracking-tight mt-0 font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
//                         Testing helps identify and fix defects early in the development process, leading to improved software quality, increased user satisfaction, and reduced costs. By proactively identifying issues, testing minimizes the impact of bugs and enhances the overall reliability and performance of the software.
//                     </motion.p>
//                 </motion.div>
//             </div>

//             <div className="min-h-screen bg-white flex items-center justify-center px-4">
//                 <div className="max-w-4xl w-full">
//                     <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
//                         Testing Services
//                     </h2>

//                     <div className="bg-gray-900 text-white rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//                         <div className="space-y-4 flex flex-col">
//                             <h1 className='text-2xl'>Testing services</h1>
//                             <div className='text-zinc-300 space-y-4'>
//                                 <p>Functional Testing</p>
//                                 <p>Usability Testing</p>
//                                 <p>UI/UX Testing</p>
//                                 <p>Gameplay Testing</p>
//                                 <p>AI Chatbot Testing</p>
//                                 <p>CRM Testing</p>
//                                 <p>Cross-Browser Testing</p>
//                                 <p>Compatibility Testing</p>
//                             </div>
//                         </div>


//                         <div className="space-y-4 flex flex-col">
//                             <h1 className='text-2xl'>Types of Testing</h1>
//                             <div className='text-zinc-300 space-y-4'>
//                                 <p>Functional Testing</p>
//                                 <p>Web Applications</p>
//                                 <p>Healthcare Insurance</p>
//                                 <p>Ecommerce</p>
//                                 <p>Gaming</p>
//                             </div>
//                         </div>

//                         <div className="space-y-4 flex flex-col">
//                             <h1 className='text-2xl'>Testing Domains</h1>
//                             <div className='text-zinc-300 space-y-4'>
//                                 <p>Web Applications</p>
//                                 <p>Mobile Applications</p>
//                                 <p>Mobile Games</p>
//                                 <p>AI Chatbots</p>
//                                 <p>AI Chatbot Testing</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-full bg-white py-16 px-4 md:px-16">
//                 <div className="flex flex-col items-center justify-center text-start">
//                     <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                         {/* <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Why Digilynk?</h2> */}
//                         <h4 className="text-2xl font-semibold text-zinc-500 mb-6">Functional Testing</h4>
//                         <motion.p
//                             className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
//                             initial="hidden"
//                             whileInView="visible"
//                             variants={fadeInUp}
//                         >
//                             We ensure your applications work exactly as intended, validating every feature against your business requirements. Our functional testing process is meticulously crafted—starting from requirement analysis, through test planning and execution, to thorough defect logging and regression testing. This guarantees your software performs seamlessly in real-world scenarios, delivering a reliable and consistent user experience.
//                             <br /> <br />
//                         </motion.p>
//                     </motion.div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-start">
//                     <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                         <h4 className="text-2xl font-semibold text-zinc-500 mb-6">Usability Testing</h4>
//                         <motion.p
//                             className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
//                             initial="hidden"
//                             whileInView="visible"
//                             variants={fadeInUp}
//                         >
//                             We ensure your applications work exactly as intended, validating every feature against your business requirements. Our functional testing process is meticulously crafted—starting from requirement analysis, through test planning and execution, to thorough defect logging and regression testing. This guarantees your software performs seamlessly in real-world scenarios, delivering a reliable and consistent user experience.
//                             <br /> <br />
//                         </motion.p>
//                     </motion.div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-start">
//                     <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                         <h4 className="text-2xl font-semibold text-zinc-500 mb-6">UI/UX Testing</h4>
//                         <motion.p
//                             className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
//                             initial="hidden"
//                             whileInView="visible"
//                             variants={fadeInUp}
//                         >
//                             We deliver pixel-perfect digital experiences by rigorously testing your user interfaces for consistency, clarity, and ease of navigation. Our UI/UX testing covers everything from information architecture and visual hierarchy to navigational flow and graphical elements, ensuring your users enjoy a seamless journey across all devices.
//                             <br /> <br />
//                         </motion.p>
//                     </motion.div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-start">
//                     <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                         <h4 className="text-2xl font-semibold text-zinc-500 mb-6">Gameplay Testing</h4>
//                         <motion.p
//                             className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
//                             initial="hidden"
//                             whileInView="visible"
//                             variants={fadeInUp}
//                         >
//                             For gaming products, our advanced gameplay testing services validate every aspect—from core mechanics and balance to multiplayer functionality and cross-platform compatibility. We identify and resolve issues that impact player experience, optimize performance, and ensure your games are engaging, stable, and ready for market success.
//                             <br /> <br />
//                         </motion.p>
//                     </motion.div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-start">
//                     <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                         <h4 className="text-2xl font-semibold text-zinc-500 mb-6">AI Chatbot Testing</h4>
//                         <motion.p
//                             className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
//                             initial="hidden"
//                             whileInView="visible"
//                             variants={fadeInUp}
//                         >
//                             We combine manual and automated testing to evaluate your AI chatbots for accuracy, responsiveness, and security. Our process covers functional, usability, and performance testing, ensuring your chatbots deliver meaningful, error-free interactions and support your business objectives.
//                             <br /> <br />
//                         </motion.p>
//                     </motion.div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center text-start">
//                     <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                         <h4 className="text-2xl font-semibold text-zinc-500 mb-6">CRM Testing</h4>
//                         <motion.p
//                             className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
//                             initial="hidden"
//                             whileInView="visible"
//                             variants={fadeInUp}
//                         >
//                             Your CRM is the backbone of customer relationships. We provide end-to-end CRM testing covering data integrity, functionality, integration, reporting, and user acceptance. Our experts help you avoid costly CRM failures, ensuring your system is flawless, reliable, and ready to drive customer loyalty.
//                             <br /> <br />
//                         </motion.p>
//                     </motion.div>
//                 </div>

//                 <div className="flex flex-col items-center justify-center text-start">
//                     <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                         <h4 className="text-2xl font-semibold text-zinc-500 mb-6">Cross-Browser & Compatibility Testing</h4>
//                         <motion.p
//                             className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
//                             initial="hidden"
//                             whileInView="visible"
//                             variants={fadeInUp}
//                         >
//                             We test your applications across browsers, devices, and operating systems to guarantee consistent performance and appearance. Our compatibility testing ensures your users enjoy a flawless experience, no matter how they access your product.
//                             <br /> <br />
//                         </motion.p>
//                     </motion.div>
//                 </div>


//                 <div className="flex flex-col items-center justify-center text-start">
//                     <img
//                         src={web3}
//                         alt="Services"
//                         className="size-[600px] object-contain"
//                     />
//                 </div>
//             </div>

//             {/* bottom cards */}
//             <div className="max-w-5xl mx-auto py-16 px-6">
//                 <div className="flex items-center gap-16">
//                     <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                         <img src={web4} alt="Vision" className="w-80 h-80 rounded-xl shadow-md" />
//                     </motion.div>
//                     <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
//                         <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Healthcare</h2>
//                         <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
//                             We understand the critical nature of healthcare software — compliance, data security, and accuracy are paramount. Our testing ensures your applications meet regulatory standards like HIPAA and deliver safe, reliable patient experiences.
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>

//             <div className="max-w-5xl mx-auto py-16 px-6">
//                 <div className="flex items-center flex-row-reverse gap-16">
//                     <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
//                         <img src={web5} alt="Mission" className="w-80 h-80 rounded-xl shadow-md" />
//                     </motion.div>
//                     <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                         <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Insurance</h2>
//                         <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
//                             Insurance software demands precision and reliability. We test policy management systems, claims processing, and customer portals to ensure flawless operation and regulatory compliance.
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>

//             <div className="max-w-5xl mx-auto py-16 px-6">
//                 <div className="flex items-center gap-16">
//                     <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                         <img src={web6} alt="Vision" className="w-80 h-80 rounded-xl shadow-md" />
//                     </motion.div>
//                     <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
//                         <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Ecommerce</h2>
//                         <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
//                             In ecommerce, user experience and transaction security can make or break your business. We test shopping carts, payment gateways, and product catalogs to maximize conversions and customer trust.
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>

//             <div className="max-w-5xl mx-auto py-16 px-6">
//                 <div className="flex items-center flex-row-reverse gap-16">
//                     <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
//                         <img src={web7} alt="Mission" className="w-80 h-80 rounded-xl shadow-md" />
//                     </motion.div>
//                     <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                         <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Gaming</h2>
//                         <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
//                             From casual mobile games to complex multiplayer titles, our gaming testing ensures smooth gameplay, bug-free environments, and optimized performance that keeps players coming back.
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Cards end */}

//             {/* Why choose digilynk */}
//             <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white gap-16">
//                 <motion.div className="mb-8 flex flex-col md:mb-0" initial="hidden" whileInView="visible" variants={fadeInLeft}>
//                     <h2 className="text-5xl font-semibold text-center text-zinc-800 mb-12">Why Choose Digilynk?</h2>
//                     <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
//                         Domain Expertise: Our team brings years of experience across diverse industries, ensuring we understand your unique challenges and requirements.    <br /> <br />
//                     </motion.p>
//                     <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
//                         Tailored Testing Strategies: We customize our approach for every project, focusing on what matters most to your business and users<br /> <br />
//                     </motion.p>
//                     <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
//                         Cutting-Edge Tools & Methods: We leverage the latest testing tools and frameworks for high accuracy and efficiency.<br /> <br />
//                     </motion.p>
//                     <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed  mb-8" initial="hidden" whileInView="visible" variants={fadeInUp}>
//                         Agile & Efficient: Our processes are designed for speed and flexibility—delivering results on time, every time.
//                     </motion.p>
//                     <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
//                         End-to-End Quality Assurance: From initial analysis to final validation, we cover every facet of software quality to safeguard your brand and user trust
//                     </motion.p>
//                 </motion.div>
//             </div>

//             {/* Testing Approach */}
//             <div className="w-full px-4 md:px-16 py-16 bg-white text-center">
//                 <div className="mb-12">
//                     <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
//                         Our Testing Approach
//                     </h2>
//                     <h3 className="text-3xl md:text-4xl font-bold">
//                         <span className="text-blue-500">Quality </span>
//                         <span className="text-green-500">Transparency </span>
//                         <span className="text-purple-500">& Collaboration</span>
//                     </h3>
//                 </div>
//                 {/* <div className="flex justify-center">
//                     <img
//                         src={web8}
//                         alt="Responsive Website Design"
//                         className="max-w-full h-auto rounded-lg shadow-lg"
//                     />
//                 </div> */}
//             </div>

//             <div className="flex flex-col items-center justify-center">
//                 <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>

//                     <h4 className="text-3xl font-semibold text-zinc-900 mb-6">At Digilynk, we follow industry best practices</h4>
//                     <motion.p
//                         className="text-2xl ms-4 flex flex-col space-y-2 text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                     >
//                         <p><span className='font-semibold'>Customized Test Plans:</span> Tailored to your project’s unique requirements and goals.</p>
//                         <p><span className='font-semibold'>Automated & Manual Testing:</span> Leveraging automation for efficiency and manual testing for nuanced scenarios.</p>
//                         <p><span className='font-semibold'>Continuous Integration Support:</span> Integrating testing into your development pipeline for faster feedback.</p>
//                         <p><span className='font-semibold'>Detailed Reporting:</span> Clear, actionable reports with prioritized defect tracking.</p>
//                         <p><span className='font-semibold'>Dedicated Testing Teams:</span> Experienced testers who become an extension of your team </p><br /> <br />
//                     </motion.p>


//                     <h4 className="text-3xl font-semibold text-zinc-900 mb-6">The Digilynk Advantage</h4>
//                     <motion.p
//                         className="text-2xl ms-4 flex flex-col space-y-2 text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                     >
//                         <p><span className='font-semibold'>Expertise Across Domains:</span> Deep industry knowledge for precise, context-aware testing.</p>
//                         <p><span className='font-semibold'>Cutting-Edge Tools:</span> We utilize the latest testing frameworks and automation tools to maximize accuracy and speed.</p>
//                         <p><span className='font-semibold'>End-to-End Coverage:</span> From functional to non-functional testing, we cover all aspects of software quality.</p>
//                         <p><span className='font-semibold'>Customer-Centric Focus:</span> Your satisfaction and success drive everything we do.</p>
//                         <p><span className='font-semibold'>Proactive Risk Mitigation:</span> Early defect detection saves time, reduces costs, and improves product stability.</p>
//                         <br /><br />
//                     </motion.p>


//                     <h4 className="text-3xl font-semibold text-zinc-900 mb-6">Ready to Elevate Your Software Quality?</h4>
//                     <motion.p
//                         className="text-2xl ms-4 flex flex-col space-y-2 text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
//                         initial="hidden"
//                         whileInView="visible"
//                         variants={fadeInUp}
//                     >
//                         <p>Partner with Digilynk and experience software testing services that don't just find bugs—they deliver confidence. Let us help you launch products that are secure, user-friendly, and market-ready.</p>
//                         <p>Contact us today to discuss your project and discover how our expert testing can transform your software development lifecycle.</p>
//                         <p><span className='font-semibold'>Digilynk</span> – Your Trusted Partner in Software Quality Assurance</p>
//                         <br /><br />
//                     </motion.p>


//                 </motion.div>
//             </div>

//         </div>
//     )
// }
