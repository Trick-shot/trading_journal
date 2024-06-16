import { Box, Text } from "@chakra-ui/react";

const CurrentAccountDate = () => {
  return (
    <Box
      width="97px"
      height="23px"
      borderRadius="10px"
      bgColor="#496392"
      display="flex"
      flexDir="row"
      justifyContent="center"
      alignItems="center"
      mr="7px"
    >
      <Text alignContent="center" fontSize="14px" fontStyle="italic">
        20 /11 /2004
      </Text>
    </Box>
  );
};

export default CurrentAccountDate;
