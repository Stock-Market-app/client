export const GET_GAINERS = "GET_GAINERS";
export const GET_RANDOM_STOCKS = "GET_RANDOM_STOCKS";
export const GET_LOSERS = "GET_LOSERS";
export const CURRENT_STOCK = "CURRENT_STOCK";

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
