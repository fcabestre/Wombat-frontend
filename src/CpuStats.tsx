import React from "react";

import Label from "./Label";
import styled from "styled-components";
import { Cpu } from "./store/stats";

type CpuStatsPropType = {
  cpu: Cpu;
  className?: string;
};

const CpuStats = ({
  className,
  cpu: { user, nice, system, iowait, idle, irq, softirq }
}: CpuStatsPropType) => (
  <div className={className}>
    <Label>{String(user)}</Label>
    <Label>{String(nice)}</Label>
    <Label>{String(system)}</Label>
    <Label>{String(iowait)}</Label>
    <Label>{String(idle)}</Label>
    <Label>{String(irq)}</Label>
    <Label>{String(softirq)}</Label>
  </div>
);

export default styled(CpuStats)`
  grid-area: main;
`;
