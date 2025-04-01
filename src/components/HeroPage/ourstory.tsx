"use client"
import { UsersIcon } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Years in business', value: '6+' },
  { label: 'Projects completed', value: '50+' },
  { label: 'Team of experts', value: '40+' },
  { label: 'Customer satisfaction', value: '100%' },
];

export default function Example() {
  return (
    <div className="bg-black py-16 px-6 md:px-12">
      <div className="relative text-white mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-64 sm:h-80 lg:h-[500px] w-full overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
          <Image
            alt="Support team"
            src="/website.avif"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl transform hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="relative mx-auto max-w-2xl lg:max-w-none">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex size-14 items-center justify-center rounded-2xl bg-[#6442FA] text-white shadow-lg shadow-purple-500/20"
            >
              <UsersIcon className="size-7" />
            </motion.div>
            
            <h2 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl bg-[#6442FA] bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Founded in 2018, Tamar Software has quickly established itself as a leader in the IT industry,
              specializing in cutting-edge software solutions and consultancy services. In 2024, the company
              transitioned to a Limited Liability Partnership (LLP).
            </p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                >
                  <dd className="text-3xl font-bold bg-[#6442FA] bg-clip-text text-transparent sm:text-4xl sm:tracking-tight">
                    {stat.value}
                  </dd>
                  <dt className="text-base font-medium text-gray-400 mt-2">
                    {stat.label}
                  </dt>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}