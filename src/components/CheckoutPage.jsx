import React from 'react';
import {Box, VStack, Text, Button} from '@chakra-ui/react';
import sohee from '../images/sohee.jpg'


function getItems() {
  const items = ["1025 Dokdo Cleanser", "mixsoon Bean Essence"];

  return items.map((item, index) => (
    <Box key={index} justifyContent="space-between" p="5">
        <Box
          key={index}
          w="620px"
          h="340px"
          bg="#F5F5F5"
          borderRadius="25px"
          borderWidth = "1px"
          borderColor="black"
          display="flex"
          gap="10px"
          alignItems="center"
          justifyContent="center"
        >
          <Box
          w="30%"
          h="80%"
          bgImage={sohee}
          backgroundSize="cover"
          borderRadius="25px"
          />
          <VStack width = "55%">
            <Text marginLeft="-187px">{item}</Text>
            <Text> Slightly acidic (pH 5.0 - 6.0), foamy and creamy cleanser purifies and removes excess sebum without over-drying. It clears away impurities and helps the skin maintain a healthy moisture balance. </Text>
            <Text marginLeft="-187px"> In your Sociolla Cart</Text>
            <Text marginLeft="-187px"> $13.60 </Text>
          </VStack>
        </Box>
    </Box>
  ));
}


function CheckoutPage(props) {
    return (

    <div>
      <div style={{ marginLeft: '7.5%', marginTop: '10px' }}>
        <Text fontFamily="Roboto" fontWeight="light" fontSize="50">
          Check Out
        </Text>
      </div>
      <Box display="flex" justifyContent="space-between" p="5" alignItems="flex-start" marginTop="-30px">
        <Box display="flex">
          <VStack>
            <div style={{ marginTop: '-10px', marginLeft: "10%" }}>
              {getItems()}
            </div>
          </VStack>
        </Box>
      <Box
        ml={10}
        w="500px" // Width of the large rectangle
        h="640px" // Height equal to the total of the three small rectangles including gaps
        bg="gray.200" // Light gray background for contrast
        borderRadius="lg"
        display="flex"
        flexDirection="column" // Adjusted for vertical layout
        justifyContent="flex-start" // Align items at the start of the container
        alignItems="center" // Center items horizontally
        paddingTop="70px"
        textColor="white"
        bgPosition="center"
        bgSize="cover"
        fontWeight="500"
        position="relative" // To position children absolutely if needed
        >
          Order Summary
        {/* Adjusting the Button */}
        <Button 
          bg="black" // Background color set to black
          color="white" // Text color set to white
          _hover={{ bg: 'gray.700' }}
          fontFamily="roboto"
          fontWeight="500"
          marginTop="auto" // Pushes the button to the bottom
          width="30%" // Makes the button as wide as its parent container
          alignSelf="stretch" // Ensures it stretches to match the parent width
        >
          Start
        </Button>
      </Box>
    </Box>
  </div>
      
    //   <div>

    // </div>
    );
}

export default CheckoutPage;