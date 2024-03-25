import React from 'react';
import {Box, VStack, Text, Button} from '@chakra-ui/react';
import sohee from '../images/sohee.jpg'

function LandingPage(props) {
    return (
        <div>
            <Box display="flex" justifyContent="space-between" p="5" alignItems="flex-start">
        {/* Container for the three vertically aligned rectangles */}
        <Box display="flex" flexDirection="column" gap="20px">
          {/* Rectangle 1 */}
          <Box
            w="800px"
            h="200px"
            bg="#F5F5F5"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
          >
            <VStack>
            <Text textColor={'black'}>Just for Michelle</Text>
            <Box display="flex" gap="10px">
        {Array.from({ length: 5 }).map((_, index) => (
          <Box
            key={`rectangle-2-${index}`}
            w="120px"
            h="120px"
            bg="white"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="base"
          >
            {`Box ${index + 1}`}
          </Box>
        ))}
      </Box>
      </VStack>
          </Box>

          
          <Box
            w="800px"
            h="200px"
            bg="#F5F5F5"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
          >
             <VStack>
            <Text textColor={'black'}>Dermatologist's Pick</Text>
            <Box display="flex" gap="10px">
        {Array.from({ length: 5 }).map((_, index) => (
          <Box
            key={`rectangle-2-${index}`}
            w="120px"
            h="120px"
            bg="white"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="base"
          >
            {`Box ${index + 1}`}
          </Box>
        ))}
      </Box>
     </VStack>
          </Box>

          {/* Rectangle 3 */}
          <Box
            w="800px"
            h="200px"
            bg="#F5F5F5"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
          >
        <VStack>
        <Text    textColor={'black'}>Trending in Philadelphia, PA</Text>
            <Box display="flex" gap="10px">
        {Array.from({ length: 5 }).map((_, index) => (
          <Box
            key={`rectangle-2-${index}`}
            w="120px"
            h="120px"
            bg="white"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="base"
          >
            {`Box ${index + 1}`}
          </Box>
        ))}
      </Box>
      </VStack>
          </Box>
        </Box>

        {/* Large rectangle on the right */}
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
      boxShadow="md"
      bgImage={sohee}
      paddingTop="70px"
      textColor="white"
      bgPosition="center"
      bgSize="cover"
      fontWeight="500"
      position="relative" // To position children absolutely if needed
    >
      Personalized Skincare Quiz
      {/* Adjusting the Button */}
      <Button 
        bg="black" // Background color set to black
        color="white" // Text color set to white
        _hover={{ bg: 'gray.700' }}
        fontFamily="roboto"
        fontWeight="500"
        marginTop="auto" // Pushes the button to the bottom
        width="full" // Makes the button as wide as its parent container
        alignSelf="stretch" // Ensures it stretches to match the parent width
      >
        Start
      </Button>
    </Box>
      </Box>
        </div>
    );
}

export default LandingPage;