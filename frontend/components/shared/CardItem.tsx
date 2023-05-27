import React from "react";
import { Image, Text } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  title: string;
  onClick?: () => void;
};

export const CardItem = ({ imageUrl, title, onClick }: Props) => {
  return (
    <Card
      cursor="pointer"
      borderTopRadius="20%"
      overflow="hidden"
      onClick={onClick}
    >
      <Image src={imageUrl} alt="placeholder image" />

      <CardBody backgroundColor="#FFE2D6">
        <Text
          fontSize="xl"
          color="#441907"
          fontWeight="bold"
          textAlign="center"
          verticalAlign="center"
        >
          {title}
        </Text>
      </CardBody>
    </Card>
  );
};
