import styled from "styled-components";
import { Button } from "../Button";

export const HikeSection = styled.section`
  background-color: #f5f5f5;
  padding: 133px 16px;
  margin-top: 7em;

  @media (min-width: 668px) {
    background-color: #fff;
    padding: 0 90px;
    padding-bottom: 197px;
  }
`;

export const TextH2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
`;

export const HikeSelect = styled.select`
  background-color: #f5f5f5;
  color: #000;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 24px;
  padding: 13px 40px 13px 40px;
  border: solid black 1px;
  text-align: center;
  border-radius: 0%; // To prevent default setting in Safari

  &:focus {
    outline: none;
  }

  @media (min-width: 668px) {
    background-color: #fff;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  padding: 0px 0px 10px;
  gap: 16px;
  height: 443px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 40px;

  @media (min-width: 1024px) {
    max-width: 384px;
    height: 468px;
    filter: grayscale(100%);

    &:hover {
      filter: none;
      ${Button} {
        background-color: #fac65d;
        color: #fff;
      }
    }

    &:active {
      filter: none;
      ${Button} {
        background-color: #e39f49;
        color: #fff;
      }
    }
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

export const CardH3 = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 19px;
`;

export const CardH4 = styled.h4`
  font-size: 1.8rem;
  font-weight: 800;
  margin: 24px;
  text-align: center;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;
