import styled from "styled-components";

export const StyledMain = styled.section`
  section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #fff, transparent);
    z-index: 10;
  }

  section img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  section #text {
    position: absolute;
    color: #094b65;
    font-size: 8vw;
    text-align: center;
    line-height: 0.65em;
    font-family: "Rancho", cursive;
    transform: translateY(60%);
  }

  section #text span {
    font-size: 0.15em;
    letter-spacing: 2px;
    font-weight: 400;
    font-family: "Mulish", sans-serif;
  }

  #btn {
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    background: #fff;
    color: #094b65;
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 2px;
    border-radius: 40px;
    transform: translateY(100px);
  }

  .sec {
    position: relative;
    padding: 50px;
    background: #fff;
  }
`;

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
