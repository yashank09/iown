export const FETCH_STOCKS_PRICES_START = "FETCH_STOCKS_PRICES_START";
export const FETCH_STOCKS_PRICES_SUCCESS = "FETCH_STOCKS_PRICES_SUCCESS";
export const FETCH_STOCKS_PRICES_ERROR = "FETCH_STOCKS_PRICES_ERROR";

export function fetchStocksPricesStart() {
  return {
    type: FETCH_STOCKS_PRICES_START
  };
}

export function fetchStocksPriceSuccess(prices) {
  return {
    type: FETCH_STOCKS_PRICES_SUCCESS,
    payload: prices
  };
}

export function fetchStocksPriceError(error) {
  return {
    type: FETCH_STOCKS_PRICES_ERROR,
    payload: error
  };
}
