import React from "react";

const icons = [
  { href: "#", label: "GitHub", icon: <span role="img" aria-label="GitHub">🐙</span> },
  { href: "#", label: "LinkedIn", icon: <span role="img" aria-label="LinkedIn">💼</span> },
  { href: "#", label: "X", icon: <span role="img" aria-label="X">❌</span> },
  { href: "#", label: "Instagram", icon: <span role="img" aria-label="Instagram">📸</span> },
  { href: "#", label: "LeetCode", icon: <span role="img" aria-label="LeetCode">🧩</span> },
];

const SocialMediaIcons = () => (
  <div className="flex flex-col gap-6 items-center md:block">
    {icons.map((item, idx) => (
      <a
        key={idx}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-2xl mb-6 hover:text-green-400 transition-colors duration-200"
        title={item.label}
      >
        {item.icon}
      </a>
    ))}
  </div>
);

export default SocialMediaIcons; 