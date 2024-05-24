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
      <HStack justifyContent={"space-between"} p={2} paddingTop={0} >
        <Text>Dashboard</Text>
        <Stack flexDirection="row" display="flex">
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
