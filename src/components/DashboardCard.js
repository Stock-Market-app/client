import React from "react";
import styled from "styled-components";

export const DashboardCard = ({ name, last_price, average_price, volume }) => {
  return (
    <Card>
      <Info>
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          {name}
        </span>
        <span>Volume: {volume}</span>
      </Info>
      <Info>
        <span>Last Price: {last_price}</span>
        <span>Average Price: {average_price}</span>
      </Info>
    </Card>
  );
};

const Card = styled.div`
  background: #a1e6e4;
  border-radius: 12px;
  padding: 12px;
  margin: 12px;
  display: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  display: absolute;
  > span {
    margin: 25px 50px;
  }
`;
