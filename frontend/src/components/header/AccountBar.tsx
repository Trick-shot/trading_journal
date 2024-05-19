import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import apiClient from "../../services/api-client";
import { useEffect, useState } from "react";

interface Account {
  id: number,
  name: string;
}

const AccountBar = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    apiClient.get<Account[]>("/accounts/").then((res) => setAccounts(res.data));
  });

  return (
    <Menu>
      <MenuButton
        as={Button}
        mr="52px"
        borderRadius="13px"
        leftIcon={<ChevronDownIcon />}
      >
        Accounts
      </MenuButton>
      <MenuList>
        {accounts.map((account) => (<MenuItem key={account.id}>{account.name}</MenuItem>))}
      </MenuList>
    </Menu>
  );
};

export default AccountBar;
