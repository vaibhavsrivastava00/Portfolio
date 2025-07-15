import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Loader from "./Loader";

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (document.body.classList.contains('light-theme')) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    // Set initial theme
    if (document.body.classList.contains('light-theme')) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
    // Loader timeout
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-950">
        <Loader />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'light' ? 'bg-[#fefefe] text-black light-theme-styles' : 'bg-zinc-950 text-white'}`}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
