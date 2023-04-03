import { motion, AnimatePresence } from "framer-motion";
import { BsDownload, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[220px]  max-w-7xl mx-auto ${styles.paddingX} flex gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
           <AnimatePresence>
              {["R","o","s","a","n","n","o", " ", "M","a","c","a","b","u","h","a","y"].map((text,idx) => (
                  <motion.span key={idx}  
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: idx * 0.3 }} className="text-[#E94560] lg:text-5xl inline"
                  >
                    {text}
                  </motion.span>
              ))}
           </AnimatePresence>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            Aspiring Software Engineer
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="https://github.com/rosanno"
              target="_blank"
              className="resume flex items-center gap-3 mt-7"
            >
              <BsGithub className="text-lg" />
              <span>github</span>
            </Link>
            <Link to="/" className="resume flex items-center gap-3 mt-7">
              <BsDownload className="text-lg" />
              <span>resume</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
