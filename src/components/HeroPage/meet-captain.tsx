import Image from "next/image";
import React from "react";

const QUOTE1 = {
  author: "Pradeep Kumar Tamar",
  position: "Founder and CEO, Tamar Software",
  quote: `Pradeep Kumar Tamar, CEO of Tamar Software, is an accomplished IIT Roorkee alumnus with 20 years of extensive experience in IT consulting and the banking and insurance sectors. At Tamar Software, Pradeep leads with passion, integrity, and a commitment to empowering teams, driving growth, and fostering innovation.`,
  image: "/pardeep.png",
};

const QuotePage1 = () => {
  return (
    <section className="bg-black overflow-hidden isolate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col lg:flex-row items-center lg:gap-8 gap-4">
          <div className="w-full lg:w-[350px]">
            <Image
              alt="Pradeep Kumar Tamar"
              src={QUOTE1.image}
              width={1600}
              height={0}
              className="rounded-xl bg-indigo-50 w-full h-auto lg:rounded-3xl"
            />
          </div>
          <blockquote className="relative text-center sm:text-left text-white w-full lg:w-3/5">
            <p className="text-2xl italic font-bold text-[#6442FA] mb-4">Meet Our Captain</p>
            <p className="text-base sm:text-lg leading-relaxed relative">
              {QUOTE1.quote}
            </p>
            <figcaption className="text-sm lg:text-base mt-2 lg:mt-4">
              <div className="font-semibold text-white ">{QUOTE1.author}</div>
              <div className="text-xs sm:text-sm font-normal text-white">
                {QUOTE1.position}
              </div>
            </figcaption>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default QuotePage1;
