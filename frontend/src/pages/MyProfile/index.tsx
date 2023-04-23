import type { NextPage } from "next";
import { Layout } from "../../../components/layout/Layout"
import { Tabs, TabList, TabPanels, Tab, TabPanel, FormLabel, Input, Divider } from '@chakra-ui/react'
import { Box, FormControl, Text, Progress } from "@chakra-ui/react";
import { SubjectProgress } from "./components/SubjectProgress";


const MyProfile: NextPage = () => {
  return (
    <Layout browserTabTitle="Learnzy - My Profile" title="My Profile" isMyProfilePage={true}>
      <Tabs colorScheme="orange">
        <TabList>
          <Tab>Personal Info</Tab>
          <Tab>My Progress</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box maxW="480px">
              <form>
                <FormControl isRequired mb="10px">
                  <FormLabel>Username:</FormLabel>
                  <Input width="400px" backgroundColor="#FFFFFF" focusBorderColor="orange.500"></Input>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email:</FormLabel>
                  <Input width="400px" backgroundColor="#FFFFFF" focusBorderColor="orange.500"></Input>
                </FormControl>
              </form>
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
            <SubjectProgress test={"asd"}/>
          </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default MyProfile;