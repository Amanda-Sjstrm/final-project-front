import React from "react";
import GoogleMapReact from "google-map-react";
import { MapContainer, MarkerContainer, MapPaper, MapTypography, MapPointer } from "./StyledMap";
import { LocationOnOutlined } from "@material-ui/icons";
import { useMediaQuery } from "@material-ui/core";

export const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "KEY" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <MarkerContainer lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
            {!isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <MapPaper elevation={3} style={{ width: 150 }}>
                <MapTypography variant="subtitle2" gutterBottom>
                  {place.name}
                </MapTypography>
                <MapPointer
                  className="pointer"
                  src={place.photo ? place.photo : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
                  alt={place.name}
                />
              </MapPaper>
            )}
          </MarkerContainer>
        ))}
      </GoogleMapReact>
    </MapContainer>
  );
};
