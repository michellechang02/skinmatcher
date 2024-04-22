import React from 'react';
import { ChakraProvider, Box, Flex, Text, Image} from '@chakra-ui/react';
import home from '../home.json'

function Compare(props) {
    return (
        <div>
            <Text ml={5} fontSize="5xl" mt={5}>
        Compare
      </Text>
            <Flex justifyContent="space-around" alignItems="center">
        <Box  w="400px" h="550px"  bg="#F5F5F5" boxShadow="md" mt={2}>
            <Text textAlign="center" mt={2} fontSize="40px">Product 1</Text>
            
            <Image
              src={home[0].url}
              width="90%"
              height="60%"
              objectFit="cover"
              ml={5}
            />
            <Text textAlign="center" mt={2}>Price: $2.00</Text>
            <Text ml={5}>Based on your:</Text>
            <Text ml={5}>Desired Product</Text>
            <Text ml={5}>Acne Control</Text>
            <Text ml={5}>Face Washing Routine</Text>
        </Box>
        <Box w="400px" h="550px" bg="#F5F5F5" boxShadow="md" mt={2}>
        <Text textAlign="center" mt={2} fontSize="40px">Product 2</Text>
        
            <Image
              src={home[1].url}
              width="90%"
              height="60%"
              objectFit="cover"
              ml={5}
            />
        <Text textAlign="center" mt={2}>Price: $1.00</Text>
        <Text ml={5}>Based on your:</Text>
        <Text ml={5}>Desired Product</Text>
            <Text ml={5}>Acne Control</Text>
            <Text ml={5}>Face Washing Routine</Text>
        </Box>
        <Box w="400px" h="550px" bg="#F5F5F5" boxShadow="md" mt={2}>
        <Text textAlign="center" mt={2} fontSize="40px">Product 3</Text>
        
            <Image
              src={home[5].url}
              width="90%"
              height="60%"
              objectFit="cover"
              ml={5}
            />
        <Text textAlign="center" mt={2}>Price: $2.00</Text>
        <Text ml={5}>Based on your:</Text>
        <Text ml={5}>Desired Product</Text>
        <Text ml={5}>Acne Control</Text>
        <Text ml={5}>Face Washing Routine</Text>
        </Box>
      </Flex>
        </div>
    );
}

export default Compare;