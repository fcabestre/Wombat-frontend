import { connect } from "react-redux";

import CpuStats from "../components/CpuStats";
import { Store, getCpuStats } from "../store/stats";

const mapStateToProps = (state: Store) => ({
  cpu: getCpuStats(state)
});

const Main = connect(mapStateToProps, null)(CpuStats);

export default Main;
