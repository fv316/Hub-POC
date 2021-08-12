import { Button, HStack, Text } from "@chakra-ui/react";
import { LogoAlternative } from "../Logo";

const menuItems = [
  { name: "Guides", id: 0 },
  { name: "APIs", id: 1 },
  { name: "Learn", id: 2 },
  { name: "Login", id: 3 },
];

const Navbar = () => {
  return (
    <HStack p="32px" position="sticky" bg="blue.50" top={0}>
      <LogoAlternative width="150px" />
      <HStack flexGrow={1} justifyContent="flex-end" spacing="32px">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            padding="15px 30px"
            colorScheme="purple"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.05)"
            borderRadius="16px"
          >
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
