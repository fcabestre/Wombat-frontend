import React from "react";

import Label from "./Label";
import styled from "styled-components";

type CpuListPropType = {
  cpuNames: Array<string>;
  className?: string;
  onCpuClick: Function;
};

const CpuList = ({ className, onCpuClick, cpuNames }: CpuListPropType) => (
  <div className={className}>
    {cpuNames.map(cpuName => (
      <Label onClick={() => onCpuClick(cpuName)}>{cpuName}</Label>
    ))}
  </div>
);

export default styled(CpuList)`
  grid-area: sidebar;
`;
