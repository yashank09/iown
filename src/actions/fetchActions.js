export const FETCH_DATA_PENDING = "FETCH_DATA_PENDING";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export function fetchDataPending() {
  return {
    type: FETCH_DATA_PENDING
  };
}

export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
}

export function fetchDATAError(error) {
  return {
    type: FETCH_DATA_ERROR,
    error: error
  };
}
