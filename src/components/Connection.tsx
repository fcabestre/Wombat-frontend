import React from "react";
import styled from "styled-components";

import ConnectionForm from "./ConnectionForm";
import ConnectionStatus from "./ConnectionStatus";
import { ConnectionStatus as Status } from "../store/stats";

export interface ConnectionPropsType {
  className?: string;
  connectionStatus: Status;
  connect: Function;
}

const Connection = ({
  connectionStatus,
  className,
  connect
}: ConnectionPropsType) => (
  <div className={className}>
    <ConnectionForm connect={connect} host="" port="" />
    <ConnectionStatus connectionStatus={connectionStatus} />
  </div>
);

export default styled(Connection)`
  grid-area: header;
`;
