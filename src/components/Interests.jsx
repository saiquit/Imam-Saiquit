import { motion } from "framer-motion";
import React from "react";

function Interests({ variant, pageTransition }) {
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
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </motion.section>
    </>
  );
}

export default Interests;
