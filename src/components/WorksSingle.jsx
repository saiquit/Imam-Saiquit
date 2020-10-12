import { motion } from "framer-motion";
import React from "react";

function WorksSingle({ data, i }) {
  const { title, link, imageUrl } = data;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * i }}
        className="card"
      >
        <a target="blank" href={link}>
          <h2 className="card__title">{title}</h2>
        </a>
        <div className="card__image">
          <img src={imageUrl} alt="title" />
        </div>
      </motion.div>
    </>
  );
}

export default WorksSingle;
