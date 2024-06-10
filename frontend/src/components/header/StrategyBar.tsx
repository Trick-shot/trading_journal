import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import apiClient from "../../services/api-client";
import { useEffect, useState } from "react";

interface Strategy {
  id: number;
  name: string;
}

const  MenuBar = () => {
  const [strategy, setStrategy] = useState<Strategy[]>([]);
  const [select, setSelected] = useState<boolean>(false);
  const [selectedStrategy, setSelectedStrategy] = useState<string>();

  useEffect(() => {
    apiClient
      .get<Strategy[]>("/strategy/")
      .then((res) => setStrategy(res.data));
  }, []);

  const handleClick = (name: string) => {
    setSelectedStrategy(name);
  };

  const handleSelect = () => {
    setSelected(true);
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={
          <Box position="relative" right="1">
            {select === true ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Box>
        }
        onClick={() => handleSelect}
        borderRadius="13px"
        pr="5"
        mr="5"
        w="140"
        h="34"
      >
        {" "}
        <Text pl="1" pr="5" position="relative" right="1">
          {selectedStrategy != null ? selectedStrategy : "Strategy"}
        </Text>
      </MenuButton>
      <MenuList>
        {strategy.map((strategy) => (
          <MenuItem
            key={strategy.id}
            onClick={() => handleClick(strategy.name)}
            overflow="hidden"
          >
            {strategy.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuBar;
