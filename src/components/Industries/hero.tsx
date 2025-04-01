"use client";

import { motion } from "framer-motion";
import { Building2, Stethoscope, HardHat, Car, UtensilsCrossed, Film, ShoppingBag, Phone, GraduationCap, Landmark, ArrowRight } from "lucide-react";
const industries = [
  {
    name: "Finance",
    description:
      "Our IT and Automation Solutions for Finance Companies empower businesses to use advanced automation and analytical tools to meet unique demands.",
    icon: Building2,
    href: "/industries/finance",
  },
  {
    name: "Healthcare",
    description:
      "Our Software Solutions for Healthcare Industry revolutionize patient care and streamline the administrative process with innovative solutions to meet the needs.",
    icon: Stethoscope,
    href: "/industries/healthcare",
  },
  {
    name: "Infrastructure & Construction",
    description:
      "Our Cloud Infrastructure Management Software Solutions ensure on-time delivery and boost management. The suite of tools ensures easy management.",
    icon: HardHat,
    href: "/industries/infrastructure-construction",
  },
  {
    name: "Automotive",
    description:
      "The customized innovative solutions for the automobile industry are designed to enhance quality and accelerate launch time by optimizing production.",
    icon: Car,
    href: "/industries/automotive",
  },
  {
    name: "Hospitality",
    description:
      "Improving guest experience needs proper management and prompt service. Our Software Development for the Hospitality Industry ensures streamlining operations and data-driven management solutions.",
    icon: UtensilsCrossed,
    href: "/industries/hospitality",
  },
  {
    name: "Media & Entertainment",
    description:
      "Take your content creation to the next level with our Custom Media and Entertainment Software Solutions. We create software to meet the fast-paced demands.",
    icon: Film,
    href: "/industries/media-entertainment",
  },
  {
    name: "Retail",
    description:
      "Retail industries face issues when left unmanaged. At Tamar Software, we create software to ensure your retail space remains within one point and ensure transparency and efficiency.",
    icon: ShoppingBag,
    href: "/industries/retail",
  },
  {
    name: "Telecommunication",
    description:
      "To stay ahead in the telecommunication sector, choose our services and products. We create robust solutions for telecommunication sectors to enhance connectivity and support technological advancements.",
    icon: Phone,
    href: "/industries/telecommunication",
  },
  // {
  //   name: "Education",
  //   description:
  //     "Create education software customized to meet your unique requirements. Our experts ensure to understand your basic demands and add a suite of features for successful results.",
  //   icon: GraduationCap,
  //   href: "/industries/education",
  // },
  {
    name: "Government",
    description:
      "Our Cloud-Based Software Solutions for Businesses can be beneficial for government sectors. The advanced tools and features ensure fulfilling the needs.",
    icon: Landmark,
    href: "/industries/government",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen pt-20 bg-black text-white">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6442FA]">
              Industries
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We aim to make the one-stop solution for different industries looking for advanced IT Services and Solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-900/50 rounded-xl p-6 overflow-hidden border border-gray-800/50 
                  transition-all duration-300 ease-in-out hover:bg-[#6442FA]/10 hover:border-[#6442FA]/50 
                  hover:shadow-[0_10px_40px_rgba(79,69,228,0.2)] hover:-translate-y-2"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-[#6442FA]/5 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Top-right corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#6442FA]/10 rounded-full 
                  -translate-x-12 -translate-y-12 opacity-0 group-hover:opacity-100 
                  transition-all duration-300" />

                <div className="relative flex flex-col items-center text-center z-10">
                  <div className="p-3 bg-[#6442FA]/20 rounded-xl group-hover:bg-[#6442FA]/40 
                    transition-all duration-300 transform group-hover:scale-110">
                    <industry.icon className="w-8 h-8 text-[#6442FA] transition-colors duration-300" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 text-white group-hover:text-[#6442FA] transition-colors duration-300">
                    {industry.name}
                  </h2>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {industry.description}
                  </p>
       
                  <motion.a
                    href={industry.href}
                    className="mt-4 inline-flex items-center px-3 py-1 rounded bg-transparent border border-[#6442FA] text-white 
                      hover:bg-[#6442FA] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.a>

                </div>

                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#6442FA] 
                  scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-4">
                  <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pt-64 pb-9 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                      className="absolute inset-0 size-full object-cover brightness-125 saturate-0"
                    />
                    <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
                    <div
                      aria-hidden="true"
                      className="absolute top-1/2 left-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                    >
                      <div
                        style={{
                          clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="aspect-1097/845 w-[68.5625rem] bg-[#6442FA]/40 opacity-40"
                      />
                    </div>
                    <figure className="relative isolate">
                      <svg
                        fill="none"
                        viewBox="0 0 162 128"
                        aria-hidden="true"
                        className="absolute -top-4 -left-2 -z-10 h-32 stroke-[#6442FA]"
                      >
                        <path
                          d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                          id="0ef284b8-28c2-426e-9442-8655d393522e"
                        />
                        <use x={86} href="#0ef284b8-28c2-426e-9442-8655d393522e" />
                      </svg>
                      <img
                        alt=""
                        src="https://tailwindui.com/plus-assets/img/logos/workcation-logo-white.svg"
                        className="h-8 w-auto"
                      />
                      <blockquote className="mt-6 text-xl/8 font-semibold text-white">
                        <p>
                          “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
                          arcu gravida natoque erat et cursus tortor.”
                        </p>
                      </blockquote>
                      <figcaption className="mt-6 text-sm/6 text-gray-300">
                        <strong className="font-semibold text-white">Judith Rogers,</strong> CEO at Workcation
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div>
                  <div className="text-base/7 text-white lg:max-w-lg">
                    <p className="text-base/7 font-semibold text-[#6442FA]">Company Values</p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-3xl">
                      Best Software & AI Development Company in North India
                    </h1>
                    <div className="max-w-xl">
                      <p className="mt-6 text-white">
                        At  <span className="text-[#6442FA]"> Tamar Software, </span> we have always aimed to become one of the leading custom software solution providers. 
                        Specialising in developing exceptional software, our AI solutions are customised to meet the unique requirements 
                        of different industries. Our expertise in working for different industries, including healthcare, education, finance, 
                        construction, et cetera, makes sure that choosing our services can actually be beneficial. Make use of innovative 
                        solutions to drive growth and efficiency. Irrespective of your requirements and challenges, reaching us will always 
                        help you to get the best IT services and solutions. We are a custom software development company that assures 
                        outstanding services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}