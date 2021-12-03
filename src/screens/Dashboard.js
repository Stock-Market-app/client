import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Navbar } from "../components/Navbar";
import { GainCard } from "../components/GainCard";
import { Chart } from "../components/Chart";

export const Dashboard = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.Auth.token);
  const [searchItem, setSearchItem] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const handleSearch = (key) => {
    if (!token) return;
    var filtered = [];
    console.log("here");
    if (key.length > 0) {
      filtered = stocks.filter((item) => item.name.includes(`${key}`));
      setFilteredList(filtered);
    } else {
      setFilteredList([]);
    }
  };

  const dateProvider = () => {
    const d = new Date();
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    if (date < 10) {
      return month + " 0" + date + ", " + year;
    } else {
      return month + " " + date + ", " + year;
    }
  };

  const timeProvider = () => {
    const d = new Date();
    var min = d.getMinutes();
    var hour = d.getHours();
    if (min < 10) {
      min = "0" + min;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }

    return hour + ":" + min;
  };

  return (
    <Wrapper>
      <SubWrapper>
        <MainContainer>
          <Navbar />
          <DashInfo>
            <SearchArea>
              <SearchContainer>
                <SearchBar
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearchItem(e.target.value);
                    handleSearch(e.target.value);
                  }}
                  value={searchItem}
                />
                <i
                  className="fas fa-search"
                  style={{ marginRight: "12px", color: "#87eaed" }}
                  onClick={() => token && navigate(`/stock/${searchItem}`)}
                ></i>
              </SearchContainer>
              <hr
                style={{
                  backgroundColor: "black",
                  width: "100%",
                  border: "1px solid gray",
                }}
              />
              {filteredList.length <= 0 && (
                <SearchHints>
                  {stocks.map((item) => {
                    return (
                      <p
                        onClick={() => {
                          setSearchItem(item.name);
                          setFilteredList([]);
                        }}
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </SearchHints>
              )}
              {filteredList.length > 0 && (
                <SearchHints>
                  {filteredList.map((item) => {
                    return (
                      <p
                        onClick={() => {
                          setSearchItem(item.name);
                          setFilteredList([]);
                        }}
                      >
                        {item.name}
                      </p>
                    );
                  })}
                </SearchHints>
              )}
            </SearchArea>
            <StocksArea>
              <Top>
                <Left>
                  <p style={{ fontSize: "16px" }}>
                    <span style={{ color: "brown", fontWeight: "700" }}>
                      LIVE
                    </span>{" "}
                    - {timeProvider()} | {dateProvider()}
                  </p>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "40%" }}>
                      <First>
                        <h5 style={{ marginBottom: "4px" }}>SENSEX</h5>
                        <h1 style={{ margin: 0, fontFamily: "sans-serif" }}>
                          2345
                        </h1>
                      </First>
                      <First>
                        <h5 style={{ marginBottom: "4px" }}>NIFTY</h5>
                        <h1 style={{ margin: 0, fontFamily: "sans-serif" }}>
                          3124
                        </h1>
                      </First>
                    </div>
                    <Chart label={label} df={df} margin="12px" />
                  </div>
                </Left>
                <Right>
                  <p style={{ fontWeight: "900" }}>Top Gainers</p>
                  <GainData>
                    {gainers.map((item) => {
                      return (
                        <GainCard
                          name={item.name}
                          value={item.value}
                          percentage={item.percentage}
                        />
                      );
                    })}
                  </GainData>
                </Right>
              </Top>
              <Bottom></Bottom>
            </StocksArea>
          </DashInfo>
        </MainContainer>
      </SubWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #dcdcdc;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const SubWrapper = styled.div`
  background: #f5f5f5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99%;
  height: 94%;
`;

const MainContainer = styled.div`
  //   background: #fff;
  align-items: center;
  //   justify-content: center;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  height: 94%;
  width: 99%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #ffeeee;
    border-radius: 12px;
    // margin-top: 36px;
  }

  ::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #444;
    border-radius: 12px;
  }
`;

const DashInfo = styled.div`
  background: white;
  display: flex;
  border-radius: 12px;
  height: 94%;
  width: 96%;
`;

const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 0;
  border-right: 2px solid #24e3d0;
`;

const StocksArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   border: 1px solid gray;
//   width: 90%;
//   flex-wrap: nowrap;
//   padding: 6px;
//   position: fixed;
//   outline: none;
//   border: none;
//   text-align: center;
//   grid-auto-rows: minmax(100px, auto);
//   float: left;
//   height: 90px;
//   border-radius: 6px;
//   justify-content: space-around;
//   margin: 12px 32px;
// `;

const SearchContainer = styled.div`
  //   background: #0e2e60;
  width: 90%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #dcdcdc;
  border-radius: 6px;
`;

const SearchBar = styled.input`
  width: 60%;
  height: 20%;

  padding: 12px 8px;
  border: none;
  outline: none;
  border-radius: 6px;
  margin-left: 6px;
`;

const Top = styled.div`
  border-bottom: 2px solid #dcdcdc;
  width: 96%;
  display: flex;
  margin: 1% 0;
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  flex-grow: 1;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

const GainData = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Bottom = styled.div`
  background: red;
  flex-grow: 1;
`;

const First = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const SearchHints = styled.div`
  width: 100%;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 4;
  font-weight: 400;
  overflow-y: scroll;
  padding-bottom: 26px;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #ffeeee;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #444;
    border-radius: 12px;
  }

  > p {
    width: 100%;
    border: 1px solid #fcfcfc;
    border-left: none;
    border-right: none;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 12px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const gainers = [
  {
    name: "Vodafone",
    value: "14.05",
    percentage: "9.77",
  },
  {
    name: "Gujarat Alkalie",
    value: "654.00",
    percentage: "8.15",
  },
  {
    name: "Gujarat Fluorochem",
    value: "2464.45",
    percentage: "6.44",
  },
  {
    name: "Elgi Equipments",
    value: "292.00",
    percentage: "6.22",
  },
];

const stocks = [
  { name: "Adani Ports", id: 1 },
  { name: "Apple", id: 2 },
  { name: "Infosys", id: 3 },
  { name: "Airtel", id: 4 },
  { name: "Tata", id: 5 },
  { name: "Ambuja Cement", id: 6 },
  { name: "Wipro", id: 7 },
  { name: "ICICI Bank", id: 8 },
  { name: "Amazon", id: 9 },
  { name: "Flipkart", id: 10 },
];

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
