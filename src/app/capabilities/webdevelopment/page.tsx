"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Code, CheckCircle, Users, Star, ArrowRight } from "lucide-react";

// Define TechCategory type
type TechCategory = {
  name: string;
  icon: string | undefined;
};

export default function WebDevelopmentPage() {
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Animate when in view
  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Handle window resize
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
    { icon: Code, value: "100+", label: "Websites Delivered" },
    { icon: CheckCircle, value: "20+", label: "Years of Experience" },
    { icon: Users, value: "35+", label: "Web Developers" },
    { icon: Star, value: "98%", label: "Client Satisfaction" },
  ];

  const industries = [
    "Finance",
    "Healthcare",
    "E-commerce",
    "Education",
    "Hospitality",
    "Media & Entertainment",
    "Retail",
    "Telecommunication",
  ];

  const services = [
    {
      title: "Custom Web Development",
      description:
        "Tamar Software offers tailored web solutions as a leading Web Development Company in India, ensuring mobile-friendly and SEO-optimized websites that help your business stand out.",
    },
    {
      title: "E-commerce Development",
      description:
        "We build robust e-commerce platforms with seamless user experiences, including secure payment gateways and responsive designs for businesses of all sizes.",
    },
    {
      title: "Web Application Development",
      description:
        "Our team creates scalable web applications that enhance performance and accessibility, using modern frameworks to meet your business needs.",
    },
    {
      title: "Support & Maintenance",
      description:
        "Rely on us for ongoing support and maintenance to keep your website running smoothly with regular updates and performance optimization.",
    },
  ];

  const developmentProcess = [
    {
      title: "Planning & Analysis",
      description: "We assess your needs",
      icon: "📋",
      content: "We understand your goals and create a strategic roadmap for your project.",
    },
    {
      title: "Design",
      description: "Crafting intuitive interfaces",
      icon: "🎨",
      content: "Our designers create user-friendly and visually appealing layouts.",
    },
    {
      title: "Development",
      description: "Building robust solutions",
      icon: "💻",
      content: "Developers write clean, scalable code using best practices.",
    },
    {
      title: "Testing & Deployment",
      description: "Ensuring quality and launch",
      icon: "✅",
      content: "We test thoroughly and deploy with minimal downtime.",
    },
    {
      title: "Maintenance",
      description: "Ongoing support",
      icon: "🔧",
      content: "We provide continuous updates to keep your website running smoothly.",
    },
  ];

  const whyChooseTamar = [
    {
      title: "Expertise",
      description: "Over 20 years of experience ensures high-quality web development.",
      icon: "🏆",
    },
    {
      title: "Customization",
      description: "We deliver tailored websites that align with your brand and goals.",
      icon: "🎯",
    },
    {
      title: "Technology",
      description: "We use the latest tools to build modern, future-proof solutions.",
      icon: "⚙️",
    },
    {
      title: "Support",
      description: "Dedicated support at every stage guarantees your success.",
      icon: "🤝",
    },
  ];

  const hireBenefits = [
    {
      title: "Meet Your Requirements",
      description: "We provide staff compatible with your company’s needs.",
      icon: "👍",
    },
    {
      title: "Experienced Teams",
      description: "Our teams bring years of expertise to deliver exceptional results.",
      icon: "📅",
    },
    {
      title: "Timely Delivery",
      description: "We deliver projects on time, adhering to strict deadlines.",
      icon: "⏰",
    },
    {
      title: "Transparency",
      description: "We ensure complete openness with regular updates.",
      icon: "👀",
    },
    {
      title: "NDA Agreement",
      description: "Data protection through an NDA ensures confidentiality.",
      icon: "📜",
    },
  ];

  const techLogos: TechCategory[] = [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1200px-AWS_Simple_Icons_AWS_Cloud.svg.png" },
  ];

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  return (
    <div className="bg-black text-white min-h-screen mt-24">
      <Head>
        <title>Best Web Development Company in India | Tamar Software</title>
        <meta
          name="description"
          content="Tamar Software is a leading Web Development Company in India offering Mobile and SEO friendly web development services for small to large size businesses."
        />
        <meta
          name="keywords"
          content="Web Development Company in India, web development agency in India, website development company in India, custom web development"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-7xl">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl font-light text-[#4F45E4]">Best Web Development Company in India</h1>
              <div className="space-y-3 md:space-y-4 text-sm sm:text-base">
                <p>
                  Tamar Software is a premier Web Development Company in India, delivering mobile-friendly and SEO-optimized websites for businesses of all sizes. With nearly two decades of experience, we craft custom web solutions to drive growth and enhance your online presence.
                </p>
                <p>
                  Our expert team collaborates closely with you to create websites that resonate with your audience, ensuring scalability, performance, and security. Choose Tamar Software to elevate your brand with cutting-edge technology and unmatched expertise.
                </p>
              </div>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 inline-flex items-center px-6 py-2 bg-[#4F45E4] text-white rounded-md hover:bg-[#4F45E4]/90 transition-colors duration-300 shadow-md"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
              <div className="relative w-full max-w-md h-64 sm:h-72 md:h-80">
                <Image
                  src="/web.jpg?height=400&width=500"
                  alt="Web Development Services"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Our Full-Stack Website Development Services */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-[#4F45E4] text-center"
          >
            Our Full-Stack Website Development Services
          </motion.h2>
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative p-4 sm:p-5 bg-gray-900/50 rounded-lg border border-gray-800/50 transition-all duration-300 ease-in-out hover:bg-[#4F45E4]/10 hover:border-[#4F45E4]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-[#4F45E4]/10 rounded-full -translate-x-8 sm:-translate-x-12 -translate-y-8 sm:-translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-4 sm:mt-6 text-sm sm:text-base text-center">
            <p>
              At Tamar Software, we cover every aspect of website creation, ensuring your site excels in functionality and aesthetics. Our solutions are responsive, secure, and optimized for performance and SEO.
            </p>
          </motion.div>
        </motion.section>

        {/* Our Web Development Technology Competency */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-light mb-2 sm:mb-4 text-[#4F45E4] text-center"
          >
            Our Web Development Technology Competency
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-center text-sm sm:text-base mb-6 sm:mb-8">
            We leverage advanced technologies to deliver cutting-edge web solutions for your brand.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 justify-items-center"
          >
            {techLogos.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center bg-gray-900/50 p-4 rounded-lg border border-gray-800/50 hover:border-[#4F45E4] hover:bg-[#4F45E4]/10 transition-all duration-300 w-full max-w-[120px] h-[120px]"
              >
                <div className="relative w-12 h-12 mb-2">
                  {tech.icon && (
                    <Image
                      src={tech.icon || "/placeholder.svg"}
                      alt={`${tech.name} logo`}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm text-center font-medium">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Our Process */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-[#4F45E4] text-center"
          >
            Our Web Development Journey
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8"
          >
            {developmentProcess.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="group relative p-6 bg-gray-900/50 rounded-lg border border-gray-800/50 transition-all duration-300 ease-in-out hover:bg-[#4F45E4]/10 hover:border-[#4F45E4] hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2 flex flex-col items-center justify-between h-[280px]"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#4F45E4]/10 rounded-full -translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#4F45E4]/20 text-[#4F45E4] text-2xl">
                    {step.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 group-hover:text-gray-200 transition-colors duration-300">
                    {step.description}
                  </p>
                  <p className="text-gray-500 text-xs group-hover:text-gray-300 transition-colors duration-300">
                    {step.content}
                  </p>
                </div>
                <div className="absolute top-2 left-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 text-sm font-bold">
                  {index + 1}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Hire Our Dedicated Web Development Team */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16 bg-gradient-to-b from-gray-900 to-black rounded-xl py-8 sm:py-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 text-[#4F45E4] text-center"
          >
            Hire Our Dedicated Web Development Team
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 max-w-5xl mx-auto"
          >
            {hireBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="group relative p-4 sm:p-5 bg-gray-800/50 rounded-lg border border-gray-700/50 transition-all duration-300 ease-in-out hover:bg-[#4F45E4]/10 hover:border-[#4F45E4]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-[#4F45E4]/10 rounded-full -translate-x-8 sm:-translate-x-12 -translate-y-8 sm:-translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#4F45E4]/20 text-[#4F45E4] text-2xl">
                    {benefit.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold mb-2 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{benefit.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-8 sm:mt-12 text-sm sm:text-base text-center">
            <p>
              Hire a dedicated team from Tamar Software to get personalized attention and expertise, ensuring exceptional results on time.
            </p>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-flex items-center px-6 py-2 bg-[#4F45E4] text-white rounded-md hover:bg-[#4F45E4]/90 transition-colors duration-300 shadow-md"
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
          className="mb-12 md:mb-16 py-8 sm:py-12 bg-gradient-to-b from-gray-900 to-black rounded-xl"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 sm:mb-12 text-[#4F45E4] text-center"
          >
            Our Achievements
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto text-justify"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative flex flex-col items-center p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:bg-[#4F45E4]/20 hover:border-[#4F45E4] hover:shadow-[0_0_20px_rgba(79,69,228,0.3)]"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <div className="relative z-10">
                  <stat.icon className="h-10 w-10 sm:h-12 sm:w-12 text-[#4F45E4] mb-4" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-300 text-sm sm:text-base font-medium">{stat.label}</p>
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
            className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 text-[#4F45E4] text-center"
          >
            Why Choose Tamar Software?
          </motion.h2>
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {whyChooseTamar.map((reason) => (
              <div
                key={reason.title}
                className="group relative p-4 sm:p-5 bg-gray-900/50 rounded-lg border border-gray-800/50 transition-all duration-300 ease-in-out hover:bg-[#4F45E4]/10 hover:border-[#4F45E4]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-[#4F45E4]/10 rounded-full -translate-x-8 sm:-translate-x-12 -translate-y-8 sm:-translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10 flex items-start">
                  <span className="text-2xl mr-3">{reason.icon}</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-200 transition-colors duration-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Industries */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16 py-8 sm:py-12 bg-gradient-to-b from-gray-900 to-black rounded-xl"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 sm:mb-12 text-[#4F45E4] text-center"
          >
            Industries We Serve
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative flex items-center justify-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:bg-[#4F45E4]/20 hover:border-[#4F45E4] hover:shadow-[0_0_20px_rgba(79,69,228,0.3)]"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <div className="relative z-10 flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#4F45E4] mr-2 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-white group-hover:text-[#4F45E4] transition-colors duration-300">
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
        </motion.section>
      </main>
    </div>
  );
}