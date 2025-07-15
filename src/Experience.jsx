import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    company: "Pitchmatter",
    role: "Frontend Developer Intern",
    period: "May 2025 - Aug 2025",
    description: "Developed responsive webapp using React and Typescript, enhancing user experience and performance.",
    logo: "/images/Pitchmatter.png"
  },
  {
    company: "Agnirva",
    role: "AI Intern",
    period: "April 2025 - May 2025",
    description: "Developed ml models achieving accuracy more than 95%.",
    logo: "/images/Agnirva.png"
  }
];

const Experience = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -60]);
  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="Experience py-16 px-4 flex flex-col items-center min-h-screen"
      id="experience"
    >
    <h1 className="text-3xl font-bold mb-8 text-center">Experience</h1>
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center py-15 items-stretch">
      {experiences.map((exp, idx) => (
        <motion.div
          key={exp.company}
          className="bg-zinc-900 rounded-2xl shadow-2xl p-8 w-full md:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
        >
          <img src={exp.logo} alt={exp.company + ' logo'} className="w-16 h-16 rounded-full object-contain mb-4 shadow" />
          <h2 className="text-2xl font-bold mb-2 text-center">{exp.company}</h2>
          <div className="text-lg font-semibold text-purple-300 mb-2 text-center">{exp.role}</div>
          <div className="text-zinc-400 text-sm mb-4 text-center">{exp.period}</div>
          <div className="text-zinc-200 text-base font-medium text-center">
            {exp.description}
          </div>
        </motion.div>
      ))}
    </div>
    </motion.div>
  );
}

export default Experience; 