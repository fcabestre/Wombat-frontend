import { connect } from "react-redux";

import Connection from "../components/Connection";
import { Store } from "../store/stats";
import { wsconnect } from "../actions/websocket";

const mapStateToProps = (state: Store) => ({
  connectionStatus: state.connectionStatus
});

const mapDispatchToProps = (dispatch: any) => ({
  connect: (host: string, port: string) => {
    dispatch(wsconnect(host, port));
  }
});

const Header = connect(mapStateToProps, mapDispatchToProps)(Connection);

export default Header;
