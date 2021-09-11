import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
import { Documentation } from "./Components/Documentation";
import { Home } from "./Components/Home";
// import "@fontsource/manrope";
import "./stoplight.css";
import { BrowserRouter, Route } from "react-router-dom";

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
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 900,
  },
  colors: {
    brand: {
      black: "#000",
      white: "#fff",
      gray: { salt: "#F2F2ED", stoplight: "#EBEEF4" },
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
      variants: {
        solid: {
          fontWeight: "normal",

          fontSize: "13px",
          borderRadius: "full",
          borderColor: "brand.petrol",
          bg: "brand.petrol",
          _hover: {
            bg: "brand.pink.300",
            transform: "scale(0.98)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
          },
          _active: {
            bg: "brand.pink.300",
            transform: "scale(1.02)",
          },
          _focus: {
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            bg: "brand.pink.300",
            transform: "scale(1.02)",
          },
        },
        outline: {
          fontSize: "13px",
          fontWeight: "normal",
          bg: "white",
          borderRadius: "full",
          borderColor: "brand.petrol",
          color: "brand.metal",
        },
      },
      sizes: {
        md: {
          padding: "12px 24px",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact={true} render={() => <Home />} />
        <Route path="/docs" render={() => <Documentation />} />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
