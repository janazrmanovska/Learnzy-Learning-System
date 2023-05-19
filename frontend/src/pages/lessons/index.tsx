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
          imageUrl="https://bit.ly/2Z4KKcF"
          title="Operations"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Operations`)
          }
        ></CardItem>
        <CardItem
          imageUrl="https://bit.ly/2Z4KKcF"
          title="Counting"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Counting`)
          }
        ></CardItem>
        <CardItem
          imageUrl="https://bit.ly/2Z4KKcF"
          title="Operations"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Operations`)
          }
        ></CardItem>
        <CardItem
          imageUrl="https://bit.ly/2Z4KKcF"
          title="Geometry"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Geometry`)
          }
        ></CardItem>
        <CardItem
          imageUrl="https://bit.ly/2Z4KKcF"
          title="Operations"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Operations`)
          }
        ></CardItem>
        <CardItem
          imageUrl="https://bit.ly/2Z4KKcF"
          title="Counting"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Counting`)
          }
        ></CardItem>
        <CardItem
          imageUrl="https://bit.ly/2Z4KKcF"
          title="Operations"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Operations`)
          }
        ></CardItem>
        <CardItem
          imageUrl="https://bit.ly/2Z4KKcF"
          title="Geometry"
          onClick={() =>
            router.push(`/lessons/1?category=${category}?lesson=Geometry`)
          }
        ></CardItem>
      </SimpleGrid>
    </Layout>
  );
};

export default Lessons;
