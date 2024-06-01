import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import apiClient from "../../services/api-client";
import { useEffect, useState } from "react";

interface Strategy {
  id: number;
  name: string;
}

const MenuBar = () => {
  const [strategy, setStrategy] = useState<Strategy[]>([]);
  const [selectedStrategy, setSelectedStrategy] = useState<string>();

  useEffect(() => {
    apiClient
      .get<Strategy[]>("/strategy/")
      .then((res) => setStrategy(res.data));
  }, []);

  const handleSelect = (name: string) => {
    setSelectedStrategy(name);
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<ChevronDownIcon />}
        borderRadius="13px"
        size="mdx"
      >
        {selectedStrategy != null ? selectedStrategy : "Strategy"}
      </MenuButton>
      <MenuList>
        {strategy.map((strategy) => (
          <MenuItem
            key={strategy.id}
            onClick={() => handleSelect(strategy.name)}
          >
            {strategy.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuBar;
