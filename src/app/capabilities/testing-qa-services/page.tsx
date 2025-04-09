"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Users, DollarSign, Shield, FileCheck, CheckSquare, Smartphone, Zap, Eye, Globe } from "lucide-react";
import { Gauge } from "lucide-react";

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [reasonsRef, reasonsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [qaSolutionsRef, qaSolutionsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [streamlineRef, streamlineInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-black text-white mt-12">
      {/* Meta Tags for SEO */}
      <Head>
        <title> Software Testing and QA Services in India |Tamar Software</title>
        <meta
          name="description"
          content="We offer a broad spectrum of software testing and qa services in India aimed at helping the companies deliver flawless and optimally performing software to the users."
        />
        <meta name="keywords" content="software quality assurance, software testing services ,qa testing software, qa testing services , Software testing & qa services in india" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Hero Section */}
      <section ref={heroRef} className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-6 text-justify"
          >
            <h1 className="text-2xl md:text-3xl font-light text-[#6442FA] mb-6">
             Leader Software testing & qa services in india
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Tamar Software stands as the Best Software Development Company in India, delivering comprehensive testing and QA services alongside custom software development. With nearly two decades of experience, we ensure your software meets the highest standards of performance, functionality, and reliability. Our team of experts specializes in creating innovative applications for mobile and web platforms, identifying vulnerabilities, and enhancing user satisfaction.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              As a leading Software Development Company in India, we follow a meticulous process from inception to deployment, detecting defects, validating performance, and ensuring compatibility across platforms. Whether launching a new mobile app or upgrading a web application, our software development agency guarantees flawless, high-performing solutions that uphold quality standards, reflecting our commitment to precision and excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
          >
            <Image
              src="https://images.unsplash.com/photo-1682561477064-44fb2dfd82bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="QA Testing Technology"
              width={600}
              height={300}
              className="rounded-lg shadow-lg ml-10"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {[
            { value: "100+", label: "Clients Served" },
            { value: "20+", label: "Years in Business" },
            { value: "35+", label: "Expert Engineers" },
            { value: "98%", label: "Client Retention" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="group relative bg-gray-900/50 rounded-lg p-6 overflow-hidden border border-gray-800/50 transition-all duration-300 ease-in-out hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-light text-[#6442FA] mb-2">{stat.value}</h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reasons to Choose Section */}
      <section ref={reasonsRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#6442FA] mb-10 text-center"
          >
            Reliable Software Testing Services to Improve Application Functionaing & Perfmonce
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Customer Satisfaction",
                description: "At Tamar Software, a top Software Development Company in India, customer satisfaction is our priority. We deliver tailored solutions that meet your unique needs, ensuring a seamless experience.",
              },
              {
                icon: DollarSign,
                title: "Cost Effective",
                description: "Our software development services are cost-effective, providing high-quality solutions that maximize value while keeping expenses low, making us a preferred choice in India.",
              },
              {
                icon: Shield,
                title: "Defect-Free Solutions",
                description: "We ensure defect-free software through rigorous testing, delivering reliable and high-performing applications that instill confidence in your investment.",
              },
              {
                icon: FileCheck,
                title: "Regulatory Compliance",
                description: "Our services adhere to industry standards and regulations, helping you navigate compliance requirements with ease and precision.",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-gray-900/50 rounded-lg p-6 overflow-hidden border border-gray-800/50 transition-all duration-300 ease-in-out hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 text-justify">
                  <reason.icon className="w-8 h-8 text-[#6442FA] mb-4" />
                  <h3 className="text-xl font-light text-white mb-4 group-hover:text-[#6442FA] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 text-justify"
          >
            <p className="text-gray-300">
              Choosing Tamar Software means partnering with a Software Development Company in India that prioritizes quality, efficiency, and client success, delivering exceptional results every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive QA Solutions Section */}
      <section ref={qaSolutionsRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={qaSolutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#6442FA] mb-10 text-center"
          >
           Our QA & Sofware Testing Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Gauge,
                title: "Performance Testing",
                description: "Our performance testing evaluates software speed, stability, and scalability under real-world conditions, identifying bottlenecks to ensure flawless operation in high-traffic scenarios.",
              },
              {
                icon: CheckSquare,
                title: "Functional Testing",
                description: "We validate that your software operates as intended, meticulously testing each feature to ensure a seamless user experience across websites, apps, and systems.",
              },
              {
                icon: Smartphone,
                title: "Mobile Testing",
                description: "Our mobile testing ensures your app performs optimally across devices and OS, covering security, usability, and functionality for a flawless mobile experience.",
              },
              {
                icon: Zap,
                title: "Automation Testing",
                description: "We enhance efficiency with automation testing, using advanced tools for repetitive tasks, delivering faster, consistent results and reducing time-to-market.",
              },
              {
                icon: Eye,
                title: "Manual Testing",
                description: "Our experts conduct thorough manual testing to catch defects automation might miss, adding an extra layer of quality assurance for a flawless user experience.",
              },
              {
                icon: Globe,
                title: "QA Outsourcing",
                description: "Outsource your QA needs to Tamar Software’s software development agency, allowing you to focus on development while we ensure your product meets the highest standards.",
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={qaSolutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-gray-900/50 rounded-lg p-6 overflow-hidden border border-gray-800/50 transition-all duration-300 ease-in-out hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 text-justify">
                  <solution.icon className="w-8 h-8 text-[#6442FA] mb-4" />
                  <h3 className="text-xl font-light text-white mb-4 group-hover:text-[#6442FA] transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {solution.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={qaSolutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-8 text-justify"
          >
            <p className="text-gray-300">
              Our comprehensive software development services integrate advanced QA practices, ensuring your applications are robust, secure, and ready for the market with minimal downtime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Streamline QA Section */}
      <section ref={streamlineRef} className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={streamlineInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 flex justify-center"
          >
            <Image
              src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Software Performance"
              width={550}
              height={350}
              className="rounded-lg shadow-lg mr-4"
            />
            D:\tamar\tamar-by-gautam\tamar-website-main
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={streamlineInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0 space-y-6 text-justify"
          >
            <h3 className="text-2xl md:text-3xl font-light text-[#6442FA] mb-6">
              Delivered World-Class Software Solutions for Clients from 10+ Countries
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Tamar Software, a premier Software Development Company in India, streamlines QA and software development with cutting-edge solutions. With nearly 20 years of experience, we’ve delivered world-class software to clients across more than 10 countries, ensuring flawless functionality and exceptional performance through rigorous testing and custom development.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Our advanced QA processes cover functional testing, mobile app testing, and web security, adapting to your unique needs. We provide real-time analytics to track performance, optimize workflows, and resolve issues early, accelerating release timelines and enhancing product quality with minimal effort.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              From continuous integration to automated testing, our software development services reduce manual effort while maintaining precision. Partner with Tamar Software to experience innovative solutions that elevate user experience and drive business success on a global scale.
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