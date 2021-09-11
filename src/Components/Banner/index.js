import { VStack, Text, Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const rotateList = ["simple", "with SaltConnect", "fast", "effortless"];
const MotionText = motion(Text);

const Banner = () => {
  // State is the first line
  const [rotateItem, setRotateItem] = useState(rotateList[0]);

  useEffect(() => {
    const rotate = () =>
      setRotateItem(rotateList[Math.floor(Math.random() * rotateList.length)]);

    const rotateTimeout = setInterval(rotate, 10000);
    return () => {
      clearInterval(rotateTimeout);
    };
  }, []);

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
          <Text fontSize="18px" color="white">
            Here to help you make integrations{" "}
            <AnimatePresence>
              <MotionText
                as="strong"
                display="inline-block"
                fontWeight="bold"
                color="brand.petrol"
                key={rotateItem}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0, position: "absolute" }}
              >
                {rotateItem}
              </MotionText>
            </AnimatePresence>
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
