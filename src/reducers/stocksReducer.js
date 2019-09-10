import {
  FETCH_STOCKS_PRICES_START,
  FETCH_STOCKS_PRICES_SUCCESS,
  FETCH_STOCKS_PRICES_ERROR
} from "../actions/stocksActions";

const initialState = {
  stocks: [],
  isLoading: false,
  isAddingStock: false,
  error: null
};

export const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STOCKS_PRICES_START:
      return { ...state, loading: true };
    case FETCH_STOCKS_PRICES_SUCCESS:
      return { ...state, loading: false, currentPrices: action.payload };
    case FETCH_STOCKS_PRICES_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
