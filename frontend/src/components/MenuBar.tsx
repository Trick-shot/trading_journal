import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
} from "@chakra-ui/react";

const MenuBar = () => {
  return (
    <HStack >
      <Menu>
        <MenuButton as={Button}>Actions</MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default MenuBar;

// rightIcon={<ChevronDownIcon />}
