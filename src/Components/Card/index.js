import { VStack, Text, HStack, Image } from "@chakra-ui/react";

const Card = ({ name, description, svg, key }) => {
  return (
    <VStack
      bg="brand.gray.stoplight"
      p={{ base: "12px", md: "24px" }}
      boxShadow="md"
      borderRadius="15px"
      alignSelf="stretch"
      flexGrow={1}
      alignItems="flex-start"
      spacing="12px"
      justifyContent="space-between"
      minHeight="210px"
      maxWidth="360px"
      color="rgba(0, 0, 0, 0.9)"
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
        <Image width="40px" src={svg}></Image>
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
