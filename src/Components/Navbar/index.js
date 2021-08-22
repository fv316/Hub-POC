import { HStack, Text, Button } from "@chakra-ui/react";
import { LogoAlternative } from "../Logo";

const menuItems = [
  { name: "Guides", id: 0 },
  { name: "APIs", id: 1 },
  { name: "Learn", id: 2 },
  { name: "Login", id: 3 },
];

const Navbar = () => {
  return (
    <HStack p="32px" position="sticky" bg="blue.50" top={0} alignSelf="stretch">
      <LogoAlternative width="150px" />
      <HStack flexGrow={1} justifyContent="flex-end" spacing="32px">
        {menuItems.map((item) => (
          <Button key={item.id} colorScheme="purple">
            <Text color="white" font-weight={600}>
              {item.name}
            </Text>
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};

export default Navbar;
