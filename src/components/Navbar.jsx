import {
    Box, Button, ButtonGroup, Flex, HStack, IconButton, useBreakpointValue,
  } from '@chakra-ui/react';
  import { useNavigate } from 'react-router-dom';
  import React, { useState, useEffect } from 'react';
  import Logo from '../images/Logo.png'
  
  function Navbar() {
    const isDesktop = useBreakpointValue({
      base: true, sm: false, md: true, lg: true,
    });
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
  
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
          {isDesktop ? (
            <Flex justify="space-between" flex="1">
              {user && (
                <ButtonGroup variant="link" spacing="8">
                  <Button key="Home" onClick={() => navigate('/')}>Home</Button>
                  {['Feed', 'Statistics', 'Notifications'].map((item) => (
                    <Button key={item} onClick={() => navigate(`/${item.toLowerCase()}`)}>{item}</Button>
                  ))}
                  <Button key="Logout" onClick={handleLogout}>Logout</Button>
                </ButtonGroup>
              )}
              <HStack spacing="3">
                {user ? (
                  <Button variant="primary" onClick={() => navigate('/profile')}>{user.name}</Button>
                ) : (
                  <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
                )}
              </HStack>
            </Flex>
          ) : (
            // <IconButton alignSelf="center" marginLeft="auto" marginRight="10px" variant="ghost" icon={} aria-label="Open Menu" />
            <IconButton alignSelf="center" marginLeft="auto" marginRight="10px" variant="ghost" aria-label="Open Menu" />
          )}
        </Flex>
      </Box>
    );
  }
  
  export default Navbar;