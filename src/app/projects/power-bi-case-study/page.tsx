"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Code, CheckCircle, Users, Star } from "lucide-react"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const statsAnimation = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: "spring", stiffness: 100, damping: 10 },
}

export default function PowerBiCaseStudy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div className="flex-1 pt-16 overflow-y-auto">
        <main className="container mx-auto px-4 py-16">
          <motion.div className="text-sm mb-8" {...fadeIn}>
          </motion.div>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-light text-indigo-500">
                Power BI Dashboard
              </h1>
              <p className="text-gray-300">
                The Power BI dashboard, integrated with PowerApps, is a sophisticated data visualization and management
                tool designed to streamline and enhance decision-making across various sectors, including Travel,
                Hospital, Finance, Manufacturing, and Automobiles. This integration provides a dynamic and interactive
                experience, allowing users to visualize key performance indicators (KPIs) and critical metrics while
                also enabling direct data input and workflow automation through PowerApps.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <Image
                src="/project-power-BI.png"
                alt="Power BI Dashboard"
                width={350}
                height={250}
                className="object-cover rounded-md w-full max-w-[350px] h-auto"
              />
            </motion.div>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-light mb-6 text-indigo-500">
              Project in Figures
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Code, number: "3+", label: "Months duration of project" },
                { icon: CheckCircle, number: "1200+", label: "Estimated Business Man Hours" },
                { icon: Users, number: "2023", label: "Development & Delivery Year" },
                { icon: Star, number: "12+", label: "Dedicated team of experts worked" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-indigo-500" />
                  <div className="text-xl font-light text-white mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-light mb-6 text-indigo-500">
              Problem Statement
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300">
              The integration of Power BI dashboards with PowerApps addresses the growing need for organizations to
              harness data effectively across various sectors such as travel, healthcare, finance, manufacturing, and
              automobiles. Many organizations struggle with disparate data sources and inefficient data entry
              processes, leading to delayed decision-making and operational inefficiencies. Additionally, the lack of
              sector-specific insights makes it challenging for teams to monitor key performance indicators (KPIs) and
              respond promptly to emerging trends. The challenge lies in creating a unified platform that not only
              visualizes critical metrics in real-time but also allows for direct data input and automated workflows,
              ultimately enhancing decision-making and operational efficiency while ensuring user adoption and data
              security.
            </motion.p>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-light mb-6 text-indigo-500">
              Technical Details
            </motion.h2>
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Backend", value: "Python" },
                { label: "Database", value: "MySQL" },
                { label: "Cloud", value: "AWS S3" },
                { label: "Data Science", value: "Python, Data Science, Machine Learning" },
              ].map((detail, index) => (
                <div key={index} className="p-5 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md">
                  <div className="text-gray-400 text-sm mb-1">{detail.label}</div>
                  <div className="font-medium text-white">{detail.value}</div>
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
            <motion.h2 variants={itemVariants} className="text-3xl font-light mb-6 text-indigo-500">
              Solution
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              The integration of Power BI dashboards with PowerApps addresses critical challenges faced by
              organizations in data utilization across various sectors. By creating a unified data platform, this
              solution enables real-time data analysis and centralized access to key performance indicators (KPIs).
              Tailored, sector-specific dashboards ensure that users focus on relevant metrics, enhancing
              decision-making. Interactive data entry through PowerApps streamlines processes and minimizes errors,
              while automated workflows improve operational efficiency by triggering actions based on real-time data
              inputs. The user-friendly interface empowers all team members to navigate the system effectively,
              supported by comprehensive training and ongoing assistance. Robust security measures safeguard sensitive
              information, fostering trust and compliance. Additionally, continuous monitoring and feedback loops
              facilitate ongoing improvements, ensuring that the system evolves with organizational needs. Overall,
              this integration enhances decision-making capabilities, operational efficiency, and competitiveness
              across diverse industries.
            </motion.p>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              {
                title: "Industries Served",
                value: "Travel, Healthcare, Finance, Manufacturing, Automobiles",
              }, // Updated to reflect multiple sectors
              { title: "Country", value: "India" },
              { title: "Main Technologies used", value: "Javascript, React, Python 3, Django" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-5 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md"
              >
                <h3 className="text-lg font-light mb-2 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.value}</p>
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
            <motion.h2 variants={itemVariants} className="text-3xl font-light mb-6 text-indigo-500">
              Final Outcomes
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              The integration of Power BI dashboards with PowerApps has led to significant improvements in
              decision-making and operational efficiency for organizations across various sectors. Users now have
              access to real-time data and actionable insights, enabling quicker and more informed choices. The
              tailored dashboards provide relevant sector-specific metrics, enhancing strategic planning and
              performance evaluation. Workflow automation and interactive data entry have streamlined processes,
              reducing manual errors and administrative burdens, which in turn has increased overall productivity.
            </motion.p>
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                {
                  title: "Enhanced Decision-Making",
                  description:
                    "Real-time data visualization and KPIs enabled faster, data-driven decisions across sectors, improving responsiveness to market trends.",
                },
                {
                  title: "Improved Operational Efficiency",
                  description:
                    "Automated workflows and streamlined data entry reduced manual tasks, boosting productivity and reducing operational costs.",
                },
                {
                  title: "Sector-Specific Insights",
                  description:
                    "Tailored dashboards provided actionable metrics relevant to each industry, enhancing strategic planning and performance monitoring.",
                },
                {
                  title: "Higher User Adoption",
                  description:
                    "The intuitive interface and comprehensive training increased staff engagement and system utilization across teams.",
                },
                {
                  title: "Scalable and Secure Platform",
                  description:
                    "Robust security measures and a scalable infrastructure ensured data integrity and supported growth across multiple sectors.",
                },
              ].map((outcome, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-5 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md"
                >
                  <h3 className="text-lg font-light mb-2 text-white">{outcome.title}</h3>
                  <p className="text-gray-300 text-sm">{outcome.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </main>
      </div>
    </div>
  )
}