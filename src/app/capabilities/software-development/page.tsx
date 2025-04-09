"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Code, CheckCircle, Users, Star, ArrowRight } from "lucide-react";

// Define TechCategory and TechStack types
type TechCategory = {
  name: string;
  icon: string | undefined;
}[];

interface TechStack {
  Frontend: TechCategory;
  Backend: TechCategory;
  MobileApp: TechCategory;
  Cloud: TechCategory;
  Databases: TechCategory;
}

type TechStackKey = keyof TechStack;

export default function SoftwareDevelopmentPage() {
  const [activeTab, setActiveTab] = React.useState<TechStackKey>("Frontend");
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });
  const [activeStep, setActiveStep] = React.useState(0);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Auto-rotate steps (optional, kept for consistency but not used in card layout)
  React.useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isInView) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % developmentProcess.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isInView]);

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
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const stats = [
    { icon: Code, value: "100+", label: "Projects Completed" },
    { icon: CheckCircle, value: "20+", label: "Years in Business" },
    { icon: Users, value: "35+", label: "Developers" },
    { icon: Star, value: "98%", label: "Satisfaction Rate" },
  ];

  const industries = [
    "Finance",
    "Healthcare",
    "Infrastructure & Construction",
    "Automobile",
    "Hospitality",
    "Media & Entertainment",
    "Retail",
    "Telecommunication",
  ];

  const services = [
    {
      title: "Custom Software Development",
      description:
        "At Tamar Software, a leading Software Development Company in India, you can expect custom software development services tailored to your business needs. We excel in providing solutions that drive efficiency and growth.",
    },
    {
      title: "Enterprise Software Development",
      description:
        "As a trusted Software Development Company in India, we provide robust enterprise solutions that streamline operations and support business growth with secure, scalable software development services.",
    },
    {
      title: "Cloud & Mobile App Solutions",
      description:
        "Stay competitive with our cloud and mobile app solutions. Tamar Software, a top Software Development Company in India, delivers user-centric applications to enhance performance and accessibility.",
    },
    {
      title: "Software Support & Maintenance",
      description:
        "Rely on our software development agency for ongoing support and maintenance. We ensure your systems run smoothly with comprehensive IT services and solutions.",
    },
  ];

  const developmentProcess = [
    {
      title: "Analysis",
      description: "We thoroughly examine requirements and goals",
      icon: "🔍",
      content: "Our team conducts in-depth research to understand project scope and user needs.",
    },
    {
      title: "Planning",
      description: "Strategic roadmap creation",
      icon: "📋",
      content: "We develop a detailed timeline and allocate resources efficiently.",
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
      title: "Testing",
      description: "Quality assurance process",
      icon: "✅",
      content: "Rigorous testing ensures functionality and performance.",
    },
    {
      title: "Deployment",
      description: "Smooth launch execution",
      icon: "🚀",
      content: "We deploy the solution with minimal downtime and optimal performance.",
    },
    {
      title: "Maintenance",
      description: "Ongoing support & updates",
      icon: "🔧",
      content: "Continuous monitoring and improvements keep your solution running smoothly.",
    },
    {
      title: "Feedback & Optimization", // Added new step
      description: "Enhancing based on user input",
      icon: "📈",
      content: "We gather user feedback and optimize the system for better performance and user experience.",
    },
  ];

  const whyChooseTamar = [
    {
      title: "Proven Expertise",
      description:
        "With over 20 years of experience, we bring deep industry knowledge and technical proficiency to every project.",
      icon: "🏆",
    },
    {
      title: "Tailored Solutions",
      description:
        "We customize every solution to fit your unique business needs, ensuring maximum impact and efficiency.",
      icon: "🎯",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "Leveraging the latest tools and frameworks, we deliver innovative and future-proof software.",
      icon: "⚙️",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We collaborate closely to exceed expectations and deliver on time.",
      icon: "🤝",
    },
  ];

  const techLogos = [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1200px-AWS_Simple_Icons_AWS_Cloud.svg.png" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  ];

  const techStack: TechStack = {
    Frontend: [
      { name: "React.js", icon: techLogos.find((tech) => tech.name === "React.js")?.icon },
      { name: "Next.js", icon: techLogos.find((tech) => tech.name === "Next.js")?.icon },
      { name: "Vue.js", icon: techLogos.find((tech) => tech.name === "Vue.js")?.icon },
      { name: "Angular", icon: techLogos.find((tech) => tech.name === "Angular")?.icon },
      { name: "Tailwind CSS", icon: techLogos.find((tech) => tech.name === "Tailwind CSS")?.icon },
      { name: "TypeScript", icon: techLogos.find((tech) => tech.name === "TypeScript")?.icon },
    ],
    Backend: [
      { name: "Node.js", icon: techLogos.find((tech) => tech.name === "Node.js")?.icon },
      { name: "Python", icon: techLogos.find((tech) => tech.name === "Python")?.icon },
      { name: "Go", icon: techLogos.find((tech) => tech.name === "Go")?.icon },
      { name: "FastAPI", icon: techLogos.find((tech) => tech.name === "FastAPI")?.icon },
      { name: "Express.js", icon: techLogos.find((tech) => tech.name === "Express.js")?.icon },
      { name: "NestJS", icon: techLogos.find((tech) => tech.name === "NestJS")?.icon },
    ],
    MobileApp: [
      { name: "React Native", icon: techLogos.find((tech) => tech.name === "React Native")?.icon },
      { name: "Flutter", icon: techLogos.find((tech) => tech.name === "Flutter")?.icon },
      { name: "Firebase", icon: techLogos.find((tech) => tech.name === "Firebase")?.icon },
    ],
    Cloud: [
      { name: "AWS", icon: techLogos.find((tech) => tech.name === "AWS")?.icon },
      { name: "Google Cloud", icon: techLogos.find((tech) => tech.name === "Google Cloud")?.icon },
      { name: "Azure", icon: techLogos.find((tech) => tech.name === "Azure")?.icon },
      { name: "Docker", icon: techLogos.find((tech) => tech.name === "Docker")?.icon },
      { name: "Kubernetes", icon: techLogos.find((tech) => tech.name === "Kubernetes")?.icon },
      { name: "Terraform", icon: techLogos.find((tech) => tech.name === "Terraform")?.icon },
    ],
    Databases: [
      { name: "PostgreSQL", icon: techLogos.find((tech) => tech.name === "PostgreSQL")?.icon },
      { name: "MongoDB", icon: techLogos.find((tech) => tech.name === "MongoDB")?.icon },
      { name: "Firebase", icon: techLogos.find((tech) => tech.name === "Firebase")?.icon },
    ],
  };

  // Responsive calculations
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Best Software Development Company in India | Tamar Software</title>
        <meta
          name="description"
          content="Tamar Software is a Best software development company in India with experience of almost two decades in developing new-edge applications for mobile and web platforms."
        />
        <meta
          name="keywords"
          content="Software Development Company in India, custom software development, software development agency, software development services"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="relative h-16 flex items-center justify-center">
        {/* Add header content here if needed */}
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-7xl">
        {/* 1st Position - Custom Software Development Services */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl font-light text-[#4F45E4]">Custom Software Development Services</h1>
              <div className="space-y-3 md:space-y-4 text-sm sm:text-base">
                <p>
                  Tamar Software specializes in creating bespoke custom software solutions as the Best Software
                  Development Company in India. With nearly two decades of experience, we understand the challenges of
                  off-the-shelf software that may not align with your specific needs. Our custom software development
                  services are designed to enhance efficiency, optimize operations, and drive innovation for businesses
                  across various sectors.
                </p>
                <p>
                  Our team of dedicated professionals works closely with you to deliver tailored solutions that meet
                  your unique business goals. As a leading Software Development Company in India, we aim to be your
                  extended partner, providing not just software but strategic IT solutions to propel your business
                  forward in the competitive digital landscape.
                </p>
                <p className="font-semibold">
                  Trust Tamar Software to transform your vision into reality with cutting-edge technology and
                  unparalleled expertise.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
              <div className="relative w-full max-w-md h-64 sm:h-72 md:h-80">
                <Image
                  src="/software.jpg?height=400&width=500"
                  alt="Custom Software Development Services"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 2nd Position - Delivered World-Class Software Solutions */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-sm sm:text-base">
              <h3 className="text-2xl sm:text-3xl font-light text-[#4F45E4]">
                Delivered World-Class Software Solutions for Clients from 10+ Countries
              </h3>
              <div className="space-y-3 md:space-y-4">
                <p>
                  Tamar Software has earned its reputation as a top Software Development Company in India by delivering
                  world-class software solutions to clients in over 10 countries. We cater to industries like
                  manufacturing, retail, finance, and healthcare, providing IT services and solutions tailored to drive
                  innovation and efficiency.
                </p>
                <p>
                  Whether you need an agile mobile application or a robust enterprise system, our team of seasoned
                  professionals excels in crafting exceptional custom software solutions. With over 100 projects
                  completed and a 98% satisfaction rate, we take pride in our ability to meet diverse business needs
                  globally.
                </p>
                <p>
                  Our success stems from our dedicated experts who bring creativity and technical prowess to every
                  project, ensuring Tamar Software remains a leader in the industry.
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
                  src="/software2.jpg?height=500&width=600"
                  alt="World-Class Software Solutions"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 3rd Position - Our Software Development Services in India */}
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
            Our Software Development Services in India
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
                  <h3 className="text-base sm:text-lg font-light mb-2 sm:mb-3 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
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
          <motion.div variants={itemVariants} className="mt-4 sm:mt-6 text-sm sm:text-base">
            <p>
              Our software development services are crafted to meet the evolving needs of businesses worldwide. From
              custom applications to enterprise solutions, Tamar Software ensures seamless integration and exceptional
              performance.
            </p>
          </motion.div>
        </motion.section>

        {/* 4th Position - Our Software Development Technologies */}
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
            Our Software Development Technologies
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-center text-sm sm:text-base mb-6 sm:mb-8">
            We pioneer in advanced technology stack to craft cutting-edge technology solutions for your brand.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8"
          >
            {Object.keys(techStack).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TechStackKey)}
                className={`relative px-4 py-2 text-base sm:text-lg font-medium rounded-md ${
                  activeTab === tab
                    ? "bg-[#4F45E4] text-white shadow-md"
                    : "text-gray-400 hover:bg-gray-800 hover:text-[#4F45E4]"
                } transition-all duration-300`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center"
          >
            {techStack[activeTab].map((tech) => (
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

        {/* 5th Position - Our Software Development Journey (Even Format) */}
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
            Our Software Development Journey
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
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
                  <h3 className="text-lg sm:text-xl font-light mb-2 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
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

        {/* Stats Section */}
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
                <div className="relative z-10 ">
                  <stat.icon className="h-10 w-10 sm:h-12 sm:w-12  text-[#4F45E4] mb-4" />
                  <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">{stat.value}</h3>
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

        {/* 6th Position - Why Choose Tamar Software */}
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
            Why Choose Tamar Software for Software Development in India
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
                    <h3 className="text-base sm:text-lg font-light mb-2 sm:mb-3 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
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
          <motion.div variants={itemVariants} className="mt-4 sm:mt-6 text-sm sm:text-base text-center">
            <p>
              Partner with Tamar Software for unparalleled software development services in India, where innovation
              meets reliability.
            </p>
          </motion.div>
        </motion.section>

        {/* 7th Position - Industries We Serve (Redesigned) */}
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
          <motion.div variants={itemVariants} className="mt-8 sm:mt-12 text-sm sm:text-base text-center text-gray-300">
            <p>
              As a premier Software Development Company in India, Tamar Software serves a wide array of industries with
              customized solutions, addressing unique challenges and driving success.
            </p>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}