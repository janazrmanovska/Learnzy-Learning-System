import React from "react";
import { Flex, Spacer, Avatar } from "@chakra-ui/react";
import Head from "next/head";

import { Sidebar } from "./Sidebar";
import { GENERATE_PROFILE_PICK_URL } from "../../constants";

type Props = {
  title: string;
  browserTabTitle: string;
  children: React.ReactNode;
  isMyProfilePage: Boolean;
};

export const Layout = ({ children, title, browserTabTitle, isMyProfilePage }: Props) => {
  const profileImageUrl = `${GENERATE_PROFILE_PICK_URL}${"Mary Parker"}`;
  return (
    <Flex height="100vh">
      <Head>
        <title>{browserTabTitle}</title>
        <meta name="browser tag title" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#32b96d"
        ></link>
        <meta name="msapplication-TileColor" content="#2b5797"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
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
          <Spacer/>
          <Avatar
              size="lg"
              rounded="full"
              marginRight="10"
              marginTop="2"
              name="Mary Parker"
              src={profileImageUrl}
            />
        </Flex>

        {/* Main Content */}
        <Flex flexGrow={1} overflow="auto" px="8" py="4">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
