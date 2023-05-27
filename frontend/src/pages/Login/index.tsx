import {
  Box,
  Center,
  Text,
  Input,
  Stack,
  Button,
  VStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { VscArrowRight } from "react-icons/vsc";

const Login: NextPage = () => {
  const router = useRouter();
  return (
    <Box maxW="100%" mx="auto" backgroundColor="#FFCDB8">
      <Center h="100vh">
        <Box borderWidth="10px" borderColor="#FFE2D6" w="600px" p={10}>
          <Box borderWidth="10px" borderColor="#FFE2D6" w="500px" p={10}>
            <Text
              fontSize="6xl"
              fontWeight={700}
              color="#441907"
              textAlign="center"
            >
              Sign In
            </Text>
            <Stack spacing={4}>
              <Text color="#441907">Email</Text>
              <Input
                type="email"
                variant="flushed"
                color="black"
                placeholder="example@example.com"
                focusBorderColor="orange.700"
              />
              <Text color="#441907">Password</Text>
              <Input
                type="password"
                variant="flushed"
                color="black"
                focusBorderColor="orange.700"
              />
              <VStack>
                <Button
                  w="186px"
                  borderRadius="23px"
                  backgroundColor="#F47458"
                  rightIcon={<VscArrowRight />}
                  onClick={() => router.push(`/`)}
                >
                  SIGN IN
                </Button>
                <Text color="#00000033">
                  Do not have an account?
                  <Text
                    color="#F47458"
                    cursor="pointer"
                    onClick={() => router.push(`/register`)}
                  >
                    Register here
                  </Text>
                </Text>
              </VStack>
            </Stack>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default Login;
