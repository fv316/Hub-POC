import { VStack, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <VStack maxWidth="1400px" alignContent="left" width="100%">
      <Box width="100%">
        <Text
          color="white"
          fontSize="48px"
          fontWeight="extrabold"
          alignSelf="stretch"
        >
          SaltConnect
        </Text>
        <Box>
          <motion.div></motion.div>
          <Text fontSize="18px" color="white">
            Here to help you make integrations{" "}
            <Text as="strong" fontWeight="bold" color="brand.petrol">
              simple
            </Text>
            .
          </Text>
        </Box>
        <Box>
          <Text fontSize="18px" color="white">
            Find all the documentation that you need to{" "}
            <Text as="strong" fontWeight="bold" color="brand.petrol">
              revolutionise{" "}
            </Text>
            your business.
          </Text>
        </Box>
      </Box>
    </VStack>
  );
};

export default Banner;
