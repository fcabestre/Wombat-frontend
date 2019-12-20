import React from "react";

import Label from "./Label";
import styled from "styled-components";

interface CpuListPropType {
  className?: string;
  cpuNames: Array<string>;
  selectedCpu: string;
  doSelect: Function;
}

const CpuList = ({
  className,
  doSelect,
  cpuNames,
  selectedCpu
}: CpuListPropType) => (
  <div className={className}>
    {cpuNames.map(cpuName => (
      <Label
        key={cpuName}
        highlight={selectedCpu === cpuName}
        onClick={() => doSelect(cpuName)}
      >
        {cpuName}
      </Label>
    ))}
  </div>
);

export default styled(CpuList)`
  grid-area: sidebar;
`;
