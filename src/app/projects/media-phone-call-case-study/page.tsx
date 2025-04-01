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

export default function MediaIntegration() {
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
              <h1 className="text-3xl md:text-4xl font-bold text-indigo-500 text-[#6442FA]">
                Media Integration During Call
              </h1>
              <p className="text-gray-300">
                Produt Tingh Ting U (TTU) recognized the opportunity to enhance user engagement by delivering targeted
                media content during phone calls. The aim was to seamlessly integrate advertisements and news updates
                during incoming, outgoing, and in-progress calls. This innovative approach sought to leverage user
                attention during calls to provide valuable information and promote products effectively.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <Image
                src="/project-img4.png"
                alt="Media Integration During Call"
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
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-indigo-500">
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
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-indigo-500">
              Problem Statement
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300">
              The Ting Ting Tu (TTU) project faced the challenge of enhancing user engagement during phone calls by
              integrating targeted media content, such as advertisements and news updates, without disrupting the call
              experience. Traditional methods of delivering media content often lacked real-time capabilities, leading
              to missed opportunities for engagement. Additionally, the integration needed to be seamless, ensuring high
              performance, reliability, and user privacy, while effectively managing large volumes of data and
              accommodating a growing user base.
            </motion.p>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-indigo-500">
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
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-indigo-500">
              Solution
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              To overcome these challenges, Tamar Software LLP developed a comprehensive solution using a robust
              technology stack that included Angular, Node.js, Google Cloud, and MongoDB. The front end was built with
              Angular to create a responsive and user-friendly interface, allowing users to interact with media content
              effortlessly during calls. Node.js served as the backend, enabling real-time data processing and efficient
              delivery of media content. Google Cloud was leveraged for its scalability and high availability, using
              services like Google Cloud Pub/Sub for real-time messaging. MongoDB was employed for efficient management
              and quick retrieval of large volumes of media data. The system was carefully integrated with existing
              telecommunication frameworks to ensure minimal disruption during calls, while robust encryption and
              privacy measures were implemented to protect user data.
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
              { title: "Industry Served", value: "Healthcare" },
              { title: "Country", value: "India" },
              { title: "Main Technologies used", value: "Javascript, React, Python 3, Django" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-5 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
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
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 text-indigo-500">
              Final Outcomes
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              The implementation of the Media Integration During Call project led to significant improvements in user
              engagement, as users received relevant advertisements and news updates seamlessly during their calls,
              enhancing overall satisfaction. The platform successfully delivered real-time media content without any
              disruption to call interactions, which was a critical requirement. Leveraging Google Cloud infrastructure
              allowed the solution to scale efficiently, accommodating a growing user base while maintaining high
              performance. Positive feedback from users indicated increased interaction with the media content,
              confirming the effectiveness of the solution. Overall, the project exemplified Tamar Software LLP’s
              ability to innovate and deliver impactful solutions that align with client objectives and enhance user
              experiences.
            </motion.p>
          </motion.section>
        </main>
      </div>
    </div>
  )
}