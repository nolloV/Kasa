import React, { useState } from "react";
import "./carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

// ...

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showNavigation = pictures.length > 1;

  return (
    <div className="carousel">
      <img
        className="carousel__img"
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />

      {showNavigation && (
        <>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="carousel__previous"
            onClick={handlePrev}
          />

          <FontAwesomeIcon
            icon={faChevronRight}
            className="carousel__next"
            onClick={handleNext}
          />
          <p className="carousel__counter">{`${currentIndex + 1}/${
            pictures.length
          }`}</p>
        </>
      )}
    </div>
  );
};

export default Carousel;
