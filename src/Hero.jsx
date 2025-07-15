import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/-vaibhav-srivastava08/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#0A66C2"/>
        <path d="M17 17h-2.5v-3.5c0-.8-.3-1.3-1-1.3-.6 0-1 .4-1 1.3V17H10V10h2.5v1c.3-.5 1-1.2 2.1-1.2 1.5 0 2.4 1 2.4 2.8V17zM7.5 8.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM8.8 17H6.2V10h2.6v7z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/vaibhavsrivastava00",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#181717"/>
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 7.07c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Vaibhav_Srivastava_08/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M19.5 31.5L31.5 19.5" stroke="#FFA116" strokeWidth="3" strokeLinecap="round"/>
          <path d="M25 45C35.4934 45 44.5 35.9934 44.5 25.5C44.5 15.0066 35.4934 6 25 6C14.5066 6 5.5 15.0066 5.5 25.5C5.5 35.9934 14.5066 45 25 45Z" stroke="#FFA116" strokeWidth="3"/>
          <path d="M31 19L19 31" stroke="#292D3E" strokeWidth="3" strokeLinecap="round"/>
          <path d="M36.5 36.5L13.5 13.5" stroke="#292D3E" strokeWidth="3" strokeLinecap="round"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vaibhav_sri08/",
    icon: (
      <svg width="32" height="32" viewBox="0 0 448 448" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="insta-gradient3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f9ce34"/>
            <stop offset="25%" stopColor="#ee2a7b"/>
            <stop offset="50%" stopColor="#6228d7"/>
            <stop offset="75%" stopColor="#0095f7"/>
            <stop offset="100%" stopColor="#00c7b7"/>
          </linearGradient>
        </defs>
        <rect x="24" y="24" width="400" height="400" rx="100" fill="url(#insta-gradient3)"/>
        <rect x="104" y="104" width="240" height="240" rx="60" fill="none" stroke="#fff" strokeWidth="32"/>
        <circle cx="224" cy="224" r="72" fill="none" stroke="#fff" strokeWidth="32"/>
        <circle cx="320" cy="128" r="24" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "X",
    url: "https://x.com/Ctrl_C_Freak",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="6" fill="#000"/>
        <path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47A.75.75 0 1 0 6.47 7.53L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 1 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z" fill="#fff"/>
      </svg>
    ),
  },
];

const Hero = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -60]);
  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="Hero flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 px-1 md:px-50 py- md:py-5 h-screen md:-mt-16"
      id="home"
    >
    {/* Left Column */}
    <div className="flex-1 flex flex-col items-start md:items-start justify-center py-5 max-w-2xl w-full">
      <p className="text-lg text-zinc-400 mb-2">Hi I'm</p>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-2">Vaibhav Srivastava</h1>
      <div className="mb-6 px-1 text-xs sm:text-sm md:text-1.5xl leading-snug font-normal text-zinc-700 dark:text-zinc-300 max-w-2xl md:max-w-xl text-left whitespace-normal">
        <span className="block md:whitespace-nowrap">
          Transforming ideas into interactive and seamless 
        </span>
        <span className="block md:whitespace-nowrap">
        digital experiences with cutting-edge <span className="text-purple-400">fullstack</span> development.
        </span>
      </div>
      <div className="flex gap-4 mb-6 flex-row flex-wrap justify-center md:justify-start w-full">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <span className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
              {item.icon}
            </span>
            <span className="mt-2 text-xs opacity-0 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300 font-semibold">
              {item.name}
            </span>
          </a>
        ))}
      </div>
      <div className="w-full flex justify-center md:justify-start">
        <button
          className="border-2 border-zinc-800 dark:border-zinc-200 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 px-8 py-2 rounded font-semibold transition shadow-md text-lg"
          onClick={() => window.open('/resume/resume.pdf', '_blank')}
        >
          Resume
        </button>
      </div>
    </div>
    {/* Right Column (Image) */}
    <div className="flex-1 object-cover flex items-center py-2 justify-center ">
      <img
        src="/images/pfp.jpg"
        alt="profile"
        className="object-cover w-32 h-32 md:w-48 md:h-48 rounded-full shadow-md"
      />
    </div>
    </motion.div>
  );
}

export default Hero; 