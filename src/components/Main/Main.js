/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Header } from "../Header/Header";
import { StyledMain } from "./StyledMain";
import leftMountain from "../../images/bg-3.png";
import rightMountain from "../../images/bg-2.png";
import skyBackground from "../../images/bg-4.png";
import frontBackground from "../../images/bg-1.png";
import { List } from "../List/List";
import { Map } from "../Map/Map";
import { MapHeader } from "../MapHeader/MapHeader";
import { PlaceDetails } from "../PlaceDetails/PlaceDetails";
import { CssBaseline, Grid } from "@mui/material";

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
      btn.style.marginTop = `${value * 0.5}px`;
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
      <div className="sec"></div>

      {/* <CssBaseline /> */}
      {/* This is some pre-set css, not sure i need it */}

      <MapHeader />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </StyledMain>
  );
};
