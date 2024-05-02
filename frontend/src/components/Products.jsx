import React, { useRef, useEffect, useState } from "react";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Tr,
  SimpleGrid,
  Box,
  Text,
  Image,
  Button,
  Card,
} from "@chakra-ui/react";

import products from "../products.json";

function Products(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1);
    }
  };
  return (
    <TableContainer>
      <Table>
        <TableCaption>Products</TableCaption>
        <Tbody>
          <Tr>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
              spacing={8}
              p={4}
            >
              {currentProducts.map((product, index) => (
                <Box key={index}>
                  <Card
                    maxW="xs"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    h="440px"
                  >
                    <Box
                      maxH="200px"
                      overflow="hidden"
                      display="flex"
                      justifyContent="center"
                      mt={5}
                    >
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        maxH="100%"
                        maxW="100%"
                        objectFit="cover"
                        borderRadius="17%"
                      />
                    </Box>
                    <Box p="6">
                      <Box d="flex" alignItems="baseline">
                        <Text
                          fontWeight="semibold"
                          fontSize="lg"
                          style={{
                            whiteSpace: "normal",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {product.product_name}
                        </Text>
                        <Text ml="2" color="gray.500">
                          {product.price}
                        </Text>
                      </Box>
                      <Text
                        mt="2"
                        color="gray.600"
                        height="40px"
                        style={{
                          whiteSpace: "normal",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {product.product_description
                          .split(" ")
                          .slice(0, 15)
                          .join(" ")}{" "}
                        ...
                      </Text>
                    </Box>
                  </Card>
                </Box>
              ))}
            </SimpleGrid>
          </Tr>
        </Tbody>
      </Table>
      <Box mt={4} textAlign="center">
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          <Text>{"<"}</Text>
        </Button>
        <Button
          ml={2}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <Text>{">"}</Text>
        </Button>
      </Box>
    </TableContainer>
  );
}

export default Products;
