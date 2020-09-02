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

function CreatePost() {
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
    }
    return error;
  };

  const validateContent = (value) => {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" backgroundColor="white">
      <Text mb={3} fontSize="3xl">
        Create a New Post
      </Text>
      <Formik
        initialValues={{
          name: "",
          email: "",
          content: "",
        }}
        onSubmit={(values, { resetForm }) => {
          const newPosts = { ...posts };
          const { name, email, content } = values;
          newPosts[faker.random.uuid()] = {
            authorName: name,
            authorEmail: email,
            content,
            replies: [],
            created: new Date(),
          };
          setPosts(newPosts);
          resetForm();
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form>
          <Flex
            mb={3}
            flexDir={{ xs: "column", sm: "row", md: "column", lg: "row" }}
          >
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl
                  flex={1}
                  mr={{ sm: 4, md: 0, lg: 4 }}
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <FormLabel htmlFor="name">Your name</FormLabel>
                  <Input {...field} id="name" placeholder="E.g. John Doe" />
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
                  <FormLabel htmlFor="email">Your email</FormLabel>
                  <Input
                    {...field}
                    id="email"
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
                <FormLabel htmlFor="content">Your message</FormLabel>
                <Textarea
                  {...field}
                  id="content"
                  placeholder="What would you like to share?"
                />
                <FormErrorMessage>{form.errors.content}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button variantColor="green" mt={4} type="submit">
            Create
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}

export default CreatePost;
