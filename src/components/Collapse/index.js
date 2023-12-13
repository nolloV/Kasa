import "./collapse.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${isOpen ? "open" : ""}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          {isOpen ? (
            <FontAwesomeIcon icon={faAngleUp} className="arrow" />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} className="arrow" />
          )}
        </span>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default Collapse;
