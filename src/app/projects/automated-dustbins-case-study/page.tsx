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
                The Automated Dustbin Solution
              </h1>
              <p className="text-gray-300">
                The smart waste management project primarily aims to develop and implement innovative waste management
                systems. These modern systems have been crafted to improve operational efficiency, urban cleanliness,
                and sustainable living across several sectors. The fundamental aspect of the solution clearly is the
                automated dustbin made with recyclable materials, which are equipped with advanced sensors and integrated
                with smart technology. These advanced bins are incorporated with algorithms to automatically segregate
                waste into three different varieties – dry, wet, and common. The inclusion of a smart system carefully
                monitors the bin fill level in real time and communicates the data to a cloud-based platform. The entire
                system has been designed meticulously to empower efficient waste collection, minimize environmental
                impact, and reduce unnecessary trips.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <Image
                src="/dustbin.png"
                alt="The Automated Dustbin Solution"
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
              Problem Statement
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300">
              Conventional waste management practices followed in urban areas have led to several significant challenges.
              The inefficiency in waste segregation at source often leads to the loss of both recyclable and compostable
              materials. Keeping in mind the concept of circular economy and achieving sustainable development goals, it
              is pertinent to segregate the waste efficiently, at least in dry and wet categories. Moreover, monitoring
              the level of bin fill manually often leads to inadequate collection schedules. Most of the time, it results
              in litter accumulation, overflowing bins and spoiling the visual appearance of the cityscape. Such
              efficiency often translates into excessive fuel consumption, increasing overall labor costs and harming
              the environment with unnecessary vehicle emissions. In addition to this, manual collections are not always
              optimal, which leads to time waste, reducing service efficiency and increasing operational costs. These
              issues can significantly impact public sectors, urban health, and overall aesthetic appeal.
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
              Solution - Advanced Waste Management With Sensors Connected with Internet of Things
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              The common challenges faced by people from different sectors with municipal solid waste management can be
              resolved with smart bins connected with IoT and integrated with smart sensors. This enables easy
              segregation of waste, provides notification on bin fill level, and empowers sustainable living.
            </motion.p>
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                {
                  title: "Automated Waste Segregation",
                  description:
                    "These intelligent waste management systems include a bin with smart mechanisms that allow automated waste segregation. It has a designated compartment for dry, wet, and mixed waste, which enables automated waste segregation and reduces the need for manual effort. The segregation of waste into dry and wet by automated smart bins can be sent to recycling and composting plants, respectively for their optimum reutilization and to conserve the natural resources (minerals and soil). The feature promotes proper waste disposal practices, improves recycling rates, and simplifies the overall waste processing chain.",
                },
                {
                  title: "Real-time Monitoring and Optimizing Collection Routine",
                  description:
                    "The system is integrated with advanced algorithms that leverage real-time data on bin fill levels and location. It dynamically optimizes the collection routine. The bin has been designed with a predefined threshold of 73% full when the system will trigger an alert through different channels like WhatsApp notification or even an audible buzzer. If it goes unnoticed, the same buzzer will trigger an alert when the bin is 80% full. The proactive approach would ensure timely collection, prevent overflowing bins, and minimize health risks.",
                },
                {
                  title: "Predictive Maintenance",
                  description:
                    "The sensors integrated into the smart bins are designed to consistently monitor the health of the system, like battery levels, mechanical operations, and sensor functionality. The advanced algorithm provides predictive maintenance to anticipate potential issues and schedule maintenance proactively to minimize downtime and ensure efficiency.",
                },
                {
                  title: "Data-driven Insight and Analytics",
                  description:
                    "These smart bins are connected to a cloud-based platform that constantly collects and analyzes data from them. This platform provides valuable information regarding peak usage times, patterns of waste generation, and areas accumulating high waste. The information will help city planners and authorities make informed decisions regarding collection schedules, bin placement, and creating a proper waste management strategy.",
                },
                {
                  title: "Enhanced Sustainability",
                  description:
                    "As these smart bins optimize segregation of waste, collection routines and reduce unnecessary trips, it will have a significant impact on reducing fuel consumption and greenhouse gas emissions, which will translate into sustainable practices. The automated segregation into the smart bins will facilitate efficient waste recycling and processing to minimize the environmental impact of landfills.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-5 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md"
                >
                  <h3 className="text-lg font-light mb-2 text-white">{item.title}</h3>
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
              { title: "Industry Served", value: "Healthcare" },
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
              Implementing smart waste management in different sectors has made massive improvements that facilitate a
              cleaner environment and sustainable living practices.
            </motion.p>
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                {
                  title: "Enhanced Urban Cleanliness",
                  description:
                    "The smart bins, incorporated with smart sensors for real-time monitoring, optimized collection schedule resulted in cleaner streets and public places, which effectively reduced unpleasant odors and litter all around.",
                },
                {
                  title: "Reduced Operational Costs",
                  description:
                    "These advanced waste management systems are connected with cloud platforms, which provide information to the authorities. This reduced unnecessary trips and optimized routine collection, which led to a substantial reduction in fuel consumption and labor costs. Therefore, it resulted in the need for cost-effectiveness in waste management operations.",
                },
                {
                  title: "Improved Sustainability",
                  description:
                    "Reduced trips translated into reduced vehicle emissions and optimized waste processing. It significantly resulted in decreasing environmental impact with proper waste management practices.",
                },
                {
                  title: "Simplified Urban Waste Management",
                  description:
                    "These advanced bin systems are integrated with different segments and sensors that collect and segregate waste according to the categories. It resulted in seamless segregation and an easy recycling process, which translated into reducing the impact of landfills on the environment.",
                },
                {
                  title: "Improved Service Reliability",
                  description:
                    "Integrated with real-time alerts, enhanced timely waste collection that translated into service reliability and improved user satisfaction among businesses and residents. Therefore, IT sectors, hospitals, urban complexes, parks, and other public places are cleaner and aesthetically pleasing.",
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
            <motion.p variants={itemVariants} className="text-xl text-white mt-6">
              The project aims not only to address waste management challenges but also to pay similar attention to the
              need for cities to modernize their urban infrastructure with an eye on sustainability. Successful
              implementation of smart waste management bins in different public sectors will transform traditional
              practices into a modern, efficient, and sustainable practice to have a positive impact on the environment.
            </motion.p>
          </motion.section>
        </main>
      </div>
    </div>
  )
}