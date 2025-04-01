"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Code, CheckCircle, Users, Star, ArrowRight } from "lucide-react";

export default function MobileDevelopmentPage() {
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stats = [
    { icon: Code, value: "50+", label: "Apps Delivered" },
    { icon: CheckCircle, value: "20+", label: "Years of Experience" },
    { icon: Users, value: "25+", label: "Mobile Developers" },
    { icon: Star, value: "97%", label: "Client Satisfaction" },
  ];

  const industries = [
    "Finance",
    "Healthcare",
    "E-commerce",
    "Education",
    "Gaming",
    "Travel",
    "Retail",
    "Logistics",
  ];

  const services = [
    {
      title: "Android App Development",
      description:
        "As a leading Mobile App Development Company in India, we specialize in building high-performance Android apps using Kotlin and Java. Our solutions are tailored to meet your business needs, ensuring seamless functionality and user engagement on all Android devices.",
    },
    {
      title: "iOS App Development",
      description:
        "Our Mobile App Development Company in India excels in creating premium iOS apps with Swift and Objective-C. We focus on delivering a seamless user experience on Apple devices, ensuring your app stands out in the App Store with robust performance and stunning design.",
    },
    {
      title: "Hybrid App Development",
      description:
        "We offer hybrid app development services using React Native and Flutter, providing cost-effective solutions that work across both Android and iOS platforms. Our Mobile App Development Company in India ensures your app delivers consistent performance on all devices.",
    },
    {
      title: "UI/UX Design",
      description:
        "Our expert designers at Tamar Software, a top Mobile App Development Company in India, craft intuitive and visually appealing interfaces. We prioritize user engagement and satisfaction, ensuring your app’s design enhances the overall user experience.",
    },
    {
      title: "Support & Maintenance",
      description:
        "Tamar Software provides ongoing support and maintenance to keep your app updated and running smoothly. As a trusted Mobile App Development Company in India, we ensure your app remains secure and compatible with the latest OS updates.",
    },
  ];

  const developmentProcess = [
    {
      title: "Requirement Analysis",
      description: "Understanding your vision",
      icon: "🔍",
      content: "We start by analyzing your business goals, target audience, and app requirements to create a tailored development plan that ensures success.",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive interfaces",
      icon: "🎨",
      content: "Our design team creates user-friendly and visually appealing interfaces, focusing on enhancing user engagement and satisfaction.",
    },
    {
      title: "Development",
      description: "Building your app",
      icon: "💻",
      content: "Our developers use the latest technologies to code your app, ensuring it is scalable, secure, and optimized for performance.",
    },
    {
      title: "Testing",
      description: "Ensuring quality",
      icon: "✅",
      content: "We conduct rigorous testing to identify and fix bugs, ensuring your app performs flawlessly across all devices and platforms.",
    },
    {
      title: "Deployment",
      description: "Launching your app",
      icon: "🚀",
      content: "We deploy your app on the App Store and Google Play, ensuring a smooth launch with minimal downtime and maximum visibility.",
    },
    {
      title: "Maintenance",
      description: "Ongoing support",
      icon: "🔧",
      content: "Post-launch, we provide continuous updates and support to keep your app running smoothly and aligned with the latest trends.",
    },
  ];

  const benefits = [
    {
      title: "Cost-Effective Solutions",
      description: "We deliver high-quality mobile apps within your budget, ensuring you get the best value for your investment.",
      icon: "💰",
    },
    {
      title: "Faster Time-to-Market",
      description: "Our streamlined development process ensures your app is launched quickly, helping you reach your audience faster.",
      icon: "⏰",
    },
    {
      title: "Scalable Apps",
      description: "We build apps that can grow with your business, supporting increased user demand and new features seamlessly.",
      icon: "📈",
    },
    {
      title: "User-Centric Design",
      description: "Our apps are designed with the user in mind, ensuring an intuitive and engaging experience that drives retention.",
      icon: "👤",
    },
    {
      title: "Secure Development",
      description: "We prioritize security, implementing best practices to protect your app and user data from potential threats.",
      icon: "🔒",
    },
  ];

  const whyChooseTamar = [
    {
      title: "Expertise",
      description: "With over 20 years of experience, we bring unparalleled expertise to mobile app development, ensuring top-quality results.",
      icon: "🏆",
    },
    {
      title: "Customization",
      description: "We create tailored apps that align with your business goals, providing a unique experience for your users.",
      icon: "🎯",
    },
    {
      title: "Technology",
      description: "Our team leverages the latest tools and frameworks to build modern, future-proof mobile apps.",
      icon: "⚙️",
    },
    {
      title: "Support",
      description: "We offer dedicated support at every stage, from ideation to post-launch, ensuring your app’s success.",
      icon: "🤝",
    },
  ];

  const techStack = [
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
    { name: "Objective-C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg" },
    { name: "Xcode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-plain.svg" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1200px-AWS_Simple_Icons_AWS_Cloud.svg.png" },
  ];

  const isMobile = windowSize.width < 640;
  const isTablet = windowSize.width >= 640 && windowSize.width < 1024;

  return (
    <div className="bg-black text-white min-h-screen mt-16 md:mt-24">
      <Head>
        <title>Best Mobile App Development Company in India | Tamar Software</title>
        <meta
          name="description"
          content="Tamar Software is one of the best Mobile App Development Company in India and we offers android, iOS and hybrid mobile app development services in India and USA. For more call now!"
        />
        <meta
          name="keywords"
          content="app development company in India, mobile app developers in India, Hire App developer in India, Custom Mobile App Development Company"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-7xl">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12"
          >
            <div className="w-full lg:w-1/2 space-y-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#4F45E4]">
                Best Mobile App Development Company in India
              </h1>
              <div className="space-y-3 text-sm md:text-base">
                <p>
                  Tamar Software is a premier Mobile App Development Company in India, specializing in Android, iOS, and hybrid app development services across India and the USA. With over 20 years of experience, we deliver custom mobile apps that drive business growth and enhance user engagement.
                </p>
                <p>
                  Our expert team of mobile app developers in India works closely with you to understand your vision, ensuring your app is user-friendly, scalable, and secure. Whether you need a native app for iOS or Android, or a cross-platform solution, we have the expertise to bring your ideas to life.
                </p>
                <p>
                  As a trusted Custom Mobile App Development Company, we prioritize quality and innovation, using the latest technologies to create apps that stand out in the market. Partner with Tamar Software to transform your business with a mobile app that delivers measurable results.
                </p>
              </div>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-[#4F45E4] text-white rounded-md hover:bg-[#4F45E4]/90 transition-colors duration-300 shadow-md text-sm md:text-base"
              >
                Call Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-96">
                <Image
                  src="/mobile.jpg?height=400&width=500"
                  alt="Mobile App Development Services"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Our Mobile App Development Services */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-[#4F45E4] text-center"
          >
            Our Mobile App Development Services
          </motion.h2>
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative p-4 bg-gray-900/50 rounded-lg border border-gray-800/50 transition-all duration-300 hover:bg-[#4F45E4]/10 hover:border-[#4F45E4]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#4F45E4]/10 rounded-full -translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-4 md:mt-6 text-sm md:text-base text-center space-y-4">
            <p>
              At Tamar Software, we provide end-to-end mobile app development services, ensuring your app is functional, user-friendly, and optimized for performance across platforms. Our team leverages the latest technologies to deliver apps that meet your business goals.
            </p>
            <p>
              Whether you’re a startup or an established enterprise, our custom mobile app development services are designed to help you succeed in the competitive mobile market. We focus on creating apps that are not only visually appealing but also technically robust.
            </p>
          </motion.div>
        </motion.section>

        {/* Our Mobile App Development Technology Stack */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-[#4F45E4] text-center"
          >
            Our Mobile App Development Technology Stack
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-center text-sm md:text-base mb-6 md:mb-8">
            We leverage a wide range of technologies to build innovative and high-performance mobile apps for your business.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 justify-items-center"
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center bg-gray-900/50 p-3 md:p-4 rounded-lg border border-gray-800/50 hover:border-[#4F45E4] hover:bg-[#4F45E4]/10 transition-all duration-300 w-full max-w-[100px] md:max-w-[120px] h-[100px] md:h-[120px]"
              >
                <div className="relative w-10 md:w-12 h-10 md:h-12 mb-2">
                  {tech.icon && (
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <p className="text-gray-300 text-xs md:text-sm text-center font-medium">{tech.name}</p>
              </div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-4 md:mt-6 text-sm md:text-base text-center space-y-4">
            <p>
              Our expertise in technologies like Swift, Objective-C, and Xcode ensures we deliver top-notch iOS apps, while Kotlin and React Native enable us to build robust Android and hybrid apps. We also integrate backend solutions with Node.js and MongoDB for seamless functionality.
            </p>
            <p>
              By using cloud services like AWS and Firebase, we ensure your app is scalable and secure, providing a reliable experience for your users. Our technology stack is designed to meet the diverse needs of modern mobile app development.
            </p>
          </motion.div>
        </motion.section>

        {/* Our Mobile Application Development Process */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-[#4F45E4] text-center"
          >
            Our Mobile Application Development Process
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          >
            {developmentProcess.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="group relative p-4 bg-gray-900/50 rounded-lg border border-gray-800/50 transition-all duration-300 hover:bg-[#4F45E4]/10 hover:border-[#4F45E4] hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2 min-h-[240px]"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#4F45E4]/10 rounded-full -translate-x-6 -translate-y-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 flex flex-col items-center h-full">
                  <div className="absolute top-2 left-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 mt-8 mb-3 rounded-full bg-[#4F45E4]/20 text-[#4F45E4] text-xl">
                    {step.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-white group-hover:text-[#4F45E4] transition-colors duration-300 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2 group-hover:text-gray-200 transition-colors duration-300 text-center">
                    {step.description}
                  </p>
                  <p className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors duration-300 text-center flex-grow">
                    {step.content}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-6 md:mt-8 text-sm md:text-base text-center space-y-4 px-4">
            <p>
              Our structured development process ensures transparency and efficiency, delivering a high-quality app that meets your expectations. We keep you informed at every step, ensuring a smooth and collaborative experience.
            </p>
            <p>
              From ideation to launch, we focus on creating an app that aligns with your business objectives while providing a seamless user experience. Our post-launch support ensures your app remains up-to-date and competitive.
            </p>
          </motion.div>
        </motion.section>

        {/* Benefits of Using App Development Solution */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16 bg-gradient-to-b from-gray-900 to-black rounded-xl py-6 md:py-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 md:mb-8 text-[#4F45E4] text-center"
          >
            Benefits of Using App Development Solution
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto px-4"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="group relative p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 transition-all duration-300 hover:bg-[#4F45E4]/10 hover:border-[#4F45E4]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#4F45E4]/10 rounded-full -translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#4F45E4]/20 text-[#4F45E4] text-2xl">
                    {benefit.icon}
                  </div>
                  <h4 className="text-base md:text-lg font-semibold mb-2 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm">{benefit.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-6 md:mt-12 text-sm md:text-base text-center space-y-4">
            <p>
              By choosing Tamar Software, you gain access to these benefits, ensuring your mobile app is a powerful tool for business growth. Our solutions are designed to help you achieve your goals while providing an exceptional user experience.
            </p>
            <p>
              We understand the importance of a well-designed app in today’s digital landscape, and our team is committed to delivering a product that exceeds your expectations. Let us help you create an app that drives engagement and success.
            </p>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-[#4F45E4] text-white rounded-md hover:bg-[#4F45E4]/90 transition-colors duration-300 shadow-md text-sm md:text-base"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Stats */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16 py-6 md:py-12 bg-gradient-to-b from-gray-900 to-black rounded-xl"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-12 text-[#4F45E4] text-center"
          >
            Our Achievements
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto px-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative flex flex-col items-center p-4 md:p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 transition-all duration-300 hover:bg-[#4F45E4]/20 hover:border-[#4F45E4]"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <div className="relative z-10">
                  <stat.icon className="h-8 md:h-12 w-8 md:w-12 text-[#4F45E4] mb-4" />
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300 text-sm md:text-base font-medium">{stat.label}</p>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-[#4F45E4] text-center"
          >
            Why Choose Tamar Software?
          </motion.h2>
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {whyChooseTamar.map((reason) => (
              <div
                key={reason.title}
                className="group relative p-4 bg-gray-900/50 rounded-lg border border-gray-800/50 transition-all duration-300 hover:bg-[#4F45E4]/10 hover:border-[#4F45E4]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#4F45E4]/10 rounded-full -translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 flex items-start">
                  <span className="text-2xl mr-3">{reason.icon}</span>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-2 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-4 md:mt-6 text-sm md:text-base text-center space-y-4">
            <p>
              Choosing Tamar Software means partnering with a team that is committed to your success. We combine technical expertise with a client-centric approach to deliver mobile apps that drive results.
            </p>
            <p>
              Our focus on quality, innovation, and customer satisfaction makes us the ideal choice for businesses looking to create impactful mobile apps. Let us help you achieve your digital goals with a custom app solution.
            </p>
          </motion.div>
        </motion.section>

        {/* Industries */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16 py-6 md:py-12 bg-gradient-to-b from-gray-900 to-black rounded-xl"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-12 text-[#4F45E4] text-center"
          >
            Industries We Serve
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto px-4"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative flex items-center justify-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 transition-all duration-300 hover:bg-[#4F45E4]/20 hover:border-[#4F45E4]"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <div className="relative z-10 flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#4F45E4] mr-2 flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium text-white group-hover:text-[#4F45E4] transition-colors duration-300">
                    {industry}
                  </span>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-4 md:mt-6 text-sm md:text-base text-center space-y-4">
            <p>
              We serve a wide range of industries with customized mobile app solutions, addressing unique challenges and driving success. Our industry-specific expertise ensures your app meets the needs of your target audience.
            </p>
            <p>
              Whether you’re in e-commerce, healthcare, or gaming, our team has the experience to deliver an app that enhances your business operations and user engagement. Partner with us to create a mobile solution that makes an impact.
            </p>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}