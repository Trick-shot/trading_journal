import { HStack, Text } from "@chakra-ui/react";
import MenuBar from "./MenuBar";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Text>Dashboard</Text>
      <MenuBar />
    </HStack>
  );
};

export default NavBar;
