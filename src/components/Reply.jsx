import React from "react";
import { Box, Text } from "@chakra-ui/core";
import { string } from "prop-types";
import UserInfo from "./UserInfo";

function Reply({ authorName, authorEmail, content }) {
  return (
    <Box>
      <UserInfo variant="small" name={authorName} email={authorEmail} />
      <Text>{content}</Text>
    </Box>
  );
}

Reply.propTypes = {
  authorName: string,
  authorEmail: string,
  content: string,
};

export default Reply;
