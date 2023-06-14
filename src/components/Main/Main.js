import React, { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { StyledMain, Grid } from "./StyledMain";
import leftMountain from "../../images/bg-3.png";
import rightMountain from "../../images/bg-2.png";
import skyBackground from "../../images/bg-4.png";
import frontBackground from "../../images/bg-1.png";
import { Hikes } from "../Hikes/Hikes";
import { List } from "../List/List";
import { Map } from "../Map/Map";

import { getPlacesData } from "../../api";

export const Main = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  // useEffect(() => {
  //   const filteredPlaces = places.filter((place) => place.rating > rating);
  //   setFilteredPlaces(filteredPlaces);
  // }, [rating]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }, [coordinates, bounds]);

  // Parallax Scroll effect
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
    <>
      <StyledMain>
        <section>
          <Header setCoordinates={setCoordinates} />
          <img src={skyBackground} alt="sky background" id="sky" />
          <h2 id="text">
            <span>It's time for a new</span>
            <br />
            Adventure
          </h2>
          <img src={leftMountain} alt="left backgrund mountain" id="left" />
          <img src={rightMountain} alt="right backgrund mountain" id="right" />
          <img src={frontBackground} alt="foreground" id="front" />
        </section>
        <div className="sec"></div>
      </StyledMain>
      <Hikes />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <List places={filteredPlaces.length ? filteredPlaces : places} childClicked={childClicked} isLoading={isLoading} type={type} setType={setType} rating={rating} setRating={setRating} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={filteredPlaces.length ? filteredPlaces : places} setChildClicked={setChildClicked} />
        </Grid>
      </Grid>
    </>
  );
};
