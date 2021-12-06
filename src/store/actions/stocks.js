import axios from "axios";

export const GET_GAINERS = "GET_GAINERS";
export const GET_RANDOM_STOCKS = "GET_RANDOM_STOCKS";
export const GET_LOSERS = "GET_LOSERS";
export const CURRENT_STOCK = "CURRENT_STOCK";
export const SET_WATCHLIST = "SET_WATCHLIST";
export const CHANGE_WATCHLIST = "CHANGE_WATCHLIST";

export const getGainers = () => {
  return async (dispatch) => {
    try {
      var response = await fetch("http://localhost:5000/nse/get_gainers");
      response = await response.json();
      //   console.log(response.data);
      dispatch({
        type: GET_GAINERS,
        payload: {
          gainerList: response.data,
        },
      });
    } catch (error) {
      throw new Error();
    }
  };
};

export const getLosers = () => {
  return async (dispatch) => {
    try {
      var response = await fetch("http://localhost:5000/nse/get_losers");
      response = await response.json();
      //   console.log(response.data);
      dispatch({
        type: GET_LOSERS,
        payload: {
          loserList: response.data,
        },
      });
    } catch (error) {
      throw new Error();
    }
  };
};

export const getRandomStocks = () => {
  return async (dispatch) => {
    try {
      var response = await fetch(
        "http://localhost:5000/nse/get_index_stocks?symbol=nifty"
      );
      response = await response.json();
      dispatch({
        type: GET_RANDOM_STOCKS,
        payload: {
          randomList: response.data,
        },
      });
    } catch (error) {
      throw new Error();
    }
  };
};

export const current_stock = ({ name }) => {
  return async (dispatch) => {
    console.log(name);
    try {
      dispatch({
        type: CURRENT_STOCK,
        payload: {
          name: name,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
};

// export const getWatchlist = () => {
//   return async (dispatch) => {
//     try {
//       console.log("Action get");
//       dispatch({
//         type: SET_WATCHLIST,
//         payload: {
//           watchlist: response.data,
//         },
//       });
//       console.log(response);
//     } catch (error) {
//       throw new Error();
//     }
//   };
// };

export const changeWatchlist = (list) => {
  return async (dispatch) => {
    try {
      // const response = await axios.post("/account/watchlist", {
      //   symbol: name,
      // });
      // console.log(response);
      // console.log("Change Action ", list);
      dispatch({
        type: CHANGE_WATCHLIST,
        payload: {
          watchlist: list,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error();
    }
  };
};
