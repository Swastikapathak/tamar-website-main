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

export default function Page() {
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
      {/* Assuming Navbar is 64px (h-16) tall */}
      <div className="flex-1 pt-16 overflow-y-auto"> {/* Added overflow-y-auto */}
        <main className="container mx-auto px-4 py-16">
          <motion.div 
            className="text-sm mb-8" 
            {...fadeIn}
          >
            <span>Horse and Saddles 3D Modelling</span>
          </motion.div>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-6 mb-16"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-light text-indigo-500">Horse and Saddles 3D Modelling</h1>
              <p className="text-gray-300">
                Precision and efficiency are paramount in today's competitive manufacturing environment. Especially for
                companies that are into custom-fit products like saddles mapping and verification, there are several
                challenges to ensuring perfect alignment with design specifications. Traditional methods rely heavily on
                manual inspection, which is prone to errors. This can result in defects and misalignments. To some extent,
                it also delays in production. To address these issues, Tamar Software embarked on leveraging advanced
                technologies like 3-D data, computer vision, and machine learning, which can be beneficial to manufacture
                exact saddles for horses. It also reduces cost and improves product quality. In this case study, we will
                explore the transformative impact of 3-D data technology in saddle mapping and verification.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <Image
                src="/horsesaddle.png"
                alt="Horse and rider in action"
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
                { icon: Code, number: "10", label: "Months duration of project" },
                { icon: CheckCircle, number: "1500+", label: "Estimated Business Man Hours" },
                { icon: Users, number: "2024", label: "Development & Delivery Year" },
                { icon: Star, number: "24", label: "Dedicated team of experts worked" },
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
                  <div className="text-xl font-bold text-white mb-1">{stat.number}</div>
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
              Problems Witnessed
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300">
              Since traditional times, saddle manufacturing industries have struggled with fitting issues and component
              alignment. These problems clearly stem from discrepancies between actual saddle parts and design
              specifications, which often result in defective products. These issues also go unnoticed until the final
              production stage, which leads to costly rework, delays, and material waste of product. Additionally, the
              challenges also limit the ability of the industry to optimize product fit and respond to the demands of the
              market. As customer demands are constantly evolving and driven by customization and precision, the inability
              to meet design specifications in terms of exact measurement can hamper the competitiveness of any company.
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
                { label: "Frontend", value: "Angular" },
                { label: "Cloud", value: "AWS" },
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
              Solution – 3-D Data technology for saddle mapping and verification
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              The challenges faced during saddle mapping and verification can be taken care of by implementing advanced
              3-D scanning and data. The system includes several key components.
            </motion.p>
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                {
                  title: "High-resolution 3-D Scanning and Technology",
                  description:
                    "Use of high-resolution 3-D scanners, to capture precise measurements of saddle components and provide detailed data of dimensions, texture, and shape of parts.",
                },
                {
                  title: "3-D Data Analysis",
                  description:
                    "Advanced 3-D data scanners capture data and generate accurate digital measurements of components. These models are compared with the original specifications for a detailed analysis of fit alignment and assessment for any deviation from the original design.",
                },
                {
                  title: "Automated Fitments to Measurements",
                  description:
                    "Automated ML algorithms are used and implemented to detect real-time gaps. This allows early detection of gaps and misalignment, which can significantly reduce risk. This way, the technology ensures the right fit of saddle regardless of horse back.",
                },
                {
                  title: "Exact Fitments with Realtime Checks",
                  description:
                    "The advanced 3D data system is designed to also enhance saddle manufacturers' quality by determining gaps. As manufacturers are guided by exact measurements captured by 3D scanners and powered by ML technology, it helps to get Instant feedback about the fit and alignment of components.",
                },
                {
                  title: "In-depth Measurements & Analysis",
                  description:
                    "The advanced 3D Data system provides valuable insight into component interaction. It analyses how different parts interact with each other to help manufacturers make informed decisions regarding modification. This way, they verify saddle fitments and ensure improved customer satisfaction by fitting perfectly on horseback.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-5 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md"
                >
                  <h3 className="text-lg font-light mb-2 text-white ">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { title: "Industry Served", value: "Saddle manufacturing industry" },
              { title: "Country", value: "India" },
              { title: "Main Technologies used", value: "Python" },
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
              3-D Data technology has provided transformative results to the saddle manufacturing industry through saddle
              verification and mapping. The following are the impacts witnessed across multiple dimensions.
            </motion.p>
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                {
                  title: "Improved Product Fit",
                  description:
                    "The precise use of 3-D data technology significantly improves the fit of saddle components and their alignment. The technology is efficient in detecting even the slightest deviation in the measurement to ensure that the product consistently meets the highest quality standards.",
                },
                {
                  title: "Predicts Slightest Gaps",
                  description:
                    "Automated detection with advanced technology led to massive customer satisfaction. As the gaps were detected early, the problems were addressed before they escalated, which reduced the cost of rework and minimized materialistic waste.",
                },
                {
                  title: "Launching with Exact Measurements",
                  description:
                    "Following the data received from 3D data technology can streamline the manufacturing process. It eliminated delays and rework translated into the production timeline and ensured the exact match of saddle regardless of horse size.",
                },
                {
                  title: "Improve Product Usage and Foster Innovation",
                  description:
                    "The ability to make exact measurements gathered by 3D scanners led to making innovative products and an exact match. As the products were continuously refined, manufacturers were able to create saddles to fit seamlessly which enhanced their reputation in the market.",
                },
                {
                  title: "Competitive Advantages",
                  description:
                    "Companies adopting 3-D data technology for saddle mapping and verification have become leaders in precision and innovation in the industry. Embracing advanced technology helped companies position themselves as a leader who expects precision and reliability in saddles.",
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