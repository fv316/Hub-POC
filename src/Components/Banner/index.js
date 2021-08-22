import { VStack, Heading, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <VStack alignItems="flex-start" p="96px" bg="blue.50" alignSelf="stretch">
      <Heading color="petrol">SaltConnect</Heading>
      <Text maxWidth="600px">
        Here to help you make integrations simple. Find all the documentation
        that you need to revoltionize your business
      </Text>
    </VStack>
  );
};

export default Banner;
