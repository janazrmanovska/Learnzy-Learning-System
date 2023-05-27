import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Button, Flex } from "@chakra-ui/react";

import { transformLessonTitle } from "../../utils/shared";
import { Layout } from "../../../components/layout/Layout";

const Lesson: NextPage = () => {
  const router = useRouter();
  const path = router.asPath;

  const { title } = transformLessonTitle(path);

  return (
    <Layout title={title} browserTabTitle={"Learnzy - Lesson"}>
      <Flex w="full" flexDir="column">
        <video controls>
          <source src="/shapes.mp4" type="video/mp4" />
        </video>
        <Button
          my={8}
          w="150px"
          borderRadius="23px"
          backgroundColor="#F47458"
          onClick={() => router.push("/memory-game")}
        >
          QUIZ TIME
        </Button>
      </Flex>
    </Layout>
  );
};

export default Lesson;
