"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Use useInView to trigger animations when sections come into view
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [caseStudiesRef, caseStudiesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [optimizeRef, optimizeInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-black text-white mt-12">
      <section ref={heroRef} className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h1 className="text-2xl md:text-3xl font-light text-[#6442FA] mb-6">
              Government Software Development
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Tamar Software is a bespoke software development company for government that specializes in providing AI, IT, and cloud-based services. Today’s rapidly evolving digital landscape requires government agencies to work hand in hand. These agencies are mainly turning to specialized government software development to improve their public services and streamline operations.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              In addition to this, mobile applications that are solely designed for government services can also provide real-time updates and seamless communication between officials and citizens. Moreover, the cloud-based platform can facilitate easy sharing of data across platforms and secure storage to promote collaboration and making informed decisions. By investing in customized software solutions, governments will be able to meet the requirements of constituents, drive societal progress, and foster trust.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1621036579842-9080c7119f67?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Government Technology"
              width={600}
              height={300}
              className="rounded-lg shadow-lg ml-10"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "30+", label: "Clients Were Helped with Managed IT Services" },
            { value: "5+", label: "Years in Managed IT Services" },
            { value: "15+", label: "Highly Experienced Team Members" },
            { value: "40%", label: "Improved IT Budgeting for Our Clients" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="group relative bg-gray-900/50 rounded-lg p-6 overflow-hidden border border-gray-800/50 
                transition-all duration-300 ease-in-out hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 
                hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full 
                -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 
                transition-all duration-300" />
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-light text-[#6442FA] mb-2">{stat.value}</h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] 
                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Government Case Studies Section with Cards */}
      <section ref={caseStudiesRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#6442FA] mb-10 text-center"
          >
            Government Software Solutions for a Better Future
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
             {
                title: "Online Service Portal",
                description:
                  "We develop user-friendly online service portals that offer seamless access to government services. These e-governance solutions simplify processes such as payments, applications, and information retrieval, reducing administrative burdens and enhancing citizen satisfaction."
              },
              {
                title: "Mobile Applications",
                description:
                  "Our expert team creates customized mobile applications for government agencies, enabling real-time service delivery and communication. These apps provide instant access to updates, notifications, and essential services, promoting transparency and citizen engagement."
              },
              {
                title: "E-Governance Platforms",
                description:
                  "We design comprehensive e-governance platforms that integrate multiple government functions into a unified system. These platforms enhance data sharing, interdepartmental collaboration, and decision-making, making governments more efficient and citizen-centric."
              },
              {
                title: "Data Analytics & Insights",
                description:
                  "Our e-governance solutions leverage advanced data analytics to provide valuable insights. By analyzing service usage patterns and citizen feedback, we help government agencies optimize operations, improve decision-making, and deliver better public services."
              },
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-gray-900/50 rounded-lg p-6 overflow-hidden border border-gray-800/50 
                  transition-all duration-300 ease-in-out hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 
                  hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full 
                  -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 
                  transition-all duration-300" />
                <div className="relative z-10">
                  <h3 className="text-xl font-light text-white mb-4 group-hover:text-[#6442FA] transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {caseStudy.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] 
                  scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimize Government Section */}
      <section ref={optimizeRef} className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={optimizeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <Image
              src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Government Infrastructure"
              width={550}
              height={350}
              className="rounded-lg shadow-lg mr-4"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={optimizeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <h2 className="text-2xl md:text-3xl font-light text-[#6442FA] mb-6">
              World-class Government Software Solutions
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Taking advantage of cutting-edge technologies, government agencies have started improving transparency, efficiency, and citizen engagement. Implementation of e-governance solutions can enable citizens to have access to services online, which can reduce administrative burdens and wait times.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-md bg-transparent border-2 border-[#6442FA] text-white hover:bg-[#6442FA] hover:text-white transition-all duration-300"
            >
              Let’s Connect
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}