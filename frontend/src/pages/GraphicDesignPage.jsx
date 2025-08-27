import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShimmerButton } from "../components/magicui/shimmer-button";
import SEO from "../components/SEO";
import {
  Palette,
  Shirt,
  Building2,
  ShoppingBag,
  Utensils,
  HeartPulse,
  GraduationCap,
  Gamepad2,
  PenTool,
  Image,
  Layout,
  Package,
  FileText,
  Monitor,
  Smartphone,
  Printer,
} from "lucide-react";

const industriesData = [
  {
    title: "Fashion & Apparel",
    description:
      "Creating trendy and appealing designs that capture the essence of fashion brands.",
    icon: <Shirt className="w-6 h-6" />,
    color: "text-pink-600",
  },
  {
    title: "Real Estate",
    description:
      "Professional designs that showcase properties and build trust with potential clients.",
    icon: <Building2 className="w-6 h-6" />,
    color: "text-blue-600",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Eye-catching designs that drive sales and enhance customer shopping experiences.",
    icon: <ShoppingBag className="w-6 h-6" />,
    color: "text-green-600",
  },
  {
    title: "Food & Beverage",
    description:
      "Appetizing designs that make your culinary offerings irresistible to customers.",
    icon: <Utensils className="w-6 h-6" />,
    color: "text-orange-600",
  },
  {
    title: "Healthcare",
    description:
      "Clean, trustworthy designs that communicate care and professionalism in healthcare.",
    icon: <HeartPulse className="w-6 h-6" />,
    color: "text-red-600",
  },
  {
    title: "Education",
    description:
      "Engaging educational designs that inspire learning and knowledge sharing.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-indigo-600",
  },
  {
    title: "Entertainment",
    description:
      "Dynamic designs that capture attention and create memorable entertainment experiences.",
    icon: <Gamepad2 className="w-6 h-6" />,
    color: "text-purple-600",
  },
  {
    title: "Beauty & Wellness",
    description:
      "Elegant designs that reflect beauty, wellness, and self-care values.",
    icon: <Palette className="w-6 h-6" />,
    color: "text-cyan-600",
  },
];

const designServicesData = [
  {
    title: "Logo Design",
    description:
      "Creating memorable logos that perfectly represent your brand identity and values.",
    icon: <PenTool className="w-6 h-6" />,
    color: "text-blue-600",
  },
  {
    title: "Brand Identity",
    description:
      "Developing cohesive visual identities that tell your brand story across all touchpoints.",
    icon: <Image className="w-6 h-6" />,
    color: "text-purple-600",
  },
  {
    title: "Web Design",
    description:
      "Designing beautiful, user-friendly interfaces that enhance digital experiences.",
    icon: <Layout className="w-6 h-6" />,
    color: "text-green-600",
  },
  {
    title: "Packaging Design",
    description:
      "Creating attractive packaging that stands out on shelves and drives purchase decisions.",
    icon: <Package className="w-6 h-6" />,
    color: "text-orange-600",
  },
  {
    title: "Marketing Materials",
    description:
      "Designing compelling brochures, flyers, and promotional materials that convert.",
    icon: <FileText className="w-6 h-6" />,
    color: "text-red-600",
  },
  {
    title: "Digital Graphics",
    description:
      "Creating engaging social media graphics and digital assets for online presence.",
    icon: <Monitor className="w-6 h-6" />,
    color: "text-indigo-600",
  },
  {
    title: "Mobile App Design",
    description:
      "Designing intuitive mobile interfaces that provide exceptional user experiences.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-pink-600",
  },
  {
    title: "Print Design",
    description:
      "Professional print designs for business cards, posters, and corporate materials.",
    icon: <Printer className="w-6 h-6" />,
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
    icon: <PenTool className="w-6 h-6" />,
    title: "Creative Excellence",
    text: "We combine artistic vision with strategic thinking to create designs that not only look stunning but also achieve your business objectives.",
    color: "text-blue-600",
  },
  {
    id: 2,
    icon: <Image className="w-6 h-6" />,
    title: "Brand-Focused Approach",
    text: "Every design decision is made with your brand's unique personality, values, and market positioning in mind.",
    color: "text-purple-600",
  },
  {
    id: 3,
    icon: <Layout className="w-6 h-6" />,
    title: "User-Centric Design",
    text: "We prioritize user experience and engagement, ensuring your designs not only look great but also drive results.",
    color: "text-green-600",
  },
  {
    id: 4,
    icon: <Package className="w-6 h-6" />,
    title: "Strategic Impact",
    text: "Our designs are crafted to achieve specific business goals, from increasing brand recognition to driving conversions.",
    color: "text-orange-600",
  },
];

