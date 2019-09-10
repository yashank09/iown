import {
  FETCH_CRYPTO_PRICES_START,
  FETCH_CRYPTO_PRICES_SUCCESS,
  FETCH_CRYPTO_PRICES_ERROR,
  ADD_CRYPTO_START,
  ADD_CRYPTO_SUCCESS
} from "../actions/cryptoActions";

const initialState = {
  cryptos: [
    // {
    //   symbol: "ETH",
    //   quantity: 12,
    //   bought_for: 120.21
    // },
    // {
    //   symbol: "BTC",
    //   quantity: 3,
    //   bought_for: 7800.0
    // },
    // {
    //   symbol: "XRP",
    //   quantity: 128,
    //   bought_for: 1.43
    // }
  ],
  currency: "USD",
  isLoading: false,
  isAddingCrypto: false,
  error: null
};

export const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
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
