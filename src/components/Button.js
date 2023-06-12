import styled, { css } from "styled-components";

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 30px;

  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  ${(props) =>
    props.headerCta &&
    css`
      background-color: var(--primaryYellow);
      color: var(--neutralBlack);
      font-size: 2rem;
      padding: 8px 55px;
      width: 100%;

      &:active {
        background-color: var(--secondaryYellow);
      }

      @media (min-width: 668px) {
        padding: 14px 48px;
        width: auto;
      }
    `}

  ${(props) =>
    props.mainCta &&
    css`
      font-size: 1.5rem;
      padding: 8px 55px;
      margin-top: 16px;
      background-color: var(--primaryYellow);
      align-self: center;
      width: 100%;

      &:active {
        background-color: var(--secondaryYellow);
      }

      @media (min-width: 668px) {
        padding: 13px 30px;
        width: auto;
      }
    `}

  ${(props) =>
    props.cardCta &&
    css`
      font-size: 1.2rem;
      background: var(--primaryBlue);
      color: var(--neutral-light);
      padding: 12px 30px;
      gap: 10px;

      &:active {
        background-color: var(--secondaryBlue);
      }
    `}

  ${(props) =>
    props.footerCta &&
    css`
      font-size: 1.5rem;
      line-height: 29px;
      padding: 12px 30px;
      width: 50%;
      background: var(--primaryYellow);

      &:active {
        background-color: var(--secondaryYellow);
      }
    `}
`;
