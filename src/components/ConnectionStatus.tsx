import React from "react";

import Label from "./Label";
import { ConnectionStatus as Status } from "../store/stats";
import Led from "./Led";
import Line from "./Line";

export interface ConnectionStatusPropsType {
  connectionStatus: Status;
}

const statusColorEncoding = (status: Status) => {
  switch (status) {
    case Status.Connected:
      return "green";
    case Status.Disconnected:
      return "orange";
    case Status.Error:
      return "red";
  }
};

const ConnectionStatus = ({ connectionStatus }: ConnectionStatusPropsType) => (
  <Line className="ConnectionStatus">
    <Label>Connection Status</Label>
    <Led color={statusColorEncoding(connectionStatus)} />
  </Line>
);

export default ConnectionStatus;
