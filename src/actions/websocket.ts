import { ConnectionStatus } from "../store/stats";
import { setSocketAction, selectCpuAction } from "./stats";
import { addStatsAction, setConnectionStatusAction } from "./stats";

export const wsconnect = (host: string, port: string) => (
  dispatch: any,
  getState: any
) => {
  const state = getState();
  state.socket && state.socket.close();
  const ws = new WebSocket(`ws://${host}:${port}/stats`);
  dispatch(setSocketAction(ws));

  ws.onerror = function(error) {
    dispatch(setConnectionStatusAction(ConnectionStatus.Error));
    dispatch(addStatsAction([]));
    dispatch(selectCpuAction(undefined));
  };

  ws.onclose = function() {
    const state = getState();
    state.connectionStatus !== ConnectionStatus.Error &&
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
