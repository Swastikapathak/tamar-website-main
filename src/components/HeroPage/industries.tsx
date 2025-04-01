"use client";

import { 
  Building2, 
  Stethoscope, 
  HardHat, 
  Car, 
  UtensilsCrossed, 
  Film, 
  ShoppingBag as Shopping, 
  Phone, 
  Landmark,
} from "lucide-react";

const industries = [
  { icon: Building2, name: 'Finance', description: 'Innovative financial solutions and digital banking transformations' },
  { icon: Stethoscope, name: 'Healthcare', description: 'Advanced healthcare systems and patient care solutions' },
  { icon: HardHat, name: 'Infrastructure & Construction', description: 'Smart construction management and infrastructure solutions' },
  { icon: Car, name: 'Automobile', description: 'Cutting-edge automotive technology solutions' },
  { icon: UtensilsCrossed, name: 'Hospitality', description: 'Modern hospitality management systems' },
  { icon: Film, name: 'Media and Entertainment', description: 'Digital media solutions and entertainment platforms' },
  { icon: Shopping, name: 'Retail', description: 'Innovative retail and e-commerce solutions' },
  { icon: Phone, name: 'Telecommunication', description: 'Advanced telecommunication systems' },

  { icon: Landmark, name: 'Government', description: 'Digital transformation solutions for government services' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-[#6442FA]">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Delivering tailored solutions across diverse industries to drive innovation and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 rounded-2xl p-6 overflow-hidden 
                border border-gray-800/50 transition-all duration-300 ease-in-out
                hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 
                hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top-right corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full 
                -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 
                transition-all duration-300" />

              <div className="relative flex items-start space-x-4 z-10">
                <div className="p-3 bg-[#6442FA]/20 rounded-xl group-hover:bg-[#6442FA]/40 
                  transition-all duration-300 transform group-hover:scale-110">
                  <industry.icon className="w-7 h-7 text-[#6442FA] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white 
                    group-hover:text-[#6442FA] transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] 
                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}