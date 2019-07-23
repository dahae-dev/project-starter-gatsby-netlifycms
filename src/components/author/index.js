import React from "react";

import "./style.scss";

const Author = ({ author }) => {
  const { name, role, avatar, location } = author;

  return (
    <div className="author-container">
      <img className="author-avatar" src={avatar} alt={name} />
      <div className="author-profile">
        <div className="author-name">{name}</div>
        <div>{role}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default Author;
