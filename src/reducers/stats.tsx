import { Action } from "../actions/stats";
import { emptyStore, Store } from "../store/stats";

const statsReducer = (state: Store = emptyStore, action: Action) => {
  switch (action.type) {
    case "ADD_STATS":
      return {
        ...state,
        cpuStats: action.cpuStats
      };
    case "SELECT_CPU":
      return {
        ...state,
        selectedCpu: action.selectedCpu
      };
    case "SET_CONNECTION_STATUS":
      return {
        ...state,
        connectionStatus: action.connectionStatus
      };
    default:
      return state;
  }
};

export default statsReducer;
