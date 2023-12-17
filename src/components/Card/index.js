import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ id, cover, title }) => (
  <Link to={`/Host/${id}`} className="cardContainer__link">
    <div className="cardContainer__card">
      <img src={cover} alt={title} className="cardContainer__img" />
      <h3 className="cardContainer__title">{title}</h3>
    </div>
  </Link>
);

export default Card;
