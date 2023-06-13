import styled from "styled-components";
import { Button } from "../Button";

export const HikeSection = styled.section`
  background-color: var(--primaryWhite);
  padding: 133px 16px;

  @media (min-width: 668px) {
    background-color: var(--neutralWhite);
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
  background-color: var(--primaryWhite);
  color: var(--neutralBlack);
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
    background-color: var(--neutralWhite);
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--neutralWhite);
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
        background-color: var(--primaryBlue);
        color: var(--neutralWhite);
      }
    }

    &:active {
      filter: none;
      ${Button} {
        background-color: var(--secondaryBlue);
        color: var(--neutralWhite);
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
