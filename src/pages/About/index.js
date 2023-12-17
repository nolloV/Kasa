import "./about.scss";
import "../../components/Collapse/collapse.scss";
import React from "react";
import aboutImg from "../../assets/aboutImg.png";
import Collapse from "../../components/Collapse";
import Banner from "../../components/Banner";
import about from "../../about.json";

const About = () => {
  return (
    <section className="aboutContainer">
      <Banner imgSrc={aboutImg} altText="about banner" text="" />
      <div className="aboutContainer__collapse">
        {about.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
