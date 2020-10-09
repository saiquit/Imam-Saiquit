import React from "react";

function WorksSingle({ data }) {
  const { title, link, imageUrl } = data;
  return (
    <>
      <div className="card">
        <a target="blank" href={link}>
          <h2 className="card__title">{title}</h2>
        </a>
        <div className="card__image">
          <img src={imageUrl} alt="title" />
        </div>
      </div>
    </>
  );
}

export default WorksSingle;
