import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/core";
import { string } from "prop-types";

function UserInfo({ variant = "regular", name, email, date }) {
  return (
    <Flex mb={variant === "small" ? 2 : 4}>
      <Flex justifyContent="center" alignItems="center">
        <Avatar size={variant === "small" ? "sm" : "md"} name={name} mr={4} />
      </Flex>
      <Box overflowWrap="anywhere">
        <Text fontSize={variant === "small" ? "md" : "lg"} fontWeight="bold">
          {name}
        </Text>
        <Text fontSize={variant === "small" ? "xs" : "sm"}>
          &lt;{email}&gt;{date ? ` - ${date}` : ""}
        </Text>
      </Box>
    </Flex>
  );
}

UserInfo.propTypes = {
  variant: string,
  name: string,
  email: string,
  date: string,
};

export default UserInfo;
