import CardExperience from "@/components/CardExperience";
import { Reveal } from "@/components/Reveal";
import { experiences } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <section className="mt-12">
      <div className="flex gap-8 items-center">
        <Reveal>
          <h1 className="text-2xl flex gap-2 items-center font-bold text-neutral-900 dark:text-white">
            <Image
              src="/images/section/work.svg"
              alt="experience"
              width={40}
              height={40}
              priority
            />
            <span className="font-port text-3xl">Work Experience</span>
          </h1>
        </Reveal>
        <div className="flex-1 border-t border-neutral-400 dark:border-neutral-600"></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 p-4 rounded-xl border border-neutral-400 dark:border-neutral-600">
        {experiences.map((item, i) => (
          <CardExperience key={i} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
