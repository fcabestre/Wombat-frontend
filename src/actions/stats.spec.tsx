import React from "react";
import { addStatsAction, selectCpuAction } from "./stats";

it("creates an ADD_CPU action", () => {
  expect(
    addStatsAction([
      {
        name: "cpu",
        user: 4131912,
        nice: 43485,
        system: 887569,
        idle: 18935824,
        iowait: 51604,
        irq: 0,
        softirq: 102247
      }
    ])
  ).toEqual({
    type: "ADD_STATS",
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
      }
    ]
  });
});

it("creates a SELECT_USER action", () => {
  expect(selectCpuAction("cpu0")).toEqual({
    type: "SELECT_CPU",
    selectedCpu: "cpu0"
  });
});
