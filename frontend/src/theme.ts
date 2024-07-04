import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  styles: {
    global: {
      html: {
        height: "100%",
      },
      body: {
        height: "100%",
        bgGradient:
          "linear-gradient(-48deg, #02183C 0%, #0541A2 52%, #043380 97%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        "::-webkit-scrollbar": {
          width: "2px",
        },
        "::-webkit-scrollbar-track": {
          background: "#02183C",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#0541A2",
          borderRadius: "5px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#043380",
        },
      },
    },
  },
});

export default theme;
