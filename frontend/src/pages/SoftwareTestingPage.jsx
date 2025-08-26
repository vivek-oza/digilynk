import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import SEO from "../components/SEO";
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
  Users,
} from "lucide-react";

const industriesData = [
  {
    title: "Healthcare",
    description:
      "Delivering secure, reliable, and compliant testing for critical healthcare systems.",
    icon: <HeartPulse className="w-6 h-6" />,
    color: "text-red-600",
  },
  {
    title: "Consumer Goods",
    description:
      "Optimizing digital touchpoints with reliable and user-centric testing.",
    icon: <ShoppingCart className="w-6 h-6" />,
    color: "text-green-600",
  },
  {
    title: "Insurance",
    description:
      "Ensuring flawless policy management and claims processing through robust QA.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "text-blue-600",
  },
  {
    title: "Life Sciences",
    description:
      "Validating precision-driven systems to support regulated environments.",
    icon: <FlaskConical className="w-6 h-6" />,
    color: "text-purple-600",
  },
  {
    title: "AI & LLMs",
    description:
      "Testing LLMs and AI tools for accuracy, safety, and optimal performance.",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "text-indigo-600",
  },
  {
    title: "Gaming",
    description:
      "Ensuring high-performance and crash-free gameplay across devices.",
    icon: <Gamepad2 className="w-6 h-6" />,
    color: "text-orange-600",
  },
  {
    title: "E-commerce",
    description:
      "Enabling smooth, secure, and bug-free shopping experiences through QA.",
    icon: <CreditCard className="w-6 h-6" />,
    color: "text-cyan-600",
  },
  {
    title: "Hospitality",
    description:
      "Testing booking and service platforms for seamless guest experiences.",
    icon: <Hotel className="w-6 h-6" />,
    color: "text-pink-600",
  },
];

const testingServicesData = [
  {
    title: "Test Automation",
    description:
      "Streamlining test execution to improve speed, accuracy, and coverage across platforms.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-blue-600",
  },
  {
    title: "Performance Testing",
    description:
      "Identifying system bottlenecks to ensure stability and scalability under load.",
    icon: <Gauge className="w-6 h-6" />,
    color: "text-green-600",
  },
  {
    title: "Functional Testing",
    description:
      "Validating that every feature works as intended for seamless user experiences.",
    icon: <Code2 className="w-6 h-6" />,
    color: "text-purple-600",
  },
  {
    title: "UI/UX Audit",
    description:
      "Evaluating user interfaces for usability, accessibility, and visual consistency.",
    icon: <Eye className="w-6 h-6" />,
    color: "text-orange-600",
  },
  {
    title: "API Testing",
    description:
      "Ensuring secure, fast, and reliable integration across systems and services.",
    icon: <Cpu className="w-6 h-6" />,
    color: "text-red-600",
  },
  {
    title: "Mobile Testing",
    description:
      "Delivering responsive, high-quality mobile experiences across devices and OS versions.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-indigo-600",
  },
  {
    title: "AI/ML Testing",
    description:
      "Testing AI/ML models for accurate response under real-world conditions.",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "text-pink-600",
  },
  {
    title: "DB Testing",
    description:
      "Validating database integrity, accuracy, and performance through end-to-end data testing.",
    icon: <Database className="w-6 h-6" />,
    color: "text-cyan-600",
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
    color: "text-green-600",
  },
  {
    id: 2,
    icon: <Target className="w-6 h-6" />,
    title: "Bug-Free, High-Performance Software",
    text: "We prioritize quality at every step, rigorously testing software to ensure it's bug-free, performs smoothly under load, and is protected with the latest security measures. Your peace of mind is our priority.",
    color: "text-blue-600",
  },
  {
    id: 3,
    icon: <Clock className="w-6 h-6" />,
    title: "Accelerate Your Product Launch",
    text: "Our efficient testing processes help identify issues early, reducing development cycles and enabling faster time-to-market without compromising on quality.",
    color: "text-purple-600",
  },
  {
    id: 4,
    icon: <Users className="w-6 h-6" />,
    title: "User Experience Optimization",
    text: "We test not just for functionality but for exceptional user experiences. Our UX testing ensures your software is intuitive, accessible, and enjoyable for all users.",
    color: "text-orange-600",
  },
];

