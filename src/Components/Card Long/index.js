import { VStack, Text, Heading } from "@chakra-ui/react";

const LongCard = ({ name, description, key }) => {
  return (
    <VStack
      p="24px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
      boxSizing="border-box"
      borderRadius="15px"
      alignSelf="stretch"
      flexGrow={1}
      margin="0px 0px"
      alignItems="flex-start"
      spacing="12px"
      maxWidth="600px"
    >
      <Heading
        alignSelf="stretch"
        fontSize="16px"
        color="brand.metal"
        fontWeight="bold"
      >
        {name}
      </Heading>
      <Text alignSelf="stretch" color="brand.metal" fontSize="14px">
        {description}
      </Text>
      <Text
        color="brand.pink.300"
        fontFamily="Hack"
        textAlign="right"
        alignSelf="stretch"
        fontSize="14px"
      >
        Start Learning &gt;
      </Text>
    </VStack>
  );
};

export default LongCard;
