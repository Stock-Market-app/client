import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const ListCard = ({ name, high, low, ltP, token, setCurrent }) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        token && setCurrent(name) && navigate(`/stock/${name}`);
      }}
    >
      <Top style={{ color: "gray" }}>{name}</Top>
      <Bottom>
        <span style={{ color: "green" }}>High: {high}</span>
        <span style={{ color: "red" }}>Low: {low}</span>
        <span>Last Traded Price: {ltP}</span>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 96%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 24px;
`;

const Top = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 24px;
  display: flex;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
