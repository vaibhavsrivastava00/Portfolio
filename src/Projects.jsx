import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    name: "Prompt Pilot",
    description: "Developed a VS Code extension that helps developers auto-generate and run commands via an AI-powered task interpreter.",
    image: "/images/promptpilot.jpg",
    github: "https://github.com/vaibhavsrivastava00/PromptPilot"
  },
  {
    name: "Sign Language to Text Converter",
    description: "Converts real-time sign language gestures to text using CNN and generates corresponding images using Stable Diffusion.",
    image: "/images/signlanguage.jpg",
    github: "https://github.com/vaibhavsrivastava00/Sign-Language-to-Text-using-CNN-main"
  },
  {
    name: "Skynest",
    description: "A web platform for listing and booking stays with user authentication and property management features.",
    image: "/images/skynest.jpg",
    github: "https://github.com/vaibhavsrivastava00/SkyNest"
  },
  {
    name: "SkillMirror",
    description: "An AI-powered web app that conducts mock interviews to help users build confidence and improve speaking skills.",
    image: "/images/interview.jpg",
    github: "https://github.com/vaibhavsrivastava00"
  },
  {
    name: "CampusBuddy",
    description: "A web app for day scholars to find nearby rooms, hotels, facilities, and manage expenses—all in one place.",
    image: "/images/aibuddy.jpg",
    github: "https://github.com/vaibhavsrivastava00"
  }
];

function ProjectCard({ project, onHover, onLeave, blurred, className }) {
  const [isTitleHover, setIsTitleHover] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className={`rounded-2xl bg-zinc-900 shadow-lg flex flex-col justify-center items-center p-0 transition-all duration-300 ease-in-out cursor-pointer ${blurred ? 'blur-sm grayscale-[60%] opacity-60' : 'blur-0'} hover:scale-[1.04] hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(168,85,247,0.25)] hover:bg-zinc-800 ${className}`}
      onMouseEnter={e => { onHover && onHover(); setShowOverlay(true); }}
      onMouseLeave={e => { onLeave && onLeave(); setShowOverlay(false); setIsTitleHover(false); }}
      onTouchStart={() => setShowOverlay(v => !v)}
      style={{ minHeight: 0 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="w-full flex justify-center items-center mb-0 relative">
        <div className="w-full flex items-center justify-center relative" style={{ minHeight: 0 }}>
          <img
            src={project.image}
            alt={project.name}
            className={`transition-all duration-300 ease-in-out bg-zinc-900 rounded-xl ${showOverlay ? 'blur-md brightness-75' : ''}`}
            style={{ maxWidth: '95%', maxHeight: '180px', height: 'auto', width: 'auto', display: 'block', margin: '0 auto' }}
            draggable={false}
          />
          {/* Overlay with name/desc/arrow */}
          {showOverlay && (
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center z-10 bg-black/40 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-extrabold mb-2 text-white drop-shadow-lg tracking-wide">
                {project.name}
              </h2>
              <p className="text-zinc-200 text-base mb-2 font-medium drop-shadow-md transition-colors duration-300 line-clamp-3">
                {project.description}
              </p>
              <button
                className="mt-2 text-purple-400 text-3xl hover:scale-125 transition-transform duration-200 drop-shadow-lg bg-white/10 rounded-full px-3 py-1"
                onClick={() => window.open(project.github, '_blank')}
                aria-label="Open project"
              >
                &#8594;
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const Projects = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -60]);
  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="Projects py-16 px-4 flex flex-col items-center min-h-screen bg-zinc-950"
      id="projects"
    >
      <h1 className="text-3xl font-bold mb-8 text-center text-zinc-100">Projects</h1>
      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-4 w-full h-[90vh] p-4 bg-zinc-950 rounded-2xl max-w-6xl">
        {/* Top left (tall) */}
        <div className="col-span-1 row-span-1 h-full flex">
          <ProjectCard
            project={projects[0]}
            onHover={() => setHoveredIdx(0)}
            onLeave={() => setHoveredIdx(null)}
            blurred={hoveredIdx !== null && hoveredIdx !== 0}
            className="w-full"
          />
        </div>
        {/* Top right (wide) */}
        <div className="col-span-2 row-span-1 h-full flex">
          <ProjectCard
            project={projects[4]}
            onHover={() => setHoveredIdx(4)}
            onLeave={() => setHoveredIdx(null)}
            blurred={hoveredIdx !== null && hoveredIdx !== 4}
            className="w-full"
          />
        </div>
        {/* Bottom left (tall) */}
        <div className="col-span-1 row-span-1 h-full flex">
          <ProjectCard
            project={projects[2]}
            onHover={() => setHoveredIdx(2)}
            onLeave={() => setHoveredIdx(null)}
            blurred={hoveredIdx !== null && hoveredIdx !== 2}
            className="w-full"
          />
        </div>
        {/* Bottom center (square) */}
        <div className="col-span-1 row-span-1 h-full flex">
          <ProjectCard
            project={projects[3]}
            onHover={() => setHoveredIdx(3)}
            onLeave={() => setHoveredIdx(null)}
            blurred={hoveredIdx !== null && hoveredIdx !== 3}
            className="w-full"
          />
        </div>
        {/* Bottom right (square) */}
        <div className="col-span-1 row-span-1 h-full flex">
          <ProjectCard
            project={projects[1]}
            onHover={() => setHoveredIdx(1)}
            onLeave={() => setHoveredIdx(null)}
            blurred={hoveredIdx !== null && hoveredIdx !== 1}
            className="w-full"
          />
        </div>
      </div>
      {/* Mobile vertical stack */}
      <div className="flex flex-col gap-6 w-full max-w-md md:hidden">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
          >
            <ProjectCard
              project={project}
              onHover={() => setHoveredIdx(idx)}
              onLeave={() => setHoveredIdx(null)}
              blurred={false}
              className="w-full"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-8 w-full">
        <a
          href="https://github.com/vaibhavsrivastava00"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-lg bg-zinc-900 border-2 border-white text-white font-bold shadow-lg hover:bg-zinc-800 hover:border-purple-400 hover:text-purple-300 transition-all duration-300 text-lg flex items-center gap-3"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 7.07c.85.004 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
          </svg>
          View All
        </a>
      </div>
    </motion.div>
  );
};

export default Projects; 