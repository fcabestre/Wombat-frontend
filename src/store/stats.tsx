export type Cpu = {
  name: string;
  user: number;
  nice: number;
  system: number;
  iowait: number;
  idle: number;
  irq: number;
  softirq: number;
};

export type Store = {
  selectedCpu: string | undefined;
  cpuStats: Array<Cpu>;
};

export const emptyStore: Store = {
  selectedCpu: undefined,
  cpuStats: []
};

export const getCpuNames = (state: Store) =>
  state.cpuStats.map(({ name }) => name);

export const getCpuStats = (state: Store) =>
  state.cpuStats.find(({ name }) => state.selectedCpu === name);
