import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { Navbar } from "../components/Navbar";
import { GainCard } from "../components/GainCard";
import { Chart } from "../components/Chart";
import { ListCard } from "../components/ListCard";
import * as stocksAction from "../store/actions/stocks";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.Auth.token);
  var gainer = useSelector((state) => state.Stocks.gainers);
  var loser = useSelector((state) => state.Stocks.losers);
  var random = useSelector((state) => state.Stocks.random);

  const [NIFTY50, setNIFTY50] = useState();
  const [SENSEX, setSENSEX] = useState();
  const [status, setStatus] = useState("closed");
  const [searchItem, setSearchItem] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [topList, setTopList] = useState("gainer");

  const setCurrent = async () => {
    await dispatch(stocksAction.current_stock({ name: searchItem }));
  };

  const getGainersHandler = async () => {
    await dispatch(stocksAction.getGainers());
  };

  const getLosersHandler = async () => {
    await dispatch(stocksAction.getLosers());
  };

  const getRandomStocks = async () => {
    await dispatch(stocksAction.getRandomStocks());
  };

  const getNifty = async () => {
    const response = await fetch("http://localhost:5000/nse/get_indices");

    const res = await response.json();
    setNIFTY50(res.data[0].previousClose);
  };

  const getSensex = async () => {
    const response = await fetch("http://localhost:5000/bse/get_indices");

    const res = await response.json();
    setSENSEX(res[0].todayClose);
  };

  const getStatus = async () => {
    const response = await fetch("http://localhost:5000/get_market_status");

    const res = await response.json();
    setStatus(res.status);
  };

  const getChartData = async () => {
    const response = await fetch(
      "http://localhost:5000/nse/get_intra_day_data?companyName=TCS&time=month"
    );
    const res = await response.text();
    // var result = convert.xml2json(res.body, {
    //   compact: false,
    //   spaces: 4,
    // });
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(res, "text/xml");
    console.log(xmlDoc.body);
  };

  useEffect(() => {
    getStatus();
    getGainersHandler();
    getLosersHandler();
    getRandomStocks();
    getNifty();
    getSensex();
    // getChartData();
  }, []);

  // console.log(gainer);

  // const getStatus = () => {
  //   fetch("http://localhost:3000/get_market_status")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.status === "closed") return false;
  //       return true;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleSearch = (key) => {
    if (!token) return;
    var filtered = [];
    // console.log("here");
    if (key.length > 0) {
      filtered = stocks.filter((item) =>
        item.toLowerCase().includes(`${key.toLowerCase()}`)
      );
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

  gainer = gainer.slice(0, 5);
  loser = loser.slice(0, 5);
  random = random.slice(5, 15);

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
                  onClick={() =>
                    token && setCurrent() && navigate(`/stock/${searchItem}`)
                  }
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
                          setSearchItem(item);
                          setFilteredList([]);
                        }}
                      >
                        {item}
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
                          setSearchItem(item);
                          setFilteredList([]);
                        }}
                      >
                        {item}
                      </p>
                    );
                  })}
                </SearchHints>
              )}
            </SearchArea>
            <StocksArea>
              <Top>
                <Left>
                  {status === "closed" && (
                    <p
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <span
                        style={{
                          color: "black",
                          fontWeight: "700",
                          backgroundColor: "red",
                          opacity: "0.9",
                          paddingTop: "6px",
                          paddingRight: "6px",
                          paddingLeft: "6px",
                        }}
                      >
                        LIVE
                      </span>{" "}
                      - {timeProvider()} | {dateProvider()}
                    </p>
                  )}
                  {status === "open" && (
                    <p
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      <span
                        style={{
                          color: "yellow",
                          fontWeight: "700",
                          backgroundColor: "green",
                          opacity: "0.7",
                          paddingTop: "6px",
                          paddingRight: "6px",
                          paddingLeft: "6px",
                        }}
                      >
                        LIVE
                      </span>{" "}
                      - {timeProvider()} | {dateProvider()}
                    </p>
                  )}
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "40%" }}>
                      <First>
                        <h5 style={{ marginBottom: "4px" }}>SENSEX</h5>
                        {SENSEX && (
                          <h3 style={{ margin: 0, fontFamily: "sans-serif" }}>
                            {SENSEX}
                          </h3>
                        )}
                      </First>
                      <First>
                        <h5 style={{ marginBottom: "4px" }}>NIFTY</h5>
                        {NIFTY50 && (
                          <h3 style={{ margin: 0, fontFamily: "sans-serif" }}>
                            {NIFTY50}
                          </h3>
                        )}
                      </First>
                    </div>
                    <Chart label={label} df={df} margin="12px" />
                  </div>
                </Left>
                <Right>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      textDecoration: "underline",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: topList === "gainer" ? "900" : "400",
                        cursor: "pointer",
                      }}
                      onClick={() => setTopList("gainer")}
                    >
                      Top Gainers
                    </p>
                    <p
                      style={{
                        fontWeight: topList === "loser" ? "900" : "400",
                        cursor: "pointer",
                      }}
                      onClick={() => setTopList("loser")}
                    >
                      Top Losers
                    </p>
                  </div>
                  {topList === "gainer" && (
                    <GainData>
                      {gainer?.map((item) => {
                        return (
                          <GainCard
                            name={item.symbol}
                            value={item.highPrice}
                            percentage={item.netPrice}
                          />
                        );
                      })}
                    </GainData>
                  )}
                  {topList === "loser" && (
                    <GainData>
                      {loser?.map((item) => {
                        return (
                          <GainCard
                            name={item.symbol}
                            value={item.highPrice}
                            percentage={item.netPrice}
                          />
                        );
                      })}
                    </GainData>
                  )}
                </Right>
              </Top>
              <Bottom>
                {random.map((item) => {
                  return (
                    <ListCard
                      name={item.symbol}
                      high={item.high}
                      low={item.low}
                      ltP={item.ltP}
                    />
                  );
                })}
              </Bottom>
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
  // border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 94%;
