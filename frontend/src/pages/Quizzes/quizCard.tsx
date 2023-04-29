import React from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
 
type Props = {
  imageUrl: string,
  title: string
};
 
export const QuizCard = ({ imageUrl, title }: Props) => {
  return (
    <Card borderTopRadius="20%" overflow="hidden">
      <Image src={imageUrl} alt="placeholder image" />
 
      <CardBody backgroundColor="#FFE2D6">
        <Text fontSize="l" fontWeight="bold" textAlign="center" verticalAlign="center">{title}</Text>
      </CardBody>
    </Card>
  );
};