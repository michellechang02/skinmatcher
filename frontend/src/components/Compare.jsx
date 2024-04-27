import React, {useState} from 'react';
import { ChakraProvider, Box, Flex, Text, Image, Input, HStack, VStack, Button,
    FormControl, FormLabel} from '@chakra-ui/react';
import home from '../home.json'
import axios from 'axios';

function Compare(props) {

    const [product1, setProduct1] = useState('');
    const [product2, setProduct2] = useState('');
    const [product3, setProduct3] = useState('');

    const [product1All, setProduct1All] = useState([]);
    const [product2All, setProduct2All] = useState([]);
    const [product3All, setProduct3All] = useState([]);

    function isEmpty(array) {
      return Array.isArray(array) && array.length === 0
    }

    const handleProduct1 = async(e) => {
      //prevent Default
      e.preventDefault();
      console.log(product1);

      const encoded1 = encodeURIComponent(product1);

      try {
        const response = await axios.get(`http://localhost:8000/search?q=${encoded1}`);
        setProduct1All(response.data[0]);

      } catch (error) {
        console.log(error);
        alert(error.message);
      }


      setProduct1('');

    }

    const handleProduct2 = async(e) => {
      //prevent Default
      e.preventDefault();

      console.log(product2);

      const encoded2 = encodeURIComponent(product2);

      try {
        const response = await axios.get(`http://localhost:8000/search?q=${encoded2}`);
        setProduct2All(response.data[0]);
        console.log(product2All);

      } catch (error) {
        console.log(error);
        alert(error.message);
      }


      setProduct2('');
    }

    const handleProduct3 = async(e) => {
      //prevent Default
      e.preventDefault();

      console.log(product3);

      const encoded3 = encodeURIComponent(product3);

      try {
        const response = await axios.get(`http://localhost:8000/search?q=${encoded3}`);
        setProduct3All(response.data[0]);

      } catch (error) {
        console.log(error);
        alert(error.message);
      }

      setProduct3('');
    }

    

    

    

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
              <Input placeholder="Enter details for Product 1" value={product1} onChange={(e) => setProduct1(e.target.value)}/>
              <Button colorScheme="blackAlpha" onClick={handleProduct1}>Add</Button>
            </HStack>
          </VStack>
        </Box>
        <Box w="400px" h="100px" bg="white" mt={2} mb={1}>
          <VStack spacing={2} align="stretch">
            <Text>Product 2:</Text>
            <HStack>
              <Input placeholder="Enter details for Product 2" value={product2} onChange={(e) => setProduct2(e.target.value)}/>
              <Button colorScheme="blackAlpha" onClick={handleProduct2}>Add</Button>
            </HStack>
          </VStack>
        </Box>
        <Box w="400px" h="100px" bg="white" mt={2} mb={1}>
          <VStack spacing={2} align="stretch">
            <Text>Product 3:</Text>
            <HStack>
              <Input placeholder="Enter details for Product 3" value={product3} onChange={(e) => setProduct3(e.target.value)}/>
              <Button colorScheme="blackAlpha" onClick={handleProduct3}>Add</Button>
            </HStack>
          </VStack>
        </Box>
      </Flex>
            <Flex justifyContent="space-around" alignItems="center">
            
            <Box  w="400px" h="550px"  bg="#F5F5F5" boxShadow="md" mt={2}>
            {!isEmpty(product1All)   && ( <div>
            <Text textAlign="center" mt={2} fontSize="40px">{product1All.product_name}</Text>
            <Image
              src={home[0].url}
              width="90%"
              height="60%"
              objectFit="cover"
              ml={5}
            />
            <Text textAlign="center" mt={2}>Price: ${product1All.price}</Text>
            <Text textAlign="center" mt={2}>Product Type: {product1All.product_type}</Text>
            <Text textAlign="center" mt={2}>Product Brand: {product1All.product_brand}</Text> </div>
            ) }
            </Box>
         
        
            <Box  w="400px" h="550px"  bg="#F5F5F5" boxShadow="md" mt={2}>
            {!isEmpty(product2All)  && ( <div>
            <Text textAlign="center" mt={2} fontSize="40px">{product2All.product_name}</Text>
            <Image
              src={home[1].url}
              width="90%"
              height="60%"
              objectFit="cover"
              ml={5}
            />
            <Text textAlign="center" mt={2}>Price: ${product2All.price}</Text>
            <Text textAlign="center" mt={2}>Product Type: {product2All.product_type}</Text>
            <Text textAlign="center" mt={2}>Product Brand: {product2All.product_brand}</Text></div>
            ) }
            </Box>
         
        
            <Box  w="400px" h="550px"  bg="#F5F5F5" boxShadow="md" mt={2}>
            {!isEmpty(product3All)  && ( <div>
            <Text textAlign="center" mt={2} fontSize="40px">{product3All.product_name}</Text>
            <Image
              src={home[5].url}
              width="90%"
              height="60%"
              objectFit="cover"
              ml={5}
            />
            <Text textAlign="center" mt={2}>Price: ${product3All.price}</Text>
            <Text textAlign="center" mt={2}>Product Type: {product3All.product_type}</Text>
            <Text textAlign="center" mt={2}>Product Brand: {product3All.product_brand}</Text>
            </div>) }
            </Box>
         
      </Flex>
        </div>
    );
}

export default Compare;