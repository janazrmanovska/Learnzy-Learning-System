import { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Text,
  Input,
  Stack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { VscArrowRight } from "react-icons/vsc";
import { useRouter } from "next/router";

type FormEvent = React.FormEvent<HTMLFormElement>;

const Register: NextPage = () => {
  const router = useRouter();
  const [username] = useState("");
  const [email] = useState("");
  const [password] = useState("");
  const [confirmPassword] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <Box maxW="100%" mx="auto" backgroundColor="#FFCDB8">
      <Center h="100vh">
        <Box w="md">
          <Text
            fontSize="6xl"
            fontWeight={700}
            color="#441907"
            textAlign="center"
          >
            Register
          </Text>
          <form onSubmit={handleSubmit}>
            <Stack spacing="6">
              <FormControl>
                <FormLabel color="#441907" htmlFor="username">
                  Username
                </FormLabel>
                <Input
                  type="username"
                  variant="flushed"
                  color="black"
                  placeholder="username"
                  focusBorderColor="orange.700"
                />
              </FormControl>
              <FormControl>
                <FormLabel color="#441907" htmlFor="email">
                  Email
                </FormLabel>
                <Input
                  type="email"
                  variant="flushed"
                  color="black"
                  placeholder="example@example.com"
                  focusBorderColor="orange.700"
                />
              </FormControl>
              <FormControl>
                <FormLabel color="#441907" htmlFor="password">
                  Password
                </FormLabel>
                <Input
                  type="password"
                  variant="flushed"
                  color="black"
                  focusBorderColor="orange.700"
                />
              </FormControl>
              <FormControl>
                <FormLabel color="#441907" htmlFor="confirm-password">
                  Confirm Password
                </FormLabel>
                <Input
                  type="password"
                  variant="flushed"
                  color="black"
                  focusBorderColor="orange.700"
                />
              </FormControl>
              <Center>
                <Button
                  w="186px"
                  borderRadius="23px"
                  backgroundColor="#F47458"
                  rightIcon={<VscArrowRight />}
                  onClick={() => router.push(`/`)}
                >
                  SIGN UP
                </Button>
              </Center>
            </Stack>
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default Register;
