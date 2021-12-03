import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import * as authActions from "../store/actions/auth";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.Auth.userName);
  const token = useSelector((state) => state.Auth.token);
  // console.log(username);

  const logoutHandler = async () => {
    await dispatch(authActions.logout());
  };

  const watchlistHandler = () => {
    if (token) navigate("/watchlist");
    else navigate("/");
  };

  return (
    <NavbarContainer>
      <h4 onClick={() => navigate("/dashboard")}>Hello {username}!</h4>
      <h2>Welcome to StockStop</h2>
      <div>
        <Button onClick={watchlistHandler} color="#04abeb">
          Watchlist
        </Button>
        <Button onClick={logoutHandler} color="#b52a46">
          Logout
        </Button>
      </div>
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

  > h2 {
    text-decoration: underline;
    margin: 18px;
    cursor: none;
  }

  > h4 {
    margin: 18px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin: 18px;
  border-radius: 6px;
  padding: 8px 16px;
  border: none;
  background-color: ${(props) => props.color};
  cursor: pointer;
  color: #eeffff;
`;
