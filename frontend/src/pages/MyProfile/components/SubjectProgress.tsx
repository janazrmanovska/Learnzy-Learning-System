import React from "react";
import { Box, Text, Progress, Divider, GridItem, SimpleGrid, HStack } from "@chakra-ui/react";
import { CheckCircleIcon } from '@chakra-ui/icons'

type Lesson = {
  name: String,
  isFinished: Boolean
}

type Props = {
  name: String,
  lessons: Lesson[],
  progressValue: number
};

export const SubjectProgress = ({ name, lessons, progressValue }: Props) => {
  return (
    <Box w="full" h="full" marginBottom="10">
      <Text
        color="#441907"
        fontSize="2xl"
        opacity="0.5"
        fontWeight="bold"
      >
        {name}
      </Text>
      <Divider 
        border="0.5px solid rgba(68, 25, 7, 0.3);"
        marginBottom="5"
      />
      <Text
        color="#441907"
        fontSize="lg"
        opacity="0.5"
        fontWeight="bold"
      >
        {progressValue}%
      </Text>
      <Progress 
        hasStripe 
        value={progressValue} 
        colorScheme="orange"
        marginBottom="5"
      />
      <SimpleGrid columns={2}>
        {lessons.map((lesson, index) => (
          <GridItem key={index}>
            <HStack>
              <Text
                color="#441907"
                fontSize="lg"
                opacity="0.5"
                fontWeight="bold"
              >
              {lesson.name}
              </Text>
              {lesson.isFinished &&
                <CheckCircleIcon color="green.500"/>
              }
            </HStack>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};
