import React from "react";
import { Typography, Button, Card, CardMedia, CardContent, CardActions } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";

import useStyles from "./StyledPlaceDetails";

export const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected) refProp?.current?.scrollIntoView({ behaviour: "smooth", block: "start" });

  return (
    <Card elevation={6}>
      <CardMedia style={{ height: 250 }} image={place.photo} title={place.name} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        {place.phone && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon />
            {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.website, "_blank")}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
