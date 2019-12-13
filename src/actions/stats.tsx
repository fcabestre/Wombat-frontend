import { Cpu, ConnectionStatus } from '../store/stats';

export interface AddStatsAction {
  type: "ADD_STATS";
  cpuStats: Array<Cpu>;
};

export interface SelectCpuAction {
  type: "SELECT_CPU";
  selectedCpu: string;
};

export interface SetConnectionStatusAction {
  type: "SET_CONNECTION_STATUS";
  connectionStatus: ConnectionStatus;
};

export type Action = AddStatsAction | SelectCpuAction | SetConnectionStatusAction;

export const addStatsAction = (cpuStats: Array<Cpu>): AddStatsAction => ({
  type: "ADD_STATS",
  cpuStats
});

export const selectCpuAction = (selectedCpu: string): SelectCpuAction => ({
  type: "SELECT_CPU",
  selectedCpu
});

export const setConnectionStatusAction = (connectionStatus: ConnectionStatus): SetConnectionStatusAction => ({
  type: "SET_CONNECTION_STATUS",
  connectionStatus
});
