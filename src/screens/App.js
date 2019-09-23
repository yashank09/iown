import React from "react";

import LoginComponent from "../components/login/LoginComponent.js";
import DashboardComponent from "../components/dashboard/DashboardComponent.js";
import ProtectedRoute from "../ProtectedRoute";

import { ThemeProvider } from "@material-ui/styles/";
import theme from "../constants/theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { reducers } from "../reducers";
import thunk from "redux-thunk";

import throttle from "lodash/throttle";
import { loadState, saveState } from "../localStorage";

const persistedState = loadState();

const state = createStore(
  reducers,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

state.subscribe(
  throttle(() => {
    saveState({
      user: state.getState().user
    });
  }),
  8000
);

export default () => {
  return (
    <Provider store={state}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginComponent} />
            <ProtectedRoute path="/dash" component={DashboardComponent} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};
