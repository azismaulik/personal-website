import React from "react";
import { Reveal } from "./Reveal";

const CardExperience = () => {
  return (
    <div className="flex-1 rounded-lg p-4 bg-white dark:bg-neutral-900 drop-shadow-xl">
      <Reveal>
        <h1 className="text-xl font-bold text-neutral-900 dark:text-white">
          Instagram
        </h1>
      </Reveal>
      <Reveal>
        <h1 className="mt-1 text-lg text-neutral-900 dark:text-white font-semibold dark:font-normal">
          Senior Frontend Developer
        </h1>
      </Reveal>
      <Reveal>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          2020 - present
        </p>
      </Reveal>
    </div>
  );
};

export default CardExperience;
