import { Box, Divider, Stack, Text } from "@chakra-ui/react";

const TradesList = () => {
  return (
    <Box
      w="847px"
      h="451px"
      borderRadius="20px"
      bgColor="rgba(6, 12 ,33, 0.35)"
      mt="12px"
      p="12px"
      pl="20px"
      pr="20px"
      overflow="hidden"
    >
      <Stack flexDir="column">
        <Text fontSize="24px" pb="5px">
          Trades
        </Text>
        <Stack flexDirection="row">
          <Box
            bgColor="#00AC11"
            width="16px"
            height="16px"
            position="relative"
            bottom="5px"
            borderRadius="8px"
          ></Box>
          <Text
            position="relative"
            bottom="6px"
            fontSize="14px"
            color="#78879D"
          >
            Account/Strategy
          </Text>
        </Stack>
        <Stack mt="15px" position="relative" right="4px">
          <Stack justifyContent="space-evenly" flexDirection="row">
            <Text color="#78879D" fontSize="14px">
              ASSETS
            </Text>
            <Text color="#78879D" fontSize="14px">
              TYPE OF TRADE
            </Text>
            <Text color="#78879D" fontSize="14px">
              LOT
            </Text>
            <Text color="#78879D" fontSize="14px">
              TARGETED_PROFIT
            </Text>
            <Text color="#78879D" fontSize="14px">
              TARGETED_LOSS
            </Text>
            <Text color="#78879D" fontSize="14px">
              STATUS
            </Text>
            <Text color="#78879D" fontSize="14px">
              RESULT
            </Text>
          </Stack>
        </Stack>
        <Divider
          orientation="horizontal"
          position="relative"
          borderColor="#ffffff"
          top="4px"
        />

        {/* Assets */}
        <Stack flexDirection="row" mt="12px">
          <Stack flexDirection="row" position="relative" right="7px">
            <Stack flexDir="row" position="relative" right="6px">
              <Box
                bgColor="red"
                width="18px"
                height="18px"
                position="relative"
                borderRadius="8px"
                left="15px"
                bottom="4px"
              ></Box>
              <Box
                bgColor="#00AC11"
                width="18px"
                height="18px"
                position="relative"
                borderRadius="8px"
                right="2px"
                top="3px"
              ></Box>
            </Stack>
            <Text fontSize="15px" position="relative" right="5px">
              GBP/USD
            </Text>
          </Stack>
          {/* Assets */}

          {/* Type of Trade */}
          <Box w="55px" h="19px" bgColor="#00AC11" borderRadius="6px" ml="20px">
            <Text position="relative" left="8px" bottom="1px" fontSize="14px">
              LONG
            </Text>
          </Box>
          {/* Type of Trade */}

          {/* LOT */}
          <Text position="relative" left="61px" fontSize="15px">
            10
          </Text>
          {/* LOT */}

          {/* Target_profit */}
          <Text ml="150px" fontSize="15px">
            3000
          </Text>
          {/* Targeted_profit */}

          {/* Target_loss */}
          <Text ml="130px" fontSize="15px">
            200
          </Text>
          {/* Targeted_loss */}

          {/* Status */}
          <Box w="73px" h="21px" bgColor="blue" borderRadius="6px" ml="57px">
            <Text
              position="relative"
              left="6px"
              bottom="4px"
              p="0"
              top="1px"
              fontSize="13px"
            >
              PENDING
            </Text>
          </Box>
          {/* Status */}

          {/* Result */}
          <Text fontSize="15px" ml="26px">
            100
          </Text>
          {/* Result */}
        </Stack>
        <Divider
          orientation="horizontal"
          position="relative"
          borderColor="#78879D"
          top="5px"
        />
        

      </Stack>
    </Box>
  );
};

export default TradesList;
