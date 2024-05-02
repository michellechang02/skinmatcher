import React from "react";
import { Box, VStack, Text, Button, Image } from "@chakra-ui/react";
import sohee from "../images/sohee.jpg";
import { useNavigate } from "react-router-dom";
import home from "../home.json";

function LandingPage(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        p="5"
        alignItems="flex-start"
      >
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
              <Text textColor={"black"} fontSize="18px">
                Just for You
              </Text>
              <Box display="flex" gap="30px">
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
                    <Image
                      src={home[index].url}
                      alt={`Box image ${index + 1}`}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                    />
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
              <Text textColor={"black"} fontSize="18px">
                Dermatologist's Pick
              </Text>
              <Box display="flex" gap="30px">
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
                    <Image
                      src={home[index + 5].url}
                      alt={`Box image ${index + 6}`}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                    />
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
              <Text textColor={"black"} fontSize="18px">
                Trending in Philadelphia, PA
              </Text>
              <Box display="flex" gap="30px">
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
                    <Image
                      src={home[index + 10].url}
                      alt={`Box image ${index + 11}`}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                    />
                  </Box>
                ))}
              </Box>
            </VStack>
          </Box>
        </Box>

        {/* Large rectangle on the right */}
        <Box
          ml="20px"
          w="600px" // Width of the large rectangle
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
          <Text fontSize="2xl">Personalized Skincare Quizzes</Text>
          {/* Adjusting the Button */}
          <Button
            bg="black" // Background color set to black
            color="white" // Text color set to white
            _hover={{ bg: "gray.700" }}
            fontFamily="roboto"
            fontWeight="500"
            marginTop="auto" // Pushes the button to the bottom
            width="full" // Makes the button as wide as its parent container
            alignSelf="stretch" // Ensures it stretches to match the parent width
            onClick={() => navigate("/quiz")}
          >
            Start
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default LandingPage;
