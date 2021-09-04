import { VStack, Text, Heading } from "@chakra-ui/react";

const Card = ({ name, description, key }) => {
  return (
    <VStack
      bg="brand.petrol"
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
      color="white"
      _hover={{ bg: "white", color: "brand.petrol" }}
    >
      <Heading
        alignSelf="stretch"
        fontSize="16px"
        color="inherit"
        fontWeight="semibold"
      >
        {name}
      </Heading>
      <Text alignSelf="stretch" color="inherit" fontSize="14px">
        {description}
      </Text>
      <Text
        color="brand.pink.300"
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
