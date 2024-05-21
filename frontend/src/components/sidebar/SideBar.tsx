import { Box, Button, Stack, Text, Divider, Heading } from "@chakra-ui/react";

// icons
import { AiFillHome } from "react-icons/ai";
import { FaChartSimple } from "react-icons/fa6";
import { SiHackthebox } from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa6";
import { FaUikit } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaMoneyBills } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { GrTest } from "react-icons/gr";

const SideBar = () => {
  return (
    <Box
      bg={"rgba(5, 12, 39, 0.42)"}
      h={"913px"}
      w={"264px"}
      position={"fixed"}
      m={"14px"}
      mt="9px"
      borderRadius={"30px"}
      display={"Flex"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Heading
        as="h2"
        size="3x1"
        mt="20px"
        position="relative"
        top="15px"
        noOfLines={1}
      >
        Trading Journal
      </Heading>
      <Divider orientation="horizontal" position="relative" top="40px" />
      <Stack >
        <Button mt="70px" variant="ghost" h="46px" w="234px">
          <AiFillHome />
          <Text>Dashboard</Text>
        </Button>
        <Button variant="ghost">
          <GrTest />
          Backtest
        </Button>
        <Text mt="50px" pl="19px">
          Trading
        </Text>
        <Button variant="ghost">
          <FaChartSimple />
          Trades
        </Button>
        <Button variant="ghost">
          <SiHackthebox />
          Strategy
        </Button>
        <Button variant="ghost">
          <FaLayerGroup />
          Assets
        </Button>
        <Button variant="ghost">
          <FaUikit />
          Account
        </Button>
        <Button variant="ghost">
          <BsBank2 />
          Broker
        </Button>

        <Text mt="50" pl="19">
          Transactions
        </Text>

        <Button variant="ghost">
          <FaMoneyBills />
          Deposit
        </Button>
        <Button variant="ghost">
          <GrMoney />
          Transaction
        </Button>
      </Stack>
    </Box>
  );
};

export default SideBar;
