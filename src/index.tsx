import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import statsReducer from './reducers/stats';
import * as serviceWorker from './serviceWorker';

const initialStore = {
    selectedCpu: 'cpu0',
    cpuStats: [
        {
          "name": "cpu",
          "user": 4131912,
          "nice": 43485,
          "system": 887569,
          "idle": 18935824,
          "iowait": 51604,
          "irq": 0,
          "softirq": 102247
        },
        {
          "name": "cpu0",
          "user": 960234,
          "nice": 11659,
          "system": 231388,
          "idle": 15668752,
          "iowait": 40519,
          "irq": 0,
          "softirq": 35043
        },
        {
          "name": "cpu1",
          "user": 916500,
          "nice": 10916,
          "system": 214729,
          "idle": 690046,
          "iowait": 3149,
          "irq": 0,
          "softirq": 18904
        },
        {
          "name": "cpu2",
          "user": 1480248,
          "nice": 10422,
          "system": 249234,
          "idle": 1296362,
          "iowait": 4548,
          "irq": 0,
          "softirq": 45765
        },
        {
          "name": "cpu3",
          "user": 774928,
          "nice": 10486,
          "system": 192216,
          "idle": 1280662,
          "iowait": 3386,
          "irq": 0,
          "softirq": 2535
        }
      ],
}

const store = createStore(statsReducer, initialStore, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
