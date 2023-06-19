import styled from "styled-components";

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 668px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
  }
`;
