import { VStack, Flex, Text, Divider } from "@chakra-ui/react";
import { Logo } from "../Logo";

const TopSideItems = [
  { name: "Home", children: [] },
  { name: "Guides", children: [] },
  { name: "APIs", children: [] },
  { name: "Learn", children: [] },
  { name: "Get API Tokens", children: [] },
  { name: "Products", children: [{ name: "Onboarding" }] },
];

const BottomSideItems = [
  { name: "Info", children: [] },
  { name: "Terms", children: [] },
  { name: "Contact Us", children: [] },
  { name: "Language: English", children: [] },
];

const Sidebar = () => {
  return (
    <VStack
      alignSelf="stretch"
      left="0px"
      top="0px"
      position="sticky"
      minWidth="240px"
      minHeight="100vh"
      maxHeight="100vh"
      bg="brand.petrol"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <VStack spacing="0px" alignItems="flex-start" alignSelf="stretch">
        <Flex p="32px 12px">
          <Logo color="white" width="100px" />
        </Flex>
        <Divider h="0.5px" alignSelf="stretch" />
        <Text p="12px" alignSelf="stretch" color="white">
          Home
        </Text>
        <Divider h="0.5px" alignSelf="stretch" />
        <VStack p="12px" alignSelf="stretch" alignItems="flex-start">
          {TopSideItems.map((item) => (
            <Text alignSelf="stretch" color="white">
              {item.name}
            </Text>
          ))}
        </VStack>
      </VStack>
      <VStack p="12px" alignSelf="stretch" alignItems="flex-start">
        {BottomSideItems.map((item) => (
          <Text color="white">{item.name}</Text>
        ))}
      </VStack>
    </VStack>
  );
};

export default Sidebar;
