import * as React from "react";
import SMS from "../components/FormSMS";
import { ChakraProvider, Button } from "@chakra-ui/react";


export default function App() {
  return (
    <ChakraProvider>
      <SMS />
    </ChakraProvider>
  );
}
