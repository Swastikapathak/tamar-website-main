import React from "react";

function LeadershipCard({ name, role, image, description }: { name: string, role: string, image: string, description: string }) {
  return (
    <div className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm 
      border border-gray-800/50 transition-all duration-300 ease-in-out
      hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] 
      hover:-translate-y-2">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top-right corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full 
        -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 
        transition-all duration-300" />

      <img src={image} alt={name} className="w-full object-cover" />
      <div className="relative p-6 z-10">
        <h3 className="text-xl font-light mb-2 text-[#6442FA] group-hover:text-[#6442FA] 
          transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-400 mb-3 group-hover:text-gray-200 transition-colors duration-300">
          {role}
        </p>
        <p className="text-white">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] 
        scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
    </div>
  );
}

export default function Team() {
  return (
    <div className="mx-auto max-w-7xl px-6  lg:px-8">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-light mb-12 text-center text-[#6442FA]">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8  text-justify">
            <LeadershipCard
              name="Pradeep Kumar Tamar"
              role="CEO & Founder"
              image="pradeep.png"
              description="An accomplished IIT Roorkee alumnus with 20 years of extensive experience in IT consulting, banking, and insurance sectors. Under his visionary leadership, Tamar Software has grown into a trusted name in the industry."
            />
            <LeadershipCard
              name="Vishu Tamar"
              role="Head of Human Resources"
              image="images.jpeg"
              description="A seasoned HR professional bringing a wealth of experience in talent management, organizational development, and employee engagement. Her strategic approach helps maintain our vibrant company culture."
            />
            <LeadershipCard
              name="Dr. Atul Kumar"
              role="AI Senior Consultant"
              image="dummy-image.jpg"
              description="With a Ph.D. in Artificial Intelligence and extensive industry experience, Dr. Atul leads our AI initiatives, bringing cutting-edge machine learning solutions to our clients."
            />
          </div>
        </div>
      </section>
    </div>
  );
}