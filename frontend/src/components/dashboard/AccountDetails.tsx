import { Box, Stack, Text } from "@chakra-ui/react";
import jellyfish from "../../assets/jellyfish/pexels-vovaflame-2698871.jpg";
import CurrentAccountDate from "./CurrentAccountDate";

export interface Props {
  accountId: number;
  accountName: string;
  serverName: string;
  typeOption: string;
  platform: string;
  leverage: string;
  broker: string;
}

const AccountDetails = ({
  accountId,
  accountName,
  serverName,
  typeOption,
  platform,
  leverage,
  broker,
}: Props) => {
  console.log(accountId);
  return (
    <Box
      width="492px"
      height="302px"
      border="1"
      borderRadius="20px"
      //   bgColor="#061233"
      bgImage={jellyfish}
      bgSize="cover"
      bgColor="rgba(6, 12 ,33, 0.35)"
      bgPosition="right"
      bgRepeat="no-repeat"
      pl="22px"
    >
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        pt="18px"
        pr="10px"
        pb="5px"
      >
        <Text fontSize="14px" color="#78879D">
          Account details
        </Text>
        <CurrentAccountDate />
      </Stack>
      <Text fontSize="23px" pt="0px" p="0">
        #{accountId}/ clothing
      </Text>
      <Stack pt="10px">
        <Text p="0" fontSize="13px">
          name: {""}
          {accountName}
        </Text>
        <Text fontSize="12px">Server_name: {serverName}</Text>
        <Text p="0" fontSize="13px">
          Type_Option:{typeOption}
        </Text>
        <Text p="0" fontSize="13px">
          Platform: {platform}
        </Text>
        <Text p="0" fontSize="13px">
          Leverage:{leverage}
        </Text>
        <Text p="0" fontSize="13px">
          Broker:{broker}
        </Text>
      </Stack>
    </Box>
  );
};

export default AccountDetails;
