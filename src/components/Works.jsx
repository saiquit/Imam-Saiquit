import { motion } from "framer-motion";
import React from "react";
import { works } from "./_data";
import WorksSingle from "./WorksSingle";

function Works({ variant, pageTransition }) {
  return (
    <>
      <motion.section
        className="resume-section"
        variants={variant}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={pageTransition}
        id="interests"
      >
        <div className="resume-section-content">
          <h2 className="mb-5">Works</h2>
          <h3 className="subheading mb-3">Wordpress</h3>
          <motion.div
            className="cards"
            transition={{
              staggerChildren: 0.25,
              staggerDirection: -1,
              when: "afterChildren",
            }}
          >
            {works.wordpress.map((data, i) => (
              <WorksSingle i={i} data={data} key={i} />
            ))}
          </motion.div>
          <h3 className="subheading mb-3">React</h3>
          <motion.div transition={{ staggerChildren: 2 }} className="cards">
            {works.react.map((data, i) => (
              <WorksSingle i={i} data={data} key={i} />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Works;
