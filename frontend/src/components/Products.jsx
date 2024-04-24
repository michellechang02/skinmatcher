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

function Products(props) {
    return (
        <div>
        <Text ml={5} fontSize="5xl" mt={5}>
        Products
        </Text>
        <TableContainer>
        <Table variant='simple'>
            <Thead>
            <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Recommendation</Th>
            </Tr>
            </Thead>
            <Tbody>
            <Tr>
                <Td>Product1</Td>
                <Td>$29.00</Td>
                <Td>70.5%</Td>
            </Tr>
            <Tr>
                <Td>Product2</Td>
                <Td>$12.00</Td>
                <Td>30.4%</Td>
            </Tr>
            </Tbody>
        </Table>
        </TableContainer>
            
        </div>
    );
}

export default Products;