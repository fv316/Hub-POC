import { HStack, Button, Text } from "@chakra-ui/react";
import { Logo } from "../Logo";

const menuItems = [
  { name: "Home", id: 4, variant: "solid" },
  { name: "Guides", id: 0, variant: "solid" },
  { name: "APIs", id: 1, variant: "solid" },
  { name: "Learn", id: 2, variant: "solid" },
  { name: "Get API Tokens", id: 3, variant: "outline" },
];

const Navbar = () => {
  return (
    <HStack
      p="32px"
      position="sticky"
      bg="brand.blue.500"
      top={0}
      alignSelf="stretch"
    >
      <Logo height="30px" color="white"></Logo>
      <HStack flexGrow={1} justifyContent="flex-end" spacing="32px">
        {menuItems.map((item) => (
          <Button key={item.id} variant={item.variant}>
            {item.name}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};

export default Navbar;
