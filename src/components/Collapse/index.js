import "./collapse.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

const Collapse = ({ title, description, isEquipments }) => {
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
        {isEquipments ? (
          <ul className="collapse-content__list">
            {description.map((equipment, index) => (
              <li className="collapse-content__list--li" key={index}>
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};
export default Collapse;
