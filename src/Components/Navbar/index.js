import { HStack, Button } from "@chakra-ui/react";

const menuItems = [
  { name: "Guides", id: 0, variant: "solid" },
  { name: "APIs", id: 1, variant: "solid" },
  { name: "Learn", id: 2, variant: "solid" },
  { name: "Get API Tokens", id: 3, variant: "outline" },
];

const Navbar = () => {
  return (
    <HStack p="32px" position="sticky" bg="blue.50" top={0} alignSelf="stretch">
      <HStack flexGrow={1} justifyContent="flex-end" spacing="32px">
        {menuItems.map((item) => (
          <Button key={item.id} variant={item.variant} fontWeight="normal">
            {item.name}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};

export default Navbar;
