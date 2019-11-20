import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import statsReducer from "./reducers/stats";

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

const initialStore = {
  selectedCpu: undefined,
  cpuStats: [
    {
      name: "cpu",
      user: 4131912,
      nice: 43485,
      system: 887569,
      idle: 18935824,
      iowait: 51604,
      irq: 0,
      softirq: 102247
    },
    {
      name: "cpu0",
      user: 960234,
      nice: 11659,
      system: 231388,
      idle: 15668752,
      iowait: 40519,
      irq: 0,
      softirq: 35043
    },
    {
      name: "cpu1",
      user: 916500,
      nice: 10916,
      system: 214729,
      idle: 690046,
      iowait: 3149,
      irq: 0,
      softirq: 18904
    },
    {
      name: "cpu2",
      user: 1480248,
      nice: 10422,
      system: 249234,
      idle: 1296362,
      iowait: 4548,
      irq: 0,
      softirq: 45765
    },
    {
      name: "cpu3",
      user: 774928,
      nice: 10486,
      system: 192216,
      idle: 1280662,
      iowait: 3386,
      irq: 0,
      softirq: 2535
    }
  ]
};

const store = createStore(statsReducer, initialStore, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
