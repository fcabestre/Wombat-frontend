import React from "react";
import styled from "styled-components";

import Sidebar from "./containers/Sidebar";
import Main from "./containers/Main";
import Header from "./containers/Header";

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 25vw auto;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "sidebar main main main"
    "footer footer footer footer";
  margin: 10px;
`;

const App = () => (
  <AppLayout>
    <Header />
    <Sidebar />
    <Main />
  </AppLayout>
);

export default App;
