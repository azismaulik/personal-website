"use client";

import Image from "next/image";
import React from "react";
import { Reveal } from "@/components/Reveal";
import profile from "@/public/images/profile.png";

const Hero = () => {
  return (
    <div className="flex relative items-center flex-col lg:flex-row sm:gap-6">
      <Reveal>
        <Image
          src={profile}
          alt="me"
          width={220}
          height={220}
          className="aspect-square w-[250px] sm:w-[300px]"
        />
      </Reveal>
      <div className="text-neutral-900 dark:text-white leading-tight md:text-7xl font-bold text-4xl sm:text-5xl text-center lg:text-left font-port">
        <div className="flex justify-center lg:justify-start">
          <Reveal>
            <h1>Azis M.</h1>
          </Reveal>
        </div>
        <div className="flex justify-center lg:justify-start">
          <Reveal>
            <h1>Frontend Developer.</h1>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Hero;
