import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Card,
} from "@chakra-ui/react";

import product from "../products.json";

function Products(props) {
  return (
    <Card>
      <Text ml={5} fontSize="5xl" mt={5} mr={10}>
        Products
      </Text>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {product.map((p) => (
              <Tr>
                <Td>{p.product_name}</Td>
                <Td>{p.price}</Td>
                <Td>
                    <Text noOfLines={[1, 2, 3]} style={{ overflowWrap: 'break-word' }}>
                    {`${p.product_description.substring(0, 85)}${p.product_description.length > 85 ? '...' : ''}`}
                    </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default Products;
