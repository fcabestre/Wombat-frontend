import React from 'react';
import styled from 'styled-components';

import Sidebar from './Sidebar';
import Main from './Main';

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 25vw auto;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "sidebar main main main"
    "footer footer footer footer";
  margin: 10px
  border: 5px solid gray;
  border-radius: 5px;
`

const App = () => (
  <AppLayout>
    <Sidebar />
    <Main />
  </AppLayout>
)

export default App;
