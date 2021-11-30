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
  background: #f6f8fb;
  border-radius: 12px;
  padding: 12px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  > span {
    margin: 12px 24px;
  }
`;
