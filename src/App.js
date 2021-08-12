import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/index";
import Footer from "./Components/Footer/index";
import Banner from "./Components/Banner/index";
import Body from "./Components/Body/index";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/manrope";

const theme = extendTheme({
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
    fonts: {
      body: "Manrope, sans-serif",
      heading: "Manrope, sans-serif",
      mono: "Manrope, sans-serif",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <Banner></Banner>
      <Body></Body>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
