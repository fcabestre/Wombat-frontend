import React from "react";

import Label from "./Label";
import styled from "styled-components";
import { Cpu } from "../store/stats";

type CpuStatsPropType = {
  cpu?: Cpu;
  className?: string;
};

const CpuStats = ({ className, cpu }: CpuStatsPropType) =>
  cpu ? (
    <div className={className}>
      <Label>{String(cpu.user)}</Label>
      <Label>{String(cpu.nice)}</Label>
      <Label>{String(cpu.system)}</Label>
      <Label>{String(cpu.iowait)}</Label>
      <Label>{String(cpu.idle)}</Label>
      <Label>{String(cpu.irq)}</Label>
      <Label>{String(cpu.softirq)}</Label>
    </div>
  ) : (
    <div></div>
  );

export default styled(CpuStats)`
  grid-area: main;
`;
