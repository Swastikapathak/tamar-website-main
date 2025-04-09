"use client";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Shield, Zap, Globe, Eye, Lock, AlertTriangle, Users, Cloud, BarChart } from "lucide-react";

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [reliableRef, reliableInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const techLogos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", alt: "MongoDB" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", alt: "TensorFlow" },
  ];

  return (
    <div className="min-h-screen bg-black text-white mt-12">

      {/* Meta Tags for SEO */}
            <Head>
              <title>Cyber Security Company in India | Tamar Software</title>
              <meta
                name="description"
                content="Tamar Software is a leading Cyber Security solutions provider in India that simplifies how your company accesses the best of Cyber Security, EDI, and B2B integrations."
              />
              <meta name="keywords" content="Cyber Security services, Custom Cyber Security Solutions, Robotic Process Automation Services" />
              <meta name="robots" content="index, follow" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>


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
              Experts Offering Cybersecurity Services
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Today we are living in a digital age where businesses are constantly at the risk of cyber threats, which can greatly compromise their sensitive data and disrupt daily operations. At Tamar Software, we comprehend the need for robust cybersecurity software solutions that are customized to address the unique challenges of organizations. The team of cybersecurity professionals brings their knowledge and experience in using cutting-edge technology to deliver solutions that protect against advanced cyber attack attacks.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Being one of the leading cybersecurity solution providers, our ambition is to help and equip businesses with the right tools and technology. They need to regard their digital assets while complying with the industrial standards. At Tamar Software, we prioritize proactive defense strategies and enable clients to anticipate potential threats and protect critical systems. You can trust us to create cybersecurity solutions that help businesses with solutions built to last a long time.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Cybersecurity Technology"
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
            { value: "5+", label: "Provided Cybersecurity Services" },
            { value: "6+ Years", label: "In Software Development Business" },
            { value: "20+", label: "Dedicated Experts" },
            { value: "100%", label: "Customer Satisfaction in All Cyber Security Projects" },
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

      {/* Reliable Software Solution Providers Section */}
      <section ref={reliableRef} className="py-16 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={reliableInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <Image
              src="https://images.unsplash.com/photo-1655036387197-566206c80980?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cybersecurity Protection"
              width={550}
              height={350}
              className="rounded-lg shadow-lg mr-4"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={reliableInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <h2 className="text-3xl md:text-3xl font-light text-[#6442FA] mb-6">
              Reliable Software Solution Providers To Get A Competitive Edge
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Choosing one of the top cybersecurity software companies is paramount to maintaining a resilient and secure organization. At Tamar Software, we are home to professionals who are the trusted name in the industry. We offer a range of customizable solutions that address unique cybersecurity risks along with emerging ones. Our comprehensive solution covers everything from initial risk assessment to advanced security monitoring. We can therefore empower businesses to stay secure from threats and ahead of the competition.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Partnering with us makes sure of not only getting protection but also a strategic advantage in today’s competitive marketplace. Cybersecurity software solution services are created to enhance resilience and reputation and prioritize security. Tamar Software is committed to helping businesses improve cybersecurity maturity and reduce the chances of vulnerability. This is something that positions businesses as a leader in their respective industries.
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

      {/* Cybersecurity Services Section */}
      <section ref={servicesRef} className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#6442FA] mb-10 text-center"
          >
            Cybersecurity Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Digital Forensics",
                description: "Our team provides digital forensic services that help organizations retain, obtain, analyze, and report on digital artifacts from different sources. In Digital Forensic investigation, we gather evidence and unveil the root cause of the breach for forgetting timely response.",
              },
              {
                icon: Zap,
                title: "Penetration Testing",
                description: "Comprehensive penetration testing and vulnerability assessment services can be beneficial for businesses to identify and address Security weaknesses proactively in the system. Our team of experienced professionals examines networks and conducts assessments of the application and infrastructure to find the point of vulnerability.",
              },
              {
                icon: Globe,
                title: "Web Application Security Assessment",
                description: "We provide expert web application penetration testing services as one of the top cybersecurity software companies. It includes an assessment of security posture. Our highly skilled team employs cutting-edge technology to identify potential entry points and vulnerabilities that can be exploited by attackers.",
              },
              {
                icon: Eye,
                title: "Privacy Assessment",
                description: "Being one of the leading cybersecurity solution providers, we assist organizations in establishing an effective and comprehensive data privacy framework. The dedicated team works closely to develop customized privacy programs that align with unique business requirements and regulatory needs.",
              },
              {
                icon: Lock,
                title: "Compliance Assessments",
                description: "Our team provides comprehensive cybersecurity, compliance assessment, and gap assessment services. The services aim to ensure adherence to security protocols and best practices of the industry. Our experts conduct assessments to evaluate the current security measures and identify gaps that might exist.",
              },
              {
                icon: AlertTriangle,
                title: "Incident Response",
                description: "Our team responds safely to cyber incidents. We are prompt with our cyber incident response service, which is designed to contain, eradicate, and recover from security breaches effectively. As one of the top cybersecurity solution providers, we aim to fulfill the requirements and provide proactive solutions.",
              },
              {
                icon: Users,
                title: "Security Awareness Training",
                description: "With a team of excellent members, we offer cybersecurity awareness training. This provides relevant, continuous, engaging, and measurable training, education, and testing. Our program helps organizations with a comprehensive suite of services.",
              },
              {
                icon: Cloud,
                title: "Cloud Security Assessment",
                description: "Since organizations migrate their services, applications, infrastructure, and other valuable assets from on-premise networks to private-public cloud environments, they require stronger security solutions. Our cloud security assessment team properly assesses these challenges to address them and ensure organizational safety.",
              },
              {
                icon: BarChart,
                title: "Cybersecurity Maturity Assessment",
                description: "Cybersecurity maturity assessment includes evaluating to analyzing the defensive mechanism of an organization. It offers special attention to the procedure that protects critical applications, data and infrastructure. We prioritize evaluation, effectiveness, and maturity of processes.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative bg-gray-900/50 rounded-lg p-6 overflow-hidden border border-gray-800/50 transition-all duration-300 ease-in-out hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative z-10">
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
        </div>
      </section>

      {/* Technologies We Work With Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-light text-[#6442FA] mb-10 text-center"
          >
            Technologies We Work With
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {techLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800"
              >
                <Image src={logo.src} alt={logo.alt} width={80} height={80} className="object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}