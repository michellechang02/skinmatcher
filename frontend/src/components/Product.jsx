import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Container, Heading, Text, VStack, Image, HStack} from "@chakra-ui/react";
import products from "../products.json";

function Product(props) {
  const location = useLocation();
  const product = location.state;

  return (
   
    <Container maxW="container.md" p={4} centerContent>
      <Box bg="white" maxW="3xl" borderRadius="lg" border="2px" borderColor="black" padding="20px">
        <VStack spacing={4} align="center">
          <Heading as="h1" size="xl">
            {product.product_name}
          </Heading>
          <HStack>
          <Image
            src={product.image_url}
            alt={product.name}
            maxH="50%"
            maxW="50%"
            objectFit="cover"
            borderRadius="17%"
          />
          <VStack align="stretch" ml="100px">
          <Text fontWeight="bold">Price: ${product.price}</Text>
          <Text>Brand: {product.product_brand}</Text>
          <Text>Product Type: {product.product_type}</Text>
          </VStack>
          </HStack>
          <Text fontSize="md" ml={10} mr={10}>{product.product_description}</Text>
          
        </VStack>
      </Box>
    </Container>
    
  );
}

export default Product;
