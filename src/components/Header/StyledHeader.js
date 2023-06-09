import styled from "styled-components";

export const StyledHeader = styled.header`
  #header {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;
    /* background: rgba(255, 255, 255, 0.8);
    height: 1.5em; */
  }

  .logo {
    color: #094b65;
    font-weight: 900;
    font-size: 2em;
    text-decoration: none;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul li {
    list-style: none;
    margin-left: 20px;
  }

  ul li a {
    text-decoration: none;
    padding: 6px 15px;
    color: #094b65;
    border-radius: 20px;
  }

  ul li a:hover,
  ul li a.active {
    background: #094b65;
    color: #fff;
  }
`;
