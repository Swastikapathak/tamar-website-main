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
              Empowering Healthcare with Technology
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Tamar Software specializes in offering exceptional services for software development for healthcare. We provide innovative software solutions for healthcare that improve patient outcomes and enhance overall efficiency. As we aim to become one of the top healthcare software development companies, we provide customized solutions for every client.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              From medical billing software for small businesses to creating advanced healthcare automation solutions, we hold image expertise in our team to make healthcare software development according to your requirements. Our expertise clearly encompasses all facets of healthcare technology. Being recognized as a leading company providing healthcare software development services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Healthcare Technology"
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

      {/* Healthcare Case Studies Section with Cards */}
      <section ref={caseStudiesRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#6442FA] mb-10 text-center"
          >
            Innovative Software Solutions for Better Patient Care
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Increased Patient Satisfaction",
                description:
                  "Our innovative and intuitive healthcare software solutions clearly enhance patient engagement as they offer features like medical record accessibility, appointment scheduling, and real-time communication. Patients can easily benefit from seamless experiences that would create trust and satisfaction with their healthcare providers.",
              },
              {
                title: "Improve Treatment Adherence",
                description:
                  "With our custom healthcare solutions, healthcare professionals are able to deliver customized reminders, medication schedules, and progress. It ensures that patients follow their treatment plans effectively. The tools can significantly improve adherence and lead to better health outcomes.",
              },
              {
                title: "Reduced Readmissions",
                description:
                  "With our advanced healthcare automation solutions, healthcare professionals will be able to monitor patients remotely. This will enable timely intervention to prevent any sort of complications. As it leverages productive analytics, healthcare providers will be able to identify at-risk patients and implement proactive measures.",
              },
              {
                title: "Streamline Administrative Processes",
                description:
                  "Being one of the top healthcare software development companies, we provide solutions that optimize workflows, reduce manual work, and enhance billing accuracy. From creating and developing medical billing software for small business to enterprise-level systems, we create tools that save time and reduce costs.",
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

      {/* Optimize Healthcare Section */}
      <section ref={optimizeRef} className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={optimizeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <Image
              src="https://images.unsplash.com/photo-1582560469781-1965b9af903d?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Healthcare Performance"
              width={550}
              height={350}
              className="rounded-lg shadow-lg mr-4 "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={optimizeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <h2 className="text-3xl md:text-3xl font-light text-[#6442FA] mb-6">
              Innovative Software Solutions for Better Patient Care
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              As we specialize in software development for the healthcare industry, we aim to deliver innovative software solutions for this industry. The primary aim is to create solutions that enhance patient care and streamline overall operations. We aim to become the top choice for healthcare software development companies by providing custom healthcare solutions.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              We make use of data as we understand how the world is driven to create data-driven solutions. We create software solutions for the healthcare industry that leverage the power of data and deliver exceptional healthcare. Our services aim to drive outcomes, transform the way you deliver patient care, and improve workflow.
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