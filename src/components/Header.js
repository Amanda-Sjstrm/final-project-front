/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
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

export const Header = () => {
  return (
    <StyledHeader>
      <div id="header">
        <a href="#" className="logo">
          Stigvisaren
        </a>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </StyledHeader>
  );
};
