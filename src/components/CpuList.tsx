import React from "react";

import Label from "./Label";
import styled from "styled-components";

interface CpuListPropType {
  cpuNames: Array<string>;
  className?: string;
  selectCpu: Function;
}

const CpuList = ({ className, selectCpu, cpuNames }: CpuListPropType) => (
  <div className={className}>
    {cpuNames.map(cpuName => (
      <Label key={cpuName} onClick={() => selectCpu(cpuName)}>
        {cpuName}
      </Label>
    ))}
  </div>
);

export default styled(CpuList)`
  grid-area: sidebar;
`;
