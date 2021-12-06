import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { dates, symbols } from "../assets/data/historical";
import { Chart } from "../components/Chart";

export const IndividualStock = () => {
  const currentStock = useSelector((state) => state.Stocks.current);
  // console.log(currentStock);
  let sampleData = [];
  if (typeof symbols[currentStock] !== "undefined") {
    sampleData = symbols[currentStock].slice(0, 61);
  } else {
    const res = [];
    for (let i = 0; i < 62; i++) {
      res.push(
        symbols["random"][Math.floor(Math.random() * symbols["random"].length)]
      );
    }
    sampleData = res.slice(0, 61);
  }

  let sum = 0,
    average = 0;
  for (let i = 0; i < sampleData.length; i++) {
    sum += sampleData[i];
  }
  average = sum / sampleData.length;
  const label = dates;
  const df = [
    {
      data: sampleData,
    },
  ];
  return (
    <Wrapper>
      <SubContainer>
        <Head>
          <h2>{currentStock}</h2>
          <Button>Add</Button>
        </Head>
        <Info>
          <h4>Average Price: ₹{average.toFixed(2)}</h4>
          <h4>Last Closed: ₹{sampleData[sampleData.length - 1]}</h4>
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

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  style: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 6px;
`;
