import React from "react";
import styled from "styled-components";

export const ListCard = ({ name, high, low, close }) => {
  return (
    <Container>
      <Top>{name}</Top>
      <Bottom>
        <span>High: {high}</span>
        <span>Low: {low}</span>
        <span>Close: {close}</span>
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
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 24px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
