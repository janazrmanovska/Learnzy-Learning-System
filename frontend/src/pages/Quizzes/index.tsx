import { useMemo, useState } from "react";
import type { NextPage } from "next";
import { Layout } from "../../../components/layout/Layout";
import {
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  HStack,
  Text,
  MenuItem,
} from "@chakra-ui/react";
import { CardItem } from "../../../components/shared/CardItem";
import { Quizzes } from "../../../constants/quizzes";
import { CategoriesFilter, LevelFilter } from "../../../constants/filters";

const Quizes: NextPage = () => {
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  const handleCategorySelect = (value: string) => {
    setCategory(value);
  };

  const handleLevelSelect = (value: string) => {
    setLevel(value);
  };

  const filteredQuizzes = useMemo(() => {
    return Quizzes.filter((quiz) => {
      if (category === "All" && level === "All") return quiz;
      if (category === "All" && level === quiz.level) return quiz;
      if (category === quiz.category && level === "All") return quiz;
      if (category === quiz.category && level === quiz.level) return quiz;
      return "";
    });
  }, [category, level]);

  return (
    <Layout browserTabTitle="Learnzy - Quizzes" title="Quizzes">
      <div>
        <HStack pb={4} spacing={3}>
          <Text>Category</Text>
          <Menu>
            <MenuButton
              w={48}
              h={8}
              borderRadius="5px"
              backgroundColor="#F47458"
            >
              {category}
            </MenuButton>
            <MenuList backgroundColor="#F47458">
              {CategoriesFilter.map((item) => {
                return (
                  <MenuItem
                    _hover={{ backgroundColor: "#FFE2D6" }}
                    backgroundColor="#F47458"
                    onClick={() => handleCategorySelect(item)}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
          <Text>Level</Text>
          <Menu>
            <MenuButton
              borderRadius="5px"
              w={48}
              h={8}
              backgroundColor="#F47458"
            >
              {level}
            </MenuButton>
            <MenuList backgroundColor="#F47458">
              {LevelFilter.map((item) => {
                return (
                  <MenuItem
                    _hover={{ backgroundColor: "#FFE2D6" }}
                    backgroundColor="#F47458"
                    onClick={() => handleLevelSelect(item)}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </HStack>
        <SimpleGrid columns={4} spacingX="10px" gridGap="10px">
          {filteredQuizzes.length !== 0 ? (
            filteredQuizzes.map((quiz) => {
              return <CardItem imageUrl={quiz.imageUrl} title={quiz.title} />;
            })
          ) : (
            <Text>No Quizzes</Text>
          )}
        </SimpleGrid>
      </div>
    </Layout>
  );
};

export default Quizes;
