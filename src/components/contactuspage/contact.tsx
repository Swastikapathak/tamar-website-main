"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        router.push("/thank-you");
      } else {
        alert("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative isolate bg-black px-6 py-20 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Section - Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-white"
        >
          <h2 className="text-4xl font-extrabold sm:text-5xl text-[#4F45E4]">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-400">
            We are here to answer your business queries and provide world-class solutions. Let’s get connected!
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-[#4F45E4]" />
              <p>A-0313, Logix Technova, Noida, Uttar Pradesh, India 2013</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-[#4F45E4]" />
              <a
                href="tel:+919650836300"
                className="text-gray-400 hover:text-[#4F45E4] transition-colors duration-300"
              >
                +91-9650836300
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-[#4F45E4]" />
              <a
                href="mailto:contact@tamarsoftware"
                className="text-gray-400 hover:text-[#4F45E4] transition-colors duration-300"
              >
                contact@tamarsoftware
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="bg-gray-900/50 p-8 rounded-lg shadow-lg border border-gray-800/50"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-[#4F45E4] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-[#4F45E4] focus:outline-none"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-md bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-[#4F45E4] focus:outline-none"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-400">Message</label>
              <textarea
  name="message"
  value={formData.message}
  onChange={(e) => {
    if (e.target.value.split(/\s+/).length <= 200) {
      handleChange(e);
    }
  }}
  rows={4}
  className="mt-2 block w-full rounded-md bg-gray-700 px-3 py-2 text-white focus:ring-2 focus:ring-[#4F45E4] focus:outline-none"
  required
></textarea>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex items-center space-x-2 bg-transparent border-2 border-[#4F45E4] px-4 py-2 text-white font-semibold rounded-md 
                hover:bg-[#4F45E4] hover:text-white transition focus:ring-2 focus:ring-[#4F45E4] focus:outline-none"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}