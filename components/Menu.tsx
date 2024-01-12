"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, MonitorPlay, ProjectorIcon } from "lucide-react";
import Link from "next/link";

export function Menu() {
  const handleDownload = () => {
    const cvUrl = "/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Azis Maulana Malik | CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="lg:hidden relative font-port text-lg"
        >
          Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        <DropdownMenuItem>
          <Link
            href="/#projects"
            className="flex items-center gap-2 font-port text-md"
          >
            <ProjectorIcon className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-600 dark:text-neutral-200 group-hover:text-cyan-500" />
            <span>Projects</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href="/playgrounds"
            className="flex items-center gap-2 font-port text-md"
          >
            <MonitorPlay className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-600 dark:text-neutral-200 group-hover:text-cyan-500" />
            <span>Playgrounds</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleDownload}
          className="flex items-center gap-2 font-port text-md"
        >
          <Download className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-600 dark:text-neutral-200 group-hover:text-cyan-500" />
          <span>Download CV</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
