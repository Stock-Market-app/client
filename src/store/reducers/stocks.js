import { GET_GAINERS, GET_RANDOM_STOCKS } from "../actions/stocks";

const initState = {
  gainers: [],
  random: [],
};

export default function StocksReducer(state = initState, action) {
  switch (action.type) {
    case GET_GAINERS: {
      return {
        ...state,
        gainers: action.payload.gainerList,
      };
    }
    case GET_RANDOM_STOCKS: {
      return {
        ...state,
        random: action.payload.randomList,
      };
    }
    default: {
      return state;
    }
  }
}
