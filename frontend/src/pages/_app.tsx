import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

const LearnzyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default LearnzyApp;
