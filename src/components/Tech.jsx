import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [category, setCategory] = useState("all");
  const skillFilter = () => {
    const skill = technologies.filter(
      (technologies) => technologies.category === category
    );
    return skill.length > 0 ? skill : technologies;
  };

  return (
    <div className="mt-36">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          technologies I’ve been working with
        </p>
        <h2 className={`${styles.sectionHeadText} pb-16 text-center`}>
          Skills.
        </h2>
      </motion.div>
      <div className="flex items-center justify-center gap-10 pb-16">
        {["all", "frontend", "backend", "tools"].map((item, idx) => (
          <div
            onClick={() => setCategory(item)}
            key={idx}
            className={`text-sm capitalize cursor-pointer text-center w-28 ${
              category === item && "bg-rose-500 py-2 px-5 rounded-md"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        layout
        className="flex flex-row flex-wrap justify-center gap-6"
      >
        <AnimatePresence>
          {skillFilter().map((technology) => (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              layout
              className="w-28 h-28"
              key={technology.name}
            >
              <img src={technology.icon} alt="" className="w-20 md:w-16" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
