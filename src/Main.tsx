import { connect } from "react-redux";

import CpuStats from "./CpuStats";
import { Store } from "./store/stats";

const mapStateToProps = (state: Store) => ({
  cpu: state.cpuStats.find(({ name }) => state.selectedCpu === name)
});

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

const Main = connect(mapStateToProps, mapDispatchToProps)(CpuStats);

export default Main;
