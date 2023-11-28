import Image from "next/image";
import React, { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { technologies } from "@/lib/constants";

const Technology = () => {
  return (
    <section className="mt-12">
      <div className="flex gap-8 items-center">
        <Reveal>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white flex gap-2 items-center">
            <Image
              src="/images/section/tech.png"
              alt="technology"
              width={40}
              height={40}
              priority
            />
            <span className="font-port text-3xl">Technology</span>
          </h1>
        </Reveal>
        <div className="flex-1 border-t border-neutral-700"></div>
      </div>
      <div className="grid grid-cols-4 sm:flex flex-wrap gap-4 mt-6">
        {technologies.map((item, i) => (
          <Reveal key={i}>
            <TechnologyCard icon={item.icon} label={item.label} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

const TechnologyCard = ({ icon, label }: { icon: string; label: string }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="rounded-xl p-4 flex justify-center items-center w-[82px] h-[82px] bg-neutral-100 dark:bg-neutral-900"
    >
      {isHover ? (
        <p className="text-sm font-port text-center drop-shadow-[0_5px_5px_rgba(0,220,50,1)]">
          {label}
        </p>
      ) : (
        <Image
          src={`/images/tech/${icon}`}
          width={50}
          height={50}
          alt={icon}
          className="aspect-square"
        />
      )}
    </div>
  );
};

export default Technology;
