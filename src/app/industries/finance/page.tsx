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
        Power Your Finance with Technology
      </h1>
      <p className="text-lg text-gray-300 mb-6">
      Tamar Software provides exceptional finance software solutions that empower businesses to drive efficiency and growth. With expert developers in the team crafting customized solutions, we foster streamlined operations, reduced cost, and improved data accuracy.
      </p>
      <p className="text-lg text-gray-300 mb-6">
      As a leading finance software solutions development company, our approach is to help organizations gain a competitive edge through a data-driven approach. Our solutions provide real-time insight into financial performance that helps businesses make informed decisions. From risk management to budgeting forecasting and compliance, we provide the best financial software for small businesses and large enterprises
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={heroInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="lg:w-1/2 mt-10 lg:mt-0"
    >
      <Image
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3"
        alt="Finance Technology"
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
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top-right corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full 
                  -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 
                  transition-all duration-300" />

                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-bold text-[#6442FA] mb-2">{stat.value}</h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>

                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] 
                  scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Finance Case Studies Section with Cards */}
        <section ref={caseStudiesRef} className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl md:text-3xl font-bold text-[#6442FA] mb-10 text-center"
            >
              Finance Case Studies: Innovative Software for Financial Success
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Increased Efficiency",
                  description:
                    "The finance automation software solutions developed at Tamar Software are designed to process financial forecasting and expense tracking to help the team pay attention to more strategic tasks.",
                },
                {
                  title: "Improved Data Accuracy",
                  description:
                    "You no longer have to take the hassle of manual human errors as we create and develop the best personal finance management software. These solutions provide accurate data processing to help you get reliable financial information.",
                },
                {
                  title: "Reduced Cost",
                  description:
                    "As we provide automation solutions for financial companies, it optimizes workflows and reduces labor costs. Therefore, businesses can minimize operational expenses.",
                },
                {
                  title: "Improved Decision-Making",
                  description:
                    "With the best software solutions for finance management, we empower businesses to get real-time information and make strategic moves. These data-driven decisions will help organizations to make better resource allocation and the right decisions for improved performance.",
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
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top-right corner accent */}
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

                  {/* Bottom border animation */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] 
                    scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimize Financial Performance Section */}
        <section ref={optimizeRef} className="py-16 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={optimizeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Financial Performance"
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
              <h2 className="text-3xl md:text-3xl font-bold text-[#6442FA] mb-6">
                Optimize Your Financial Performance
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                With cutting-edge finance automation solutions, businesses can automate repetitive tasks like data entry, reconciliation, and reporting. Our automation software frees your valuable time with a focus on strategic initiatives. Being a leading company, we create a customized solution that meets your unique business requirements.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our automation solutions for finance companies will not only increase efficiency but also reduce the chances of human error and provide better accuracy data. Therefore, the software solutions for finance companies at Tamar Software become a valuable decision if you’re willing to get valuable insights, streamline operations, and optimize financial performances.
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