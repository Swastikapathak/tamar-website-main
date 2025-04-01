"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of software development services does Tamar Software provide?",
      answer:
        "Tamar Software offers a wide range of software development services, including custom software development, enterprise software solutions, cloud and mobile app development, and software support and maintenance. We tailor our solutions to meet your unique business needs.",
    },
    {
      question: "How does Tamar Software ensure the quality of its software solutions?",
      answer:
        "We have a dedicated Testing & QA Services team that implements rigorous testing and quality assurance processes to ensure our software is reliable, high-performing, and bug-free. We also provide ongoing support and maintenance to keep your systems running smoothly.",
    },
    {
      question: "What industries does Tamar Software serve?",
      answer:
        "We serve a variety of industries, including Finance, Healthcare, Infrastructure & Construction, Automobile, Hospitality, Media & Entertainment, Retail, and Telecommunication, delivering tailored solutions to drive innovation and efficiency.",
    },
    {
      question: "Can Tamar Software help with AI and machine learning projects?",
      answer:
        "Yes, our AI Services team specializes in harnessing the power of data and artificial intelligence to drive innovation. We provide cutting-edge machine learning solutions to help you gain a competitive edge.",
    },
    {
      question: "What is the benefit of using Tamar Software’s automation solutions?",
      answer:
        "Our automation solutions, such as RPA Development and finance automation software, streamline repetitive tasks, reduce operational costs, improve data accuracy, and allow your team to focus on strategic initiatives, ultimately optimizing performance.",
    },
    {
      question: "How does Tamar Software approach cybersecurity?",
      answer:
        "Our Cybersecurity Services team provides expert advice and strategic planning to navigate the complexities of cybersecurity. We help you achieve your security goals by implementing robust, scalable solutions to protect your business.",
    },
    {
      question: "Does Tamar Software offer cloud solutions?",
      answer:
        "Yes, we provide Cloud Solutions that offer scalable and secure cloud infrastructure to optimize your operations, reduce costs, and enhance accessibility, ensuring your business stays competitive in the digital age.",
    },
    {
      question: "How can Tamar Software help with financial performance optimization?",
      answer:
        "We offer finance automation solutions that automate tasks like data entry, reconciliation, and reporting, providing real-time insights into financial performance. This helps businesses make data-driven decisions and improve efficiency.",
    },
    {
      question: "What makes Tamar Software a reliable IT services partner?",
      answer:
        "With over 6 years in business, a team of 35+ experienced developers, and a 98% customer satisfaction rate, we are committed to excellence. We act as an extended partner, delivering strategic IT solutions to drive your business forward.",
    },
    {
      question: "How can I get started with Tamar Software?",
      answer:
        "Getting started is easy! Contact us through our website, and our team will reach out to discuss your needs. We’ll work with you to create customized solutions that align with your business goals.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl text-[#4F45E4] mb-10 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-900/50 rounded-lg border border-gray-800/50 
                transition-all duration-300 ease-in-out hover:bg-[#4F45E4]/10 hover:border-[#4F45E4]/50 
                hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top-right corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#4F45E4]/10 rounded-full 
                -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 
                transition-all duration-300" />

              <div className="relative z-10">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="text-lg font-light text-white group-hover:text-[#4F45E4] transition-colors duration-300">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#4F45E4] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="p-5 pt-0 text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4] 
                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}