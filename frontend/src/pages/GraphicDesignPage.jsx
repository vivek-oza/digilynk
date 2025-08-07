import React from "react";
import { motion } from "framer-motion";
import graphic from "../assets/images/graphic.png";
import web2 from "../assets/images/web2.png";
import web3 from "../assets/images/web3.png";
import web4 from "../assets/images/web4.png";
import web5 from "../assets/images/web5.png";
import web6 from "../assets/images/web6.png";
import DynamicCardSection from "../components/digilynk/DynamicCardSection";
import {
  Palette,
  Shirt,
  Building2,
  ShoppingBag,
  Utensils,
  HeartPulse,
  GraduationCap,
  Gamepad2
} from 'lucide-react';
import {
  PenTool,
  Image,
  Layout,
  Package,
  FileText,
  Monitor,
  Smartphone,
  Printer
} from "lucide-react";

const industriesData = {
  title: "Industries we serve",
  description: "We create compelling visual identities that resonate with your target audience. Partner with us to build a memorable brand presence.",
  buttonText: "Get Custom Design Solutions",
  buttonLink: "/contact",
  cards: [
    {
      title: "Fashion & Apparel",
      description: "Creating trendy and appealing designs that capture the essence of fashion brands.",
      icon: <Shirt className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Real Estate",
      description: "Professional designs that showcase properties and build trust with potential clients.",
      icon: <Building2 className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Retail & E-commerce",
      description: "Eye-catching designs that drive sales and enhance customer shopping experiences.",
      icon: <ShoppingBag className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Food & Beverage",
      description: "Appetizing designs that make your culinary offerings irresistible to customers.",
      icon: <Utensils className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Healthcare",
      description: "Clean, trustworthy designs that communicate care and professionalism in healthcare.",
      icon: <HeartPulse className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Education",
      description: "Engaging educational designs that inspire learning and knowledge sharing.",
      icon: <GraduationCap className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Entertainment",
      description: "Dynamic designs that capture attention and create memorable entertainment experiences.",
      icon: <Gamepad2 className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Beauty & Wellness",
      description: "Elegant designs that reflect beauty, wellness, and self-care values.",
      icon: <Palette className="text-blue-500 w-7 h-7" />,
    },
  ],
};

const designServicesData = {
  title: "Design Services",
  description: "Comprehensive design solutions that bring your brand vision to life. From concept to execution, we create designs that captivate and convert.",
  buttonText: "Contact for Design Solutions",
  buttonLink: "/contact",
  cards: [
    {
      title: "Logo Design",
      description: "Creating memorable logos that perfectly represent your brand identity and values.",
      icon: <PenTool className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Brand Identity",
      description: "Developing cohesive visual identities that tell your brand story across all touchpoints.",
      icon: <Image className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Web Design",
      description: "Designing beautiful, user-friendly interfaces that enhance digital experiences.",
      icon: <Layout className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Packaging Design",
      description: "Creating attractive packaging that stands out on shelves and drives purchase decisions.",
      icon: <Package className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Marketing Materials",
      description: "Designing compelling brochures, flyers, and promotional materials that convert.",
      icon: <FileText className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Digital Graphics",
      description: "Creating engaging social media graphics and digital assets for online presence.",
      icon: <Monitor className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Mobile App Design",
      description: "Designing intuitive mobile interfaces that provide exceptional user experiences.",
      icon: <Smartphone className="text-blue-500 w-7 h-7" />,
    },
    {
      title: "Print Design",
      description: "Professional print designs for business cards, posters, and corporate materials.",
      icon: <Printer className="text-blue-500 w-7 h-7" />,
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

// Why Choose Us items
const whyChooseItems = [
  {
    id: 1,
    title: "Creative Excellence",
    text: "We combine artistic vision with strategic thinking to create designs that not only look stunning but also achieve your business objectives and resonate with your target audience.",
  },
  {
    id: 2,
    title: "Brand-Focused Approach",
    text: "Every design we create is carefully crafted to strengthen your brand identity, ensuring consistency across all touchpoints and building lasting recognition in the market.",
  },
  {
    id: 3,
    title: "Fast Turnaround Times",
    text: "Our efficient design process and experienced team enable us to deliver high-quality designs quickly, helping you meet tight deadlines without compromising on creativity.",
  },
  {
    id: 4,
    title: "User-Centered Design",
    text: "We prioritize user experience in every design, ensuring that your visual communications are not only beautiful but also intuitive and effective for your audience.",
  },
  {
    id: 5,
    title: "Industry Expertise",
    text: "Our team brings deep knowledge across various industries, allowing us to create designs that speak the language of your specific market and audience.",
  },
  {
    id: 6,
    title: "Collaborative Process",
    text: "We work closely with you throughout the design process, incorporating your feedback and vision to ensure the final result exceeds your expectations.",
  },
];

export default function GraphicDesign() {
  return (
    <div className="relative overflow-x-hidden md:p-0">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative bg-black mb-32 z-10 w-full overflow-hidden grid place-items-center grid-cols-1 gap-5 md:flex max-h-[calc(100vh-5rem)]"
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
              Graphic Design
            </motion.h1>

            <motion.div
              className="flex flex-col space-y-1 justify-center"
              variants={container}
            >
              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                Transforming{" "}
                <span className="text-blue-500 font-medium">Ideas</span>
                ,
              </motion.div>
              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                Into{" "}
                <span className="text-green-500 font-medium">Visual Stories</span>
              </motion.div>
              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                That{" "}
                <span className="text-purple-500 font-medium">Inspire Action</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex items-center md:min-h-[calc(100vh-5rem)] md:w-1/2 w-full"
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
              src={graphic}
              className="md:min-h-[calc(100vh-5rem)] min-w-[calc(100vw)] md:min-w-full object-cover"
              alt="Graphic design illustration"
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
            className="min-h-[calc(100vh-20rem)] w-1/2 md:ps-8 md:my-0 flex flex-col md:space-y-8 space-y-3 justify-center"
            variants={container}
          >
            <motion.h1
              className="text-3xl font-semibold text-black"
              variants={fadeInUp}
            >
              Design That Speaks
            </motion.h1>

            <motion.div
              className="flex flex-col space-y-2 justify-center"
              variants={container}
            >
              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                In a world where first impressions matter more than ever, exceptional design isn't just an option — it's essential for success.
              </motion.div>

              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                At Digilynk, we create visual experiences that captivate audiences, communicate your brand message clearly, and drive meaningful engagement. From logos to complete brand identities, we craft designs that tell your unique story.
              </motion.div>

              <motion.div
                className="text-base text-center md:text-start text-zinc-600 tracking-tight font-medium leading-relaxed"
                variants={fadeInUp}
              >
                Our design philosophy combines creativity with strategy, ensuring every visual element serves a purpose and contributes to your business growth and brand recognition.
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
              src={web4}
              className="w-full md:min-h-[calc(100vh-5rem)] object-cover object-top"
              alt="Design services illustration"
            />
          </motion.div>
        </motion.section>

        {/* Industries we serve */}
        <DynamicCardSection {...industriesData} />

        {/* Design services */}
        <DynamicCardSection {...designServicesData} />

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
              Why Digilynk for Design?
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
              src={web6}
              alt="Graphic design services"
              className="w-full max-w-2xl object-contain"
            />
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}