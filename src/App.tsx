import { connect } from 'react-redux';

import CpuList from './CpuList';
import { Store } from './store/stats';

const mapStateToProps = (state: Store) => ({cpuNames: state.cpuStats.map( ({ name }) => name ) } )

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

const App = connect(mapStateToProps, mapDispatchToProps)(CpuList);

export default App;
