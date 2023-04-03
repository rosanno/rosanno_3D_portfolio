import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello! I am Rosanno a aspiring software engineer proficient in TypeScript and
        JavaScript. I am familiar with popular libraries and frameworks such as
        React.js, Node.js, and Laravel. I have a passion for problem-solving and
        am eager to learn new technologies quickly. I am excited to work with
        clients to develop user-friendly solutions that address real-world
        problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
