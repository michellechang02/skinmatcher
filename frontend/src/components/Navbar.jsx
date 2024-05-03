import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Divider } from "@chakra-ui/react";
import logo from "../images/whitelogo.png";
import profile from "../images/profile.png";
import cart from "../images/cart.png";
import axios from "axios";
import config from "../config.json";

function Navbar() {
  const isDesktop = useBreakpointValue({
    base: true,
    sm: false,
    md: true,
    lg: true,
  });
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    //prevent default
    e.preventDefault();
    console.log(searchQuery);
    const encodedSearch = encodeURIComponent(searchQuery);

    try {
      const response = await axios.get(
        `${config.serverURL}/search?q=${encodedSearch}`
      );
      console.log(response.data[0]);

      const productData = response.data[0];
      navigate("/product", { state: productData });

      //reset Search Query
      setSearchQuery("");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  // const getUser = async () => {
  //   const res = await getAuth();
  //   if (res.status === 200) {
  //     setUser(res.data);
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <Box as="nav" bg="bg-surface" boxShadow="sm">
      <Flex>
        <img
          src={logo}
          width="70px"
          alt="Logo"
          style={{ marginLeft: "30px" }}
          onClick={() => navigate("/")}
        />
        <Button
          variant="ghost"
          onClick={() => navigate("/quiz")}
          ml={10}
          mt={5}
          mr={10}
          _hover={{ bg: "transparent" }}
          fontFamily="Roboto"
          fontWeight="bold"
        >
          <t>Quizzes</t>
        </Button>
        <Button
          variant="ghost"
          onClick={() => navigate("/compare")}
          mt={5}
          mr={10}
          _hover={{ bg: "transparent" }}
          fontFamily="Roboto"
          fontWeight="light"
        >
          <t>Compare</t>
        </Button>

        <Button
          variant="ghost"
          onClick={() => navigate("/products")}
          mt={5}
          mr={10}
          _hover={{ bg: "transparent" }}
          fontFamily="Roboto"
          fontWeight="light"
        >
          <t>Products</t>
        </Button>

        <form width="auto" onSubmit={handleSearch} style={{ width: "100%" }}>
          <InputGroup mt={5} mb={2} ml={2}>
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              width={"95%"}
              borderRadius={"25px"}
            />
            <InputRightElement width="auto" mr={5} paddingRight="5%">
              <Button h="1.75rem" size="sm" type="submit">
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>

        <Flex justify="space-between" flex="1">
          <HStack spacing="3">
            {user ? (
              <Button
                variant="ghost"
                onClick={() => navigate("/profile")}
                leftIcon={
                  <img src={profile} alt="Profile" width="40px" height="40px" />
                }
                mr={10}
                _hover={{ bg: "transparent" }}
              />
            ) : (
              <Button
                variant="ghost"
                onClick={() => navigate("/login")}
                leftIcon={
                  <img src={profile} alt="Login" width="40px" height="40px" />
                }
                mr={10}
                _hover={{ bg: "transparent" }}
              />
            )}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
