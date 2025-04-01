"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";



export default function ThankYou() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className="bg-black text-white">
      {/* Hero Section with Background Image */}
      <motion.div className="relative h-[50vh] overflow-hidden" style={{ y }}>
        <img
          src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Thank You Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-light text-[#4F45E4] mb-4">
              Thank you for reaching out!
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We have received your message. Our team will get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What Happens Next Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl  font-light text-[#4F45E4] mb-6">
            What Happens Next?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            While you wait for our response, here’s what you can expect. We’ll review your message within the next 24-48 hours and reach out to discuss your needs in detail. In the meantime, feel free to explore more about our services or return to our homepage.
          </p>
          <div className="flex justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 rounded-md bg-transparent border-2 border-[#4F45E4] text-white 
                  hover:bg-[#4F45E4] hover:text-white transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Homepage
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/capabilities"
                className="inline-flex items-center px-6 py-3 rounded-md bg-[#4F45E4] text-white 
                  hover:bg-[#4F45E4]/80 transition-all duration-300"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Mini FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-[#4F45E4] mb-10 text-center">
            Common Questions After Contacting Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How long will it take to hear back?",
                answer:
                  "We typically respond within 24-48 hours. If your inquiry is urgent, please call us at +91-9650836300.",
              },
              {
                question: "Can I schedule a consultation?",
                answer:
                  "Absolutely! Once we review your message, we’ll reach out to schedule a consultation at a time that works best for you.",
              },
              {
                question: "What information should I prepare?",
                answer:
                  "It’s helpful to have details about your project goals, timeline, and budget ready. This will allow us to provide the best possible solutions.",
              },
              {
                question: "What if I need to update my message?",
                answer:
                  "No problem! Simply send us another message through the contact form, or email us directly at contact@tamarsoftware.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-900/50 rounded-lg p-6 border border-gray-800/50 
                  transition-all duration-300 ease-in-out hover:bg-[#4F45E4]/10 hover:border-[#4F45E4]/50 
                  hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top-right corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#4F45E4]/10 rounded-full 
                  -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 
                  transition-all duration-300" />

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#4F45E4] transition-colors duration-300 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>

                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4] 
                  scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-light text-[#4F45E4] mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Let’s work together to bring your ideas to life. Whether you’re looking for custom software, AI solutions, or IT consulting, we’re here to help.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md bg-transparent border-2 border-[#4F45E4] text-white 
                hover:bg-[#4F45E4] hover:text-white transition-all duration-300"
            >
              Contact Us Again
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}