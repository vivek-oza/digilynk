import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import testing1 from "../assets/images/testing/testing1.png";
import testing2 from "../assets/images/testing/testing2.png";
import testing3 from "../assets/images/testing/testing3.png";
import testing4 from "../assets/images/testing/testing4.png";
import testing5 from "../assets/images/testing/testing5.png";
import testingBanner from "../assets/images/testing/testingBanner.png";
import testingBanner2 from "../assets/images/testing/testingBanner2.jpg";
import testingBannerEnd from "../assets/images/testing/testingBannerEnd.png";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import {
  HeartPulse,
  ShoppingCart,
  ShieldCheck,
  FlaskConical,
  BrainCircuit,
  Gamepad2,
  CreditCard,
  Hotel,
  Zap,
  Gauge,
  Code2,
  Eye,
  Cpu,
  Smartphone,
  Database,
  CheckCircle,
  Target,
  Clock,
  Users
} from 'lucide-react';

const industriesData = [
  {
    title: "Healthcare",
    description: "Delivering secure, reliable, and compliant testing for critical healthcare systems.",
    icon: <HeartPulse className="w-6 h-6" />,
    color: "text-red-600"
  },
  {
    title: "Consumer Goods",
    description: "Optimizing digital touchpoints with reliable and user-centric testing.",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "text-green-600"
  },
  {
    title: "Insurance",
    description: "Ensuring flawless policy management and claims processing through robust QA.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "text-blue-600"
  },
  {
    title: "Life Sciences",
    description: "Validating precision-driven systems to support regulated environments.",
    icon: <FlaskConical className="w-6 h-6" />,
    color: "text-purple-600"
  },
  {
    title: "AI & LLMs",
    description: "Testing LLMs and AI tools for accuracy, safety, and optimal performance.",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "text-indigo-600"
  },
  {
    title: "Gaming",
    description: "Ensuring high-performance and crash-free gameplay across devices.",
    icon: <Gamepad2 className="w-6 h-6" />,
    color: "text-orange-600"
  },
  {
    title: "E-commerce",
    description: "Enabling smooth, secure, and bug-free shopping experiences through QA.",
    icon: <CreditCard className="w-6 h-6" />,
    color: "text-cyan-600"
  },
  {
    title: "Hospitality",
    description: "Testing booking and service platforms for seamless guest experiences.",
    icon: <Hotel className="w-6 h-6" />,
    color: "text-pink-600"
  },
];

const testingServicesData = [
  {
    title: "Test Automation",
    description: "Streamlining test execution to improve speed, accuracy, and coverage across platforms.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-blue-600"
  },
  {
    title: "Performance Testing",
    description: "Identifying system bottlenecks to ensure stability and scalability under load.",
    icon: <Gauge className="w-6 h-6" />,
    color: "text-green-600"
  },
  {
    title: "Functional Testing",
    description: "Validating that every feature works as intended for seamless user experiences.",
    icon: <Code2 className="w-6 h-6" />,
    color: "text-purple-600"
  },
  {
    title: "UI/UX Audit",
    description: "Evaluating user interfaces for usability, accessibility, and visual consistency.",
    icon: <Eye className="w-6 h-6" />,
    color: "text-orange-600"
  },
  {
    title: "API Testing",
    description: "Ensuring secure, fast, and reliable integration across systems and services.",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-red-600"
  },
  {
    title: "Mobile Testing",
    description: "Delivering responsive, high-quality mobile experiences across devices and OS versions.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-indigo-600"
  },
  {
    title: "AI/ML Testing",
    description: "Testing AI/ML models for accurate response under real-world conditions.",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "text-pink-600"
  },
  {
    title: "DB Testing",
    description: "Validating database integrity, accuracy, and performance through end-to-end data testing.",
    icon: <Database className="w-6 h-6" />,
    color: "text-cyan-600"
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
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
    },
  },
};

const whyChooseItems = [
  {
    id: 1,
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Rigorous Quality Assurance",
    text: "We go beyond surface-level testing to rigorously examine every aspect of your software. Our meticulous approach identifies even the most subtle defects, ensuring your product meets the highest quality standards before launch.",
    color: "text-green-600"
  },
  {
    id: 2,
    icon: <Target className="w-6 h-6" />,
    title: "Bug-Free, High-Performance Software",
    text: "We prioritize quality at every step, rigorously testing software to ensure it's bug-free, performs smoothly under load, and is protected with the latest security measures. Your peace of mind is our priority.",
    color: "text-blue-600"
  },
  {
    id: 3,
    icon: <Clock className="w-6 h-6" />,
    title: "Accelerate Your Product Launch",
    text: "Our efficient testing processes help identify issues early, reducing development cycles and enabling faster time-to-market without compromising on quality.",
    color: "text-purple-600"
  },
  {
    id: 4,
    icon: <Users className="w-6 h-6" />,
    title: "User Experience Optimization",
    text: "We test not just for functionality but for exceptional user experiences. Our UX testing ensures your software is intuitive, accessible, and enjoyable for all users.",
    color: "text-orange-600"
  },
];

