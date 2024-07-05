import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Grid, GridItem, Show } from "@chakra-ui/react";

import NavBar from "./components/header/NavBar";
import SideBar from "./components/sidebar/SideBar";

// pages
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Backtest from "./pages/dashboard/Backtest";
import Trades from "./pages/dashboard/Trades";
import Strategy from "./pages/dashboard/Strategy";
import Assets from "./pages/dashboard/Assets";
import Accounts from "./pages/dashboard/Accounts";
import Broker from "./pages/dashboard/Broker";
import Deposits from "./pages/dashboard/Deposits";
import Transactions from "./pages/dashboard/Transactions";

// Layout component
const MainLayout = ({ children }) => (
  <Grid
    templateAreas={{
      base: `"nav nav"
             "main main"`,
      lg: `"aside nav"
           "aside main"`,
    }}
    gridTemplateColumns={{ base: "1fr", lg: "286px 1fr" }}
    gridTemplateRows={{ base: "auto 1fr", lg: "auto 1fr" }}
  >
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <Show above="lg">
      <GridItem area="aside">
        <SideBar />
      </GridItem>
    </Show>
    <GridItem area="main">{children}</GridItem>
  </Grid>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: (
      <MainLayout>
        <Dashboard />
      </MainLayout>
    ),
  },
  {
    path: "/backtest",
    element: (
      <MainLayout>
        <Backtest />
      </MainLayout>
    ),
  },
  {
    path: "/trades",
    element: (
      <MainLayout>
        <Trades />
      </MainLayout>
    ),
  },
  {
    path: "/strategy",
    element: (
      <MainLayout>
        <Strategy />
      </MainLayout>
    ),
  },
  {
    path: "/assets",
    element: (
      <MainLayout>
        <Assets />
      </MainLayout>
    ),
  },
  {
    path: "/accounts",
    element: (
      <MainLayout>
        <Accounts />
      </MainLayout>
    ),
  },
  {
    path: "/broker",
    element: (
      <MainLayout>
        <Broker />
      </MainLayout>
    ),
  },
  {
    path: "/deposit",
    element: (
      <MainLayout>
        <Deposits />
      </MainLayout>
    ),
  },
  {
    path: "/transaction",
    element: (
      <MainLayout>
        <Transactions />
      </MainLayout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
