"use client";

import { CheckCircle } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "Competitive salaries",
  "Flexible work hours",
  "30 days of paid vacation",
  "Annual team retreats",
  "Benefits for you and your family",
  "A great work environment",
];

export default function Team() {
  return (
    <div className="relative isolate -z-10 bg-black text-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto flex max-w-2xl flex-col gap-16 bg-gray-900/50 px-6 py-16 ring-1 ring-gray-800/50 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20"
        >
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            alt=""
            src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex-auto"
          >
            <h2 className="text-4xl font-light tracking-tight text-[#4F45E4] sm:text-5xl">
              Join our team
            </h2>
            <p className="mt-6 text-lg text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="group relative flex gap-x-3 p-2 rounded-lg transition-all duration-300 
                    hover:bg-[#4F45E4]/10 hover:shadow-[0_5px_20px_rgba(79,69,228,0.2)]"
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-[#4F45E4]/5 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  
                  <CheckCircle
                    aria-hidden="true"
                    className="h-7 w-5 flex-none text-[#4F45E4]"
                  />
                  <span className="text-white group-hover:text-[#4F45E4] transition-colors duration-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-light text-white hover:text-[#4F45E4] transition-colors duration-300">
                See our job postings <span aria-hidden="true">→</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
          className="aspect-1318/752 w-[82.375rem] flex-none bg-[#4F45E4] opacity-10"
        />
      </div>
    </div>
  );
}