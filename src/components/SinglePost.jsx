import React from "react";

function SinglePost({ data: { title, subTitle, description, date } }) {
  return (
    <div className="d-flex flex-column p-5 border rounded flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">{subTitle}</div>
        <p>{description}</p>
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">{date}</span>
      </div>
    </div>
  );
}

export default SinglePost;
