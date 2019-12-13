export interface Cpu {
  name: string;
  user: number;
  nice: number;
  system: number;
  iowait: number;
  idle: number;
  irq: number;
  softirq: number;
};

export enum ConnectionStatus {
  Disconnected,
  Connected
}

export interface Store {
  connectionStatus: ConnectionStatus;
  selectedCpu: string | undefined;
  cpuStats: Array<Cpu>;
};

export const emptyStore: Store = {
  connectionStatus: ConnectionStatus.Disconnected,
  selectedCpu: undefined,
  cpuStats: []
};

export const getCpuNames = (state: Store) =>
  state.cpuStats.map(({ name }) => name);

export const getCpuStats = (state: Store) =>
  state.cpuStats.find(({ name }) => state.selectedCpu === name);

export const isConnected = (state: Store) =>
  state.connectionStatus === ConnectionStatus.Connected;
