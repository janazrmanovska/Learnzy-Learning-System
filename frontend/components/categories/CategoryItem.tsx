import { VStack, Text } from "@chakra-ui/layout";
import { CategoryDisplayItem } from "../../types/categories";
import React from "react";

type Props = {
  category: CategoryDisplayItem;
};

export const CategoryItem = ({ category }: Props) => {
  return (
    <VStack
      spacing={0}
      fontWeight={700}
      boxShadow="2xl"
      w="10em"
      h="10em"
      backgroundColor="#FFE2D6"
      borderRadius="50px"
    >
      {category.icon}
      <Text color="#441907">{category.title}</Text>
    </VStack>
  );
};
