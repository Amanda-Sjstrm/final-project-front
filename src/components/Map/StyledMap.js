import styled from "styled-components";
import { Typography, Paper } from "@material-ui/core";

export const MapContainer = styled.div`
  height: 80vh;
  width: 100%;
`;

export const MarkerContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  &:hover {
    z-index: 2;
  }
`;

export const MapPaper = styled(Paper)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
`;

export const MapTypography = styled(Typography)`
  /* Add your styles for the typography */
`;

export const MapPointer = styled.img`
  cursor: pointer;
`;
