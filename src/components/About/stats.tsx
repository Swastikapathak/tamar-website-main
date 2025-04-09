"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Code, Globe, Lightbulb } from "lucide-react";

interface StatItemProps {
  value: number;
  label: string;
  duration?: number;
}

function StatItem({ value, label, duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = value / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16.67); // 60fps

      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);
// 
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-[#6442FA] mb-2">{count}+</div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div
      className="group relative bg-gray-900/50 rounded-lg p-6 overflow-hidden backdrop-blur-sm 
        border border-gray-800/50 transition-all duration-300 ease-in-out
        hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] 
        hover:-translate-y-2"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top-right corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full 
        -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 
        transition-all duration-300"/>

      <div className="relative z-10">
        <Icon className="w-8 h-8 text-[#6442FA] mb-4 transition-colors duration-300" />
        <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#6442FA] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Bottom border animation */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] 
        scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </div>
  );
}

export function Stats() {
  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-light mb-12 text-center text-[#6442FA]"
        >
          Our Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StatItem value={6} label="Years in business" />
          <StatItem value={50} label="Projects completed" />
          <StatItem value={40} label="Team of experts" />
          <StatItem value={98} label="Customer satisfaction" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Code}
            title="Technical Excellence"
            description="We leverage cutting-edge technologies and best practices to deliver superior software solutions."
          />
          <FeatureCard
            icon={Globe}
            title="Global Reach"
            description="Our solutions empower businesses across the world, driving digital transformation at scale."
          />
          <FeatureCard
            icon={Lightbulb}
            title="Innovation Focus"
            description="We continuously evolve and adapt to market trends, staying ahead in the technology landscape."
          />
        </div>
      </div>
    </div>
  );
}