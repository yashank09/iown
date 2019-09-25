import firebase from "../Firebase";

export const FETCH_CRYPTO_PRICES_START = "FETCH_CRYPTO_PRICES_START";
export const FETCH_CRYPTO_PRICES_SUCCESS = "FETCH_CRYPTO_PRICES_SUCCESS";
export const FETCH_CRYPTO_PRICES_ERROR = "FETCH_CRYPTO_PRICES_ERROR";

export const ADD_CRYPTO_START = "ADD_CRYPTO_START";
export const ADD_CRYPTO_SUCCESS = "ADD_CRYPTO_SUCSESS";

export const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export function fetchDataPending() {
  return {
    type: FETCH_DATA_PENDING
  };
}

export function fetchDataSuccess(cryptos) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: cryptos
  };
}

export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    payload: error
  };
}

export function fetchData() {
  return dispatch => {
    const data = [];
    const fetchedData = [];
    dispatch(fetchDataPending());
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const ref = firebase.database().ref("/users/" + user.uid + "/cryptos/");
        ref
          .once("value", snapshot => {
            if (snapshot && snapshot.val()) {
              snapshot.forEach(i => {
                var items = i.val();
                data.push(items);
              });
              for (var i = 0; i < data.length; i++) {
                fetchedData.push(data[i]);
              }
            }
          })
          .then(() => fetchedData.map(i => dispatch(fetchDataSuccess(i))));
      } else {
        alert("Please Refresh Page");
        return null;
      }
    });
  };
}

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
