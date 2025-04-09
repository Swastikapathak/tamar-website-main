"use client";

import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { Code, CheckCircle, Users, Star, ArrowRight } from "lucide-react";

export default function AIConsultingPage() {
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
    { icon: Code, value: "60+", label: "AI Solutions Delivered" },
    { icon: CheckCircle, value: "6+", label: "Years" },
    { icon: Users, value: "15+", label: "AI Developers" },
    { icon: Star, value: "100%", label: "Client Satisfaction" },
  ];

  const industries = [
    "Finance",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Education",
    "Automotive",
    "Media",
    "Logistics",
  ];

  const services = [
    {
      title: "Generative AI",
      description:
        "As a leading AI Development Company in India, we leverage generative AI to create innovative solutions. Our AI-driven applications redefine possibilities with automation and quality, helping businesses achieve their goals.",
    },
    {
      title: "Intelligent Automation",
      description:
        "Our AI Development Company in India offers intelligent automation solutions to enhance productivity. We integrate advanced AI technologies to streamline operations, reduce human error, and automate complex processes for businesses.",
    },
    {
      title: "AI/ML Ops",
      description:
        "Tamar Software, a top AI Development Company in India, provides AI/ML Ops services for seamless deployment and management of machine learning models. We deliver scalable solutions that integrate with your existing IT infrastructure.",
    },
    {
      title: "Computer Vision",
      description:
        "We specialize in computer vision solutions as a premier AI Development Company in India. Our systems enable object detection, facial recognition, and more, allowing machines to interpret visual data effectively.",
    },
    {
      title: "Data Analytics",
      description:
        "Our AI Development Company in India transforms raw data into actionable insights. We provide comprehensive data analytics services to help businesses make informed decisions and drive growth.",
    },
    {
      title: "Natural Language Processing",
      description:
        "We offer NLP solutions to automate text analysis, conversational AI, and sentiment detection. Our expertise in sophisticated models enhances communication and operations for businesses worldwide.",
    },
  ];

  const techStack = [
    {
      category: "Text Generation",
      technologies: ["OpenAI, Grok, Gemini"],
    },
    {
      category: "Image Generation",
      technologies: ["CLIP and GPT4o (OpenAI)"],
    },
    {
      category: "Audio Generation",
      technologies: ["Gemini (Google)"],
    },
    {
      category: "Video Generation",
      technologies: ["VisualGPT (Microsoft)"],
    },
    {
      category: "Multimodal Models",
      technologies: ["Flamingo (DeepMind)"],
    },
  ];

  const deliveryProcess = [
    {
      title: "Requirement Analysis",
      description: "Understanding your needs",
      icon: "🔍",
      content: "We analyze your business goals and AI requirements to create a tailored strategy that aligns with your vision.",
    },
    {
      title: "Data Collection",
      description: "Gathering relevant data",
      icon: "📊",
      content: "We collect and preprocess high-quality data to ensure the accuracy and effectiveness of your AI solution.",
    },
    {
      title: "Model Development",
      description: "Building AI models",
      icon: "💻",
      content: "Our team develops and trains AI models using advanced technologies to meet your specific needs.",
    },
    {
      title: "Testing & Validation",
      description: "Ensuring quality",
      icon: "✅",
      content: "We rigorously test and validate the AI models to ensure they perform reliably in real-world scenarios.",
    },
    {
      title: "Deployment",
      description: "Launching your solution",
      icon: "🚀",
      content: "We deploy the AI solution into your environment, ensuring seamless integration and minimal disruption.",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing optimization",
      icon: "🔧",
      content: "We provide continuous support and updates to keep your AI solution running smoothly and up-to-date.",
    },
  ];

  const whyChooseTamar = [
    {
      title: "Expertise",
      description: "With over 6 years in AI development, we deliver cutting-edge solutions tailored to your needs.",
      icon: "🏆",
    },
    {
      title: "Innovation",
      description: "We leverage the latest AI technologies to create innovative solutions that drive business growth.",
      icon: "💡",
    },
    {
      title: "Customization",
      description: "Our AI solutions are customized to address your unique challenges and business goals.",
      icon: "🎯",
    },
    {
      title: "Support",
      description: "We provide dedicated support throughout the project lifecycle, ensuring your success.",
      icon: "🤝",
    },
  ];

  // Updated breakpoints
  const isMobile = windowSize.width < 640;
  const isTablet = windowSize.width >= 640 && windowSize.width < 1024;

  return (
    <div className="bg-black text-white min-h-screen mt-16 md:mt-24">
      <Head>
        <title>Best AI Development Company in India | Tamar Software</title>
        <meta
          name="description"
          content="Tamar Software is a leading AI company in Bangalore, India. We specialize in custom Artificial Intelligence Development Services. Contact us for AI-related"
        />
        <meta
          name="keywords"
          content="artificial intelligence software development, ai software development, Top AI development company in India, machine learning"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
                Best AI Development Company in India
              </h1>
              <div className="space-y-3 text-sm md:text-base">
                <p>
                  Tamar Software is a leading Artificial Intelligence (AI) Services Company based in Bangalore, India. As a top AI Development Company in India, we specialize in custom artificial intelligence software development, helping businesses harness the power of AI to drive innovation and growth.
                </p>
                <p>
                  With over 6 years of experience, our team of expert AI developers and consultants delivers tailored AI solutions that align with your business goals. From machine learning to natural language processing, we provide end-to-end AI services to transform your operations and enhance decision-making.
                </p>
                <p>
                  Whether you’re looking to develop AI software or need ongoing support from a reliable AI consultant, Tamar Software is your trusted partner. Contact us today to explore how our AI development services can accelerate your digital transformation.
                </p>
              </div>
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-[#4F45E4] text-white rounded-md hover:bg-[#4F45E4]/90 transition-colors duration-300 shadow-md text-sm md:text-base"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-96">
                <Image
                  src="/ai-consulting.jpg?height=400&width=500"
                  alt="AI Development Services"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Artificial Intelligence Services We Offer */}
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
            Artificial Intelligence Services We Offer
          </motion.h2>
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative p-4 bg-gray-900/50 rounded-lg border border-gray-800/50 transition-all duration-300 hover:bg-[#4F45E4]/10 hover:border-[#4F45E4]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#4F45E4]/10 rounded-full -translate-x-8 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-light mb-2 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
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
              At Tamar Software, we offer a wide range of AI services to help businesses leverage the power of artificial intelligence. Our solutions are designed to address your unique challenges and drive measurable results.
            </p>
            <p>
              From generative AI to data analytics, our team has the expertise to deliver innovative AI solutions that enhance efficiency and unlock new opportunities. Partner with us to transform your business with AI.
            </p>
          </motion.div>
        </motion.section>

        {/* Our AI Technology Stack */}
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
            Our AI Technology Stack
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-gray-400 text-center text-sm md:text-base mb-6 md:mb-8"
          >
            Leveraging our expertise as an AI development company, we build robust AI-powered solutions using a comprehensive tech stack.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          >
            {techStack.map((stack) => (
              <div 
                key={stack.category} 
                className="flex flex-col items-center p-4 bg-gray-900/50 rounded-lg border border-gray-800/50 hover:border-[#4F45E4] hover:bg-[#4F45E4]/10 transition-all duration-300"
              >
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white text-center">
                  {stack.category}
                </h3>
                <ul className="text-gray-400 text-xs md:text-sm text-center">
                  {stack.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-4 md:mt-6 text-sm md:text-base text-center space-y-4">
            <p>
              Our technology stack includes advanced tools like CLIP, GPT4o, and Grok for text and image generation, enabling us to create Intelligent and versatile AI solutions. We also leverage Gemini and VisualGPT for audio and video generation, ensuring comprehensive AI capabilities.
            </p>
            <p>
              For multimodal applications, we use Flamingo to integrate various data types, providing a seamless and powerful AI experience. Our tech stack is designed to meet the diverse needs of modern AI development.
            </p>
          </motion.div>
        </motion.section>

        {/* AI Services Delivery Process */}
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
            AI Services Delivery Process
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          >
            {deliveryProcess.map((step, index) => (
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
                  <h3 className="text-base md:text-lg font-light mb-2 text-white group-hover:text-[#4F45E4] transition-colors duration-300 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-2 group-hover:text-gray-200 transition-colors duration-300 text-center">
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
              Our structured delivery process ensures transparency and efficiency, delivering high-quality AI solutions that meet your expectations. We keep you informed at every step, ensuring a collaborative experience.
            </p>
            <p>
              From data collection to deployment, we focus on creating AI solutions that align with your business objectives while providing actionable insights. Our post-launch support ensures your AI system remains optimized and competitive.
            </p>
          </motion.div>
        </motion.section>

        {/* We Are Pioneers in Artificial Intelligence Development Solutions */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 md:mb-16 bg-gradient-to-b from-gray-900 to-black rounded-xl py-6 md:py-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8 text-[#4F45E4] text-center"
          >
            We Are Pioneers in Artificial Intelligence Development Solutions
          </motion.h2>
          <motion.div 
            variants={itemVariants} 
            className="text-sm md:text-base text-center space-y-4 max-w-5xl mx-auto px-4"
          >
            <p>
              Tamar Software is at the forefront of AI innovation, delivering pioneering solutions that redefine how businesses operate. Our expertise in artificial intelligence software development and machine learning enables us to create AI systems that drive efficiency, innovation, and growth.
            </p>
            <p>
              As a top AI development company in India, we are committed to pushing the boundaries of what’s possible with AI. Our team of skilled AI developers and consultants works tirelessly to develop solutions that address the unique challenges of our clients, ensuring they stay ahead in a competitive market.
            </p>
            <p>
              Whether you need AI software development for automation, analytics, or customer engagement, we have the experience and technology to deliver exceptional results. Partner with us to unlock the full potential of AI for your business.
            </p>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-[#4F45E4] text-white rounded-md hover:bg-[#4F45E4]/90 transition-colors duration-300 shadow-md text-sm md:text-base"
            >
              Let’s Connect <ArrowRight className="ml-2 h-4 w-4" />
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
                  <h3 className="text-xl md:text-3xl font-light text-white mb-2">{stat.value}</h3>
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
                    <h3 className="text-base md:text-lg font-light mb-2 text-white group-hover:text-[#4F45E4] transition-colors duration-300">
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
              Choosing Tamar Software means partnering with a team that is committed to your success. We combine technical expertise with a client-centric approach to deliver AI solutions that drive results.
            </p>
            <p>
              Our focus on quality, innovation, and customer satisfaction makes us the ideal choice for businesses looking to leverage AI. Let us help you achieve your digital goals with a custom AI solution.
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
              We serve a wide range of industries with customized AI solutions, addressing unique challenges and driving success. Our industry-specific expertise ensures your AI system meets the needs of your target audience.
            </p>
            <p>
              Whether you’re in finance, healthcare, or manufacturing, our team has the experience to deliver an AI solution that enhances your operations and user engagement. Partner with us to create an AI system that makes an impact.
            </p>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}