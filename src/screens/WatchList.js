import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

export const WatchList = () => {
  const token = useSelector((state) => state.Auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });
  return (
    <>
      <h4>WatchList</h4>
      <h6>Build the complete watchlist</h6>
    </>
  );
};
