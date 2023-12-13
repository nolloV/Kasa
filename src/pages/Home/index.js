import "./home.scss";
import React from "react";
import homeImg from "../../assets/homeImg.png";
import logements from "../../logements.json";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div className="home">
        <img className="home__img" src={homeImg} alt="home" />
        <p className="home__text">Chez vous, partout et ailleurs</p>
      </div>
      <div className="cardContainer">
        {logements.map((card) => (
          <Link key={card.id} to={`/Host/${card.id}`} className="card-link">
            <div className="cardContainer__card">
              <img
                src={card.cover}
                alt={card.title}
                className="cardContainer__img"
              />
              <h3 className="cardContainer__title">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
