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
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#6442FA] mb-6">
              Transform Your Retail Business with Custom Software
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              At Tamar Software, we make innovative retail software development to transform your business. Our retail software solutions are created for businesses to improve their operations. As we are home to experts in e-commerce software development, we aim to create advanced solutions to optimize operations, increase profitability, and enhance customer support service.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              The primary aim of Tamar Software is to provide retail technology solutions that offer comprehensive services. This includes retail software consulting and implementation for businesses of all sizes and from different industries. We help to empower businesses with advanced retail IT solutions to maximize efficiency with our advanced solutions. So, if you wish to revolutionize retail technology, partner with Tamar Software and stay ahead of today’s competitive edge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1556741533-411cf82e4e2d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Retail Technology"
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
                <h3 className="text-3xl font-bold text-[#6442FA] mb-2">{stat.value}</h3>
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

      {/* Retail Case Studies Section with Cards */}
      <section ref={caseStudiesRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-bold text-[#6442FA] mb-10 text-center"
          >
            Increase Sales, Enhance Customer Experiences, and Gain a Competitive Edge
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Enhanced Customer Experience",
                description:
                  "We let you deliver a personalized shopping experience that attracts and retains more customers. We develop advanced solutions that support loyalty programs, omnichannel support, and improve customer support service to meet the evolving requirements of customers. Our tools ensure a satisfying and seamless shopping journey.",
              },
              {
                title: "Optimized Operations",
                description:
                  "Streamline retail operations with advanced technology. Custom retail software offers solutions for streamlining order fulfillment, efficient inventory management, and a reliable point-of-sale system. As we optimize supply chain tools, we help retailers manage logistics easily and increase operational efficiency.",
              },
              {
                title: "Data-Driven Decision",
                description:
                  "Harness the power of data with our advanced analytical tools. Our retail software development services include tools that help retailers gain valuable insight into real-time sales data, market trends, and customer behaviour that helps to make informed decisions.",
              },
              {
                title: "Increased Revenue and Sales",
                description:
                  "Personalized recommendations in retail management software and targeted promotion drive higher revenue. Our retail software solutions enable businesses to leverage customer insight and effective marketing campaigns to lead to better conversion and strengthen brand loyalty.",
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
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#6442FA] transition-colors duration-300">
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

      {/* Optimize Retail Section */}
      <section ref={optimizeRef} className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={optimizeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Retail Performance"
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
            <h2 className="text-3xl md:text-3xl font-bold text-[#6442FA] mb-6">
              Retail Software Solutions That Drive Growth
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              We specialize in providing customized retail software solutions at Tamar Software designed to meet the unique requirements of modern retailers. Whether it is a large-scale enterprise or a small business, our innovative tools help businesses streamline operations, boost revenue, and enhance customer satisfaction.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Choosing our software development services means embracing the power of advanced technology. Our tools ensure seamless integration into operations by providing features like real-time data analytics, omnichannel support, and predictive modeling. You can stay connected with customers with targeted marketing campaigns and personalized recommendations to ensure getting a competitive edge.
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