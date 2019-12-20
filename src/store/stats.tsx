export interface Cpu {
  name: string;
  user: number;
  nice: number;
  system: number;
  iowait: number;
  idle: number;
  irq: number;
  softirq: number;
}

export enum ConnectionStatus {
  Disconnected,
  Connected,
  Error
}

export interface Store {
  socket: WebSocket | undefined;
  connectionStatus: ConnectionStatus;
  selectedCpu: string | undefined;
  cpuStats: Array<Cpu>;
}

export const emptyStore: Store = {
  socket: undefined,
  connectionStatus: ConnectionStatus.Disconnected,
  selectedCpu: undefined,
  cpuStats: []
};

export const getCpuNames = (state: Store) =>
  state.cpuStats.map(({ name }) => name);

export const getSelectedCpuStats = (state: Store) =>
  state.cpuStats.find(({ name }) => state.selectedCpu === name);
