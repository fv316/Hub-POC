import { VStack, Text, Heading } from "@chakra-ui/react";

const Card = ({ name, description, key }) => {
  return (
    <VStack
      bg="brand.petrol"
      p="24px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      border="1px solid"
      boxSizing="border-box"
      borderRadius="15px"
      alignSelf="stretch"
      flexGrow={1}
      margin="0px 0px"
      alignItems="flex-start"
      spacing="12px"
      justifyContent="space-between"
      h="210px"
      w="280px"
    >
      <Heading
        alignSelf="stretch"
        fontSize="18px"
        color="white"
        fontWeight="bold"
      >
        {name}
      </Heading>
      <Text
        alignSelf="stretch"
        color="white"
        fontWeight="normal"
        fontSize="14px"
      >
        {description}
      </Text>
      <Text
        fontWeight="normal"
        color="brand.pink.300"
        fontFamily="Hack"
        textAlign="right"
        alignSelf="stretch"
      >
        Get Started &gt;
      </Text>
    </VStack>
  );
};

export default Card;
