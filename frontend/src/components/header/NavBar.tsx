import { HStack, Text, Stack } from "@chakra-ui/react";
import AssetBar from "./AssetBar";
import AccountBar from "./AccountBar";
import StrategyBar from "./StrategyBar";
import BreadCrumb from "./BreadCrumb";
import User from "./User";

const NavBar = () => {
  return (
    <>
      <BreadCrumb />
      <HStack justifyContent={"space-between"}>
        <Text position="relative" bottom="2">
          Dashboard
        </Text>
        <Stack
          flexDirection="row"
          display="flex"
          position="relative"
          bottom="4"
          justifyContent="space-evenly"
        >
          <AssetBar />
          <StrategyBar />
          <AccountBar />
          <User />
        </Stack>
      </HStack>
    </>
  );
};

export default NavBar;
