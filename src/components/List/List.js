import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { PlaceDetails } from "../PlaceDetails/PlaceDetails";
import { Container, LoadingContainer, ListContainer } from "./StyledList";

export const List = ({ places, childClicked, isLoading }) => {
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
                <Grid key={place._id} ref={elRefs[i]} item xs={12}>
                  <PlaceDetails
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                    place={{
                      name: place.name,
                      photo: place.photo,
                      description: place.description,
                      category: place.category,
                      website: place.website,
                      phone: place.phone,
                      address: place.address,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </ListContainer>
        </>
      )}
    </Container>
  );
};
