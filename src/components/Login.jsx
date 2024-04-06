import React, {useState} from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast, VStack, Text,
CloseButton} from '@chakra-ui/react';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const toast = useToast();
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting naturally
        toast({
            title: "Login Attempt",
            description: `Username: ${username}, Password: ${password}`,
            status: "info", // You can keep 'info' or change it as needed
            duration: 1000,
            isClosable: true,
            position: "bottom-middle",
            render: ({ onClose }) => ( // Retrieve onClose function from render props
                <Box color="white" p={3} bg="gray.600" borderRadius="md" borderWidth="1px" borderColor="gray.500" position="relative">
                    <Text fontWeight="bold">Login Attempt</Text>
                    <Text>Username: {username}, Password: {password}</Text>
                    <CloseButton position="absolute" right="8px" top="8px" onClick={onClose} />
                </Box>
            ),
        });
        // Here you would usually handle the login logic, perhaps sending a request to a server
    };
    return (
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" m="20px auto" mt={120}
        sx={{ fontFamily: "'Roboto', sans-serif" }}>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                    <FormControl>
                        <FormLabel htmlFor="username" fontWeight="light">Username</FormLabel>
                        <Input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            fontWeight="light"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="password" fontWeight="light">Password</FormLabel>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            fontWeight="light"
                        />
                    </FormControl>
                    <Button type="submit" bg="gray" size="lg" color="white" width="full">
                        Log in
                    </Button>
                </VStack>
            </form>
        </Box>
    );
}

export default Login;