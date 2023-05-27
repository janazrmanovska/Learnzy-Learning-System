import React from "react";
import { CgNotes } from "react-icons/cg";
import { BsGrid3X3Gap } from "react-icons/bs";
import { VscSignOut } from "react-icons/vsc";
import { Avatar, Box, Button, Flex, Text, VStack } from "@chakra-ui/react";

import { SidebarItem } from "../../types/sidebar";
import { GENERATE_PROFILE_PICK_URL } from "../../constants/shared";
import { useRouter } from "next/router";

type Props = {
  userName: string;
  onSignOut: () => void;
};

const sidebarItems: SidebarItem[] = [
  { text: "Categories", path: "/", icon: <BsGrid3X3Gap /> },
  { text: "Quizzes", path: "/quizzes", icon: <CgNotes /> },
];

export const Sidebar = ({ userName, onSignOut }: Props) => {
  const router = useRouter();
  const profileImageUrl = `${GENERATE_PROFILE_PICK_URL}${userName}`;

  return (
    <Box w="full" h="full" px="2">
      <Text
        color="#441907"
        fontSize="2xl"
        fontWeight="bold"
        marginBottom="4"
        ps="4"
      >
        Learnzy
      </Text>

      <Flex h="88vh" flexDir="column" justifyContent="space-between">
        <VStack spacing="0.5" align="start">
          {sidebarItems.map((item, index) => (
            <Button
              _hover={{ background: "#F4745861" }}
              borderRadius="0px"
              color="#441907"
              key={index}
              as="a"
              variant="ghost"
              href={item.path}
              leftIcon={item.icon}
            >
              {item.text}
            </Button>
          ))}
        </VStack>
        <Flex flexDir="column">
          <Flex
            alignItems="center"
            pb="4"
            onClick={() => router.push("/profile")}
            cursor={"pointer"}
          >
            <Avatar
              size="sm"
              rounded="full"
              marginRight="2"
              name={userName}
              src={profileImageUrl}
            />
            <Text color="#441907" fontWeight="bold">
              {userName}
            </Text>
          </Flex>

          <Button w="full" backgroundColor="#F47458" onClick={onSignOut}>
            <VscSignOut />
            <Text ps="2">Sign Out</Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
