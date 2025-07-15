import React from "react";
// Placeholder for social media icons
import SocialMediaIcons from "./SocialMediaIcons";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

const education = [
  {
    title: "Secondary School",
    year: "2019-2020",
    school: "Dr. Brij Kishore Dubey Memorial School",
  },
  {
    title: "Higher Secondary School",
    year: "2021-2022",
    school: "Dr. Brij Kishore Dubey Memorial School",
  },
  {
    title: "Bachelor of Technology: Computer Science & Engineering",
    year: "2022-2026",
    school: "Jaypee University of Engineering and Technology",
  },
];

const CARD_SIZE = "min-w-[250px] max-w-[270px] h-40"; // fixed card size

const PatternCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: #121212;
  background-image: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 0
    ),
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 0),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 0);
  background-size:
    40px 40px,
    20px 20px,
    20px 20px;
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem; /* match rounded-3xl */
  box-shadow: 0 10px 25px 0 rgba(0,0,0,0.3); /* match shadow-2xl */
  padding: 1.5rem; /* match p-6 */
`;

const About = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -60]);
  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="relative flex justify-center items-center min-h-screen w-full py-8 px-2 md:px-8"
      id="about"
    >
    {/* Social Media Icons */}
    {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
      <SocialMediaIcons />
    </div> */}
    {/* Card */}
    <PatternCard className="flex flex-col w-full max-w-6xl md:flex-row gap-8 items-center">
      {/* Photo */}
      <div className="flex flex-col items-center justify-center md:w-1/3">
        <div className="w-70 h-100 rounded-2xl overflow-hidden border-4 border-green-500 shadow-lg ring-4 ring-green-400/40 animate-glow">
          <img src="/images/20250714_1952_Stylized 3D Figurine_remix_01k04mtg9jejz92rqf485akqt3.png" alt="Your Photo" className="object-cover w-full h-full" />
        </div>
      </div>
      {/* About Text and Timeline */}
      <div className="flex-1 flex flex-col justify-center w-full">
        <h1 className="text-4xl font-extrabold mb-4 text-green-400">ABOUT ME</h1>
        <p className="text-zinc-200 text-lg mb-2">A developer who blends intelligent systems with seamless user experiences. From building AI that interprets sign language in real-time to creating full-stack apps that simplify daily workflows.</p>
        <p className="text-zinc-400 mb-6">I thrive at the intersection of innovation and usability. I don’t just code. I solve problems, automate the tedious, and bring ideas to life. Want to know how? Dive into my work.</p>
        {/* Timeline inside card with glassmorphism, horizontal line above cards, vertical connectors to each card */}
        <div className="w-full mt-8 relative flex flex-col items-center">
          {/* Desktop (horizontal) timeline */}
          <div className="w-fit max-w-[900px] mx-auto relative hidden md:block">
            {/* Horizontal line above cards */}
            <motion.div
              className="w-full h-1 bg-gradient-to-r from-green-400/60 via-green-400/80 to-green-400/60 rounded-full relative z-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{ originX: 0 }}
            />
            <div className="flex flex-row justify-between items-end gap-4 relative z-20 items-stretch">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex-1 flex flex-col items-center relative"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 + idx * 0.2, ease: 'easeOut' }}
                >
                  {/* Vertical connector from line to dot, now flush with card */}
                  <div className="w-1 h-20 bg-green-400 mb-0" style={{ marginBottom: '-10px' }} />
                  {/* Connector dot, at the end of vertical line, now flush with card */}
                  <div className="w-5 h-5 bg-white border-4 border-green-400 rounded-full z-20 -mt-3" style={{ marginBottom: '-14px' }} />
                  {/* Enhanced glassmorphism card with glow on hover */}
                  <div className={`backdrop-blur-5xl bg-white/10 border border-white/30 shadow-lg rounded-xl px-4 py-4 flex flex-col justify-center items-center ${CARD_SIZE} mt-0 overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_24px_6px_rgba(34,197,94,0.7)]`}>
                    <p className="font-bold text-zinc-100 text-base mb-1 break-words">{item.title}</p>
                    <p className="text-green-400 text-xs font-semibold mb-1 break-words">{item.year}</p>
                    <p className="text-zinc-300 text-xs break-words">{item.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Mobile (vertical) timeline */}
          <div className="w-full flex flex-col items-center md:hidden relative">
            <div className="flex flex-col items-center gap-8 w-full relative z-10">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center w-full relative"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: 0.2 + idx * 0.2, ease: 'easeOut' }}
                >
                  {/* Dot on the vertical line */}
                  <div className="w-5 h-5 bg-white border-4 border-green-400 rounded-full z-20" />
                  {/* Vertical line below dot, except for last item, with gap for card */}
                  {idx !== education.length - 1 && (
                    <motion.div
                      className="w-1 h-8 bg-gradient-to-b from-green-400/60 via-green-400/80 to-green-400/60 rounded-full z-0"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                      style={{ originY: 0 }}
                    />
                  )}
                  {/* Card, with no line behind it */}
                  <div className={`backdrop-blur-5xl bg-white/10 border border-white/30 shadow-lg rounded-xl px-4 py-4 flex flex-col justify-center items-center min-w-[220px] max-w-[90vw] h-40 mt-2 mb-2 overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_24px_6px_rgba(34,197,94,0.7)]`}>
                    <p className="font-bold text-zinc-100 text-base mb-1 break-words">{item.title}</p>
                    <p className="text-green-400 text-xs font-semibold mb-1 break-words">{item.year}</p>
                    <p className="text-zinc-300 text-xs break-words">{item.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PatternCard>
    </motion.div>
  );
}

export default About; 