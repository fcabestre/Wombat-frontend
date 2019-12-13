import { connect } from "react-redux";

import ConnectionStatus from "../components/ConnectionStatus";
import { Store, isConnected } from "../store/stats";
import { ConnectionStatusPropsType } from "../components/ConnectionStatus";

const mapStateToProps = (state: Store): ConnectionStatusPropsType => ({
  isConnected: isConnected(state)
});

const mapDispatchToProps = (dispatch: any) => ({});

const Header = connect(mapStateToProps, mapDispatchToProps)(ConnectionStatus);

export default Header;
