import { NextPage } from "next";

import { Layout } from "../../../components/layout/Layout";
import { SimpleGrid } from "@chakra-ui/react";

const Lessons: NextPage = () => {
  return (
    <Layout title={"Let's Learn"} browserTabTitle={"Learnzy - Categories"}>
      <SimpleGrid columns={5} spacing={10}></SimpleGrid>
    </Layout>
  );
};

export default Lessons;
