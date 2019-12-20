import { Action } from '../actions/stats';
import { Connection, emptyConnection } from '../store/stats';

export const connection = (state: Connection = emptyConnection, action: Action) => {
  switch (action.type) {
    case "SET_CONNECTION_STATUS":
      return {
        ...state,
        connectionStatus: action.connectionStatus
      };
    case "SET_SOCKET":
      return {
        ...state,
        socket: action.socket
      };
    default:
      return state;
  }
};
