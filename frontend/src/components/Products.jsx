import React from 'react';
import {Text,
    Input,
    Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box
} from '@chakra-ui/react';

function Products(props) {

    const products = [
        { id: 1, name: "1025 Dokdo Cleanser", price: "$13.90", category: "Cleanser" },
        { id: 2, name: "mixsoon Bean Essence", price: "$29.75", category: "Essence" },
        { id: 3, name: "BoJ Glow Serum", price: "$30.43", category: "Serum" },
        { id: 4, name: "AM Facial Moisturizing Lotion SPF 50", price: "$30.40", category: "Sunscreen" },
        { id: 5, name: "Logitech MX Master 3 Mouse", price: "$99.99", category: "Accessories" }
        // Add more products as needed
      ];





    return (
        <div>
        <Text ml={5} fontSize="5xl" mt={5}>
        Products
      </Text>
      
      <Box overflowX="auto">
        <TableContainer>
          <Table colorScheme="blackAlpha">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Category</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.id}</Td>
                  <Td>{product.name}</Td>
                  <Td>{product.price}</Td>
                  <Td>{product.category}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
            
        </div>
    );
}

export default Products;