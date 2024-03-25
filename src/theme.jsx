import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
      global: {
        body: {
          fontFamily: '"Roboto", sans-serif',
          fontWeight: '100', // Ensuring thin weight is applied
        },
      },
    },
    fonts: {
      body: '"Roboto", sans-serif',
      heading: '"Roboto", sans-serif',
    },
  });

export default theme;