import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

function About(props) {
  return (
    <>
      <motion.section
        className="resume-section"
        variants={props.variant}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={props.pageTransition}
      >
        <div className="resume-section-content">
          <h1 className="mb-0">
            Imam <span className="text-primary">Saiquit</span>
          </h1>
          <div className="subheading mb-5">
            Khulna University · Khulna,1208 · +8801787850860 ·
            <a href="mailto:armadrillo18@gmail.com">armadrillo18@gmail.com</a>
          </div>
          <p className="lead mb-5">
            I'm a Full-Stack Developer who loves building user-friendly websites
            and web apps and loves helping people learn how to code.Most
            recently, I’ve been building web apps with <b>React</b> as
            Front-end, <b>Node.js</b> for Back-End and serverless providers like
            Firebase, Netlify, Heroku.
            <br />
            <span>
              I'm freelancing building <b>Wordpress</b> website for more then 2
              years.
            </span>
            <br />
            I’m currently interested in learning more about accessibility and
            delving deeper into CSS/JS animations.
          </p>
          <div className="social-icons">
            <div className="social-icon">
              <FaLinkedinIn />
            </div>
            <div className="social-icon">
              <FaFacebookF />
            </div>
            <div className="social-icon">
              <FaGithub />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default About;
