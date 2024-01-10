"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { menus } from "@/lib/constants";
import { Download } from "lucide-react";
import { useRouter } from "next/navigation";

export function Menu() {
  const router = useRouter();

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
          className="lg:hidden relative font-port text-lg">
          Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        {menus.map((menu: any, i: number) => (
          <DropdownMenuItem
            className="flex items-center gap-2 font-port text-md"
            key={i}
            onClick={() => router.push(menu.url)}>
            {menu.icon}
            <span>{menu.name}</span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleDownload}
          className="flex items-center gap-2 font-port text-md">
          <Download className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-600 dark:text-neutral-200 group-hover:text-cyan-500" />
          <span>Download CV</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
