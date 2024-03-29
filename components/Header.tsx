"use client";

import { useScroll, motion, useSpring } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { ArrowDownToLine, PersonStanding } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
import { Menu } from "./Menu";
import Link from "next/link";
import { menus } from "@/lib/constants";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
      <header
        className={` ${
          isScroll
            ? "bg-white dark:bg-neutral-900 top-0 lg:top-2 drop-shadow-xl"
            : "bg-transparent top-0"
        } container max-w-5xl mx-auto flex justify-between items-center px-4 py-3 fixed left-0 right-0 z-20 lg:rounded-lg transition-all duration-300`}>
        <Reveal>
          <Link href="/" aria-label="Logo">
            <PersonStanding className="w-16 h-16 text-neutral-900 dark:text-neutral-200 group-hover:text-cyan-500" />
          </Link>
        </Reveal>
        <Reveal>
          <div
            className={`${
              isScroll
                ? "dark:border-neutral-700 border-neutral-400"
                : "dark:border-neutral-900 border-white"
            } bg-transparent dark:bg-neutral-900 border hidden lg:flex items-center rounded-md px-4 gap-2`}>
            {menus.map((item, index) => (
              <Fragment key={index}>
                <Link
                  href={item.url}
                  className={`${
                    pathname.includes(item.url)
                      ? "text-cyan-500"
                      : "text-neutral-900 dark:text-neutral-200"
                  } font-semibold group text-sm flex items-center gap-2 rounded px-2 py-[6px] tracking-wider md:text-base cursor-pointer transition`}>
                  {
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-600 dark:text-neutral-200 group-hover:text-cyan-500" />
                  }
                  <span className="group-hover:text-cyan-500">{item.name}</span>
                </Link>
                {index < menus.length - 1 && (
                  <span className="h-6 w-[1px] bg-neutral-300 dark:bg-neutral-700"></span>
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>
        <div className="flex gap-2 items-center">
          <Reveal>
            <DarkModeToggle />
          </Reveal>
          <Reveal>
            <Button
              onClick={handleDownload}
              variant="outline"
              className="hidden transition lg:flex gap-2 items-center font-port">
              <ArrowDownToLine />
              <span>Download CV</span>
            </Button>
          </Reveal>
          <Reveal>
            <Menu />
          </Reveal>
        </div>
      </header>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-[0%] bg-gradient-to-r from-violet-100 via-violet-600 to-neutral-900 dark:from-neutral-900 dark:via-violet-900 dark:to-white z-20"
        style={{ scaleX }}
      />
    </>
  );
};

export default Header;
