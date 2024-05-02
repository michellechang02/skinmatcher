import React, { useState, useEffect } from "react";
import { Box, VStack, Text, Button, Divider } from "@chakra-ui/react";
import sohee from "../images/sohee.jpg";

function CheckoutPage(props) {
  const [items, setItems] = useState([
    "1025 Dokdo Cleanser",
    "mixsoon Bean Essence",
  ]);

  const handleClick = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };
  const getItems = () => {
    return items.map((item, index) => (
      <Box key={index} justifyContent="space-between" p="5">
        <Box
          key={index}
          w="750px"
          h="340px"
          bg="#F5F5F5"
          borderRadius="25px"
          borderWidth="2px"
          display="flex"
          gap="10px"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w="30%"
            h="80%"
            marginLeft="20px"
            bgImage={sohee}
            borderColor="#494949"
            borderWidth="1px"
            backgroundSize="cover"
            borderRadius="25px"
          />
          <VStack width="55%" alignItems="left">
            <Text fontSize="25px">{item}</Text>
            <Text fontSize="15px">
              {" "}
              Slightly acidic (pH 5.0 - 6.0), foamy and creamy cleanser purifies
              and removes excess sebum without over-drying. It clears away
              impurities and helps the skin maintain a healthy moisture balance.{" "}
            </Text>
            <Text> In your Sociolla Cart</Text>
            <Text> $13.60 </Text>
          </VStack>
          <Button
            variant="Ghost"
            marginTop="250px"
            _hover={{ color: "gray" }}
            onClick={() => handleClick(index)}
          >
            Remove
          </Button>
        </Box>
      </Box>
    ));
  };
  return (
    <div>
      <div style={{ marginLeft: "7.5%", marginTop: "10px" }}>
        <Text fontFamily="Roboto" fontWeight="light" fontSize="50">
          Check Out
        </Text>
      </div>
      <Box
        display="flex"
        justifyContent="space-between"
        p="5"
        alignItems="flex-start"
        marginTop="-30px"
      >
        <Box display="flex">
          <VStack>
            <div style={{ marginTop: "-10px", marginLeft: "10%" }}>
              {getItems()}
            </div>
          </VStack>
        </Box>
        <Box
          mt="5px"
          ml={10}
          w="400px" // Width of the large rectangle
          h="540px" // Height equal to the total of the three small rectangles including gaps
          bg="gray.200" // Light gray background for contrast
          borderRadius="25px"
          display="flex"
          flexDirection="column" // Adjusted for vertical layout
          justifyContent="flex-start" // Align items at the start of the container
          paddingTop="50px"
          textColor="white"
          bgPosition="center"
          bgSize="cover"
          bgColor="#F5F5F5"
          borderWidth="2px"
          fontWeight="500"
          position="relative" // To position children absolutely if needed
        >
          <Box textAlign="center">
            <Text color="black">Order Summary</Text>
          </Box>
          <VStack marginTop="25px" alignItems="left" marginLeft="50px">
            <Box display="flex" justifyContent="space-between">
              <Text fontWeight="200" color="black">
                Sociolla Total:{" "}
              </Text>
              <Box textAlign="right" marginRight="50px">
                <Text fontWeight="200" color="black">
                  $13.60{" "}
                </Text>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text fontWeight="200" color="black">
                Sephora Total:{" "}
              </Text>
              <Box textAlign="right" marginRight="50px">
                <Text fontWeight="200" color="black">
                  $0{" "}
                </Text>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text fontWeight="200" color="black">
                Amazon Total:{" "}
              </Text>
              <Box textAlign="right" marginRight="50px">
                <Text fontWeight="200" color="black">
                  $0{" "}
                </Text>
              </Box>
            </Box>
          </VStack>
          <VStack marginTop="25px" alignItems="left" marginLeft="50px">
            <Box display="flex" justifyContent="space-between">
              <Text fontWeight="200" color="black">
                Total Before Tax:{" "}
              </Text>
              <Box textAlign="right" marginRight="50px">
                <Text fontWeight="200" color="black">
                  $13.60{" "}
                </Text>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text fontWeight="200" color="black">
                Estimated Tax:{" "}
              </Text>
              <Box textAlign="right" marginRight="50px">
                <Text fontWeight="200" color="black">
                  $1.69{" "}
                </Text>
              </Box>
            </Box>
          </VStack>
          <Box display="flex" justifyContent="center">
            <Divider width="80%" borderColor="black" />
          </Box>
          <Box textAlign="center">
            <Text fontWeight="200" color="black" marginTop="10px">
              Order Total: $15.29
            </Text>
          </Box>
          <VStack marginTop="40px">
            <Button
              bg="black"
              color="white"
              _hover={{ bg: "gray.700" }}
              fontFamily="roboto"
              fontWeight="375"
              width="65%"
              borderRadius="12px"
            >
              Checkout Your Sociolla Cart
            </Button>
            <Button
              bg="black"
              color="white"
              _hover={{ bg: "gray.700" }}
              fontFamily="roboto"
              fontWeight="375"
              width="65%"
              borderRadius="12px"
            >
              Checkout Your Sephora Cart
            </Button>
            <Button
              bg="black"
              color="white"
              _hover={{ bg: "gray.700" }}
              fontFamily="roboto"
              fontWeight="375"
              width="65%"
              borderRadius="12px"
            >
              Checkout Your Amazon Cart
            </Button>
          </VStack>
        </Box>
      </Box>
    </div>

    //   <div>

    // </div>
  );
}

export default CheckoutPage;
