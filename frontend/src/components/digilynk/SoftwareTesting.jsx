import React from 'react'
import { motion } from 'framer-motion';
import testingBanner from '../../assets/images/testing/testingBanner.png';
import web2 from '../../assets/images/web2.png';
import web3 from '../../assets/images/web3.png';
import web4 from '../../assets/images/web4.png';
import web5 from '../../assets/images/web5.png';
import web6 from '../../assets/images/web6.png';
import web7 from '../../assets/images/web7.png';
import web8 from '../../assets/images/testing/testingBannerEnd.png';

export default function SoftwareTesting() {
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
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <h1 className="text-4xl md:text-5xl font-semibold text-center text-zinc-800 mb-4">
                    Testing by Digilynk
                </h1>
                <p className="text-2xl text-center text-gray-600 mb-1">
                    Ensuring {" "}
                    <span className="text-blue-500 font-medium">Flawless Software</span>
                    <br />
                    Exceptional <span className="text-green-500 font-medium">User Experiences</span>
                </p>
                <p className="text-2xl text-center text-gray-600 mb-10">
                    and{" "}
                    <span className="text-purple-500 font-medium">Business Success</span>
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white gap-16">
                <motion.div className="md:w-1/2 mb-8 md:mb-0" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                    <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4" initial="hidden" whileInView="visible" variants={fadeInUp}>
                        We believe that in today’s digital world, software quality is non-negotiable. Whether you’re launching a mission-critical healthcare app, an engaging mobile game, or a sophisticated AI chatbot, the success of your product depends on rigorous, end-to-end testing.
                        <br />
                    </motion.p>
                    <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
                        Our expert software testing services are designed to identify defects early, improve usability, optimize performance, and ensure your software works seamlessly across platforms and domains.
                        <br />
                    </motion.p>
                </motion.div>
                <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                    <img
                        src={testingBanner}
                        alt="Services"
                        className="w-90 h-90 object-contain rounded-xl shadow-md"
                    />
                </motion.div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center py-6 md:py-16  bg-white gap-16">
                <motion.div className="md:w-2/3 " initial="hidden" whileInView="visible" variants={fadeInLeft}>
                    <h2 className="text-5xl mb-10 font-semibold text-center text-zinc-800">Why Testing is important?</h2>
                    <motion.p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
                        Software testing is not just a step in the development cycle it is the foundation of trust between you and your users. It protects your brand reputation, reduces costly post-release fixes, and ensures compliance with industry standards. At Digilynk, we go beyond traditional testing; we deliver insights that help you innovate confidently.
                        <br /> <br />
                    </motion.p>
                    <motion.p className="text-xl text-zinc-600 tracking-tight mt-0 font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
                        Testing helps identify and fix defects early in the development process, leading to improved software quality, increased user satisfaction, and reduced costs. By proactively identifying issues, testing minimizes the impact of bugs and enhances the overall reliability and performance of the software.
                    </motion.p>
                </motion.div>
            </div>

            <div className="min-h-screen bg-white flex items-center justify-center px-4">
                <div className="max-w-4xl w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
                        Testing Services
                    </h2>

                    <div className="bg-gray-900 text-white rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-4 flex flex-col">
                            <h1 className='text-2xl'>Testing services</h1>
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
                            <h1 className='text-2xl'>Types of Testing</h1>
                            <div className='text-zinc-300 space-y-4'>
                                <p>Functional Testing</p>
                                <p>Web Applications</p>
                                <p>Healthcare Insurance</p>
                                <p>Ecommerce</p>
                                <p>Gaming</p>
                            </div>
                        </div>

                        <div className="space-y-4 flex flex-col">
                            <h1 className='text-2xl'>Testing Domains</h1>
                            <div className='text-zinc-300 space-y-4'>
                                <p>Web Applications</p>
                                <p>Mobile Applications</p>
                                <p>Mobile Games</p>
                                <p>AI Chatbots</p>
                                <p>AI Chatbot Testing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white py-16 px-4 md:px-16">
                <div className="flex flex-col items-center justify-center text-start">
                    <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        {/* <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Why Digilynk?</h2> */}
                        <h4 className="text-2xl font-semibold text-zinc-500 mb-6">Functional Testing</h4>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                        >
                            We ensure your applications work exactly as intended, validating every feature against your business requirements. Our functional testing process is meticulously crafted—starting from requirement analysis, through test planning and execution, to thorough defect logging and regression testing. This guarantees your software performs seamlessly in real-world scenarios, delivering a reliable and consistent user experience.
                            <br /> <br />
                        </motion.p>
                    </motion.div>
                </div>
                <div className="flex flex-col items-center justify-center text-start">
                    <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <h4 className="text-2xl font-semibold text-zinc-500 mb-6">Usability Testing</h4>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                        >
                            We ensure your applications work exactly as intended, validating every feature against your business requirements. Our functional testing process is meticulously crafted—starting from requirement analysis, through test planning and execution, to thorough defect logging and regression testing. This guarantees your software performs seamlessly in real-world scenarios, delivering a reliable and consistent user experience.
                            <br /> <br />
                        </motion.p>
                    </motion.div>
                </div>
                <div className="flex flex-col items-center justify-center text-start">
                    <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <h4 className="text-2xl font-semibold text-zinc-500 mb-6">UI/UX Testing</h4>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                        >
                            We deliver pixel-perfect digital experiences by rigorously testing your user interfaces for consistency, clarity, and ease of navigation. Our UI/UX testing covers everything from information architecture and visual hierarchy to navigational flow and graphical elements, ensuring your users enjoy a seamless journey across all devices.
                            <br /> <br />
                        </motion.p>
                    </motion.div>
                </div>
                <div className="flex flex-col items-center justify-center text-start">
                    <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <h4 className="text-2xl font-semibold text-zinc-500 mb-6">Gameplay Testing</h4>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                        >
                            For gaming products, our advanced gameplay testing services validate every aspect—from core mechanics and balance to multiplayer functionality and cross-platform compatibility. We identify and resolve issues that impact player experience, optimize performance, and ensure your games are engaging, stable, and ready for market success.
                            <br /> <br />
                        </motion.p>
                    </motion.div>
                </div>
                <div className="flex flex-col items-center justify-center text-start">
                    <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <h4 className="text-2xl font-semibold text-zinc-500 mb-6">AI Chatbot Testing</h4>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                        >
                            We combine manual and automated testing to evaluate your AI chatbots for accuracy, responsiveness, and security. Our process covers functional, usability, and performance testing, ensuring your chatbots deliver meaningful, error-free interactions and support your business objectives.
                            <br /> <br />
                        </motion.p>
                    </motion.div>
                </div>
                <div className="flex flex-col items-center justify-center text-start">
                    <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <h4 className="text-2xl font-semibold text-zinc-500 mb-6">CRM Testing</h4>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                        >
                            Your CRM is the backbone of customer relationships. We provide end-to-end CRM testing covering data integrity, functionality, integration, reporting, and user acceptance. Our experts help you avoid costly CRM failures, ensuring your system is flawless, reliable, and ready to drive customer loyalty.
                            <br /> <br />
                        </motion.p>
                    </motion.div>
                </div>

                <div className="flex flex-col items-center justify-center text-start">
                    <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <h4 className="text-2xl font-semibold text-zinc-500 mb-6">Cross-Browser & Compatibility Testing</h4>
                        <motion.p
                            className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                        >
                            We test your applications across browsers, devices, and operating systems to guarantee consistent performance and appearance. Our compatibility testing ensures your users enjoy a flawless experience, no matter how they access your product.
                            <br /> <br />
                        </motion.p>
                    </motion.div>
                </div>


                <div className="flex flex-col items-center justify-center text-start">
                    <img
                        src={web3}
                        alt="Services"
                        className="size-[600px] object-contain"
                    />
                </div>
            </div>

            {/* bottom cards */}
            <div className="max-w-5xl mx-auto py-16 px-6">
                <div className="flex items-center gap-16">
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <img src={web4} alt="Vision" className="w-80 h-80 rounded-xl shadow-md" />
                    </motion.div>
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                        <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Healthcare</h2>
                        <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                            We understand the critical nature of healthcare software — compliance, data security, and accuracy are paramount. Our testing ensures your applications meet regulatory standards like HIPAA and deliver safe, reliable patient experiences.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-6">
                <div className="flex items-center flex-row-reverse gap-16">
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                        <img src={web5} alt="Mission" className="w-80 h-80 rounded-xl shadow-md" />
                    </motion.div>
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Insurance</h2>
                        <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                            Insurance software demands precision and reliability. We test policy management systems, claims processing, and customer portals to ensure flawless operation and regulatory compliance.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-6">
                <div className="flex items-center gap-16">
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <img src={web6} alt="Vision" className="w-80 h-80 rounded-xl shadow-md" />
                    </motion.div>
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                        <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Ecommerce</h2>
                        <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                            In ecommerce, user experience and transaction security can make or break your business. We test shopping carts, payment gateways, and product catalogs to maximize conversions and customer trust.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto py-16 px-6">
                <div className="flex items-center flex-row-reverse gap-16">
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInRight}>
                        <img src={web7} alt="Mission" className="w-80 h-80 rounded-xl shadow-md" />
                    </motion.div>
                    <motion.div className="w-1/2" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                        <h2 className="text-5xl font-semibold text-zinc-800 mb-6">Gaming</h2>
                        <p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed">
                            From casual mobile games to complex multiplayer titles, our gaming testing ensures smooth gameplay, bug-free environments, and optimized performance that keeps players coming back.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Cards end */}

            {/* Why choose digilynk */}
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white gap-16">
                <motion.div className="mb-8 flex flex-col md:mb-0" initial="hidden" whileInView="visible" variants={fadeInLeft}>
                    <h2 className="text-5xl font-semibold text-center text-zinc-800 mb-12">Why Choose Digilynk?</h2>
                    <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
                        Domain Expertise: Our team brings years of experience across diverse industries, ensuring we understand your unique challenges and requirements.    <br /> <br />
                    </motion.p>
                    <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
                        Tailored Testing Strategies: We customize our approach for every project, focusing on what matters most to your business and users<br /> <br />
                    </motion.p>
                    <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
                        Cutting-Edge Tools & Methods: We leverage the latest testing tools and frameworks for high accuracy and efficiency.<br /> <br />
                    </motion.p>
                    <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed  mb-8" initial="hidden" whileInView="visible" variants={fadeInUp}>
                        Agile & Efficient: Our processes are designed for speed and flexibility—delivering results on time, every time.
                    </motion.p>
                    <motion.p className="text-2xl text-zinc-600 tracking-tight font-medium leading-relaxed" initial="hidden" whileInView="visible" variants={fadeInUp}>
                        End-to-End Quality Assurance: From initial analysis to final validation, we cover every facet of software quality to safeguard your brand and user trust
                    </motion.p>
                </motion.div>
            </div>

            {/* Testing Approach */}
            <div className="w-full px-4 md:px-16 py-16 bg-white text-center">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">
                        Our Testing Approach
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold">
                        <span className="text-blue-500">Quality </span>
                        <span className="text-green-500">Transparency </span>
                        <span className="text-purple-500">& Collaboration</span>
                    </h3>
                </div>
                {/* <div className="flex justify-center">
                    <img
                        src={web8}
                        alt="Responsive Website Design"
                        className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                </div> */}
            </div>

            <div className="flex flex-col items-center justify-center">
                <motion.div className="w-full" initial="hidden" whileInView="visible" variants={fadeInLeft}>

                    <h4 className="text-3xl font-semibold text-zinc-900 mb-6">At Digilynk, we follow industry best practices</h4>
                    <motion.p
                        className="text-2xl ms-4 flex flex-col space-y-2 text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                    >
                        <p><span className='font-semibold'>Customized Test Plans:</span> Tailored to your project’s unique requirements and goals.</p>
                        <p><span className='font-semibold'>Automated & Manual Testing:</span> Leveraging automation for efficiency and manual testing for nuanced scenarios.</p>
                        <p><span className='font-semibold'>Continuous Integration Support:</span> Integrating testing into your development pipeline for faster feedback.</p>
                        <p><span className='font-semibold'>Detailed Reporting:</span> Clear, actionable reports with prioritized defect tracking.</p>
                        <p><span className='font-semibold'>Dedicated Testing Teams:</span> Experienced testers who become an extension of your team </p><br /> <br />
                    </motion.p>


                    <h4 className="text-3xl font-semibold text-zinc-900 mb-6">The Digilynk Advantage</h4>
                    <motion.p
                        className="text-2xl ms-4 flex flex-col space-y-2 text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                    >
                        <p><span className='font-semibold'>Expertise Across Domains:</span> Deep industry knowledge for precise, context-aware testing.</p>
                        <p><span className='font-semibold'>Cutting-Edge Tools:</span> We utilize the latest testing frameworks and automation tools to maximize accuracy and speed.</p>
                        <p><span className='font-semibold'>End-to-End Coverage:</span> From functional to non-functional testing, we cover all aspects of software quality.</p>
                        <p><span className='font-semibold'>Customer-Centric Focus:</span> Your satisfaction and success drive everything we do.</p>
                        <p><span className='font-semibold'>Proactive Risk Mitigation:</span> Early defect detection saves time, reduces costs, and improves product stability.</p>
                        <br /><br />
                    </motion.p>


                    <h4 className="text-3xl font-semibold text-zinc-900 mb-6">Ready to Elevate Your Software Quality?</h4>
                    <motion.p
                        className="text-2xl ms-4 flex flex-col space-y-2 text-zinc-600 tracking-tight font-medium leading-relaxed mb-4 max-w-5xl mx-auto"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeInUp}
                    >
                        <p>Partner with Digilynk and experience software testing services that don't just find bugs—they deliver confidence. Let us help you launch products that are secure, user-friendly, and market-ready.</p>
                        <p>Contact us today to discuss your project and discover how our expert testing can transform your software development lifecycle.</p>
                        <p><span className='font-semibold'>Digilynk</span> – Your Trusted Partner in Software Quality Assurance</p>
                        <br /><br />
                    </motion.p>


                </motion.div>
            </div>

        </div>
    )
}
