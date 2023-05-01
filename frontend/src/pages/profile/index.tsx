import type { NextPage } from "next";
import { Layout } from "../../../components/layout/Layout"
import { SubjectProgress } from "./components/SubjectProgress";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

const MyProfile: NextPage = () => {
  
  const subjects = [
    {
      subjectName: "Math",
      lessons: [
        { "name": "Lesson 1", "isFinished": true },
        { "name": "Lesson 2", "isFinished": true },
        { "name": "Lesson 3", "isFinished": true },
        { "name": "Lesson 4", "isFinished": false },
      ],
      progressValue: 75
    },
    {
      subjectName: "English",
      lessons: [
        { "name": "Lesson 1", "isFinished": true },
        { "name": "Lesson 2", "isFinished": false },
        { "name": "Lesson 3", "isFinished": false },
        { "name": "Lesson 4", "isFinished": false },
      ],
      progressValue: 25
    },
    {
      subjectName: "Alphabet",
      lessons: [
        { "name": "Lesson 1", "isFinished": true },
        { "name": "Lesson 2", "isFinished": true },
        { "name": "Lesson 3", "isFinished": false },
        { "name": "Lesson 4", "isFinished": false },
      ],
      progressValue: 50
    }
  ]

  return (
    <Layout browserTabTitle="Learnzy - My Profile" title="My Profile">
      <Tabs position="relative" variant="unstyled" w="full">
        <TabList>
          <Tab>Personal Info</Tab>
          <Tab>My Progress</Tab>
        </TabList>
        <TabIndicator 
          mt="-1.5px"
          height="2px"
          bg="orange.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Box w="full" h="full">
              <FormControl marginBottom="10px">
                <FormLabel>Username</FormLabel>
                <Input bg="#FFFFFF" focusBorderColor="orange.500" w="sm"/>
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input bg="#FFFFFF" focusBorderColor="orange.500" w="sm"/>
              </FormControl>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box w="full" h="full" px="2">
              <Text 
                color="#441907"
                fontSize="2xl"
                fontWeight="bold"
                marginBottom="10"
              >
                Completed Lessons
              </Text>
              {subjects.map(({subjectName, lessons, progressValue}, index) => (
                <SubjectProgress
                  key={index}
                  name={subjectName}
                  lessons={lessons}
                  progressValue={progressValue}
                />
              ))}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default MyProfile