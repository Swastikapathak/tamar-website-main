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

export default function OnlineOPD() {
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
                Revolutionizing Healthcare with Online OPD - Spot Care
              </h1>
              <p className="text-gray-300">
                NaturalMinds Digital Systems LLP was established in 2019 with a vision to leverage technology for
                improving access to healthcare services. Recognizing the growing demand for convenient and efficient
                healthcare solutions, they developed an Online OPD platform to connect patients with healthcare
                providers remotely.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <Image
                src="/opd.png"
                alt="Online OPD Platform"
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
              In today's healthcare landscape, many patients face challenges in accessing timely and efficient
              outpatient medical services. Traditional systems often involve long wait times, difficulty in scheduling
              appointments, and limited access to specialists, which can hinder effective care. Additionally, the lack
              of secure and user-friendly digital solutions for telemedicine leads to barriers in patient-provider
              communication and continuity of care. As a result, patients may miss important follow-ups, struggle to
              manage chronic conditions, and have limited access to educational resources for proactive health
              management. Addressing these issues is crucial for enhancing patient experiences and improving overall
              health outcomes.
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
              The NaturalMinds Online OPD platform provides comprehensive solutions to enhance outpatient healthcare
              access and patient experience. By offering a wide range of services—including general consultations,
              specialist referrals, mental health counseling, and chronic disease management—the platform meets diverse
              healthcare needs in one location. Its user-friendly interface, accessible via web and mobile applications,
              allows patients to easily navigate services and schedule appointments. Secure telemedicine technology
              ensures encrypted communication, fostering trust in virtual consultations. The integration of electronic
              health records enables healthcare providers to access patient histories and treatment plans in real time,
              enhancing informed decision-making and continuity of care. Virtual prescription and referral management
              streamline the process for obtaining medications and specialist care, while automated appointment
              reminders reduce no-show rates. Additionally, the platform empowers patients with educational resources
              and personalized health advice, encouraging proactive health management. Together, these features improve
              access to healthcare and support better health outcomes.
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
              The implementation of the NaturalMinds Online OPD platform leads to significant improvements in outpatient
              healthcare delivery and patient satisfaction. By providing a comprehensive suite of services, patients
              experience reduced wait times and greater convenience in accessing care, resulting in increased
              appointment utilization. The user-friendly interface enhances patient engagement, making it easier for
              individuals to navigate healthcare options and schedule consultations. Secure telemedicine technology
              fosters trust, encouraging more patients to participate in virtual consultations, which in turn leads to
              timely diagnoses and treatment.
            </motion.p>
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                {
                  title: "Improved Access to Care",
                  description:
                    "The platform significantly reduces barriers to healthcare access by enabling remote consultations, allowing patients to connect with providers from anywhere, reducing travel time and costs.",
                },
                {
                  title: "Enhanced Patient Engagement",
                  description:
                    "With a user-friendly interface and educational resources, patients are more engaged in their healthcare, leading to better adherence to treatment plans and proactive health management.",
                },
                {
                  title: "Increased Efficiency",
                  description:
                    "Automated reminders and virtual prescription management streamline processes, reducing no-show rates and administrative burdens, allowing healthcare providers to focus on patient care.",
                },
                {
                  title: "Better Health Outcomes",
                  description:
                    "Real-time access to electronic health records and seamless specialist referrals ensure continuity of care, resulting in more accurate diagnoses and improved management of chronic conditions.",
                },
                {
                  title: "Scalable Healthcare Delivery",
                  description:
                    "The cloud-based infrastructure supports a growing number of users without compromising performance, making it a scalable solution for expanding healthcare services.",
                },
              ].map((outcome, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-5 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md"
                >
                  <h3 className="text-lg font-semibold mb-2 text-white">{outcome.title}</h3>
                  <p className="text-gray-300 text-sm">{outcome.description}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.p variants={itemVariants} className="text-xl text-white mt-6">
              The project not only addresses immediate healthcare access challenges but also lays the foundation for a
              modern, efficient, and patient-centric healthcare ecosystem, positively impacting overall health outcomes
              and satisfaction.
            </motion.p>
          </motion.section>
        </main>
      </div>
    </div>
  )
}