import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

function Product(props) {
  const location = useLocation();
  const product = location.state;

  return (
    <Container maxW="container.md" p={4} centerContent>
      <Box padding="4" bg="gray.100" maxW="3xl" borderRadius="lg">
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="xl">
            {product.product_name}
          </Heading>
          <Text fontSize="md">{product.product_description}</Text>
          <Text fontWeight="bold">Price: ${product.price}</Text>
          <Text>Brand: {product.product_brand}</Text>
          <Text>Product Type: {product.product_type}</Text>
        </VStack>
      </Box>
    </Container>
  );
}

export default Product;
