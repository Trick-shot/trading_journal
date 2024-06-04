import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import apiClient from "../../services/api-client";

interface Props {
  statusName: string;
  Icon: ReactNode;
  endPoint: string;
}

const StatusBar = ({ statusName, Icon, endPoint }: Props) => {
    const [status, setStatus] = useState();

  useEffect(() => {
    apiClient.get(endPoint).then(res) => SetStatus(res.data));
  }, []);
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
      <Stack display="flex" flexDirection="column" position="relative" pb="0">
        <Text pb="0" left="100000000" mr="6" fontSize="11" color="#78879D">
          {statusName}
        </Text>
        <Stack
          display="flex"
          flexDirection="row"
          pt="0"
          position="relative"
          bottom="2"
        >
          <Text fontSize="20">$580,00</Text>
          <Text fontSize="11" pl="1" mt="2">
            {" "}
            +15%
          </Text>
        </Stack>
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
