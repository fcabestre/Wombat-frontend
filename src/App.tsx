import React from "react";
import styled from "styled-components";

import Sidebar from "./containers/Sidebar";
import Main from "./containers/Main";
import Header from "./containers/Header";

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 10vw auto auto auto;
  grid-template-rows: repeat(3, auto);
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
