import { connect } from "react-redux";

import CpuList from "./CpuList";
import { Store } from "./store/stats";
import { selectCpuAction } from './actions/stats';

const mapStateToProps = (state: Store) => ({
  cpuNames: state.cpuStats.map(({ name }) => name)
});

const mapDispatchToProps = (dispatch: any) => ({
  onCpuClick: (name: string) => dispatch(selectCpuAction(name))
})

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(CpuList);

export default Sidebar;
