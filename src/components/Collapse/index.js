import "./collapse.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faAngleUp} />
        </span>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {Array.isArray(content) ? (
          <ul className="collapse-content__list">
            {content.map((equipment, index) => (
              <li className="collapse-content__list--li" key={index}>
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};
export default Collapse;
