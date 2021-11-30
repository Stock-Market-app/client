import React from "react";
import styled from "styled-components";

import * as authActions from "../store/actions/auth";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <h4>StockStop</h4>
      <h4>Search</h4>
      <Button onClick={() => authActions.logout()}>Logout</Button>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  background: #ffffff;
  display: flex;
  width: 80%;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  align-items: center;
  justify-content: space-between;

  > h4 {
    margin: 18px;
  }
`;

const Button = styled.button`
  margin: 18px;
  border-radius: 6px;
  padding: 8px 16px;
  border: none;
  background-color: #04abeb;
`;
