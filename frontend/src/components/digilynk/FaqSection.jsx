import React, { useState } from "react";
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
      "We work on a 40% advance, 40% after design approval, and 20% before launch. For our Indian clients, we accept UPI, bank transfers, and other local payment methods.",
  },
  {
    question: "We're not based in Gandhinagar, does that matter?",
    answer:
      "Not at all! While our office is in Gandhinagar, we serve clients across India through online collaboration. Many of our successful projects are with clients from Mumbai, Delhi, Bangalore, and other cities.",
  },
];

const otherFaqs = [
  {
    question: "What services does DigiLynk offer?",
    answer:
      "We specialize in website development, e-commerce solutions, SEO, Google Ads, social media marketing, and branding services specifically tailored for Indian businesses. We also offer GST-compliant website solutions.",
  },
  {
    question: "Where is DigiLynk located?",
    answer:
      "Our headquarters are in Gandhinagar, Gujarat - India's growing IT hub. We're conveniently located for meetings with clients from Ahmedabad, Gandhinagar, and nearby areas, while equally equipped to serve pan-India clients remotely.",
  },
];

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
        <div
          key={index}
          className={`border-b pb-5 mb-5 transition-all duration-300`}
        >
          <button
            onClick={() => toggleFAQ(index, sec)}
            className="flex justify-between w-full text-left text-lg font-semibold text-gray-800 transition"
          >
            <span>{faq.question}</span>
            <span className="ml-4">
              {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </button>
          {isActive && (
            <div className="mt-3 text-gray-600 text-base leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      );
    });

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-4 ">FAQs</h2>
      <p className="text-center text-gray-500 mb-12 text-lg">
        Common questions you might have.
      </p>

      <div>
        <h3 className="text-2xl font-semibold mb-6 ">General Questions</h3>
        {renderFaqList(generalFaqs, "general")}
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 ">Working with DigiLynk</h3>
        {renderFaqList(digilynkFaqs, "digilynk")}
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6 ">Other Questions</h3>
        {renderFaqList(otherFaqs, "other")}
      </div>
    </section>
  );
};

export default FaqSection;
