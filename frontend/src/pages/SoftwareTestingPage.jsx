import React from "react";
import { motion } from "framer-motion";
import testing1 from "../assets/images/testing/testing1.png";
import testing2 from "../assets/images/testing/testing2.png";
import testing3 from "../assets/images/testing/testing3.png";
import testing4 from "../assets/images/testing/testing4.png";
import testing5 from "../assets/images/testing/testing5.png";
import testingBanner from "../assets/images/testing/testingBanner.png";
import testingBanner2 from "../assets/images/testing/testingBanner2.jpg";
import testingBannerEnd from "../assets/images/testing/testingBannerEnd.png";
// import testing7 from '../assets/images/testing/testing7.png';
// import testing8 from '../assets/images/testing/testing8.png';
import ServicesCardStack from "@/components/digilynk/ServicesCardStack";
import {
  HeartPulse,
  ShoppingCart,
  ShieldCheck,
  FlaskConical,
  BrainCircuit,
  Gamepad2,
  CreditCard,
  Hotel
} from 'lucide-react';
import {
  Zap,
  Gauge,
  Code2,
  Eye,
  Cpu,
  Smartphone,
  // BrainCircuit,
  Database
} from "lucide-react";
import DynamicCardSection from "../components/digilynk/DynamicCardSection";

const data = {
  title: "Industries we serve",
  // description:"We deliver tailored QA solutions for your industry's unique challenges. Let's discuss how we can elevate your digital quality.",
  description: "We deliver tailored QA solutions for your industry's unique challenges. Partner with us to launch flawless digital experiences.",
  buttonText: "Get Custom QA Solutions",
  buttonLink: "/contact",
  cards: [
    {
      title: "Healthcare",
      description:
        "Delivering secure, reliable, and compliant testing for critical healthcare systems.",
      icon: <HeartPulse className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Consumer Goods",
      description:
        "Optimizing digital touchpoints with reliable and user-centric testing.",
      icon: <ShoppingCart className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Insurance",
      description:
        "Ensuring flawless policy management and claims processing through robust QA.",
      icon: <ShieldCheck className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Life Sciences",
      description:
        "Validating precision-driven systems to support regulated environments.",
      icon: <FlaskConical className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "AI & LLMs",
      description:
        "Testing LLMs and AI tools for accuracy, safety, and optimal performance.",
      icon: <BrainCircuit className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Gaming",
      description:
        "Ensuring high-performance and crash-free gameplay across devices.",
      icon: <Gamepad2 className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "E-commerce",
      description:
        "Enabling smooth, secure, and bug-free shopping experiences through QA.",
      icon: <CreditCard className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Hospitality",
      description:
        "Testing booking and service platforms for seamless guest experiences.",
      icon: <Hotel className="text-blue-500 w-7 h-7" />,
    },
  ],
};

const testingServicesData = {
  title: "Testing Services",
  description: "Comprehensive QA solutions tailored to validate every aspect of your product. Ensure reliability, performance, and security across all platforms.",
  buttonText: "Contact for Testing Solutions",
  buttonLink: "/testing-services",
  cards: [
    {
      title: "Test Automation",
      description: "Streamlining test execution to improve speed, accuracy, and coverage across platforms.",
      icon: <Zap className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Performance Testing",
      description: "Identifying system bottlenecks to ensure stability and scalability under load.",
      icon: <Gauge className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Functional Testing",
      description: "Validating that every feature works as intended for seamless user experiences.",
      icon: <Code2 className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "UI/UX Audit",
      description: "Evaluating user interfaces for usability, accessibility, and visual consistency.",
      icon: <Eye className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "API Testing",
      description: "Ensuring secure, fast, and reliable integration across systems and services.",
      icon: <Cpu className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Mobile Testing",
      description: "Delivering responsive, high-quality mobile experiences across devices and OS versions.",
      icon: <Smartphone className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "AI/ML Testing",
      description: "Testing AI/ML models for accurate response under real-world conditions.",
      icon: <BrainCircuit className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "DB Testing",
      description: "Validating database integrity, accuracy, and performance through end-to-end data testing.",
      icon: <Database className="text-blue-500 w-7 h-7" />,
    },
  ],
};


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
      bounce: 0.4,
    },
  },
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
      bounce: 0.4,
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      bounce: 0.4,
    },
  },
};

