import React from "react";
import styled from "styled-components";

import { DashboardCard } from "../components/DashboardCard";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
  return (
    <Wrapper>
      <Navbar />
      <SubContainer>
        <DashboardCard
          name="NSE:INFY"
          last_price="117.60"
          average_price="118.25"
          volume="6875463"
        />
        <DashboardCard
          name="NSE:INFY"
          last_price="117.60"
          average_price="118.25"
          volume="6875463"
        />
        <DashboardCard
          name="NSE:INFY"
          last_price="117.60"
          average_price="118.25"
          volume="6875463"
        />
        <DashboardCard
          name="NSE:INFY"
          last_price="117.60"
          average_price="118.25"
          volume="6875463"
        />
        <DashboardCard
          name="NSE:INFY"
          last_price="117.60"
          average_price="118.25"
          volume="6875463"
        />
        <DashboardCard
          name="NSE:INFY"
          last_price="117.60"
          average_price="118.25"
          volume="6875463"
        />
        <DashboardCard
          name="NSE:INFY"
          last_price="117.60"
          average_price="118.25"
          volume="6875463"
        />
        <DashboardCard
          name="NSE:INFY"
          last_price="117.60"
          average_price="118.25"
          volume="6875463"
        />
      </SubContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #e3e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SubContainer = styled.div`
  background: #ffffff;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80%;
  width: 80%;
  border-bottom-right-radius: 12px;
  border-bottom-left: -radius 12px;
  padding-top: 32px;
`;
