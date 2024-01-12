import React, { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import Card from "@/components/Card";
import { projects } from "@/lib/constants";
import { ProjectProps } from "@/lib/types";
import { Button } from "@/components/ui/button";

const Project = () => {
  const [viewAll, setViewAll] = useState(false);
  return (
    <section id="projects" className="mt-12">
      <div className="flex gap-8 items-center">
        <Reveal>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white flex gap-2 items-center">
            <Image
              src="/images/section/projects.png"
              alt="projects"
              width={40}
              height={40}
              priority
            />
            <span className="font-port text-3xl">Personal Projects</span>
          </h1>
        </Reveal>
        <div className="flex-1 border-t border-neutral-700"></div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        {projects
          .slice(0, viewAll ? projects.length : 3)
          .map((item: ProjectProps, i) => (
            <Card key={i} {...item} />
          ))}
      </div>
      <div className="my-6 flex justify-center">
        <Reveal>
          <Button size="sm" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "view less" : "view all"}
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default Project;
