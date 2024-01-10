"use client";

import GithubCalendar from "@/components/GithubCalendar";
import About from "@/sections/About";
import Blog from "@/sections/Blog";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Project from "@/sections/Project";
import Technology from "@/sections/Technology";

export default function Home() {
  return (
    <div className="my-10 sm:my-20">
      <Hero />
      <About />
      <Technology />
      <Experience />
      <Project />
      {/* <Blog /> */}
      <Contact />
      {/* <GithubCalendar /> */}
    </div>
  );
}
