import { motion } from "framer-motion";
import React from "react";

function SinglePost({ data: { title, subTitle, description, date }, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * i }}
      className="d-flex flex-column p-5 border rounded flex-md-row justify-content-between mb-5"
    >
      <div className="flex-grow-1">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">{subTitle}</div>
        <p>{description}</p>
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">{date}</span>
      </div>
    </motion.div>
  );
}

export default SinglePost;
