import { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { NextPage } from "next";

type FormEvent = React.FormEvent<HTMLFormElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

const Register: NextPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (event: InputEvent) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: InputEvent) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: InputEvent) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: InputEvent) => {
    setConfirmPassword(event.target.value);
  };

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
          <Heading mb="8" textAlign="center">Sign Up</Heading>
          <form onSubmit={handleSubmit}>
            <Stack spacing="6">
              <FormControl>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  autoComplete="username"
                  required
                  bg="#FFFFFF"
                   focusBorderColor="orange.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  autoComplete="email"
                  required
                  bg="#FFFFFF" 
                  focusBorderColor="orange.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="new-password"
                  required
                  bg="#FFFFFF" 
                  focusBorderColor="orange.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="confirm-password">
                  Confirm Password
                </FormLabel>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  autoComplete="new-password"
                  required
                  bg="#FFFFFF" 
                  focusBorderColor="orange.500"
                />
              </FormControl>
              <Center>
                <Button type="submit" backgroundColor="#F47458" color="white" size="md" fontSize="sm" w="100px">
                  Sign Up
                </Button>
              </Center>
            </Stack>
          </form>
        </Box>
      </Center>
    </Box>
  );
};

export default Register