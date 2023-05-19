import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Box, Button, Flex } from "@chakra-ui/react";

import { transformLessonTitle } from "../../utils/shared";
import { Layout } from "../../../components/layout/Layout";

const Lesson: NextPage = () => {
  const router = useRouter();
  const path = router.asPath;

  const { title } = transformLessonTitle(path);

  return (
    <Layout title={title} browserTabTitle={"Learnzy - Lesson"}>
      <Flex w="full" flexDir="column">
        <Box
          as="iframe"
          src="https://www.youtube.com/watch?v=4tkRwMHu9NQ"
          h="80%"
          sx={{
            aspectRatio: "16/9",
          }}
        />
        <Button my={8} w="150px" borderRadius="23px" backgroundColor="#F47458">
          QUIZ TIME
        </Button>
      </Flex>
    </Layout>
  );
};

export default Lesson;
