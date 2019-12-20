import { Action } from '../actions/stats';
import { emptyStats, Stats } from '../store/stats';

export const stats = (state: Stats = emptyStats, action: Action) => {
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
    default:
      return state;
  }
};
