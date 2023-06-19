import React, { useEffect, useState } from "react";
import { StyledMain } from "./StyledParallaxScroll";
import leftMountain from "../../images/bg-3.png";
import rightMountain from "../../images/bg-2.png";
import skyBackground from "../../images/bg-4.png";
import frontBackground from "../../images/bg-1.png";

export const ParallaxScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const text = document.getElementById("text");
      const sky = document.getElementById("sky");
      const left = document.getElementById("left");
      const right = document.getElementById("right");
      const front = document.getElementById("front");
      const header = document.getElementById("header");

      text.style.top = `${20 * value * -0.003}%`;
      sky.style.top = `${value * -1}px`;
      left.style.left = `${value * -1.5}px`;
      right.style.left = `${value * 2}px`;
      front.style.top = `${value * 0.12}px`;
      header.style.top = `${value * 0.8}px`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledMain>
      <section>
        <img src={skyBackground} alt="sky background" id="sky" />
        <h2 id="text">
          <span>Ska vi gå på</span>
          <br />
          Promenad?
        </h2>
        <img src={leftMountain} alt="left backgrund mountain" id="left" />
        <img src={rightMountain} alt="right backgrund mountain" id="right" />
        <img src={frontBackground} alt="foreground" id="front" />
      </section>
      <div className="sec"></div>
    </StyledMain>
  );
};
