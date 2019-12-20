import React from "react";

import {
  ConnectionStatus,
  emptyStore,
  getCpuNames,
  getSelectedCpuStats
} from "./stats";

const storeNoSelectedCpu = {
  connection: {
    socket: undefined,
    connectionStatus: ConnectionStatus.Connected,  
  },
  stats: {
    selectedCpu: undefined,
    cpuStats: [
      {
        name: "cpu",
        user: 4131912,
        nice: 43485,
        system: 887569,
        idle: 18935824,
        iowait: 51604,
        irq: 0,
        softirq: 102247
      },
      {
        name: "cpu0",
        user: 960234,
        nice: 11659,
        system: 231388,
        idle: 15668752,
        iowait: 40519,
        irq: 0,
        softirq: 35043
      },
      {
        name: "cpu1",
        user: 916500,
        nice: 10916,
        system: 214729,
        idle: 690046,
        iowait: 3149,
        irq: 0,
        softirq: 18904
      },
      {
        name: "cpu2",
        user: 1480248,
        nice: 10422,
        system: 249234,
        idle: 1296362,
        iowait: 4548,
        irq: 0,
        softirq: 45765
      },
      {
        name: "cpu3",
        user: 774928,
        nice: 10486,
        system: 192216,
        idle: 1280662,
        iowait: 3386,
        irq: 0,
        softirq: 2535
      }
    ]  
  }
};

const store = {
  ...storeNoSelectedCpu,
  selectedCpu: "cpu2"
};

it("gets no cpu names from an empty store", () => {
  expect(getCpuNames(emptyStore)).toEqual([]);
});

it("gets no some names from a populated store", () => {
  expect(getCpuNames(storeNoSelectedCpu)).toEqual([
    "cpu",
    "cpu0",
    "cpu1",
    "cpu2",
    "cpu3"
  ]);
});

it("gets no stats from an empty store", () => {
  expect(getSelectedCpuStats(emptyStore)).toBeUndefined;
});

it("gets no stats from a populated store without selected cpu", () => {
  expect(getSelectedCpuStats(storeNoSelectedCpu)).toBeUndefined;
});

it("gets some stats from a populated store with a selected cpu", () => {
  expect(getSelectedCpuStats(store)).toEqual({
    name: "cpu2",
    user: 1480248,
    nice: 10422,
    system: 249234,
    idle: 1296362,
    iowait: 4548,
    irq: 0,
    softirq: 45765
  });
});
