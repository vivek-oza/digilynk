import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does a website project usually take to complete?",
    answer:
      "Website project timelines vary based on complexity. Basic websites typically take 2-4 weeks, while more complex projects with custom features may take 6-8 weeks. We provide a detailed timeline during our initial consultation and keep you updated throughout the development process.",
  },
  {
    question: "How much does a website cost in India?",
    answer:
      "Our website development pricing is competitive and transparent. Basic websites start from ₹15,000, professional business websites range from ₹25,000-₹50,000, and custom e-commerce solutions start from ₹60,000. We offer flexible packages tailored to different business needs and budgets.",
  },
  {
    question: "We have a limited budget, will you still work with us?",
    answer:
      "Absolutely! We understand that businesses have different budget constraints and we're committed to working with clients at various budget levels. We can start with essential features and scale up as your business grows. We offer flexible payment plans and can discuss options that fit your budget.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We work with a 50% advance payment to begin the project, and the remaining 50% upon completion and delivery. For ongoing projects, we can discuss milestone-based payments. We accept various payment methods including UPI, bank transfers, and other local payment options for your convenience.",
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      bounce: 0.4,
    },
  },
};

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderFaqList = (faqs) =>
    faqs.map((faq, index) => {
      const isActive = activeIndex === index;
      return (
        <motion.div
          key={index}
          className={`mb-4`}
          variants={item}
          whileHover={{ y: -2 }}
        >
          <motion.div
            className={`bg-zinc-900/50 rounded-xl p-6 shadow-lg border border-zinc-800/50 transition-all duration-300 ${
              isActive ? "ring-2 ring-zinc-600" : ""
            }`}
            initial={false}
            animate={{
              height: isActive ? "auto" : "auto",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between w-full text-left"
            >
              <motion.span
                className="text-lg font-semibold text-white"
                animate={{ color: isActive ? "#ffffff" : "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                {faq.question}
              </motion.span>
              <motion.span
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {isActive ? (
                  <ChevronUp size={20} className="text-white" />
                ) : (
                  <ChevronDown size={20} className="text-zinc-400" />
                )}
              </motion.span>
            </button>

            <motion.div
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                height: isActive ? "auto" : 0,
                marginTop: isActive ? "0.75rem" : 0,
              }}
              transition={{
                opacity: { duration: 0.2 },
                height: { type: "spring", stiffness: 300, damping: 25 },
              }}
              className="overflow-hidden"
            >
              <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      );
    });

  return (
    <motion.section
      className="relative bg-black max-w-4xl mx-auto px-6 py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
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

      <div className="relative">
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Common questions about our services and working process.
          </p>
        </motion.div>

        <motion.div variants={container} className="space-y-6">
          {renderFaqList(faqs)}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FaqSection;
