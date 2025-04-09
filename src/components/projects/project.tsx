"use client";
import Link from "next/link";
import { Carousel, Card } from "@/src/components/ui/apple-cards";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Link key={card.src} href={card.href}>
      <Card card={card} index={index} />
    </Link>
  ));

  return (
    <div className="w-full h-full py-20">
    <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-light text-neutral-800 dark:text-neutral-200">
      Recent Projects
    </h2>
    <p className="max-w-7xl pl-4 mx-auto text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4">
      We have provided software development solutions and AI-based software solutions to our clients from countries around the world.
    </p>
    <Carousel items={cards} />
  </div>
  );
}


const data = [
  {
    category: "Case Study",
    title: "Horse and Saddles 3D Modelling",
    src: "/project-horse-and-saddle.png",
    href: "/projects/horse-and-saddle-case-study",
  },
  {
    category: "Case Study",
    title: "Automated Dustbins",
    src: "/project2.png",
    href: "/projects/automated-dustbins-case-study",
  },
  {
    category: "Case Study",
    title: "Advanced Chatbot",
    src: "/chatbot.png",
    href: "/projects/advanced-chatbot-case-study",
  },
  {
    category: "Case Study",
    title: "Online Venue Booking",
    src: "/venue.png",
    href: "/projects/online-venue-booking-case-study",
  },
  {
    category: "Case Study",
    title: "Online OPD",
    src: "/opd.png",
    href: "/projects/online-opd-case-study",
  },
  {
    category: "Case Study",
    title: "Media Integration During Call",
    src: "/project-img4.png",
    href: "/projects/media-phone-call-case-study",
  },
  {
    category: "Case Study",
    title: "Automation of Accountability",
    src: "/project-power-BI.png",
    href: "/projects/power-bi-case-study"
  },
];
