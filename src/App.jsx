import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  Hero,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000);

    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <div className="pyramid-loader">
            <div class="wrapper">
              <span className="side side1"></span>
              <span className="side side2"></span>
              <span className="side side3"></span>
              <span className="side side4"></span>
              <span className="shadow"></span>
            </div>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <div className="bg-primary">
            <div
              className={`fixed inset-x-0 z-20 px-3 md:px-12 xl:px-24 py-5 ${
                scrolled ? "bg-primary" : "bg-transparent"
              }`}
            >
              <AnimatePresence>
                {["s", "a", "n", "n", "o", ".", "d", "e", "v"].map((text, idx) => (
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: idx * 0.3 }}
                    key={idx}
                    className="uppercase inline-block text-rose-500 font-bold"
                  >
                    {text}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
            <div className="relative z-0">
              <Hero />
              <StarsCanvas />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
