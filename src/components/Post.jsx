import React, { useState } from "react";
import { Box, Collapse, Icon, Stack, Text } from "@chakra-ui/core";
import { string, func, arrayOf, shape } from "prop-types";
import styled from "@emotion/styled";
import CreateReply from "./CreateReply";
import Reply from "./Reply";
import UserInfo from "./UserInfo";

const Root = styled(Box)`
  :hover {
    > div {
      visibility: visible;
      opacity: 1;
    }
  }
  :focus {
    > div {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const CollapseIcon = styled.button`
  margin-top: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  :hover {
    background-color: #efefef;
  }
`;

function Post({
  id,
  authorName,
  authorEmail,
  content,
  date,
  replies,
  onDelete,
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Root
      transition="all 0s linear"
      mb={6}
      p={5}
      shadow="md"
      borderWidth="1px"
      backgroundColor="white"
    >
      <UserInfo name={authorName} email={authorEmail} date={date} />
      <Text>{content}</Text>
      <Collapse mt={3} isOpen={open}>
        <Text fontSize="2xl" mb={2}>
          Replies
        </Text>
        {replies.length === 0 ? (
          <Text>There are no replies yet.</Text>
        ) : (
          <Stack spacing={4} shouldWrapChildren={true}>
            {replies.map((reply) => (
              <Box
                key={reply.id}
                borderRadius={4}
                backgroundColor="#f2f2f2"
                p={4}
              >
                <Reply
                  authorName={reply.authorName}
                  authorEmail={reply.authorEmail}
                  content={reply.content}
                />
              </Box>
            ))}
          </Stack>
        )}

        <CreateReply id={id} onDelete={onDelete} />
      </Collapse>
      <CollapseIcon mt={3} onClick={handleOpen}>
        <Icon name={open ? "chevron-up" : "chevron-down"} />
      </CollapseIcon>
    </Root>
  );
}

Post.propTypes = {
  id: string,
  authorName: string,
  authorEmail: string,
  date: string,
  content: string,
  replies: arrayOf(
    shape({
      authorName: string,
      authorEmail: string,
      content: string,
    })
  ),
  onDelete: func,
};

export default Post;
