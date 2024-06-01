import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import apiClient from "../../services/api-client";
import { useEffect, useState } from "react";

interface Account {
  id: number;
  name: string;
}

const AccountBar = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<string>();

  useEffect(() => {
    apiClient.get<Account[]>("/accounts/").then((res) => setAccounts(res.data));
  }, []);

  const handleSelect = (name: string) => {
    setSelectedAccount(name);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        mr="59px"
        borderRadius="13px"
        leftIcon={<ChevronDownIcon />}
      >
        {selectedAccount != null ? selectedAccount : "Account"}
      </MenuButton>
      <MenuList>
        {accounts.map((account) => (
          <MenuItem key={account.id} onClick={() => handleSelect(account.name)}>
            {account.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AccountBar;
