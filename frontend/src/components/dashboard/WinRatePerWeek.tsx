import { Box, Stack, Text } from "@chakra-ui/react";

const WinRatePerWeek = () => {
  return (
    <Box
      width="551px"
      h="302px"
      bgColor="rgba(6, 12 ,33, 0.35)"
      borderRadius="20px"
      ml="40px"
      p="40px"
      pt="0"
    >
      <Stack flexDir="row" position="relative" mt="20px">
        <Text fontSize="25px">Win Rate/</Text>
        <Text color="" mt="9px">
          week
        </Text>
      </Stack>
      <Stack flexDir="column" mt="30px">
        <Box
          w="134px"
          h="55px"
          bgColor="rgba(6, 12 ,33, 0.35)"
          borderRadius="8px"
          display="flex"
          flexDir="column"
          p="7px"
        >
          <Text fontSize="11px" color="#78879D">
            Trade Taken
          </Text>
          <Text mt="1">100</Text>
        </Box>
        <Box
          w="134px"
          h="55px"
          bgColor="rgba(6, 12 ,33, 0.35)"
          borderRadius="8px"
          flexDir="column"
          p="7px"
        >
          <Text fontSize="11px" color="#78879D">
            Win Trades
          </Text>
          <Text mt="1">100</Text>
        </Box>
        <Box
          w="134px"
          h="55px"
          bgColor="rgba(6, 12 ,33, 0.35)"
          borderRadius="8px"
          flexDir="column"
          p="7px"
        >
          <Text fontSize="11px" color="#78879D">
            Loss Trades
          </Text>
          <Text mt="1">100</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default WinRatePerWeek;
