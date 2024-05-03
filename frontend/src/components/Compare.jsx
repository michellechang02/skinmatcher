import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Image,
  Input,
  HStack,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Badge
} from "@chakra-ui/react";
import home from "../home.json";
import axios from "axios";
import config from "../config.json";
import products from "../products.json";

function Compare(props) {
  const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");
  const [product3, setProduct3] = useState("");

  const [product1All, setProduct1All] = useState([]);
  const [product2All, setProduct2All] = useState([]);
  const [product3All, setProduct3All] = useState([]);

  const [recommended, setRecommended] = useState([]);

  const [bestPrice, setBestPrice] = useState(10000);
  const [bestPriceIndex, setBestPriceIndex] = useState(0);

  const [mostPopular, setMostPopular] = useState(0);

  function isEmpty(array) {
    return Array.isArray(array) && array.length === 0;
  }

  const handleProduct1 = async (e) => {
    //prevent Default
    e.preventDefault();
    console.log(product1);

    const encoded1 = encodeURIComponent(product1);

    try {
      const response = await axios.get(
        `${config.serverURL}/search?q=${encoded1}`
      );
      setProduct1All(response.data[0]);
      if (response.data[0].price < bestPrice) {
        setBestPrice(response.data[0].price);
        setBestPriceIndex(1);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }

    setProduct1("");
  };

  const handleProduct2 = async (e) => {
    //prevent Default
    e.preventDefault();

    console.log(product2);

    const encoded2 = encodeURIComponent(product2);

    try {
      const response = await axios.get(
        `${config.serverURL}/search?q=${encoded2}`
      );
      setProduct2All(response.data[0]);
      console.log(product2All);
      if (response.data[0].price < bestPrice) {
        setBestPrice(response.data[0].price);
        setBestPriceIndex(2);
      }
      if (Math.random() < 0.5) {
        setMostPopular(2);
      } else {
        setMostPopular(1);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }

    setProduct2("");
  };

  const handleProduct3 = async (e) => {
    //prevent Default
    e.preventDefault();

    console.log(product3);

    const encoded3 = encodeURIComponent(product3);

    try {
      const response = await axios.get(
        `${config.serverURL}/search?q=${encoded3}`
      );
      setProduct3All(response.data[0]);

      if (response.data[0].price < bestPrice) {
        setBestPrice(response.data[0].price);
        setBestPriceIndex(3);
      }
      if (Math.random() < 0.5) {
        setMostPopular(3);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }

    setProduct3("");
  };


  useEffect(() => {
    let rec = [];

    while (rec.length < 5) {
      let ix = Math.floor(Math.random() * 10);
      if (!rec.includes(products[ix])) {
        rec.push(products[ix]);
      }
    }
    
    console.log(rec);
    setRecommended(rec);
    console.log(recommended);
  }, [])

  return (
    <div>
      <Text ml={5} fontSize="5xl" mt={5}>
        Compare
      </Text>
      <HStack spacing="20px" ml={7}>
      {recommended.map((rec) => {
        return <Badge variant="solid">{rec.product_name}</Badge>; 
      })}
        
      </HStack>
      <Flex justifyContent="space-around" alignItems="center">
        <Box w="400px" h="100px" bg="white" mt={2}>
          <VStack spacing={2} align="stretch">
            <Text>Product 1:</Text>
            <HStack>
              <Input
                placeholder="Enter details for Product 1"
                value={product1}
                onChange={(e) => setProduct1(e.target.value)}
              />
              <Button colorScheme="blackAlpha" onClick={handleProduct1}>
                Add
              </Button>
            </HStack>
          </VStack>
        </Box>
        <Box w="400px" h="100px" bg="white" mt={2}>
          <VStack spacing={2} align="stretch">
            <Text>Product 2:</Text>
            <HStack>
              <Input
                placeholder="Enter details for Product 2"
                value={product2}
                onChange={(e) => setProduct2(e.target.value)}
              />
              <Button colorScheme="blackAlpha" onClick={handleProduct2}>
                Add
              </Button>
            </HStack>
          </VStack>
        </Box>
        <Box w="400px" h="100px" bg="white" mt={2}>
          <VStack spacing={2} align="stretch">
            <Text>Product 3:</Text>
            <HStack>
              <Input
                placeholder="Enter details for Product 3"
                value={product3}
                onChange={(e) => setProduct3(e.target.value)}
              />
              <Button colorScheme="blackAlpha" onClick={handleProduct3}>
                Add
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Flex>
      <Flex justifyContent="space-around" alignItems="center" mb={10}>
        <Box w="400px" h="550px" bg="#F5F5F5" boxShadow="md" mt={2}>
          {!isEmpty(product1All) && (
            <div>
              <Text textAlign="center" mt={1} fontSize="40px">
                {product1All.product_name}
              </Text>
              {mostPopular === 1 && (
                <Text textAlign="center" mt={1} fontSize="20px">
                  Most Popular!
                </Text>
              )}
              <Box
                maxH="350px"
                overflow="hidden"
                display="flex"
                justifyContent="center"
                p={10}
              >
                <Image
                  src={product1All.image_url}
                  maxH="100%"
                  maxW="100%"
                  objectFit="cover"
                  borderRadius="17%"
                />
              </Box>
              <Text
                textAlign="center"
                mt={1}
                textColor={bestPriceIndex === 1 ? "green" : "black"}
                fontWeight={bestPriceIndex === 1 ? "bold" : "normal"}
              >
                Price: ${product1All.price}
              </Text>
              <Text textAlign="center" mt={1}>
                Product Type: {product1All.product_type}
              </Text>
              <Text textAlign="center" mt={1}>
                Product Brand: {product1All.product_brand}
              </Text>{" "}
            </div>
          )}
        </Box>

        <Box w="400px" h="550px" bg="#F5F5F5" boxShadow="md" mt={2}>
          {!isEmpty(product2All) && (
            <div>
              <Text textAlign="center" mt={1} fontSize="40px">
                {product2All.product_name}
              </Text>
              {mostPopular === 2 && (
                <Text textAlign="center" mt={1} fontSize="20px">
                  Most Popular!
                </Text>
              )}
              <Box
                maxH="350px"
                overflow="hidden"
                display="flex"
                justifyContent="center"
                p={10}
              >
                <Image
                  src={product2All.image_url}
                  maxH="100%"
                  maxW="100%"
                  objectFit="cover"
                  borderRadius="17%"
                />
              </Box>
              <Text
                textAlign="center"
                mt={1}
                textColor={bestPriceIndex === 2 ? "green" : "black"}
                fontWeight={bestPriceIndex === 2 ? "bold" : "normal"}
              >
                Price: ${product2All.price}
              </Text>
              <Text textAlign="center" mt={1}>
                Product Type: {product2All.product_type}
              </Text>
              <Text textAlign="center" mt={1}>
                Product Brand: {product2All.product_brand}
              </Text>
            </div>
          )}
        </Box>

        <Box w="400px" h="550px" bg="#F5F5F5" boxShadow="md" mt={2}>
          {!isEmpty(product3All) && (
            <div>
              <Text textAlign="center" mt={1} fontSize="40px">
                {product3All.product_name}
              </Text>
              {mostPopular === 3 && (
                <Text textAlign="center" mt={1} fontSize="20px">
                  Most Popular!
                </Text>
              )}
              <Box
                maxH="350px"
                overflow="hidden"
                display="flex"
                justifyContent="center"
                p={10}
              >
                <Image
                  src={product3All.image_url}
                  maxH="100%"
                  maxW="100%"
                  objectFit="cover"
                  borderRadius="17%"
                />
              </Box>
              <Text
                textAlign="center"
                mt={1}
                textColor={bestPriceIndex === 3 ? "green" : "black"}
                fontWeight={bestPriceIndex === 3 ? "bold" : "normal"}
              >
                Price: ${product3All.price}
              </Text>
              <Text textAlign="center" mt={1}>
                Product Type: {product3All.product_type}
              </Text>
              <Text textAlign="center" mt={1}>
                Product Brand: {product3All.product_brand}
              </Text>
            </div>
          )}
        </Box>
      </Flex>
    </div>
  );
}

export default Compare;