// Card data array
const featureCards = [
  {
    title: "Comprehensive Test Coverage",
    description:
      "We implement thorough testing strategies that cover all aspects of your software, from functional requirements to performance benchmarks and security vulnerabilities, ensuring complete quality assurance.",
    image: testing5,
    reverse: false,
  },
  {
    title: "Domain-Specific Expertise",
    description:
      "Our team brings specialized knowledge in healthcare, insurance, ecommerce, and gaming domains, allowing us to test your software with industry-specific requirements in mind.",
    image: testing2,
    reverse: true,
  },
  {
    title: "Automation Integration",
    description:
      "We strategically implement test automation where it delivers the most value, combining it with manual testing for comprehensive coverage and efficient regression testing.",
    image: testing3,
    reverse: false,
  },
  {
    title: "Continuous Testing Support",
    description:
      "Our relationship extends beyond initial testing. We provide ongoing support, maintenance testing, and CI/CD integration to keep your software reliable as it evolves.",
    image: testing4,
    reverse: true,
  },
];

// Why Choose Us items
const whyChooseItems = [
  {
    id: 1,
    title: "Rigorous Quality Assurance",
    text: "We go beyond surface-level testing to rigorously examine every aspect of your software. Our meticulous approach identifies even the most subtle defects, ensuring your product meets the highest quality standards before launch.",
  },
  {
    id: 2,
    title: "Bug-Free, High-Performance Software",
    text: "We prioritize quality at every step, rigorously testing software to ensure it's bug-free, performs smoothly under load, and is protected with the latest security measures. Your peace of mind is our priority.",
  },
  {
    id: 3,
    title: "Accelerate Your Product Launch",
    text: "Our efficient testing processes help identify issues early, reducing development cycles and enabling faster time-to-market without compromising on quality.",
  },
  {
    id: 4,
    title: "User Experience Optimization",
    text: "We test not just for functionality but for exceptional user experiences. Our UX testing ensures your software is intuitive, accessible, and enjoyable for all users.",
  },
  {
    id: 5,
    title: "Research-Driven Testing Processes",
    text: "We follow well-researched Standard Operating Procedures (SOPs) and industry best practices, making our testing process efficient and comprehensive. This allows us to deliver thorough results on time, every time.",
  },
  {
    id: 6,
    title: "On-Time Delivery",
    text: "We understand the importance of deadlines in product development. Our streamlined testing workflow ensures there are no delays, delivering comprehensive test reports when you need them.",
  },
];

// Reusable FeatureCard component
const FeatureCard = ({ title, description, image, reverse }) => (
  <div
    className={`max-w-5xl mx-auto py-16 px-6 flex items-center ${reverse ? "flex-row-reverse" : ""
      } gap-16`}
  >
    <motion.div
      className="w-1/2"
      initial="hidden"
      whileInView="visible"
      variants={reverse ? fadeInRight : fadeInLeft}
    >
      <img
        src={image}
        alt={title}
        className="w-full max-w-md rounded-xl shadow-md"
      />
    </motion.div>
    <motion.div
      className="w-1/2"
      initial="hidden"
      whileInView="visible"
      variants={reverse ? fadeInLeft : fadeInRight}
    >
      <h2 className="text-3xl font-semibold text-zinc-800 mb-6">{title}</h2>
      <p className="text-xl text-zinc-600 tracking-tight font-medium leading-relaxed">
        {description}
      </p>
    </motion.div>
  </div>
);

