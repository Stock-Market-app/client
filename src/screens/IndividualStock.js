import React from "react";
import styled from "styled-components";
import { Chart } from "../components/Chart";

export const IndividualStock = () => {
  const label = ["Jan", "Feb", "Mar", "Apr", "May"];
  const df = [
    {
      label: "Data for 2020",
      data: [3, 2, 2, 1, 5],
    },
    {
      label: "Data for 2019",
      data: [2.8, 1.2, 4, 3.1, 3.6],
    },
  ];
  return (
    <Wrapper>
      <SubContainer>
        <h2>Stock name</h2>
        <Info>
          <h4>Average Price: ₹291.45</h4>
          <h4>Last Closed: ₹289.59</h4>
        </Info>
        <Chart label={label} df={df} />
      </SubContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #b4ede9;
`;

const SubContainer = styled.div`
  width: 70%;
  background-color: #f5fafa;
  padding: 24px;
  border-radius: 6px;
  height: 100%;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