export default function SoftwareTesting() {
  const navigate = useNavigate();

  return (
    <div className="relative md:mt-16 mt-32">
      {/* Hero Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="relative min-h-[calc(100vh-5rem)] py-6 bg-black overflow-hidden flex items-center justify-center"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8 text-center md:text-left" variants={container}>
            <motion.h1
              className="text-4xl md:text-6xl font-semibold text-white mb-6"
              variants={fadeInUp}
            >
              Software Testing
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              Ensuring <span className="font-medium text-blue-600">flawless performance</span>, exceptional <span className="font-medium text-green-600">user experiences</span>, and <span className="font-medium text-purple-600">business success</span>.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              We deliver comprehensive QA solutions that go beyond finding bugs to ensure your software exceeds quality standards.
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate('/contact')}
                className="text-white px-8 py-4 text-lg font-semibold"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Get Custom QA Solutions
              </ShimmerButton>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div className="flex space-x-2 justify-center md:justify-start" variants={fadeInUp}>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex justify-center"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                },
              },
            }}
          >
            <img
              src={testingBanner}
              className="w-full max-w-lg object-contain rounded-2xl"
              alt="Software testing illustration"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Testing Services Section */}
      <motion.section
        className="relative bg-black py-16 md:py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={container}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Testing Services
            </motion.h2>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              Comprehensive QA solutions tailored to validate every aspect of your <span className="font-medium text-green-600">product</span>
            </motion.p>

            {/* Decorative Elements */}
            <motion.div className="flex justify-center mt-8 space-x-2" variants={fadeInUp}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={container}>
            {testingServicesData.map((service, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-800"
                variants={fadeInUp}
              >
                <div className={`${service.color} mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section
        className="relative bg-black py-16 md:py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={container}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              Delivering tailored QA solutions for your industry's unique <span className="font-medium text-blue-600">challenges</span>
            </motion.p>

            {/* Decorative Elements */}
            <motion.div className="flex justify-center mt-8 space-x-2" variants={fadeInUp}>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={container}>
            {industriesData.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-800"
                variants={fadeInUp}
              >
                <div className={`${industry.color} mb-4`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        className="relative bg-black py-16 md:py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={container}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Why Choose Digilynk?
            </motion.h2>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              We don't just find bugs — we craft <span className="font-medium text-green-600">quality experiences</span> that drive results
            </motion.p>

            {/* Decorative Elements */}
            <motion.div className="flex justify-center mt-8 space-x-2" variants={fadeInUp}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8" variants={container}>
            {whyChooseItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-800"
                variants={fadeInUp}
              >
                <div className={`${item.color} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testing Showcase Section */}
      <motion.section
        className="relative bg-black py-16 md:py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={container}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8 text-center md:text-left" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Build With Confidence
            </motion.h2>

            <motion.p
              className="text-lg text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              In today's fast-moving digital era, flawless software isn't optional — it's expected. Your product's success hinges on rigorous, end-to-end testing.
            </motion.p>

            <motion.p
              className="text-lg text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              At Digilynk, we deliver smarter QA solutions that go beyond just finding bugs. We identify risks early, boost performance, refine usability, and ensure seamless cross-platform functionality.
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate('/contact')}
                className="text-white px-8 py-4 text-lg font-semibold"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Get Testing Solutions
              </ShimmerButton>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex justify-center"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                },
              },
            }}
          >
            <img
              src={testingBanner2}
              className="w-full max-w-lg object-contain rounded-2xl"
              alt="Testing services illustration"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        className="relative bg-black py-16 md:py-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={container}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div className="space-y-8" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Ready to Ensure Quality?
            </motion.h2>
            
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              Let's create software that not only works flawlessly but also drives your business <span className="font-medium text-green-600">forward</span>
            </motion.p>

            <motion.div
              className="flex justify-center"
              variants={fadeInUp}
            >
              <img
                src={testingBannerEnd}
                alt="Software testing services"
                className="w-full max-w-2xl object-contain rounded-2xl"
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div className="flex justify-center mt-8 space-x-2" variants={fadeInUp}>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}