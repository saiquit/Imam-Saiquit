import { motion } from "framer-motion";
import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiSass,
  DiWordpress,
  DiNpm,
  DiFirebase,
  DiMongodb,
  DiNodejsSmall,
} from "react-icons/di";

function Skills({ variant, pageTransition }) {
  return (
    <div>
      <motion.section
        className="resume-section"
        variants={variant}
        animate="animate"
        initial="initial"
        exit="exit"
        transition={pageTransition}
        id="skills"
      >
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages & Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <DiHtml5 />
            </li>
            <li className="list-inline-item">
              <DiCss3 />
            </li>
            <li className="list-inline-item">
              <DiJavascript1 />
            </li>
            <li className="list-inline-item">
              <DiReact />
            </li>
            <li className="list-inline-item">
              <DiSass />
            </li>
            <li className="list-inline-item">
              <DiWordpress />
            </li>
            <li className="list-inline-item">
              <DiNpm />
            </li>
            <li className="list-inline-item">
              <DiFirebase />
            </li>
            <li className="list-inline-item">
              <DiMongodb />
            </li>
            <li className="list-inline-item">
              <DiNodejsSmall />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0 text-left">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Mobile-First, Responsive Design
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Browser Testing & Debugging
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Functional Teams
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Agile Development & Scrum
            </li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}

export default Skills;
