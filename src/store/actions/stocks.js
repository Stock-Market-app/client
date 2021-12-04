export const GET_GAINERS = "GET_GAINERS";
export const GET_RANDOM_STOCKS = "GET_RANDOM_STOCKS";

export const getGainers = () => {
  return async (dispatch) => {
    try {
      var response = await fetch("http://localhost:3000/nse/get_gainers");
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

export const getRandomStocks = () => {
  return async (dispatch) => {
    try {
      var response = await fetch(
        "http://localhost:3000/nse/get_index_stocks?symbol=nifty"
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