export default function SoftwareTesting() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Software Testing Services | Digilynk"
        description="End-to-end QA: automation, performance, functional, API, mobile, and UX testing to ensure reliability and speed."
        path="/services/software-testing"
        image="/vite.svg"
      />
    <div className="relative md:mt-16 mt-32 font-roboto">
      {/* Hero Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="relative min-h-[calc(100vh-5rem)] py-20 bg-black overflow-hidden flex items-center justify-center"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.div className="space-y-12" variants={container}>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-8 font-roboto"
              variants={fadeInUp}
            >
              Software Testing
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
              variants={fadeInUp}
            >
              Ensuring{" "}
              <span className="font-medium text-white">
                flawless performance
              </span>
              , exceptional{" "}
              <span className="font-medium text-white">user experiences</span>,
              and{" "}
              <span className="font-medium text-white">business success</span>.
            </motion.p>

            <motion.p
              className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
              variants={fadeInUp}
            >
              We deliver comprehensive QA solutions that go beyond finding bugs
              to ensure your software exceeds quality standards.
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
                <ShimmerButton
                  onClick={() => navigate("/contact")}
                  className="text-white px-10 py-5 text-xl font-semibold font-roboto"
                  shimmerColor="#ffffff"
                  shimmerSize="0.15em"
                  background="rgba(0, 0, 0, 1)"
                >
                  Get Custom QA Solutions
                </ShimmerButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Testing Services Section */}
        <motion.section
          className="relative bg-black py-24 md:py-32 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={container}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div className="text-center mb-20" variants={container}>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
                variants={fadeInUp}
              >
                Testing Services
              </motion.h2>
              <motion.p
                className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
                variants={fadeInUp}
              >
                Comprehensive QA solutions tailored to validate every aspect of
                your <span className="font-medium text-white">product</span>
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
              variants={container}
            >
              {testingServicesData.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-zinc-900/50 rounded-3xl p-10 shadow-lg border-2 border-zinc-800/50 hover:border-pink-400/60 hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105 overflow-hidden"
                  variants={fadeInUp}
                >
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`${service.color} mb-6`}>{service.icon}</div>
                    <h3 className="text-2xl font-semibold text-white mb-4 font-roboto">
                      {service.title}
                    </h3>
                    <p className="text-zinc-300 leading-relaxed text-lg font-roboto">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        
        {/* Industries Section */}
        <motion.section
          className="relative bg-black py-24 md:py-32 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={container}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div className="text-center mb-20" variants={container}>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
                variants={fadeInUp}
              >
                Industries We Serve
              </motion.h2>
              <motion.p
                className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
                variants={fadeInUp}
              >
                Delivering tailored QA solutions for your industry's unique{" "}
                <span className="font-medium text-white">challenges</span>
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
              variants={container}
            >
              {industriesData.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900/50 rounded-3xl p-10 shadow-lg border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 hover:scale-105"
                  variants={fadeInUp}
                >
                  <div className={`${industry.color} mb-6`}>{industry.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4 font-roboto">
                    {industry.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-lg font-roboto">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="relative bg-black py-24 md:py-32 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={container}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div className="text-center mb-20" variants={container}>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
                variants={fadeInUp}
              >
                Why Choose Digilynk?
              </motion.h2>
              <motion.p
                className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
                variants={fadeInUp}
              >
                We don't just find bugs — we craft{" "}
                <span className="font-medium text-white">
                  quality experiences
                </span>{" "}
                that drive results
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-12"
              variants={container}
            >
              {whyChooseItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="bg-zinc-900/50 rounded-3xl p-12 shadow-lg border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 hover:scale-105"
                  variants={fadeInUp}
                >
                  <div className={`${item.color} mb-6`}>{item.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-6 font-roboto">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed text-lg font-roboto">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Testing Showcase Section */}
        <motion.section
          className="relative bg-black py-24 md:py-32 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={container}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <motion.div className="space-y-12" variants={container}>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
                variants={fadeInUp}
              >
                Build With Confidence
              </motion.h2>

              <motion.p
                className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
                variants={fadeInUp}
              >
                In today's fast-moving digital era, flawless software isn't
                optional — it's expected. Your product's success hinges on
                rigorous, end-to-end testing.
              </motion.p>

              <motion.p
                className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
                variants={fadeInUp}
              >
                At Digilynk, we deliver smarter QA solutions that go beyond just
                finding bugs. We identify risks early, boost performance, refine
                usability, and ensure seamless cross-platform functionality.
              </motion.p>

              <motion.div variants={fadeInUp} className="inline-block">
                <ShimmerButton
                  onClick={() => navigate("/contact")}
                  className="text-white px-10 py-5 text-xl font-semibold font-roboto"
                  shimmerColor="#ffffff"
                  shimmerSize="0.15em"
                  background="rgba(0, 0, 0, 1)"
                >
                  Get Testing Solutions
                </ShimmerButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        
      </div>
    </>
  );
}
