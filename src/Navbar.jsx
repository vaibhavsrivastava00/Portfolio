import React, { useEffect, useState } from "react";
import Switch from "./Switch";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact Me", href: "#contact" },
  ];

  return (
    <motion.div
      className="navbar flex items-center justify-between px-8 py-4 sticky top-0 z-50 bg-transparent backdrop-blur-none"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="text-2xl font-bold logo-font cursor-pointer"
        style={{ fontFamily: 'Bodoni Moda, serif', letterSpacing: '2px' }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <a href="#home" aria-label="Go to home" className="block w-full h-full">Vaibhav</a>
      </motion.div>
      {/* Desktop Nav */}
      <motion.ul
        className={`hidden md:flex gap-6 text-zinc-300 px-8 py-2 rounded-full transition-all duration-300
          ${scrolled ? "bg-white/10 backdrop-blur-md shadow-lg" : "bg-white/5 backdrop-blur-sm"}
        `}
        style={{ boxShadow: scrolled ? "0 4px 24px 0 rgba(0,0,0,0.15)" : undefined }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.13,
              delayChildren: 0.4,
            },
          },
        }}
      >
        {navLinks.map((item, idx) => (
          <motion.li
            key={item.label}
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 400, damping: 24 } },
            }}
            whileHover={{
              color: "#22d3ee", // cyan-400
              textShadow: "0 0 16px #22d3ee, 0 0 32px #22d3ee",
              scale: 1.08,
            }}
            className="cursor-pointer font-semibold transition-colors duration-300"
          >
            <a href={item.href}>{item.label}</a>
          </motion.li>
        ))}
      </motion.ul>
      {/* Mobile Three-dot Icon */}
      <button
        className="md:hidden flex items-center justify-center p-2 ml-2 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setSidebarOpen(true)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <circle cx="19" cy="12" r="2" fill="currentColor" />
        </svg>
      </button>
      <Switch />
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Sidebar */}
          <div className="relative bg-zinc-900 w-64 max-w-[80vw] h-full shadow-2xl p-8 flex flex-col gap-8 animate-slideInLeft">
            <button
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 text-2xl"
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
            >
              &times;
            </button>
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-semibold text-zinc-200 hover:text-cyan-400 transition-colors duration-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar; 