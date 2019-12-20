import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { ConnectionStatus, Store } from "../store/stats";
import {
  Action,
  addStatsAction,
  selectCpuAction,
  setConnectionStatusAction,
  setSocketAction
} from "./stats";

export type ThDispatch = ThunkDispatch<Store, void, Action>;
type ThAction = ThunkAction<void, Store, void, Action>;

export const wsconnect = (host: string, port: string): ThAction => (
  dispatch: ThDispatch,
  getState: () => Store
) => {
  const state = getState();
  state.connection.socket && state.connection.socket.close();
  const ws = new WebSocket(`ws://${host}:${port}/stats`);
  dispatch(setSocketAction(ws));
  ws.onerror = function(error) {
    dispatch(setConnectionStatusAction(ConnectionStatus.Error));
    dispatch(addStatsAction([]));
    dispatch(selectCpuAction(undefined));
  };
  ws.onclose = function() {
    const state = getState();
    state.connection.connectionStatus !== ConnectionStatus.Error &&
      dispatch(setConnectionStatusAction(ConnectionStatus.Disconnected));
    dispatch(addStatsAction([]));
    dispatch(selectCpuAction(undefined));
  };
  ws.onopen = function() {
    dispatch(setConnectionStatusAction(ConnectionStatus.Connected));
  };
  ws.onmessage = function(message) {
    const cpuStats = JSON.parse(message.data).cpus;
    dispatch(addStatsAction(cpuStats));
  };
};
