import { VStack, Text } from "@chakra-ui/layout";
import { CategoryDisplayItem } from "../../types/categories";
import React from "react";

type Props = {
  category: CategoryDisplayItem;
  onCardClick: () => void;
};

export const CategoryItem = ({ category, onCardClick }: Props) => {
  return (
    <VStack
      spacing={0}
      fontWeight={700}
      boxShadow="2xl"
      w="10em"
      h="10em"
      backgroundColor="#FFE2D6"
      borderRadius="50px"
      onClick={onCardClick}
      cursor="pointer"
    >
      {category.icon}
      <Text color="#441907">{category.title}</Text>
    </VStack>
  );
};
