import React, { FormEventHandler } from "react";

import Label from "./Label";
import  Line  from "./Line";

export interface ConnectionFormPropsType {
  connect: Function;
  host: string;
  port: string;
}

const ConnectionForm = ({
  host,
  port,
  connect,
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
    <form onSubmit={handler} className="ConnectionForm">
      <Line>
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
      </Line>
    </form>
  );
};

export default ConnectionForm