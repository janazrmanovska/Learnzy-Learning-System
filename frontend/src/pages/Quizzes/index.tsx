import { useState } from "react";
import type { NextPage } from "next";
import { Layout } from "../../../components/layout/Layout";
import { SimpleGrid, Menu, MenuButton, MenuList, HStack, Text, Button, MenuItem } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
import { QuizCard } from "./quizCard";

const Quizes: NextPage = () => {
  const [category, setCategory] = useState("Category");
  const [level, setLevel] = useState("Level");

  const handleCategorySelect = (value: string) => {
    setCategory(value);
  };

  const handleLevelSelect = (value: string) => {
    setLevel(value);
  };

  return (
    <Layout browserTabTitle="Learnzy - Quizes" title="Quizes">
      <div>
        <HStack marginBottom="10px" spacing='15px'>
          <Text>{category}</Text>
          <Menu>
            <MenuButton as={Button} >
              {category}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleCategorySelect("Category 1")}>Category 1</MenuItem>
              <MenuItem onClick={() => handleCategorySelect("Category 2")}>Category 2</MenuItem>
              <MenuItem onClick={() => handleCategorySelect("Category 3")}>Category 3</MenuItem>
            </MenuList>
          </Menu>
          <Text>{level}</Text>
          <Menu>
            <MenuButton as={Button}>
              {level}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleLevelSelect("Level 1")}>Level 1</MenuItem>
              <MenuItem onClick={() => handleLevelSelect("Level 2")}>Level 2</MenuItem>
              <MenuItem onClick={() => handleLevelSelect("Level 3")}>Level 3</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <SimpleGrid columns={4} spacingX="10px" gridGap="10px">
          <QuizCard imageUrl="https://bit.ly/2Z4KKcF" title="Quiz 1"></QuizCard>
          <QuizCard imageUrl="https://bit.ly/2Z4KKcF" title="Quiz 1"></QuizCard>
          <QuizCard imageUrl="https://bit.ly/2Z4KKcF" title="Quiz 1"></QuizCard>
          <QuizCard imageUrl="https://bit.ly/2Z4KKcF" title="Quiz 1"></QuizCard>
          <QuizCard imageUrl="https://bit.ly/2Z4KKcF" title="Quiz 1"></QuizCard>
          <QuizCard imageUrl="https://bit.ly/2Z4KKcF" title="Quiz 1"></QuizCard>
          <QuizCard imageUrl="https://bit.ly/2Z4KKcF" title="Quiz 1"></QuizCard>
          <QuizCard imageUrl="https://bit.ly/2Z4KKcF" title="Quiz 1"></QuizCard>
        </SimpleGrid>
      </div>
    </Layout>
  );
};

export default Quizes;
