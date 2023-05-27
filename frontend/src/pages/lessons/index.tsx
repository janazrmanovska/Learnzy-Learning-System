import { NextPage } from "next";

import { Layout } from "../../../components/layout/Layout";
import { SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { transformLessonsTitle } from "../../utils/shared";
import { CardItem } from "../../../components/shared/CardItem";

const Lessons: NextPage = () => {
  const router = useRouter();
  const path = router.asPath;

  const { title, category } = transformLessonsTitle(path);

  return (
    <Layout title={title} browserTabTitle={"Learnzy - Lessons"}>
      <SimpleGrid columns={4} spacing={10}>
        <CardItem
          imageUrl="/counting.png"
          title="Counting"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Counting`)
          }
        ></CardItem>
        <CardItem
          imageUrl="/operations.png"
          title="Operations"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Operations`)
          }
        ></CardItem>
        <CardItem
          imageUrl="/geometry 1.png"
          title="Geometry"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Geometry`)
          }
        ></CardItem>
        <CardItem
          imageUrl="/clock-8 1.png"
          title="Clock"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Clock`)
          }
        ></CardItem>
        <CardItem
          imageUrl="/geometry 1.png"
          title="Memory"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Memory`)
          }
        ></CardItem>
      </SimpleGrid>
    </Layout>
  );
};

export default Lessons;
