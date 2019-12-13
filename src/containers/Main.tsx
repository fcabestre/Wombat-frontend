import { connect } from "react-redux";

import CpuStats from "../components/CpuStats";
import { Store, getCpuStats } from "../store/stats";

const mapStateToProps = (state: Store) => ({
  cpu: getCpuStats(state)
});

const mapDispatchToProps = (dispatch: any) => ({});

const Main = connect(mapStateToProps, mapDispatchToProps)(CpuStats);

export default Main;
