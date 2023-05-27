import React from "react";
import { CgNotes } from "react-icons/cg";
import { BsGrid3X3Gap } from "react-icons/bs";
import { VscSignOut } from "react-icons/vsc";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
// import { BiBookBookmark } from "react-icons/bi";

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
  // { text: "Lessons", path: "/lessons", icon: <BiBookBookmark /> },
];

export const Sidebar = ({ userName, onSignOut }: Props) => {
  const router = useRouter();
  const profileImageUrl = `${GENERATE_PROFILE_PICK_URL}${userName}`;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isQuizzes = router.asPath.includes("lessons?level=");

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
              backgroundColor={
                isQuizzes && item.text === "Quizzes"
                  ? "#F4745861"
                  : "transparent"
              }
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

          <Button w="full" backgroundColor="#F47458" onClick={onOpen}>
            <VscSignOut />
            <Text ps="2">Sign Out</Text>
          </Button>
          {isOpen && (
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Are you sure you want to log out?</ModalHeader>
                <ModalCloseButton />
                <ModalBody></ModalBody>

                <ModalFooter gap={20}>
                  <Button
                    borderRadius="23px"
                    backgroundColor="#FFF3EE"
                    color="black"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    w="186px"
                    borderRadius="23px"
                    backgroundColor="#F47458"
                    onClick={() => router.push(`/login`)}
                  >
                    Log out
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
