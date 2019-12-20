import { connect } from "react-redux";

import CpuStats from "../components/CpuStats";
import { Store, getSelectedCpuStats } from "../store/stats";
import { Dispatch } from "react";
import { Action } from "../actions/stats";

const mapStateToProps = (state: Store) => ({
  cpu: getSelectedCpuStats(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({});

const Main = connect(mapStateToProps, mapDispatchToProps)(CpuStats);

export default Main;
