import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/header/NavBar";
import SideBar from "./components/sidebar/SideBar";


function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav"
                 "main main"`,
        lg: `"aside nav" 
            "aside main"`,
      }}
      gridTemplateColumns={"290px 1fr"}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <SideBar />
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
