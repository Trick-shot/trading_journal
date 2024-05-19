import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import apiClient from "../../services/api-client";

interface Assets {
  id: number;
  symbol: string;
}

const AccountBar = () => {
  const [assets, setAssets] = useState<Assets[]>([]);

  useEffect(() => {
    apiClient.get<Assets[]>("/assets/").then((res) => setAssets(res.data));
  }, []);
  return (
    <Menu>
      <MenuButton
        as={Button}
        borderRadius="13px"
        leftIcon={<ChevronDownIcon />}
        w="123px"
        h="34px"
      >
        Assets
      </MenuButton>
      <MenuList>
        {assets.map((asset) => (
          <MenuItem key={asset.id}>{asset.symbol}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AccountBar;
