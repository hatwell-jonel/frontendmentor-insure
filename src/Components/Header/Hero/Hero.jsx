import React from "react";
import "./Hero.css";

// IMPORTEDS IMAGES
import heroImg from "../../../images/image-intro-desktop.jpg";
import mobileIntroBgRight from "../../../images/bg-pattern-intro-right-mobile.svg";
import mobileIntroBgLeft from "../../../images/bg-pattern-intro-left-mobile.svg";
import desktopIntroBgLeft from "../../../images/bg-pattern-intro-left-desktop.svg";
import desktopIntroBgRight from "../../../images/bg-pattern-intro-right-desktop.svg";

function Hero() {
  return (
    <>
      <section id="hero">
        <img src={desktopIntroBgRight} className="dt-bg bg-right" alt="" />
        <div className="flex">
          <div className="hero__img">
            <img src={heroImg} alt="background" />
            <img
              src={mobileIntroBgLeft}
              className="mob-bg bg-left"
              alt="background"
            />
          </div>
          <div className="text">
            <h1>
              Humanizing <br />
              your insurance.
            </h1>
            <p>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </p>

            <a href="#" className="text__button">
              view plans
            </a>
            <img
              src={mobileIntroBgRight}
              className="mob-bg bg-right"
              alt="background"
            />
          </div>
        </div>
        <img src={desktopIntroBgLeft} className="dt-bg  bg-left" alt="background" />
      </section>
    </>
  );
}

export default Hero;
