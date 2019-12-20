import React from "react";

import Label from "./Label";
import styled from "styled-components";
import { Cpu } from "../store/stats";

interface CpuStatsPropType {
  cpu?: Cpu;
  className?: string;
}

const CpuStats = ({ className, cpu }: CpuStatsPropType) =>
  cpu ? (
    <div className={className}>
      <Label>User</Label>
      <Label>{String(cpu.user)}</Label>
      <Label>Nice</Label>
      <Label>{String(cpu.nice)}</Label>
      <Label>System</Label>
      <Label>{String(cpu.system)}</Label>
      <Label>IO Wait</Label>
      <Label>{String(cpu.iowait)}</Label>
      <Label>Idle</Label>
      <Label>{String(cpu.idle)}</Label>
      <Label>IRQ</Label>
      <Label>{String(cpu.irq)}</Label>
      <Label>Soft IRQ</Label>
      <Label>{String(cpu.softirq)}</Label>
    </div>
  ) : (
    <div></div>
  );

export default styled(CpuStats)`
  grid-area: main;
  display: grid;
  grid-template-columns: 10ex auto;
  grid-template-rows: repeat(7, auto);
`;
