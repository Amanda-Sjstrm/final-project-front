import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
`;

export const StyledH2 = styled.h2`
  font-size: 30px;
`;

export const StyledP = styled.p`
  font-size: 18px;
  margin: 20px 50px;

  @media (max-width: 668px) {
    margin: 0;
    text-align: center;
  }
`;
