import { VStack, Text, Heading, Flex } from "@chakra-ui/react";

const Card = ({ name, description, key }) => {
  return (
    <VStack alignItems="flex-start" p="0px" maxWidth="300px">
      <Flex
        bg="brand.blue.500"
        border="1px solid"
        boxSizing="border-box"
        borderRadius="10px 10px 0px 0px"
        height="12px"
        alignSelf="stretch"
      ></Flex>
      <VStack
        bg="brand.gray"
        alignItems="flex-start"
        p="16px"
        border="1px solid"
        boxSizing="border-box"
        borderRadius="0px 0px 10px 10px"
        alignSelf="stretch"
        flexGrow={1}
        margin="32px"
        order={1}
      >
        <Heading size="24px" color="petrol" font-weight={600}>
          {name}
        </Heading>
        <Text color="petrol" font-weight={600}>
          {description}
        </Text>
      </VStack>
    </VStack>
  );
};

export default Card;
