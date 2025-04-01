"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Sample testimonials data (randomly generated)
const sampleTestimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "Tech Innovate",
    quote:
      "Tamar Software transformed our business with their cutting-edge AI solutions. Their team was professional, responsive, and delivered beyond our expectations!",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "FinServ Solutions",
    quote:
      "The custom software developed by Tamar Software streamlined our operations and increased our efficiency by 40%. Highly recommend their services!",
  },
  {
    name: "Emily Davis",
    role: "CEO",
    company: "HealthTech Corp",
    quote:
      "Working with Tamar Software was a game-changer for our healthcare platform. Their expertise in data analytics helped us make better decisions.",
  },
  {
    name: "James Carter",
    role: "Operations Director",
    company: "Retail Dynamics",
    quote:
      "Tamar Software's IT consulting services were top-notch. They helped us migrate to the cloud seamlessly, saving us time and resources.",
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "EduLearn Innovations",
    quote:
      "The team at Tamar Software delivered a robust e-learning platform that exceeded our expectations. Their attention to detail is unmatched!",
  },
  {
    name: "David Wilson",
    role: "VP of Engineering",
    company: "AutoTech Industries",
    quote:
      "Tamar Software's cybersecurity solutions protected our systems from potential threats. Their proactive approach gave us peace of mind.",
  },
];

export default function Testimonials() {
  const [displayedTestimonials, setDisplayedTestimonials] = useState(sampleTestimonials);

  // Shuffle testimonials on mount for a random display
  useEffect(() => {
    const shuffled = [...sampleTestimonials].sort(() => Math.random() - 0.5);
    setDisplayedTestimonials(shuffled);
  }, []);

  return (
    <section className="bg-black text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#4F45E4]">
            What Our Clients Say
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Hear from our satisfied clients about their experience with Tamar Software.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-gray-900 rounded-lg p-6 border border-gray-800/50 
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
                <Quote className="h-8 w-8 text-[#4F45E4] mb-4" />
                <p className="text-gray-200 mb-4">{testimonial.quote}</p>
                <div className="border-t border-gray-800/50 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4F45E4] 
                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}