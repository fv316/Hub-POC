import { VStack, Text, Heading } from "@chakra-ui/react";

const Card = ({ name, description, key }) => {
  return (
    <VStack
      bg="brand.petrol"
      p="24px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="15px"
      alignSelf="stretch"
      flexGrow={1}
      alignItems="flex-start"
      spacing="12px"
      justifyContent="space-between"
      minHeight="210px"
      maxWidth="360px"
    >
      <Heading
        alignSelf="stretch"
        fontSize="18px"
        color="white"
        fontWeight="bold"
      >
        {name}
      </Heading>
      <Text alignSelf="stretch" color="white" fontSize="14px">
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
