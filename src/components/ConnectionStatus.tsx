import React from "react";
import styled, { css } from "styled-components";
import Label from "./Label";

export interface ConnectionStatusPropsType {
  className?: string;
  isConnected: boolean;
}

const ConnectionStatusDiv = styled.div<ConnectionStatusPropsType>`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: ${props => (props.isConnected ? "green" : "orange")};
  margin: 5px;
`;

const ConnectionStatus = ({
  isConnected,
  className
}: ConnectionStatusPropsType) => (
  <div className={className}>
    <Label>Connection Status</Label>
    <ConnectionStatusDiv isConnected={isConnected} />
  </div>
);

export default styled(ConnectionStatus)`
  grid-area: header;
  display: flex;
  align-items: center;
`;
