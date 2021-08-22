import { HStack, Button } from "@chakra-ui/react";
import { LogoAlternative } from "../Logo";

const menuItems = [
  { name: "About", id: 0 },
  { name: "Contact", id: 1 },
];

const Footer = () => {
  return (
    <HStack p="32px" position="sticky" top={0} bg="black">
      <LogoAlternative width="150px" color="white" />
      <HStack flexGrow={1} justifyContent="flex-end" spacing="32px">
        {menuItems.map((item) => (
          <Button key={item.id} colorScheme="pink">
            {item.name}
          </Button>
        ))}
      </HStack>
    </HStack>
  );
};

export default Footer;