export default function SoftwareTesting() {
  return (
    <div className="relative  overflow-x-hidden md:p-0">

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative  bg-black mb-32 z-10 w-full overflow-hidden grid place-items-center grid-cols-1 gap-5 md:flex max-h-[calc(100vh-5rem)]"
        >

          {/* Left Column - Text Content */}
          <motion.div
            className="md:min-h-[calc(100vh-20rem)] min-h-[calc(100vh-35rem)] md:w-1/2 md:ps-8 w-full md:my-0 flex flex-col md:space-y-8 space-y-3 justify-center"
            variants={container}
          >
            <motion.h1
              className="text-3xl font-semibold text-center md:text-start text-white"
              variants={fadeInUp}
            >
              Software Testing
            </motion.h1>

            <motion.div
              className="flex flex-col space-y-1 justify-center"
              variants={container}
            >
              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                Ensuring{" "}
                <span className="text-blue-500 font-medium">
                  Flawless Performance
                </span>
                ,
              </motion.div>
              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                Exceptional{" "}
                <span className="text-green-500 font-medium">
                  User Experiences
                </span>
              </motion.div>
              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                and{" "}
                <span className="text-purple-500 font-medium">
                  Business Success
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex items-center md:min-h-[calc(100vh-5rem)]  md:w-1/2 w-full"
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
                },
              },
            }}
          >
            <img
              src={testingBanner}
              className=" md:min-h-[calc(100vh-5rem)] min-w-[calc(100vw)] md:min-w-full object-cover"
              alt="Software testing illustration"
            />
          </motion.div>

        </motion.section>




        {/* Intro Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative w-full overflow-hidden grid place-items-center grid-cols-1 gap-5 md:flex max-h-[calc(100vh-5rem)]"
        >
          {/* Left Column - Text Content */}
          <motion.div
            className="min-h-[calc(100vh-20rem)]  w-1/2 md:ps-8 md:my-0 flex flex-col md:space-y-8 space-y-3 justify-center"
            variants={container}
          >
            <motion.h1
              className="text-3xl font-semibold  text-black"
              variants={fadeInUp}
            >
              Build With Confidence
            </motion.h1>

            <motion.div
              className="flex flex-col space-y-2 justify-center"
              variants={container}
            >

              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                In today’s fast-moving digital era, flawless software isn’t optional — it’s expected. Your product’s success hinges on rigorous, end-to-end testing.
              </motion.div>

              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                At Digilynk, we deliver smarter QA solutions that go beyond just finding bugs. We identify risks early, boost performance, refine usability, and ensure seamless cross-platform functionality. All tailored to your industry and users.

              </motion.div>

              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                Backed by technical precision and business insight, our testing not only safeguards quality but also amplifies user satisfaction and accelerates your go-to-market success.
              </motion.div>

            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex items-center md:min-h-[calc(100vh-5rem)] w-1/2"
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
                },
              },
            }}
          >
            <img
              src={testingBanner2}
              className="w-full md:min-h-[calc(100vh-5rem)] object-cover object-top"
              alt="Software testing illustration"
            />
          </motion.div>

        </motion.section>


        {/* Industries we serve */}
        <DynamicCardSection {...data} />

        {/* Testing services */}
        <DynamicCardSection {...testingServicesData} />


        {/* Why Choose Us Section */}
        <motion.section
          className="w-full bg-white py-16 px-4 md:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={container}
        >
          <motion.div
            className="flex flex-col items-center justify-center text-start"
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl font-semibold text-zinc-800 mb-6"
              variants={fadeInUp}
            >
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
                  transition: { type: "spring", stiffness: 300, damping: 10 },
                }}
              >
                <h4 className="text-xl font-semibold text-zinc-500 mb-4">
                  {item.title}
                </h4>
                <p className="text-base text-zinc-600 tracking-tight font-medium leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center mt-16"
            variants={fadeInUp}
          >
            <img
              src={testingBannerEnd}
              alt="Software testing services"
              className="w-full max-w-2xl object-contain"
            />
          </motion.div>
        </motion.section>

        {/* Feature Cards Section
        {featureCards.map((card, index) => (
          <FeatureCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            reverse={card.reverse}
          />
        ))} */}











        {/* Approach Section */}
        {/* <motion.section
          className="w-full px-4 md:px-16 py-16 bg-black text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={container}
        >
          <motion.div className=" mt-60 h-60" variants={fadeInUp}>
            <motion.h2
              className="text-3xl md:text-5xl font-semibold text-white mb-4"
              variants={fadeInUp}
            >
              Our Testing Methodology
            </motion.h2>
            <motion.h3
              className="text-3xl md:text-xl font-semibold"
              variants={fadeInUp}
            >
              <span className="text-blue-500">Comprehensive </span>
              <span className="text-green-500">Strategic </span>
              <span className="text-purple-500">& Results-Driven</span>
            </motion.h3>
          </motion.div>
        </motion.section> */}

      </div>
    </div>
  );
}