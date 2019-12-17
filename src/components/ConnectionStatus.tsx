import React from "react";
import styled from "styled-components";

import Label from "./Label";
import { ConnectionStatus as Status } from "../store/stats";

export interface ConnectionStatusPropsType {
  className?: string;
  connectionStatus: Status;
}

const stateColorEncoding = (status: Status) => {
  switch (status) {
    case Status.Connected:
      return "green";
    case Status.Disconnected:
      return "orange";
    case Status.Error:
      return "red";
  }
};

const Led = styled.div<ConnectionStatusPropsType>`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: ${props => stateColorEncoding(props.connectionStatus)};
  margin: 5px;
`;

const ConnectionStatus = ({
  connectionStatus,
  className
}: ConnectionStatusPropsType) => (
  <div className={className}>
    <Label>Connection Status</Label>
    <Led connectionStatus={connectionStatus} />
  </div>
);

export default styled(ConnectionStatus)`
  display: flex;
  align-items: center;
`;
