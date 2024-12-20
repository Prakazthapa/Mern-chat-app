import React from "react";
import { Box, Container, Tabs, Text } from "@chakra-ui/react";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="work sans" color="black">
          ChatsApp
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        border-width="1pxs"
        color="black"
      >
        <Tabs.Root
          variant="subtle"
          colorPalette="green"
          maxW="md"
          fitted
          defaultValue={"login"}
        >
          <Tabs.List md="1em">
            <Tabs.Trigger value="login">Login</Tabs.Trigger>
            <Tabs.Trigger value="sign-up">Sign Up</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="login">
            <Login />
          </Tabs.Content>
          <Tabs.Content value="sign-up">
            <Signup />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default Homepage;
