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
    <Wrapper>
      <SubWrapper></SubWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #dcdcdc;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const SubWrapper = styled.div`
  background: #f5f5f5;
  // border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 94%;
`;
