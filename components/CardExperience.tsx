import React from "react";
import { Reveal } from "./Reveal";
import { ExperienceProps } from "@/lib/types";

const CardExperience = ({ company_name, title, date }: ExperienceProps) => {
  return (
    <div className="flex-1 rounded-lg p-4 bg-white dark:bg-neutral-900 drop-shadow-xl">
      <Reveal>
        <h1 className="text-xl font-bold text-neutral-900 dark:text-white">
          {company_name}
        </h1>
      </Reveal>
      <Reveal>
        <h1 className="mt-1 text-lg text-neutral-900 dark:text-white font-semibold dark:font-normal">
          {title}
        </h1>
      </Reveal>
      <Reveal>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {date}
        </p>
      </Reveal>
    </div>
  );
};

export default CardExperience;
