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
              Transforming Telecom with Innovative Software Solutions
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              At Tamar Software, we work to elevate the telecom experience with our custom telecom software development services. In today’s dynamic world of telecommunication, there is a need for customized solutions more than ever. Tamar Software specializes in telecom software development that offers customized solutions to address the unique challenges of industries.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              With our expert team members, we develop, design, and deploy innovative software that can integrate seamlessly with the existing telecom infrastructure. Whether it comes to improving network management, automating processes with innovative technology, or enabling predictive maintenance, the custom telecom software solutions from Tamar Software are crafted in a way that aligns with your business objectives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1533664488202-6af66d26c44a?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Telecom Technology"
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

      {/* Telecom Case Studies Section with Cards */}
      <section ref={caseStudiesRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#6442FA] mb-10 text-center"
          >
            Telecom Software Development: From Concept to Reality
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Driven Network Management",
                description:
                  "We make use of artificial intelligence, which implements predictive maintenance to detect potential equipment failure before it occurs. This reduces downtime, enhances operational efficiency, and ensures consistent network reliability that enables telecom operators to deliver seamless connectivity.",
              },
              {
                title: "AI-Enhanced Customer Service in Telecom",
                description:
                  "AI chatbots streamline customer service by addressing inquiries and support requests immediately. It will reduce response time, ensure round-the-clock assistance, and lighten the load on human agents. Virtual assistance can also analyze customer behavior and provide personalized recommendations.",
              },
              {
                title: "AI-Powered Network Security Solutions",
                description:
                  "The AI algorithm can monitor network behavior in real time and identify potential fraud or security breaches. This ensures providers address threats immediately and minimize risk to the networks and users. AI-based authentication enhances security while maintaining user convenience.",
              },
              {
                title: "Telecom Network Optimization with AI",
                description:
                  "AI continuously monitors network performance and makes real-time adjustments. This enhances reliability and user satisfaction. Additionally, AI can allocate bandwidth dynamically by prioritizing critical applications during high-demand periods, maintaining optimal quality of service.",
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

      {/* Optimize Telecom Section */}
      <section ref={optimizeRef} className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={optimizeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Telecom Infrastructure"
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
            <h2 className="text-3xl md:text-3xl font-light text-[#6442FA] mb-6">
              Leverage the Power of Cloud, AI, and Automation
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Modern telecom requires dynamic solutions and Tamar Software delivers it. We harness the power of the cloud to streamline operations, enable seamless service delivery, and reduce infrastructural costs. As we leverage the power of AI, we enhance customer experiences with personalized interaction and predictive analytics.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              The solutions can minimize human error, optimize workflows, and improve network reliability. With our telecom software development services, the infrastructure transforms into efficient and highly capable modern solutions that handle complex demands. Trust us to transform your telecom business by integrating excellent tools that drive innovation, growth, and operational excellence.
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