export default function GraphicDesign() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Graphic Design Services | Digilynk"
        description="Logos, brand identity, web and app UI, packaging, print and digital graphics designed to drive results."
        path="/services/design"
        image="/digilynk_about.png"
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
              Graphic Design
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
              variants={fadeInUp}
            >
              Transforming <span className="font-medium text-white">ideas</span>{" "}
              into{" "}
              <span className="font-medium text-white">visual stories</span>{" "}
              that inspire action.
            </motion.p>

            <motion.p
              className="text-xl md:text-2xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
              variants={fadeInUp}
            >
              We create compelling visual experiences that connect with your
              audience, strengthen your brand, and drive meaningful business
              results.
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate("/contact")}
                className="text-white px-10 py-5 text-xl font-semibold font-roboto"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Start Your Design Project
              </ShimmerButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Design Services Section */}
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
              Design Services
            </motion.h2>
            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
              variants={fadeInUp}
            >
              Comprehensive design solutions that bring your{" "}
              <span className="font-medium text-white">vision to life</span>{" "}
              across all platforms and mediums
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={container}
          >
            {designServicesData.map((service, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900/50 rounded-3xl p-10 shadow-lg border-2 border-zinc-800/50 hover:border-purple-400/60 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
                variants={fadeInUp}
              >
                <div className={`${service.color} mb-6`}>{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-roboto">
                  {service.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed text-lg font-roboto">
                  {service.description}
                </p>
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
              Tailored design solutions for your industry's unique{" "}
              <span className="font-medium text-white">challenges</span> and
              audience expectations
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={container}
          >
            {industriesData.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900/50 rounded-3xl p-10 shadow-lg border-2 border-zinc-800/50 hover:border-green-400/60 hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
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
              We don't just create designs — we craft{" "}
              <span className="font-medium text-white">visual experiences</span>{" "}
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

      {/* Design Showcase Section */}
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
              Design That Drives Results
            </motion.h2>

            <motion.p
              className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
              variants={fadeInUp}
            >
              Our design philosophy goes beyond aesthetics to create strategic
              visual solutions that connect with your audience and achieve your
              business objectives.
            </motion.p>

            <motion.p
              className="text-xl text-zinc-300 leading-relaxed max-w-4xl mx-auto font-roboto"
              variants={fadeInUp}
            >
              From concept to completion, we ensure every design element serves
              a purpose and contributes to your overall brand success.
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate("/contact")}
                className="text-white px-10 py-5 text-xl font-semibold font-roboto"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Get Custom Design Solutions
              </ShimmerButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
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

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div className="space-y-12" variants={container}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 font-roboto"
              variants={fadeInUp}
            >
              Ready to Transform Your Brand?
            </motion.h2>

            <motion.p
              className="text-xl text-zinc-300 max-w-3xl mx-auto font-light font-roboto"
              variants={fadeInUp}
            >
              Let's create designs that not only look amazing but also drive
              your business{" "}
              <span className="font-medium text-white">forward</span>
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate("/contact")}
                className="text-white px-10 py-5 text-xl font-semibold font-roboto"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Start Your Design Journey
              </ShimmerButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
    </>
  );
}
