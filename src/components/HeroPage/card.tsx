import Link from "next/link";
import { Carousel, Card } from "@/src/components/ui/apple-cards";

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

export default function CardHoverEffectDemo() {
  const cards = data.map((card, index) => (
    <Link key={card.src} href={card.href}>
      <Card card={card} index={index} />
    </Link>
  ));

  return (
    <div className="max-w-7xl mx-auto px-8">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center text-[#6442FA] mb-8">
        Solutions for Companies
      </h1>
      <p className="text-lg text-center mb-12 text-white">
        We offer Custom Web Applications Development, Software Applications, Mobile Applications, Cloud Computing,
        SharePoint, ERP, CRM, Big Data, Blockchain, BI and analytics, IoT, AI, and Digital.
      </p>
        <Carousel items={cards} />
    </div>
  );
}
