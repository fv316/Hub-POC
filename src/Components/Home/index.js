import { VStack } from "@chakra-ui/react";

import Navbar from "../Navbar";
import Banner from "../Banner";
import Body from "../Body";

const Home = () => (
  <VStack
    alignItems="center"
    flexGrow={1}
    display="flex"
    height="100%"
    width="100%"
    spacing="0px"
  >
    <Navbar></Navbar>
    <VStack
      padding="64px 96px"
      width="100%"
      overflowX="hidden"
      overflowY="auto"
      bg="brand.blue.500"
    >
      <Banner></Banner>
    </VStack>
    <VStack
      width="100%"
      overflowX="hidden"
      overflowY="auto"
      p="24px 24px"
      maxWidth="1500px"
    >
      <Body></Body>
    </VStack>
  </VStack>
);

export { Home };
