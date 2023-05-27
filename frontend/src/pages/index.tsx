import type { NextPage } from "next";
import { SimpleGrid } from "@chakra-ui/layout";
import { VscArrowRight } from "react-icons/vsc";

import { Layout } from "../../components/layout/Layout";
import { CategoryItems } from "../../constants/categories";
import { CategoryItem } from "../../components/categories/CategoryItem";
import {
  Modal,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { CategoryDisplayItem } from "../../types/categories";

const Categories: NextPage = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryDisplayItem>();

  return (
    <Layout title={"Let's Learn"} browserTabTitle={"Learnzy - Categories"}>
      <SimpleGrid columns={5} spacing={10}>
        {CategoryItems.map((category) => {
          return (
            <CategoryItem
              category={category}
              onCardClick={() => {
                setSelectedCategory(category);
                onOpen();
              }}
            />
          );
        })}
        {isOpen && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Learning Level</ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>

              <ModalFooter gap={20}>
                <Button
                  px={8}
                  w="150px"
                  borderRadius="23px"
                  backgroundColor="#F47458"
                  rightIcon={<VscArrowRight />}
                  onClick={() =>
                    router.push(
                      `/lessons?level=1?category=${selectedCategory?.title}`
                    )
                  }
                >
                  BASIC
                </Button>
                <Button
                  w="186px"
                  borderRadius="23px"
                  backgroundColor="#F47458"
                  rightIcon={<VscArrowRight />}
                  onClick={() =>
                    router.push(
                      `/lessons?level=2?category=${selectedCategory?.title}`
                    )
                  }
                >
                  ADVANCED
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </SimpleGrid>
    </Layout>
  );
};

export default Categories;
