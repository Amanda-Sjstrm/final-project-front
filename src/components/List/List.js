import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { PlaceDetails } from "../PlaceDetails/PlaceDetails";
import { Container, LoadingContainer, FormContainer, ListContainer } from "./StyledList";

export const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  return (
    <Container>
      <Typography variant="h4">Promenader nära dig</Typography>
      {isLoading ? (
        <LoadingContainer>
          <CircularProgress size="5rem" />
        </LoadingContainer>
      ) : (
        <>
          <ListContainer>
            <Grid container spacing={3}>
              {places?.map((place, i) => (
                <Grid key={place.name} ref={elRefs[i]} item xs={12}>
                  <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
                </Grid>
              ))}
            </Grid>
          </ListContainer>
        </>
      )}
    </Container>
  );
};
