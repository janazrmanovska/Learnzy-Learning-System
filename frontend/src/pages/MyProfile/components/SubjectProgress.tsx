import React from "react";
import { Box, Text, Progress, Divider } from "@chakra-ui/react";

type Props = {
  test: String
};

export const SubjectProgress = ({ test }: Props) => {
  return (
    <Box w="full" h="full">
      <Text
        color="#441907"
        fontSize="lg"
        opacity="0.5"
        fontWeight="bold"
      >
        Math
      </Text>
      <Divider border="0.5px solid rgba(68, 25, 7, 0.3);"/>
    </Box>
  );
};



/*
<Box w="full" h="full" px="2">
            <Text
              color="#441907"
              fontSize="2xl"
              fontWeight="bold"
              marginBottom="10"
              >
                Completed Lessons
            </Text>

            <Text
              color="#441907"
              fontSize="lg"
              opacity="0.5"
              fontWeight="bold"
              >
                Math
            </Text>
            <Divider border="0.5px solid rgba(68, 25, 7, 0.3);"></Divider>
            <Progress hasStripe colorScheme="orange" value={80}/>
          </Box>
 */