import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  statusName: string;
  Icon: ReactNode;
  Status: string;
  statusData: number;
}

const StatusBar = ({ statusName, Icon, Status, statusData }: Props) => {
  const StatusContent = (Status: string, statusData: number) => {
    if (Status === "account_balance") {
      return (
        <Stack
          display="flex"
          flexDirection="row"
          pt="0"
          position="relative"
          bottom="2"
        >
          <Text fontSize="20">${statusData}</Text>
          <Text fontSize="11" pl="1" mt="2">
            {" "}
            +15%
          </Text>
        </Stack>
      );
    } else if (Status === "amount_trade_taken") {
      return (
        <Text pt="0" position="relative" bottom="2" fontSize="20">
          {statusData}
        </Text>
      );
    } else if (Status === "trade_won") {
      return (
        <Text pt="0" position="relative" bottom="2" fontSize="20">
          {statusData}
        </Text>
      );
    } else if (Status === "trade_lost") {
      return (
        <Text pt="0" position="relative" bottom="2" fontSize="20">
          {statusData}
        </Text>
      );
    } else {
      return (
        <Stack
          display="flex"
          flexDirection="row"
          pt="0"
          position="relative"
          bottom="2"
        >
          <Text fontSize="20">no Data</Text>
          <Text fontSize="11" pl="1" mt="2"></Text>
        </Stack>
      );
    }
  };

  return (
    <Box
      w="370px"
      h="51px"
      p="1"
      borderRadius="10"
      bgColor="rgba(6, 12 ,33, 0.35)"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      pl="3"
      mr="7"
    >
      <Stack display="flex" flexDirection="column" position="relative">
        <Text pb="0" left="100000000" mr="6" fontSize="11" color="#78879D">
          {statusName}
        </Text>
        {StatusContent(Status, statusData)}
      </Stack>
      <Box
        bgColor="#0075FF"
        w="42px"
        h="38px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRadius="10px"
        mt="1"
        mr="0.1"
      >
        {Icon}
      </Box>
    </Box>
  );
};

export default StatusBar;
