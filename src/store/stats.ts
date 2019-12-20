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

export interface Connection {
  socket: WebSocket | undefined;
  connectionStatus: ConnectionStatus;
}

export interface Stats {
  selectedCpu: string | undefined;
  cpuStats: Cpu[];
}

export interface Store {
  stats: Stats;
  connection: Connection;
}

export const emptyStats = {
  selectedCpu: undefined,
  cpuStats: []  
}

export const emptyConnection = {
    socket: undefined,
    connectionStatus: ConnectionStatus.Disconnected,  
}

export const emptyStore: Store = {
  stats: emptyStats,
  connection: emptyConnection
};

export const getCpuNames = (state: Store) =>
  state.stats.cpuStats.map(({ name }) => name);

export const getSelectedCpuStats = (state: Store) =>
  state.stats.cpuStats.find(({ name }) => state.stats.selectedCpu === name);
