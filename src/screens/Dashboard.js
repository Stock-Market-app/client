import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import SM1 from "../assets/sm1.png";
import Stock from "../assets/stock.png";
import { DashboardCard } from "../components/DashboardCard";
import { Navbar } from "../components/Navbar";

export const Dashboard = () => {
  const stocks = [
    {
      name: "Nifty",
      id: 1,
    },
    {
      name: "Apple",
      id: 2,
    },
    { name: "Infosys", id: 3 },
    { name: "Airtel", id: 4 },
    { name: "Tata", id: 5 },
    { name: "Birla", id: 6 },
    { name: "Ambani", id: 7 },
    { name: "Adani", id: 8 },
    { name: "Amazon", id: 9 },
    { name: "Flipkart", id: 10 },
  ];
  const token = useSelector((state) => state.Auth.token);
  // console.log(token);
  const [searchItem, setSearchItem] = useState("");
  // console.log(searchItem);
  const [filteredList, setFilteredList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  const handleSearch = (key) => {
    var filtered = [];
    console.log("here");
    if (key.length > 0) {
      filtered = stocks.filter((item) => item.name.includes(`${key}`));
      setFilteredList(filtered);
    } else {
      setFilteredList([]);
    }
  };

  return (
    <Wrapper>
      <Navbar />
      <SubContainer>
        <div
          style={{
            background: `url(${Stock})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "6px",
            opacity: "0.8",
          }}
        >
          <SearchContainer>
            <SearchBar
              type="text"
              placeholder="Search for a Stock"
              onChange={(e) => {
                setSearchItem(e.target.value);
                handleSearch(e.target.value);
              }}
              value={searchItem}
            />
            <i
              className="fas fa-search"
              style={{ marginRight: "12px", color: "#87eaed" }}
              onClick={() => navigate(`/stock/${searchItem}`)}
            ></i>
          </SearchContainer>
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
        </div>
        <div>
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
        </div>
      </SubContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #b4ede9;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1000px) {
    height: 100%;
  }
`;

// const st2 = styled.div`
//   background: #ffff00;
//   display: grid;
//   grid-template-columns: 50% 50%;
//   height: 100%;
//   width: 90%;
//   border-bottom-right-radius: 12px;
//   border-bottom-left-radius: 12px;
//   padding-top: 32px;
// `;

// const stimg = styled.div`
//   position: absolute;
//   display: grid;
//   top: 20000px;
//   left: -200px;
//   width: 120%;

//   padding-top: 32px;
// `;

const SubContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  width: 80%;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  padding-top: 32px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  width: 525px;
  flex-wrap: nowrap;
  padding: 6px;
  outline: none;
  border: none;
  text-align: center;
  grid-auto-rows: minmax(100px, auto);
  float: left;
  height: 90px;
  border-radius: 6px;
  justify-content: space-around;
  margin: 12px 32px;
`;

const SearchBar = styled.input`
  width: 80%;
  height: 20%;

  padding: 12px 8px;
  border: none;
  outline: none;
  border-radius: 6px;
  margin-left: 6px;
`;

const SearchHints = styled.div`
  width: 220px;
  position: absolute;
  margin-top: 84px;
  margin-left: 58px;
  border: 2px solid gray;
  opacity: 0.9;
  background: #d3d3d3;
  z-index: 4;
  font-weight: 700;
`;
