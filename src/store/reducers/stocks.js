import {
  GET_GAINERS,
  GET_LOSERS,
  GET_RANDOM_STOCKS,
  CURRENT_STOCK,
} from "../actions/stocks";

const initState = {
  gainers: [],
  losers: [],
  random: [],
  current: "",
};

export default function StocksReducer(state = initState, action) {
  switch (action.type) {
    case GET_GAINERS: {
      return {
        ...state,
        gainers: action.payload.gainerList,
      };
    }
    case GET_LOSERS: {
      return {
        ...state,
        losers: action.payload.loserList,
      };
    }
    case GET_RANDOM_STOCKS: {
      return {
        ...state,
        random: action.payload.randomList,
      };
    }
    case CURRENT_STOCK: {
      return {
        ...state,
        current: action.payload.name,
      };
    }
    default: {
      return state;
    }
  }
}
