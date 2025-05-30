import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const generalFaqs = [
  {
    question: "How long does a website project usually take to complete?",
    answer:
      "Typically, our website projects in Gandhinagar take between 3-6 weeks depending on complexity. Basic websites can be delivered in 2-3 weeks, while e-commerce platforms may require 4-6 weeks. We provide a clear timeline after understanding your requirements.",
  },
  {
    question: "How much does a website cost in India?",
    answer:
      "At DigiLynk, our website development starts from ₹15,000 for basic websites. Professional business websites range between ₹25,000-₹50,000, while custom e-commerce solutions start from ₹60,000. We offer competitive pricing tailored to Indian businesses with transparent cost breakdowns.",
  },
  {
    question: "How easy is it for me to change content myself?",
    answer:
      "Very simple! We provide training on our user-friendly CMS. Most DigiLynk clients in Gujarat manage their own content updates effortlessly. We also offer optional maintenance packages if you prefer us to handle updates.",
  },
  {
    question: "Can I create PPC landing pages myself?",
    answer:
      "Yes, our system allows you to create landing pages easily. For our Gandhinagar clients, we also provide dedicated PPC services with optimized landing pages as part of our digital marketing packages.",
  },
  {
    question: "We have a limited budget, will you still work with us?",
    answer:
      "Absolutely! We understand Indian SME budgets and offer scalable solutions. We can start with essential features and expand later. Ask us about our startup-friendly packages.",
  },
  {
    question: "Do you outsource any work?",
    answer:
      "No, DigiLynk has an in-house team of developers, designers, and marketers working from our Gandhinagar office. This ensures quality control and better communication for our clients across India.",
  },
];

const digilynkFaqs = [
  {
    question: "How many meetings can we have?",
    answer:
      "We're flexible! Typically we have an initial consultation, design approval meeting, and pre-launch review. For our Gandhinagar clients, we're happy to meet in person. For others across India, we conduct productive virtual meetings.",
  },
  {
    question: "Do we have a dedicated account manager?",
    answer:
      "Yes, every DigiLynk client gets a dedicated project coordinator based in our Gujarat office who speaks Hindi, English, and Gujarati for smooth communication.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We work on a 50% advance, 50% after delivery. For our Indian clients, we accept UPI, bank transfers, and other local payment methods.",
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
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
      bounce: 0.4
    }
  }
};

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [section, setSection] = useState(null);

  const toggleFAQ = (index, sec) => {
    setSection(sec);
    setActiveIndex(index === activeIndex && sec === section ? null : index);
  };

  const renderFaqList = (faqs, sec) =>
    faqs.map((faq, index) => {
      const isActive = activeIndex === index && section === sec;
      return (
        <motion.div
          key={index}
          className={`mb-4`}
          variants={item}
          whileHover={{ y: -2 }}
        >
          <motion.div
            className={`bg-white rounded-xl p-6 shadow-sm border border-zinc-100 transition-all duration-300 ${isActive ? "ring-2 ring-blue-200" : ""}`}
            initial={false}
            animate={{
              height: isActive ? "auto" : "auto"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              onClick={() => toggleFAQ(index, sec)}
              className="flex justify-between w-full text-left"
            >
              <motion.span
                className="text-lg font-semibold text-zinc-800"
                animate={{ color: isActive ? "#3b82f6" : "#27272a" }}
                transition={{ duration: 0.2 }}
              >
                {faq.question}
              </motion.span>
              <motion.span
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {isActive ? (
                  <ChevronUp size={20} className="text-blue-500" />
                ) : (
                  <ChevronDown size={20} className="text-zinc-500" />
                )}
              </motion.span>
            </button>

            <motion.div
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                height: isActive ? "auto" : 0,
                marginTop: isActive ? "0.75rem" : 0
              }}
              transition={{
                opacity: { duration: 0.2 },
                height: { type: "spring", stiffness: 300, damping: 25 }
              }}
              className="overflow-hidden"
            >
              <p className="text-zinc-600 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      );
    });

  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <motion.div variants={item} className="text-center mb-12">
        <h2 className="text-4xl font-bold text-zinc-800 mb-4">FAQs</h2>
        <p className="text-lg text-zinc-500">
          Common questions you might have.
        </p>
      </motion.div>

      <motion.div variants={container} className="space-y-12">
        <motion.div variants={item}>
          <h3 className="text-2xl font-semibold text-zinc-800 mb-6">General Questions</h3>
          <div className="space-y-4">
            {renderFaqList(generalFaqs, "general")}
          </div>
        </motion.div>

        <motion.div variants={item}>
          <h3 className="text-2xl font-semibold text-zinc-800 mb-6">Working with DigiLynk</h3>
          <div className="space-y-4">
            {renderFaqList(digilynkFaqs, "digilynk")}
          </div>
        </motion.div>

        {/* <motion.div variants={item}>
          <h3 className="text-2xl font-semibold text-zinc-800 mb-6">Other Questions</h3>
          <div className="space-y-4">
            {renderFaqList(otherFaqs, "other")}
          </div>
        </motion.div> */}
      </motion.div>
    </motion.section>
  );
};

export default FaqSection;