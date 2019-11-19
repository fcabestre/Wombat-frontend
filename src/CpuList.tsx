import React from "react";

import Label from "./Label";

type CpuListPropType = {
  cpuNames: Array<string>;
};

const CpuList = ({ cpuNames }: CpuListPropType) => (
  <div className="CpuList">
    {cpuNames.map(cpuName => (
      <Label>{cpuName}</Label>
    ))}
  </div>
);

export default CpuList;
