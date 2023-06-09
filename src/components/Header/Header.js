/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { StyledHeader } from "./StyledHeader";

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
