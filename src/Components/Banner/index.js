import { VStack, Heading, Text } from "@chakra-ui/react";

const Banner = () => {
  return (
    <VStack
      alignItems="flex-start"
      p="64px 96px"
      bg="blue.50"
      alignSelf="stretch"
    >
      <Heading color="brand.metal" size="2xl" fontWeight="extrabold">
        SaltConnect
      </Heading>
      <Text>
        Here to help you make integrations <b>simple</b>. <br /> Find all the
        documentation that you need to <b>revolutionise</b> your business.
      </Text>
    </VStack>
  );
};

export default Banner;
