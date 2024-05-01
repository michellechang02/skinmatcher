import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Input,
  VStack,
  Button,
  Text,
  HStack,
  Image
} from "@chakra-ui/react";
import "./quiz.css";
import warm from '../images/warm.jpg'

const ColorAnalysis = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [slideDirection, setSlideDirection] = useState("left");
  const [currentIndex, setIndex] = useState(0);

  const colorList = [
    ["#f098c3", "#eda28c"],
    ["#62af5f", "#4eb98a"],
    ["#da2f4b", "#e04638"],
    ["#652e1f", "#353b5e"],
    ["#d0b566", "#d6d6d6"],
  ];

  const [color, setRectColor] = useState(colorList[0][0]);

  const [questionStates, setQuestionStates] = useState([
    "green",
    "unseen",
    "unseen",
    "unseen",
    "unseen",
  ]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleOptionChange = (option) => {
    const isSelected = selectedOptions.includes(option);
    setSelectedOptions(
      isSelected
        ? selectedOptions.filter((o) => o !== option)
        : [...selectedOptions, option]
    );
  };

  const colorChange = (color) => {
    setRectColor(color);
  };

  const handleContinue = () => {
    setSlideDirection("slide-out");
    setTimeout(() => {
      setSlideDirection("slide-in");
      setSelectedOptions([]);

      const updatedStates = [...questionStates];
      updatedStates[currentIndex + 1] = "green";
      for (let i = 0; i < currentIndex + 1; i++) {
        updatedStates[i] = "light-green";
      }

      setQuestionStates(updatedStates);
      if (currentIndex + 1 < 5) {
        setRectColor(colorList[currentIndex + 1][0]);
      }

      setIndex(currentIndex + 1);
    }, 500);
  };
  const [slideProgress, setSlideProgress] = useState(0);

  useEffect(() => {
    const handleSlideProgress = () => {
      const slideInElement = document.querySelector(".slide-out");
      if (slideInElement) {
        const slideInRect = slideInElement.getBoundingClientRect();
        const slideInWidth = slideInRect.width;
        const windowWidth = window.innerWidth;
        const progress = (windowWidth - slideInWidth) / windowWidth;
        setSlideProgress(progress);
      }
    };

    window.addEventListener("resize", handleSlideProgress);
    handleSlideProgress();

    return () => {
      window.removeEventListener("resize", handleSlideProgress);
    };
  }, []);

  const buttonOpacity = slideDirection === "slide-out" ? 0 : 1;

  // function getRec() {
  //   const productNumber = Math.floor(Math.random() * data.length);
  //   setRecommended(data[productNumber]);
  //   // return (
  //   //   <Box flex="1" height="100%">
  //   //     <Image mt={5} ml={5} src={recommended.url} alt="Dan Abramov" />
  //   //   </Box>
  //   // );
  // }

  // useEffect(() => {
  //   if (currentIndex === 6) {
  //     getRec();
  //   }
  // }, [currentIndex]);

  return (
    <HStack ml={5} mr={5} w="100%">
      <Box mt={-14} w="100%">
        {currentIndex < 5 ? (
          <>
            <Text mb={4}>Pick the color that best suits you</Text>
            <Flex ml="35px" justifyContent="center" alignItems="center">
              <Box
                display="flex"
                alignItems="center"
                className={slideDirection}
              >
                <Box
                  position="relative"
                  overflow="hidden"
                  width="500px"
                  height="400px"
                  background={color}
                  borderRadius="10%"
                >
                  <Box
                    width="70%"
                    height="100%"
                    borderRadius="50%"
                    background="white"
                    border={`30px solid ${color}`}
                    position="absolute"
                    textAlign="center"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    overflow="hidden"
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="user face"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <Text fontSize="xl" mt="140px">
                        Upload a picture of yourself!
                      </Text>
                    )}
                  </Box>
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    backgroundColor="#e3e3e3"
                    zIndex="-1"
                  />
                  <Input
                    type="file"
                    accept="image/*"
                    position="absolute"
                    opacity="0"
                    width="100%"
                    height="100%"
                    top="0"
                    left="0"
                    cursor="pointer"
                    onChange={handleImageUpload}
                  />
                </Box>
                <VStack>
                  <Box
                    ml="20px"
                    borderRadius="100%"
                    width="100px"
                    height="100px"
                    bg={colorList[currentIndex][0]}
                    onClick={() => colorChange(colorList[currentIndex][0])}
                  />
                  <Box
                    ml="20px"
                    borderRadius="100%"
                    width="100px"
                    height="100px"
                    bg={colorList[currentIndex][1]}
                    onClick={() => colorChange(colorList[currentIndex][1])}
                  />
                </VStack>
              </Box>
            </Flex>
          </>
        ) : (
          <Box
          position="absolute" 
          top="50%" 
          left="50%" 
          transform="translate(-50%, -50%)" 
          overflow="hidden"
          width="800px" 
          height="600px"
          borderRadius="10%"
          borderWidth="1px"
          borderColor="black"
          display="flex" 
          flexDirection="column" 
          justifyContent="center"
          mt={100}
          >
            <Image
              src={warm}
              ml="150px"
              width="60%" // Adjust as needed to fit within the box or specify exact dimensions
              height="auto" // Maintain aspect ratio, adjust as needed
            />
            <Text fontWeight="bold" textAlign="left" ml="150px" mr={10} mt={4}>
              Your undertone is warm!
            </Text>
            <Text textAlign="left" ml="150px" mr={10} mt={2}>Warm tones have the following characteristics:</Text>
          
            <Text textAlign="left" ml="150px" mr={10} mt={2}>
              Their undertone is yellow-based (while cool tones have a <br/>
              blue-based undertone)
            </Text>
            <Text textAlign="left" ml="150px" mr={10} mt={2}>
              Typically shine brighter in gold jewelry than in silver jewelry
            </Text>
            <Text textAlign="left" ml="150px" mr={10} mt={2}>
              Are more harmonious with yellow-based colors such as yellow, <br/> 
              orange, and green 
              (rather than blue-based colors such as blue, <br/> purple, and pink)
            </Text>
          </Box>
        )}
        {currentIndex < 5 && (
          <Button
            position="absolute"
            colorScheme="blackAlpha"
            onClick={handleContinue}
            borderRadius={"25px"}
            mt={"30px"}
          >
            {currentIndex < 4 ? "CONTINUE" : "SUBMIT"}
          </Button>
        )}
      </Box>
      <VStack ml={4} spacing={4} style={{ zIndex: 1 }}>
        {questionStates.map((state, index) => (
          <Box key={index} className={`circle ${state}`} />
        ))}
      </VStack>
    </HStack>
  );
};

export default ColorAnalysis;
