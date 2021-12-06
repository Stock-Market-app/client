import React from "react";
import styled from "styled-components";

export const GainCard = ({ name, value, percentage, color }) => {
  return (
    <>
      <Container>
        <span>{name}</span>
        <span>
          <span>{value}</span>(
          <span style={{ color: `${color}` }}>{percentage}</span>)
        </span>
      </Container>
      <hr
        style={{
          backgroundColor: "black",
          width: "100%",
          border: "1px solid gray",
        }}
      />
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 8px;
`;
