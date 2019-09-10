import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cryptoReducer } from "./cryptosReducer";
import { stocksReducer } from "./stocksReducer";

export const reducers = combineReducers({
  user: userReducer,
  cryptos: cryptoReducer,
  stocks: stocksReducer
});
