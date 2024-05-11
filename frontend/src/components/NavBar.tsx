import { HStack, Text } from "@chakra-ui/react";
import MenuBar from "./MenuBar";

const NavBar = () => {
  return (
    <HStack>
      <Text>Dashboard</Text>
      <MenuBar />
    </HStack>
  );
};

export default NavBar;
