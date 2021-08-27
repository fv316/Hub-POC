import { ChakraProvider, HStack, VStack } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Body from "./Components/Body";
import Sidebar from "./Components/Sidebar";
import { extendTheme } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import "@fontsource/manrope";
import { API } from "@stoplight/elements";
import "@stoplight/elements/styles.min.css";

// if this gets long export this to another folder with subfiles
const theme = extendTheme({
  styles: {
    global: {
      ".js-focus-visible :focus:not([data-focus-visible-added])": {
        outline: "none",
        boxShadow: "none",
      },
    },
  },
  colors: {
    brand: {
      black: "#000",
      white: "#fff",
      gray: "#F2F2ED",
      purple: {
        50: "#EDE8FB",
        400: "#7560E2",
      },
      metal: "#191E2B",
      blue: {
        50: "#E4F6FB",
        500: "#6BB7CE",
      },
      petrol: "#114959",
      pink: {
        50: "#FFE7EF",
        300: "#FC8799",
      },
    },
  },
  fonts: {
    body: "Manrope, sans-serif",
    heading: "Manrope, sans-serif",
    mono: "Manrope, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
        borderRadius: "full",
        color: "white",
      },
      sizes: {
        md: {
          padding: "15px 30px",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <HStack
        alignItems="flex-start"
        padding="0px"
        spacing="0px"
        alignSelf="stretch"
        w="full"
        h="full"
      >
        <Sidebar></Sidebar>
        <VStack
          alignSelf="stretch"
          flexGrow={1}
          margin="0px 0px"
          padding="0px"
          display="flex"
          flexDir="column"
          alignItems="flex-start"
          spacing="0px"
        >
          <Navbar></Navbar>
          <Banner></Banner>
          <Body></Body>
          <Footer></Footer>
          <API apiDescriptionUrl="https://stoplight.io/api/v1/projects/salt/global-data/nodes/docs/openapi.company-management.json?branch=master" />{" "}
        </VStack>
      </HStack>
    </ChakraProvider>
  );
};

export default App;
