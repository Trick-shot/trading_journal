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

  useEffect(() => {
    apiClient.get<Strategy[]>("/strategy/").then((res) => setStrategy(res.data));
  }, []);

  return (
    <Menu>
      <MenuButton
        as={Button}
        leftIcon={<ChevronDownIcon />}
        borderRadius="13px"
      >
        Strategy
      </MenuButton>
      <MenuList>
      {strategy.map((strategy) => (<MenuItem key={strategy.id} >{strategy.name}</MenuItem >))}
      </MenuList>
    </Menu>
  );
};

export default MenuBar;
