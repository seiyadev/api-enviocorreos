import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Envío de mensajes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icon.svg" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
