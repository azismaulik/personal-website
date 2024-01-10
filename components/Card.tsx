import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectProps } from "@/lib/types";
import { ChevronsRight } from "lucide-react";
import { generateRandomColor } from "@/helper/GenerateRandomColor";

export default function Card({
  name,
  image,
  description,
  link,
  tags,
  stacks,
  landscape,
}: ProjectProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Reveal width="100%">
            <div className="group flex-1 h-[300px] bg-neutral-100 dark:bg-neutral-900 rounded-lg shadow-md relative overflow-hidden cursor-pointer transition-opacity">
              <h1 className="absolute bottom-[40%] -rotate-12 group-hover:rotate-0 transition-all left-5 font-bold text-3xl font-port z-10 text-neutral-800 dark:text-white">
                {name}
              </h1>
              <Image
                className="absolute -right-12 rotate-12 group-hover:rotate-0 bottom-0 rounded group-hover:right-0 transition-all w-[60%]"
                src={`/images/project/${image}`}
                alt="project"
                width={500}
                height={250}
              />
            </div>
          </Reveal>
        </DialogTrigger>
        <DialogContent className="flex w-full md:w-[80%] gap-4">
          <Image
            src={`/images/project/${image}`}
            alt={name ? name : "project"}
            width={500}
            height={500}
            className="w-1/2 rounded-lg"
          />
          <div className="flex-1 flex flex-col gap-2">
            <Link href={link || ""} className="font-port text-2xl font-bold">
              {name}
            </Link>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
            <div className="flex flex-wrap gap-x-2">
              {stacks?.map((stack) => (
                <Fragment key={stack}>
                  <span
                    style={{ color: generateRandomColor() }}
                    className={`font-port font-semibold text-sm`}>
                    #{stack}
                  </span>
                </Fragment>
              ))}
            </div>
            {link && (
              <Link
                href={link}
                target="_blank"
                className="text-neutral-800 dark:text-white flex items-center mt-auto font-semibold font-port">
                <p>live view</p>
                <ChevronsRight size={20} />
              </Link>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
