import { motion } from "framer-motion";
import React from "react";

import { educations } from "./_data";
import SinglePost from "./SinglePost";

function Education({ variant, pageTransition }) {
  return (
    <>
      <motion.section
        className="resume-section"
        variants={variant}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={pageTransition}
        id="education"
      >
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          {educations.map((education, i) => (
            <SinglePost i={i} data={education} key={i} />
          ))}
        </div>
      </motion.section>
    </>
  );
}

export default Education;
