import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Text
  } from '@chakra-ui/react'

  import product from '../products.json'



function Products(props) {





    return (
        <div>
        <Text ml={5} fontSize="5xl" mt={5} mr={10}>
        Products
        </Text>
        <TableContainer>
        <Table variant='simple'>
            <Thead>
            <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Description</Th>
            </Tr>
            </Thead>
            <Tbody>
            {product.map ((p) => <Tr>
                <Td>{p.product_name}</Td>
                <Td>{p.price}</Td>
                <Td>{p.product_description}</Td>
            </Tr>)}
            
            </Tbody>
        </Table>
        </TableContainer>
            
        </div>
    );
}

export default Products;