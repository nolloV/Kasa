import "./home.scss";
import React from "react";
import homeImg from "../../assets/homeImg.png";
import logements from "../../logements.json";
import Card from "../../components/Card";
import Banner from "../../components/Banner";

function Home() {
  return (
    <section>
      <Banner
        imgSrc={homeImg}
        altText="home"
        text="Chez vous, partout et ailleurs"
      />
      <div className="cardContainer">
        {logements.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            cover={card.cover}
            title={card.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
