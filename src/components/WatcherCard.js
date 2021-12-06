import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as StockActions from "../store/actions/stocks";

export const WatcherCard = ({ name, high, low, companyName }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.Stocks.watcher);
  const handleWatchlist = async () => {
    var result = watchlist.filter((item) => item !== name);
    await dispatch(StockActions.changeWatchlist(result));

    // console.log(res);
  };

  return (
    <Container>
      <Top>
        <h5 style={{ margin: 0, color: "gray" }}>{companyName}</h5>
        <Button
          onClick={() => {
            handleWatchlist();
            window.location.reload(false);
          }}
        >
          Remove
        </Button>
      </Top>
      <Bottom>
        <span style={{ color: "green" }}>High: {high}</span>
        <span style={{ color: "red" }}>Low: {low}</span>
        <span>Symbol: {name}</span>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 12px;
`;

const Top = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  style: none;
  cursor: pointer;
  padding: 12px 12px;
  border-radius: 6px;
`;
