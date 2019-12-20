import { connect } from "react-redux";

import CpuList from "../components/CpuList";
import { Store, getCpuNames } from "../store/stats";
import { selectCpuAction, Action } from "../actions/stats";
import { Dispatch } from "react";

const mapStateToProps = (state: Store) => ({
  cpuNames: getCpuNames(state),
  selectedCpu: state.selectedCpu
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  doSelect: (name: string) => dispatch(selectCpuAction(name))
});

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(CpuList);

export default Sidebar;
