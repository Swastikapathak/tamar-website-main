"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Brain, Lightbulb, Server, TestTube, Bot, Shield, Smartphone, Globe } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

interface Capability {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

const capabilities: Capability[] = [
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to meet the unique needs of your business, ensuring efficiency and scalability.",
    icon: Code,
    href: "/capabilities/software-development",
  },
  {
    title: "Mobile Development",
    description: "Create powerful and user-friendly mobile applications for iOS and Android platforms.",
    icon: Smartphone,
    href: "/capabilities/mobiledevelopment",
  },
  {
    title: "Web Development",
    description: "Build responsive, modern, and high-performance websites tailored to your business needs.",
    icon: Globe,
    href: "/capabilities/webdevelopment",
  },
  {
    title: "AI Services",
    description:
      "Harness the power of data and artificial intelligence to drive innovation and gain a competitive edge.",
    icon: Brain,
    href: "/capabilities/data-ai-services",
  },
  {
    title: "IT Consulting",
    description:
      "Expert advice and strategic planning to help you navigate the complexities of the IT landscape and achieve your business goals.",
    icon: Lightbulb,
    href: "/capabilities/it-consulting",
  },
  {
    title: "Managed IT Services",
    description:
      "Comprehensive IT management and support services to ensure your systems run smoothly and efficiently.",
    icon: Server,
    href: "/capabilities/managed-it-services",
  },
  {
    title: "Testing & QA Services",
    description: "Rigorous testing and quality assurance processes to deliver reliable and high-performing software.",
    icon: TestTube,
    href: "/capabilities/testing-qa-services",
  },
  {
    title: "RPA Development",
    description: "Robotic Process Automation solutions to streamline your operations and enhance productivity.",
    icon: Bot,
    href: "/capabilities/rpa-development",
  },
  {
    title: "Cybersecurity Services",
    description: "Expert advice and strategic planning to help you navigate the complexities of Cybersecurity and achieve your Security goals.",
    icon: Shield,
    href: "/capabilities/cybersecurity-services",
  },

];

// const clientLogos = [
//   "/client-logo-1.png",
//   "/client-logo-2.png",
//   "/client-logo-3.png",
//   "/client-logo-4.png",
//   "/client-logo-5.png",
// ];

export default function TamarSoftwareCapabilities() {
  const [] = useState<Capability | null>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div className="relative h-[50vh] overflow-hidden" style={{ y }}>
        <img
          src="/header-background.jpg"
          alt="Header background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-center mb-8 text-[#6442FA]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Capabilities
          </motion.h1>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Tamar Software strives to become the leading software development company with a comprehensive range of IT services.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-900/50 rounded-lg p-6 overflow-hidden border border-gray-800/50 
                transition-all duration-300 ease-in-out hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 
                hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top-right corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full 
                -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 
                transition-all duration-300" />

              <div className="relative z-10">
                <capability.icon className="w-12 h-12 text-[#6442FA] mb-4 transition-colors duration-300" />
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#6442FA] transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {capability.description}
                </p>
                <Link href={capability.href}>
                  <motion.button
                    className="inline-flex items-center px-3 py-1 rounded bg-transparent border border-[#6442FA] text-white 
                      hover:bg-[#6442FA] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </Link>
              </div>

              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] 
                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-gray-900/50 rounded-lg border border-gray-800 p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#6442FA]">
            Tamar Software: Premiere AI & Software Development Company
          </h2>
          <p className="text-white mb-6">
            Tamar Software aims to become the ultimate choice by offering comprehensive AI services for the IT industry.
            Being a leading AI and software development company specialising to deliver scalable and innovative
            solutions, we ensure customising services as per your requirements. Our expertise in different fields
            ensures organisations a digital transformation that drives growth and innovation. We are committed to
            excellence and our team of members creates future ready solutions.
          </p>

          <Button
            className="border-2 border-[#6442FA] text-white font-bold py-2 px-4 rounded 
              hover:bg-[#6442FA] hover:text-white"
          >
            Let's Connect
          </Button>
        </motion.div>

        {/* <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-[#6442FA]">
            Our Clients
          </h3>
          <div className="flex justify-center items-center space-x-8 overflow-x-auto pb-4">
            {clientLogos.map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt={`Client logo ${index + 1}`}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}