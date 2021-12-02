import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
            style={{ marginRight: "12px" }}
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
        <>
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
        </>
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
  @media (min-width: 1000px) {
    height: 100%;
  }
`;

const SubContainer = styled.div`
  background: #ffffff;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  width: 80%;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
  padding-top: 32px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  height: 80px;
  border-radius: 6px;
  justify-content: space-between;
  margin: 12px 32px;
`;

const SearchBar = styled.input`
  width: 80%;
  height: 20%;
  padding: 12px 4px;
  border: none;
  outline: none;
  margin-left: 6px;
`;

const SearchHints = styled.div`
  width: 220px;
  position: absolute;
  margin-top: 80px;
  margin-left: 40px;
  border: 2px solid gray;
  opacity: 0.7;
  z-index: 4;
  font-weight: 700;
`;
