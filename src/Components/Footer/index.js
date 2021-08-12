import { Button, HStack, Text } from "@chakra-ui/react";
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
          <Button
            key={item.id}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            padding="15px 30px"
            colorScheme="pink"
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

export default Footer;
