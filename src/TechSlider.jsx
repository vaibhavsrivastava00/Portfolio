import React, { useRef, useState } from "react";

const techs = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const TechSlider = () => {
  const [hovered, setHovered] = useState(null); // hovered is now the tech name
  const stripRef = useRef(null);
  const [paused, setPaused] = useState(false);

  return (
    <div className="w-full flex flex-col items-center py-10 bg-transparent">
      <h2 className="text-3xl font-bold mb-6 text-center text-zinc-100">Tools and Technologies</h2>
      <div
        className="overflow-x-hidden w-full max-w-7xl relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={stripRef}
          className={`flex gap-10 items-center px-4 py-4 whitespace-nowrap transition-all duration-300 ${paused ? 'animate-none' : 'animate-slider-move'}`}
          style={{
            animationPlayState: paused ? 'paused' : 'running',
            animationDuration: '10s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        >
          {techs.concat(techs).map((tech, idx) => (
            <div
              key={tech.name + '-' + idx}
              className="flex flex-col items-center justify-center group cursor-pointer transition-transform duration-200 w-20 h-24"
              onMouseEnter={() => setHovered(tech.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={tech.icon}
                alt={tech.name + ' icon'}
                className={`w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-200 ${hovered === tech.name ? 'scale-125 drop-shadow-[0_0_16px_#61DAFB] brightness-125' : 'scale-100 brightness-95 group-hover:brightness-110'}`}
                draggable={false}
              />
              <div className={`mt-2 text-base md:text-lg font-semibold transition-all duration-200 text-center ${hovered === tech.name ? 'opacity-100 text-blue-400' : 'opacity-0 group-hover:opacity-100 group-hover:text-purple-400'}`}>
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes slider-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slider-move {
          animation-name: slider-move;
        }
      `}</style>
    </div>
  );
};

export default TechSlider; 