import React from "react";
import "./App.css";
import styled from "@emotion/styled";
import { Box, Text } from "@chakra-ui/core";

import CreatePost from "./components/CreatePost";
import ViewPosts from "./components/ViewPosts";
import Search from "./components/Search";

const Root = styled.main`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  background: #efefef;
`;

function App() {
  return (
    <Root>
      <Box
        pt={6}
        px={{ xs: 3, sm: 4, md: 6 }}
        width={["100%", "100%", "100%", "1140px"]}
        display={{ md: "flex" }}
      >
        <Box
          flex={2}
          mr={{ md: 4 }}
          top={6}
          position={{ md: "sticky" }}
          height={{ md: "calc(100vh - 24px)" }}
        >
          <Text
            p={5}
            mb={6}
            shadow="md"
            borderWidth="1px"
            backgroundColor="white"
            textAlign="center"
            fontSize="4xl"
          >
            Post Viewer
          </Text>
          <CreatePost />
          <Search />
        </Box>
        <Box mt={{ xs: 6, md: 0 }} flex={3}>
          <ViewPosts />
        </Box>
      </Box>
    </Root>
  );
}

export default App;
