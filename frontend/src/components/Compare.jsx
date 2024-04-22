import React, {useEffect, useState} from 'react';
import { ChakraProvider, Box, Flex, Text, Image, Input, HStack, VStack, Button,
    FormControl, FormLabel} from '@chakra-ui/react';
import home from '../home.json'

function Compare(props) {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');



    function handleInput1() {
        console.log(input1);
        setInput1('');
    }

    function handleInput2() {
        console.log(input2);
        setInput2('');
    }

    function handleInput3() {
        console.log(input3); 
        setInput3('');
    }

    useEffect(() => {

    }, [])






    return (
        <div>
        <Text ml={5} fontSize="5xl" mt={5}>
        Compare
      </Text>
      <Flex justifyContent="space-around" alignItems="center">
        <Box w="400px" h="100px" bg="white" mt={2} mb={1}>
          <VStack spacing={2} align="stretch">
            <Text>Product 1:</Text>
            <HStack>
              <Input placeholder="Enter details for Product 1" value={input1} onChange={(e) => setInput1(e.target.value)}/>
              <Button colorScheme="blackAlpha" onClick={handleInput1}>Add</Button>
            </HStack>
          </VStack>
        </Box>
        <Box w="400px" h="100px" bg="white" mt={2} mb={1}>
          <VStack spacing={2} align="stretch">
            <Text>Product 2:</Text>
            <HStack>
              <Input placeholder="Enter details for Product 2" value={input2} onChange={(e) => setInput2(e.target.value)}/>
              <Button colorScheme="blackAlpha" onClick={handleInput2}>Add</Button>
            </HStack>
          </VStack>
        </Box>
        <Box w="400px" h="100px" bg="white" mt={2} mb={1}>
          <VStack spacing={2} align="stretch">
            <Text>Product 3:</Text>
            <HStack>
              <Input placeholder="Enter details for Product 3" value={input3} onChange={(e) => setInput3(e.target.value)}/>
              <Button colorScheme="blackAlpha" onClick={handleInput3}>Add</Button>
            </HStack>
          </VStack>
        </Box>
      </Flex>
            <Flex justifyContent="space-around" alignItems="center">
                
        <Box  w="400px" h="550px"  bg="#F5F5F5" boxShadow="md" mt={2}>
        {input1 !== '' &&  <div>
            <Text textAlign="center" mt={2} fontSize="40px">{input1}</Text>
            
            <Image
              src={home[0].url}
              width="90%"
              height="60%"
              objectFit="cover"
              ml={5}
            />
            <Text textAlign="center" mt={2}>Price: $2.00</Text>
            <Text ml={5}>Based on your:</Text>
            <HStack width="80%" justifyContent="space-between">
            <Text ml={5}>Desired Product</Text>
            <Text ml={5}>70%</Text>
            </HStack>
            <HStack width="80%" justifyContent="space-between">
            <Text ml={5}>Acne Control</Text>
            <Text ml={5}>60%</Text>
            </HStack>
            <HStack width="80%" justifyContent="space-between">
            <Text ml={5}>Face Washing Routine</Text>
            <Text ml={5}>50%</Text>
            </HStack></div>
         }
        </Box>
        
        
        <Box w="400px" h="550px" bg="#F5F5F5" boxShadow="md" mt={2}>
        {input2 !== '' &&  <div>
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
        <HStack width="80%" justifyContent="space-between">
        <Text ml={5}>Desired Product</Text>
        <Text ml={5}>70%</Text>
        </HStack>
        <HStack width="80%" justifyContent="space-between">
        <Text ml={5}>Acne Control</Text>
        <Text ml={5}>60%</Text>
        </HStack>
        <HStack width="80%" justifyContent="space-between">
        <Text ml={5}>Face Washing Routine</Text>
        <Text ml={5}>50%</Text>
        </HStack></div>
         }
         
        </Box>
       
        
        <Box w="400px" h="550px" bg="#F5F5F5" boxShadow="md" mt={2}>
        {input3 !== '' && <div>
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
        <HStack width="80%" justifyContent="space-between">
        <Text ml={5}>Desired Product</Text>
        <Text ml={5}>70%</Text>
        </HStack>
        <HStack width="80%" justifyContent="space-between">
        <Text ml={5}>Acne Control</Text>
        <Text ml={5}>60%</Text>
        </HStack>
        <HStack width="80%" justifyContent="space-between">
        <Text ml={5}>Face Washing Routine</Text>
        <Text ml={5}>50%</Text>
        </HStack></div>
        }
        </Box>
       
      </Flex>
        </div>
    );
}

export default Compare;