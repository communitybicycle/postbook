import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/core";
import { useRecoilState } from "recoil";
import { Formik, Field, Form } from "formik";
import faker from "faker";

import { postsState } from "../atoms";
import { func, string } from "prop-types";

function CreateReply({ id, onDelete }) {
  const [posts, setPosts] = useRecoilState(postsState);

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.length < 3) {
      error = "Name must be longer than 2 characters";
    } else if (value.length > 36) {
      error = "Name must be shorter than 36 characters";
    }
    return error;
  };

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    } else if (value.length > 320) {
      error = "Email can't be longer than 320 characters"
    }
    return error;
  };

  const validateContent = (value) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (value.length > 1000) {
      error = "Message is too long, please keep under 1000 characters";
    }
    return error;
  };

  return (
    <Box mt={2}>
      <Text fontSize="2xl" mb={2}>
        Write a reply!
      </Text>

      <Formik
        initialValues={{
          name: "",
          email: "",
          content: "",
        }}
        onSubmit={(values, { resetForm }) => {
          const { name, email, content } = values;
          const reply = {
            id: faker.random.uuid(),
            authorName: name,
            authorEmail: email,
            content,
          };
          const newPosts = {
            ...posts,
            [id]: {
              ...posts[id],
              replies: [...posts[id].replies, reply],
            },
          };

          setPosts(newPosts);
          resetForm();
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <Flex
            mb={2}
            flexDir={{ xs: "column", sm: "row", md: "column", lg: "row" }}
          >
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl
                  flex={1}
                  mr={3}
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <FormLabel htmlFor={id + "-name"}>Your name</FormLabel>
                  <Input
                    {...field}
                    id={id + "-name"}
                    placeholder="E.g. John Doe"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email" validate={validateEmail}>
              {({ field, form }) => (
                <FormControl
                  flex={1}
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor={id + "-email"}>Your email</FormLabel>
                  <Input
                    {...field}
                    id={id + "-email"}
                    placeholder="E.g. johndoe@example.com"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
          </Flex>
          <Field name="content" validate={validateContent}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.content && form.touched.content}
              >
                <FormLabel htmlFor={id + "-content"}>Your message</FormLabel>
                <Textarea
                  {...field}
                  id={id + "-content"}
                  placeholder="What would you like to say?"
                />
                <FormErrorMessage>{form.errors.content}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Flex justifyContent="space-between" mt={3}>
            <Button type="submit">Reply</Button>
            <Button variantColor="red" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </Flex>
        </Form>
      </Formik>
    </Box>
  );
}

CreateReply.propTypes = {
  id: string,
  onDelete: func,
};

export default CreateReply;
