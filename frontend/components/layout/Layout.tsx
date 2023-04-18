import React from "react";
import { Flex } from "@chakra-ui/react";

import { Sidebar } from "./Sidebar";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Layout = ({ children, title }: Props) => {
  return (
    <Flex height="100vh">
      {/* Sidebar */}
      <Flex width="20%" backgroundColor="#FFE2D6" padding="4">
        <Sidebar
          userName={"Mary Parker"}
          onSignOut={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Flex>

      {/* Main Content */}
      <Flex width="80%" flexDirection="column" backgroundColor="#FFCDB8">
        {/* Header */}
        <Flex
          ps={8}
          height="24"
          fontSize="6xl"
          color="#441907"
          fontWeight={600}
          justifyContent="flex-start"
        >
          {title}
        </Flex>

        {/* Main Content */}
        <Flex flexGrow={1} overflow="auto" px="8" py="4">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
