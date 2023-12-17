import React from "react";
import "./banner.scss";

const Banner = ({ imgSrc, altText, text }) => (
  <div className="home">
    <img className="home__img" src={imgSrc} alt={altText} />
    <p className="home__text">{text}</p>
  </div>
);

export default Banner;
