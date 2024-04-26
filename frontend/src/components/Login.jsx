import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../core/supabase.js";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  VStack,
  Text,
  CloseButton,
} from "@chakra-ui/react";

function Login(props) {
  const toast = useToast();
  const navigate = useNavigate();

  const [display, setDisplay] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function init() {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error(error);
        return;
      }
      if (!!data.session) {
        setUser(data.session.user);
      }
    }

    init();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      console.log("trying");
      console.log(email);
      console.log(password);
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert("Error with auth: " + error.message);
      } else {
        setUser(data.user);
        console.log(user);
      }
    } catch (error) {
      console.log("error", error);
      alert(error.error_description || error);
    }
  };

  const handleSignup = async (email, password, username) => {
    try {
      const { error, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            display_name: username,
          },
        },
      });

      if (error) {
        alert("Error with auth: " + error.message);
      } else {
        setUser(data.user);
        navigate("/profile");
      }
    } catch (error) {
      console.log("error", error);
      alert(error.error_description || error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting naturally
    console.log(display);
    if (display === 2) {
      console.log("signing up");
      handleSignup(email, password, username);
    } else {
      handleLogin(email, password);
    }
    toast({
      title: "Login Attempt",
      description: `Username: ${username}, Password: ${password}`,
      status: "info", // You can keep 'info' or change it as needed
      duration: 1000,
      isClosable: true,
      position: "bottom-middle",
      render: (
        { onClose } // Retrieve onClose function from render props
      ) => (
        <Box
          color="white"
          p={3}
          bg="gray.600"
          borderRadius="md"
          borderWidth="1px"
          borderColor="gray.500"
          position="relative"
        >
          <Text fontWeight="bold">Login Attempt</Text>
          <Text>
            Username: {username}, Password: {password}
          </Text>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={onClose}
          />
        </Box>
      ),
    });
    // Here you would usually handle the login logic, perhaps sending a request to a server
  };
  return (
    <div>
      {display === 0 ? (
        <div>
          <Box
            p={8}
            maxWidth="500px"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
            m="20px auto"
            mt={120}
            sx={{ fontFamily: "'Roboto', sans-serif" }}
          >
            <VStack spacing={4} align="flex-start">
              <Button
                bg="gray"
                size="lg"
                color="white"
                width="full"
                onClick={() => setDisplay(1)}
              >
                Log in
              </Button>
              <Button
                bg="gray"
                size="lg"
                color="white"
                width="full"
                onClick={() => setDisplay(2)}
              >
                Sign up
              </Button>
            </VStack>
          </Box>
        </div>
      ) : (
        <Box
          p={8}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          m="20px auto"
          mt={120}
          sx={{ fontFamily: "'Roboto', sans-serif" }}
        >
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              {display === 2 && (
                <FormControl>
                  <FormLabel htmlFor="name" fontWeight="light">
                    Name
                  </FormLabel>
                  <Input
                    id="name"
                    type="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your name"
                    fontWeight="light"
                  />
                </FormControl>
              )}
              <FormControl>
                <FormLabel htmlFor="email" fontWeight="light">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  fontWeight="light"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password" fontWeight="light">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  fontWeight="light"
                />
              </FormControl>
              <Button
                type="submit"
                bg="gray"
                size="lg"
                color="white"
                width="full"
              >
                {display === 1 ? "Log in" : "Sign up"}
              </Button>
            </VStack>
          </form>
        </Box>
      )}
    </div>
  );
}

export default Login;
