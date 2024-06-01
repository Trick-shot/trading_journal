import { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Text,
  Divider,
  Heading,
} from "@chakra-ui/react";

// icons
import { AiFillHome } from "react-icons/ai";
import { FaChartSimple, FaLayerGroup } from "react-icons/fa6";
import { SiHackthebox } from "react-icons/si";
import { FaUikit } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaMoneyBills } from "react-icons/fa6";
import { GrMoney, GrTest } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";

const SideBar = () => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const storeActiveIndex = localStorage.getItem("activeButtonIndex");
    if (storeActiveIndex != null) {
      setActive(parseInt(storeActiveIndex, 10));
    } else setActive(0);
  }, []);

  const handleClick = (buttonIndex: number) => {
    setActive(buttonIndex);
    localStorage.setItem("activeButtonIndex", buttonIndex.toString());
  };

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
        mt="18px"
        position="relative"
        top="15px"
        noOfLines={1}
      >
        Trading Journal
      </Heading>
      <Divider orientation="horizontal" position="relative" top="30px" />

      <ButtonGroup
        display="flex"
        flexDirection="column"
        variant="ghost"
        size="md"
      >
        <Stack display="flex" justifyContent="space-evenly">
          <Button
            leftIcon={<AiFillHome size="16" />}
            mt="60px"
            borderRadius="17"
            iconSpacing="6"
            isActive={active === 0}
            onClick={() => handleClick(0)}
          >
            <Text fontSize="16" pr="10">
              Dashboard
            </Text>
          </Button>

          <Button
            leftIcon={<GrTest size="16" />}
            borderRadius="17"
            iconSpacing="7"
            isActive={active === 1}
            onClick={() => handleClick(1)}
          >
            <Text fontSize="16" pr="10">
              Backtest
            </Text>
          </Button>
        </Stack>

        <Stack display="flex" justifyContent="space-evenly">
          <Text mt="50px" pl="19px">
            Trading
          </Text>
          <Button
            leftIcon={<FaChartSimple size="16" />}
            borderRadius="17"
            iconSpacing="7"
            isActive={active === 2}
            onClick={() => handleClick(2)}
          >
            <Text pr="10" fontSize="16">
              Trades
            </Text>
          </Button>
          <Button
            leftIcon={<SiHackthebox size="16" />}
            borderRadius="17"
            iconSpacing="7"
            fontSize="15"
            isActive={active === 3}
            onClick={() => handleClick(3)}
          >
            <Text fontSize="16" pr="10">
              Strategy
            </Text>
          </Button>

          <Button
            leftIcon={<FaLayerGroup size="16" />}
            borderRadius="17"
            iconSpacing="7"
            fontSize="15"
            isActive={active === 4}
            onClick={() => handleClick(4)}
          >
            <Text fontSize="16" pr="10">
              Assets
            </Text>
          </Button>

          <Button
            leftIcon={<FaUikit size="16" />}
            borderRadius="17"
            iconSpacing="7"
            fontSize="15"
            isActive={active === 5}
            onClick={() => handleClick(5)}
          >
            <Text fontSize="15" pr="10">
              Account
            </Text>
          </Button>
          <Button
            leftIcon={<BsBank2 size="16" />}
            borderRadius="17"
            iconSpacing="7"
            fontSize="15"
            isActive={active === 6}
            onClick={() => handleClick(6)}
          >
            <Text pr="10" fontSize="16">
              Broker
            </Text>
          </Button>
        </Stack>

        <Stack display="flex" justifyContent="space-evenly">
          <Text mt="50" pl="19">
            Transactions
          </Text>
          <Button
            leftIcon={<FaMoneyBills size="16" />}
            borderRadius="17"
            iconSpacing="7"
            isActive={active === 7}
            onClick={() => handleClick(7)}
          >
            <Text fontSize="16" pr="10">
              Deposit
            </Text>
          </Button>
          <Button
            leftIcon={<GrMoney size="16" />}
            borderRadius="17"
            iconSpacing="5"
            fontSize="15"
            isActive={active === 8}
            onClick={() => handleClick(8)}
          >
            <Text fontSize="16" pr="10">
              Transaction
            </Text>
          </Button>
        </Stack>
      </ButtonGroup>
      <Divider orientation="horizontal" position="relative" top="100" />

      <Button
        leftIcon={<IoMdSettings />}
        position="relative"
        top="32"
        variant="ghost"
      >
        Settings
      </Button>
    </Box>
  );
};

export default SideBar;
