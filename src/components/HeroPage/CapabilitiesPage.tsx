"use client";
import { motion } from 'framer-motion';

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  GlobeAltIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

const capabilities = [
  {
    name: 'Software Development',
    description: 'Custom software solutions tailored to meet the unique needs of your business, ensuring efficiency and scalability.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Mobile Development',
    description: 'Create powerful and user-friendly mobile applications for iOS and Android platforms.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Web Development',
    description: 'Build responsive, modern, and high-performance websites tailored to your business needs.',
    icon: ChartBarIcon,
  },
  {
    name: 'AI Services',
    description: 'Harness the power of data and artificial intelligence to drive innovation and gain a competitive edge.',
    icon: LockClosedIcon,
  },
  {
    name: 'IT Consulting',
    description: 'Expert advice and strategic planning to help you navigate the complexities of the IT landscape and achieve your business goals.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Cybersecurity Services',
    description: 'Expert advice and strategic planning to help you navigate the complexities of Cybersecurity and achieve your Security goals.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Managed IT Services',
    description: 'Comprehensive IT management and support services to ensure your systems run smoothly and efficiently.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Testing and QA Services',
    description: 'Rigorous testing and quality assurance processes to deliver reliable and high-performing software.',
    icon: ServerIcon,
  },
  {
    name: 'RPA Development',
    description: 'Robotic Process Automation solutions to streamline your operations and enhance productivity.',
    icon: ServerIcon,
  },

];

export default function Capabilities() {
  return (
    <div className="bg-black min-h-screen">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-extrabold mb-6 text-[#6442FA]"
            >
              Capabilities
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-300"
            >
              We provide managed IT services customized for your industry. We have served many industries including
              Finance, Healthcare, Retail, Telecommunication, Education, and Manufacturing across 10+ countries worldwide.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={capability.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group relative bg-gray-900/50 rounded-2xl p-8 overflow-hidden 
                    border border-gray-800/50 transition-all duration-300 ease-in-out
                    hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 
                    hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top-right corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full 
                    -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 
                    transition-all duration-300" />

                  <div className="relative flex flex-col items-center text-center z-10">
                    <div className="flex size-16 items-center justify-center rounded-xl bg-[#6442FA]/20 
                      group-hover:bg-[#6442FA]/40 transition-all duration-300 transform group-hover:scale-110">
                      <IconComponent className="size-8 text-[#6442FA] transition-colors duration-300" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white 
                      group-hover:text-[#6442FA] transition-colors duration-300">
                      {capability.name}
                    </h3>
                    <p className="mt-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      {capability.description}
                    </p>
                  </div>

                  {/* Bottom border animation */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] 
                    scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}