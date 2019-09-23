import {
  FETCH_CRYPTO_PRICES_START,
  FETCH_CRYPTO_PRICES_SUCCESS,
  FETCH_CRYPTO_PRICES_ERROR,
  ADD_CRYPTO_START,
  ADD_CRYPTO_SUCCESS
} from "../actions/cryptoActions";

import {
  FETCH_DATA_PENDING,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR
} from "../actions/fetchActions";

const initialState = {
  cryptos: [],
  currency: "USD",
  isLoading: false,
  isAddingCrypto: false,
  error: null
};

export const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PENDING:
      return { ...state, isLoading: true };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        cryptos: [...state.cryptos, action.payload],
        isLoading: false
      };
    case FETCH_DATA_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case FETCH_CRYPTO_PRICES_START:
      return { ...state, isLoading: true };
    case FETCH_CRYPTO_PRICES_SUCCESS:
      return { ...state, isLoading: false, currentPrices: action.payload };
    case FETCH_CRYPTO_PRICES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ADD_CRYPTO_START:
      return { ...state, isAddingCrypto: true };
    case ADD_CRYPTO_SUCCESS:
      return {
        ...state,
        cryptos: [...state.cryptos, action.payload],
        isAddingCrypto: false
      };
    default:
      return state;
  }
};
