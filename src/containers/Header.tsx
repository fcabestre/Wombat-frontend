import { Dispatch } from "react";
import { connect } from "react-redux";

import { ThDispatch, wsconnect } from "../actions/websocket";
import Connection from "../components/Connection";
import { Store } from "../store/stats";

const mapStateToProps = (state: Store) => ({
  connectionStatus: state.connectionStatus
});

const mapDispatchToProps = (dispatch: ThDispatch) => ({
  connect: (host: string, port: string) => {
    dispatch(wsconnect(host, port));
  }
});

const Header = connect(mapStateToProps, mapDispatchToProps)(Connection);

export default Header;
