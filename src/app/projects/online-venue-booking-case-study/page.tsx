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

export default function VenueBooking() {
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
                Madnue - Facilitating Seamless Venue Booking
              </h1>
              <p className="text-gray-300">
                Madnue was launched in 2020 with the aim of simplifying the process of discovering and booking venues for
                various events. Initially focused on a metropolitan area, Madnue quickly expanded its reach to multiple
                cities due to the growing demand for convenient venue booking solutions.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <Image
                src="/venue.png"
                alt="Madnue Venue Booking Platform"
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
            <motion.h2 variants={itemVariants} className="text-3xl font-light mb-6 text-[#6442FA]">
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
            <motion.h2 variants={itemVariants} className="text-3xl font-light mb-6 text-[#6442FA]">
              Problem Statement
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300">
              Madnue Solutions Private Limited faced significant challenges in the venue booking industry,
              characterized by a cumbersome and time-consuming process for both customers and venue owners. Users often
              struggled with limited access to venue information, leading to difficulty in comparing options and making
              informed decisions. Traditional booking methods resulted in delays and inefficiencies, while the lack of
              real-time availability updates created uncertainty and frustration. Additionally, the fragmented nature
              of venue information across multiple sources made it challenging for customers to find venues that met
              their specific requirements. As the demand for convenient and efficient venue booking solutions grew,
              Madnue recognized the need to streamline the booking process, enhance user experience, and ensure
              transparency and reliability in transactions to remain competitive in a rapidly expanding market.
            </motion.p>
          </motion.section>

          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-light mb-6 text-[#6442FA]">
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
            <motion.h2 variants={itemVariants} className="text-3xl font-light mb-6 text-[#6442FA]">
              Solution - Seamless Venue Booking Platform
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              To address the challenges in the venue booking process, Madnue Solutions Private Limited implemented
              several key solutions. They developed a comprehensive database of venues that includes detailed
              information such as capacity, amenities, floor plans, and high-quality images, enabling users to easily
              compare options and make informed decisions. Advanced search and filtering options allow users to narrow
              down venues based on location, event type, capacity, date availability, and budget, streamlining the
              search process. To enhance user engagement, Madnue offers virtual tours and 360-degree views of venues,
              along with interactive tools for floor plan customization that help users visualize their event setups
              effectively. The platform features real-time updates on venue availability, allowing for instant quotes
              and direct online booking, which eliminates delays associated with traditional methods. Furthermore,
              secure online payment processing and digital contract management ensure transparency and reliability
              throughout the booking process. Madnue also provides ongoing customer support to address inquiries and
              accommodate modifications, ensuring a smooth experience leading up to the event. Through these solutions,
              Madnue successfully streamlined the venue booking process and enhanced user satisfaction, positioning
              itself for growth in a competitive market.
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
              { title: "Industry Served", value: "Hospitality" }, // Updated to reflect venue booking industry
              { title: "Country", value: "India" },
              { title: "Main Technologies used", value: "Javascript, React, Python 3, Django" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-5 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md"
              >
                <h3 className="text-lg font-light mb-2 text-[#6442FA]">{item.title}</h3>
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
            <motion.h2 variants={itemVariants} className="text-3xl font-light mb-6 text-[#6442FA]">
              Final Outcomes
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300 mb-6">
              The implementation of these solutions led to significant positive outcomes for Madnue Solutions Private
              Limited. First and foremost, the platform streamlined the venue booking process, significantly reducing
              the time and effort required for users to find and book venues. This efficiency translated into higher
              customer satisfaction and loyalty, as users appreciated the ease of exploring options and securing
              bookings. Real-time availability updates and instant booking capabilities minimized the frustration
              associated with traditional booking methods, contributing to a smoother transaction process. The secure
              payment and contract management features fostered trust among users and venue owners, reducing
              administrative burdens and enhancing reliability.
            </motion.p>
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                {
                  title: "Improved User Experience",
                  description:
                    "The intuitive interface and advanced search filters made it easier for users to find and book venues tailored to their needs, enhancing overall satisfaction.",
                },
                {
                  title: "Increased Booking Efficiency",
                  description:
                    "Real-time updates and instant booking eliminated delays, allowing users to secure venues quickly and reducing the need for back-and-forth communication.",
                },
                {
                  title: "Enhanced Venue Visualization",
                  description:
                    "Virtual tours and interactive floor plan tools provided users with a clear understanding of venue layouts, leading to better event planning and higher engagement.",
                },
                {
                  title: "Greater Transparency",
                  description:
                    "Secure payment processing and digital contracts ensured clear, reliable transactions, building trust between users and venue owners.",
                },
                {
                  title: "Scalable Growth",
                  description:
                    "The platform’s robust infrastructure supported expansion to multiple cities, meeting growing demand without compromising performance.",
                },
              ].map((outcome, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-5 bg-gray-900/50 rounded-lg border border-gray-800 shadow-md"
                >
                  <h3 className="text-lg font-light mb-2 text-[#6442FA]">{outcome.title}</h3>
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