import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { WatcherCard } from "../components/WatcherCard";
import * as StockActions from "../store/actions/stocks";

export const WatchList = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Auth.token);
  const watchList = useSelector((state) => state.Stocks.watcher);
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  // const getWatchlist = async () => {
  //   await dispatch(StockActions.getWatchlist());
  // };

  const getWatchlistData = async () => {
    if (watchList.length > 0) {
      var result = [];
      for (let i = 0; i < watchList.length; i++) {
        // console.log(watchList[i]);
        const response = await fetch(
          `http://localhost:5000/nse/get_quote_info?companyName=${watchList[i]}`
        );

        // console.log(response);
        const res = await response.json();
        // console.log(res.data[0]);
        result.push(res.data[0]);
      }
      setData(result);
    }
  };

  // console.log(data);

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    getWatchlistData();
  }, []);
  return (
    <Wrapper>
      {watchList.length === 0 ? (
        <h4>Watchlist is Empty</h4>
      ) : (
        <Container>
          <h3>Watchlist</h3>
          {data.map((item) => {
            console.log(item);
            return (
              <WatcherCard
                companyName={item.companyName}
                high={item.dayHigh}
                low={item.dayLow}
                name={item.symbol}
              />
            );
          })}
        </Container>
        // <h4>Data</h4>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fcfcfc;
  height: 100vh;
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
  height: 94vh;
  overflow-y: scroll;
  // padding-top: 250px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  align-items: center;
  justify-content: center;
  width: 90%;
  position: absolute;
  top: 24px;
`;
