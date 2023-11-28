import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectProps } from "@/lib/types";

export default function Card({
  name,
  image,
  description,
  link,
  tags,
  stacks,
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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
