import type { NextPage } from "next";
import { SimpleGrid } from "@chakra-ui/layout";

import { Layout } from "../../components/layout/Layout";
import { CategoryItems } from "../../constants/categories";
import { CategoryItem } from "../../components/categories/CategoryItem";

const Categories: NextPage = () => {
  return (
    <Layout title={"Let's Learn"} browserTabTitle={"Learnzy - Categories"}>
      <SimpleGrid columns={5} spacing={10}>
        {CategoryItems.map((category) => {
          return <CategoryItem category={category} />;
        })}
        {/* <CategoryItem category={CategoryItems[0]} /> */}
      </SimpleGrid>
    </Layout>
  );
};

export default Categories;
