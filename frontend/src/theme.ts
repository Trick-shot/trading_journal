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
      },
    },
  },
});

export default theme;
