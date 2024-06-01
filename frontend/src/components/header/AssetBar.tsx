import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import apiClient from "../../services/api-client";

interface Assets {
  id: number;
  symbol: string;
}

const AccountBar = () => {
  const [assets, setAssets] = useState<Assets[]>([]);
  const [selectedAsset, setSelectedAsset] = useState<string>();

  useEffect(() => {
    //   const storeSelectIndex = localStorage.getItem("SelectAsset");
    //   if (storeSelectIndex != null) {
    //     setSelectedAsset(storeSelectIndex);
    //   } else setSelectedAsset();
    // }, []);

    apiClient.get<Assets[]>("/assets/").then((res) => setAssets(res.data));
  }, []);

  const handleSelect = (symbol: string) => {
    setSelectedAsset(symbol);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        borderRadius="13px"
        leftIcon={<ChevronDownIcon />}
        w="123px"
        h="34px"
        p="5"
      >
        <Text pr="2" position='relative' right="1">{selectedAsset != null ? selectedAsset : "Assets"}</Text>
      </MenuButton>
      <MenuList>
        {assets.map((asset) => (
          <MenuItem key={asset.id} onClick={() => handleSelect(asset.symbol)}>
            {asset.symbol}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AccountBar;
