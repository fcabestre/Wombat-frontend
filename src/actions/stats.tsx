import { Cpu, ConnectionStatus } from "../store/stats";

export interface AddStatsAction {
  type: "ADD_STATS";
  cpuStats: Array<Cpu>;
}

export interface SelectCpuAction {
  type: "SELECT_CPU";
  selectedCpu: string | undefined;
}

export interface SetConnectionStatusAction {
  type: "SET_CONNECTION_STATUS";
  connectionStatus: ConnectionStatus;
}

export interface SetSocketAction {
  type: "SET_SOCKET";
  socket: WebSocket;
}

export type Action =
  | AddStatsAction
  | SelectCpuAction
  | SetConnectionStatusAction
  | SetSocketAction;

export const addStatsAction = (cpuStats: Array<Cpu>): AddStatsAction => ({
  type: "ADD_STATS",
  cpuStats
});

export const selectCpuAction = (
  selectedCpu: string | undefined
): SelectCpuAction => ({
  type: "SELECT_CPU",
  selectedCpu
});

export const setConnectionStatusAction = (
  connectionStatus: ConnectionStatus
): SetConnectionStatusAction => ({
  type: "SET_CONNECTION_STATUS",
  connectionStatus
});

export const setSocketAction = (socket: WebSocket): SetSocketAction => ({
  type: "SET_SOCKET",
  socket
});
