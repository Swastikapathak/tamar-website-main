"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Zap, Briefcase, ShieldCheck, Users, DollarSign, Target, Brain, Bot, Wrench, Globe } from "lucide-react";

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [whyChooseRef, whyChooseInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [rpaServicesRef, rpaServicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [providedRef, providedInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-black text-white mt-12">
      {/* Meta Tags for SEO */}
      <Head>
        <title>Best RPA Development Company in India | Tamar Software</title>
        <meta
          name="description"
          content="Tamar Software is a leading RPA solutions provider in India that simplifies how your company accesses the best of RPA, EDI, and B2B integrations."
        />
        <meta name="keywords" content="RPA development services, Custom RPA Solutions, Robotic Process Automation Services" />
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
            RPA Development Company in India
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Tamar Software stands out as the Best Software Development Company in India, specializing in cutting-edge robotic process automation (RPA) and custom software development solutions. With almost two decades of experience, we design and deliver innovative applications for mobile and web platforms, tailored to streamline business operations and enhance efficiency across diverse industries.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              As a leading Software Development Company in India, we combine advanced technology with deep expertise to boost productivity and drive digital transformation. Our software development agency offers scalable, efficient solutions that cater to specific business needs, whether it’s automating repetitive tasks, managing data, or optimizing financial processes. Trust us to deliver tangible results with our customer-centric approach.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
          >
            <Image
              src="https://images.unsplash.com/photo-1538491247542-5da27794bc65?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            { value: "20+", label: "Years of Experience" },
            { value: "35+", label: "Expert Developers" },
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

      {/* Why Choose Us Section */}
      <section ref={whyChooseRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#6442FA] mb-10 text-center"
          >
            Get Future- Ready Automated Solutions with Our RPA Development Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Rapid Deployment and ROI",
                description: "As a premier Software Development Company in India, our solutions ensure quick deployment and minimal disruption, accelerating ROI by automating repetitive tasks and boosting productivity.",
              },
              {
                icon: Briefcase,
                title: "Industry-Specific Solutions",
                description: "Our custom software development services span industries like healthcare, finance, and more, delivering tailored solutions to meet your unique business needs.",
              },
              {
                icon: ShieldCheck,
                title: "Robust Management",
                description: "Our software development agency ensures seamless deployment and governance of solutions, providing long-term reliability and management for sustained success.",
              },
              {
                icon: Users,
                title: "Customer-Centric Approach",
                description: "We prioritize your needs, delivering flexible and responsible software development services that align with your goals and enhance customer satisfaction.",
              },
              {
                icon: DollarSign,
                title: "Cost Reduction",
                description: "By automating tasks, our solutions reduce operational costs and optimize resources, making us a top choice for cost-effective software development in India.",
              },
              {
                icon: Target,
                title: "Enhanced Accuracy",
                description: "Our expertise minimizes errors in critical processes, improving precision and data integrity across all software applications we develop.",
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
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
            animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-8 text-justify"
          >
            <p className="text-gray-300">
              Tamar Software’s dedication to excellence and innovation makes us the preferred Software Development Company in India for businesses seeking reliable, high-quality solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Software Development Services Section */}
      <section ref={rpaServicesRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={rpaServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#6442FA] mb-10 text-center"
          >
            Get Future- Ready Automated Solutions with Our RPA Development Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: "Consulting and Strategy",
                description: "As a leading Software Development Company in India, we offer strategic consulting tailored to your needs, guiding you through the development journey with a roadmap for maximum ROI.",
              },
              {
                icon: Bot,
                title: "AI-Powered Development",
                description: "Our software development agency specializes in AI-driven solutions, creating smart applications that automate processes and enhance operational efficiency.",
              },
              {
                icon: Zap,
                title: "Implementation Services",
                description: "We provide end-to-end implementation services, ensuring smooth deployment of software solutions with precision and reliability across your organization.",
              },
              {
                icon: Wrench,
                title: "Maintenance and Support",
                description: "Our custom software development includes ongoing maintenance and 24/7 support, ensuring your systems remain robust and efficient over time.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={rpaServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-gray-900/50 rounded-lg p-6 overflow-hidden border border-gray-800/50 transition-all duration-300 ease-in-out hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 text-justify">
                  <service.icon className="w-8 h-8 text-[#6442FA] mb-4" />
                  <h3 className="text-xl font-light text-white mb-4 group-hover:text-[#6442FA] transition-colors duration-300">
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
            animate={rpaServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 text-justify"
          >
            <p className="text-gray-300">
              Our software development services are designed to empower businesses with innovative, scalable solutions that drive growth and efficiency across various sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Provided Software Development Services Section */}
      <section ref={providedRef} className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={providedInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 flex justify-center"
          >
            <Image
              src="https://images.unsplash.com/photo-1712238107639-46803a6c3886?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Software Solutions"
              width={550}
              height={350}
              className="rounded-lg shadow-lg mr-4"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={providedInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0 space-y-6 text-justify"
          >
            <h3 className="text-2xl md:text-3xl font-light text-[#6442FA] mb-6">
            Unleash Excellence with Our RPA Development Services
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              At Tamar Software, we’ve established ourselves as a trusted Software Development Company in India by delivering world-class software solutions to clients across more than 10 countries. Our expertise in custom software development and robotic process automation (RPA) enables us to handle repetitive tasks, manage high volumes of data, and streamline business activities with precision and efficiency.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              With nearly 20 years of experience, our software development agency excels in creating innovative applications that drive digital transformation. From mobile apps to enterprise systems, we provide solutions that enhance productivity, reduce costs, and improve accuracy, making us a reliable partner for businesses worldwide.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Our success is driven by a team of skilled professionals dedicated to exceeding client expectations. Whether it’s optimizing workflows or automating customer services, Tamar Software delivers measurable results that empower organizations to thrive in the modern market.
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