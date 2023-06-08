/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Header } from "./Header";
import styled from "styled-components";
import leftMountain from "../images/bg-3.png";
import rightMountain from "../images/bg-2.png";
import skyBackground from "../images/bg-4.png";
import frontBackground from "../images/bg-1.png";
import { Map } from "./Map";

const StyledMain = styled.section`
  section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #514805, transparent);
    z-index: 10;
  }

  section img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  section #text {
    position: absolute;
    color: #094b65;
    font-size: 8vw;
    text-align: center;
    line-height: 0.65em;
    font-family: "Rancho", cursive;
    transform: translateY(60%);
  }

  section #text span {
    font-size: 0.15em;
    letter-spacing: 2px;
    font-weight: 400;
    font-family: "Mulish", sans-serif;
  }

  #btn {
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    background: #fff;
    color: #094b65;
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 2px;
    border-radius: 40px;
    transform: translateY(100px);
  }

  .sec {
    position: relative;
    padding: 100px;
    background: #514805;
  }
`;

export const Main = () => {
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      const text = document.getElementById("text");
      const sky = document.getElementById("sky");
      const left = document.getElementById("left");
      const right = document.getElementById("right");
      const btn = document.getElementById("btn");
      const front = document.getElementById("front");
      const header = document.getElementById("header");

      text.style.top = `${20 * value * -0.003}%`;
      sky.style.top = `${value * -1}px`;
      left.style.left = `${value * -1.5}px`;
      right.style.left = `${value * 2}px`;
      btn.style.marginTop = `${value * 1.5}px`;
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
        <Header />
        <img src={skyBackground} alt="sky background" id="sky" />
        <h2 id="text">
          <span>It's time for a new</span>
          <br />
          Adventure
        </h2>
        <img src={leftMountain} alt="left backgrund mountain" id="left" />
        <img src={rightMountain} alt="right backgrund mountain" id="right" />

        <a href="#" id="btn">
          Explore
        </a>

        <img src={frontBackground} alt="foreground" id="front" />
      </section>
      <div className="sec">
        <Map />
      </div>
    </StyledMain>
  );
};
