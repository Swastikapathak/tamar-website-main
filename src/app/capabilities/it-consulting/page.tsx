"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, CheckCircle, Users, Star } from "lucide-react";

export default function ITConsultingPage() {
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
    { icon: Code, value: "100+ Days", label: "Clients Were Helped with IT Consultation" },
    { icon: CheckCircle, value: "5+ Years", label: "In IT Consultation" },
    { icon: Users, value: "10+", label: "Highly Experienced IT Consultants" },
    { icon: Star, value: "70%", label: "Repeated Customers in Last 5 Years" },
  ];

  const capabilities = [
    {
      title: "Assessment",
      description:
        "Current State Analysis, Risk Assessment, Technology Alignment, Performance Metrics, Stakeholders Interview, Recommendations, Roadmap",
    },
    {
      title: "Planning",
      description:
        "Goal Setting, Stakeholder Engagement, Technology Alignment, Current State Analysis, Budgeting, Risk Management, Performance, Documentation",
    },
    {
      title: "Implementation",
      description:
        "Project Kickoff, Resource Allocation, Project Plan, System Configuration, Data Migration, Integration, Testing, Training, Go Live, Support Plan",
    },
    {
      title: "Support",
      description:
        "Helpdesk Services, Technical Support, Training, Resources, Monitoring, Updates and Patches, Feedback, Incident Management",
    },
  ];

  const techLogos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg", alt: "MongoDB" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", alt: "TensorFlow" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="relative h-16 flex items-center justify-center"></header>

      <main className="container mx-auto px-4 py-16">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-[#6442FA]">
                Elevate Your Business with Expert IT Consulting
              </h2>
              <div className="space-y-3">
                <p>
                  Our search for a reliable IT consultant company ends with Tamar Software. We take pride in providing exceptional IT consulting services to businesses. We specialise in customising IT services to help businesses thrive in today’s digital age. Being one of the leading IT consulting companies in Noida India, we apprehend the unique challenges faced by businesses. We aim to help small businesses by delivering innovative solutions that help them to streamline operations, boost productivity and enhance security.
                </p>
                <p>
                  Partnering with us means that you are choosing reliable hands and knowledgeable experts. Our IT consulting services encompass everything from hands-on implementation and strategic planning to everything that comes in between to ensure that the technology is perfectly aligned with your business goals and objectives. Our local IT consultants are always available to provide expert advice and personalised support, that adapts to your evolving requirements. With Tamar Software, you get a helping hand that empowers business growth and offers a competitive edge in the market.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#6442FA] text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors font-semibold shadow-md"
                >
                  Let’s Connect
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="IT Consulting Illustration"
                width={400}
                height={400}
                className="object-contain rounded-md"
              />
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-indigo-500" />
              <h3 className="text-xl font-light mb-1">{stat.value}</h3>
              <p className="text-gray-300 text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-light text-[#6442FA]">
                IT Consultation Services
              </h2>
              <div className="space-y-3">
                <p>
                  Our IT consulting service includes IT strategy planning to ensure that the technology is aligned with your business goals and objectives. We design a roadmap for the IT infrastructure and ensure that it supports both long-term and short-term growth and sustainability. With knowledgeable local IT consultants, we ensure controlling cost while maximising return through efficient IT budgeting. Our consultant works closely with our clients to develop a comprehensive IT budget that prioritises investment in the right technologies while maintaining the financial health of the organisation.
                </p>
                <p>
                  Today we are living in a digital age where security is indispensable. Our IT consultant services offered here through security risk assessment help to mitigate threats, identify vulnerabilities and implement security protocols that protect your confidential business data. If you wish to migrate your data, our local IT consultants ensure seamless migration of applications and data to the cloud with minimal downtime, maintaining business productivity and leveraging the potential of cloud technologies.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1551288049-18d1da4c129e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="IT Services Illustration"
                width={500}
                height={400}
                className="object-contain rounded-md"
              />
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-light mb-6 text-[#6442FA]">
            Our IT Consultation Capabilities
          </motion.h2>
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#6442FA]">
            {capabilities.map((capability) => (
              <div key={capability.title} className="p-5 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md">
                <h3 className="text-lg font-light mb-2">{capability.title}</h3>
                <p className="text-gray-300 text-sm">{capability.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-light mb-6 text-[#6442FA]">
            Empower Your Business With Technology
          </motion.h2>
          <motion.div variants={itemVariants} className="space-y-3">
            <p>
              The advanced IT support for small businesses at Tamar Software empowers businesses in today’s competitive era. We have a specialised approach to ensure the integration of cutting-edge technologies that will drive growth and optimise efficiency. Whether you’re looking for security enhancement, cloud migration, or data analytics, the local IT consultants available with us ensure seamless operation with minimal disruptions.
            </p>
            <p>
              We have been acknowledged as one of the top IT consulting companies in Noida India due to our commitment to constantly delivering exceptional results that reduce cost and improve performance. You can leverage the expertise of our team to transform your business with a future-proof and scalable solution that always keeps you ahead in today’s competition.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#6442FA] text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors font-semibold shadow-md"
            >
              Let’s Connect
            </Link>
          </motion.div>
        </motion.section>

        
      </main>
    </div>
  );
}