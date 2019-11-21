import { connect } from "react-redux";

import CpuList from "../components/CpuList";
import { Store, getCpuNames } from "../store/stats";
import { selectCpuAction } from "../actions/stats";

const mapStateToProps = (state: Store) => ({
  cpuNames: getCpuNames(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  onCpuClick: (name: string) => dispatch(selectCpuAction(name))
});

const Sidebar = connect(mapStateToProps, mapDispatchToProps)(CpuList);

export default Sidebar;
