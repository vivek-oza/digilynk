import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import graphic from "../assets/images/graphic.png";
import web4 from "../assets/images/web4.png";
import endBanner from "../assets/images/graphicDesign/endBanner.png";
import web6 from "../assets/images/web6.png";
import { ShimmerButton } from "../components/magicui/shimmer-button";
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
    text: "Every design we create is carefully crafted to strengthen your brand identity, ensuring consistency across all touchpoints.",
    color: "text-purple-600",
  },
  {
    id: 3,
    icon: <Monitor className="w-6 h-6" />,
    title: "Fast Turnaround Times",
    text: "Our efficient design process and experienced team enable us to deliver high-quality designs quickly without compromising on creativity.",
    color: "text-green-600",
  },
  {
    id: 4,
    icon: <Layout className="w-6 h-6" />,
    title: "User-Centered Design",
    text: "We prioritize user experience in every design, ensuring that your visual communications are both beautiful and effective.",
    color: "text-orange-600",
  },
];

export default function GraphicDesign() {
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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8 text-center md:text-left"
            variants={container}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-semibold text-white mb-6"
              variants={fadeInUp}
            >
              Graphic Design
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              Transforming <span className="font-medium text-white">ideas</span>{" "}
              into{" "}
              <span className="font-medium text-white">visual stories</span>{" "}
              that inspire action.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              We create compelling visual identities that resonate with your
              target audience and build memorable brand experiences.
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate("/contact")}
                className="text-white px-8 py-4 text-lg font-semibold"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Start Your Design Project
              </ShimmerButton>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="flex space-x-2 justify-center md:justify-start"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
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
              src={graphic}
              className="w-full max-w-lg object-contain rounded-2xl"
              alt="Graphic design illustration"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Design Services Section */}
      <motion.section
        className="relative bg-black py-16 md:py-24 overflow-hidden"
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
          <motion.div className="text-center mb-16" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Design Services
            </motion.h2>
            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              Comprehensive design solutions that bring your brand vision to{" "}
              <span className="font-medium text-white">life</span>
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              className="flex justify-center mt-8 space-x-2"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
          >
            {designServicesData.map((service, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-800"
                variants={fadeInUp}
              >
                <div className={`${service.color} mb-4`}>{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  {service.description}
                </p>
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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #6366f1 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
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
              Creating compelling visual identities that resonate with your{" "}
              <span className="font-medium text-white">target audience</span>
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              className="flex justify-center mt-8 space-x-2"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
          >
            {industriesData.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-800"
                variants={fadeInUp}
              >
                <div className={`${industry.color} mb-4`}>{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {industry.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  {industry.description}
                </p>
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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
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
              We don't just create designs — we craft{" "}
              <span className="font-medium text-white">visual experiences</span>{" "}
              that drive results
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              className="flex justify-center mt-8 space-x-2"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={container}
          >
            {whyChooseItems.map((item) => (
              <motion.div
                key={item.id}
                className="bg-zinc-900 rounded-2xl p-8 shadow-sm border border-zinc-800"
                variants={fadeInUp}
              >
                <div className={`${item.color} mb-4`}>{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Design Showcase Section */}
      <motion.section
        className="relative bg-black py-16 md:py-24 overflow-hidden"
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

        <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8 text-center md:text-left"
            variants={container}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Design That Speaks
            </motion.h2>

            <motion.p
              className="text-lg text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              In a world where first impressions matter more than ever,
              exceptional design isn't just an option — it's essential for
              success.
            </motion.p>

            <motion.p
              className="text-lg text-zinc-300 leading-relaxed"
              variants={fadeInUp}
            >
              At Digilynk, we create visual experiences that captivate
              audiences, communicate your brand message clearly, and drive
              meaningful engagement.
            </motion.p>

            <motion.div variants={fadeInUp} className="inline-block">
              <ShimmerButton
                onClick={() => navigate("/contact")}
                className="text-white px-8 py-4 text-lg font-semibold"
                shimmerColor="#ffffff"
                shimmerSize="0.15em"
                background="rgba(0, 0, 0, 1)"
              >
                Get Custom Design Solutions
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
              src={endBanner}
              className="w-full max-w-lg object-contain rounded-2xl"
              alt="Design services illustration"
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
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, #10b981 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div className="space-y-8" variants={container}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4"
              variants={fadeInUp}
            >
              Ready to Transform Your Brand?
            </motion.h2>

            <motion.p
              className="text-lg text-zinc-300 max-w-2xl mx-auto font-light"
              variants={fadeInUp}
            >
              Let's create visual experiences that captivate your audience and
              drive your business{" "}
              <span className="font-medium text-white">forward</span>
            </motion.p>

            <motion.div className="flex justify-center" variants={fadeInUp}>
              <img
                src={web6}
                alt="Graphic design services"
                className="w-full max-w-2xl object-contain rounded-2xl"
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="flex justify-center mt-8 space-x-2"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