`;

const MainContainer = styled.div`
  //   background: #fff;
  align-items: center;
  //   justify-content: center;
  display: flex;
  flex-direction: column;
  // border-radius: 12px;
  height: 94%;
  width: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 6px;
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
  // border-radius: 12px;
  height: 94%;
  width: 100%;
`;

const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
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

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 2px;
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
  text-transform: capitalize;
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
  flex-grow: 1;
  width: 96%;
  padding-bottom: 48px;
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
    width: 4px;
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

const stocks = [
  "ACC",
  "ADANIENT",
  "ADANIPORTS",
  "ADANIPOWER",
  "AJANTPHARM",
  "ALBK",
  "AMARAJABAT",
  "AMBUJACEM",
  "APOLLOHOSP",
  "APOLLOTYRE",
  "ARVIND",
  "ASHOKLEY",
  "ASIANPAINT",
  "AUROPHARMA",
  "AXISBANK",
  "BAJAJ - AUTO",
  "BAJFINANCE",
  "BAJAJFINSV",
  "BALKRISIND",
  "BANKBARODA",
  "BANKINDIA",
  "BATAINDIA",
  "BEML",
  "BERGEPAINT",
  "BEL",
  "BHARATFIN",
  "BHARATFORG",
  "BPCL",
  "BHARTIARTL",
  "INFRATEL",
  "BHEL",
  "BIOCON",
  "BOSCHLTD",
  "BRITANNIA",
  "CADILAHC",
  "CANFINHOME",
  "CANBK",
  "CAPF",
  "CASTROLIND",
  "CEATLTD",
  "CENTURYTEX",
  "CESC",
  "CGPOWER",
  "CHENNPETRO",
  "CHOLAFIN",
  "CIPLA",
  "COALINDIA",
  "COLPAL",
  "CONCOR",
  "CUMMINSIND",
  "DABUR",
  "DCBBANK",
  "DHFL",
  "DISHTV",
  "DIVISLAB",
  "DLF",
  "DRREDDY",
  "EICHERMOT",
  "ENGINERSIN",
  "EQUITAS",
  "ESCORTS",
  "EXIDEIND",
  "FEDERALBNK",
  "GAIL",
  "GLENMARK",
  "GMRINFRA",
  "GODFRYPHLP",
  "GODREJCP",
  "GODREJIND",
  "GRASIM",
  "GSFC",
  "HAVELLS",
  "HCLTECH",
  "HDFCBANK",
  "HDFC",
  "HEROMOTOCO",
  "HEXAWARE",
  "HINDALCO",
  "HINDPETRO",
  "HINDUNILVR",
  "HINDZINC",
  "ICICIBANK",
  "ICICIPRULI",
  "IDBI",
  "IDEA",
  "IDFCBANK",
  "IDFC",
  "IFCI",
  "IBULHSGFIN",
  "INDIANB",
  "IOC",
  "IGL",
  "INDUSINDBK",
  "INFIBEAM",
  "INFY",
  "INDIGO",
  "IRB",
  "ITC",
  "JISLJALEQS",
  "JPASSOCIAT",
  "JETAIRWAYS",
  "JINDALSTEL",
  "JSWSTEEL",
  "JUBLFOOD",
  "JUSTDIAL",
  "KAJARIACER",
  "KTKBANK",
  "KSCL",
  "KOTAKBANK",
  "KPIT",
  "L & TFH",
  "LT",
  "LICHSGFIN",
  "LUPIN",
  "M & MFIN",
  "MGL",
  "M & M",
  "MANAPPURAM",
  "MRPL",
  "MARICO",
  "MARUTI",
  "MFSL",
  "MINDTREE",
  "MOTHERSUMI",
  "MRF",
  "MCX",
  "MUTHOOTFIN",
  "NATIONALUM",
  "NBCC",
  "NCC",
  "NESTLEIND",
  "NHPC",
  "NIITTECH",
  "NMDC",
  "NTPC",
  "ONGC",
  "OIL",
  "OFSS",
  "ORIENTBANK",
  "PAGEIND",
  "PCJEWELLER",
  "PETRONET",
  "PIDILITIND",
  "PEL",
  "PFC",
  "POWERGRID",
  "PTC",
  "PNB",
  "PVR",
  "RAYMOND",
  "RBLBANK",
  "RELCAPITAL",
  "RCOM",
  "RELIANCE",
  "RELINFRA",
  "RPOWER",
  "REPCOHOME",
  "RECLTD",
  "SHREECEM",
  "SRTRANSFIN",
  "SIEMENS",
  "SREINFRA",
  "SRF",
  "SBIN",
  "SAIL",
  "STAR",
  "SUNPHARMA",
  "SUNTV",
  "SUZLON",
  "SYNDIBANK",
  "TATACHEM",
  "TATACOMM",
  "TCS",
  "TATAELXSI",
  "TATAGLOBAL",
  "TATAMTRDVR",
  "TATAMOTORS",
  "TATAPOWER",
  "TATASTEEL",
  "TECHM",
  "INDIACEM",
  "RAMCOCEM",
  "SOUTHBANK",
  "TITAN",
  "TORNTPHARM",
  "TORNTPOWER",
  "TV18BRDCST",
  "TVSMOTOR",
  "UJJIVAN",
  "ULTRACEMCO",
  "UNIONBANK",
  "UBL",
  "MCDOWELL - N",
  "UPL",
  "VEDL",
  "VGUARD",
  "VOLTAS",
  "WIPRO",
  "WOCKPHARMA",
  "YESBANK",
  "ZEEL",
];

const label = ["Jan", "Feb", "Mar", "Apr", "May"];
const df = [
  {
    label: "Data for Nifty",
    data: [3, 2, 2, 1, 5],
  },
  {
    label: "Data for Sensex",
    data: [2.8, 1.2, 4, 3.1, 3.6],
  },
];
