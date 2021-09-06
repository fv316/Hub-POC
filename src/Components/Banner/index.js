import { VStack, Text, HStack } from "@chakra-ui/react";

const Banner = () => {
  return (
    <VStack maxWidth="1500px" alignContent="left" width="100%">
      <VStack
        justifyContent="space-evenly"
        // position="relative"
        width="100%"
        spacing="0px"
      >
        <Text
          color="white"
          fontSize="48px"
          fontWeight="extrabold"
          alignSelf="stretch"
        >
          SaltConnect
        </Text>
        <HStack alignSelf="stretch" spacing="5px">
          <Text fontSize="20px" color="white">
            Here to help you make integrations
          </Text>
          <Text fontSize="20px" fontWeight="extrabold" color="brand.petrol">
            simple.
          </Text>
        </HStack>
        <HStack alignSelf="stretch" spacing="5px">
          <Text fontSize="20px" color="white">
            Find all the documentation that you need to
          </Text>
          <Text fontSize="20px" fontWeight="extrabold" color="brand.petrol">
            revolutionise
          </Text>
          <Text fontSize="20px" color="white">
            your business.
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Banner;
