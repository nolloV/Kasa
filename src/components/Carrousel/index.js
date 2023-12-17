import React, { useState } from "react";
import "./carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";

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

  return (
    <div className="carousel">
      <img
        className="carousel__img"
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
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
    </div>
  );
};

export default Carousel;

// import React from "react";
// import "./carrousel.scss";
// // import logements from "../../logements.json";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronRight,
//   faChevronLeft,
// } from "@fortawesome/free-solid-svg-icons";
// import "@fortawesome/fontawesome-free/css/all.css";
// import aboutImg from "../../assets/aboutImg.png";

// const Carousel = () => {
//   return (
//     <section className="carrouselContainer">
//       <div className="carrousel">
//         <div className="aboutBanner">
//           <img className="aboutBanner__img" src={aboutImg} alt="about banner" />
//         </div>
//         <div className="carrousel__control">
//           <FontAwesomeIcon
//             icon={faChevronLeft}
//             className="carrousel__control--previous"
//           />
//           <FontAwesomeIcon
//             icon={faChevronRight}
//             className="carrousel__control--next"
//           />
//         </div>

//         <article className="carrousel__counter"></article>
//       </div>
//     </section>
//   );
// };
// export default Carousel;

// // <header class="container">
// //       <h1>
// //         <img
// //           class="logo"
// //           src="./assets/images/logo.png"
// //           alt="Print it ! Impressions d'entreprises"
// //         />
// //       </h1>
// //       <a class="btn devis" href="mailto:contact@print-it.tld">Devis</a>
// //     </header>
// //     <main>
// //       <div id="banner">
// //         <img
// //           class="arrow arrow_left"
// //           src="assets/images/arrow_left.png"
// //           alt="arrow-left"
// //         />
// //         <img
// //           class="arrow arrow_right"
// //           src="assets/images/arrow_right.png"
// //           alt="arrow-right"
// //         />
// //         <img
// //           class="banner-img"
// //           src="./assets/images/slideshow/slide1.jpg"
// //           alt="Banner Print-it"
// //         />
// //         <p>Impressions tous formats <span>en boutique et en ligne</span></p>
// //         <div class="dots"></div>
// //       </div>

// // const slides = [
// //     {
// //       image: "slide1.jpg",
// //       tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
// //     },
// //     {
// //       image: "slide2.jpg",
// //       tagLine:
// //         "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
// //     },
// //     {
// //       image: "slide3.jpg",
// //       tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
// //     },
// //     {
// //       image: "slide4.png",
// //       tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
// //     },
// //   ];
// //   for (let i = 0; i < slides.length; i++) {
// //     console.log(i);
// //   }

// //   //Bullets Points//
// //   function createDot() {
// //     let dots = document.querySelector(".dots");
// //     for (x = 0; x < slides.length; x++) {
// //       let divDot = document.createElement("div");
// //       if (x == 0) {
// //         divDot.classList.add("dot_selected");
// //       }
// //       divDot.classList.add("dot");
// //       dots.appendChild(divDot);
// //       console.log(x);
// //     }
// //   }
// //   createDot();

// //   // Carousel //
// //   let index = 0;
// //   const img = document.querySelector(".banner-img");
// //   const tagLine = document.querySelector("#banner p");
// //   const selectedDot = document.querySelectorAll(".dots div");

// //   function carousel(sens) {
// //     selectedDot[index].classList.remove("dot_selected");
// //     if (sens == 1) {
// //       index++;
// //       if (index >= slides.length) {
// //         index = 0;
// //       }
// //     } else {
// //       index--;
// //       if (index < 0) {
// //         index = slides.length - 1;
// //       }
// //     }
// //     selectedDot[index].classList.add("dot_selected");
// //     img.src = "./assets/images/slideshow/" + slides[index].image;
// //     tagLine.innerHTML = slides[index].tagLine;
// //   }
// //   //Arrows//
// //   let arrowLeft = document.querySelector("#banner .arrow_left");
// //   arrowLeft.addEventListener("click", () => {
// //     console.log("Vous avez cliqué sur le bouton gauche");
// //     carousel(-1);
// //   });

// //   let arrowRight = document.querySelector("#banner .arrow_right");
// //   arrowRight.addEventListener("click", (target) => {
// //     console.log(target.altKey);
// //     carousel(1);
// //   });
