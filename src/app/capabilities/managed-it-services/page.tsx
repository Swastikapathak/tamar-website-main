"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [caseStudiesRef, caseStudiesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [optimizeRef, optimizeInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-black text-white mt-12">
      {/* Meta Tags for SEO */}
      <Head>
        <title>Best Software Development Company in India | Tamar Software</title>
        <meta
          name="description"
          content="Tamar Software is a Best software development company in India with experience of almost two decades in developing new-edge applications for mobile and web platforms."
        />
        <meta name="keywords" content="Software Development Company in India, custom software development, software development agency, software development services" />
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
              Custom Software Development Services
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Tamar Software stands as the Best Software Development Company in India, offering exceptional IT consulting and custom software development services. With nearly two decades of experience, we specialize in tailoring solutions that help businesses thrive in the digital age. Our software development agency understands the unique challenges faced by organizations, delivering innovative applications that streamline operations, boost productivity, and enhance security.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Partnering with Tamar Software, a leading Software Development Company in India, means choosing reliable expertise and hands-on support. Our comprehensive software development services cover strategic planning, implementation, and ongoing optimization, ensuring your technology aligns perfectly with your business goals. With a team of skilled professionals, we provide personalized solutions that adapt to your evolving needs, empowering growth and offering a competitive edge.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Software Technology"
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
            { value: "100+", label: "Projects Completed" },
            { value: "20+", label: "Years in Business" },
            { value: "35+", label: "Expert Consultants" },
            { value: "98%", label: "Client Satisfaction" },
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
                <h3 className="text-3xl font-bold text-[#6442FA] mb-2">{stat.value}</h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Software Development Services Section */}
      <section ref={caseStudiesRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#6442FA] mb-10 text-center"
          >
            Our Software Development Services in India
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "IT Strategy & Planning",
                description:
                  "As a top Software Development Company in India, our IT strategy and planning services align your technology with business goals. We create a roadmap for your IT infrastructure, supporting both short-term efficiency and long-term growth.",
              },
              {
                title: "IT Budgeting",
                description:
                  "Our software development agency offers expert IT budgeting, helping you control costs while maximizing returns. We work closely with you to prioritize investments, ensuring financial health and technological advancement.",
              },
              {
                title: "Security Risk Assessments",
                description:
                  "Security is paramount in today’s digital landscape. Our custom software development includes thorough risk assessments to identify vulnerabilities, implement robust protocols, and protect your business from cyber threats.",
              },
              {
                title: "Cloud & Data Migration",
                description:
                  "Our software development services ensure seamless cloud and data migration with minimal downtime. We help you leverage cloud technologies, enhancing productivity and scalability for your operations.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-gray-900/50 rounded-lg p-6 overflow-hidden border border-gray-800/50 transition-all duration-300 ease-in-out hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 text-justify">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#6442FA] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 text-justify"
          >
            <p className="text-gray-300">
              Our software development services are designed to empower businesses with scalable, innovative solutions that drive efficiency and align with your strategic objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Empower Your Business Section */}
      <section ref={optimizeRef} className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={optimizeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 flex justify-center"
          >
            <Image
              src="https://images.unsplash.com/photo-1581089786257-d34fe7d9bff6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Software Performance"
              width={550}
              height={350}
              className="rounded-lg shadow-lg mr-4"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={optimizeInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0 space-y-6 text-justify"
          >
            <h3 className="text-2xl md:text-3xl font-light text-[#6442FA] mb-6">
              Delivered World-Class Software Solutions for Clients from 10+ Countries
            </h3>
            <p className="text-lg text-gray-300">
              Tamar Software, a leading Software Development Company in India, empowers businesses with advanced IT solutions and custom software development. With nearly 20 years of experience, we’ve delivered world-class applications to clients across more than 10 countries, integrating cutting-edge technologies to drive growth and optimize efficiency.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Whether you need security enhancements, cloud migration, or data analytics, our software development agency ensures seamless operations with minimal disruptions. Our commitment to exceptional results—reducing costs and improving performance—has earned us a reputation as a trusted partner for businesses seeking scalable, future-proof solutions.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Our team of experts works closely with you to transform your business, delivering personalized support and innovative software that keeps you ahead in today’s competitive market. Partner with Tamar Software to unlock your full potential with technology-driven success.
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

      {/* Software Development Capabilities Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#6442FA] mb-10 text-center"
          >
            Our Software Development Capabilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Assessment",
                description:
                  "We conduct thorough assessments including current state analysis, risk evaluation, technology alignment, performance metrics, stakeholder interviews, and provide detailed recommendations and roadmaps.",
              },
              {
                title: "Planning",
                description:
                  "Our planning process involves goal setting, stakeholder engagement, technology alignment, budgeting, risk management, and detailed documentation to ensure a solid foundation for success.",
              },
              {
                title: "Implementation",
                description:
                  "From project kickoff to resource allocation, system configuration, data migration, integration, testing, training, and go-live support, we handle every step of implementation with precision.",
              },
              {
                title: "Support",
                description:
                  "Our ongoing support includes helpdesk services, technical assistance, training, monitoring, updates, patches, feedback collection, and incident management to keep your systems running smoothly.",
              },
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-gray-900/50 rounded-lg p-6 overflow-hidden border border-gray-800/50 transition-all duration-300 ease-in-out hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 text-justify">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#6442FA] transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {capability.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={caseStudiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 text-justify"
          >
            <p className="text-gray-300">
              Our capabilities reflect our commitment to delivering end-to-end software development services that empower businesses with reliable, scalable, and innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}