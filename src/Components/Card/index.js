import { VStack, Text, HStack } from "@chakra-ui/react";
import { Book } from "../Book";

const Card = ({ name, description, svg, key }) => {
  return (
    <VStack
      bg="brand.gray.stoplight"
      p={{ base: "12px", md: "24px" }}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="15px"
      alignSelf="stretch"
      flexGrow={1}
      alignItems="flex-start"
      spacing="12px"
      justifyContent="space-between"
      minHeight="210px"
      maxWidth="360px"
      color="rgba(0, 0, 0, 0.9)"
      text
      _hover={{ bg: "white", color: "brand.petrol" }}
    >
      <HStack
        justifyContent="space-between"
        alignItems="flex-end"
        alignSelf="stretch"
      >
        <Text fontSize="16px" color="inherit" fontWeight="semibold">
          {name}
        </Text>
        <Book></Book>
      </HStack>

      <Text alignSelf="stretch" color="inherit" fontSize="14px">
        {description}
      </Text>
      <Text
        color="brand.petrol"
        fontFamily="Hack"
        textAlign="right"
        alignSelf="stretch"
        fontSize="14px"
      >
        Get Started &gt;
      </Text>
    </VStack>
  );
};

export default Card;
