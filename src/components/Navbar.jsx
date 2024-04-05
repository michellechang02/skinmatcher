import {
    Box, Button, ButtonGroup, Flex, HStack, IconButton, useBreakpointValue, Input, InputGroup, InputRightElement
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import React, { useState, useEffect } from 'react';
  import { Divider } from "@chakra-ui/react";
  import Logo from '../images/Logo.png'
  import profile from '../images/profile.png'
  import cart from '../images/cart.png'
  
  function Navbar() {
    const isDesktop = useBreakpointValue({
      base: true, sm: false, md: true, lg: true,
    });
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
      console.log('Search for:', searchQuery);
    }
  
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
      navigate('/login');
    };
  
    return (
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Flex>
          <Flex marginEnd={10}>
          <img src="/static/media/Logo.bc46533bbdf7b1e13a05.png" width="150px" alt="Logo" />
          </Flex>
        <InputGroup mt={10}>
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            width={"95%"}
            borderRadius={"25px"}
          />
          <InputRightElement width="auto" mr={5} paddingRight="5%">
            <Button h="1.75rem" size="sm" onClick={handleSearch}>
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
          <Flex justify="space-between" flex="1">
            {user && (
              <ButtonGroup variant="link" spacing="8">
                <Button key="Home" onClick={() => navigate('/')}>Home</Button>
                <Button key="Logout" onClick={handleLogout}>Logout</Button>
              </ButtonGroup>
            )}
            <HStack spacing="3">
              <Button variant="ghost" onClick={() => navigate('/checkout')} leftIcon={<img src={cart} alt="Cart" width="42px" height="42px" />} mt = {1} mr={10} _hover={{ bg: 'transparent' }}/>
              <Button variant="ghost" onClick={() => navigate('/login')} leftIcon={<img src={profile} alt="Login" width="40px" height="40px" />} mr={10} _hover={{ bg: 'transparent' }}/>
            </HStack>
          </Flex>
        </Flex>
        <Box  as="nav" bg="bg-surface" boxShadow="sm">
          <Divider borderWidth = "10"/>
            <HStack spacing="10" justifyContent="center">
              <Button variant="ghost" onClick={() => navigate('/quiz')} mt = {1} mr={10} _hover={{ bg: 'transparent' }} fontFamily = "Roboto" fontWeight = "light"><t>Take the Quiz</t></Button>
              <Button variant="ghost" onClick={() => navigate('/cart')} mt = {1} mr={10} _hover={{ bg: 'transparent' }} fontFamily = "Roboto" fontWeight = "light"><t>Products</t></Button>
              <Button variant="ghost" onClick={() => navigate('/cart')} mt = {1} mr={10} _hover={{ bg: 'transparent' }} fontFamily = "Roboto" fontWeight = "light"><t>Compare</t></Button>
              <Button variant="ghost" onClick={() => navigate('/cart')} mt = {1} mr={10} _hover={{ bg: 'transparent' }} fontFamily = "Roboto" fontWeight = "light"><t>Browse</t></Button>
              <Button variant="ghost" onClick={() => navigate('/cart')} mt = {1} mr={10} _hover={{ bg: 'transparent' }} fontFamily = "Roboto" fontWeight = "light"><t>Cleanser</t></Button>
              <Button variant="ghost" onClick={() => navigate('/cart')} mt = {1} mr={10} _hover={{ bg: 'transparent' }} fontFamily = "Roboto" fontWeight = "light"><t>Sunscreen</t></Button>
              <Button variant="ghost" onClick={() => navigate('/cart')} mt = {1} mr={10} _hover={{ bg: 'transparent' }} fontFamily = "Roboto" fontWeight = "light"><t>Other</t></Button>
            </HStack>
          </Box>
      </Box>
    );
  }
  
  export default Navbar;