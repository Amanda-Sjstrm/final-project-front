import React, { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { MobileView } from "../MobileView/MobileView";
import { ParallaxScroll } from "../ParallaxScroll/ParallaxScroll";
import { Hikes } from "../Hikes/Hikes";
import { List } from "../List/List";
import { Map } from "../Map/Map";
import { Info } from "../Info/Info";
import { Grid, useMediaQuery } from "@mui/material";
import { MapWrapper } from "./StyledMain";

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

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }, [coordinates, bounds]);

  // Mobile view
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Header setCoordinates={setCoordinates} />
      {isMobile ? <MobileView /> : <ParallaxScroll />}
      <Info />
      <MapWrapper>
        <Grid item xs={12} md={5}>
          <List places={filteredPlaces.length ? filteredPlaces : places} childClicked={childClicked} isLoading={isLoading} type={type} setType={setType} rating={rating} setRating={setRating} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} places={filteredPlaces.length ? filteredPlaces : places} setChildClicked={setChildClicked} />
        </Grid>
      </MapWrapper>
      <Hikes />
    </>
  );
};
