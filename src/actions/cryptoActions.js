export const FETCH_CRYPTO_PRICES_START = "FETCH_CRYPTO_PRICES_START";
export const FETCH_CRYPTO_PRICES_SUCCESS = "FETCH_CRYPTO_PRICES_SUCCESS";
export const FETCH_CRYPTO_PRICES_ERROR = "FETCH_CRYPTO_PRICES_ERROR";

export const ADD_CRYPTO_START = "ADD_CRYPTO_START";
export const ADD_CRYPTO_SUCCESS = "ADD_CRYPTO_SUCSESS";

export function fetchCryptoPricesStart() {
  return {
    type: FETCH_CRYPTO_PRICES_START
  };
}

export function fetchCryptoPriceSuccess(prices) {
  return {
    type: FETCH_CRYPTO_PRICES_SUCCESS,
    payload: prices
  };
}

export function fetchCryptoPriceError(error) {
  return {
    type: FETCH_CRYPTO_PRICES_ERROR,
    payload: error
  };
}

export function addCryptoStart() {
  return {
    type: ADD_CRYPTO_START
  };
}

export function addCryptoSuccess(crypto) {
  return {
    type: ADD_CRYPTO_SUCCESS,
    payload: crypto
  };
}
