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
          <div className="cards">
            {works.wordpress.map((data, i) => (
              <WorksSingle data={data} key={i} />
            ))}
          </div>
          <h3 className="subheading mb-3">React</h3>
          <div className="cards">
            {works.react.map((data, i) => (
              <WorksSingle data={data} key={i} />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Works;
