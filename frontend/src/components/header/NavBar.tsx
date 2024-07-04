import { HStack, Stack } from "@chakra-ui/react";
import AssetBar from "./AssetBar";
import AccountBar from "./AccountBar";
import StrategyBar from "./StrategyBar";
import BreadCrumb from "./BreadCrumb";
import User from "./User";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} display="flex">
      <BreadCrumb />
      <Stack flexDirection="row" display="flex" position="relative" top="3">
        <AssetBar />
        <StrategyBar />
        <AccountBar />
        <User />
      </Stack>
    </HStack>
  );
};

export default NavBar;
