"use client";
import React from "react";
import { ContainerScroll } from "@/src/components/ui/container-scroll-animation";
import Image from "next/image";

export function Team() {
  return (
    <div className="flex flex-col overflow-hidden bg-black mt-[-24]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl mb-36 md:text-[6rem] font-semibold text-[#6442FA] ">
              Meet Our Team
            </h1>
          </>
        }
      >
        <Image
          src={`/hover.jpeg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top "
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
