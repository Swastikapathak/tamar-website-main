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
              <h1 className="text-3xl md:text-4xl font-bold text-indigo-500">
                Advanced Chatbot with NLP, BERT, and LLM
              </h1>
              <p className="text-gray-300">
                Our advanced chatbot solution is engineered to offer highly accurate user intent recognition and generate
                responses that align with user expectations. By harnessing cutting-edge natural language processing (NLP)
                techniques, including BERT (Bidirectional Encoder Representations from Transformers) and Large Language
                Models (LLMs), the chatbot delivers superior interaction quality. The smart talk feature ensures
                contextually relevant and dynamic conversations, enhancing user engagement and satisfaction.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <Image
                src="/chatbot.png"
                alt="Advanced Chatbot Illustration"
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
              In today’s digital landscape, organizations encounter significant challenges in effectively engaging users
              through automated interactions. Traditional chatbots often misinterpret user intent, leading to irrelevant
              or incorrect responses and resulting in decreased user satisfaction. Additionally, many existing systems
              lack contextual awareness, which causes disjointed conversations and frustration. Current solutions
              frequently produce scripted, robotic interactions that fail to adapt to user preferences, and as
              interaction volumes increase, performance and responsiveness can suffer. Moreover, safeguarding user data
              during these interactions has become increasingly critical amid growing regulatory scrutiny. These
              challenges impede organizations from delivering effective customer support and underscore the need for a
              robust, adaptable, and secure chatbot solution.
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
              Solution - Advanced Chatbot with NLP, BERT, and LLM
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              To address the challenges of user engagement and interaction quality in chatbot systems, our advanced
              chatbot solution leverages cutting-edge technologies such as Natural Language Processing (NLP), BERT, and
              Large Language Models (LLMs). The solution employs sophisticated intent recognition algorithms to
              accurately interpret user queries, ensuring that responses are relevant and contextually appropriate. By
              integrating BERT, the chatbot can understand nuances in language and maintain contextual continuity
              throughout conversations, leading to more coherent interactions. LLMs are utilized to generate natural,
              human-like responses that enhance user engagement and satisfaction.
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
              The implementation of our advanced chatbot solution has significantly enhanced user experience,
              operational efficiency, and cost management. Users reported increased satisfaction due to the chatbot's
              accurate and contextually relevant responses, leading to greater retention and loyalty. The automation of
              routine inquiries reduced the workload on human agents, allowing them to focus on more complex issues and
              improving overall team productivity. The solution effectively handled a large volume of interactions
              simultaneously, enabling organizations to scale operations without compromising performance. Additionally,
              it resulted in notable cost savings by minimizing the need for extensive customer support teams, allowing
              for better resource allocation and increased profitability. The adaptive learning features ensured that
              the chatbot evolved with user interactions and language trends, maintaining relevance and accuracy over
              time, while regular updates based on user feedback further enhanced its effectiveness. Overall, this
              advanced chatbot solution has proven to be a vital tool for organizations looking to improve their service
              delivery and operational excellence.
            </motion.p>
          </motion.section>
        </main>
      </div>
    </div>
  )
}