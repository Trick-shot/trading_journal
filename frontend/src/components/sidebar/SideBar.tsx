import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import { FaChartSimple, FaLayerGroup, FaMoneyBills } from "react-icons/fa6";
import { SiHackthebox } from "react-icons/si";
import { FaUikit } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
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
      h="100vh"
      w="264px"
      position="fixed"
      m="14px"
      mt="7px"
      ml="13px"
      borderRadius="30px"
      display="Flex"
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Heading
        as="h2"
        size="3x1"
        mt="18px"
        position="relative"
        top="10px"
        noOfLines={1}
      >
        Trading Journal
      </Heading>
      <Divider orientation="horizontal" position="relative" top="25px" />

      <ButtonGroup display="flex" flexDirection="column" variant="ghost">
        <Stack display="flex" justifyContent="space-evenly">
          <Link to="/">
            <Button
              width="234px"
              height="46px"
              leftIcon={
                active === 0 ? (
                  <Box
                    bgColor="#0075FF"
                    width="23px"
                    height="20px"
                    borderRadius="6"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p="0"
                  >
                    <AiFillHome size="16" />
                  </Box>
                ) : (
                  <AiFillHome size="16" />
                )
              }
              mt="60px"
              borderRadius="17"
              iconSpacing="6"
              isActive={active === 0}
              onClick={() => handleClick(0)}
            >
              <Text fontSize="16" pr="10" mr="10px">
                Dashboard
              </Text>
            </Button>
          </Link>

          <Link to="/backtest">
            <Button
              width="234px"
              height="46px"
              leftIcon={
                active === 1 ? (
                  <Box
                    bgColor="#0075FF"
                    width="23px"
                    height="20px"
                    borderRadius="6"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <GrTest size="16" />
                  </Box>
                ) : (
                  <GrTest size="16" />
                )
              }
              borderRadius="17"
              iconSpacing="6"
              isActive={active === 1}
              onClick={() => handleClick(1)}
            >
              <Text fontSize="16" pr="10" mr="26px">
                Backtest
              </Text>
            </Button>
          </Link>
        </Stack>

        <Stack display="flex" justifyContent="space-evenly">
          <Text mt="25px" pl="19px">
            Trading
          </Text>
          <Link to="/trades">
            <Button
              width="234px"
              height="46px"
              leftIcon={
                active === 2 ? (
                  <Box
                    bgColor="#0075FF"
                    width="23px"
                    height="20px"
                    borderRadius="6"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FaChartSimple size="16" />
                  </Box>
                ) : (
                  <FaChartSimple size="16" />
                )
              }
              borderRadius="17"
              iconSpacing="6"
              isActive={active === 2}
              onClick={() => handleClick(2)}
            >
              <Text pr="10" fontSize="16" mr="54px">
                Trades
              </Text>
            </Button>
          </Link>
          <Link to="/strategy">
            <Button
              width="234px"
              height="46px"
              leftIcon={
                active === 3 ? (
                  <Box
                    bgColor="#0075FF"
                    width="26px"
                    height="23px"
                    borderRadius="6"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <SiHackthebox size="19" />
                  </Box>
                ) : (
                  <SiHackthebox size="19" />
                )
              }
              borderRadius="17"
              iconSpacing="6"
              fontSize="15"
              isActive={active === 3}
              onClick={() => handleClick(3)}
            >
              <Text fontSize="16" pr="10" mr="45px">
                Strategy
              </Text>
            </Button>
          </Link>
          <Link to="/assets">
            <Button
              width="234px"
              height="46px"
              leftIcon={
                active === 4 ? (
                  <Box
                    bgColor="#0075FF"
                    width="26px"
                    height="23px"
                    borderRadius="6"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FaLayerGroup size="16" />
                  </Box>
                ) : (
                  <FaLayerGroup size="16" />
                )
              }
              borderRadius="17"
              iconSpacing="7"
              fontSize="15"
              isActive={active === 4}
              onClick={() => handleClick(4)}
            >
              <Text fontSize="16" pr="10" mr="54px">
                Assets
              </Text>
            </Button>
          </Link>
          <Link to="/accounts">
            <Button
              width="234px"
              height="46px"
              leftIcon={
                active === 5 ? (
                  <Box
                    bgColor="#0075FF"
                    width="26px"
                    height="23px"
                    borderRadius="6"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FaUikit size="16" />
                  </Box>
                ) : (
                  <FaUikit size="16" />
                )
              }
              borderRadius="17"
              iconSpacing="6"
              fontSize="15"
              isActive={active === 5}
              onClick={() => handleClick(5)}
            >
              <Text fontSize="15" pr="10" mr="53px">
                Account
              </Text>
            </Button>
          </Link>
          <Link to="/broker">
            <Button
              width="234px"
              height="46px"
              leftIcon={
                active === 6 ? (
                  <Box
                    bgColor="#0075FF"
                    width="26px"
                    height="23px"
                    borderRadius="6"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <BsBank2 size="16" />
                  </Box>
                ) : (
                  <BsBank2 size="16" />
                )
              }
              borderRadius="17"
              iconSpacing="6"
              fontSize="15"
              isActive={active === 6}
              onClick={() => handleClick(6)}
            >
              <Text pr="10" fontSize="16" mr="61px">
                Broker
              </Text>
            </Button>
          </Link>
        </Stack>

        <Stack display="flex" justifyContent="space-evenly">
          <Text mt="50" pl="19">
            Transactions
          </Text>
          <Link to="/deposit">
            <Button
              width="234px"
              height="46px"
              leftIcon={
                active === 7 ? (
                  <Box
                    bgColor="#0075FF"
                    width="26px"
                    height="23px"
                    borderRadius="6"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <FaMoneyBills size="16" />
                  </Box>
                ) : (
                  <FaMoneyBills size="16" />
                )
              }
              borderRadius="17"
              iconSpacing="6"
              isActive={active === 7}
              onClick={() => handleClick(7)}
            >
              <Text fontSize="16" pr="10" mr="55px">
                Deposit
              </Text>
            </Button>
          </Link>
          <Link to="/transaction">
            <Button
              width="234px"
              height="46px"
              leftIcon={
                active === 8 ? (
                  <Box
                    bgColor="#0075FF"
                    width="26px"
                    height="23px"
                    borderRadius="6"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <GrMoney size="16" />
                  </Box>
                ) : (
                  <GrMoney size="16" />
                )
              }
              borderRadius="17"
              iconSpacing="6"
              fontSize="15"
              isActive={active === 8}
              onClick={() => handleClick(8)}
            >
              <Text fontSize="16" pr="10" mr="25px">
                Transaction
              </Text>
            </Button>
          </Link>
        </Stack>
      </ButtonGroup>
      <Divider orientation="horizontal" position="relative" top="100" />

      <Button
        leftIcon={<IoMdSettings />}
        position="relative"
        top="120px"
        left="-11px"
        variant="ghost"
      >
        Settings
      </Button>
    </Box>
  );
};

export default SideBar;
