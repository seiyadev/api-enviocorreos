import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Textarea,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Icon,
  Input,
  useToast,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import axios from "axios";

const SMS = () => {
  const router = useRouter();
  const toast = useToast();
  const [submitedForm, setSubmitedForm] = useState(false);
  const [submitChange, setSubmitChange] = useState("Iniciar sesión");

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          body_msg: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.email) {
            errores.email = "Por favor ingresa un correo electronico";
          } else if (
            !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
              valores.email
            )
          ) {
            errores.email = "Ingresa un correo válido";
          }

          if (!valores.body_msg) {
            errores.body_msg = "Por favor ingresa un mensaje";
          }

          return errores;
        }}
        onSubmit={async (valores, { resetForm }) => {
          const result = await axios.post("/api/mailer", valores);
          if (result.data.message) {
            toast({
              title: "Mensaje enviado.",
              description: "Te hemos enviado un correo electrónico.",
              status: "success",
              duration: 6000,
              isClosable: true,
            });
          }
          if (result.data.error.status === 400) {
            toast({
              title: "Mensaje no enviado.",
              description: "Error al enviar mensaje.",
              status: "error",
              duration: 6000,
              isClosable: true,
            });
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form>
            <Flex
              justifyContent="center"
              flexDirection={"column"}
              w="25%"
              margin={"60px auto"}
            >
              <Flex justifyContent={"center"} fontSize="xl" fontWeight={"bold"}>
                Envío de mensajes
              </Flex>
              <Stack px={4} py={5} p={[null, 6]} spacing={6}>
                <Flex justifyContent={"center"} flexDirection="column">
                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Correo electrónico"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <p className="text-xs text-red-600">{errors.email}</p>
                      )}
                    />
                  </FormControl>
                  <FormControl mt="3">
                    <Textarea
                      placeholder="Escribe un mensaje"
                      name="body_msg"
                      value={values.body_msg}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="body_msg"
                      component={() => (
                        <p className="text-xs text-red-600">{errors.body_msg}</p>
                      )}
                    />
                  </FormControl>
                </Flex>
              </Stack>
              <Box px={{ base: 4, sm: 6 }} py={3} textAlign="right">
                <Button
                  colorScheme="linkedin"
                  _focus={{ shadow: "" }}
                  fontWeight="md"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Enviar
                </Button>
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SMS;
