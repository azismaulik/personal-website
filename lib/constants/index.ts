import { ProjectorIcon, MonitorPlay, Wallpaper } from "lucide-react";

export const menus = [
  {
    name: "Project",
    url: "/#projects",
    icon: ProjectorIcon,
  },
  // {
  //   name: "Blog",
  //   url: "/blog",
  //   icon: Wallpaper,
  // },
  {
    name: "Playgrounds",
    url: "/playgrounds",
    icon: MonitorPlay,
  },
];

export const technologies = [
  { label: "HTML", icon: "html.svg" },
  { label: "CSS", icon: "css.svg" },
  { label: "JavaScript", icon: "javascript.svg" },
  { label: "TypeScript", icon: "typescript.png" },
  { label: "PHP", icon: "php.svg" },
  { label: "React", icon: "react.svg" },
  { label: "Vite", icon: "vite.svg" },
  { label: "Vue.js", icon: "vuejs.svg" },
  { label: "Next.js", icon: "next.svg" },
  { label: "Laravel", icon: "laravel.svg" },
  { label: "Tailwind CSS", icon: "tailwind.svg" },
  { label: "Bootstrap", icon: "bootstrap.svg" },
  { label: "SASS", icon: "sass.svg" },
  { label: "Shadcn UI", icon: "shadcn.png" },
  { label: "Framer Motion", icon: "framer-motion.svg" },
  { label: "Material UI", icon: "material-ui.svg" },
  { label: "Chakra UI", icon: "chakra-ui.svg" },
  { label: "Express.js", icon: "express.svg" },
  { label: "Node.js", icon: "nodejs.svg" },
  { label: "MongoDB", icon: "mongodb.svg" },
  { label: "MySQL", icon: "mysql.png" },
  { label: "WordPress", icon: "wordpress.svg" },
  { label: "Elementor", icon: "elementor.png" },
  { label: "React Native", icon: "react-native.svg" },
  { label: "Git", icon: "git.svg" },
  { label: "GitHub", icon: "github.svg" },
  { label: "GitLab", icon: "gitlab.svg" },
  { label: "Figma", icon: "figma.svg" },
];

export const projects = [
  {
    name: "Spotify Clone",
    image: "spotify-clone.png",
    description:
      "Aplikasi web untuk menampilkan data lagu dan playlist dari Spotify dan juga mempunyai fitur sama dengan Spotify seperti putar lagu, search, shuffle, dll.",
    link: null,
    stacks: [
      "React",
      "NextJS",
      "Javascript",
      "TailwindCSS",
      "Spotify API",
      "Recoil",
      "Shadcn UI",
    ],
  },
  {
    name: "Movie Collection",
    image: "movie-collections.png",
    description: "Aplikasi web untuk menampilkan data film dari TMDB API.",
    link: "https://movie-collections.vercel.app/",
    stacks: ["React", "TailwindCSS", "JavaScript", "TMDB API"],
  },
  {
    name: "Game Collections",
    image: "game-collections.png",
    description: "Aplikasi web untuk menampilkan data game dari RAWG API.",
    link: "https://game-collections.vercel.app/",
    stacks: ["React", "NextJS", "Javascript", "TailwindCSS", "RAWG API"],
  },
  {
    name: "AI Chat & Image generator",
    image: "ai.png",
    description:
      "Aplikasi web untuk dapat berkomunikasi dengan AI dan membuat gambar AI dari OpenAI API.",
    link: null,
    stacks: ["React", "TailwindCSS", "DaisyUI", "Javascript", "OpenAI API"],
  },

  {
    name: "Game News",
    image: "game-news.png",
    description: "Aplikasi web untuk menampilkan data berita mengenai game.",
    link: "https://azis-game-news.vercel.app/",
    stacks: ["React", "Javascript", "TailwindCSS", "DaisyUI", "Game News API"],
  },
  {
    name: "Islamic App",
    image: "quran-app.png",
    description:
      "Aplikasi web untuk menampilkan quran, doa-doa, dan jadwal shalat.",
    link: "https://azis-quran-app.vercel.app/",
    stacks: ["React", "TailwindCSS", "JavaScript", "DaisyUI", "Quran API"],
  },
  {
    name: "Playgrounds",
    image: "playgrounds.png",
    description: "Section yang berguna seperti memilih warna, kalkulator, dll.",
    link: null,
    stacks: [
      "NextJS",
      "React",
      "TypeScript",
      "TailwindCSS",
      "FramerMotion",
      "HeadlessUI",
    ],
  },

  {
    name: "ZeitPlan App (UI)",
    image: "zeitplan.png",
    description: "UI for Zeitplan App.",
    link: "https://zeitplan-ui.vercel.app/",
    stacks: ["React", "Javascript", "TailwindCSS", "DaisyUI", "AOS"],
  },
  {
    name: "Game Events (UI)",
    image: "game-events.png",
    description: "UI for Game Events App.",
    link: "https://azis-game-events.vercel.app/",
    stacks: ["React", "Javascript", "TailwindCSS", "DaisyUI"],
  },
];

export const experiences = [
  {
    title: "Website Developer",
    company_name: "Freelance",
    date: "Jan 2023 - Present",
  },
  {
    title: "Frontend Developer",
    company_name: "Al Hilal",
    date: "Okt 2022 - Present",
  },
  {
    title: "Website Developer",
    company_name: "CV Cipta Daya Informatika",
    date: "Aug 2021 - Nov 2021",
  },
];
