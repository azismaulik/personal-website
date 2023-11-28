import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import React, { useState } from "react";

const About = () => {
  const [show, setShow] = useState("line-clamp-5");
  return (
    <section className="mt-12">
      <div className="flex gap-8 items-center">
        <Reveal>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white flex gap-2 items-center">
            <Image
              src="/images/section/about.svg"
              alt="line"
              width={40}
              height={40}
              priority
            />
            <span className="font-port text-3xl">About me</span>
          </h1>
        </Reveal>
        {/* <Reveal> */}
        <div className="flex-1 border-t border-neutral-400 dark:border-neutral-600"></div>
        {/* </Reveal> */}
      </div>
      <Reveal>
        <div className="mt-4 text-neutral-900 dark:text-white text-sm sm:font-semibold font-poppins tracking-wide leading-6">
          <p className={show}>
            Hello there!<span className="text-3xl">🖐️</span>My name is Azis, and
            I am a passionate Frontend Developer. I thrive in the world of web
            development and love crafting engaging and interactive user
            experiences on web pages. As a frontend developer, I possess
            extensive experience in translating visual designs into elegant and
            responsive HTML, CSS, and JavaScript code. I am committed to
            delivering intuitive and enjoyable user interfaces, always
            prioritizing performance, accessibility, and cross-device
            compatibility. With a deep understanding of the latest technologies
            and popular frameworks like React, Vue, Angular, and more, I am
            familiar with tools such as webpack, gulp, and npm to manage and
            optimize web development projects efficiently. Collaboration with
            cross-functional teams is something I cherish, as I believe
            effective communication and seamless teamwork are crucial for
            creating outstanding products. I am an avid learner, constantly
            keeping myself updated with the latest industry trends, ensuring I
            remain relevant and continue to provide creative and innovative
            solutions to users. Beyond coding, I find solace in listening to
            music, playing games, and exploring the great outdoors, which also
            fuels my inspiration and brings balance to my professional life.
            Thank you for taking the time to get to know me. I am always open to
            new collaborations and exciting opportunities. Feel free to reach
            out if you'd like to discuss or work together. See you soon!
          </p>
        </div>
      </Reveal>
      <Reveal>
        <span
          className="text-violet-500 cursor-pointer"
          onClick={() =>
            setShow(
              show === "line-clamp-5" ? "line-clamp-none" : "line-clamp-5"
            )
          }
        >
          {show === "line-clamp-5" ? "read more" : "read less"}
        </span>
      </Reveal>
    </section>
  );
};

export default About;
