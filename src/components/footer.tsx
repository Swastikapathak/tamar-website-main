"use client";

import { Facebook, Instagram, Linkedin, Twitter, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// Define navItems based on the Navbar component
const navItems = [
  { name: "About", href: "/about" },
  {
    name: "Capabilities",
    href: "/capabilities",
    isDropdown: true,
    dropdownItems: [
      { name: "Software Development", href: "/capabilities/software-development" },
      { name: "Web Developement", href: "/capabilities/webdevelopment" },
      { name: "Mobile Developement", href: "/capabilities/mobiledevelopment" },
      { name: "It Consulting", href: "/capabilities/it-consulting" },
      { name: "Data & AI Services", href: "/capabilities/data-ai-services" },
      { name: "Managed IT Services", href: "/capabilities/managed-it-services" },
      { name: "Testing & QA Services", href: "/capabilities/testing-qa-services" },
      { name: "RPA Development", href: "/capabilities/rpa-development" },
      { name: "Cybersecurity Services", href: "/capabilities/cybersecurity-services" },
      { name: "Cloud Solutions", href: "/capabilities/cloud-solutions" },
      { name: "Data Analytics", href: "/capabilities/data-analytics" },
      { name: "DevOps Services", href: "/capabilities/devops-services" },
    ]
  },
  {
    name: "Industries",
    href: "/industries",
    isDropdown: true,
    dropdownItems: [
      { name: "Finance", href: "/industries/finance" },
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Telecommunication", href: "/industries/telecommunication" },
      { name: "Retail", href: "/industries/retail" },
      { name: "Government", href: "/industries/government" },
      { name: "Automobile", href: "/industries/automobile" },
      { name: "Hospitality", href: "/industries/hospitality" },
      { name: "Media & Entertainment", href: "/industries/media-entertainment" },
      { name: "Infrastructure & Construction", href: "/industries/infrastructure-construction" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
    isDropdown: true,
    dropdownItems: [
      { name: "Horse & Saddle Case Study", href: "/projects/horse-and-saddle-case-study" },
      { name: "Automated Dustbins Case Study", href: "/projects/automated-dustbins-case-study" },
      { name: "Advanced Chatbot Case Study", href: "/projects/advanced-chatbot-case-study" },
      { name: "Online Venue Booking - Madnue Solutions", href: "/projects/online-venue-booking-case-study" },
      { name: "Online OPD - Naturalminds Digital Systems LLP", href: "/projects/online-opd-case-study" },
      { name: "Media Integration During Call Case Study", href: "/projects/media-phone-call-case-study" },
      { name: "Power BI Dashboard Case Study", href: "/projects/power-bi-case-study" },
      { name: "Automation of Accountability - Ganesha Software", href: "/projects/accountability-automation" },
      { name: "AI-Powered Inventory Management", href: "/projects/ai-inventory-management" },
      { name: "Smart Healthcare System", href: "/projects/smart-healthcare-system" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate an API call to subscribe the user
      // Replace this with your actual API endpoint
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail("");
        setTimeout(() => setIsSubscribed(false), 3000); // Reset after 3 seconds
      } else {
        alert("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-black text-white relative flex items-center justify-center overflow-hidden">
      <div className="container max-w-7xl py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
        >
          {/* Logo & Socials */}
          <div className="space-y-4">
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
            <p className="text-sm text-gray-400">
              Custom Software and high-value AI solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  aria-label={label}
                  className="group p-2 rounded-full bg-gray-800/50 transition-all duration-300 hover:bg-[#4F45E4]/50 hover:scale-110"
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-[#4F45E4] transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#4F45E4]">Quick Links</h3>
            <ul className="space-y-2">
              {navItems
                .filter((item) => !item.isDropdown)
                .map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-[#4F45E4] transition-colors duration-300 hover:translate-x-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#4F45E4]">Capabilities</h3>
            <ul className="space-y-2">
              {navItems
                .find((item) => item.name === "Capabilities")
                ?.dropdownItems?.slice(0, 6)
                .map((dropdownItem, index) => (
                  <li key={index}>
                    <Link
                      href={dropdownItem.href}
                      className="text-sm text-gray-400 hover:text-[#4F45E4] transition-colors duration-300 hover:translate-x-1"
                    >
                      {dropdownItem.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#4F45E4]">Industries</h3>
            <ul className="space-y-2">
              {navItems
                .find((item) => item.name === "Industries")
                ?.dropdownItems?.slice(0, 6)
                .map((dropdownItem, index) => (
                  <li key={index}>
                    <Link
                      href={dropdownItem.href}
                      className="text-sm text-gray-400 hover:text-[#4F45E4] transition-colors duration-300 hover:translate-x-1"
                    >
                      {dropdownItem.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#4F45E4]">Projects</h3>
            <ul className="space-y-2">
              {navItems
                .find((item) => item.name === "Projects")
                ?.dropdownItems?.slice(0, 6)
                .map((dropdownItem, index) => (
                  <li key={index}>
                    <Link
                      href={dropdownItem.href}
                      className="text-sm text-gray-400 hover:text-[#4F45E4] transition-colors duration-300 hover:translate-x-1"
                    >
                      {dropdownItem.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </motion.div>

        {/* Contact Section with Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Newsletter Subscription (Left Side) */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#4F45E4]">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Stay updated with the latest news, insights, and updates from Tamar Software.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-md bg-gray-700 px-4 py-2 text-white focus:ring-2 focus:ring-[#4F45E4] focus:outline-none"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex items-center space-x-2 bg-transparent border-2 border-[#4F45E4] px-4 py-2 text-white font-semibold rounded-md 
                  hover:bg-[#4F45E4] hover:text-white transition focus:ring-2 focus:ring-[#4F45E4] focus:outline-none"
              >
                <Send className="h-5 w-5" />
                <span>Subscribe</span>
              </motion.button>
            </form>
            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-sm text-[#4F45E4]"
              >
                Thank you for subscribing!
              </motion.p>
            )}
          </div>

          {/* Contact Details (Right Side) */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#4F45E4]">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="text-sm">A-0313, Logix Technova, Noida, Uttar Pradesh, India 2013</li>
              <li>
                <Link
                  href="mailto:contact@tamarsoftware"
                  className="text-sm hover:text-[#4F45E4] transition-colors duration-300"
                >
                  contact@tamarsoftware
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+919650836300"
                  className="text-sm hover:text-[#4F45E4] transition-colors duration-300"
                >
                  +91-9650836300
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800/50 mt-12 pt-8 text-center"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Tamar Software. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}