import { motion } from "framer-motion";
import React from "react";
import { experiences } from "./_data";
import SinglePost from "./SinglePost";

function Experience(props) {
  return (
    <>
      <motion.section
        className="resume-section"
        variants={props.variant}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={props.pageTransition}
        id="experience"
      >
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          {experiences.map((data, i) => (
            <SinglePost data={data} key={i} />
          ))}
        </div>
      </motion.section>
    </>
  );
}

export default Experience;
