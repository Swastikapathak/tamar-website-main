'use client';
import React from 'react';
import { Target, Building2 } from 'lucide-react';



export default function Value() {
  return (
    <section className="py-20 px-4 text-[#6442FA]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Target className="w-8 h-8 text-[#6442FA] mr-3" />
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed text-justify">
                At Tamar Software, our mission is to deliver innovative and reliable IT solutions that empower businesses to achieve their full potential. We strive to create value for our clients through exceptional service, technological expertise, and a commitment to excellence. Our dedicated team works tirelessly to understand and address the unique challenges faced by each client, ensuring solutions that drive real business impact.
              </p>
            </div>
            <div className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Building2 className="w-8 h-8 text-[#6442FA] mr-3" />
                Our Vision
              </h2>
              <p className="text-gray-300 leading-relaxed  text-justify">
                Our vision is to be a global leader in the IT industry, recognized for our innovation, quality, and customer-centric approach. We aim to drive digital transformation and shape the future of technology by continuously evolving and adapting to market trends. Through strategic partnerships and continuous innovation, we strive to create lasting value for our clients and contribute to the advancement of the technology sector.
              </p>
            </div>
          </div>
        </div>
      </section>

  );
}
