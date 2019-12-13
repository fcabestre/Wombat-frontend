import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Dispatch } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import statsReducer from "./reducers/stats";
import {
  addStatsAction,
  Action,
  setConnectionStatusAction
} from "./actions/stats";
import { ConnectionStatus } from "./store/stats";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  cursor: default;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

const wsconnect = (dispatch: Dispatch<Action>, url: string) => {
  const ws = new WebSocket(url);

  ws.onerror = function(error) {
    dispatch(setConnectionStatusAction(ConnectionStatus.Disconnected));
    setTimeout(wsconnect(dispatch, url), 2000);
  };

  ws.onclose = function() {
    dispatch(setConnectionStatusAction(ConnectionStatus.Disconnected));
    setTimeout(wsconnect(dispatch, url), 2000);
  };

  ws.onopen = function() {
    dispatch(setConnectionStatusAction(ConnectionStatus.Connected));
  };

  ws.onmessage = function(message) {
    const cpuStats = JSON.parse(message.data).cpus;
    dispatch(addStatsAction(cpuStats));
  };
};

const store = createStore(statsReducer, composeWithDevTools());
wsconnect(store.dispatch, "ws://localhost:3030/stats");

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
