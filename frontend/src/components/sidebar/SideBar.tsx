import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";

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
      <Stack>
        <Button
          leftIcon={<AiFillHome />}
          mt="97px"
          variant="ghost"
          h="46"
          w="234px"
        >
          <Text ml="31px">Dashboard</Text>
        </Button>
        <Button leftIcon={<AiFillHome />} variant="ghost">
          Backtest
        </Button>

        <Text mt="54">Trading</Text>
        <Button leftIcon={<AiFillHome />} variant="ghost">
          Trades
        </Button>
        <Button leftIcon={<AiFillHome />} variant="ghost">
          Strategy
        </Button>
        <Button leftIcon={<AiFillHome />} variant="ghost">
          Assets
        </Button>
        <Button leftIcon={<AiFillHome />} variant="ghost">
          Account
        </Button>
        <Button leftIcon={<AiFillHome />} variant="ghost">
          Broker
        </Button>

        <Text mt="54">Transactions</Text>
        <Button leftIcon={<AiFillHome />} variant="ghost">
          Deposit
        </Button>
        <Button leftIcon={<AiFillHome />} variant="ghost">
          Transaction
        </Button>
      </Stack>
    </Box>
  );
};

export default SideBar;
