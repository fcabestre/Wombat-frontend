import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createGlobalStyle } from 'styled-components';

import { Action } from './actions/stats';
import App from './App';
import { stats } from './reducers/stats';
import { Store } from './store/stats';
import { connection } from './reducers/connection';

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

const combinedReducer = combineReducers<Store, Action>({
  stats,
  connection
})

const store = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
