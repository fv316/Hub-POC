import { VStack, Text, Heading, HStack, Image } from "@chakra-ui/react";

const LongCard = ({ name, description, svg, key }) => {
  return (
    <VStack
      p="24px"
      boxShadow="md"
      boxSizing="border-box"
      borderRadius="15px"
      alignSelf="stretch"
      flexGrow={1}
      margin="0px 0px"
      alignItems="flex-start"
      justifyContent="space-between"
      spacing="12px"
      maxWidth="600px"
      bg="rgba(0, 0, 0, 0.01)"
      _hover={{ bg: "brand.gray.stoplight", color: "brand.petrol" }}
    >
      <HStack alignItems="flex-start" alignSelf="stretch" spacing="24px">
        <Image width="50px" flexShrink={0} src={svg}></Image>
        <VStack alignSelf="stretch">
          <Heading
            alignSelf="stretch"
            fontSize="16px"
            color="inherit"
            fontWeight="semibold"
          >
            {name}
          </Heading>
          <Text color="inherit" fontSize="14px">
            {description}
          </Text>
        </VStack>
      </HStack>
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
