import { Routes, Route } from "react-router-dom";

import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/header/NavBar";
import SideBar from "./components/sidebar/SideBar";
// pages
import Dashboard from "./pages/Dashboard";
import Backtest from "./pages/Backtest";
import Trades from "./pages/Trades";
import Strategy from "./pages/Strategy";
import Assets from "./pages/Assets";
import Accounts from "./pages/Accounts";
import Broker from "./pages/Broker";
import Deposits from "./pages/Deposits";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav"
                 "main main"`,
        lg: `"aside nav" 
            "aside main"`,
      }}
      gridTemplateColumns={{ base: "1fr", lg: "286px 1fr" }}
      gridTemplateRows={{ base: "auto 1fr", lg: "auto 1fr" }}
      height="100px"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <SideBar />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/backtest" element={<Backtest />} />
          <Route path="/trades" element={<Trades />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/broker" element={<Broker />} />
          <Route path="/deposit" element={<Deposits />} />
          <Route path="/transaction" element={<Transactions />} />
        </Routes>
      </GridItem>
    </Grid>
  );
}

export default App;
