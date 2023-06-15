import React from "react";
import GoogleMapReact from "google-map-react";
import { MapContainer, MarkerContainer, MapPaper, MapTypography, MapPointer } from "./StyledMap";
import { LocationOnOutlined } from "@material-ui/icons";
import { useMediaQuery } from "@material-ui/core";
import GOOGLE_API from "./../../apikey.js";

export const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => {
          if (place && place.latitude && place.longitude) {
            return (
              <MarkerContainer lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
                {!isDesktop ? (
                  <LocationOnOutlined color="primary" fontSize="large" />
                ) : (
                  <MapPaper elevation={3} style={{ width: 150 }}>
                    <MapTypography variant="subtitle2" gutterBottom>
                      {place.name}
                    </MapTypography>
                    <MapPointer className="pointer" src={place.photo} alt={place.name} />
                  </MapPaper>
                )}
              </MarkerContainer>
            );
          }
          return null; // Skip rendering if place object or coordinates are invalid
        })}
      </GoogleMapReact>
    </MapContainer>
  );
};
