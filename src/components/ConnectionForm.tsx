import React, { FormEventHandler } from "react";
import styled from "styled-components";

import Label from "./Label";

export interface ConnectionFormPropsType {
  className?: string;
  connect: Function;
  host: string;
  port: string;
}
const ConnectionForm = ({
  host,
  port,
  connect,
  className
}: ConnectionFormPropsType) => {
  let inputHost: HTMLInputElement | null;
  let inputPort: HTMLInputElement | null;

  const handler: FormEventHandler = e => {
    e.preventDefault();
    if (inputHost === null || inputPort === null) {
      return;
    }
    if (inputHost.value === "" || inputPort.value === "") {
      return;
    }
    connect(inputHost.value, inputPort.value);
  };

  return (
    <form onSubmit={handler} className={className}>
      <Label>Host</Label>
      <input
        type="text"
        ref={node => (inputHost = node)}
        name="host"
        defaultValue={host}
      ></input>
      <Label>Port</Label>
      <input
        type="text"
        ref={node => (inputPort = node)}
        name="port"
        defaultValue={port}
      ></input>
      <Label></Label>
      <button type="submit">Connect</button>
    </form>
  );
};

export default styled(ConnectionForm)`
  display: flex;
`;
