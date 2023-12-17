import "./logementInfo.scss";
import React from "react";

const LogementInfo = ({ title, location, tags }) => {
  return (
    <div className="logementInfo">
      <h2 className="logementInfo__title">{title}</h2>
      <p className="logementInfo__location">{location}</p>
      <div className="logementInfo__tagsContainer">
        {tags.map((tag, index) => (
          <div className="logementInfo__tags" key={index}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogementInfo;
